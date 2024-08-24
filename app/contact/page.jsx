"use client";

import { useState } from "react"; // Import useState
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 831 234 689 42",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mhmmdrizalllll9@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Balikpapan Kota, Kalimantan Timur",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Email sent successfully!");
    } else {
      alert("Failed to send email.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Mari bekerja sama</h3>
              <p className="text-white/60">Hubungi gue dengan mengisi form dibawah ini agar kita bisa melakukan kolaborasi serta berbagi tentang dunia pemrogramman.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" value={formData.firstname} onChange={handleChange} type="text" placeholder="Nama elu" required />
                <Input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Alamat Email" required />
                <Input name="phone" value={formData.phone} onChange={handleChange} type="text" placeholder="Nomor telephone" required />
              </div>
              <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Joki Tugas</SelectItem>
                    <SelectItem value="cst">Partner IT </SelectItem>
                    <SelectItem value="pst">All Role</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Masukan pesan elu!" className="h-[200px]" required />
              <Button size="md" className="max-w-40" type="submit">Kirim</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
