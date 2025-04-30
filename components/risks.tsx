"use client"

import { Flame, Wind, AlertTriangle } from "lucide-react"
import { useCountry } from "./country-provider"

export function Risks() {
  const { language } = useCountry()

  const risks = [
    {
      icon: <Flame className="h-12 w-12 text-red-500" />,
      titleEs: "INCENDIOS",
      titleEn: "FIRES",
      descriptionEs:
        "80% de incendios se producen en campanas de cocinas en cuyo interior las grasas acumuladas se vuelven líquidas y pueden llegar a filtrarse y alcanzar las uniones de los conductos, tanto dentro como fuera de la propia instalación extractora.",
      descriptionEn:
        "80% of fires occur in kitchen hoods where accumulated grease becomes liquid and can leak and reach the duct joints, both inside and outside the extractor installation itself.",
    },
    {
      icon: <Wind className="h-12 w-12 text-gray-500" />,
      titleEs: "HUMOS Y OLORES",
      titleEn: "SMOKE AND ODORS",
      descriptionEs: "La grasa y suciedad acumulada genera malos olores, vapores y humos.",
      descriptionEn: "Accumulated grease and dirt generates bad odors, vapors and smoke.",
    },
    {
      icon: <AlertTriangle className="h-12 w-12 text-yellow-500" />,
      titleEs: "CONTAMINACIÓN",
      titleEn: "CONTAMINATION",
      descriptionEs:
        "A su vez, no limpiar con regularidad las instalaciones promueve la contaminación de productos y alimentos.",
      descriptionEn: "In turn, not regularly cleaning the facilities promotes contamination of products and food.",
    },
  ]

  return (
    <section id="riesgos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {language === "es" ? "RIESGOS DE NO LIMPIAR TU CAMPANA DE COCINA" : "RISKS OF NOT CLEANING YOUR KITCHEN HOOD"}
        </h2>

        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          {language === "es"
            ? "Mantené tu cocina segura y libre de riesgos con una limpieza profesional."
            : "Keep your kitchen safe and risk-free with professional cleaning."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {risks.map((risk, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="mb-4">{risk.icon}</div>
              <h3 className="text-xl font-bold mb-3">{language === "es" ? risk.titleEs : risk.titleEn}</h3>
              <p className="text-gray-700">{language === "es" ? risk.descriptionEs : risk.descriptionEn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
