"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaGraduationCap, FaCode, FaServer, FaShieldAlt, FaRocket, FaPencilAlt } from "react-icons/fa"
import { profile } from "@/data/profile"

interface JourneySectionProps {
  isArabic: boolean
  lang: "en" | "ar"
  isEditMode: boolean
  onEditTrigger: () => void
}

export function JourneySection({ isArabic, lang, isEditMode, onEditTrigger }: JourneySectionProps) {
  // Map icons to journey index
  const icons = [
    <FaGraduationCap key="grad" className="w-4 h-4" />,
    <FaCode key="code" className="w-4 h-4" />,
    <FaServer key="serv" className="w-4 h-4" />,
    <FaShieldAlt key="shield" className="w-4 h-4" />,
    <FaRocket key="rocket" className="w-4 h-4" />,
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const journey = profile.journey

  return (
    <section id="journey" className="py-20 md:py-24 relative bg-slate-900/5">

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 gradient-text"
          >
            {journey.title[lang]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm font-semibold tracking-wider text-muted-foreground uppercase"
          >
            {journey.subtitle[lang]}
          </motion.p>
        </div>

        {/* Timeline roadmap layout */}
        <div className="relative border-l-2 border-indigo-500/25 dark:border-indigo-500/10 pl-6 md:pl-10 ml-4 md:ml-8 space-y-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {journey.items.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Timeline node */}
                <span className="absolute -left-[38px] md:-left-[54px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 border-2 border-indigo-500 text-indigo-400 shadow-md shadow-indigo-500/10 z-10">
                  {icons[idx] || <FaCode />}
                </span>

                {/* Journey entry card */}
                <motion.div
                  variants={itemVariants}
                  className="glass-card p-5 md:p-6 rounded-2xl border border-border/40 shadow-lg hover:border-indigo-400/35 transition-all duration-300 relative"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 w-fit">
                      {item.year}
                    </span>
                    <h3 className="text-sm md:text-base font-extrabold text-foreground">
                      {item.title[lang]}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {item.desc[lang]}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
