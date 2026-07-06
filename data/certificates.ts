export interface CertificateItem {
  name: { en: string; ar: string }
  provider: string
  issueDate: string
  credentialId: string
  image: string
  link: string
}

export interface CertificatesData {
  title: { en: string; ar: string }
  subtitle: { en: string; ar: string }
  btnView: { en: string; ar: string }
  btnDownload: { en: string; ar: string }
  items: CertificateItem[]
}

export const certificates: CertificatesData = {
  title: {
    en: "Professional Credentials",
    ar: "الشهادات المهنية"
  },
  subtitle: {
    en: "Verified industry certifications and academic achievements",
    ar: "المؤهلات المعتمدة والإنجازات الأكاديمية التي تم التحقق منها"
  },
  btnView: {
    en: "View Certificate",
    ar: "عرض الشهادة"
  },
  btnDownload: {
    en: "Download Image",
    ar: "تحميل الصورة"
  },
  items: [
    {
      name: {
        en: "Cisco Certified Network Associate (CCNA)",
        ar: "شهادة سيسكو المعتمدة للشبكات (CCNA)"
      },
      provider: "Cisco Systems",
      issueDate: "2024",
      credentialId: "CCNA-VERIFY-2024",
      image: "/media/certificates/Screenshot 2026-02-07 225303.jpg",
      link: "/media/certificates/Screenshot 2026-02-07 225303.png"
    },
    {
      name: {
        en: "Building LLM Applications with Prompt Engineering",
        ar: "بناء تطبيقات نماذج اللغة الكبيرة باستخدام هندسة الأوامر"
      },
      provider: "NVIDIA Deep Learning Institute",
      issueDate: "2024",
      credentialId: "NVIDIA-DLI-LLM-2024",
      image: "/media/certificates/Screenshot 2026-07-06 193030.png",
      link: "/media/certificates/Screenshot 2026-07-06 193030.png"
    },
    {
      name: {
        en: "Cybersecurity & Networking Certificate",
        ar: "شهادة الأمن السيبراني والشبكات"
      },
      provider: "Personal Archive / Training",
      issueDate: "2026",
      credentialId: "IMG-004",
      image: "/media/certificates/1775763910437.png",
      link: "/media/certificates/1775763910437.png"
    }
    // {
    //   name: {
    //     en: "Programming Fundamentals Certificate",
    //     ar: "شهادة أساسيات البرمجة"
    //   },
    //   provider: "Personal Archive",
    //   issueDate: "2026",
    //   credentialId: "IMG-001",
    //   image: "/media/certificates/1775763908341.jpg",
    //   link: "/media/certificates/1775763908341.jpg"
    // },
    // {
    //   name: {
    //     en: "Backend Development Certificate",
    //     ar: "شهادة تطوير الخلفية"
    //   },
    //   provider: "Personal Archive",
    //   issueDate: "2026",
    //   credentialId: "IMG-002",
    //   image: "/media/certificates/1775763909126.jpg",
    //   link: "/media/certificates/1775763909126.jpg"
    // },
    // {
    //   name: {
    //     en: "Frontend Development Certificate",
    //     ar: "شهادة تطوير الواجهة"
    //   },
    //   provider: "Personal Archive",
    //   issueDate: "2026",
    //   credentialId: "IMG-003",
    //   image: "/media/certificates/1775763909992.jpg",
    //   link: "/media/certificates/1775763909992.jpg"
    // }
  ]
}
