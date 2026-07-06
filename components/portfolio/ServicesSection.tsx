"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaServer, FaLaptopCode, FaDatabase, FaShieldAlt, FaBrain, FaCode, FaExchangeAlt, FaPencilAlt } from "react-icons/fa"
import { services } from "@/data/skills"

interface ServicesSectionProps {
  isArabic: boolean
  lang: "en" | "ar"
  isEditMode: boolean
  onEditTrigger: () => void
}

export function ServicesSection({ isArabic, lang, isEditMode, onEditTrigger }: ServicesSectionProps) {
  // Map icons to services
  const icons = [
    <FaServer className="w-5 h-5 text-indigo-400" />,
    <FaLaptopCode className="w-5 h-5 text-purple-400" />,
    <FaShieldAlt className="w-5 h-5 text-cyan-400" />,
    <FaBrain className="w-5 h-5 text-emerald-400" />,
    <FaDatabase className="w-5 h-5 text-amber-500" />,
    <FaCode className="w-5 h-5 text-red-400" />,
    <FaDatabase className="w-5 h-5 text-indigo-300" />,
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
    <section id="services" className="py-20 md:py-24 relative bg-slate-900/5">

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 gradient-text"
          >
            {services.title[lang]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm font-semibold tracking-wider text-muted-foreground uppercase"
          >
            {services.subtitle[lang]}
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.items.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card p-6 md:p-8 rounded-3xl border border-border/40 hover:border-indigo-400/40 hover:-translate-y-1 transition-all duration-300 shadow-lg relative overflow-hidden group"
            >
              {/* Spinning decorative background circle */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-indigo-500/5 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 mt-1">
                  {icons[idx] || <FaExchangeAlt className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-extrabold text-foreground mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                    {service.title[lang]}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {service.desc[lang]}
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
