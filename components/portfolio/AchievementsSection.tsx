"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaAward, FaNetworkWired, FaBrain, FaServer, FaCheckCircle, FaUserCheck, FaPencilAlt } from "react-icons/fa"
import { achievements } from "@/data/skills"

interface AchievementsSectionProps {
  isArabic: boolean
  lang: "en" | "ar"
  isEditMode: boolean
  onEditTrigger: () => void
}

export function AchievementsSection({ isArabic, lang, isEditMode, onEditTrigger }: AchievementsSectionProps) {
  // Map icons to achievements
  const icons = [
    <FaNetworkWired className="w-5 h-5 text-indigo-400" />,
    <FaBrain className="w-5 h-5 text-purple-400" />,
    <FaServer className="w-5 h-5 text-cyan-400" />,
    <FaCheckCircle className="w-5 h-5 text-emerald-400" />,
    <FaUserCheck className="w-5 h-5 text-amber-500" />,
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="achievements" className="py-20 md:py-24 relative">

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-3 text-xs font-bold text-indigo-400 tracking-wider uppercase"
          >
            {isArabic ? "أبرز المحطات والنجاحات" : "Milestone Badges"}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 gradient-text"
          >
            {achievements.title[lang]}
          </motion.h2>
        </div>

        {/* Grid Lists */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card p-6 rounded-3xl border border-border/40 hover:border-indigo-400/40 hover:-translate-y-1 transition-all duration-300 shadow-lg relative overflow-hidden group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 mt-1">
                  {icons[idx] || <FaAward className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-extrabold text-foreground mb-1">
                    {item.title[lang]}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc[lang]}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
