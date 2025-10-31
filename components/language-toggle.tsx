"use client"

import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

interface LanguageToggleProps {
  language: "en" | "ar"
  setLanguage: (lang: "en" | "ar") => void
}

export function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <Button variant="ghost" size="sm" onClick={() => setLanguage(language === "en" ? "ar" : "en")} className="gap-2">
      <Languages className="h-4 w-4" />
      <span className="text-sm font-medium">{language === "en" ? "العربية" : "English"}</span>
    </Button>
  )
}
