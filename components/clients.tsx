"use client"

import { useCountry } from "./country-provider"
import { useInView } from "react-intersection-observer"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function Clients() {
  const { language } = useCountry()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Detectar tamaño de pantalla para responsive
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640)
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  const clients = [
    { name: "Mercado Bazar La Plata", logo: "/images/mercado-bazar.png" },
    { name: "Mostaza", logo: "/images/mostaza.png" },
    { name: "La Cabrera", logo: "/images/la-cabrera.png" },
    { name: "McDonald's", logo: "/images/mcdonalds-logo.png" },
    { name: "Santander", logo: "/images/santander-logo.png" },
    { name: "Carl's Jr", logo: "/images/carlsjr.png" },
    { name: "Yacht Club Olivos", logo: "/images/yacht-club-olivos.png" },
    { name: "Piegari", logo: "/images/piegari.png" },
    { name: "Mi Gusto", logo: "/images/mi-gusto.png" },
    { name: "Wyndham", logo: "/images/wyndham.png" },
    { name: "Highland Park", logo: "/images/highland-park.jpeg" },
    { name: "Sushi Pop", logo: "/images/sushi-pop.png" },
    { name: "Hilton", logo: "/images/hilton.jpeg" },
    { name: "Howard Johnson", logo: "/images/howard-johnson.png" },
    { name: "La Parolaccia", logo: "/images/la-parolaccia.png" },
    { name: "Fabric Sushi", logo: "/images/fabric-sushi.jpeg" },
    { name: "La Bistecca", logo: "/images/la-bistecca.png" },
    { name: "Alvear Palace", logo: "/images/alvear-palace.png" },
    { name: "Banco Galicia", logo: "/images/banco-galicia.png" },
    { name: "Galerías Pacífico", logo: "/images/galerias-pacifico.png" },
  ]

  // Determinar cuántos logos mostrar por slide según el tamaño de pantalla
  const getItemsPerSlide = () => {
    if (isMobile) return 1
    if (isTablet) return 2
    return 4
  }

  const itemsPerSlide = getItemsPerSlide()
  const totalSlides = Math.ceil(clients.length / itemsPerSlide)

  // Autoplay
  useEffect(() => {
    if (autoplay && inView) {
      autoplayTimerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
      }, 3000)
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current)
      }
    }
  }, [autoplay, totalSlides, inView, itemsPerSlide])

  // Pausar autoplay al interactuar
  const pauseAutoplay = () => setAutoplay(false)
  const resumeAutoplay = () => setAutoplay(true)

  // Navegación
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    pauseAutoplay()
    // Reanudar después de un tiempo
    setTimeout(resumeAutoplay, 5000)
  }

  const nextSlide = () => {
    goToSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    goToSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1)
  }

  return (
    <section className="py-20 bg-white dark:bg-[#222222]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {language === "es" ? "EMPRESAS QUE AVALAN NUESTRO TRABAJO" : "COMPANIES THAT ENDORSE OUR WORK"}
        </motion.h2>

        <motion.div
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Carousel */}
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full flex justify-center gap-4 md:gap-8">
                  {clients
                    .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                    .map((client, clientIndex) => (
                      <motion.div
                        key={clientIndex}
                        className="w-full sm:w-1/2 lg:w-1/4 p-4 flex justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="bg-gray-50 dark:bg-[#2a2a2a] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow w-full h-32 flex items-center justify-center">
                          <Image
                            src={client.logo || "/placeholder.svg"}
                            alt={client.name}
                            width={150}
                            height={80}
                            className="max-h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              ))}
            </div>

            {/* Controles de navegación */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-[#333333]/80 p-2 rounded-full shadow-md z-10 ml-2"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6 text-[#ccb699]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-[#333333]/80 p-2 rounded-full shadow-md z-10 mr-2"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-6 w-6 text-[#ccb699]" />
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-[#ccb699]" : "bg-gray-300 dark:bg-[#444444]"
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
