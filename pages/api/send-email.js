// pages/api/send-email.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstname, email, phone, service, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    let mailOptions = {
      from: email,
      to: "recipient-email@gmail.com", 
      subject: `Message from ${firstname}`,
      text: `Name: ${firstname}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`,
    };

    try {
      let info = await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent: " + info.response });
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
