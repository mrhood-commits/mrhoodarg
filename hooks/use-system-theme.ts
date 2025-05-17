"use client"

import { useState, useEffect } from "react"
import { isSystemDarkMode, listenForThemeChanges } from "@/lib/theme-detector"

export function useSystemTheme() {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null)

  useEffect(() => {
    // Establecer el valor inicial
    setIsDarkMode(isSystemDarkMode())

    // Escuchar cambios
    const cleanup = listenForThemeChanges((isDark) => {
      setIsDarkMode(isDark)
    })

    return cleanup
  }, [])

  return isDarkMode
}
