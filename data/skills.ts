export interface SkillItem {
  name: string
  level: "Expert" | "Advanced" | "Intermediate" | "Learning"
}

export interface SkillCategory {
  title: { en: string; ar: string }
  skills: SkillItem[]
}

export interface SkillsData {
  title: { en: string; ar: string }
  subtitle: { en: string; ar: string }
  categories: {
    [key: string]: SkillCategory
  }
}

export const skillsData: SkillsData = {
  title: {
    en: "Technical Expertise",
    ar: "الخبرات التقنية"
  },
  subtitle: {
    en: "Categorized skill matrices and proficiency map",
    ar: "تصنيف المهارات وخريطة مستوى الكفاءة"
  },
  categories: {
    languages: {
      title: { en: "Programming Languages", ar: "لغات البرمجة" },
      skills: [
        { name: "C++", level: "Expert" },
        { name: "C#", level: "Expert" },
        { name: "Python", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
      ]
    },
    frontend: {
      title: { en: "Frontend Development", ar: "تطوير الواجهات الأمامية" },
      skills: [
        { name: "React", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "HTML5/CSS3", level: "Expert" },
      ]
    },
    backend: {
      title: { en: "Backend Development", ar: "تطوير الأنظمة الخلفية" },
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: ".NET / ASP.NET", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "REST APIs", level: "Expert" },
      ]
    },
    mobile: {
      title: { en: "Mobile Development", ar: "تطوير تطبيقات الهاتف" },
      skills: [
        { name: "React Native", level: "Intermediate" },
      ]
    },
    databases: {
      title: { en: "Databases & Caching", ar: "قواعد البيانات والتخزين المؤقت" },
      skills: [
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MongoDB", level: "Advanced" },
        { name: "SQL Server", level: "Advanced" },
        { name: "SQLite", level: "Expert" },
      ]
    },
    ai: {
      title: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
      skills: [
        { name: "ONNX Runtime", level: "Advanced" },
        { name: "Reinforcement Learning", level: "Intermediate" },
        { name: "Neural Networks", level: "Advanced" },
        { name: "Anomaly Detection", level: "Expert" },
      ]
    },
    security: {
      title: { en: "Cybersecurity", ar: "الأمن السيبراني" },
      skills: [
        { name: "AES-256-GCM / X25519", level: "Expert" },
        { name: "VPN Gateways", level: "Expert" },
        { name: "Intrusion Detection", level: "Advanced" },
        { name: "Network Auditing", level: "Advanced" },
      ]
    },
    networking: {
      title: { en: "Networking", ar: "الشبكات" },
      skills: [
        { name: "TCP/IP & UDP", level: "Expert" },
        { name: "Docker Networking", level: "Advanced" },
        { name: "TAP/TUN Devices", level: "Expert" },
        { name: "Routing Protocols", level: "Advanced" },
      ]
    },
    devops: {
      title: { en: "DevOps & Cloud", ar: "الـ DevOps والسحاب" },
      skills: [
        { name: "Docker", level: "Advanced" },
        { name: "Git / GitHub Actions", level: "Expert" },
        { name: "Linux / Bash", level: "Advanced" },
      ]
    },
    tools: {
      title: { en: "Developer Tools", ar: "أدوات التطوير" },
      skills: [
        { name: "VS Code", level: "Expert" },
        { name: "Visual Studio", level: "Expert" },
        { name: "Postman", level: "Expert" },
        { name: "Figma", level: "Intermediate" },
      ]
    }
  }
}
export const achievements = {
  title: { en: "Achievements & Milestones", ar: "الإنجازات والنجاحات" },
  items: [
    { 
      title: { en: "CCNA Training Completed", ar: "إتمام تدريب CCNA للشبكات" }, 
      desc: { en: "Expertise in subnetting, routing tables, network infrastructure, and transport layers.", ar: "خبرة واسعة في تجزئة الشبكات، جداول التوجيه، البنية التحتية، وطبقات النقل." } 
    },
    { 
      title: { en: "NVIDIA Prompt Engineering", ar: "هندسة الأوامر من NVIDIA" }, 
      desc: { en: "Certified in directing Large Language Models for systems integration.", ar: "معتمد في توجيه نماذج اللغة الكبيرة وتكامل الأنظمة." } 
    },
    { 
      title: { en: "High-Performance VPN Gateway", ar: "بوابة VPN عالية الأداء" }, 
      desc: { en: "Coded a custom multi-threaded secure gateway routing packet data dynamically.", ar: "كتابة بوابة نفق مشفرة مخصصة متعددة الخيوط تقوم بتوجيه الحزم بكفاءة." } 
    },
    { 
      title: { en: "15+ Completed Deliveries", ar: "تسليم أكثر من 15 مشروعاً" }, 
      desc: { en: "Shipped functional products across desktop systems, web clients, and API layers.", ar: "شحن منتجات برمجية متكاملة لسطح المكتب، الويب، وطبقات الـ API للعملاء." } 
    },
    { 
      title: { en: "Freelance Success", ar: "نجاح العمل الحر" }, 
      desc: { en: "Delivered customized data scrapers, dashboard tools, and backend utilities for global clients.", ar: "تسليم أدوات سحب بيانات مخصصة، لوحات تحكم، وخدمات Backend لعملاء دوليين ومحليين." } 
    }
  ]
}

export const services = {
  title: { en: "Professional Services", ar: "الخدمات المهنية" },
  subtitle: { en: "Technical engineering services offered for global clients", ar: "خدمات هندسية متطورة أقدمها للشركات والعملاء عالمياً" },
  items: [
    {
      title: { en: "High-Performance Backend Development", ar: "تطوير Backend عالي الأداء" },
      desc: { en: "Designing scalable API layers, custom database schemas, and optimized services in .NET Core and Node.js.", ar: "تصميم طبقات API قابلة للتطوير، مخططات قواعد بيانات مخصصة، وخدمات متقدمة بـ .NET Core و Node.js." }
    },
    {
      title: { en: "Frontend Engineering", ar: "هندسة الواجهات الأمامية" },
      desc: { en: "Constructing pixel-perfect, highly accessible responsive interfaces in React/Next.js with clean state logic.", ar: "بناء واجهات مستخدم متجاوبة ودقيقة وسهلة الوصول بـ React/Next.js مع إدارة ذكية للحالة." }
    },
    {
      title: { en: "Secure Networking & VPNs", ar: "الشبكات وأنفاق VPN" },
      desc: { en: "Designing custom encryption protocols, network packet monitoring tools, and secure system tunnels.", ar: "تصميم بروتوكولات تشفير مخصصة، أدوات مراقبة حزم الشبكة، وأنفاق الأنظمة الآمنة." }
    },
    {
      title: { en: "AI Pipeline Integration", ar: "دمج خطوط استدلال الذكاء الاصطناعي" },
      desc: { en: "Decoupling deep learning model inference processes (ONNX) into performant backend workflows.", ar: "فصل ونشر معالجة استدلال نماذج التعلم العميق (ONNX) داخل بيئات Backend عالية السرعة." }
    },
    {
      title: { en: "Database Architecture", ar: "بنية وهندسة قواعد البيانات" },
      desc: { en: "Profiling SQL/NoSQL systems, write performance optimization, indexing, and connection pools.", ar: "تحليل وضبط أنظمة SQL/NoSQL، تحسين سرعة الكتابة، الفهرسة، وإدارة تجمعات الاتصالات." }
    }
  ]
}

export const currentLearning = {
  title: { en: "Current Technical Focus", ar: "التركيز التقني الحالي" },
  subtitle: { en: "Active research domains and technologies under development", ar: "المجالات البحثية والتقنيات قيد التطوير النشط حالياً" },
  items: [
    {
      name: "Go (Golang)",
      desc: { en: "Engineering ultra-lightweight, concurrent microservices utilizing channels and green threads.", ar: "هندسة خدمات مصغرة خفيفة الوزن للغاية ومتزامنة باستخدام قنوات الاتصال والخيوط الخضراء." }
    },
    {
      name: "Kubernetes",
      desc: { en: "Orchestrating containerized systems, automated scaling, and networking service meshes.", ar: "إدارة الأنظمة والحاويات، التوسع التلقائي، وهندسة شبكات الاتصال بين الحاويات." }
    },
    {
      name: "Rust",
      desc: { en: "Exploring system-level memory safety without garbage collection to build zero-overhead software.", ar: "استكشاف أمان الذاكرة على مستوى النظام دون الحاجة لجامع القمامة لبناء برمجيات فائقة السرعة." }
    }
  ]
}

export const techStackData = {
  title: { en: "Technological Stacks", ar: "مجموعتي التقنية" },
  subtitle: { en: "Primary compilers, runtimes, frameworks, and databases", ar: "الأدوات والمحركات الأساسية التي أكتب بها الأنظمة" }
}

