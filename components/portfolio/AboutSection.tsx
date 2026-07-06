"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaServer, FaBrain, FaShieldAlt, FaGraduationCap, FaPencilAlt } from "react-icons/fa"
import { profile } from "@/data/profile"
import { education } from "@/data/education"
import { cn } from "@/lib/utils"

interface AboutSectionProps {
  isArabic: boolean
  lang: "en" | "ar"
  isEditMode: boolean
  onEditTrigger: () => void
}

export function AboutSection({ isArabic, lang, isEditMode, onEditTrigger }: AboutSectionProps) {
  // Map icons to index of pillars
  const pillarIcons = [
    <FaServer className="w-5 h-5 text-indigo-400" />,
    <FaBrain className="w-5 h-5 text-purple-400" />,
    <FaShieldAlt className="w-5 h-5 text-cyan-400" />,
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="py-20 md:py-28 relative">

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 gradient-text"
          >
            {isArabic ? "نبذة عني" : "About Me"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm font-semibold tracking-wider text-muted-foreground uppercase"
          >
            {profile.aboutSubtitle[lang]}
          </motion.p>
        </div>

        {/* Narrative bio and education details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Main Professional Biography */}
          <motion.div variants={itemVariants} className="lg:col-span-8 space-y-6">
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-border/40 shadow-xl">
              <h3 className="text-xl md:text-2xl font-extrabold text-foreground mb-4">
                {isArabic ? "منهجية هندسية متطورة" : "Engineering Resilient Software Ecosystems"}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground whitespace-pre-line">
                {profile.bio[lang]}
              </p>

              {/* Technical summary bullets */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-border/30">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">
                    {isArabic ? "التخصص الأساسي" : "Core Focus Areas"}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {isArabic 
                      ? "الأنظمة الخلفية الموزعة، التشفير الشبكي، وتكامل نماذج استدلال الذكاء الاصطناعي."
                      : "Distributed Backend Engines, Network Cryptography, and Deep Learning Model Integration."}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">
                    {isArabic ? "منهجية العمل" : "Development Philosophy"}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {isArabic
                      ? "كتابة أكواد نظيفة وآمنة وقابلة للصيانة تتوافق مع معايير الأداء والـ Scalability."
                      : "Writing clean, type-safe, and highly optimized code aligned with enterprise scaling rules."}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Details Widget - Mapped Dynamically */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-4">
            {education.map((eduItem, idx) => (
              <div key={idx} className="glass-card p-6 md:p-8 rounded-3xl border border-border/40 shadow-xl relative overflow-hidden group">
                {/* Decorative top-right color bar */}
                <div className="absolute top-0 right-0 w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400" />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <FaGraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {isArabic ? "التعليم" : "Education"}
                  </h3>
                </div>

                <p className="text-sm font-extrabold text-foreground mb-1 leading-snug">
                  {eduItem.institution[lang]}
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  {eduItem.degree[lang]}
                </p>

                <div className="flex flex-col gap-2 mt-4">
                  <span className="text-[10px] font-semibold px-3 py-1.5 rounded-xl bg-slate-900/10 dark:bg-white/5 border border-border/30 text-indigo-400 w-fit">
                    {eduItem.period[lang]}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Pillars of expertise list - Mapped Dynamically */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-center text-sm font-bold uppercase tracking-widest text-indigo-400 mb-8">
            {isArabic ? "الركائز التقنية الأساسية" : "Technical Foundation Pillars"}
          </h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {profile.pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 rounded-2xl border border-border/40 hover:border-indigo-400/40 hover:-translate-y-1 transition-all duration-300 relative group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                    {pillarIcons[index] || <FaServer className="w-5 h-5" />}
                  </div>
                  <h4 className="font-extrabold text-sm md:text-base text-foreground">
                    {pillar.title[lang]}
                  </h4>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {pillar.desc[lang]}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
