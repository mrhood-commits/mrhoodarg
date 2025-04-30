"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Country = "argentina" | "mexico" | "caribe" | "uruguay" | "usa" | "unknown"
type Language = "es" | "en"

interface CountryContextType {
  country: Country
  language: Language
  setLanguage: (lang: Language) => void
  contactInfo: {
    phone: string
    email: string
    address: string
    whatsapp: string
  }
}

const defaultContactInfo = {
  argentina: {
    phone: "+5411 2657 5200",
    email: "mrhood.ventas@hotmail.com",
    address: "Olazabal 4889 - Villa Urquiza",
    whatsapp: "+5411 2657 5200",
  },
  mexico: {
    phone: "+52 55 1304 8491",
    email: "mrhoodventas@gmail.com",
    address: "Xola 154 Álamos - Ciudad de México y alrededores",
    whatsapp: "+52 55 1304 8491",
  },
  caribe: {
    phone: "+52 998 242 6454",
    email: "mrhoodventas@gmail.com",
    address:
      "Carretera Federal y Calle 23 Sur, Ejidal, 77710 Playa del Carmen, Q.R. Playa del Carmen, Cancun, Tulum, Merida",
    whatsapp: "+52 998 242 6454",
  },
  uruguay: {
    phone: "+598 92 696 828",
    email: "ventas@limpiezadecampanas.com.uy",
    address: "Uruguay",
    whatsapp: "+598 92 696 828",
  },
  usa: {
    phone: "",
    email: "",
    address: "Coming Soon",
    whatsapp: "",
  },
  unknown: {
    phone: "+5411 2657 5200",
    email: "mrhood.ventas@hotmail.com",
    address: "Olazabal 4889 - Villa Urquiza",
    whatsapp: "+5411 2657 5200",
  },
}

const CountryContext = createContext<CountryContextType>({
  country: "unknown",
  language: "es",
  setLanguage: () => {},
  contactInfo: defaultContactInfo.unknown,
})

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [country, setCountry] = useState<Country>("unknown")
  const [language, setLanguage] = useState<Language>("es")
  const [contactInfo, setContactInfo] = useState(defaultContactInfo.unknown)

  useEffect(() => {
    // In a real implementation, you would use a geolocation API service
    // For demo purposes, we'll simulate detection with a mock function
    const detectCountry = async () => {
      try {
        // This would be replaced with an actual API call
        // const response = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_API_KEY')
        // const data = await response.json()

        // For demo, we'll just default to Argentina
        // In production, you would use data.country_code to determine the country
        const detectedCountry: Country = "argentina"
        setCountry(detectedCountry)
        setContactInfo(defaultContactInfo[detectedCountry])

        // Set language based on country (USA gets English, others get Spanish)
        setLanguage(detectedCountry === "usa" ? "en" : "es")
      } catch (error) {
        console.error("Error detecting country:", error)
        // Default to Argentina if detection fails
        setCountry("argentina")
        setContactInfo(defaultContactInfo.argentina)
      }
    }

    detectCountry()
  }, [])

  const updateLanguage = (lang: Language) => {
    setLanguage(lang)
  }

  return (
    <CountryContext.Provider
      value={{
        country,
        language,
        setLanguage: updateLanguage,
        contactInfo,
      }}
    >
      {children}
    </CountryContext.Provider>
  )
}

export const useCountry = () => useContext(CountryContext)
