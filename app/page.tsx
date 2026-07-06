"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

// Import modular components
import { BackgroundManager } from "@/components/portfolio/BackgroundManager"
import { LoadingScreen } from "@/components/portfolio/LoadingScreen"
import { Header } from "@/components/portfolio/Header"
import { HeroSection } from "@/components/portfolio/HeroSection"
import { AboutSection } from "@/components/portfolio/AboutSection"
import { GraduationProject } from "@/components/portfolio/GraduationProject"
import { ExperienceTimeline } from "@/components/portfolio/ExperienceTimeline"
import { ProjectsSection } from "@/components/portfolio/ProjectsSection"
import { SkillsSection } from "@/components/portfolio/SkillsSection"
import { CertificatesGallery } from "@/components/portfolio/CertificatesGallery"
import { AchievementsSection } from "@/components/portfolio/AchievementsSection"
import { ServicesSection } from "@/components/portfolio/ServicesSection"
import { TechStackSection } from "@/components/portfolio/TechStackSection"
import { JourneySection } from "@/components/portfolio/JourneySection"
import { GitHubSection } from "@/components/portfolio/GitHubSection"
import { CurrentLearning } from "@/components/portfolio/CurrentLearning"
import { ContactSection } from "@/components/portfolio/ContactSection"
import { Footer } from "@/components/portfolio/Footer"
import { EditModeOverlay } from "@/components/portfolio/EditModeOverlay"

// Import centralized data
import { config } from "@/data/config"
import { profile } from "@/data/profile"
import { socials, contactData } from "@/data/socials"
import { skillsData, achievements, services, currentLearning } from "@/data/skills"
import { experience } from "@/data/experience"
import { projects, githubData, githubRepos } from "@/data/projects"
import { certificates } from "@/data/certificates"
import { education } from "@/data/education"

// Schema definitions to display in overlay
const SCHEMAS = {
  profile: `interface ProfileData {
  name: { en: string; ar: string }
  avatarUrl: string
  availabilityBadge: { en: string; ar: string }
  greeting: { en: string; ar: string }
  titles: { en: string[]; ar: string[] }
  description: { en: string; ar: string }
  bio: { en: string; ar: string }
  stats: { experience: number; projects: number; technologies: number }
  aboutSubtitle: { en: string; ar: string }
  pillars: { title: { en: string; ar: string }; desc: { en: string; ar: string } }[]
}`,
  education: `interface EducationItem {
  institution: { en: string; ar: string }
  degree: { en: string; ar: string }
  period: { en: string; ar: string }
}`,
  experience: `interface ExperienceRole {
  company: string
  period: { en: string; ar: string }
  title: { en: string; ar: string }
  achievements: { en: string[]; ar: string[] }
  metrics: { label: { en: string; ar: string }; value: string }[]
}
interface ExperienceData {
  title: { en: string; ar: string }
  subtitle: { en: string; ar: string }
  roles: ExperienceRole[]
}`,
  projects: `interface ProjectDetails {
  title: { en: string; ar: string }
  subtitle: { en: string; ar: string }
  problem: { en: string; ar: string }
  solution: { en: string; ar: string }
  contribution: { en: string; ar: string }
  challenges: { en: string; ar: string }
  results: { en: string; ar: string }
  tech: string[]
  features: { en: string[]; ar: string[] }
  link: string
  github?: string
}
interface ProjectItem {
  id: string
  category: "systems" | "web"
  image: string
  details: ProjectDetails
  featured?: boolean
}`,
  skills: `interface SkillItem {
  name: string
  level: "Expert" | "Advanced" | "Intermediate" | "Learning"
}
interface SkillCategory {
  title: { en: string; ar: string }
  skills: SkillItem[]
}
interface SkillsData {
  title: { en: string; ar: string }
  subtitle: { en: string; ar: string }
  categories: { [key: string]: SkillCategory }
}`,
  certificates: `interface CertificateItem {
  name: { en: string; ar: string }
  provider: string
  issueDate: string
  credentialId: string
  image: string
  link: string
}
interface CertificatesData {
  title: { en: string; ar: string }
  subtitle: { en: string; ar: string }
  btnView: { en: string; ar: string }
  btnDownload: { en: string; ar: string }
  items: CertificateItem[]
}`,
  socials: `interface SocialsData {
  email: string
  phone: string
  phone2: string
  location: { en: string; ar: string }
  facebook: string
  instagram: string
  linkedin: string
  github: string
  whatsapp: string
  calendly: string
}`,
  achievements: `interface AchievementItem {
  title: { en: string; ar: string }
  desc: { en: string; ar: string }
}`,
  services: `interface ServiceItem {
  title: { en: string; ar: string }
  desc: { en: string; ar: string }
}`,
  currentLearning: `interface LearningItem {
  name: string
  desc: { en: string; ar: string }
}`
}

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false)
  const [lang, setLang] = useState<"en" | "ar">("en")
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [isEditMode, setIsEditMode] = useState(false)

  // Edit Mode overlay state
  const [editOverlay, setEditOverlay] = useState<{
    isOpen: boolean
    sectionName: string
    filePath: string
    dataObject: any
    schemaText: string
  }>({
    isOpen: false,
    sectionName: "",
    filePath: "",
    dataObject: null,
    schemaText: "",
  })

  // Sync state with local storage on mount
  useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("lang") as "en" | "ar"
      const savedTheme = localStorage.getItem("theme") as "light" | "dark"
      
      if (savedLang) setLang(savedLang)
      if (savedTheme) {
        setTheme(savedTheme)
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        setTheme(prefersDark ? "dark" : "light")
      }

      // Initialize edit mode automatically in local development
      if (process.env.NODE_ENV === "development" && config.developer.enabled) {
        setIsEditMode(true)
      }
    }
  }, [])

  // Keyboard shortcut listener to toggle Developer Edit Mode
  useEffect(() => {
    if (!mounted || !config.developer.enabled) return

    const handleKeyDown = (e: KeyboardEvent) => {
      // ctrl+shift+e shortcut checker
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "e") {
        e.preventDefault()
        setIsEditMode((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [mounted])

  // Sync HTML direction attribute and theme classes on update
  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    root.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme, mounted])

  useEffect(() => {
    if (!mounted) return
    localStorage.setItem("lang", lang)
  }, [lang, mounted])

  if (!mounted) {
    return <div className="min-h-screen bg-slate-950" />
  }

  const isArabic = lang === "ar"

  // Open Edit Mode Overlay
  const triggerEdit = (sectionName: string, filePath: string, dataObject: any, schemaText: string) => {
    setEditOverlay({
      isOpen: true,
      sectionName,
      filePath,
      dataObject,
      schemaText,
    })
  }

  return (
    <div 
      className={`min-h-screen font-sans antialiased text-foreground ${isArabic ? "rtl" : "ltr"}`} 
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Visual background layers */}
      <BackgroundManager />

      {/* SVG drawing loading screen */}
      <LoadingScreen />

      {/* Glass navigation header bar */}
      <Header 
        isArabic={isArabic} 
        lang={lang} 
        setLang={setLang} 
        theme={theme} 
        setTheme={setTheme} 
      />

      <main className="relative z-10">
        {/* Hero Section */}
        {config.enableHero && (
          <HeroSection
            isArabic={isArabic}
            lang={lang}
            isEditMode={isEditMode}
            onEditTrigger={() => triggerEdit("Hero Section", "data/profile.ts", { name: profile.name, avatarUrl: profile.avatarUrl, greeting: profile.greeting, titles: profile.titles, description: profile.description, stats: profile.stats }, SCHEMAS.profile)}
          />
        )}

        {/* About Section */}
        <AboutSection
          isArabic={isArabic}
          lang={lang}
          isEditMode={isEditMode}
          onEditTrigger={() => triggerEdit("About Section", "data/profile.ts & data/education.ts", { bio: profile.bio, aboutSubtitle: profile.aboutSubtitle, pillars: profile.pillars, education }, `${SCHEMAS.profile}\n\n${SCHEMAS.education}`)}
        />
        
        {/* Centerpiece featured VPN/AI graduation project */}
        {config.enableHero && (
          <GraduationProject
            isArabic={isArabic}
            lang={lang}
            isEditMode={isEditMode}
            onEditTrigger={() => triggerEdit("Graduation centerpiece project", "data/projects.ts", projects.find(p => p.featured) || projects[0], SCHEMAS.projects)}
          />
        )}
        
        {/* Experience Timeline */}
        {config.enableExperience && (
          <ExperienceTimeline
            isArabic={isArabic}
            lang={lang}
            isEditMode={isEditMode}
            onEditTrigger={() => triggerEdit("Experience Section", "data/experience.ts", experience, SCHEMAS.experience)}
          />
        )}

        {/* Projects Section */}
        {config.enableProjects && (
          <ProjectsSection
            isArabic={isArabic}
            lang={lang}
            isEditMode={isEditMode}
            onEditTrigger={() => triggerEdit("Projects Gallery", "data/projects.ts", { projectsData, projects: projects.filter(p => !p.featured) }, SCHEMAS.projects)}
          />
        )}

        {/* Skills Section */}
        <SkillsSection
          isArabic={isArabic}
          lang={lang}
          isEditMode={isEditMode}
          onEditTrigger={() => triggerEdit("Skills Matrix", "data/skills.ts", skillsData, SCHEMAS.skills)}
        />
        
        {/* Extra high-fidelity sections */}
        {config.enableAchievements && (
          <AchievementsSection
            isArabic={isArabic}
            lang={lang}
            isEditMode={isEditMode}
            onEditTrigger={() => triggerEdit("Achievements Milestones", "data/skills.ts", achievements, SCHEMAS.achievements)}
          />
        )}

        {config.enableServices && (
          <ServicesSection
            isArabic={isArabic}
            lang={lang}
            isEditMode={isEditMode}
            onEditTrigger={() => triggerEdit("Services Section", "data/skills.ts", services, SCHEMAS.services)}
          />
        )}

        {config.enableTechStack && (
          <TechStackSection
            isArabic={isArabic}
            lang={lang}
            isEditMode={isEditMode}
            onEditTrigger={() => triggerEdit("Tech Stack Section", "data/skills.ts", { techStackData }, SCHEMAS.skills)}
          />
        )}

        {config.enableCurrentLearning && (
          <CurrentLearning
            isArabic={isArabic}
            lang={lang}
            isEditMode={isEditMode}
            onEditTrigger={() => triggerEdit("Current Learning Section", "data/skills.ts", currentLearning, SCHEMAS.currentLearning)}
          />
        )}

        {config.enableJourney && (
          <JourneySection
            isArabic={isArabic}
            lang={lang}
            isEditMode={isEditMode}
            onEditTrigger={() => triggerEdit("Journey Roadmap", "data/profile.ts", { journey: profile.journey }, SCHEMAS.profile)}
          />
        )}
        
        {/* Credentials and portfolio widgets */}
        {config.enableCertificates && (
          <CertificatesGallery
            isArabic={isArabic}
            lang={lang}
            isEditMode={isEditMode}
            onEditTrigger={() => triggerEdit("Certificates Gallery", "data/certificates.ts", certificates, SCHEMAS.certificates)}
          />
        )}

        {config.enableGitHubStats && (
          <GitHubSection
            isArabic={isArabic}
            lang={lang}
            theme={theme}
            isEditMode={isEditMode}
            onEditTrigger={() => triggerEdit("GitHub Activity", "data/projects.ts & data/socials.ts", { githubData, githubRepos, github: socials.github }, `${SCHEMAS.projects}\n\n${SCHEMAS.socials}`)}
          />
        )}
        
        {/* Contact interface */}
        {config.enableContact && (
          <ContactSection
            isArabic={isArabic}
            lang={lang}
            isEditMode={isEditMode}
            onEditTrigger={() => triggerEdit("Contact Section", "data/socials.ts", { socials, contactData }, SCHEMAS.socials)}
          />
        )}
      </main>

      {/* Technical build footer */}
      <Footer isArabic={isArabic} lang={lang} />

      {/* Centralized Developer Config Modal Overlay */}
      <EditModeOverlay
        isOpen={editOverlay.isOpen}
        onClose={() => setEditOverlay((prev) => ({ ...prev, isOpen: false }))}
        sectionName={editOverlay.sectionName}
        filePath={editOverlay.filePath}
        dataObject={editOverlay.dataObject}
        schemaText={editOverlay.schemaText}
      />
    </div>
  )
}
