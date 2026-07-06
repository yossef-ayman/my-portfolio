"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { profile } from "@/data/profile"

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Complete loading after the animations finish
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 font-sans text-slate-100"
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* SVG YA Drawing Animation */}
            <motion.svg
              width="120"
              height="120"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="filter drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            >
              {/* Left arm of Y */}
              <motion.path
                d="M 20 20 L 50 50"
                stroke="url(#svg-gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              {/* Right arm of Y */}
              <motion.path
                d="M 80 20 L 50 50"
                stroke="url(#svg-gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              {/* Stem of Y */}
              <motion.path
                d="M 50 50 L 50 85"
                stroke="url(#svg-gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
              />
              {/* A Letter Structure (layered behind Y or overlapping) */}
              {/* Left leg of A */}
              <motion.path
                d="M 30 85 L 50 25"
                stroke="url(#svg-gradient2)"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
              />
              {/* Right leg of A */}
              <motion.path
                d="M 70 85 L 50 25"
                stroke="url(#svg-gradient2)"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
              />
              {/* Bar of A */}
              <motion.path
                d="M 38 65 L 62 65"
                stroke="url(#svg-gradient2)"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 1.4, ease: "easeInOut" }}
              />
              
              <defs>
                <linearGradient id="svg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="svg-gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>
              </defs>
            </motion.svg>

            {/* Youssef Ayman Mohamed Name Fade-In */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
              className="text-xl md:text-2xl font-bold tracking-widest text-slate-100 uppercase"
            >
              {profile.name.en}
            </motion.h1>

            {/* Software Engineer Subtitle Fade-In */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.9 }}
              className="text-xs md:text-sm tracking-wider text-indigo-400 font-medium uppercase"
            >
              {profile.titles.en[0]}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
