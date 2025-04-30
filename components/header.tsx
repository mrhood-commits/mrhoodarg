"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useCountry } from "./country-provider"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage } = useCountry()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  const navItems = [
    { id: "inicio", labelEs: "Inicio", labelEn: "Home" },
    { id: "porque-elegirnos", labelEs: "Por qué Elegirnos", labelEn: "Why Choose Us" },
    { id: "como-lo-hacemos", labelEs: "Cómo lo Hacemos", labelEn: "How We Do It" },
    { id: "franquicias", labelEs: "Franquicias", labelEn: "Franchises" },
    { id: "contacto", labelEs: "Contacto", labelEn: "Contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-white/80 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Image src="/images/mrhoodlogo.png" alt="MR HOOD" width={50} height={50} className="h-12 w-auto" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-black hover:text-[#ccb699] transition-colors font-medium relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {language === "es" ? item.labelEs : item.labelEn}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ccb699] transition-all group-hover:w-full"></span>
              </motion.button>
            ))}
            <motion.button
              onClick={toggleLanguage}
              className="px-4 py-2 border border-[#ccb699] rounded-full text-[#ccb699] hover:bg-[#ccb699] hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {language === "es" ? "EN | ESP" : "EN | ESP"}
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white py-4 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-black hover:text-[#ccb699] transition-colors py-2 text-left"
                whileTap={{ scale: 0.98 }}
              >
                {language === "es" ? item.labelEs : item.labelEn}
              </motion.button>
            ))}
            <motion.button
              onClick={toggleLanguage}
              className="px-3 py-2 border border-[#ccb699] rounded-full text-[#ccb699] hover:bg-[#ccb699] hover:text-black transition-colors self-start"
              whileTap={{ scale: 0.98 }}
            >
              {language === "es" ? "EN | ESP" : "EN | ESP"}
            </motion.button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
