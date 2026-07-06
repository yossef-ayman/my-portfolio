export interface AppConfig {
  defaultTheme: "light" | "dark" | "system"
  defaultLanguage: "en" | "ar"
  
  // Section Feature Flags
  enableHero: boolean
  enableProjects: boolean
  enableExperience: boolean
  enableCertificates: boolean
  enableContact: boolean
  enableGitHubStats: boolean
  enableAchievements: boolean
  enableServices: boolean
  enableTechStack: boolean
  enableCurrentLearning: boolean
  enableJourney: boolean
  
  // Animation / Graphic Flags
  enableBackgroundAnimations: boolean
  enableTypingAnimation: boolean
  enableCounters: boolean
  enableAnimations: boolean // Global framer-motion mount flag
  
  // Controls Flags
  enableLanguageSwitcher: boolean
  enableThemeSwitcher: boolean

  // Developer / Admin Settings
  developer: {
    enabled: boolean
    shortcut: string
    showSourcePath: boolean
    showDataSchema: boolean
  }
}

export const config: AppConfig = {
  defaultTheme: "dark",
  defaultLanguage: "en",
  
  // Feature Flags - Toggle sections on/off instantly
  enableHero: true,
  enableProjects: true,
  enableExperience: true,
  enableCertificates: true,
  enableContact: true,
  enableGitHubStats: true,
  enableAchievements: true,
  enableServices: true,
  enableTechStack: true,
  enableCurrentLearning: true,
  enableJourney: true,
  
  // Animation Flags
  enableBackgroundAnimations: true,
  enableTypingAnimation: true,
  enableCounters: true,
  enableAnimations: true,
  
  // Switchers
  enableLanguageSwitcher: true,
  enableThemeSwitcher: true,

  // Developer Overlay Settings
  developer: {
    enabled: true, // Listen to keypress shortcut
    shortcut: "ctrl+shift+e",
    showSourcePath: true,
    showDataSchema: true,
  }
}
