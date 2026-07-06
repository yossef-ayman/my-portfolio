"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaJava, FaServer, FaCode, FaPencilAlt } from "react-icons/fa"
import { 
  SiCplusplus, SiPython, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, 
  SiDotnet, SiPostgresql, SiMongodb, SiDocker, SiLinux, 
  SiGit, SiPytorch, SiRedis, SiSharp
} from "react-icons/si"
import { techStackData } from "@/data/skills"

interface TechStackSectionProps {
  isArabic: boolean
  lang: "en" | "ar"
  isEditMode: boolean
  onEditTrigger: () => void
}

interface TechItem {
  name: string
  icon: React.ReactNode
  color: string
}

export function TechStackSection({ isArabic, lang, isEditMode, onEditTrigger }: TechStackSectionProps) {
  const techs: TechItem[] = [
    { name: "C++", icon: <SiCplusplus />, color: "hover:text-[#00599C] hover:border-[#00599C]/30" },
    { name: "C#", icon: <SiSharp />, color: "hover:text-[#178600] hover:border-[#178600]/30" },
    { name: "Python", icon: <SiPython />, color: "hover:text-[#3776AB] hover:border-[#3776AB]/30" },
    { name: "JavaScript", icon: <SiJavascript />, color: "hover:text-[#F7DF1E] hover:border-[#F7DF1E]/30" },
    { name: "TypeScript", icon: <SiTypescript />, color: "hover:text-[#3178C6] hover:border-[#3178C6]/30" },
    { name: "Java", icon: <FaJava />, color: "hover:text-[#007396] hover:border-[#007396]/30" },
    { name: "React", icon: <SiReact />, color: "hover:text-[#61DAFB] hover:border-[#61DAFB]/30" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "hover:text-foreground hover:border-foreground/30" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "hover:text-[#06B6D4] hover:border-[#06B6D4]/30" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "hover:text-[#339933] hover:border-[#339933]/30" },
    { name: ".NET Core", icon: <SiDotnet />, color: "hover:text-[#512BD4] hover:border-[#512BD4]/30" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "hover:text-[#4169E1] hover:border-[#4169E1]/30" },
    { name: "MongoDB", icon: <SiMongodb />, color: "hover:text-[#47A248] hover:border-[#47A248]/30" },
    { name: "Redis", icon: <SiRedis />, color: "hover:text-[#DC382D] hover:border-[#DC382D]/30" },
    { name: "Docker", icon: <SiDocker />, color: "hover:text-[#2496ED] hover:border-[#2496ED]/30" },
    { name: "Linux", icon: <SiLinux />, color: "hover:text-[#FCC624] hover:border-[#FCC624]/30" },
    { name: "Git", icon: <SiGit />, color: "hover:text-[#F05032] hover:border-[#F05032]/30" },
    { name: "PyTorch", icon: <SiPytorch />, color: "hover:text-[#EE4C2C] hover:border-[#EE4C2C]/30" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
  }

  return (
    <section id="tech-stack" className="py-20 md:py-24 relative">

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 gradient-text"
          >
            {techStackData.title[lang]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm font-semibold tracking-wider text-muted-foreground uppercase"
          >
            {techStackData.subtitle[lang]}
          </motion.p>
        </div>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
        >
          {techs.map((tech, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`glass-card p-4 rounded-2xl border border-border/40 hover:-translate-y-1 hover:bg-slate-900/20 dark:hover:bg-white/5 transition-all duration-300 flex flex-col items-center justify-center gap-2 group text-muted-foreground ${tech.color}`}
            >
              <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-foreground">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
