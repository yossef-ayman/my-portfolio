export interface ProjectDetails {
  title: { en: string; ar: string }
  subtitle: { en: string; ar: string }
  problem: { en: string; ar: string }
  solution: { en: string; ar: string }
  contribution: { en: string; ar: string }
  challenges: { en: string; ar: string }
  results: { en: string; ar: string }
  tech: string[]
  features: { en: string[]; ar: string[] }
  link: string
  github?: string
}

export interface ProjectItem {
  id: string
  category: "systems" | "web"
  image: string
  details: ProjectDetails
  featured?: boolean
}

export const projectsData = {
  title: { en: "Engineering Portfolio", ar: "معرض المشاريع الهندسية" },
  subtitle: { en: "A showcase of core software products, systems, and client solutions", ar: "عرض للمنتجات البرمجية، الأنظمة، وحلول العملاء الرئيسية" },
  filterAll: { en: "All Projects", ar: "كل المشاريع" }
}

export const projects: ProjectItem[] = [
  {
    id: "vpnGateway",
    category: "systems",
    image: "/media/projects/secure-vpn.jpg",
    featured: true,
    details: {
      title: { en: "AI-Powered Secure VPN Gateway", ar: "بوابة VPN آمنة بالذكاء الاصطناعي" },
      subtitle: { en: "Network Tunneling & Traffic Anomaly Pipeline", ar: "نفق شبكي مشفر وفحص كشف الاختراقات" },
      problem: {
        en: "Legacy firewalls rely on static rules, failing to identify zero-day network threats, while standard tunnels suffer from high encapsulation latencies that slow down data transit.",
        ar: "تعتمد جدران الحماية التقليدية على قواعد ثابتة، مما يعجز عن كشف تهديدات الشبكة ذات اليوم صفر، بينما تعاني الأنفاق العادية من تأخير التغليف الذي يبطئ نقل البيانات."
      },
      solution: {
        en: "Engineered an asynchronous virtual network device interface (TUN/TAP) in C++ to routing traffic, performing cryptographically robust X25519 key agreements and AES-256-GCM authenticated encryption, integrated with a local lock-free ONNX Runtime deep learning anomaly classifier.",
        ar: "تصميم واجهة محرك افتراضية (TUN/TAP) بلغة C++ لتوجيه حركة المرور، وإجراء اتفاقيات تشفير X25519 وصيغ تشفير AES-256-GCM الموثقة، مدمجة مع مصنف شذوذ ذكاء اصطناعي محلي بـ ONNX Runtime."
      },
      contribution: {
        en: "Wrote the C++ virtual network driver abstraction layer, socket multiplexer, lock-free ring buffers, integrated the ONNX runtime library, and containerized the testing topology.",
        ar: "كتابة طبقة تجريد برنامج تشغيل الشبكة الافتراضية بـ C++، معدد المقابس، مخازن البيانات الدائرية خالية الأقفال، دمج مكتبة ONNX Runtime، وحزم بيئة الاختبار بالكامل."
      },
      challenges: {
        en: "Bypassing the performance lock of Python AI classification. Resolved by compiling and deploying ONNX neural networks directly inside a native C++ worker thread, eliminating inter-process context switching.",
        ar: "تجاوز عنق الزجاجة لأداء تصنيف الذكاء الاصطناعي بلغة بايثون. تم حل المشكلة عن طريق دمج شبكات ONNX مباشرة داخل خيط معالجة C++ محلي، مما ألغى عمليات تبديل العمليات."
      },
      results: {
        en: "Achieved sustained network line-rate throughput of 850+ Mbps with less than 1.2ms encryption/decryption overhead and 96.4% zero-day threat detection accuracy.",
        ar: "تحقيق سرعة نقل شبكية مستقرة تتجاوز 850 ميجابت في الثانية مع زمن تأخير تشفير أقل من 1.2 مللي ثانية ودقة كشف تهديدات بلغت 96.4%."
      },
      tech: ["C++", "Python", "ONNX Runtime", "Docker", "X25519", "AES-256-GCM", "Linux TUN/TAP"],
      features: {
        en: ["Raw packet routing", "Asynchronous Epoll Engine", "Cryptographic handshake", "Lock-free circular queues", "Real-time AI Inspection"],
        ar: ["توجيه الحزم الخام", "محرك Epoll غير المتزامن", "المصافحة التشفيرية المتقدمة", "طوابير دائرية خالية الأقفال", "الفحص الفوري بالذكاء الاصطناعي"]
      },
      link: "https://github.com/yossef-ayman",
      github: "https://github.com/yossef-ayman",
    }
  },
  {
    id: "journalHosting",
    category: "web",
    image: "/media/projects/journal-hosting.jpg",
    details: {
      title: { en: "Multi-Journal Hosting Platform", ar: "منصة استضافة المجلات الأكاديمية" },
      subtitle: { en: "Scholarly Publication Ecosystem", ar: "منصة نشر أكاديمي متعددة المؤسسات" },
      problem: {
        en: "Managing submissions, peer reviews, editorial reviews, and publication pipelines across multiple scientific journals in separate workspaces leads to administrative chaos.",
        ar: "تسبب إدارة عمليات التقديم، المراجعات العلمية، التحرير، وخطوط النشر عبر مجلات علمية متعددة في بيئات عمل منفصلة فوضى إدارية وتكرار للأكواد."
      },
      solution: {
        en: "Constructed a multi-tenant platform in ASP.NET Core and React that handles role authorizations, dynamic publishing workflows, and dynamic metadata indexing for search crawler compliance.",
        ar: "بناء منصة متعددة المستأجرين (Multi-tenant) بـ ASP.NET Core و React تدير صلاحيات المستخدمين، وخطوط نشر المجلات العلمية، والفهرسة الديناميكية."
      },
      contribution: {
        en: "Designed the relational SQL Server database structures, built multi-tenant API filters, and structured the peer-review file validation pipelines.",
        ar: "تصميم جداول قاعدة بيانات SQL Server، بناء فلاتر الـ API الخاصة بالمستأجرين، وصياغة خطافات التحقق من ملفات الأبحاث."
      },
      challenges: {
        en: "Ensuring strict data isolation between journals sharing the same infrastructure. Solved by implementing global query filters based on tenant keys inside the EF Core context.",
        ar: "ضمان عزل البيانات بشكل صارم بين المجلات المشاركة في نفس البنية التحتية. تم حل المشكلة عن طريق دمج فلاتر الاستعلامات العالمية (Global Query Filters) في EF Core."
      },
      results: {
        en: "Successfully supports concurrent editorial flows for multiple active journals with sub-second API responses and SEO indexing validation.",
        ar: "دعم خطوط التحرير والنشر لعدة مجلات نشطة بنجاح مع سرعات استجابة ممتازة وفهرسة SEO معتمدة."
      },
      tech: ["React", "ASP.NET Core", "SQL Server", "EF Core", "Tailwind CSS"],
      features: {
        en: ["Multi-Tenant Separation", "Dynamic Review Workflow", "Secure File Audits", "Relational Indexing", "Responsive Dashboard"],
        ar: ["فصل المستأجرين التام", "خطوط مراجعة ديناميكية", "تدقيق الملفات المرفوعة", "الفهرسة العلائقية للمسودات", "لوحة تحكم مرنة"]
      },
      link: "https://github.com/yossef-ayman",
      github: "https://github.com/yossef-ayman"
    }
  },
  {
    id: "learningHub",
    category: "web",
    image: "/media/projects/learning-hub.jpg",
    details: {
      title: { en: "Learning Hub E-Learning", ar: "منصة التعلم الإلكتروني" },
      subtitle: { en: "Interactive Academic Portal", ar: "منصة تعليمية متكاملة للمؤسسات" },
      problem: {
        en: "Traditional online course portals suffer from slow media synchronization and progress-tracking delays when handling thousands of concurrent student milestone logs.",
        ar: "تعاني المنصات التعليمية التقليدية من بطء مزامنة الفيديوهات وتأخيرات تحديث التقدم الدراسي عند معالجة طلبات آلاف الطلاب في نفس الوقت."
      },
      solution: {
        en: "Built a high-performance portal using Next.js and Node.js with state caching, responsive video milestones tracking, and decoupled REST APIs optimized with Redis layers.",
        ar: "تطوير منصة تعليمية سريعة بـ Next.js و Node.js تدعم التخزين المؤقت، وتتبع تقدم الطلاب مع الفيديوهات، وواجهات برمجة REST APIs معززة بـ Redis."
      },
      contribution: {
        en: "Engineered the MongoDB collection models, structured JWT authorization gates, and developed the student course progression analytics router.",
        ar: "هندسة مجموعات قاعدة بيانات MongoDB، بناء بوابات التحقق والتشفير عبر JWT، وتطوير خوارزمية تحليل وقياس تقدم الطلاب."
      },
      challenges: {
        en: "Database write blocks during high-traffic exams. Resolved by implementing dynamic MongoDB indexes and caching student progress states in memory before flushing.",
        ar: "تعطل عمليات كتابة البيانات أثناء ضغط الامتحانات المباشرة. تم حل المشكلة عن طريق الفهرسة المتقدمة وحفظ تقدم الطلاب مؤقتاً في الذاكرة."
      },
      results: {
        en: "Reduced page-load times by 40% and successfully served dynamic media assets with zero server crashes during peak traffic hours.",
        ar: "تقليل زمن تحميل الصفحات بنسبة 40% وتقديم ملفات الوسائط المتعددة بنجاح واستقرار تام خلال ساعات الذروة."
      },
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Redis"],
      features: {
        en: ["Progress Syncing", "Secure Student Gates", "Course Manager Panel", "Auto-grading quizzes"],
        ar: ["مزامنة التقدم الدراسي", "بوابات الطلاب الآمنة", "لوحة إدارة المناهج", "تصحيح تلقائي للاختبارات"]
      },
      link: "https://youtube.com",
      github: "https://github.com/yossef-ayman"
    }
  },
  {
    id: "ecommerce",
    category: "web",
    image: "/media/projects/ecommerce.jpg",
    details: {
      title: { en: "E-Commerce Architecture", ar: "بنية التجارة الإلكترونية" },
      subtitle: { en: "High-Performance Showcase", ar: "واجهة تسوق سريعة الاستجابة" },
      problem: {
        en: "Slow inventory rendering and layout shift issues during content updates degrade user experience and reduce checkout conversion rates.",
        ar: "يؤدي البطء في عرض المنتجات ومشاكل انزياح العناصر (Layout Shifts) أثناء تحديث الصفحة إلى تجربة مستخدم سيئة وتراجع المبيعات."
      },
      solution: {
        en: "Developed a responsive frontend application with rigid aspect-ratio cards, dynamic list virtualization, and state-driven cart context management.",
        ar: "بناء تطبيق واجهة أمامية سريع الاستجابة باستخدام القوائم الافتراضية (Virtual Lists)، وضوابط نسب أبعاد الصور الثابتة، وسياق حالة السلة."
      },
      contribution: {
        en: "Created the React layout components, configured global cart states using Context hooks, and resolved layout-shifting rules.",
        ar: "بناء واجهات العرض بـ React، إعداد خطافات السياق لإدارة سلة المشتريات بالكامل، وحل مشاكل تحرك العناصر الفجائي."
      },
      challenges: {
        en: "Browser rendering lag when displaying large catalogs. Solved by implementing react-window to recycle DOM nodes dynamically during scroll.",
        ar: "بطء متصفح المستخدم عند تحميل كتالوج منتجات ضخم. تم حل المشكلة بدمج تقنية إعادة تدوير العناصر (List Virtualization) أثناء التمرير."
      },
      results: {
        en: "Scored a perfect 100/100 on Google Lighthouse performance and accessibility audits, with zero cumulative layout shifts (CLS).",
        ar: "حصد تقييم 100/100 كامل في تدقيق أداء Lighthouse، مع انعدام تام لانزياح وتغير موضع العناصر."
      },
      tech: ["React", "Tailwind CSS", "Context API", "Lighthouse tools"],
      features: {
        en: ["Dynamic Cart State", "List Virtualization", "Zero Layout Shifts", "Responsive layouts"],
        ar: ["إدارة سلة المشتريات", "إعادة تدوير العناصر", "انعدام انزياح العناصر", "تصميم متجاوب بالكامل"]
      },
      link: "https://github.com",
      github: "https://github.com/yossef-ayman"
    }
  }
]

export const githubData = {
  title: { en: "GitHub Code Activity", ar: "نشاط مستودع الأكواد (GitHub)" },
  subtitle: { en: "Live statistics and primary code repositories", ar: "مؤشرات الكود الحي ومستودعات التخزين" },
  reposTitle: { en: "Featured Repositories", ar: "أبرز المستودعات العامة" }
}

export interface RepoItem {
  name: string
  desc: { en: string; ar: string }
  lang: string
  langColor: string
  stars: number
  forks: number
}

export const githubRepos: RepoItem[] = [
  {
    name: "Secure-AI-VPN-Gateway",
    desc: {
      en: "C++ event-driven secure network tunnel gateway integrated with low-latency ONNX classification engines.",
      ar: "بوابة VPN آمنة مكتوبة بلغة C++ مع فحص فوري لحركة المرور بالذكاء الاصطناعي وكشف الاختراقات."
    },
    lang: "C++",
    langColor: "bg-[#00599C]",
    stars: 12,
    forks: 4
  },
  {
    name: "Learning-Hub-Platform",
    desc: {
      en: "Full-stack LMS portal with dynamic synchronization, video milestones auditing, and MongoDB schemas.",
      ar: "منصة تعليمية متكاملة بـ Next.js و Node.js تدعم المزامنة الفورية وتتبع تقدم الطلاب."
    },
    lang: "TypeScript",
    langColor: "bg-[#3178C6]",
    stars: 8,
    forks: 2
  },
  {
    name: "Attendance-QR-Core",
    desc: {
      en: "Enterprise attendance scanner checking inputs in under 0.8 seconds using hashing QR tokens.",
      ar: "تطبيق سطح مكتب بـ C# لتسجيل الحضور باستخدام رموز QR التفاعلية سريعة التغير."
    },
    lang: "C#",
    langColor: "bg-[#178600]",
    stars: 6,
    forks: 1
  }
]
