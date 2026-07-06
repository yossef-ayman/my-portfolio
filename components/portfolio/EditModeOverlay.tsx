"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaCopy, FaCheck, FaTimes, FaFileCode, FaDatabase, FaCogs } from "react-icons/fa"

interface EditModeOverlayProps {
  isOpen: boolean
  onClose: () => void
  sectionName: string
  filePath: string
  dataObject: any
  schemaText: string
}

export function EditModeOverlay({
  isOpen,
  onClose,
  sectionName,
  filePath,
  dataObject,
  schemaText,
}: EditModeOverlayProps) {
  const [activeTab, setActiveTab] = useState<"actions" | "schema" | "source">("actions")
  const [copiedPath, setCopiedPath] = useState(false)
  const [copiedData, setCopiedData] = useState(false)

  // Keyboard trap for closing modal on Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  const copyToClipboard = (text: string, type: "path" | "data") => {
    navigator.clipboard.writeText(text)
    if (type === "path") {
      setCopiedPath(true)
      setTimeout(() => setCopiedPath(false), 2000)
    } else {
      setCopiedData(true)
      setTimeout(() => setCopiedData(false), 2000)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3 }}
            className="relative bg-slate-950/90 border border-indigo-500/30 w-full max-w-2xl max-h-[80vh] rounded-3xl shadow-2xl p-6 md:p-8 z-10 text-foreground flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border/30 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <FaCogs className="w-5 h-5 animate-spin-slow" />
                </div>
                <div>
                  <h2 className="text-base md:text-lg font-black text-white uppercase tracking-wider">
                    {sectionName} — Developer Config
                  </h2>
                  <span className="text-[10px] text-muted-foreground/80 font-mono">
                    {filePath}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-xl bg-slate-900/30 hover:bg-white/10 border border-white/10 text-foreground transition-all duration-200 cursor-pointer"
                aria-label="Close configuration overlay"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>

            {/* Tabs Selector */}
            <div className="flex gap-2 mb-6 border-b border-border/20 pb-3">
              <button
                onClick={() => setActiveTab("actions")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === "actions"
                    ? "bg-indigo-500 text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Quick Actions
              </button>
              <button
                onClick={() => setActiveTab("schema")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === "schema"
                    ? "bg-indigo-500 text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Data Schema
              </button>
              <button
                onClick={() => setActiveTab("source")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === "source"
                    ? "bg-indigo-500 text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Source Data Preview
              </button>
            </div>

            {/* Tab content viewer */}
            <div className="flex-grow overflow-y-auto min-h-[250px] max-h-[45vh] pr-2 scrollbar-thin scrollbar-thumb-indigo-500/20">
              <AnimatePresence mode="wait">
                {activeTab === "actions" && (
                  <motion.div
                    key="actions"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="space-y-5"
                  >
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Use the quick options below to locate, copy, or understand the static content model representing the <span className="text-indigo-400 font-semibold">{sectionName}</span>.
                    </p>

                    {/* Action 1: Copy Path */}
                    <div className="p-4 rounded-2xl bg-slate-900/30 border border-border/30 flex items-center justify-between gap-4">
                      <div className="text-left">
                        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block">Data File Location</span>
                        <code className="text-xs font-mono text-foreground break-all">{filePath}</code>
                      </div>
                      <button
                        onClick={() => copyToClipboard(filePath, "path")}
                        className="px-4 py-2.5 rounded-xl bg-slate-900 border border-border/40 hover:border-indigo-400/40 text-foreground text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer min-w-[125px] justify-center"
                      >
                        {copiedPath ? <FaCheck className="text-emerald-400" /> : <FaCopy className="text-indigo-400" />}
                        <span>{copiedPath ? "Copied!" : "Copy Path"}</span>
                      </button>
                    </div>

                    {/* Action 2: Copy Data */}
                    <div className="p-4 rounded-2xl bg-slate-900/30 border border-border/30 flex items-center justify-between gap-4">
                      <div className="text-left">
                        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block">Raw Content JSON</span>
                        <p className="text-[11px] text-muted-foreground">Copy the bilingual content variables representing this section.</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(JSON.stringify(dataObject, null, 2), "data")}
                        className="px-4 py-2.5 rounded-xl bg-slate-900 border border-border/40 hover:border-indigo-400/40 text-foreground text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer min-w-[125px] justify-center"
                      >
                        {copiedData ? <FaCheck className="text-emerald-400" /> : <FaCopy className="text-indigo-400" />}
                        <span>{copiedData ? "Copied!" : "Copy JSON"}</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {activeTab === "schema" && (
                  <motion.div
                    key="schema"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                      <FaFileCode />
                      <span>TypeScript Schema definition</span>
                    </div>
                    <pre className="p-4 rounded-2xl bg-slate-900/40 border border-border/30 text-[10px] font-mono text-muted-foreground overflow-x-auto whitespace-pre-wrap select-all leading-normal">
                      {schemaText}
                    </pre>
                  </motion.div>
                )}

                {activeTab === "source" && (
                  <motion.div
                    key="source"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                      <FaDatabase />
                      <span>Bilingual Source Data JSON</span>
                    </div>
                    <pre className="p-4 rounded-2xl bg-slate-900/40 border border-border/30 text-[10px] font-mono text-emerald-400/90 overflow-x-auto select-all leading-normal">
                      {JSON.stringify(dataObject, null, 2)}
                    </pre>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Tips footer */}
            <div className="border-t border-border/30 pt-4 mt-4 text-[10px] text-muted-foreground text-center">
              Tip: Press <code className="px-1 py-0.5 rounded bg-slate-900 border border-border/50 text-indigo-400 font-mono">Escape</code> to close this popup.
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
