export interface ProfileData {
  name: { en: string; ar: string }
  avatarUrl: string
  availabilityBadge: { en: string; ar: string }
  greeting: { en: string; ar: string }
  titles: {
    en: string[]
    ar: string[]
  }
  description: { en: string; ar: string }
  bio: { en: string; ar: string }
  stats: {
    experience: number
    projects: number
    technologies: number
  }
  aboutSubtitle: { en: string; ar: string }
  pillars: {
    title: { en: string; ar: string }
    desc: { en: string; ar: string }
  }[]
  journey: {
    title: { en: string; ar: string }
    subtitle: { en: string; ar: string }
    items: {
      year: string
      title: { en: string; ar: string }
      desc: { en: string; ar: string }
    }[]
  }
}

export const profile: ProfileData = {
  name: {
    en: "Youssef Ayman Mohamed",
    ar: "يوسف أيمن محمد"
  },
  avatarUrl: "/media/profile/placeholder-user.jpg",
  availabilityBadge: {
    en: "Available for Projects & Roles",
    ar: "متاح للمشاريع والوظائف الهندسية"
  },
  greeting: {
    en: "Hello, I am",
    ar: "مرحباً، أنا"
  },
  titles: {
    en: [
      "Software Engineer",
      "Full-Stack Developer",
      "AI Engineer",
      "Cybersecurity Engineer"
    ],
    ar: [
      "مهندس برمجيات",
      "مطور ويب Full-Stack",
      "مهندس ذكاء اصطناعي",
      "مهندس أمن سيبراني"
    ]
  },
  description: {
    en: "Building resilient backend architectures, real-time artificial intelligence pipelines, and secure network gateways. Let's engineer high-performance systems.",
    ar: "أقوم ببناء بنى تحتية برمجية قوية، وأنظمة ذكاء اصطناعي في الوقت الفعلي، وبوابات شبكية آمنة. دعنا نصمم أنظمة عالية الأداء معاً."
  },
  bio: {
    en: "I am a Software Engineer specialized in designing high-performance backend systems, distributed architectures, and cryptographic security protocols. With a strong theoretical background in Computer Science from Cairo University, I write optimized C++, build secure C#/.NET enterprise backends, and implement low-overhead ONNX-based deep learning pipelines.",
    ar: "أنا مهندس برمجيات متخصص في تصميم الأنظمة الخلفية عالية الأداء، البنى الموزعة، وبروتوكولات الأمان التشفيرية. مع خلفية نظرية متينة في علوم الحاسب من جامعة القاهرة، أكتب كود C++ محسن، وأبني أنظمة مؤسسية آمنة بـ C#/.NET، وأقوم بدمج نماذج التعلم العميق منخفضة الاستهلاك المعتمدة على ONNX Runtime."
  },
  stats: {
    experience: 2,
    projects: 15,
    technologies: 10
  },
  aboutSubtitle: {
    en: "Bridging Systems Engineering, Artificial Intelligence & Network Security",
    ar: "الربط بين هندسة الأنظمة، الذكاء الاصطناعي، وأمن الشبكات"
  },
  pillars: [
    {
      title: {
        en: "System & Backend Architecture",
        ar: "بنية الأنظمة والـ Backend"
      },
      desc: {
        en: "Designing highly concurrent RESTful/gRPC API structures, caching strategies using Redis, and database query profiling in PostgreSQL and MongoDB.",
        ar: "تصميم واجهات برمجية RESTful/gRPC متزامنة للغاية، واستراتيجيات التخزين المؤقت باستخدام Redis، وتحليل أداء الاستعلامات في PostgreSQL و MongoDB."
      }
    },
    {
      title: {
        en: "Artificial Intelligence Integration",
        ar: "دمج الذكاء الاصطناعي"
      },
      desc: {
        en: "Developing and deploying optimized deep learning classifiers. Experienced with ONNX Runtime, PyTorch models, and real-time anomaly detection pipelines.",
        ar: "تطوير ونشر مصنفات التعلم العميق المحسنة. خبرة مع ONNX Runtime، ونماذج PyTorch، وأنظمة كشف الشذوذ في الشبكات في الوقت الفعلي."
      }
    },
    {
      title: {
        en: "Network Security & Cryptography",
        ar: "أمن الشبكات والتشفير"
      },
      desc: {
        en: "Engineering custom secure protocols using modern cryptography (X25519 DH handshakes, HKDF key derivation, and AES-256-GCM authenticated encryption).",
        ar: "هندسة بروتوكولات آمنة مخصصة باستخدام التشفير الحديث (مبادلات مفاتيح X25519 DH، واشتقاق المفاتيح HKDF، والتشفير الموثق AES-256-GCM)."
      }
    }
  ],
  journey: {
    title: {
      en: "Engineering Journey Roadmap",
      ar: "خريطة الرحلة الهندسية"
    },
    subtitle: {
      en: "Milestones, growth path, and key learnings",
      ar: "المحطات الرئيسية، مسار النمو، وأبرز الدروس المستفادة"
    },
    items: [
      {
        year: "2022",
        title: { en: "Academics Foundation", ar: "تأسيس القاعدة الأكاديمية" },
        desc: {
          en: "Started Computer Science studies at Cairo University, gaining base parameters in memory stacks, algorithms, and assembly logic.",
          ar: "بدأت دراسة علوم الحاسب بجامعة القاهرة، واكتسبت أساسيات متينة في الذاكرة، الخوارزميات، وتجميع المكونات (Assembly)."
        }
      },
      {
        year: "2023",
        title: { en: "Backend Systems", ar: "أنظمة الـ Backend" },
        desc: {
          en: "Built responsive Web apps, transitioned to ASP.NET Core, C#, and SQL Server architecture, and solved multi-threading locks.",
          ar: "تطوير تطبيقات ويب سريعة، والانتقال للعمل بـ ASP.NET Core، C#، وبنية قواعد بيانات SQL Server، وحل مشاكل تزامن الخيوط."
        }
      },
      {
        year: "2024",
        title: { en: "Deep Learning Integration", ar: "دمج التعلم العميق" },
        desc: {
          en: "Integrated ONNX model classifiers in C++ frameworks, built real-time neural network evaluation pipelines.",
          ar: "دمج مصنفات نماذج ONNX داخل أطر عمل C++، وبناء قنوات استدلال وتقييم فوري للشبكات العصبية."
        }
      },
      {
        year: "2024",
        title: { en: "Enterprise Deliveries", ar: "شحن المشروعات للمؤسسات" },
        desc: {
          en: "Collaborated at Endoura Soft delivering scalable desktop clients, micro-routing modules, and optimizing PostgreSQL databases.",
          ar: "التعاون في Endoura Soft لتسليم تطبيقات سطح مكتب قابلة للتوسع، وحدات توجيه صغيرة، وتحسين قواعد بيانات PostgreSQL."
        }
      },
      {
        year: "2025 - Present",
        title: { en: "The Next Threshold", desc: "The Next Threshold", ar: "العتبة التقنية التالية" },
        desc: {
          en: "Designing secure virtual network drivers in C++, exploring Rust memory footprints, and scaling container services.",
          ar: "تصميم برامج تشغيل الشبكات الافتراضية بـ C++، استكشاف الذاكرة في لغة Rust، وإدارة وتوسيع الحاويات البرمجية."
        }
      }
    ]
  },
  footerData: {
    text: {
      en: "Engineered with Next.js 14, Tailwind CSS, TypeScript, and Framer Motion.",
      ar: "تم التطوير باستخدام Next.js 14، Tailwind CSS، TypeScript، و Framer Motion."
    }
  }
}
