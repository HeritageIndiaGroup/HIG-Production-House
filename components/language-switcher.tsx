"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center space-x-1 text-muted-foreground hover:text-primary"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">{language === "en" ? "हिं" : "EN"}</span>
    </Button>
  )
}
