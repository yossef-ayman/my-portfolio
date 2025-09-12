"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { ContactForm } from "@/components/contact-form"
import { Github, Linkedin, Phone, MapPin, Code, Sparkles } from "lucide-react"

const translations = {
  en: {
    name: "Youssef Ayman Mohamed",
    title: "Computer Science Student & Full-Stack Developer",
    about: "About Me",
    aboutText:
      "I am a 4th-year Computer Science student at Cairo University, Faculty of Science. I specialize in developing Web and Windows applications. I have been working for one year at Endoura Soft, where I gained solid hands-on experience in real-world projects.",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    education: "Education",
    educationText: "Faculty of Science – Cairo University\nComputer Science Department – 4th Year",
    workExperience: "Endoura Soft – (2024 – Present)",
    workDescription:
      "Developed web applications using React.js and Node.js. Built desktop applications with C# and .NET. Designed and integrated databases (SQL / PostgreSQL / MongoDB). Contributed to requirements analysis and technical problem solving.",
    projectsData: [
      {
        title: "Learning Hub",
        description: "An educational web platform built with React, Node.js, and MongoDB",
        tech: ["React", "Node.js", "MongoDB"],
      },
      {
        title: "Student Attendance System",
        description: "QR Code-based attendance system using C# and Windows Forms",
        tech: ["C#", "Windows Forms", "QR Code"],
      },
      {
        title: "E-commerce Projects",
        description: "Multiple training projects including e-commerce websites and dashboards",
        tech: ["React", "JavaScript", "CSS"],
      },
    ],
    skillsData: [
      "Java",
      "C++",
      "C#",
      "JavaScript",
      "React.js",
      "Node.js",
      "HTML",
      "CSS",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "GitHub",
    ],
    languages: "Languages",
    languagesData: ["Arabic: Native", "English: Very Good"],
    downloadCV: "Download CV",
    sendMessage: "Send Message",
  },
  ar: {
    name: "يوسف أيمن محمد",
    title: "طالب علوم حاسب ومطور تطبيقات",
    about: "نبذة عني",
    aboutText:
      "أنا طالب بالفرقة الرابعة في كلية العلوم – جامعة القاهرة، قسم الحاسبات. متخصص في تطوير تطبيقات الويب والويندوز. أعمل منذ سنة في شركة Endoura Soft، حيث اكتسبت خبرة عملية قوية من خلال العمل على مشاريع واقعية.",
    experience: "الخبرة العملية",
    projects: "المشاريع",
    skills: "المهارات",
    contact: "التواصل",
    education: "التعليم",
    educationText: "كلية العلوم – جامعة القاهرة\nقسم الحاسبات – الفرقة الرابعة",
    workExperience: "Endoura Soft – (2024 – الآن)",
    workDescription:
      "تطوير تطبيقات ويب باستخدام React.js و Node.js. بناء تطبيقات سطح المكتب باستخدام C# و .NET. تصميم وربط قواعد البيانات SQL / PostgreSQL / MongoDB. المشاركة في تحليل المتطلبات وحل المشكلات التقنية.",
    projectsData: [
      {
        title: "Learning Hub",
        description: "منصة تعليمية ويب مبنية بـ React و Node.js و MongoDB",
        tech: ["React", "Node.js", "MongoDB"],
      },
      {
        title: "نظام حضور الطلاب",
        description: "نظام حضور باستخدام QR Code مع C# و Windows Forms",
        tech: ["C#", "Windows Forms", "QR Code"],
      },
      {
        title: "مشاريع التجارة الإلكترونية",
        description: "مشاريع تدريبية متعددة تشمل مواقع التجارة الإلكترونية ولوحات التحكم",
        tech: ["React", "JavaScript", "CSS"],
      },
    ],
    skillsData: [
      "Java",
      "C++",
      "C#",
      "JavaScript",
      "React.js",
      "Node.js",
      "HTML",
      "CSS",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "GitHub",
    ],
    languages: "اللغات",
    languagesData: ["العربية: اللغة الأم", "الإنجليزية: جيد جداً"],
    downloadCV: "تحميل السيرة الذاتية",
    sendMessage: "إرسال رسالة",
  },
}

export default function Portfolio() {
  const [language, setLanguage] = useState<"en" | "ar">("en")
  const t = translations[language]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className={`min-h-screen bg-background ${language === "ar" ? "rtl" : "ltr"}`}>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">{t.name}</h1>
          <div className="flex items-center gap-4">
            <LanguageToggle language={language} setLanguage={setLanguage} />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section with Animated 2D Character */}
      <section className="w-full h-screen relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center space-y-6 max-w-4xl">
            {/* Animated floating icons */}
            <div className="relative">
              <div className="absolute -top-20 -left-20 animate-bounce delay-100">
                <Code className="w-8 h-8 text-primary/60" />
              </div>
              <div className="absolute -top-16 -right-16 animate-bounce delay-300">
                <Sparkles className="w-6 h-6 text-secondary/60" />
              </div>
              <div className="absolute -bottom-10 left-10 animate-bounce delay-500">
                <Github className="w-7 h-7 text-primary/40" />
              </div>
            </div>

            <div className="space-y-4 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground dark:text-foreground bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text dark:from-primary-foreground dark:via-secondary dark:to-primary-foreground animate-pulse-glow">
                {t.name}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground animate-slide-up">{t.title}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-200">
              <Button size="lg" className="pulse-glow" onClick={() => scrollToSection("about")}>
                {t.about}
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("projects")}>
                {t.projects}
              </Button>
            </div>
          </div>
        </div>
         </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center">{t.about}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.aboutText}</p>
            </CardContent>
          </Card>
        </div>
      
      
      
      </section>


        {/* Floating particles animation */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
     

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="float-animation">
            <CardHeader>
              <CardTitle className="text-3xl text-center">{t.about}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">{t.aboutText}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">{t.education}</h3>
                  <p className="text-muted-foreground whitespace-pre-line">{t.educationText}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">{t.experience}</h3>
                  <div className="space-y-2">
                    <h4 className="font-medium">{t.workExperience}</h4>
                    <p className="text-sm text-muted-foreground">{t.workDescription}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4 mr-2" />
                  +20 1002470826
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://linkedin.com/in/yossef-ayman-357b15304" target="_blank" rel="noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/yossef-ayman" target="_blank" rel="noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t.projects}</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {t.projectsData.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Code className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t.skills}</h2>

          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">{t.skills}</h3>
                  <div className="flex flex-wrap gap-2">
                    {t.skillsData.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">{t.languages}</h3>
                  <div className="space-y-2">
                    {t.languagesData.map((lang, index) => (
                      <p key={index} className="text-muted-foreground">
                        {lang}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t.contact}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>{t.contact}</CardTitle>
                <CardDescription>Get in touch for opportunities and collaborations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+20 1002470826 / +20 1146433667</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Cairo, Egypt</span>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://linkedin.com/in/yossef-ayman-357b15304" target="_blank" rel="noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/yossef-ayman" target="_blank" rel="noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <ContactForm language={language} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 {t.name}. Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
