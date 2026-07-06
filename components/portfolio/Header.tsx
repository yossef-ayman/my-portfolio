"use client"

import React, { useEffect, useState } from "react"
import { Menu, X, Globe, Sun, Moon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { profile } from "@/data/profile"
import { config } from "@/data/config"

interface HeaderProps {
  isArabic: boolean
  lang: "en" | "ar"
  setLang: React.Dispatch<React.SetStateAction<"en" | "ar">>
  theme: "light" | "dark"
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>
}

export function Header({
  isArabic,
  lang,
  setLang,
  theme,
  setTheme,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Generate dynamic navigation items based on configuration flags
  const navItems = [
    ...(config.enableHero ? [{ id: "home", label: isArabic ? "الرئيسية" : "Home" }] : []),
    { id: "about", label: isArabic ? "عني" : "About" },
    ...(config.enableHero ? [{ id: "featured", label: isArabic ? "المشروع المميز" : "Featured" }] : []),
    ...(config.enableExperience ? [{ id: "experience", label: isArabic ? "الخبرة" : "Experience" }] : []),
    ...(config.enableProjects ? [{ id: "projects", label: isArabic ? "المشاريع" : "Projects" }] : []),
    { id: "skills", label: isArabic ? "المهارات" : "Skills" },
    ...(config.enableCertificates ? [{ id: "certificates", label: isArabic ? "الشهادات" : "Credentials" }] : []),
    ...(config.enableContact ? [{ id: "contact", label: isArabic ? "التواصل" : "Contact" }] : []),
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Simple scroll spy logic
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    const offset = 80 // Navbar height offset
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = el.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }

  const toggleLanguage = () => {
    setLang((l) => (l === "en" ? "ar" : "en"))
  }

  const toggleTheme = () => {
    setTheme((th) => (th === "light" ? "dark" : "light"))
  }

  const localizedName = profile.name[lang]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "glass-card border-b border-border/80 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo / Branding */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1.5px] shadow-indigo-500/10 shadow-lg group-hover:shadow-indigo-500/20 transition-all duration-300">
            <div className="flex items-center justify-center w-full h-full rounded-[10px] bg-slate-950 text-white font-bold text-sm tracking-wider">
              YA
            </div>
          </div>
          <span className="text-base md:text-lg font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:text-primary transition-all duration-300">
            {localizedName.split(" ")[0]} <span className="text-indigo-400 font-medium">{localizedName.split(" ")[1]}</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-1 bg-slate-900/10 dark:bg-white/5 p-1 rounded-full border border-border/40">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "text-primary-foreground"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-indigo-500 dark:bg-indigo-500 rounded-full -z-10 shadow-md shadow-indigo-500/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </button>
                </li>
              )
            })}
          </ul>

          {(config.enableLanguageSwitcher || config.enableThemeSwitcher) && (
            <div className="h-4 w-[1px] bg-border" />
          )}

          {/* Quick utility controls */}
          <div className="flex items-center gap-2">
            {/* Language switch */}
            {config.enableLanguageSwitcher && (
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-xl bg-slate-900/10 dark:bg-white/5 border border-border/30 hover:border-indigo-400/50 hover:bg-slate-900/20 dark:hover:bg-white/10 transition-all text-foreground/80 hover:text-indigo-400 cursor-pointer flex items-center gap-1 text-xs font-bold"
                aria-label="Toggle language"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{lang === "en" ? "AR" : "EN"}</span>
              </button>
            )}

            {/* Theme switch */}
            {config.enableThemeSwitcher && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-slate-900/10 dark:bg-white/5 border border-border/30 hover:border-indigo-400/50 hover:bg-slate-900/20 dark:hover:bg-white/10 transition-all text-foreground/80 hover:text-indigo-400 cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
            )}
          </div>
        </nav>

        {/* Mobile Nav Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile language toggle */}
          {config.enableLanguageSwitcher && (
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-xl bg-slate-900/10 dark:bg-white/5 border border-border/30 hover:border-indigo-400/50 text-foreground/80 hover:text-indigo-400 cursor-pointer flex items-center gap-1 text-xs font-bold"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "AR" : "EN"}</span>
            </button>
          )}

          {/* Mobile theme toggle */}
          {config.enableThemeSwitcher && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-900/10 dark:bg-white/5 border border-border/30 hover:border-indigo-400/50 text-foreground/80 hover:text-indigo-400 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          )}

          {/* Hamburger trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900/10 dark:bg-white/5 border border-border/30 text-foreground/80 hover:text-foreground cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-card border-b border-border/80 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollTo(item.id)}
                        className={`w-full text-left py-2 px-4 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                          isArabic ? "text-right" : "text-left"
                        } ${
                          isActive
                            ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/10"
                            : "text-foreground/70 hover:bg-slate-900/10 dark:hover:bg-white/5 hover:text-foreground"
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
