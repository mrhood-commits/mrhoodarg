import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyChooseUs } from "@/components/why-choose-us"
import { HowWeDoIt } from "@/components/how-we-do-it"
import { Clients } from "@/components/clients"
import { Franchise } from "@/components/franchise"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CountryProvider } from "@/components/country-provider"

export default function Home() {
  return (
    <CountryProvider>
      <div className="relative">
        <Header />
        <main>
          <Hero />
          <WhyChooseUs />
          <HowWeDoIt />
          <Clients />
          <Franchise />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </div>
    </CountryProvider>
  )
}
