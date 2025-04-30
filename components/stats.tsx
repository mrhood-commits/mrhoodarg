"use client"

import { useCountry } from "./country-provider"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

export function Stats() {
  const { language } = useCountry()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [counts, setCounts] = useState({
    years: 0,
    cleanings: 0,
    clients: 0,
  })

  const targetCounts = {
    years: 30,
    cleanings: 2500000,
    clients: 1250000,
  }

  const formatNumber = (num: number) => {
    return num.toLocaleString("es-ES")
  }

  useEffect(() => {
    if (inView) {
      const duration = 2000 // ms
      const framesPerSecond = 60
      const totalFrames = (duration / 1000) * framesPerSecond

      let frame = 0
      const interval = setInterval(() => {
        frame++
        const progress = frame / totalFrames

        if (progress >= 1) {
          setCounts({
            years: targetCounts.years,
            cleanings: targetCounts.cleanings,
            clients: targetCounts.clients,
          })
          clearInterval(interval)
        } else {
          setCounts({
            years: Math.floor(targetCounts.years * progress),
            cleanings: Math.floor(targetCounts.cleanings * progress),
            clients: Math.floor(targetCounts.clients * progress),
          })
        }
      }, 1000 / framesPerSecond)

      return () => clearInterval(interval)
    }
  }, [inView])

  const stats = [
    {
      value: counts.years,
      targetValue: targetCounts.years,
      labelEs: "AÑOS DE EXPERIENCIA",
      labelEn: "YEARS OF EXPERIENCE",
    },
    {
      value: formatNumber(counts.cleanings),
      targetValue: formatNumber(targetCounts.cleanings),
      labelEs: "LIMPIEZAS REALIZADAS",
      labelEn: "CLEANINGS PERFORMED",
    },
    {
      value: formatNumber(counts.clients),
      targetValue: formatNumber(targetCounts.clients),
      labelEs: "CLIENTES SATISFECHOS",
      labelEn: "SATISFIED CLIENTS",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 bg-[#222222] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-8 bg-[#2a2a2a] rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center min-h-[200px] flex flex-col justify-center"
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-[#ccb699] mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm md:text-base uppercase tracking-wider text-gray-300">
                {language === "es" ? stat.labelEs : stat.labelEn}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
