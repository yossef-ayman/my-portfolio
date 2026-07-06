"use client"

import React from "react"
import { motion } from "framer-motion"
import { SiGo, SiKubernetes, SiRust } from "react-icons/si"
import { currentLearning } from "@/data/skills"
import { FaPencilAlt } from "react-icons/fa"

interface CurrentLearningProps {
  isArabic: boolean
  lang: "en" | "ar"
  isEditMode: boolean
  onEditTrigger: () => void
}

export function CurrentLearning({ isArabic, lang, isEditMode, onEditTrigger }: CurrentLearningProps) {
  // Map icons to current learning
  const icons = [
    <SiGo key="go" className="w-8 h-8 text-[#00ADD8]" />,
    <SiKubernetes key="k8s" className="w-8 h-8 text-[#326CE5]" />,
    <SiRust key="rust" className="w-8 h-8 text-foreground" />,
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
    <section id="learning" className="py-20 md:py-24 relative bg-slate-900/5">

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 gradient-text"
          >
            {currentLearning.title[lang]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm font-semibold tracking-wider text-muted-foreground uppercase"
          >
            {currentLearning.subtitle[lang]}
          </motion.p>
        </div>

        {/* Learning Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {currentLearning.items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card p-6 md:p-8 rounded-3xl border border-border/40 hover:border-indigo-400/40 hover:-translate-y-1 transition-all duration-300 shadow-lg text-center flex flex-col items-center group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400" />
              
              <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 mb-4 mt-2">
                {icons[idx] || <SiGo className="w-8 h-8" />}
              </div>

              <h3 className="text-base md:text-lg font-extrabold text-foreground mb-2">
                {item.name}
              </h3>
              
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {item.desc[lang]}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
