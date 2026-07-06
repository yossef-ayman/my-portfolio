"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaFileAlt, FaShieldAlt, FaKey, FaChartLine, FaNetworkWired, FaServer, FaCogs, FaPencilAlt } from "react-icons/fa"
import { projects } from "@/data/projects"
import { config } from "@/data/config"
import { cn } from "@/lib/utils"

interface GraduationProjectProps {
  isArabic: boolean
  lang: "en" | "ar"
  isEditMode: boolean
  onEditTrigger: () => void
}

export function GraduationProject({ isArabic, lang, isEditMode, onEditTrigger }: GraduationProjectProps) {
  const [activeTab, setActiveTab] = useState<"arch" | "crypto" | "ai" | "perf">("arch")
  const [cryptoStep, setCryptoStep] = useState(0)

  // Find the featured project (Graduation Project centerpiece) dynamically
  const project = projects.find((p) => p.featured) || projects[0]
  const g = project.details

  const tabs = [
    { id: "arch", label: isArabic ? "بنية النظام" : "System Architecture", icon: <FaNetworkWired /> },
    { id: "crypto", label: isArabic ? "التشفير" : "Cryptographic Handshake", icon: <FaKey /> },
    { id: "ai", label: isArabic ? "كشف الاختراقات" : "AI Detection Pipeline", icon: <FaShieldAlt /> },
    { id: "perf", label: isArabic ? "مقاييس الأداء" : "Performance Metrics", icon: <FaChartLine /> },
  ]

  const cryptoSteps = [
    {
      title: isArabic ? "1. مبادلة مفاتيح X25519" : "1. X25519 Key Exchange",
      desc: isArabic
        ? "تقوم الأطراف بمبادلة مفاتيح X25519 العامة لإنشاء مفتاح سري مشترك آمن ضد الهجمات دون إرسال المفتاح الأساسي."
        : "Client and Gateway exchange X25519 public values to compute a cryptographically secure shared secret over untrusted links.",
    },
    {
      title: isArabic ? "2. اشتقاق المفاتيح عبر HKDF" : "2. HKDF Key Derivation",
      desc: isArabic
        ? "يمر المفتاح المشترك عبر خوارزمية اشتقاق المفاتيح القائمة على HMAC (HKDF) لإنتاج مفاتيح تشفير متماثلة ومستقلة."
        : "The shared secret is processed using an HMAC-based Key Derivation Function (HKDF) to derive symmetric encryption keys.",
    },
    {
      title: isArabic ? "3. تشفير AES-256-GCM" : "3. Authenticated AES-256-GCM",
      desc: isArabic
        ? "يتم تغليف حزم الشبكة وتشفيرها بالكامل بالاعتماد على AES-256 في وضع GCM، مما يضمن سرية البيانات وسلامتها التامة."
        : "Packets are encapsulated and encrypted using AES-256 in GCM mode, verifying integrity and confidentiality for every network frame.",
    },
  ]

  return (
    <section id="featured" className="py-20 md:py-28 relative bg-slate-950/20 dark:bg-slate-950/60 overflow-hidden">

      {/* Decorative subtle background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(99,102,241,0.06),transparent_100%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-3 text-xs font-bold text-indigo-400 tracking-wider uppercase"
          >
            {isArabic ? "مشروع التخرج الرئيسي" : "Featured Engineering Centerpiece"}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight mb-4 gradient-text"
          >
            {g.title[lang]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto"
          >
            {g.subtitle[lang]}
          </motion.p>
        </div>

        {/* Narrative Split Details */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          <div className="space-y-6">
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-border/40 shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400"><FaCogs className="w-4 h-4" /></span>
                <span>{isArabic ? "المشكلة" : "The Core Problem"}</span>
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">
                {g.problem[lang]}
              </p>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-3xl border border-border/40 shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400"><FaServer className="w-4 h-4" /></span>
                <span>{isArabic ? "الحل المصمم" : "The Engineered Solution"}</span>
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">
                {g.solution[lang]}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-border/40 shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="p-2 rounded-xl bg-purple-500/10 text-purple-400"><FaShieldAlt className="w-4 h-4" /></span>
                <span>{isArabic ? "المساهمة الشخصية" : "My Personal Contributions"}</span>
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">
                {g.contribution[lang]}
              </p>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-3xl border border-border/40 shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="p-2 rounded-xl bg-amber-500/10 text-amber-400"><FaFileAlt className="w-4 h-4" /></span>
                <span>{isArabic ? "التحدي التقني" : "Key Technical Obstacles"}</span>
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">
                {g.challenges[lang]}
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Visualization Centerpiece */}
        <div className="glass-card rounded-3xl border border-border/40 shadow-2xl p-6 md:p-8 mb-12">
          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-border/30 pb-4 justify-center md:justify-start">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 cursor-pointer",
                  activeTab === tab.id
                    ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/10"
                    : "text-muted-foreground hover:bg-slate-900/10 dark:hover:bg-white/5 hover:text-foreground"
                )}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Visualization Panel */}
          <div className="min-h-[300px] flex items-center justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              {activeTab === "arch" && (
                <motion.div
                  key="arch"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col items-center justify-center p-4"
                >
                  <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest mb-6">
                    {isArabic ? "محاكاة تدفق الحزم الآمن" : "Secure Network Packet Tunnel Simulator"}
                  </p>
                  
                  {/* Interactive tunnel graphics SVG */}
                  <div className="relative w-full max-w-lg h-36 flex items-center justify-between border border-border/20 rounded-2xl p-6 bg-slate-950/40">
                    <div className="flex flex-col items-center gap-1.5 z-10 bg-slate-900/90 p-3 rounded-xl border border-border/30 w-24">
                      <span className="text-xs font-bold text-foreground">Client Device</span>
                      <span className="text-[9px] text-muted-foreground">Virtual TUN/TAP</span>
                    </div>

                    <div className="flex flex-col items-center gap-1.5 z-10 bg-slate-900/90 p-3 rounded-xl border border-border/30 w-28">
                      <span className="text-xs font-bold text-indigo-400">VPN Gateway</span>
                      <span className="text-[9px] text-muted-foreground">C++ event loop</span>
                    </div>

                    <div className="flex flex-col items-center gap-1.5 z-10 bg-slate-900/90 p-3 rounded-xl border border-border/30 w-24">
                      <span className="text-xs font-bold text-foreground">Internet WAN</span>
                      <span className="text-[9px] text-muted-foreground">AES-256-GCM</span>
                    </div>

                    {/* SVG tunnel path with moving particles */}
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      {/* Left connecting line */}
                      <path d="M 96 72 L 208 72" stroke="rgba(99,102,241,0.2)" strokeWidth="3" />
                      {/* Right connecting line */}
                      <path d="M 320 72 L 400 72" stroke="rgba(99,102,241,0.2)" strokeWidth="3" />

                      {/* Packet Flow particle animation */}
                      {config.enableBackgroundAnimations && (
                        <>
                          <circle r="4" fill="#06b6d4" className="filter drop-shadow-[0_0_8px_#06b6d4]">
                            <animateMotion
                              path="M 96 72 L 208 72"
                              dur="2.5s"
                              repeatCount="indefinite"
                            />
                          </circle>
                          <circle r="4" fill="#6366f1" className="filter drop-shadow-[0_0_8px_#6366f1]">
                            <animateMotion
                              path="M 320 72 L 400 72"
                              dur="2s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        </>
                      )}
                    </svg>
                  </div>
                  
                  <div className="mt-6 text-center max-w-md">
                    <p className="text-xs text-muted-foreground">
                      {isArabic
                        ? "يتم التقاط حركة المرور محلياً عبر واجهة TUN الافتراضية، ودفعه بشكل متزامن من خلال مقابس Epoll المفتوحة وتشفيره على الفور."
                        : "Raw packet structures are captured via virtual network drivers, serialized securely, and transmitted dynamically across high-speed asynchronous Epoll loops."}
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "crypto" && (
                <motion.div
                  key="crypto"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col items-center p-4"
                >
                  <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest mb-6">
                    {isArabic ? "خطوات بروتوكول التشفير المخصص" : "Custom Encrypted Handshake Stepper"}
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 w-full max-w-3xl mb-8">
                    {cryptoSteps.map((step, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCryptoStep(idx)}
                        className={cn(
                          "glass-card p-4 rounded-xl text-left border cursor-pointer hover:border-indigo-400/40 transition-all duration-300",
                          isArabic && "text-right",
                          cryptoStep === idx
                            ? "border-indigo-500 bg-indigo-500/5 shadow-md shadow-indigo-500/5"
                            : "border-border/30"
                        )}
                      >
                        <h4 className="text-xs font-bold text-foreground mb-1">{step.title}</h4>
                        <p className="text-[10px] text-muted-foreground leading-relaxed">{step.desc}</p>
                      </button>
                    ))}
                  </div>

                  <div className="w-full max-w-lg p-5 rounded-2xl border border-border/30 bg-slate-950/40 relative min-h-24">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={cryptoStep}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-center"
                      >
                        <span className="text-3xl mb-2 inline-block">
                          {cryptoStep === 0 ? "🤝" : cryptoStep === 1 ? "🔑" : "🔒"}
                        </span>
                        <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">
                          {cryptoSteps[cryptoStep].title}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {cryptoStep === 0
                            ? (isArabic ? "تم تحسينه لتجنب ثغرات التسمم والاعتراض الشبكي." : "Optimized to achieve secure key distribution with zero pre-shared parameters.")
                            : cryptoStep === 1
                            ? (isArabic ? "يولد مفتاحين منفصلين للإرسال والاستقبال لضمان اتصالات ثنائية الاتجاه آمنة." : "Produces distinct encryption/decryption keys, achieving secure bi-directional secrecy.")
                            : (isArabic ? "حماية كاملة ضد تعديل الحزم مع تشفير مضاد للقرصنة الكمومية." : "Complete defense against replay attacks and tamper vectors via strict verification tags.")}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}

              {activeTab === "ai" && (
                <motion.div
                  key="ai"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col items-center p-4"
                >
                  <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest mb-6">
                    {isArabic ? "نظام كشف الشذوذ بالذكاء الاصطناعي في الوقت الفعلي" : "Real-time AI Anomaly Classification Flow"}
                  </p>

                  <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-2xl relative">
                    <div className="glass-card p-4 rounded-xl border border-border/30 text-center w-full md:w-44">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-1">Packet Stream</span>
                      <span className="text-xs font-semibold text-foreground">Feature Vector Extractor</span>
                    </div>

                    <div className="text-indigo-400 text-lg rotate-90 md:rotate-0">➡️</div>

                    <div className="glass-card p-4 rounded-xl border border-border/30 text-center w-full md:w-44 relative overflow-hidden">
                      <div className="absolute inset-0 bg-indigo-500/5 animate-pulse" />
                      <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block mb-1">Autoencoder (ONNX)</span>
                      <span className="text-xs font-semibold text-foreground">Reconstruction Error Check</span>
                    </div>

                    <div className="text-indigo-400 text-lg rotate-90 md:rotate-0">➡️</div>

                    <div className="glass-card p-4 rounded-xl border border-border/30 text-center w-full md:w-44">
                      <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block mb-1">Classifier Engine</span>
                      <span className="text-xs font-semibold text-foreground">Isolation Forest Layer</span>
                    </div>
                  </div>

                  <div className="mt-8 text-center max-w-lg">
                    <p className="text-xs text-muted-foreground">
                      {isArabic
                        ? "يتم تشغيل نماذج Autoencoders و Isolation Forest بشكل مجمع للتأكد من سلوك الحزمة. إذا تجاوز معدل الخطأ في إعادة بناء الحزمة حد الأمان الفاصل، يتم فوراً عزل عنوان IP وحظر تدفقه."
                        : "Flow vectors stream into ONNX-compiled Autoencoders. If the reconstructed statistical deviation scores exceed critical bounds, the packet is flagged and Isolation Forests isolate the network route instantly."}
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "perf" && (
                <motion.div
                  key="perf"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col items-center p-4"
                >
                  <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest mb-6">
                    {isArabic ? "مقارنة أداء بوابة الـ VPN المكتوبة بـ C++" : "C++ Tunneling Performance Benchmarks"}
                  </p>

                  <div className="w-full max-w-md space-y-5">
                    {/* Bench 1: Latency */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-foreground">Packet Encapsulation Latency (Lower is Better)</span>
                        <span className="text-indigo-400">1.2ms (This System)</span>
                      </div>
                      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-border/10">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "30%" }} transition={{ duration: 1 }} className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
                      </div>
                      <div className="flex justify-between text-[9px] text-muted-foreground">
                        <span>This System (C++): 1.2ms</span>
                        <span>Standard OpenVPN: 4.8ms</span>
                      </div>
                    </div>

                    {/* Bench 2: Throughput */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-foreground">Peak Throughput Line-Rate (Higher is Better)</span>
                        <span className="text-indigo-400">850 Mbps</span>
                      </div>
                      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-border/10">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "88%" }} transition={{ duration: 1 }} className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
                      </div>
                      <div className="flex justify-between text-[9px] text-muted-foreground">
                        <span>This System: 850+ Mbps</span>
                        <span>Traditional VPN solutions: 450 Mbps</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Quantifiable Project Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <div className="glass-card p-5 rounded-2xl border border-border/40 text-center shadow-lg hover:border-indigo-400/30 transition-all">
            <span className="text-2xl md:text-3xl font-extrabold text-indigo-400 font-sans tracking-tight block">
              850+ Mbps
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-1 block">
              {isArabic ? "معدل نقل البيانات" : "Tunnel Throughput"}
            </span>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-border/40 text-center shadow-lg hover:border-indigo-400/30 transition-all">
            <span className="text-2xl md:text-3xl font-extrabold text-cyan-400 font-sans tracking-tight block">
              96.4% Acc
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-1 block">
              {isArabic ? "دقة الكشف بالذكاء الاصطناعي" : "AI Detection Accuracy"}
            </span>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-border/40 text-center shadow-lg hover:border-indigo-400/30 transition-all">
            <span className="text-2xl md:text-3xl font-extrabold text-purple-400 font-sans tracking-tight block">
              &lt; 5ms
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-1 block">
              {isArabic ? "زمن المصافحة المشفرة" : "Session Handshake"}
            </span>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-border/40 text-center shadow-lg hover:border-indigo-400/30 transition-all">
            <span className="text-2xl md:text-3xl font-extrabold text-amber-500 font-sans tracking-tight block">
              &lt; 1.2ms
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-1 block">
              {isArabic ? "زمن تأخير الحزمة" : "Encapsulation Latency"}
            </span>
          </div>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4 justify-center">
          {project.details.github && (
            <a
              href={project.details.github}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-900/10 dark:bg-white/5 hover:bg-slate-900/20 dark:hover:bg-white/10 text-foreground font-semibold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 border border-border hover:border-indigo-400/40 cursor-pointer flex items-center gap-2"
            >
              <FaGithub className="w-4 h-4 text-indigo-400" />
              <span>{isArabic ? "مستودع الأكواد" : "GitHub Codebase"}</span>
            </a>
          )}

          <button
            onClick={() => alert(isArabic ? "توثيق النظام متوفر حالياً بمستودع الأكواد." : "System documentation is embedded in the main codebase repository.")}
            className="px-6 py-3 rounded-xl bg-slate-900/10 dark:bg-white/5 hover:bg-slate-900/20 dark:hover:bg-white/10 text-foreground font-semibold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 border border-border hover:border-indigo-400/40 cursor-pointer flex items-center gap-2"
          >
            <FaFileAlt className="w-4 h-4 text-cyan-400" />
            <span>{isArabic ? "توثيق النظام" : "Systems Docs"}</span>
          </button>
        </div>

      </div>
    </section>
  )
}
