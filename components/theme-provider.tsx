"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useEffect } from "react"
import { isSystemDarkMode } from "@/lib/theme-detector"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Detectar el tema del sistema al cargar la página
  useEffect(() => {
    // Aplicar clase al HTML para evitar parpadeo durante la carga
    const isDark = isSystemDarkMode()
    if (isDark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
