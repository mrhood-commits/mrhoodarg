"use client"

import { Button } from "@/components/ui/button"
import { useCountry } from "./country-provider"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { VideoPlayer } from "./video-player"

export function Hero() {
  const { language, contactInfo } = useCountry()

  const formatPhoneForWhatsApp = (phone: string) => {
    return phone.replace(/\+/g, "").replace(/\s/g, "")
  }

  const openWhatsApp = () => {
    if (contactInfo.whatsapp) {
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
    <section id="inicio" className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div className="max-w-4xl mx-auto" variants={container} initial="hidden" animate="show">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div>
              <motion.h1
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-black to-[#ccb699] bg-clip-text text-transparent"
                variants={item}
              >
                {language === "es"
                  ? "MR HOOD: Revolucionando la Limpieza de Campanas"
                  : "MR HOOD: Revolutionizing Hood Cleaning"}
              </motion.h1>
              <motion.p className="text-xl mb-8 text-[#ccb699]" variants={item}>
                {language === "es"
                  ? "Somos profesionales en la limpieza de campanas, ductos y sistemas de extracción."
                  : "We are professionals in cleaning hoods, ducts and extraction systems."}
              </motion.p>
              <motion.div variants={item}>
                <Button
                  onClick={openWhatsApp}
                  className="bg-black hover:bg-gray-800 text-white font-medium px-8 py-6 text-lg rounded-full"
                >
                  {language === "es" ? "SOLICITAR PRESUPUESTO" : "REQUEST A QUOTE"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="relative"
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-br from-[#ccb699]/20 to-[#ccb699]/40 rounded-2xl p-6 flex items-center justify-center shadow-lg">
                <div className="w-full max-w-[280px] mx-auto bg-[#222222]/80 backdrop-blur-sm rounded-xl flex items-center justify-center p-2 overflow-hidden">
                  <VideoPlayer videoId="xT8qfeWlo3o" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
