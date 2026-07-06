export interface SocialsData {
  email: string
  phone: string
  phone2: string
  location: { en: string; ar: string }
  facebook: string
  instagram: string
  linkedin: string
  github: string
  whatsapp: string
  calendly: string
}

export const socials: SocialsData = {
  email: "yossefayman664@gmail.com",
  phone: "+201146433667",
  phone2: "+201007586266",
  location: {
    en: "Cairo, Egypt",
    ar: "القاهرة، مصر"
  },
  facebook: "https://www.facebook.com/share/19cWLtWSYC/",
  instagram: "https://www.instagram.com/yossef_ayman_gmal?igsh=MXIyN2ZmaXQycHNzNg==",
  linkedin: "https://www.linkedin.com/in/yossef-ayman-357b15304/",
  github: "https://github.com/yossef-ayman",
  whatsapp: "https://wa.me/201146433667",
  calendly: "https://calendly.com"
}

export const contactData = {
  title: { en: "Get In Touch", ar: "تواصل معي" },
  subtitle: { en: "Let's build high-performance secure products together", ar: "دعنا نبني منتجات برمجية آمنة وعالية الأداء معاً" },
  statusLabel: { en: "Engineering Status", ar: "الحالة الهندسية" },
  statusText: { en: "Open to roles & projects", ar: "متاح لعروض العمل والمشاريع" },
  copyEmail: { en: "Copy Email Address", ar: "نسخ البريد الإلكتروني" },
  copySuccess: { en: "Copied!", ar: "تم النسخ!" },
  whatsappText: { en: "Direct WhatsApp", ar: "مراسلة فورية واتساب" },
  meetingText: { en: "Book Consultation", ar: "حجز موعد استشارة" },
  formName: { en: "Full Name", ar: "الاسم الكامل" },
  formEmail: { en: "Email Address", ar: "البريد الإلكتروني" },
  formMessage: { en: "Your Message", ar: "رسالتك" },
  placeholderName: { en: "Jane Doe", ar: "اسمك الكريم" },
  placeholderEmail: { en: "jane@example.com", ar: "البريد الإلكتروني الخاص بك" },
  placeholderMessage: { en: "Tell me about your project scope...", ar: "أكتب تفاصيل مشروعك أو فكرتك هنا..." },
  btnSend: { en: "Send Message", ar: "إرسال الرسالة" },
  btnSending: { en: "Sending...", ar: "جاري الإرسال..." },
  formSuccess: { en: "Message received successfully! I will reach out to you within 24 hours.", ar: "تم استلام رسالتك بنجاح! سأتواصل معك خلال 24 ساعة." }
}

