// Función para detectar si el sistema operativo está en modo oscuro
export function isSystemDarkMode(): boolean {
  if (typeof window !== "undefined") {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  }
  return false
}

// Función para escuchar cambios en la preferencia del sistema
export function listenForThemeChanges(callback: (isDark: boolean) => void): () => void {
  if (typeof window !== "undefined" && window.matchMedia) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const listener = (e: MediaQueryListEvent) => {
      callback(e.matches)
    }

    mediaQuery.addEventListener("change", listener)

    // Devolver función para limpiar el listener
    return () => mediaQuery.removeEventListener("change", listener)
  }

  // Si no hay soporte, devolver una función vacía
  return () => {}
}
