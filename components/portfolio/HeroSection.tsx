"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaDownload, FaChevronRight, FaPencilAlt } from "react-icons/fa"
import { SiCplusplus, SiReact, SiNodedotjs, SiDocker, SiPython, SiSharp } from "react-icons/si"
import { profile } from "@/data/profile"
import { socials } from "@/data/socials"
import { config } from "@/data/config"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  isArabic: boolean
  lang: "en" | "ar"
  isEditMode: boolean
  onEditTrigger: () => void
}

// Custom Counter Component
function StatCounter({ target, label, suffix = "", enableAnimations }: { target: number; label: string; suffix?: string; enableAnimations: boolean }) {
  const [count, setCount] = useState(enableAnimations ? 0 : target)

  useEffect(() => {
    if (!enableAnimations) return
    let start = 0
    const duration = 1500
    const stepTime = Math.abs(Math.floor(duration / target))
    
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= target) {
        clearInterval(timer)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [target, enableAnimations])

  return (
    <div className="flex flex-col items-center p-4 rounded-2xl glass-card border border-border/40 min-w-[120px] text-center shadow-lg hover:border-indigo-500/30 transition-all duration-300">
      <span className="text-3xl md:text-4xl font-extrabold text-indigo-400 font-sans tracking-tight">
        {count}{suffix}
      </span>
      <span className="text-[10px] md:text-xs font-semibold text-muted-foreground uppercase mt-1 tracking-wider">
        {label}
      </span>
    </div>
  )
}

export function HeroSection({ isArabic, lang, isEditMode, onEditTrigger }: HeroSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const roles = profile.titles[lang]

  useEffect(() => {
    if (!config.enableTypingAnimation) {
      setCurrentText(roles[0])
      return
    }

    let timer: NodeJS.Timeout
    const handleType = () => {
      const fullText = roles[roleIndex]
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        setTypingSpeed(100)
        
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 1500)
          return
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        setTypingSpeed(50)

        if (currentText === "") {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }

    timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, roleIndex, roles, typingSpeed])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const offset = 80
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = el.getBoundingClientRect().top
    const offsetPosition = elementRect - bodyRect - offset
    window.scrollTo({ top: offsetPosition, behavior: "smooth" })
  }

  // Label translations
  const labels = {
    en: {
      expLabel: "Years of Experience",
      projLabel: "Completed Projects",
      techLabel: "Core Technologies",
      btnDownloadCV: "Download CV",
      btnViewProjects: "View Projects",
      btnContactMe: "Contact Me"
    },
    ar: {
      expLabel: "سنوات من الخبرة",
      projLabel: "مشاريع مكتملة",
      techLabel: "تقنيات رئيسية",
      btnDownloadCV: "تحميل السيرة الذاتية",
      btnViewProjects: "عرض المشاريع",
      btnContactMe: "تواصل معي"
    }
  }

  const l = labels[lang]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:pb-20 overflow-hidden"
    >

      {/* Floating Tech Stack Background Icons */}
      {config.enableBackgroundAnimations && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* C++ floating orbital */}
          <div className="absolute top-1/4 left-10 md:left-24 text-3xl md:text-5xl text-blue-500/10 dark:text-blue-500/20 float-tech-1">
            <SiCplusplus />
          </div>
          {/* C# floating orbital */}
          <div className="absolute top-2/3 left-16 md:left-36 text-3xl md:text-5xl text-purple-500/10 dark:text-purple-500/20 float-tech-2">
            <SiSharp />
          </div>
          {/* React floating orbital */}
          <div className="absolute top-1/3 right-12 md:right-28 text-3xl md:text-5xl text-cyan-400/10 dark:text-cyan-400/20 float-tech-3">
            <SiReact />
          </div>
          {/* Docker floating orbital */}
          <div className="absolute bottom-1/4 right-20 md:right-40 text-3xl md:text-5xl text-sky-500/10 dark:text-sky-500/20 float-tech-1">
            <SiDocker />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left column: Text details */}
        <div className={cn("flex-1 text-center lg:text-left flex flex-col items-center lg:items-start", isArabic && "lg:text-right lg:items-end")}>
          
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-semibold text-emerald-500 uppercase tracking-widest">
              {profile.availabilityBadge[lang]}
            </span>
          </motion.div>

          {/* Heading intro */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-indigo-400 mb-2"
          >
            {profile.greeting[lang]}
          </motion.p>

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-foreground leading-tight"
          >
            {profile.name[lang]}
          </motion.h2>

          {/* Typewriter titles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-10 md:h-12 flex items-center justify-center lg:justify-start mb-6"
          >
            <span className={cn(
              "text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse pr-2 h-8 flex items-center",
              config.enableTypingAnimation && "border-r-2 border-indigo-400 pr-2 pr-2"
            )}>
              {currentText}
            </span>
          </motion.div>

          {/* Value Prop Bio */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm md:text-base leading-relaxed text-muted-foreground max-w-lg mb-8"
          >
            {profile.description[lang]}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10 justify-center lg:justify-start"
          >
            {/* View Projects */}
            {config.enableProjects && (
              <button
                onClick={() => scrollToSection("featured")}
                className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{l.btnViewProjects}</span>
                <FaChevronRight className={cn("w-3 h-3 transition-transform", isArabic && "rotate-180")} />
              </button>
            )}

            {/* Download CV */}
            <a
              href="/cv.pdf"
              download
              className="px-6 py-3 rounded-xl bg-slate-900/10 dark:bg-white/5 hover:bg-slate-900/20 dark:hover:bg-white/10 text-foreground font-semibold text-sm tracking-wider uppercase transition-all duration-300 border border-border hover:border-indigo-400/40 cursor-pointer flex items-center justify-center gap-2"
            >
              <FaDownload className="w-3.5 h-3.5 text-indigo-400" />
              <span>{l.btnDownloadCV}</span>
            </a>

            {/* Contact Me */}
            {config.enableContact && (
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 rounded-xl bg-slate-900/10 dark:bg-white/5 hover:bg-slate-900/20 dark:hover:bg-white/10 text-foreground font-semibold text-sm tracking-wider uppercase transition-all duration-300 border border-border hover:border-indigo-400/40 cursor-pointer flex items-center justify-center"
              >
                <span>{l.btnContactMe}</span>
              </button>
            )}
          </motion.div>

          {/* Core Tech Stack Icons Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-3 text-muted-foreground/80 text-sm font-semibold uppercase tracking-wider"
          >
            <span>{l.techLabel}:</span>
            <div className="flex items-center gap-3 text-lg md:text-xl text-indigo-400">
              <span className="hover:text-blue-500 hover:scale-110 transition-all cursor-help" title="C++"><SiCplusplus /></span>
              <span className="hover:text-purple-500 hover:scale-110 transition-all cursor-help" title="C#"><SiSharp /></span>
              <span className="hover:text-cyan-400 hover:scale-110 transition-all cursor-help" title="React"><SiReact /></span>
              <span className="hover:text-emerald-500 hover:scale-110 transition-all cursor-help" title="Node.js"><SiNodedotjs /></span>
              <span className="hover:text-blue-400 hover:scale-110 transition-all cursor-help" title="Docker"><SiDocker /></span>
              <span className="hover:text-yellow-400 hover:scale-110 transition-all cursor-help" title="Python"><SiPython /></span>
            </div>
          </motion.div>
        </div>

        {/* Right column: Image representation & stats */}
        <div className="flex-1 flex flex-col items-center gap-10">
          
          {/* Circle Avatar with Glowing border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            {/* Outer spinning ring */}
            {config.enableBackgroundAnimations && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 animate-spin-slow opacity-80" />
            )}
            
            {/* Inner background masking */}
            <div className="absolute inset-[3px] rounded-full bg-slate-950" />

            {/* Avatar Image Wrapper */}
            <div className="absolute inset-[8px] rounded-full overflow-hidden bg-slate-900 border border-white/5 flex items-center justify-center">
              <img
                src={profile.avatarUrl}
                alt={`${profile.name[lang]} profile headshot`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534972195531-d756b9bda9f2?w=500&auto=format&fit=crop&q=80"
                }}
              />
            </div>

            {/* Floating micro indicators */}
            {config.enableBackgroundAnimations && (
              <>
                <div className="absolute -top-2 -right-2 p-3 bg-slate-900 rounded-2xl border border-border/80 shadow-lg text-lg text-cyan-400 animate-bounce delay-150">
                  <SiReact />
                </div>
                <div className="absolute -bottom-2 -left-2 p-3 bg-slate-900 rounded-2xl border border-border/80 shadow-lg text-lg text-blue-500 float-tech-2">
                  <SiCplusplus />
                </div>
              </>
            )}
          </motion.div>

          {/* Stats counters */}
          {config.enableCounters && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4 md:gap-6 flex-wrap justify-center"
            >
              <StatCounter target={profile.stats.experience} label={l.expLabel} suffix="+" enableAnimations={config.enableBackgroundAnimations} />
              <StatCounter target={profile.stats.projects} label={l.projLabel} suffix="+" enableAnimations={config.enableBackgroundAnimations} />
              <StatCounter target={profile.stats.technologies} label={l.techLabel} suffix="+" enableAnimations={config.enableBackgroundAnimations} />
            </motion.div>
          )}
        </div>

      </div>
    </section>
  )
}
