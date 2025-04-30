"use client"

import Image from "next/image"
import { useCountry } from "./country-provider"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
    {
      name: "Mercado Bazar La Plata",
      logo: "/images/mercado-bazar.png",
    },
    {
      name: "Mostaza",
      logo: "/images/mostaza.png",
    },
    {
      name: "Yacht Club Olivos",
      logo: "/images/yacht-club-olivos.png",
    },
    {
      name: "Piegari Ristorante",
      logo: "/images/piegari.png",
    },
    {
      name: "Mi Gusto",
      logo: "/images/mi-gusto.png",
    },
    {
      name: "Wyndham Hotels & Resorts",
      logo: "/images/wyndham.png",
    },
    {
      name: "Highland Park Country Club",
      logo: "/images/highland-park.jpeg",
    },
    {
      name: "Sushi Pop",
      logo: "/images/sushi-pop.png",
    },
    {
      name: "Hilton",
      logo: "/images/hilton.jpeg",
    },
    {
      name: "Howard Johnson",
      logo: "/images/howard-johnson.png",
    },
    {
      name: "La Parolaccia",
      logo: "/images/la-parolaccia.png",
    },
    {
      name: "Fabric Sushi",
      logo: "/images/fabric-sushi.jpeg",
    },
    {
      name: "La Cabrera",
      logo: "/images/la-cabrera.png",
    },
    {
      name: "La Bistecca Pasta Grill",
      logo: "/images/la-bistecca.png",
    },
    {
      name: "Alvear Palace Hotels & Residences",
      logo: "/images/alvear-palace.png",
    },
    {
      name: "Banco Galicia",
      logo: "/images/banco-galicia.png",
    },
    {
      name: "McDonald's",
      logo: "/images/mcdonalds-logo.png",
    },
    {
      name: "Galerías Pacífico",
      logo: "/images/galerias-pacifico.png",
    },
    {
      name: "Banco Santander",
      logo: "/images/santander-logo.png",
    },
  ]

  // Ajustar número de items por slide según el tamaño de pantalla
  const getItemsPerSlide = () => {
    if (isMobile) return 1
    if (isTablet) return 2
    return 4 // Desktop
  }

  const itemsPerSlide = getItemsPerSlide()
  const totalSlides = Math.ceil(clients.length / itemsPerSlide)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }, [totalSlides])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(interval)
  }, [autoplay, nextSlide])

  // Resetear el slide actual cuando cambia el número de items por slide
  useEffect(() => {
    setCurrentSlide(0)
  }, [itemsPerSlide])

  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  // Determinar el ancho de cada logo según el número de items por slide
  const getLogoWidth = () => {
    switch (itemsPerSlide) {
      case 1:
        return "w-full"
      case 2:
        return "w-1/2"
      default:
        return "w-1/4"
    }
  }

  return (
    <section id="clientes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          {language === "es" ? "NUESTROS CLIENTES" : "OUR CLIENTS"}
        </motion.h2>

        <motion.div
          className="relative max-w-6xl mx-auto px-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full flex justify-center gap-4 md:gap-6">
                  {clients.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((client, index) => (
                    <motion.div
                      key={index}
                      className={`flex justify-center ${getLogoWidth()}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="h-24 w-full max-w-[160px] relative flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                          src={client.logo || "/placeholder.svg"}
                          alt={client.name}
                          fill
                          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-2 flex-wrap">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? "w-6 bg-[#ccb699]" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
