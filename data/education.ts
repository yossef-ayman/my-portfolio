export interface EducationItem {
  institution: { en: string; ar: string }
  degree: { en: string; ar: string }
  period: { en: string; ar: string }
}

export const education: EducationItem[] = [
  {
    institution: {
      en: "Cairo University",
      ar: "جامعة القاهرة"
    },
    degree: {
      en: "Faculty of Science — Bachelor of Science in Computer Science (Major)",
      ar: "كلية العلوم — بكالوريوس في علوم الحاسب (تخصص رئيسي)"
    },
    period: {
      en: "2022 — Present",
      ar: "2022 — الآن"
    }
  }
]
