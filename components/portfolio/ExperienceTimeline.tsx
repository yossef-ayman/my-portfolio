"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaBriefcase, FaCalendarAlt, FaChevronRight, FaPencilAlt } from "react-icons/fa"
import { experience } from "@/data/experience"
import { cn } from "@/lib/utils"

interface ExperienceTimelineProps {
  isArabic: boolean
  lang: "en" | "ar"
  isEditMode: boolean
  onEditTrigger: () => void
}

export function ExperienceTimeline({
  isArabic,
  lang,
  isEditMode,
  onEditTrigger,
}: ExperienceTimelineProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, x: isArabic ? 40 : -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="experience" className="py-20 md:py-28 relative">

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 gradient-text"
          >
            {experience.title[lang]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm font-semibold tracking-wider text-muted-foreground uppercase"
          >
            {experience.subtitle[lang]}
          </motion.p>
        </div>

        {/* Timeline Path Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative border-l border-indigo-500/20 ml-4 md:ml-32 space-y-12 py-4"
        >
          {experience.roles.map((role, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="relative pl-6 md:pl-10"
            >
              {/* Timeline bubble bullet indicator */}
              <span className="absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-950 border border-indigo-400/80 shadow-[0_0_12px_rgba(99,102,241,0.2)]">
                <span className="h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
              </span>

              {/* Mobile Timeline Date Pill */}
              <div className="md:absolute md:-left-32 md:top-1 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900/10 dark:bg-white/5 border border-border/30 text-indigo-400 text-[10px] md:text-xs font-bold w-fit uppercase mb-3 md:mb-0">
                <FaCalendarAlt className="w-3 h-3" />
                <span>{role.period[lang]}</span>
              </div>

              {/* Role Card */}
              <div className="glass-card p-6 md:p-8 rounded-3xl border border-border/40 hover:border-indigo-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group">
                
                {/* Visual glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/20 pb-4 mb-6 relative z-10">
                  <div className="text-left">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 block mb-1">
                      {role.company}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      {role.title[lang]}
                    </h3>
                  </div>
                  
                  <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 w-fit">
                    <FaBriefcase className="w-5 h-5" />
                  </div>
                </div>

                {/* Achievements List */}
                <ul className="space-y-3.5 mb-8 relative z-10">
                  {role.achievements[lang].map((ach, aIdx) => (
                    <li key={aIdx} className="flex gap-2.5 items-start text-xs md:text-sm text-muted-foreground leading-relaxed">
                      <FaChevronRight className={cn("w-3 h-3 text-indigo-400 mt-1 flex-shrink-0 transition-transform", isArabic && "rotate-180")} />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Quantified Role Metrics Badge bar */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-border/20 relative z-10">
                  {role.metrics.map((met, mIdx) => (
                    <div
                      key={mIdx}
                      className="px-4 py-2 bg-slate-950/40 rounded-xl border border-border/30 text-center min-w-[100px]"
                    >
                      <span className="text-lg font-extrabold text-indigo-400 block font-sans tracking-tight">
                        {met.value}
                      </span>
                      <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider block mt-0.5">
                        {met.label[lang]}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
