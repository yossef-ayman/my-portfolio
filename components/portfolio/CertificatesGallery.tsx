"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronLeft, FaChevronRight, FaTimes, FaExternalLinkAlt, FaDownload, FaEye, FaPencilAlt } from "react-icons/fa"
import { certificates } from "@/data/certificates"
import { config } from "@/data/config"
import { cn } from "@/lib/utils"

interface CertificatesGalleryProps {
  isArabic: boolean
  lang: "en" | "ar"
  isEditMode: boolean
  onEditTrigger: () => void
}

export function CertificatesGallery({ isArabic, lang, isEditMode, onEditTrigger }: CertificatesGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const items = certificates.items

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const navigateLightbox = (direction: "next" | "prev") => {
    if (lightboxIndex === null) return
    if (direction === "next") {
      setLightboxIndex((lightboxIndex + 1) % items.length)
    } else {
      setLightboxIndex((lightboxIndex - 1 + items.length) % items.length)
    }
  }

  // Keyboard navigation hooks
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") navigateLightbox(isArabic ? "prev" : "next")
      if (e.key === "ArrowLeft") navigateLightbox(isArabic ? "next" : "prev")
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxIndex, isArabic])

  return (
    <section id="certificates" className="py-20 md:py-28 relative bg-slate-900/5">

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 gradient-text"
          >
            {certificates.title[lang]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm font-semibold tracking-wider text-muted-foreground uppercase"
          >
            {certificates.subtitle[lang]}
          </motion.p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card rounded-3xl border border-border/40 overflow-hidden shadow-xl hover:border-indigo-400/40 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Preview Wrapper */}
              <div
                onClick={() => openLightbox(idx)}
                className="relative h-44 md:h-48 w-full overflow-hidden bg-slate-950 cursor-zoom-in"
              >
                <img
                  src={item.image}
                  alt={`${item.name[lang]} preview`}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-80"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=80"
                  }}
                />
                
                {/* Hover zoom overlays */}
                <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="p-3.5 rounded-full bg-indigo-500 text-white text-base shadow-lg">
                    <FaEye />
                  </span>
                </div>
              </div>

              {/* Text content details */}
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest block mb-1">
                  {item.provider}
                </span>
                <h3 className="text-sm md:text-base font-extrabold text-foreground mb-3 leading-snug line-clamp-2">
                  {item.name[lang]}
                </h3>
                
                <div className="text-[10px] text-muted-foreground space-y-1 mt-auto">
                  <p>
                    <span className="font-semibold text-foreground/80">{isArabic ? "تاريخ الإصدار: " : "Issue Date: "}</span>
                    <span>{item.issueDate}</span>
                  </p>
                  <p className="font-mono text-muted-foreground/60 break-all select-all" title="Click to select credential ID">
                    <span className="font-semibold text-foreground/80 font-sans">{isArabic ? "رقم الاعتماد: " : "Cred ID: "}</span>
                    <span>{item.credentialId}</span>
                  </p>
                </div>

                {/* Verification/Download buttons */}
                <div className="grid grid-cols-2 gap-2 mt-5 border-t border-border/20 pt-4">
                  <button
                    onClick={() => openLightbox(idx)}
                    className="py-2 rounded-xl bg-slate-900/10 dark:bg-white/5 border border-border/30 hover:border-indigo-400/40 hover:bg-slate-900/20 text-[10px] font-bold tracking-wider uppercase text-foreground text-center flex items-center justify-center gap-1 cursor-pointer transition-all duration-200"
                  >
                    <FaEye className="w-2.5 h-2.5 text-indigo-400" />
                    <span>{certificates.btnView[lang]}</span>
                  </button>
                  <a
                    href={item.image}
                    download
                    className="py-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500 text-indigo-400 hover:text-white border border-indigo-500/20 hover:border-indigo-500 text-[10px] font-bold tracking-wider uppercase text-center flex items-center justify-center gap-1 cursor-pointer transition-all duration-200"
                  >
                    <FaDownload className="w-2.5 h-2.5" />
                    <span>{certificates.btnDownload[lang]}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeLightbox}
                className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl max-h-[85vh] z-10 flex flex-col items-center gap-4 text-foreground"
              >
                {/* Close trigger */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/40 hover:bg-white/10 border border-white/10 text-white transition-all cursor-pointer z-10"
                >
                  <FaTimes className="w-4 h-4" />
                </button>

                {/* Main Lightbox Image */}
                <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950 max-h-[70vh] flex items-center justify-center">
                  <img
                    src={items[lightboxIndex].image}
                    alt={items[lightboxIndex].name[lang]}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />

                  {/* Left arrow trigger */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      navigateLightbox("prev")
                    }}
                    className="absolute left-4 p-3 rounded-full bg-slate-950/60 hover:bg-white/10 border border-white/10 text-white transition-all cursor-pointer"
                  >
                    <FaChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Right arrow trigger */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      navigateLightbox("next")
                    }}
                    className="absolute right-4 p-3 rounded-full bg-slate-950/60 hover:bg-white/10 border border-white/10 text-white transition-all cursor-pointer"
                  >
                    <FaChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Subtitle credentials info */}
                <div className="text-center max-w-xl">
                  <h3 className="text-base md:text-lg font-bold text-white mb-1">
                    {items[lightboxIndex].name[lang]}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {items[lightboxIndex].provider} — {items[lightboxIndex].issueDate}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
