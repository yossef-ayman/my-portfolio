"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaJava, FaCode, FaBrain, FaCogs, FaShieldAlt, FaKey, FaNetworkWired, FaSearch, FaServer, FaRoute, FaDatabase, FaDesktop, FaPencilAlt } from "react-icons/fa"
import { 
  SiCplusplus, SiPython, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiNodedotjs, 
  SiDotnet, SiExpress, SiPostgresql, SiMongodb, 
  SiSqlite, SiDocker, SiGit, SiLinux, SiPostman, SiFigma, SiSharp
} from "react-icons/si"
import { skillsData } from "@/data/skills"
import { cn } from "@/lib/utils"

interface SkillsSectionProps {
  isArabic: boolean
  lang: "en" | "ar"
  isEditMode: boolean
  onEditTrigger: () => void
}

// Icon mapper for technical skills
function getSkillIcon(name: string) {
  const iconMap: { [key: string]: React.ReactNode } = {
    "C++": <SiCplusplus className="text-[#00599C]" />,
    "C#": <SiSharp className="text-[#178600]" />,
    "Python": <SiPython className="text-[#3776AB]" />,
    "JavaScript": <SiJavascript className="text-[#F7DF1E] bg-black/10 rounded-sm" />,
    "TypeScript": <SiTypescript className="text-[#3178C6]" />,
    "Java": <FaJava className="text-[#007396]" />,
    "React": <SiReact className="text-[#61DAFB]" />,
    "Next.js": <SiNextdotjs className="text-foreground" />,
    "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
    "HTML5/CSS3": <SiHtml5 className="text-[#E34F26]" />,
    "Node.js": <SiNodedotjs className="text-[#339933]" />,
    ".NET / ASP.NET": <SiDotnet className="text-[#512BD4]" />,
    "Express.js": <SiExpress className="text-[#000000] dark:text-white" />,
    "REST APIs": <FaCode className="text-[#6366f1]" />,
    "React Native": <SiReact className="text-[#61DAFB]" />,
    "PostgreSQL": <SiPostgresql className="text-[#4169E1]" />,
    "MongoDB": <SiMongodb className="text-[#47A248]" />,
    "SQL Server": <FaDatabase className="text-[#CC2927]" />,
    "SQLite": <SiSqlite className="text-[#003B57]" />,
    "ONNX Runtime": <FaBrain className="text-[#00599C]" />,
    "Reinforcement Learning": <FaBrain className="text-[#a855f7]" />,
    "Neural Networks": <FaCogs className="text-[#6366f1]" />,
    "Anomaly Detection": <FaShieldAlt className="text-[#22d3ee]" />,
    "AES-256-GCM / X25519": <FaKey className="text-[#fbbf24]" />,
    "VPN Gateways": <FaNetworkWired className="text-[#06b6d4]" />,
    "Intrusion Detection": <FaShieldAlt className="text-[#f87171]" />,
    "Network Auditing": <FaSearch className="text-[#38bdf8]" />,
    "TCP/IP & UDP": <FaServer className="text-[#818cf8]" />,
    "Docker Networking": <SiDocker className="text-[#2496ED]" />,
    "TAP/TUN Devices": <FaNetworkWired className="text-[#a78bfa]" />,
    "Routing Protocols": <FaRoute className="text-[#34d399]" />,
    "Docker": <SiDocker className="text-[#2496ED]" />,
    "Git / GitHub Actions": <SiGit className="text-[#F05032]" />,
    "Linux / Bash": <SiLinux className="text-foreground" />,
    "VS Code": <FaCode className="text-[#007ACC]" />,
    "Visual Studio": <FaDesktop className="text-[#5C2D91]" />,
    "Postman": <SiPostman className="text-[#FF6C37]" />,
    "Figma": <SiFigma className="text-[#F24E1E]" />,
  }

  return iconMap[name] || <FaCode className="text-indigo-400" />
}

// Helper to style badge based on proficiency
function getProficiencyStyle(level: string) {
  const styles: { [key: string]: string } = {
    Expert: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    Advanced: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    Intermediate: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    Learning: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  }
  return styles[level] || "bg-slate-900/10 text-muted-foreground"
}

export function SkillsSection({ isArabic, lang, isEditMode, onEditTrigger }: SkillsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const categories = skillsData.categories
  const categoryKeys = Object.keys(categories)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <section id="skills" className="py-20 md:py-28 relative">

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 gradient-text"
          >
            {skillsData.title[lang]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm font-semibold tracking-wider text-muted-foreground uppercase"
          >
            {skillsData.subtitle[lang]}
          </motion.p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border border-border/30 cursor-pointer",
              activeCategory === "all"
                ? "bg-indigo-500 text-white border-indigo-500 shadow-md shadow-indigo-500/10"
                : "text-muted-foreground hover:bg-slate-900/10 dark:hover:bg-white/5 hover:text-foreground"
            )}
          >
            {isArabic ? "الكل" : "Show All"}
          </button>
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border border-border/30 cursor-pointer",
                activeCategory === key
                  ? "bg-indigo-500 text-white border-indigo-500 shadow-md shadow-indigo-500/10"
                  : "text-muted-foreground hover:bg-slate-900/10 dark:hover:bg-white/5 hover:text-foreground"
              )}
            >
              {categories[key].title[lang]}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryKeys.map((catKey) => {
            const isVisible = activeCategory === "all" || activeCategory === catKey
            if (!isVisible) return null

            const cat = categories[catKey]
            return (
              <motion.div
                key={catKey}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 rounded-3xl border border-border/40 hover:border-indigo-400/40 transition-all duration-300 flex flex-col shadow-lg"
              >
                <h3 className="text-base font-extrabold text-foreground mb-4 border-b border-border/20 pb-2">
                  {cat.title[lang]}
                </h3>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3 flex-grow"
                >
                  {cat.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      variants={cardVariants}
                      className="flex items-center justify-between p-2 rounded-xl bg-slate-950/20 dark:bg-slate-950/40 border border-border/20 hover:border-indigo-500/15 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">{getSkillIcon(skill.name)}</span>
                        <span className="text-xs md:text-sm font-semibold text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <span className={cn(
                        "text-[9px] font-extrabold px-2 py-0.5 rounded border uppercase tracking-wider",
                        getProficiencyStyle(skill.level)
                      )}>
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
