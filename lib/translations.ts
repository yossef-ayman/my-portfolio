export interface ProjectDetails {
  title: string
  subtitle: string
  problem: string
  solution: string
  contribution: string
  challenges: string
  results: string
  tech: string[]
  features: string[]
  link: string
  github?: string
  caseStudy?: boolean
}

export interface TranslationSchema {
  nav: {
    home: string
    about: string
    featured: string
    experience: string
    projects: string
    skills: string
    certificates: string
    contact: string
  }
  hero: {
    badge: string
    greeting: string
    name: string
    titles: string[]
    description: string
    expLabel: string
    projLabel: string
    techLabel: string
    btnDownloadCV: string
    btnViewProjects: string
    btnContactMe: string
    btnBookMeeting: string
  }
  about: {
    title: string
    subtitle: string
    bio: string
    educationTitle: string
    educationText: string
    pillars: {
      title: string
      desc: string
    }[]
  }
  skills: {
    title: string
    subtitle: string
    categories: {
      [key: string]: {
        title: string
        skills: { name: string; level: "Expert" | "Advanced" | "Intermediate" | "Learning" }[]
      }
    }
  }
  experience: {
    title: string
    subtitle: string
    roles: {
      company: string
      period: string
      title: string
      achievements: string[]
    }[]
  }
  graduation: {
    title: string
    sectionTitle: string
    tagline: string
    problemTitle: string
    problemText: string
    solutionTitle: string
    solutionText: string
    contributionTitle: string
    contributionText: string
    challengesTitle: string
    challengesText: string
    resultsTitle: string
    resultsText: string
    metrics: {
      throughput: string
      accuracy: string
      handshake: string
      latency: string
    }
    github: string
    documentation: string
    caseStudy: string
  }
  projects: {
    title: string
    subtitle: string
    filterAll: string
    details: {
      learningHub: ProjectDetails
      attendanceQR: ProjectDetails
      ecommerce: ProjectDetails
    }
  }
  certificates: {
    title: string
    subtitle: string
    items: {
      name: string
      provider: string
      issueDate: string
      credentialId: string
      image: string
      link: string
    }[]
    btnView: string
    btnDownload: string
  }
  achievements: {
    title: string
    items: { title: string; desc: string }[]
  }
  services: {
    title: string
    subtitle: string
    items: { title: string; desc: string }[]
  }
  currentLearning: {
    title: string
    subtitle: string
    items: { name: string; desc: string }[]
  }
  journey: {
    title: string
    subtitle: string
    items: { year: string; title: string; desc: string }[]
  }
  contact: {
    title: string
    subtitle: string
    formName: string
    formEmail: string
    formMessage: string
    btnSend: string
    btnSending: string
    formSuccess: string
    statusLabel: string
    statusText: string
    whatsappText: string
    meetingText: string
    copyEmail: string
    copySuccess: string
  }
  footer: {
    text: string
  }
}

export const translations: { en: TranslationSchema; ar: TranslationSchema } = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      featured: "Featured",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      certificates: "Credentials",
      contact: "Contact",
    },
    hero: {
      badge: "Available for Projects & Roles",
      greeting: "Hello, I am",
      name: "Youssef Ayman Mohamed",
      titles: [
        "Software Engineer",
        "Full-Stack Developer",
        "AI Engineer",
        "Cybersecurity Engineer",
      ],
      description:
        "Building resilient backend architectures, real-time artificial intelligence pipelines, and secure network gateways. Let's engineer high-performance systems.",
      expLabel: "Years of Experience",
      projLabel: "Completed Projects",
      techLabel: "Core Technologies",
      btnDownloadCV: "Download CV",
      btnViewProjects: "View Projects",
      btnContactMe: "Contact Me",
      btnBookMeeting: "Book a Meeting",
    },
    about: {
      title: "About Me",
      subtitle: "Bridging Systems Engineering, Artificial Intelligence & Network Security",
      bio: "I am a Software Engineer specialized in designing high-performance backend systems, distributed architectures, and cryptographic security protocols. With a strong theoretical background in Computer Science from Cairo University, I write optimized C++, build secure C#/.NET enterprise backends, and implement low-overhead ONNX-based deep learning pipelines.",
      educationTitle: "Education",
      educationText: "Cairo University — Faculty of Science\nBachelor of Science in Computer Science (4th Year / Senior Status)",
      pillars: [
        {
          title: "System & Backend Architecture",
          desc: "Designing highly concurrent RESTful/gRPC API structures, caching strategies using Redis, and database query profiling in PostgreSQL and MongoDB.",
        },
        {
          title: "Artificial Intelligence Integration",
          desc: "Developing and deploying optimized deep learning classifiers. Experienced with ONNX Runtime, PyTorch models, and real-time anomaly detection pipelines.",
        },
        {
          title: "Network Security & Cryptography",
          desc: "Engineering custom secure protocols using modern cryptography (X25519 DH handshakes, HKDF key derivation, and AES-256-GCM authenticated encryption).",
        },
      ],
    },
    skills: {
      title: "Technical Expertise",
      subtitle: "Categorized skill matrices and proficiency map",
      categories: {
        languages: {
          title: "Programming Languages",
          skills: [
            { name: "C++", level: "Expert" },
            { name: "C#", level: "Expert" },
            { name: "Python", level: "Advanced" },
            { name: "JavaScript", level: "Advanced" },
            { name: "TypeScript", level: "Advanced" },
            { name: "Java", level: "Intermediate" },
          ],
        },
        frontend: {
          title: "Frontend Development",
          skills: [
            { name: "React", level: "Advanced" },
            { name: "Next.js", level: "Advanced" },
            { name: "Tailwind CSS", level: "Expert" },
            { name: "HTML5/CSS3", level: "Expert" },
          ],
        },
        backend: {
          title: "Backend Development",
          skills: [
            { name: "Node.js", level: "Advanced" },
            { name: ".NET / ASP.NET", level: "Advanced" },
            { name: "Express.js", level: "Advanced" },
            { name: "REST APIs", level: "Expert" },
          ],
        },
        mobile: {
          title: "Mobile Development",
          skills: [
            { name: "React Native", level: "Intermediate" },
          ],
        },
        databases: {
          title: "Databases & Caching",
          skills: [
            { name: "PostgreSQL", level: "Advanced" },
            { name: "MongoDB", level: "Advanced" },
            { name: "SQL Server", level: "Advanced" },
            { name: "SQLite", level: "Expert" },
          ],
        },
        ai: {
          title: "Artificial Intelligence",
          skills: [
            { name: "ONNX Runtime", level: "Advanced" },
            { name: "Reinforcement Learning", level: "Intermediate" },
            { name: "Neural Networks", level: "Advanced" },
            { name: "Anomaly Detection", level: "Expert" },
          ],
        },
        security: {
          title: "Cybersecurity",
          skills: [
            { name: "AES-256-GCM / X25519", level: "Expert" },
            { name: "VPN Gateways", level: "Expert" },
            { name: "Intrusion Detection", level: "Advanced" },
            { name: "Network Auditing", level: "Advanced" },
          ],
        },
        networking: {
          title: "Networking",
          skills: [
            { name: "TCP/IP & UDP", level: "Expert" },
            { name: "Docker Networking", level: "Advanced" },
            { name: "TAP/TUN Devices", level: "Expert" },
            { name: "Routing Protocols", level: "Advanced" },
          ],
        },
        devops: {
          title: "DevOps & Cloud",
          skills: [
            { name: "Docker", level: "Advanced" },
            { name: "Git / GitHub Actions", level: "Expert" },
            { name: "Linux / Bash", level: "Advanced" },
          ],
        },
        tools: {
          title: "Developer Tools",
          skills: [
            { name: "VS Code", level: "Expert" },
            { name: "Visual Studio", level: "Expert" },
            { name: "Postman", level: "Expert" },
            { name: "Figma", level: "Intermediate" },
          ],
        },
      },
    },
    experience: {
      title: "Professional Experience",
      subtitle: "Engineering impact, performance metrics, and results",
      roles: [
        {
          company: "Endoura Soft",
          period: "2024 — Present",
          title: "Full-Stack Software Engineer",
          achievements: [
            "Developed and maintained full-stack web applications using modern frontend and backend technologies.",
            "Built scalable RESTful APIs and integrated relational and NoSQL databases.",
            "Collaborated with cross-functional teams to deliver e-commerce, fintech, educational, and hosting solutions.",
            "Improved application performance, maintainability, and overall user experience."
          ],
        },
      ],
    },
    graduation: {
      title: "Crowning Engineering Project",
      sectionTitle: "AI-Powered Secure VPN Gateway",
      tagline: "A hybrid high-throughput network tunneling gateway with real-time neural network anomaly inspection.",
      problemTitle: "The Problem",
      problemText: "Legacy enterprise firewalls rely on static rules, failing to identify zero-day polymorphic traffic attacks. Concurrently, standard network tunnels suffer from significant latency overhead, leaving data transfer slow and vulnerable to cryptanalytic interception.",
      solutionTitle: "The Engineered Solution",
      solutionText: "Designed and implemented an asynchronous network gateway. Written in native C++ using Linux system interfaces (TUN/TAP) for raw packet ingestion, it runs an asynchronous event loop for symmetric encryption via AES-256-GCM. Session key agreements are performed securely using X25519 diffie-hellman handshakes. The server is integrated with a lightweight, multi-threaded ONNX Runtime inference engine analyzing statistical packet flow records dynamically in memory.",
      contributionTitle: "Personal Contributions",
      contributionText: "Wrote the C++ virtual network driver abstraction layer, engineered the socket multiplexer, integrated the ONNX runtime library, configured the lock-free circular packet buffer queue, and containerized the testing stack using Docker networking topologies.",
      challengesTitle: "Key Technical Obstacle",
      challengesText: "Preventing high-frequency packet routing from blocking during deep machine learning inspection. Resolved by writing a lock-free rings buffer to stream packet features asynchronously to a thread pool hosting ONNX Runtime, maintaining full tunneling speeds while logging security decisions in under 1.2 milliseconds.",
      resultsTitle: "Measurable Results",
      resultsText: "Secured over 850 Mbps network throughput under heavy test loads. Achieved a zero-day anomaly detection accuracy of 96.4% on packet flows, maintaining encapsulation latencies below 1.2ms.",
      metrics: {
        throughput: "850+ Mbps",
        accuracy: "96.4% Acc.",
        handshake: "< 5ms Handshake",
        latency: "< 1.2ms Latency",
      },
      github: "GitHub Codebase",
      documentation: "Systems Docs",
      caseStudy: "Deep-Dive Case Study",
    },
    projects: {
      title: "Engineering Portfolio",
      subtitle: "A showcase of core software products, systems, and client solutions",
      filterAll: "All Projects",
      details: {
        learningHub: {
          title: "Learning Hub",
          subtitle: "Enterprise E-Learning Platform",
          problem: "Traditional LMS portals suffered from buffering lags and synchronization delays when recording student course milestones.",
          solution: "Built a robust Next.js and Node.js platform utilizing optimized state hooks, multi-CDN caching, and database schemas styled with styled components.",
          contribution: "Designed the relational MongoDB schemas, engineered jwt-based authorization routers, and implemented progress tracking tracking middlewares.",
          challenges: "Database locking during multiple concurrent writes. Resolved by implementing write queuing and indexing optimizations.",
          results: "Reduced average load times by 40% and maintained zero-downtime production delivery during traffic surges.",
          tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
          features: ["Real-time Sync", "Progress Tracking", "Admin Control Panel", "Auto-grading"],
          link: "https://youtube.com",
          github: "https://github.com/yossef-ayman",
        },
        attendanceQR: {
          title: "Attendance QR System",
          subtitle: "Secure Single-Use QR Attendance Utility",
          problem: "Legacy check-in queues suffered from buddy-punching fraud and hardware card failure costs.",
          solution: "Developed an enterprise C#/.NET desktop client that generates dynamically hashing QR tokens refreshed every 3 seconds.",
          contribution: "Coded the cryptographically randomized hash generator, built the WinForms local camera capture handler, and set up SQLite auditing exports.",
          challenges: "Camera frame lag in low-light environments. Solved by integrating custom grayscale filters and brightness adjustment hooks.",
          results: "Verified check-ins in under 0.8 seconds, eliminating security fraud across corporate test networks.",
          tech: ["C#", ".NET Core", "WinForms", "SQLite", "QR Code Engine"],
          features: ["Dynamic Hash Refreshes", "Camera Decoders", "Automated Excel Export", "Encrypted Local Storage"],
          link: "https://google.com",
          github: "https://github.com/yossef-ayman",
        },
        ecommerce: {
          title: "E-Commerce Architecture",
          subtitle: "High-Performance Modern Client System",
          problem: "Static inventory changes and massive responsive layout shifts negatively impact customer conversion rates.",
          solution: "Engineered a responsive frontend with strict virtualized lists, custom cache controls, and optimized image layouts.",
          contribution: "Constructed the React frontend application, cart status contexts, and CSS grid layouts.",
          challenges: "Large catalog item scaling causing CPU render blocks. Fixed by integrating dynamic list virtualization.",
          results: "Scored 100/100 on Google Lighthouse performance audits with zero cumulative layout shifts.",
          tech: ["React", "Tailwind CSS", "Context API", "Lighthouse Tools"],
          features: ["List Virtualization", "Zero Layout Shift", "Client Caching", "Responsive Layouts"],
          link: "https://github.com",
          github: "https://github.com/yossef-ayman",
        },
      },
    },
    certificates: {
      title: "Professional Credentials",
      subtitle: "Verified industry certifications and academic achievements",
      items: [
        {
          name: "Advanced SQL & Database Management",
          provider: "Udemy / Technical Academy",
          issueDate: "2024",
          credentialId: "UC-074ca7a2-871f-4b1b-96f3-d617b1656cf9",
          image: "/certificates/UC-074ca7a2-871f-4b1b-96f3-d617b1656cf9.jpg",
          link: "https://ude.my/UC-074ca7a2-871f-4b1b-96f3-d617b1656cf9",
        },
        {
          name: "C# & .NET Core Enterprise Architectures",
          provider: "Udemy / Technical Academy",
          issueDate: "2024",
          credentialId: "UC-79315266-465c-4701-91a1-ef8c2d040093",
          image: "/certificates/UC-79315266-465c-4701-91a1-ef8c2d040093.jpg",
          link: "https://ude.my/UC-79315266-465c-4701-91a1-ef8c2d040093",
        },
        {
          name: "Full-Stack React & Node.js Development",
          provider: "Udemy / Technical Academy",
          issueDate: "2024",
          credentialId: "UC-932d717c-f99d-4216-b8a1-9081e9320cd5",
          image: "/certificates/UC-932d717c-f99d-4216-b8a1-9081e9320cd5.jpg",
          link: "https://ude.my/UC-932d717c-f99d-4216-b8a1-9081e9320cd5",
        },
        {
          name: "شهادة أساسيات البرمجة",
          provider: "الأرشيف الشخصي",
          issueDate: "2026",
          credentialId: "IMG-001",
          image: "/certificates/1775763908341.jpg",
          link: "/certificates/1775763908341.jpg",
        },
        {
          name: "شهادة تطوير الخلفية",
          provider: "الأرشيف الشخصي",
          issueDate: "2026",
          credentialId: "IMG-002",
          image: "/certificates/1775763909126.jpg",
          link: "/certificates/1775763909126.jpg",
        },
        {
          name: "شهادة تطوير الواجهة",
          provider: "الأرشيف الشخصي",
          issueDate: "2026",
          credentialId: "IMG-003",
          image: "/certificates/1775763909992.jpg",
          link: "/certificates/1775763909992.jpg",
        },
        {
          name: "شهادة الأمن السيبراني والشبكات",
          provider: "الأرشيف الشخصي",
          issueDate: "2026",
          credentialId: "IMG-004",
          image: "/certificates/1775763910437.jpg",
          link: "/certificates/1775763910437.jpg",
        },
        {
          name: "لقطة شهادة 1",
          provider: "الأرشيف الشخصي",
          issueDate: "2026",
          credentialId: "IMG-005",
          image: "/certificates/Screenshot%202026-02-03%20200541.png",
          link: "/certificates/Screenshot%202026-02-03%20200541.png",
        },
        {
          name: "لقطة شهادة 2",
          provider: "الأرشيف الشخصي",
          issueDate: "2026",
          credentialId: "IMG-006",
          image: "/certificates/Screenshot%202026-02-07%20225303.png",
          link: "/certificates/Screenshot%202026-02-07%20225303.png",
        },
        {
          name: "Programming Fundamentals Certificate",
          provider: "Personal Archive",
          issueDate: "2026",
          credentialId: "IMG-001",
          image: "/certificates/1775763908341.jpg",
          link: "/certificates/1775763908341.jpg",
        },
        {
          name: "Backend Development Certificate",
          provider: "Personal Archive",
          issueDate: "2026",
          credentialId: "IMG-002",
          image: "/certificates/1775763909126.jpg",
          link: "/certificates/1775763909126.jpg",
        },
        {
          name: "Frontend Development Certificate",
          provider: "Personal Archive",
          issueDate: "2026",
          credentialId: "IMG-003",
          image: "/certificates/1775763909992.jpg",
          link: "/certificates/1775763909992.jpg",
        },
        {
          name: "Cybersecurity & Networking Certificate",
          provider: "Personal Archive",
          issueDate: "2026",
          credentialId: "IMG-004",
          image: "/certificates/1775763910437.jpg",
          link: "/certificates/1775763910437.jpg",
        },
        {
          name: "Certificate Screenshot 1",
          provider: "Personal Archive",
          issueDate: "2026",
          credentialId: "IMG-005",
          image: "/certificates/Screenshot%202026-02-03%20200541.png",
          link: "/certificates/Screenshot%202026-02-03%20200541.png",
        },
        {
          name: "Certificate Screenshot 2",
          provider: "Personal Archive",
          issueDate: "2026",
          credentialId: "IMG-006",
          image: "/certificates/Screenshot%202026-02-07%20225303.png",
          link: "/certificates/Screenshot%202026-02-07%20225303.png",
        },
      ],
      btnView: "Verify ID",
      btnDownload: "Download PDF",
    },
    achievements: {
      title: "Achievements & Milestones",
      items: [
        { title: "CCNA Training Completed", desc: "Expertise in subnetting, routing tables, network infrastructure, and transport layers." },
        { title: "NVIDIA Prompt Engineering", desc: "Certified in directing Large Language Models for systems integration." },
        { title: "High-Performance VPN Gateway", desc: "Coded a custom multi-threaded secure gateway routing packet data dynamically." },
        { title: "15+ Completed Deliveries", desc: "Shipped functional products across desktop systems, web clients, and API layers." },
        { title: "Freelance Success", desc: "Delivered customized data scrapers, dashboard tools, and backend utilities for global clients." },
      ],
    },
    services: {
      title: "Professional Services",
      subtitle: "Technical engineering services offered for global clients",
      items: [
        { title: "High-Performance Backend Development", desc: "Designing scalable API layers, custom database schemas, and optimized services in .NET Core and Node.js." },
        { title: "Frontend Engineering", desc: "Constructing pixel-perfect, highly accessible responsive interfaces in React/Next.js with clean state logic." },
        { title: "Secure Networking & VPNs", desc: "Designing custom encryption protocols, network packet monitoring tools, and secure system tunnels." },
        { title: "AI Pipeline Integration", desc: "Decoupling deep learning model inference processes (ONNX) into performant backend workflows." },
        { title: "Database Architecture", desc: "Profiling SQL/NoSQL systems, write performance optimization, indexing, and connection pools." },
      ],
    },
    currentLearning: {
      title: "Current Technical Focus",
      subtitle: "Active research domains and technologies under development",
      items: [
        { name: "Go (Golang)", desc: "Engineering ultra-lightweight, concurrent microservices utilizing channels and green threads." },
        { name: "Kubernetes", desc: "Orchestrating containerized systems, automated scaling, and networking service meshes." },
        { name: "Rust", desc: "Exploring system-level memory safety without garbage collection to build zero-overhead software." },
      ],
    },
    journey: {
      title: "Engineering Evolution",
      subtitle: "Chronology of technical skill growth",
      items: [
        { year: "2022", title: "Academics & Algorithms", desc: "Initiated Computer Science studies at Cairo University. Specialized in assembly structures, data designs, and C++ OOP logic." },
        { year: "2023", title: "Full-Stack Transition", desc: "Mastered Javascript architectures. Crafted custom web layouts, dynamic frontends, and robust REST APIs." },
        { year: "2024", title: "Enterprise & Databases", desc: "Collaborated at Endoura Soft. Engineered live business platforms, relational index optimizations, and C# API modules." },
        { year: "2025", title: "AI & Cybersecurity Core", desc: "Designed the AI secure VPN network centerpiece. Deployed ONNX runtime routines inside real-time networking threads." },
        { year: "2026", title: "Systems Scaling", desc: "Deploying production-grade containerized systems, optimizing networking bounds, and building for global clients." },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's discuss freelance projects, architectural roles, or full-time opportunities",
      formName: "Full Name",
      formEmail: "Email Address",
      formMessage: "Project Scope / Message",
      btnSend: "Send Message",
      btnSending: "Transmitting...",
      formSuccess: "Message transmitted successfully! I will contact you shortly.",
      statusLabel: "Availability Status",
      statusText: "Open to Work (Full-Time or Freelance Contracts)",
      whatsappText: "Direct WhatsApp Chat",
      meetingText: "Book 1:1 Consultation",
      copyEmail: "Copy Email Address",
      copySuccess: "Copied!",
    },
    footer: {
      text: "Designed & Engineered by Youssef Ayman Mohamed. Powered by Next.js, TypeScript, Tailwind, and Framer Motion.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عني",
      featured: "المشروع المميز",
      experience: "الخبرة",
      projects: "المشاريع",
      skills: "المهارات",
      certificates: "الشهادات",
      contact: "التواصل",
    },
    hero: {
      badge: "متاح للمشاريع والوظائف الهندسية",
      greeting: "مرحباً، أنا",
      name: "يوسف أيمن محمد",
      titles: [
        "مهندس برمجيات",
        "مطور ويب Full-Stack",
        "مهندس ذكاء اصطناعي",
        "مهندس أمن سيبراني",
      ],
      description:
        "أقوم ببناء بنى تحتية برمجية قوية، وأنظمة ذكاء اصطناعي في الوقت الفعلي، وبوابات شبكية آمنة. دعنا نصمم أنظمة عالية الأداء معاً.",
      expLabel: "سنوات من الخبرة",
      projLabel: "مشاريع مكتملة",
      techLabel: "تقنيات رئيسية",
      btnDownloadCV: "تحميل السيرة الذاتية",
      btnViewProjects: "عرض المشاريع",
      btnContactMe: "تواصل معي",
      btnBookMeeting: "حجز موعد",
    },
    about: {
      title: "نبذة عني",
      subtitle: "الربط بين هندسة الأنظمة، الذكاء الاصطناعي، وأمن الشبكات",
      bio: "أنا مهندس برمجيات متخصص في تصميم الأنظمة الخلفية عالية الأداء، البنى الموزعة، وبروتوكولات الأمان التشفيرية. مع خلفية نظرية متينة في علوم الحاسب من جامعة القاهرة، أكتب كود C++ محسن، وأبني أنظمة مؤسسية آمنة بـ C#/.NET، وأقوم بدمج نماذج التعلم العميق منخفضة الاستهلاك المعتمدة على ONNX Runtime.",
      educationTitle: "التعليم",
      educationText: "جامعة القاهرة — كلية العلوم\nبكالوريوس علوم الحاسب (سنة رابعة / مرحلة التخرج)",
      pillars: [
        {
          title: "بنية الأنظمة والـ Backend",
          desc: "تصميم واجهات برمجية RESTful/gRPC متزامنة للغاية، واستراتيجيات التخزين المؤقت باستخدام Redis، وتحليل أداء الاستعلامات في PostgreSQL و MongoDB.",
        },
        {
          title: "دمج الذكاء الاصطناعي",
          desc: "تطوير ونشر مصنفات التعلم العميق المحسنة. خبرة مع ONNX Runtime، ونماذج PyTorch، وأنظمة كشف الشذوذ في الشبكات في الوقت الفعلي.",
        },
        {
          title: "أمن الشبكات والتشفير",
          desc: "هندسة بروتوكولات آمنة مخصصة باستخدام التشفير الحديث (مبادلات مفاتيح X25519 DH، واشتقاق المفاتيح HKDF، والتشفير الموثق AES-256-GCM).",
        },
      ],
    },
    skills: {
      title: "الخبرات التقنية",
      subtitle: "تصنيف المهارات وخريطة مستوى الكفاءة",
      categories: {
        languages: {
          title: "لغات البرمجة",
          skills: [
            { name: "C++", level: "Expert" },
            { name: "C#", level: "Expert" },
            { name: "Python", level: "Advanced" },
            { name: "JavaScript", level: "Advanced" },
            { name: "TypeScript", level: "Advanced" },
            { name: "Java", level: "Intermediate" },
          ],
        },
        frontend: {
          title: "تطوير الواجهات الأمامية",
          skills: [
            { name: "React", level: "Advanced" },
            { name: "Next.js", level: "Advanced" },
            { name: "Tailwind CSS", level: "Expert" },
            { name: "HTML5/CSS3", level: "Expert" },
          ],
        },
        backend: {
          title: "تطوير الأنظمة الخلفية",
          skills: [
            { name: "Node.js", level: "Advanced" },
            { name: ".NET / ASP.NET", level: "Advanced" },
            { name: "Express.js", level: "Advanced" },
            { name: "REST APIs", level: "Expert" },
          ],
        },
        mobile: {
          title: "تطوير تطبيقات الهاتف",
          skills: [
            { name: "React Native", level: "Intermediate" },
          ],
        },
        databases: {
          title: "قواعد البيانات والتخزين المؤقت",
          skills: [
            { name: "PostgreSQL", level: "Advanced" },
            { name: "MongoDB", level: "Advanced" },
            { name: "SQL Server", level: "Advanced" },
            { name: "SQLite", level: "Expert" },
          ],
        },
        ai: {
          title: "الذكاء الاصطناعي",
          skills: [
            { name: "ONNX Runtime", level: "Advanced" },
            { name: "Reinforcement Learning", level: "Intermediate" },
            { name: "Neural Networks", level: "Advanced" },
            { name: "Anomaly Detection", level: "Expert" },
          ],
        },
        security: {
          title: "الأمن السيبراني",
          skills: [
            { name: "AES-256-GCM / X25519", level: "Expert" },
            { name: "VPN Gateways", level: "Expert" },
            { name: "Intrusion Detection", level: "Advanced" },
            { name: "Network Auditing", level: "Advanced" },
          ],
        },
        networking: {
          title: "الشبكات",
          skills: [
            { name: "TCP/IP & UDP", level: "Expert" },
            { name: "Docker Networking", level: "Advanced" },
            { name: "TAP/TUN Devices", level: "Expert" },
            { name: "Routing Protocols", level: "Advanced" },
          ],
        },
        devops: {
          title: "الـ DevOps والسحاب",
          skills: [
            { name: "Docker", level: "Advanced" },
            { name: "Git / GitHub Actions", level: "Expert" },
            { name: "Linux / Bash", level: "Advanced" },
          ],
        },
        tools: {
          title: "أدوات التطوير",
          skills: [
            { name: "VS Code", level: "Expert" },
            { name: "Visual Studio", level: "Expert" },
            { name: "Postman", level: "Expert" },
            { name: "Figma", level: "Intermediate" },
          ],
        },
      },
    },
    experience: {
      title: "الخبرة المهنية",
      subtitle: "التأثير الهندسي، مقاييس الأداء، والنتائج المحققة",
      roles: [
        {
          company: "Endoura Soft",
          period: "2024 — الآن",
          title: "مهندس برمجيات Full-Stack",
          achievements: [
            "طوّرت وصحّحت تطبيقات ويب Full-Stack باستخدام تقنيات حديثة للواجهة الأمامية والخلفية.",
            "بنيت واجهات برمجية RESTful قابلة للتوسع ودمجت قواعد بيانات علائقية وغير علائقية.",
            "تعاونت مع فرق متعددة التخصصات لتقديم حلول تجارة إلكترونية، ومالية رقمية، وتعليمية، واستضافة.",
            "حسّنت أداء التطبيقات وسهولة الصيانة وتجربة المستخدم بشكل عام."
          ],
        },
      ],
    },
    graduation: {
      title: "مشروع التخرج الرئيسي",
      sectionTitle: "بوابة VPN آمنة مدعومة بالذكاء الاصطناعي",
      tagline: "بوابة نفق شبكة هجينة عالية الإنتاجية مع فحص فوري لحركة المرور باستخدام الشبكات العصبية لكشف الاختراقات.",
      problemTitle: "المشكلة",
      problemText: "تعتمد جدران الحماية التقليدية للمؤسسات على قواعد ثابتة، مما يفشل في كشف هجمات البيانات المشوهة ذات اليوم الصفر. في الوقت نفسه، تعاني الأنفاق الشبكية التقليدية من تأخير ملحوظ في نقل البيانات، مما يتركها عرضة للاعتراض.",
      solutionTitle: "الحل الهندسي",
      solutionText: "تصميم وتنفيذ بوابة شبكة غير متزامنة مكتوبة بلغة C++ باستخدام واجهات نظام Linux (TUN/TAP) لالتقاط الحزم الأولية، مع تشغيل حلقة أحداث غير متزامنة للتشفير المتناظر عبر AES-256-GCM. تتم اتفاقيات مفاتيح الجلسة بأمان باستخدام مبادلات X25519 Diffie-Hellman. تم دمج الخادم مع محرك استدلال خفيف الوزن متعدد الخيوط ONNX Runtime لتحليل سجلات تدفق الحزم إحصائياً في الذاكرة فورياً.",
      contributionTitle: "المساهمات الشخصية",
      contributionText: "كتابة طبقة تجريد برنامج تشغيل الشبكة الافتراضية C++، هندسة معدد مقابس الاتصال، دمج مكتبة ONNX Runtime، إعداد قائمة انتظار الحزم الدائرية خالية الأقفال، وحزم بيئة الاختبار بالكامل باستخدام شبكات Docker.",
      challengesTitle: "العقبة التقنية الرئيسية",
      challengesText: "منع تعطل توجيه الحزم عالي التردد أثناء فحص الذكاء الاصطناعي العميق. تم حل المشكلة عن طريق كتابة ذاكرة تخزين دائرية خالية الأقفال (Lock-free Ring Buffer) لتدفق ميزات الحزم بشكل غير متزامن إلى تجمع خيوط يستضيف ONNX Runtime، مما يحافظ على سرعات الاتصال مع تسجيل القرارات الأمنية في أقل من 1.2 مللي ثانية.",
      resultsTitle: "النتائج القابلة للقياس",
      resultsText: "تأمين سرعة نقل بيانات شبكية تتجاوز 850 ميجابت في الثانية تحت أقصى أحمال الاختبار. تحقيق دقة كشف شذوذ بلغت 96.4% على تدفقات الحزم، مع الحفاظ على زمن تأخير التغليف أقل من 1.2 مللي ثانية.",
      metrics: {
        throughput: "850+ ميجابت/ث",
        accuracy: "دقة 96.4%",
        handshake: "مصافحة < 5ملي ثانية",
        latency: "تأخير < 1.2ملي ثانية",
      },
      github: "مستودع الكود على GitHub",
      documentation: "توثيق النظام",
      caseStudy: "دراسة حالة عميقة",
    },
    projects: {
      title: "معرض المشاريع الهندسية",
      subtitle: "عرض للمنتجات البرمجية، الأنظمة، وحلول العملاء الرئيسية",
      filterAll: "كل المشاريع",
      details: {
        learningHub: {
          title: "Learning Hub",
          subtitle: "منصة تعليمية للمؤسسات",
          problem: "كانت البوابات التعليمية التقليدية تعاني من تأخيرات التخزين المؤقت وتأخر المزامنة عند تسجيل تقدم الطلاب في المواد التعليمية.",
          solution: "بناء منصة قوية باستخدام Next.js و Node.js باستخدام خطافات حالة محسنة وتخزين مؤقت متعدد، وقواعد بيانات مهيأة بدقة.",
          contribution: "تصميم مخططات قاعدة بيانات MongoDB، هندسة مسارات المصادقة المستندة إلى JWT، وتنفيذ برمجيات وسيطة لتتبع التقدم.",
          challenges: "قفل قاعدة البيانات أثناء عمليات الكتابة المتزامنة المتعددة. تم الحل عن طريق تنفيذ قوائم انتظار الكتابة وتحسين الفهرسة.",
          results: "تقليل متوسط أوقات التحميل بنسبة 40% والمحافظة على استقرار النظام أثناء ذروة الزيارات.",
          tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
          features: ["مزامنة فورية", "تتبع التقدم", "لوحة تحكم المشرف", "تقييم تلقائي"],
          link: "https://youtube.com",
          github: "https://github.com/yossef-ayman",
        },
        attendanceQR: {
          title: "نظام الحضور بـ QR",
          subtitle: "أداة حضور آمنة بـ QR مؤقت أحادي الاستخدام",
          problem: "عانت طوابير تسجيل الحضور القديمة من احتيال تبادل الهويات وتكاليف بطاقات الأجهزة التالفة.",
          solution: "تطوير تطبيق سطح مكتب للمؤسسات بلغة C#/.NET يقوم بتوليد رموز QR مشفرة تتجدد تلقائياً كل 3 ثوانٍ.",
          contribution: "كتابة مولد الهاش العشوائي المشفر، بناء معالج التقاط الكاميرا المحلي في WinForms، وإعداد تصدير التقارير في SQLite.",
          challenges: "تأخر إطارات الكاميرا في البيئات ذات الإضاءة المنخفضة. تم حل المشكلة عن طريق دمج مرشحات تباين مخصصة وتحسين الصورة.",
          results: "التحقق من الحضور في أقل من 0.8 ثانية، مما قضى على الاحتيال تماماً عبر شبكات الاختبار.",
          tech: ["C#", ".NET Core", "WinForms", "SQLite", "QR Engine"],
          features: ["تحديث هاش ديناميكي", "فك ترميز الكاميرا", "تصدير تلقائي لإكسل", "تخزين محلي مشفر"],
          link: "https://google.com",
          github: "https://github.com/yossef-ayman",
        },
        ecommerce: {
          title: "بنية التجارة الإلكترونية",
          subtitle: "نظام واجهة مستخدم حديث عالي الأداء",
          problem: "تؤثر تغييرات المخزون الثابتة وتحولات التصميم غير المستقرة سلباً على معدلات تحويل العملاء.",
          solution: "هندسة واجهة أمامية سريعة الاستجابة مع قوائم افتراضية صارمة، وضوابط ذاكرة تخزين مؤقت مخصصة، وتخطيطات صور محسنة.",
          contribution: "بناء تطبيق React الأمامي، وسياقات حالة عربة التسوق، وتخطيطات CSS Grid.",
          challenges: "تحميل الكتالوج الكبير يسبب بطء معالجة الواجهة. تم الإصلاح بدمج القوائم الافتراضية الذكية.",
          results: "تسجيل 100/100 في تدقيق أداء Google Lighthouse مع انعدام تام لتحرك العناصر المفاجئ.",
          tech: ["React", "Tailwind CSS", "Context API", "Lighthouse Tools"],
          features: ["افتراضية القوائم", "انعدام تحرك العناصر", "تخزين مؤقت للعميل", "تصميم مرن"],
          link: "https://github.com",
          github: "https://github.com/yossef-ayman",
        },
      },
    },
    certificates: {
      title: "الشهادات المهنية",
      subtitle: "المؤهلات المعتمدة والإنجازات الأكاديمية التي تم التحقق منها",
      items: [
        {
          name: "قواعد البيانات المتقدمة وإدارتها (Advanced SQL)",
          provider: "Udemy / Technical Academy",
          issueDate: "2024",
          credentialId: "UC-074ca7a2-871f-4b1b-96f3-d617b1656cf9",
          image: "/certificates/UC-074ca7a2-871f-4b1b-96f3-d617b1656cf9.jpg",
          link: "https://ude.my/UC-074ca7a2-871f-4b1b-96f3-d617b1656cf9",
        },
        {
          name: "بنى برمجيات المؤسسات بـ C# & .NET Core",
          provider: "Udemy / Technical Academy",
          issueDate: "2024",
          credentialId: "UC-79315266-465c-4701-91a1-ef8c2d040093",
          image: "/certificates/UC-79315266-465c-4701-91a1-ef8c2d040093.jpg",
          link: "https://ude.my/UC-79315266-465c-4701-91a1-ef8c2d040093",
        },
        {
          name: "تطوير الويب المتكامل بـ React & Node.js",
          provider: "Udemy / Technical Academy",
          issueDate: "2024",
          credentialId: "UC-932d717c-f99d-4216-b8a1-9081e9320cd5",
          image: "/certificates/UC-932d717c-f99d-4216-b8a1-9081e9320cd5.jpg",
          link: "https://ude.my/UC-932d717c-f99d-4216-b8a1-9081e9320cd5",
        },
      ],
      btnView: "التحقق من الهوية",
      btnDownload: "تحميل PDF",
    },
    achievements: {
      title: "الإنجازات والنجاحات",
      items: [
        { title: "إتمام تدريب CCNA للشبكات", desc: "خبرة واسعة في تجزئة الشبكات، جداول التوجيه، البنية التحتية، وطبقات النقل." },
        { title: "هندسة الأوامر من NVIDIA", desc: "معتمد في توجيه نماذج اللغة الكبيرة وتكامل الأنظمة." },
        { title: "بوابة VPN عالية الأداء", desc: "كتابة بوابة نفق مشفرة مخصصة متعددة الخيوط تقوم بتوجيه الحزم بكفاءة." },
        { title: "تسليم أكثر من 15 مشروعاً", desc: "شحن منتجات برمجية متكاملة لسطح المكتب، الويب، وطبقات الـ API للعملاء." },
        { title: "نجاح العمل الحر", desc: "تسليم أدوات سحب بيانات مخصصة، لوحات تحكم، وخدمات Backend لعملاء دوليين ومحليين." },
      ],
    },
    services: {
      title: "الخدمات المهنية",
      subtitle: "خدمات هندسية متطورة أقدمها للشركات والعملاء عالمياً",
      items: [
        { title: "تطوير Backend عالي الأداء", desc: "تصميم طبقات API قابلة للتطوير، مخططات قواعد بيانات مخصصة، وخدمات متقدمة بـ .NET Core و Node.js." },
        { title: "هندسة الواجهات الأمامية", desc: "بناء واجهات مستخدم متجاوبة ودقيقة وسهلة الوصول بـ React/Next.js مع إدارة ذكية للحالة." },
        { title: "أمن الشبكات وحلول الـ VPN", desc: "تصميم بروتوكولات تشفير مخصصة، أدوات مراقبة حزم الشبكة، وأنفاق الأنظمة الآمنة." },
        { title: "دمج خطوط استدلال الذكاء الاصطناعي", desc: "فصل ونشر معالجة استدلال نماذج التعلم العميق (ONNX) داخل بيئات Backend عالية السرعة." },
        { title: "بنية وهندسة قواعد البيانات", desc: "تحليل وضبط أنظمة SQL/NoSQL، تحسين سرعة الكتابة، الفهرسة، وإدارة تجمعات الاتصالات." },
      ],
    },
    currentLearning: {
      title: "التركيز التقني الحالي",
      subtitle: "المجالات البحثية والتقنيات قيد التطوير النشط حالياً",
      items: [
        { name: "لغة Go (Golang)", desc: "هندسة خدمات مصغرة خفيفة الوزن للغاية ومتزامنة باستخدام قنوات الاتصال والخيوط الخضراء." },
        { name: "Kubernetes", desc: "إدارة الأنظمة والحاويات، التوسع التلقائي، وهندسة شبكات الاتصال بين الحاويات." },
        { name: "لغة Rust", desc: "استكشاف أمان الذاكرة على مستوى النظام دون الحاجة لجامع القمامة لبناء برمجيات فائقة السرعة." },
      ],
    },
    journey: {
      title: "مسيرتي الهندسية",
      subtitle: "التسلسل الزمني لنمو مهاراتي التقنية",
      items: [
        { year: "2022", title: "الأكاديمية والخوارزميات", desc: "بدء دراسة علوم الحاسب في جامعة القاهرة. التخصص في بنية المعالجات، وتصميم هياكل البيانات، ومنطق C++ الكائني." },
        { year: "2023", title: "التحول نحو الويب المتكامل", desc: "إتقان بنى جافا سكريبت. بناء واجهات مستخدم ديناميكية، وتطبيقات ويب سريعة، وواجهات برمجة REST APIs قوية." },
        { year: "2024", title: "الأنظمة المؤسسية وقواعد البيانات", desc: "العمل مع Endoura Soft. تطوير منصات تجارية مباشرة، تحسين فهرسة قواعد البيانات، ووحدات API بـ C#." },
        { year: "2025", title: "الذكاء الاصطناعي والأمن السيبراني", desc: "تصميم نفق VPN الآمن بالذكاء الاصطناعي. دمج خيوط استدلال ONNX runtime داخل خيوط معالجة الحزم المباشرة." },
        { year: "2026", title: "توسيع الأنظمة والإنتاجية", desc: "نشر أنظمة حاويات إنتاجية متكاملة، تحسين سرعات الشبكة، وتقديم الحلول التقنية للعملاء عالمياً." },
      ],
    },
    contact: {
      title: "تواصل معي",
      subtitle: "دعنا نناقش مشاريع العمل الحر، الفرص الوظيفية الهندسية، أو الاستشارات التقنية",
      formName: "الاسم الكامل",
      formEmail: "البريد الإلكتروني",
      formMessage: "تفاصيل المشروع / الرسالة",
      btnSend: "إرسال الرسالة",
      btnSending: "جاري الإرسال...",
      formSuccess: "تم إرسال رسالتك بنجاح! سأتواصل معك في أقرب وقت ممكن.",
      statusLabel: "حالة التوفر الحالية",
      statusText: "متاح للعمل (دوام كامل أو عقود عمل حر مخصصة)",
      whatsappText: "محادثة واتساب مباشرة",
      meetingText: "حجز جلسة استشارية 1:1",
      copyEmail: "نسخ البريد الإلكتروني",
      copySuccess: "تم النسخ!",
    },
    footer: {
      text: "تم التصميم والهندسة بواسطة يوسف أيمن محمد. مدعوم بـ Next.js و TypeScript و Tailwind و Framer Motion.",
    },
  },
}
