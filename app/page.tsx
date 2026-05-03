import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { CollectionSection } from "@/components/collection-section"
import { NeighborhoodsSection } from "@/components/neighborhoods-section"
import { MarketSection } from "@/components/market-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import {
  absoluteUrl,
  defaultOgImage,
  homeStructuredData,
  serializeJsonLd,
  siteDescription,
} from "@/lib/seo"

export const metadata: Metadata = {
  title: "Prime Residenz | Premium-Unterkünfte in Siegen, Kreuztal und Wilnsdorf",
  description: siteDescription,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "Prime Residenz | Premium-Unterkünfte in Siegen, Kreuztal und Wilnsdorf",
    description: siteDescription,
    url: absoluteUrl("/"),
    images: [
      {
        url: absoluteUrl(defaultOgImage),
        alt: "Premium-Unterkunft von Prime Residenz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Residenz | Premium-Unterkünfte",
    description: siteDescription,
    images: [absoluteUrl(defaultOgImage)],
  },
}

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(homeStructuredData()) }}
      />
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
