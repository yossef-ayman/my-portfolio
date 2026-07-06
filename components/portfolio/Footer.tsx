"use client"

import React from "react"
import { FaChevronUp } from "react-icons/fa"
import { profile } from "@/data/profile"

interface FooterProps {
  isArabic: boolean
  lang: "en" | "ar"
}

export function Footer({ isArabic, lang }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const name = profile.name[lang]
  const footerText = profile.footerData.text[lang]

  return (
    <footer className="py-12 border-t border-border/40 relative bg-slate-950/20 dark:bg-slate-950/60 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright Text */}
        <div className="text-center md:text-left">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-md">
            &copy; {new Date().getFullYear()} {name}. {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
            <br />
            <span className="text-[10px] text-muted-foreground/60 mt-1 block">
              {footerText}
            </span>
          </p>
        </div>

        {/* Right Side: Back to top buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/25 transition-all duration-300 cursor-pointer flex items-center justify-center"
            aria-label="Scroll back to top of the page"
          >
            <FaChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  )
}
