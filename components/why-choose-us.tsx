"use client"

import { Check, Flame, Wind, AlertTriangle, Award, Globe } from "lucide-react"
import { useCountry } from "./country-provider"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export function WhyChooseUs() {
  const { language } = useCountry()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const benefits = [
    {
      titleEs: "Contamos con Certificado Homologado",
      titleEn: "We have Homologated Certificate",
      subtitleEs:
        "por Gobierno de la Ciudad de Buenos Aires y Asociación de Empresas de Limpieza en Sistemas de Extracción (AELSE)",
      subtitleEn:
        "by the Government of the City of Buenos Aires and the Association of Extraction System Cleaning Companies (AELSE)",
      highlight: true,
      logos: [
        { src: "/images/logo-buenos-aires.png", alt: "Gobierno de la Ciudad de Buenos Aires", width: 120, height: 40 },
        { src: "/images/logo-aelse.png", alt: "AELSE", width: 100, height: 40 },
      ],
    },
    {
      titleEs: "Cumplimiento normativo ante inspecciones",
      titleEn: "Regulatory compliance for inspections",
    },
    {
      titleEs: "Eliminación de olores por acumulación de grasa",
      titleEn: "Elimination of odors due to grease accumulation",
    },
    {
      titleEs: "Prevención de incendios, reduciendo riesgos",
      titleEn: "Fire prevention, reducing risks",
    },
    {
      titleEs: "Mayor seguridad en tu establecimiento",
      titleEn: "Greater safety in your establishment",
    },
    {
      titleEs: "Mejora de la higiene alimentaria",
      titleEn: "Improved food hygiene",
    },
    {
      titleEs: "Ahorro energético, evitando sobre consumo",
      titleEn: "Energy savings, avoiding over-consumption",
    },
  ]

  const risks = [
    {
      icon: <Flame className="h-12 w-12 text-[#ccb699]" />,
      titleEs: "INCENDIOS",
      titleEn: "FIRES",
      descriptionEs:
        "80% de incendios se producen en campanas de cocinas en cuyo interior las grasas acumuladas se vuelven líquidas y pueden llegar a filtrarse y alcanzar las uniones de los conductos.",
      descriptionEn:
        "80% of fires occur in kitchen hoods where accumulated grease becomes liquid and can leak and reach the duct joints.",
    },
    {
      icon: <Wind className="h-12 w-12 text-[#ccb699]" />,
      titleEs: "HUMOS Y OLORES",
      titleEn: "SMOKE AND ODORS",
      descriptionEs: "La grasa y suciedad acumulada genera malos olores, vapores y humos.",
      descriptionEn: "Accumulated grease and dirt generates bad odors, vapors and smoke.",
    },
    {
      icon: <AlertTriangle className="h-12 w-12 text-[#ccb699]" />,
      titleEs: "CONTAMINACIÓN",
      titleEn: "CONTAMINATION",
      descriptionEs:
        "A su vez, no limpiar con regularidad las instalaciones promueve la contaminación de productos y alimentos.",
      descriptionEn: "In turn, not regularly cleaning the facilities promotes contamination of products and food.",
    },
  ]

  const countries = [
    { name: "Argentina", flag: "🇦🇷", url: "https://limpiezadecampanas.com.ar/" },
    { name: "México", flag: "🇲🇽", url: "https://limpiezadecampanas.com.mx/" },
    { name: "Uruguay", flag: "🇺🇾", url: "https://limpiezadecampanas.com.uy/" },
    { name: "USA (Próximamente)", flag: "🇺🇸", url: "" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="porque-elegirnos" className="py-20 bg-gray-50 dark:bg-[#1c1c1c]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {language === "es" ? "POR QUÉ ELEGIRNOS" : "WHY CHOOSE US"}
          </motion.h2>

          <motion.div
            className="mb-16 p-8 bg-[#222222] dark:bg-[#181818] text-white rounded-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-[#ccb699] mr-3" />
              <h3 className="text-2xl font-semibold text-[#ccb699]">
                {language === "es" ? "Presencia Internacional" : "International Presence"}
              </h3>
            </div>
            <p className="text-lg mb-6 text-gray-300">
              {language === "es"
                ? "Trabajamos en Argentina, México, Uruguay y próximamente en USA. Esto nos permite ofrecer nuestros servicios con un alcance internacional, adaptándonos a las necesidades de cada país con el mismo nivel de calidad y profesionalismo."
                : "We work in Argentina, Mexico, Uruguay and soon in the USA. This allows us to offer our services with an international reach, adapting to the needs of each country with the same level of quality and professionalism."}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {countries.map((country, index) => (
                <motion.a
                  key={index}
                  href={country.url || "#"}
                  target={country.url ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`flex items-center bg-[#2a2a2a] dark:bg-[#222222] px-4 py-2 rounded-full ${!country.url ? "pointer-events-none" : "hover:bg-[#333333] dark:hover:bg-[#2a2a2a]"}`}
                  whileHover={{ scale: country.url ? 1.05 : 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-2xl mr-2">{country.flag}</span>
                  <span>{country.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <motion.h3
                className="text-2xl font-semibold mb-8 border-b border-[#ccb699] pb-2 inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {language === "es" ? "Beneficios de una Limpieza Profesional" : "Benefits of Professional Cleaning"}
              </motion.h3>

              <motion.div
                className="grid grid-cols-1 gap-4"
                variants={container}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className={`flex flex-col p-4 ${
                      benefit.highlight
                        ? "bg-gradient-to-r from-[#ccb699]/30 to-[#ccb699]/10 border-l-4 border-[#ccb699] shadow-md dark:from-[#ccb699]/20 dark:to-[#ccb699]/5"
                        : "bg-white dark:bg-[#222222]"
                    } rounded-lg ${benefit.highlight ? "py-6" : ""}`}
                    variants={item}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`flex-shrink-0 mt-1 ${benefit.highlight ? "bg-[#ccb699]" : "bg-[#ccb699]"} rounded-full p-1`}
                      >
                        {benefit.highlight ? (
                          <Award className="h-5 w-5 text-white" />
                        ) : (
                          <Check className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p
                          className={`text-base ${
                            benefit.highlight
                              ? "font-bold text-[#ccb699] text-lg md:text-xl"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {language === "es" ? benefit.titleEs : benefit.titleEn}
                        </p>
                        {benefit.subtitleEs && (
                          <p className="text-gray-700 dark:text-gray-300 mt-1">
                            {language === "es" ? benefit.subtitleEs : benefit.subtitleEn}
                          </p>
                        )}
                      </div>
                    </div>

                    {benefit.logos && (
                      <div className="flex flex-wrap items-center justify-start gap-6 mt-4 pl-10">
                        {benefit.logos.map((logo, logoIndex) => (
                          <div
                            key={logoIndex}
                            className="bg-white dark:bg-[#333333] p-3 rounded-md shadow-sm hover:shadow-md transition-shadow"
                          >
                            <Image
                              src={logo.src || "/placeholder.svg"}
                              alt={logo.alt}
                              width={logo.width}
                              height={logo.height}
                              className="object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div>
              <motion.h3
                className="text-2xl font-semibold mb-8 border-b border-[#ccb699] pb-2 inline-block"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {language === "es" ? "Riesgos de No Limpiar" : "Risks of Not Cleaning"}
              </motion.h3>

              <motion.div
                className="space-y-6"
                variants={container}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                {risks.map((risk, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-[#222222] p-6 rounded-xl shadow-sm flex items-start space-x-4"
                    variants={item}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex-shrink-0 bg-black/5 dark:bg-white/5 p-3 rounded-full">{risk.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{language === "es" ? risk.titleEs : risk.titleEn}</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {language === "es" ? risk.descriptionEs : risk.descriptionEn}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          <motion.div
            className="text-center p-8 bg-gradient-to-r from-[#ccb699]/20 to-[#ccb699]/30 dark:from-[#ccb699]/10 dark:to-[#ccb699]/20 rounded-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-xl font-semibold text-black dark:text-white">
              {language === "es"
                ? "¡Un sistema limpio es sinónimo de seguridad y eficiencia!"
                : "A clean system is synonymous with safety and efficiency!"}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
