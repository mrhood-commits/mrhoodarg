"use client"

import { useCountry } from "./country-provider"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function HowWeDoIt() {
  const { language } = useCountry()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="como-lo-hacemos" className="py-20 bg-white dark:bg-[#222222]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {language === "es" ? "CÓMO LO HACEMOS" : "HOW WE DO IT"}
          </motion.h2>

          <motion.div
            className="bg-gradient-to-br from-[#ccb699]/10 to-[#ccb699]/20 dark:from-[#ccb699]/5 dark:to-[#ccb699]/10 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="aspect-video bg-[#222222] dark:bg-[#181818] rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/jS-XTBvF_Ko?autoplay=1&mute=1&loop=1&playlist=jS-XTBvF_Ko&controls=1&modestbranding=1&rel=0"
                title="Cómo lo hacemos - MR HOOD"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          <motion.p
            className="text-lg text-center mt-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {language === "es"
              ? "Nuestro proceso de limpieza profesional garantiza la eliminación completa de grasa y residuos, reduciendo significativamente el riesgo de incendios y mejorando la eficiencia de su sistema de extracción."
              : "Our professional cleaning process guarantees the complete removal of grease and residues, significantly reducing the risk of fires and improving the efficiency of your extraction system."}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
