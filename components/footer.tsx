"use client"
import Image from "next/image"
import { useCountry } from "./country-provider"
import { motion } from "framer-motion"
import { Instagram } from "lucide-react"

export function Footer() {
  const { language } = useCountry()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            className="mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image src="/images/mrhoodlogo.png" alt="MR HOOD" width={60} height={60} className="h-16 w-auto" />
          </motion.div>

          <p className="text-gray-400 mb-8 max-w-2xl">
            {language === "es"
              ? "Profesionales en la limpieza de campanas, ductos y sistemas de extracción. Más de 30 años de experiencia avalan nuestros servicios."
              : "Professionals in cleaning hoods, ducts and extraction systems. More than 30 years of experience support our services."}
          </p>

          <div className="flex space-x-6 mb-8">
            <motion.button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-400 hover:text-[#ccb699]"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {language === "es" ? "Inicio" : "Home"}
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("porque-elegirnos")}
              className="text-gray-400 hover:text-[#ccb699]"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {language === "es" ? "Por qué Elegirnos" : "Why Choose Us"}
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("como-lo-hacemos")}
              className="text-gray-400 hover:text-[#ccb699]"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {language === "es" ? "Cómo lo Hacemos" : "How We Do It"}
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("franquicias")}
              className="text-gray-400 hover:text-[#ccb699]"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {language === "es" ? "Franquicias" : "Franchises"}
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contacto")}
              className="text-gray-400 hover:text-[#ccb699]"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {language === "es" ? "Contacto" : "Contact"}
            </motion.button>
          </div>

          <motion.div className="flex space-x-4 mb-8 justify-center">
            <motion.a
              href="https://www.instagram.com/limpiezadecampanas/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center group"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-6 h-6 mr-2 text-[#ccb699] group-hover:text-white transition-colors">
                <Instagram className="w-full h-full" />
              </div>
              <span className="text-[#ccb699] group-hover:text-white transition-colors">Instagram</span>
            </motion.a>

            <motion.a
              href="https://www.tiktok.com/@limpiezadecampanas?_t=ZM-8vGloDF1wWL&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center group"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-6 h-6 mr-2 text-[#ccb699] group-hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  className="w-full h-full"
                >
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                </svg>
              </div>
              <span className="text-[#ccb699] group-hover:text-white transition-colors">TikTok</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/company/mr-hood/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center group"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-6 h-6 mr-2 text-[#ccb699] group-hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <span className="text-[#ccb699] group-hover:text-white transition-colors">LinkedIn</span>
            </motion.a>
          </motion.div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm w-full">
            <p>
              © {new Date().getFullYear()} MR HOOD.{" "}
              {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
