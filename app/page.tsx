"use client"

import React, { useEffect, useState } from "react"
import {
  Github,
  Linkedin,
  Phone,
  MapPin,
  Code,
  Sparkles,
  Globe,
  Layers,
  Mail,
  MessageCircle,
  Award,
  ArrowLeft,
  ArrowRight,
} from "lucide-react"

// =========================
// 0. Minimal UI helpers (reusable; adjust if you use shadcn/ui)
// =========================
// @ts-nocheck
const Button = ({ children, variant = "default", size = "default", asChild, className = "", ...props }) => {
  let base = "inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none ";
  if (variant === "outline") base += "bg-transparent border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 ";
  else if (variant === "secondary") base += "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 ";
  else if (variant === "link") base += "bg-transparent underline text-sky-600 dark:text-sky-400 ";
  else base += "bg-sky-600 text-white dark:bg-sky-500 dark:text-black ";

  if (size === "lg") base += "px-6 py-3 text-lg ";
  else if (size === "sm") base += "px-3 py-1 text-sm ";
  else base += "px-4 py-2 ";

  const Element = asChild ? "a" : "button"
  return (
    <Element className={`${base} ${className}`} {...props}>
      {children}
    </Element>
  )
}

const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl border bg-white/40 dark:bg-gray-900/60 border-gray-200 dark:border-gray-800 shadow-md ${className}`}>{children}</div>
)
const CardHeader = ({ children, className = "" }) => <div className={`p-6 border-b border-transparent ${className}`}>{children}</div>
const CardTitle = ({ children, className = "" }) => <h3 className={`text-xl md:text-2xl font-bold ${className}`}>{children}</h3>
const CardDescription = ({ children, className = "" }) => <p className={`text-sm text-gray-600 dark:text-gray-300 ${className}`}>{children}</p>
const CardContent = ({ children, className = "" }) => <div className={`p-6 ${className}`}>{children}</div>
const Badge = ({ children, className = "" }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 text-xs rounded-full bg-white/10 dark:bg-white/6 ${className}`}>{children}</span>
)

// =========================
// 1. Styles + Animations
// =========================
const Styles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Cairo:wght@400;700&display=swap');

    :root{
      --bg-1: #0b0636;
      --bg-2: #071a3a;
      --accent-1: #7c4dff;
      --accent-2: #00e5ff;
      --glass: rgba(255,255,255,0.04);
    }

    html,body,#root { height: 100%; }

    .poppins { font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
    .cairo { font-family: 'Cairo', sans-serif; }

    /* animated gradient waves */
    .animated-gradient {
      background: linear-gradient(120deg, var(--bg-1), #1c1142 20%, var(--bg-2), #001a2b 80%);
      background-size: 300% 300%;
      animation: gradientShift 12s ease infinite;
    }
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* subtle wave svg overlay (blended) */
    .wave-overlay { mix-blend-mode: screen; opacity: 0.12; filter: blur(8px); }

    /* neon title */
    .neon {
      background: linear-gradient(90deg, var(--accent-1), var(--accent-2));
      -webkit-background-clip: text; background-clip: text; color: transparent;
      text-shadow: 0 6px 30px rgba(0, 0, 0, 0.6), 0 0 18px rgba(124,77,255,0.08);
    }

    /* floating/entrance */
    .fade-up { opacity: 0; transform: translateY(18px); transition: opacity .7s ease, transform .7s ease; }
    .fade-up.show { opacity: 1; transform: translateY(0); }

    .pulse { animation: pulse 3s ease-in-out infinite; }
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.02); }
      100% { transform: scale(1); }
    }

    /* particles */
    .particle {
      position: absolute; border-radius: 9999px; filter: blur(.6px); opacity: .14;
      background: radial-gradient(circle at 30% 30%, rgba(124,77,255,0.95), rgba(0,229,255,0.4));
      animation: floaty 8s ease-in-out infinite;
    }
    @keyframes floaty {
      0% { transform: translateY(0) translateX(0); }
      50% { transform: translateY(-30px) translateX(12px); }
      100% { transform: translateY(0) translateX(0); }
    }

    /* glass card */
    .glass { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border: 1px solid rgba(255,255,255,0.04); backdrop-filter: blur(6px) saturate(120%); }

    /* slider + dots */
    .slider-container { position: relative; overflow: hidden; border-radius: 12px; }
    .slider-track { display: flex; transition: transform .5s cubic-bezier(.2,.9,.3,1); }
    .slider-slide { flex: 0 0 100%; padding: 1rem; box-sizing: border-box; }
    .slider-dot { width: 8px; height: 8px; border-radius: 999px; display: inline-block; background: rgba(255,255,255,0.2); margin: 0 6px; cursor: pointer; transition: background .25s ease; }
    .slider-dot.active { background: var(--accent-2); box-shadow: 0 6px 22px rgba(0,229,255,0.06); }

    /* responsive tweaks */
    @media (max-width: 640px) {
      .hero-title { font-size: 1.8rem; }
    }

    /* RTL adjustments: Cairo font + text alignment tweaks */
    .rtl .cairo { direction: rtl; text-align: right; }
  `}</style>
)

// =========================
// 2. Translations (polished wording) -- Arabic + English polished
// =========================
const translations = {
  en: {
    name: "Youssef Ayman Mohamed",
    title: "4th-year Computer Science • Full-Stack Developer",
    about: "About Me",
    aboutText:
      "I'm a passionate 4th-year Computer Science student at Cairo University. I build clean, responsive web and desktop apps using React, Node.js and .NET. I enjoy translating ideas into polished products and learning best practices for maintainable code.",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    certificates: "Certificates",
    contact: "Contact",
    education: "Education",
    educationText: "Faculty of Science — Cairo University\nComputer Science Department — 4th Year",
    workExperience: "Endoura Soft (2024 — Present)",
    workDescription: "Worked on web apps (React/Node), desktop solutions (C#/.NET) and database integrations (Postgres, MongoDB).",
    projectsData: [
      { title: "Learning Hub", description: "React + Node educational platform", tech: ["React", "Node.js", "MongoDB"], link: "https://youtube.com" },
      { title: "Attendance QR", description: "C# QR attendance app", tech: ["C#", "WinForms"], link: "https://google.com" },
      { title: "E-commerce Demo", description: "Training e-commerce site", tech: ["React", "CSS"], link: "https://github.com" },
    ],
    skillsData: ["Java", "C#", "C++", "JavaScript", "React", "Node.js", "SQL", "Postgres", "MongoDB", "Git"],
    languages: "Languages",
    languagesData: ["Arabic — Native", "English — Very Good"],
    facebookLabel: "Facebook",
    instagramLabel: "Instagram",
  },
  ar: {
    name: "يوسف أيمن محمد",
    title: "طالب سنة رابعة علوم حاسب • مطور Full-Stack",
    about: "نبذة عني",
    aboutText:
      "أنا طالب بالفرقة الرابعة في كلية العلوم – جامعة القاهرة. أحب تطوير تطبيقات ويب وسطح مكتب بواجهات واضحة وتجربة مستخدم جيدة. أعمل بـ React و Node.js و .NET وأهتم بكتابة كود قابل للصيانة.",
    experience: "الخبرة",
    projects: "المشاريع",
    skills: "المهارات",
    certificates: "الشهادات",
    contact: "التواصل",
    education: "التعليم",
    educationText: "كلية العلوم — جامعة القاهرة\nقسم الحاسبات — الفرقة الرابعة",
    workExperience: "Endoura Soft (2024 — الآن)",
    workDescription: "عملت على تطبيقات ويب (React/Node) وحلول سطح مكتب (C#/.NET) وربط قواعد بيانات (Postgres, MongoDB).",
    projectsData: [
      { title: "Learning Hub", description: "منصة تعليمية بـ React و Node.js", tech: ["React", "Node.js", "MongoDB"], link: "https://youtube.com" },
      { title: "نظام حضور", description: "تطبيق حضور بـ C# و QR", tech: ["C#", "WinForms"], link: "https://google.com" },
      { title: "E-commerce Demo", description: "مشروع تجريبي للتجارة الإلكترونية", tech: ["React", "CSS"], link: "https://github.com" },
    ],
    skillsData: ["Java", "C#", "C++", "JavaScript", "React", "Node.js", "SQL", "Postgres", "MongoDB", "Git"],
    languages: "اللغات",
    languagesData: ["العربية — اللغة الأم", "الإنجليزية — جيد جداً"],
    facebookLabel: "فيسبوك",
    instagramLabel: "انستجرام",
  },
}

// =========================
// 3. Main component
// =========================
export default function Portfolio() {
  // language + theme (basic)
  const [lang, setLang] = useState<"en" | "ar">(() => (typeof window !== "undefined" && localStorage.getItem("lang") ? (localStorage.getItem("lang") as "en" | "ar") : "en"))
  const [theme, setTheme] = useState<"light" | "dark">(() => (typeof window !== "undefined" && (localStorage.getItem("theme") as "light" | "dark") ? (localStorage.getItem("theme") as "light" | "dark") : (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")))
  const t = translations[lang]
  const isArabic = lang === "ar"

  useEffect(() => {
    if (typeof window === "undefined") return
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem("lang", lang)
  }, [lang])

  // simple reveal observer for fade-up elements
  useEffect(() => {
    if (typeof window === "undefined") return
    const els = Array.from(document.querySelectorAll(".fade-up"))
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show")
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // slider data
  const certificates = ["/images/cert1.png", "/images/cert2.jpg", "/images/cert3.png"] // set your real paths
  const [slide, setSlide] = useState(0)
  const total = certificates.length || 1
  const next = () => setSlide((s) => (s + 1) % total)
  const prev = () => setSlide((s) => (s - 1 + total) % total)
  const goTo = (i) => setSlide(i)

  // contact links (replace with yours)
  const phone = "+201007586266"
  const phone2 = "+201146433667"
  const email = "youssef.ayman@example.com"
  const facebookLink = "https://www.facebook.com/" // replace
  const instagramLink = "https://www.instagram.com/" // replace
  const githubLink = "https://github.com/yossef-ayman"
  const linkedinLink = "https://linkedin.com/in/yossef-ayman-357b15304"
  const whatsappLink = `https://wa.me/${phone.replace("+", "")}`

  // scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const header = document.querySelector("header")
    const headerH = header ? (header as HTMLElement).offsetHeight : 70
    const top = el.getBoundingClientRect().top + window.scrollY - headerH - 12
    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <div className={`min-h-screen poppins ${isArabic ? "rtl" : "ltr"} animated-gradient`} dir={isArabic ? "rtl" : "ltr"}>
      <Styles />

      {/* decorative particles (absolute) */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 13) % 100}%`,
              width: `${4 + (i % 3) * 3}px`,
              height: `${4 + (i % 3) * 3}px`,
              animationDelay: `${(i % 5) * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 dark:bg-black/40 border-b border-white/6">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`text-lg font-bold ${isArabic ? "cairo" : ""}`} style={{ letterSpacing: 0.2 }}>
              <span className="neon">{t.name}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="toggle language"
              onClick={() => setLang((l) => (l === "en" ? "ar" : "en"))}
              className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/12 text-sm"
            >
              {isArabic ? "EN" : "ع"}
            </button>

            <button
              aria-label="toggle theme"
              onClick={() => setTheme((th) => (th === "light" ? "dark" : "light"))}
              className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/12 text-sm"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="h-screen flex items-center justify-center relative pt-16">
        {/* animated SVG wave overlay */}
        <svg className="absolute inset-0 wave-overlay" viewBox="0 0 1440 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7c4dff" stopOpacity="0.12" />
              <stop offset="60%" stopColor="#00e5ff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#7c4dff" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <path fill="url(#g1)" d="M0,160 C220,260 360,40 720,120 C1040,200 1320,280 1440,240 L1440,600 L0,600 Z">
            <animate attributeName="d" dur="14s" repeatCount="indefinite"
              values="
                M0,160 C220,260 360,40 720,120 C1040,200 1320,280 1440,240 L1440,600 L0,600 Z;
                M0,180 C220,120 360,240 720,170 C1040,100 1320,320 1440,200 L1440,600 L0,600 Z;
                M0,140 C240,220 380,80 720,140 C1040,200 1320,220 1440,260 L1440,600 L0,600 Z;
                M0,160 C220,260 360,40 720,120 C1040,200 1320,280 1440,240 L1440,600 L0,600 Z
              " />
          </path>
        </svg>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className={`hero-title text-4xl md:text-6xl font-extrabold cairo ${isArabic ? "cairo" : ""}`} style={{ lineHeight: 1.05 }}>
            <span className="neon">{t.name}</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-slate-200">{t.title}</p>

          <div className="mt-8 flex items-center gap-4 justify-center">
            <Button className="pulse" size="lg" onClick={() => scrollTo("about")}>
              {t.about}
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollTo("projects")}>
              {t.projects}
            </Button>
          </div>

          {/* socials */}
          <div className="mt-6 flex items-center gap-3 justify-center">
            <a href={facebookLink} target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/6 hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V15.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.465h-1.26c-1.243 0-1.63.772-1.63 1.562V12h2.773l-.443 2.89h-2.33v5.988C18.343 21.128 22 16.99 22 12z"/></svg>
            </a>
            <a href={instagramLink} target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/6 hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5zM18.5 6a.9.9 0 1 0 .9.9A.9.9 0 0 0 18.5 6z"/></svg>
            </a>
            <a href={linkedinLink} target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/6 hover:scale-105 transition-transform">
              <Linkedin />
            </a>
            <a href={githubLink} target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/6 hover:scale-105 transition-transform">
              <Github />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-4xl fade-up" >
          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-center neon">{t.about}</CardTitle>
              <CardDescription className="text-center text-slate-300 mt-2">{t.education}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 leading-relaxed">{t.aboutText}</p>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-sky-300">{t.education}</h4>
                  <p className="text-gray-300 whitespace-pre-line">{t.educationText}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sky-300">{t.experience}</h4>
                  <p className="text-gray-300">{t.workExperience}</p>
                  <p className="text-sm text-gray-400 mt-2">{t.workDescription}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={`tel:${phone}`} className="flex items-center"><Phone className="w-4 h-4 mr-2" /> {phone}</a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={linkedinLink} target="_blank" rel="noreferrer" className="flex items-center"><Linkedin className="w-4 h-4 mr-2" /> LinkedIn</a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={githubLink} target="_blank" rel="noreferrer" className="flex items-center"><Github className="w-4 h-4 mr-2" /> GitHub</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl fade-up">
          <h2 className="text-3xl font-bold text-center neon mb-8">{t.projects}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.projectsData.map((p, i) => (
              <a key={i} href={p.link} target="_blank" rel="noreferrer" className="block">
                <Card className="h-full hover:translate-y-[-6px] transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">{p.title}</CardTitle>
                      <div className="p-2 rounded-full bg-white/6"><Code /></div>
                    </div>
                    <CardDescription className="text-gray-400">{p.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((tkn, k) => (
                        <Badge key={k} className="">{tkn}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-4xl fade-up">
          <h2 className="text-3xl font-bold text-center neon mb-8">{t.skills}</h2>
          <Card className="glass">
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">{t.skillsData.map((s, idx) => <Badge key={idx}>{s}</Badge>)}</div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">{t.languages}</h4>
                  <div className="space-y-2">{t.languagesData.map((l, idx) => <p key={idx} className="text-gray-300">{l}</p>)}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certificates (slider) */}
      <section id="certificates" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl fade-up">
          <h2 className="text-3xl font-bold text-center neon mb-8">{t.certificates}</h2>

          <div className="slider-container">
            <div className="slider-track" style={{ transform: `translateX(-${slide * 100}%)` }}>
              {certificates.map((src, idx) => (
                <div className="slider-slide" key={idx}>
                  <div className="rounded-lg overflow-hidden bg-white/6 dark:bg-black/40 flex items-center justify-center" style={{ minHeight: 220 }}>
                    <img src={src} alt={`cert-${idx}`} className="max-h-56 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  </div>
                </div>
              ))}
            </div>

            <button className="slider-button prev" onClick={prev} aria-label="prev" style={{ left: 12 }}>
              <ArrowLeft />
            </button>
            <button className="slider-button next" onClick={next} aria-label="next" style={{ right: 12 }}>
              <ArrowRight />
            </button>

            <div className="text-center mt-4">
              {certificates.map((_, i) => <span key={i} className={`slider-dot ${slide === i ? "active" : ""}`} onClick={() => goTo(i)} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-white/6">
        <div className="container mx-auto max-w-4xl fade-up">
          <h2 className="text-3xl font-bold text-center neon mb-8">{t.contact}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Info</CardTitle>
                <CardDescription>Reach out for collaborations or questions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-sky-500" /><a href={`tel:${phone}`} className="text-gray-300">{phone}</a> <span className="text-gray-500 mx-2">/</span> <span className="text-gray-300">{phone2}</span></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-sky-500" /><a href={`mailto:${email}`} className="text-gray-300">{email}</a></div>
                <div className="flex items-center gap-3 mb-4"><MapPin className="w-5 h-5 text-sky-500" /><span className="text-gray-300">Cairo, Egypt</span></div>

                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" asChild><a href={linkedinLink} target="_blank" rel="noreferrer" className="flex items-center"><Linkedin className="w-4 h-4 mr-2" /> LinkedIn</a></Button>
                  <Button variant="outline" size="sm" asChild><a href={githubLink} target="_blank" rel="noreferrer" className="flex items-center"><Github className="w-4 h-4 mr-2" /> GitHub</a></Button>
                  <Button variant="outline" size="sm" asChild><a href={facebookLink} target="_blank" rel="noreferrer" className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V15.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.465h-1.26c-1.243 0-1.63.772-1.63 1.562V12h2.773l-.443 2.89h-2.33v5.988C18.343 21.128 22 16.99 22 12z"/></svg>{t.facebookLabel}</a></Button>
                  <Button variant="outline" size="sm" asChild><a href={instagramLink} target="_blank" rel="noreferrer" className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5zM18.5 6a.9.9 0 1 0 .9.9A.9.9 0 0 0 18.5 6z"/></svg>{t.instagramLabel}</a></Button>
                  <Button variant="outline" size="sm" asChild><a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center"><MessageCircle className="w-4 h-4 mr-2" /> WhatsApp</a></Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Send a message</CardTitle>
                <CardDescription>Or use your email directly — I reply quickly.</CardDescription>
              </CardHeader>
              <CardContent>
                {/* simple contact form placeholder (replace with real ContactForm if available) */}
                <form onSubmit={(e) => { e.preventDefault(); alert("Message sent (demo) — replace with real form)"); }}>
                  <div className="space-y-3">
                    <input className="w-full p-3 rounded-md bg-black/10 dark:bg-white/4 border border-white/6" placeholder={isArabic ? "اسمك" : "Your name"} required />
                    <input className="w-full p-3 rounded-md bg-black/10 dark:bg-white/4 border border-white/6" placeholder="Email" type="email" required />
                    <textarea className="w-full p-3 rounded-md bg-black/10 dark:bg-white/4 border border-white/6" rows={5} placeholder={isArabic ? "رسالتك" : "Your message"} required />
                    <div className="flex justify-end">
                      <Button type="submit" className="bg-sky-600 text-white"> {isArabic ? "إرسال" : "Send"} </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/6">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} {t.name} — Built with care.</p>
          <div className="mt-3"><Button variant="link" size="sm" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{isArabic ? "العودة للأعلى" : "Back to top"}</Button></div>
        </div>
      </footer>

      {/* small script: reveal show on mount (for hero already visible) */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function(){ document.querySelectorAll('.fade-up').forEach(el=>el.classList.add('show')); })();
      `}} />
    </div>
  )
}
