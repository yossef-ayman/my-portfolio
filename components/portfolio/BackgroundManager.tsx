"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function BackgroundManager() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-background">
      {/* Noise filter */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Grid Pattern overlay */}
      <div className="grid-pattern" aria-hidden="true" />

      {/* Background radial gradient mesh */}
      <div className="absolute inset-0 mask-radial opacity-40 dark:opacity-60" aria-hidden="true">
        {/* Violet Blob */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-96 md:w-[600px] h-96 md:h-[600px] rounded-full bg-indigo-500/20 dark:bg-indigo-500/10 blur-[100px] md:blur-[140px]"
        />

        {/* Cyan Blob */}
        <motion.div
          animate={{
            x: [0, -100, 60, 0],
            y: [0, 80, -90, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 right-20 w-96 md:w-[700px] h-96 md:h-[700px] rounded-full bg-cyan-500/15 dark:bg-cyan-500/10 blur-[100px] md:blur-[150px]"
        />

        {/* Purple Blob */}
        <motion.div
          animate={{
            x: [0, 50, -80, 0],
            y: [0, 70, 80, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/3 w-80 md:w-[500px] h-80 md:h-[500px] rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-[90px] md:blur-[130px]"
        />
      </div>

      {/* Floating particles (Stars) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-40" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-400 dark:bg-indigo-300"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.9, 0.2],
            }}
            transition={{
              duration: 4 + (i % 4) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 5) * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  )
}
