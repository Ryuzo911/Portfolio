"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPhp} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "Tentang Gue",
  description: "Gue adalah seorang back-end developer yang sangat passionat dan berfikir inovatif. Gue bersedia belajar dan mengembangkan diri secara terus menerus.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Muhammad Rizal",
    },

    {
      fieldName: "Phone",
      fieldValue: "(+62) 831 234 694 2",
    },
    {
      fieldName: "Pengalaman",
      fieldValue: "1+ Tahun",
    },
    {
      fieldName: "Email",
      fieldValue: "mhmmdrizalllll9@gmail.com",
    },
    {
      fieldName: "Kebangsaan",
      fieldValue: "Indonesia",
    },
    {
      fieldName: "Ras",
      fieldValue: "Malayan-Mongoloid",
    }
  ]
}

const pengalaman = {
  icon: "/assets/briefecase.png",
  title: "Pengalaman Gue",
  description: "Berikut adalah beberapa pengalaman gue selama ini dan gue harap dikemudian hari gue mendapatkan lebih banyak pengalaman dari yang gue miliki saat ini .",
  items: [
    {
      perusahaan: "Kedai Kopi BJ",
      posisi: "Barista",
      waktu: "Maret2024 - Juli2024"
    },
    {
      perusahaan: "PT Alger Etam Jaya",
      posisi: "Barista",
      waktu: "Juli2024"
    },
    {
      perusahaan: "T2Speed Garage",
      posisi: "Mekanik",
      waktu: "2023"
    },
  ]
}

const education = {
  icon: "/assets/graduation-cap.png",
  title: "Edukasi Gue",
  description: "Berikut merupakan riwayat edukasi yang gue dapatkan selama gue hidup dan harapan gue kedepannya yaitu gue terus menerus mendapatkan ilmu yang bermanfaat dari berbagai sumber.",
  items: [
    {
      sekolah: "SD N 1 Kuaro",
      jurusan: "Public",
      waktu: "2010 - 2015"
    },
    {
      sekolah: "SMP N 1 Kuaro",
      jurusan: "Public",
      waktu: "2015 - 2017"
    },
    {
      sekolah: "SMA N 1 Kuaro",
      jurusan: "IPA",
      waktu: "2020 - 2023"
    },
    {
      sekolah: "Internet",
      jurusan: "Web Developer",
      waktu: "2017 - Sekarang"
    }
  ]
}

const skills = {
  title: "Skill Gue",
  description: "Berikut merupakan beberapa skill yang gue dapat saat belajar di dunia pemrograman ini walaupun gue masih baru belajar dan skill gue masih tergolong pemula namun gue ga berhenti sampai situ saja dan akan terus berkembang.",
  skillList: [
    {
      icon: <FaPhp />,
      name: "php",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },{
      icon: <FaJs />,
      name: "javascript",
    },{
      icon: <FaReact />,
      name: "react.js",
    },{
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
  ]
}

const Resume = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="pengalaman" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="pengalaman">Pengalaman</TabsTrigger>
            <TabsTrigger value="education">Edukasi</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">Tentang Gue</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="pengalaman" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{pengalaman.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{pengalaman.description}</p>
                <ScrollArea className="h-[400px]"> 
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {pengalaman.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.waktu}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.posisi}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.perusahaan}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]"> 
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.waktu}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.jurusan}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.sekolah}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index)=> {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize ">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=> {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60 ">{item.fieldName}</span>
                        <span className="text-xl ">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
          </motion.div>
  )
}

export default Resume

