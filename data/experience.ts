export interface ExperienceRole {
  company: string
  period: { en: string; ar: string }
  title: { en: string; ar: string }
  achievements: { en: string[]; ar: string[] }
  metrics: {
    label: { en: string; ar: string }
    value: string
  }[]
}

export interface ExperienceData {
  title: { en: string; ar: string }
  subtitle: { en: string; ar: string }
  roles: ExperienceRole[]
}

export const experience: ExperienceData = {
  title: {
    en: "Professional Experience",
    ar: "الخبرة المهنية"
  },
  subtitle: {
    en: "Engineering impact, performance metrics, and results",
    ar: "التأثير الهندسي، مقاييس الأداء، والنتائج المحققة"
  },
  roles: [
    {
      company: "Endoura Soft",
      period: {
        en: "2024 — Present",
        ar: "2024 — الآن"
      },
      title: {
        en: "Full-Stack Software Engineer",
        ar: "مهندس برمجيات Full-Stack"
      },
      achievements: {
        en: [
          "Architected scalable backend microservices in Node.js and C#/.NET Core, driving down API payload latency by 35%.",
          "Designed and optimized database indexing schemas in PostgreSQL and MongoDB, decreasing query overhead by 25%.",
          "Implemented cross-platform enterprise desktop modules utilizing thread-safe connection pools and local SQLite encryption keys.",
          "Led the frontend team in adopting Next.js and Tailwind CSS, increasing Lighthouse SEO and Accessibility rankings to 100/100."
        ],
        ar: [
          "بناء خدمات مصغرة (Microservices) قابلة للتوسع بـ Node.js و C#/.NET Core، مما خفض وقت استجابة الـ API بنسبة 35%.",
          "تصميم وتحسين فهارس قواعد البيانات في PostgreSQL و MongoDB، مما قلل العبء المعالج بنسبة 25%.",
          "تطوير وحدات برمجية لتطبيقات سطح المكتب للمؤسسات باستخدام اتصال آمن الخيوط وقواعد بيانات SQLite مشفرة محلياً.",
          "قيادة فريق الواجهات الأمامية لتبني Next.js و Tailwind CSS، ورفع تقييم Lighthouse لـ SEO وسهولة الوصول إلى 100/100."
        ]
      },
      metrics: [
        {
          label: { en: "API Latency", ar: "تأخير الـ API" },
          value: "-35%"
        },
        {
          label: { en: "CPU DB Load", ar: "حمل المعالجة" },
          value: "-25%"
        },
        {
          label: { en: "Lighthouse Score", ar: "تقييم Lighthouse" },
          value: "100/100"
        }
      ]
    }
  ]
}
