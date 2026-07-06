"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaExternalLinkAlt, FaGithub, FaTimes, FaSearch, FaArrowRight, FaPencilAlt } from "react-icons/fa"
import { projects, projectsData, ProjectItem } from "@/data/projects"
import { config } from "@/data/config"
import { cn } from "@/lib/utils"

interface ProjectsSectionProps {
  isArabic: boolean
  lang: "en" | "ar"
  isEditMode: boolean
  onEditTrigger: () => void
}

export function ProjectsSection({ isArabic, lang, isEditMode, onEditTrigger }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<"all" | "systems" | "web">("all")
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  // Filter items dynamically
  const filteredItems = projects.filter(
    (item) => filter === "all" || item.category === filter
  )

  // Keyboard trap for closing modal on Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null)
      }
    }
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedProject])

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-slate-900/5">

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 gradient-text"
          >
            {projectsData.title[lang]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm font-semibold tracking-wider text-muted-foreground uppercase"
          >
            {projectsData.subtitle[lang]}
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={cn(
              "px-4 py-2 rounded-xl text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer",
              filter === "all"
                ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/10"
                : "text-muted-foreground hover:bg-slate-900/10 dark:hover:bg-white/5 hover:text-foreground"
            )}
          >
            {projectsData.filterAll[lang]}
          </button>
          <button
            onClick={() => setFilter("systems")}
            className={cn(
              "px-4 py-2 rounded-xl text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer",
              filter === "systems"
                ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/10"
                : "text-muted-foreground hover:bg-slate-900/10 dark:hover:bg-white/5 hover:text-foreground"
            )}
          >
            {isArabic ? "أنظمة وخدمات" : "Systems & Network Tools"}
          </button>
          <button
            onClick={() => setFilter("web")}
            className={cn(
              "px-4 py-2 rounded-xl text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer",
              filter === "web"
                ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/10"
                : "text-muted-foreground hover:bg-slate-900/10 dark:hover:bg-white/5 hover:text-foreground"
            )}
          >
            {isArabic ? "تطبيقات الويب" : "Web Applications"}
          </button>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden glass-card border border-border/40 shadow-xl flex flex-col h-full hover:border-indigo-400/40 transition-all duration-300"
              >
                {/* Image header thumbnail */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={`${project.details.title[lang]} thumbnail`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-80"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80"
                    }}
                  />
                  {/* Glass layout tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/70 border border-white/10 backdrop-blur-md text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                    {project.category === "systems" ? (isArabic ? "نظام" : "System") : (isArabic ? "ويب" : "Web")}
                  </span>

                  {/* Hover magnifying overlay */}
                  <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="p-3.5 rounded-full bg-indigo-500 text-white text-lg shadow-lg">
                      <FaSearch />
                    </span>
                  </div>
                </div>

                {/* Details Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-extrabold text-foreground mb-1">
                    {project.details.title[lang]}
                  </h3>
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-3 block">
                    {project.details.subtitle[lang]}
                  </span>

                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-3 mb-6 leading-relaxed flex-grow">
                    {project.details.problem[lang]}
                  </p>

                  {/* Technical chips stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.details.tech.slice(0, 4).map((techName, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-900/10 dark:bg-white/5 border border-border/30 text-indigo-400"
                      >
                        {techName}
                      </span>
                    ))}
                  </div>

                  {/* Action Link button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 rounded-xl bg-slate-900/10 dark:bg-white/5 hover:bg-slate-900/20 dark:hover:bg-white/10 border border-border/30 hover:border-indigo-400/40 font-bold text-xs tracking-wider uppercase text-foreground transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{isArabic ? "دراسة الحالة" : "Case Study Deep-Dive"}</span>
                    <FaArrowRight className={cn("w-3 h-3 text-indigo-400 transition-transform group-hover:translate-x-0.5", isArabic && "rotate-180")} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Case Study Dialog Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Dark blur backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              />

              {/* Modal container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative bg-slate-950 border border-border/80 w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl p-6 md:p-10 z-10 text-foreground scrollbar-thin scrollbar-thumb-indigo-500/20"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-xl bg-slate-900/20 hover:bg-white/10 border border-white/10 text-foreground transition-all duration-200 cursor-pointer z-10"
                  aria-label="Close case study details"
                >
                  <FaTimes className="w-4 h-4" />
                </button>

                {/* Banner Header Image */}
                <div className="relative h-44 md:h-64 w-full rounded-2xl overflow-hidden bg-slate-900 border border-white/5 mb-8">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.details.title[lang]}
                    className="w-full h-full object-cover opacity-70"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:right-8 right-6 md:left-8">
                    <h2 className="text-xl md:text-3xl font-black text-white mb-1">
                      {selectedProject.details.title[lang]}
                    </h2>
                    <span className="text-[10px] md:text-xs font-bold text-indigo-400 uppercase tracking-widest">
                      {selectedProject.details.subtitle[lang]}
                    </span>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column: Details narrative */}
                  <div className="md:col-span-8 space-y-6">
                    {/* Problem card */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                        {isArabic ? "المشكلة و التحديات" : "The Core Problem"}
                      </h4>
                      <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">
                        {selectedProject.details.problem[lang]}
                      </p>
                    </div>

                    {/* Solution card */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                        {isArabic ? "الحل المصمم" : "The Engineered Solution"}
                      </h4>
                      <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">
                        {selectedProject.details.solution[lang]}
                      </p>
                    </div>

                    {/* Contribution card */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">
                        {isArabic ? "المساهمة الشخصية" : "My Personal Contributions"}
                      </h4>
                      <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">
                        {selectedProject.details.contribution[lang]}
                      </p>
                    </div>

                    {/* Obstacles card */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500">
                        {isArabic ? "أبرز العوائق الفنية" : "Key Technical Challenges"}
                      </h4>
                      <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">
                        {selectedProject.details.challenges[lang]}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Spec cards */}
                  <div className="md:col-span-4 space-y-6">
                    {/* Tech stack box */}
                    <div className="p-5 rounded-2xl border border-border/30 bg-slate-900/40 space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                        {isArabic ? "التقنيات المستخدمة" : "Tech Stack Specs"}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.details.tech.map((techName, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-950 border border-white/5 text-foreground"
                          >
                            {techName}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key features box */}
                    <div className="p-5 rounded-2xl border border-border/30 bg-slate-900/40 space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                        {isArabic ? "الميزات الرئيسية" : "Core System Features"}
                      </h4>
                      <ul className="space-y-1.5">
                        {selectedProject.details.features[lang].map((feature, fIdx) => (
                          <li key={fIdx} className="text-[11px] text-muted-foreground flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Measurable Results box */}
                    <div className="p-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                        {isArabic ? "النتائج المحققة" : "Measurable Results"}
                      </h4>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        {selectedProject.details.results[lang]}
                      </p>
                    </div>

                    {/* External Buttons links */}
                    <div className="flex gap-2 w-full">
                      {selectedProject.details.github && (
                        <a
                          href={selectedProject.details.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 py-2.5 rounded-xl bg-slate-900 border border-border/60 hover:bg-slate-900/80 text-foreground text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                        >
                          <FaGithub />
                          <span>Code</span>
                        </a>
                      )}
                      {selectedProject.details.link && (
                        <a
                          href={selectedProject.details.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 py-2.5 rounded-xl bg-indigo-500 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md shadow-indigo-500/10 hover:bg-indigo-600"
                        >
                          <FaExternalLinkAlt />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
