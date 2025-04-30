"use client"

import { Button } from "@/components/ui/button"
import { useCountry } from "./country-provider"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Franchise() {
  const { language, contactInfo } = useCountry()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      titleEs: "Plataforma de formación con actualizaciones constantes",
      titleEn: "Training platform with constant updates",
    },
    {
      titleEs: "Soporte continuo para franquiciados",
      titleEn: "Continuous support for franchisees",
    },
    {
      titleEs: "Capacitación sin necesidad de experiencia previa",
      titleEn: "Training without the need for previous experience",
    },
  ]

  const formatPhoneForWhatsApp = (phone: string) => {
    return phone.replace(/\+/g, "").replace(/\s/g, "")
  }

  const openWhatsApp = () => {
    if (contactInfo.whatsapp) {
      // Trigger conversion event for WhatsApp
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", { send_to: "AW-16466325038/zBc-CJXvk5QZEK7c4Ks9" })
      }
      window.open(`https://wa.me/${formatPhoneForWhatsApp(contactInfo.whatsapp)}`, "_blank")
    }
  }

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
    <section id="franquicias" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{language === "es" ? "FRANQUICIAS" : "FRANCHISES"}</h2>

            <h3 className="text-xl md:text-2xl font-semibold text-[#ccb699] mb-6">
              {language === "es"
                ? "Franquicia Mr. Hood: Tecnología, Soporte y Éxito"
                : "Mr. Hood Franchise: Technology, Support and Success"}
            </h3>

            <p className="text-lg mb-10 text-gray-700 max-w-3xl mx-auto">
              {language === "es"
                ? "Nuestra franquicia ofrece una propuesta innovadora que transforma tu negocio en una inversión rentable. Con acceso a tecnología avanzada, capacitación continua y el respaldo de un equipo especializado."
                : "Our franchise offers an innovative proposal that transforms your business into a profitable investment. With access to advanced technology, continuous training and the support of a specialized team."}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#ccb699] flex items-center justify-center text-white font-bold mb-6 text-xl">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-700">{language === "es" ? feature.titleEs : feature.titleEn}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center p-8 bg-gradient-to-r from-[#ccb699]/20 to-[#ccb699]/30 rounded-2xl max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-xl font-semibold text-black">
              {language === "es"
                ? "Sumate a un modelo probado y crecé con nosotros. ¡Tu éxito es nuestra prioridad!"
                : "Join a proven model and grow with us. Your success is our priority!"}
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              onClick={openWhatsApp}
              className="bg-black hover:bg-gray-800 text-white font-medium px-8 py-6 text-lg rounded-full"
            >
              {language === "es" ? "SOLICITAR INFORMACIÓN" : "REQUEST INFORMATION"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
