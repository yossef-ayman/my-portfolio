"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaGithub, FaStar, FaCodeBranch, FaPencilAlt } from "react-icons/fa"
import { SiCplusplus, SiReact, SiSharp } from "react-icons/si"
import { githubData, githubRepos } from "@/data/projects"
import { socials } from "@/data/socials"
import { config } from "@/data/config"

interface GitHubSectionProps {
  isArabic: boolean
  lang: "en" | "ar"
  theme: "light" | "dark"
  isEditMode: boolean
  onEditTrigger: () => void
}

export function GitHubSection({
  isArabic,
  lang,
  theme,
  isEditMode,
  onEditTrigger,
}: GitHubSectionProps) {
  const isDark = theme === "dark"
  const username = socials.github.split("/").pop() || "yossef-ayman"

  // Get icons dynamically based on language name
  const getLangIcon = (langName: string) => {
    switch (langName.toLowerCase()) {
      case "c++":
        return <SiCplusplus className="text-[#00599C]" />
      case "c#":
        return <SiSharp className="text-[#178600]" />
      case "typescript":
      case "javascript":
      case "react":
        return <SiReact className="text-[#3178C6]" />
      default:
        return <FaGithub className="text-indigo-400" />
    }
  }

  // Stats Card parameters based on theme
  const statsThemeParam = isDark
    ? "theme=transparent&text_color=f8fafc&icon_color=818cf8&title_color=818cf8&border_color=ffffff15"
    : "theme=transparent&text_color=0f172a&icon_color=6366f1&title_color=6366f1&border_color=00000015"

  return (
    <section id="github" className="py-20 md:py-24 relative">

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 gradient-text"
          >
            {githubData.title[lang]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm font-semibold tracking-wider text-muted-foreground uppercase"
          >
            {githubData.subtitle[lang]}
          </motion.p>
        </div>

        {/* GitHub Stats Images */}
        {config.enableGitHubStats && (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Stats Card */}
            <div className="glass-card p-4 rounded-3xl border border-border/40 shadow-lg flex items-center justify-center min-h-[190px]">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&count_private=true&${statsThemeParam}`}
                alt="Youssef Ayman GitHub Stats Card"
                className="max-w-full h-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none"
                }}
              />
            </div>

            {/* Languages Card */}
            <div className="glass-card p-4 rounded-3xl border border-border/40 shadow-lg flex items-center justify-center min-h-[190px]">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&${statsThemeParam}`}
                alt="Youssef Ayman Top Languages Card"
                className="max-w-full h-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none"
                }}
              />
            </div>
          </div>
        )}

        {/* Curated Repos Grid */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-6 border-b border-border/30 pb-2">
            {githubData.reposTitle[lang]}
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {githubRepos.map((repo, idx) => (
              <a
                key={idx}
                href={`${socials.github}/${repo.name}`}
                target="_blank"
                rel="noreferrer"
                className="group glass-card p-6 rounded-2xl border border-border/40 hover:border-indigo-400/40 hover:-translate-y-1 transition-all duration-300 shadow-md flex flex-col h-full cursor-pointer justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FaGithub className="text-indigo-400 text-base" />
                    <h4 className="text-sm md:text-base font-extrabold text-foreground group-hover:text-indigo-400 transition-colors duration-300 break-words">
                      {repo.name}
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {repo.desc[lang]}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[10px] text-muted-foreground mt-4 pt-3 border-t border-border/20">
                  <div className="flex items-center gap-1.5">
                    {getLangIcon(repo.lang)}
                    <span className="font-semibold text-foreground/80">{repo.lang}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <FaStar className="text-amber-500" />
                      <span>{repo.stars}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCodeBranch />
                      <span>{repo.forks}</span>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
