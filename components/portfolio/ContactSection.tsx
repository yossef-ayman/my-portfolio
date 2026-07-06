"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaCalendarCheck, 
  FaCopy, FaCheck, FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaPencilAlt
} from "react-icons/fa"
import { socials, contactData } from "@/data/socials"
import { config } from "@/data/config"
import { cn } from "@/lib/utils"

interface ContactSectionProps {
  isArabic: boolean
  lang: "en" | "ar"
  isEditMode: boolean
  onEditTrigger: () => void
}

export function ContactSection({ isArabic, lang, isEditMode, onEditTrigger }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState<"idle" | "sending" | "success">("idle")

  const emailAddress = socials.email
  const phone = socials.phone
  const phone2 = socials.phone2
  const facebook = socials.facebook
  const instagram = socials.instagram
  const github = socials.github
  const linkedin = socials.linkedin
  const whatsapp = socials.whatsapp

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("sending")
    
    // Simulate API request delay
    setTimeout(() => {
      setFormState("success")
      setFormData({ name: "", email: "", message: "" })
      
      // Reset back to idle after a while
      setTimeout(() => setFormState("idle"), 4000)
    }, 1500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">

      {/* Decorative background grid flare */}
      {config.enableBackgroundAnimations && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 md:w-[600px] h-80 md:h-[600px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      )}

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 gradient-text"
          >
            {contactData.title[lang]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm font-semibold tracking-wider text-muted-foreground uppercase"
          >
            {contactData.subtitle[lang]}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct info cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-border/40 shadow-xl space-y-6">
              
              {/* Availability Badge */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
                </span>
                <div className={cn(isArabic && "text-right")}>
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block">
                    {contactData.statusLabel[lang]}
                  </span>
                  <span className="text-xs font-semibold text-foreground">
                    {contactData.statusText[lang]}
                  </span>
                </div>
              </div>

              {/* Direct Details */}
              <div className="space-y-4">
                {/* Email detail */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-900/10 dark:bg-white/5 border border-border/30 text-indigo-400 mt-1">
                    <FaEnvelope className="w-4 h-4" />
                  </div>
                  <div className={cn("flex-grow", isArabic && "text-right")}>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block">Email Address</span>
                    <a href={`mailto:${emailAddress}`} className="text-xs md:text-sm font-semibold text-foreground hover:text-indigo-400 transition-colors">
                      {emailAddress}
                    </a>
                  </div>
                </div>

                {/* Phones detail */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-900/10 dark:bg-white/5 border border-border/30 text-indigo-400 mt-1">
                    <FaPhone className="w-4 h-4" />
                  </div>
                  <div className={cn("flex-grow", isArabic && "text-right")}>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block">Phone / Mobile</span>
                    <p className="text-xs md:text-sm font-semibold text-foreground font-sans">
                      <a href={`tel:${phone}`} className="hover:text-indigo-400 transition-colors">{phone}</a> 
                      <span className="text-muted-foreground/40 mx-2">/</span> 
                      <a href={`tel:${phone2}`} className="hover:text-indigo-400 transition-colors">{phone2}</a>
                    </p>
                  </div>
                </div>

                {/* Location detail */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-900/10 dark:bg-white/5 border border-border/30 text-indigo-400 mt-1">
                    <FaMapMarkerAlt className="w-4 h-4" />
                  </div>
                  <div className={cn("flex-grow", isArabic && "text-right")}>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block">Location</span>
                    <span className="text-xs md:text-sm font-semibold text-foreground">
                      {socials.location[lang]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Utility actions buttons */}
              <div className="flex flex-col gap-2 pt-4 border-t border-border/20">
                <button
                  onClick={handleCopyEmail}
                  className="w-full py-2.5 rounded-xl bg-slate-900/10 dark:bg-white/5 hover:bg-slate-900/20 dark:hover:bg-white/10 border border-border/30 hover:border-indigo-400/40 font-bold text-xs tracking-wider uppercase text-foreground transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy className="text-indigo-400" />}
                  <span>{copied ? contactData.copySuccess[lang] : contactData.copyEmail[lang]}</span>
                </button>

                {whatsapp && (
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 hover:border-emerald-500/45 font-bold text-xs tracking-wider uppercase text-emerald-500 hover:text-emerald-400 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>{contactData.whatsappText[lang]}</span>
                  </a>
                )}

                <button
                  onClick={() => alert(isArabic ? "يرجى حجز المواعيد عبر التراسل المباشر بالبريد الإلكتروني حالياً." : "Please request consultation bookings directly via email.")}
                  className="w-full py-2.5 rounded-xl bg-slate-900/10 dark:bg-white/5 hover:bg-slate-900/20 dark:hover:bg-white/10 border border-border/30 hover:border-indigo-400/40 font-bold text-xs tracking-wider uppercase text-foreground transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  <FaCalendarCheck className="w-4 h-4 text-cyan-400" />
                  <span>{contactData.meetingText[lang]}</span>
                </button>
              </div>

              {/* Social links bar */}
              <div className="flex items-center justify-center gap-3 pt-4 border-t border-border/20 text-lg text-muted-foreground">
                {linkedin && (
                  <a href={linkedin} target="_blank" rel="noreferrer" className="p-2.5 bg-slate-900/20 border border-border/20 rounded-xl hover:text-indigo-400 hover:border-indigo-400/40 transition-all">
                    <FaLinkedin />
                  </a>
                )}
                {github && (
                  <a href={github} target="_blank" rel="noreferrer" className="p-2.5 bg-slate-900/20 border border-border/20 rounded-xl hover:text-indigo-400 hover:border-indigo-400/40 transition-all">
                    <FaGithub />
                  </a>
                )}
                {facebook && (
                  <a href={facebook} target="_blank" rel="noreferrer" className="p-2.5 bg-slate-900/20 border border-border/20 rounded-xl hover:text-indigo-400 hover:border-indigo-400/40 transition-all">
                    <FaFacebook />
                  </a>
                )}
                {instagram && (
                  <a href={instagram} target="_blank" rel="noreferrer" className="p-2.5 bg-slate-900/20 border border-border/20 rounded-xl hover:text-indigo-400 hover:border-indigo-400/40 transition-all">
                    <FaInstagram />
                  </a>
                )}
              </div>

            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-border/40 shadow-xl">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                {/* Name field */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="name" className={cn("text-xs font-bold text-foreground/80 uppercase tracking-widest block", isArabic && "text-right")}>
                    {contactData.formName[lang]}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-slate-900/30 border border-border/40 text-foreground text-sm focus:border-indigo-500 focus:bg-slate-950 transition-all",
                      isArabic && "text-right"
                    )}
                    placeholder={contactData.placeholderName[lang]}
                  />
                </div>

                {/* Email field */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="email" className={cn("text-xs font-bold text-foreground/80 uppercase tracking-widest block", isArabic && "text-right")}>
                    {contactData.formEmail[lang]}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-slate-900/30 border border-border/40 text-foreground text-sm focus:border-indigo-500 focus:bg-slate-950 transition-all",
                      isArabic && "text-right"
                    )}
                    placeholder={contactData.placeholderEmail[lang]}
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="message" className={cn("text-xs font-bold text-foreground/80 uppercase tracking-widest block", isArabic && "text-right")}>
                    {contactData.formMessage[lang]}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-slate-900/30 border border-border/40 text-foreground text-sm focus:border-indigo-500 focus:bg-slate-950 transition-all",
                      isArabic && "text-right"
                    )}
                    placeholder={contactData.placeholderMessage[lang]}
                  />
                </div>

                {/* Submit button with states */}
                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="w-full py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-500/50 text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
                >
                  <span>{formState === "sending" ? contactData.btnSending[lang] : contactData.btnSend[lang]}</span>
                </button>

                {/* Success alert message */}
                <AnimatePresence>
                  {formState === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-semibold text-center"
                    >
                      {contactData.formSuccess[lang]}
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
