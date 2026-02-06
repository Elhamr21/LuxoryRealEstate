import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { CollectionSection } from "@/components/collection-section"
import { NeighborhoodsSection } from "@/components/neighborhoods-section"
import { MarketSection } from "@/components/market-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <CollectionSection />
      <NeighborhoodsSection />
      <MarketSection />
      <AboutSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
