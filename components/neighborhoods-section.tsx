"use client"

import { useState } from "react"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const neighborhoods = [
  {
    name: "Siegen Stadt",
    country: "Deutschland",
    image: "/images/AirBNB/Stadtwohnung in Siegen-Zentrum Parkplatz Autobahn/Stadtwohnung in Siegen-Zentrum Parkplatz Autobahn1.png",
    properties: 2,
    description: "Erleben Sie das vibrierende Herz Siegens mit Premium Innenstadtapartments, die modernen Luxus und außergewöhnlichen Zugang zur lokalen Kultur bieten.",
    highlights: ["Stadtzentrum", "Modernes Design", "Leichte Erreichbarkeit"],
  },
  {
    name: "Siegen Vororte",
    country: "Deutschland",
    image: "/images/AirBNB/Gesamte Unterkunft Apartment in Siegen, Deutschland/Gesamte Unterkunft Apartment in Siegen, Deutschland1.png",
    properties: 1,
    description: "Charmante Vorortlagen in Siegen, die Ruhe mit praktischem Zugang zu Annehmlichkeiten und dem Stadtzentrum bieten.",
    highlights: ["Ruhige Umgebung", "Geräumig", "Lokaler Charakter"],
  },
  {
    name: "Wilnsdorf",
    country: "Deutschland",
    image: "/images/AirBNB/hero4.jpeg",
    properties: 1,
    description: "Fliehen Sie aufs Land mit Luxusappartments in der malerischen Gegend von Wilnsdorf, perfekt für einen ruhigen Rückzug.",
    highlights: ["Landgebiet", "Natürliche Schönheit", "Ruhig"],
  },
  {
    name: "Siegen Parkplatz",
    country: "Deutschland",
    image: "/images/AirBNB/hero3.jpeg",
    properties: 1,
    description: "Moderne Apartments mit praktischem Parkplatz und Autobahnzugang, ideal für Geschäftsreisende und Wochenendausflüge.",
    highlights: ["Kostenfreies WiFi", "Leichte Parkierung", "Autobahnzugang"],
  },
]

export function NeighborhoodsSection() {
  const [activeNeighborhood, setActiveNeighborhood] = useState(0)
  const { ref, isVisible } = useScrollReveal(0.1)
  const neighborhood = neighborhoods[activeNeighborhood]

  return (
    <section id="neighborhoods" className="bg-card px-6 py-24 lg:px-10">
      <div ref={ref} className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className={`mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            ( Destinationen )
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Vermietungs
            <br />
            Standorte
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image side */}
          <div
            className={`relative aspect-[4/3] overflow-hidden ${isVisible ? "animate-morph-in" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            {neighborhoods.map((n, i) => (
              <div
                key={n.name}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === activeNeighborhood ? 1 : 0 }}
              >
                <Image
                  src={n.image || "/placeholder.svg"}
                  alt={n.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />

            {/* Overlay info */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-2">
                {neighborhood.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-sm bg-background/90 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground backdrop-blur-sm"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Info side */}
          <div className={`flex flex-col ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "400ms" }}>
            {/* Neighborhood tabs */}
            <div className="mb-8 flex flex-col gap-0">
              {neighborhoods.map((n, i) => (
                <button
                  key={n.name}
                  type="button"
                  onClick={() => setActiveNeighborhood(i)}
                  className={`group flex items-center justify-between border-b border-border px-2 py-4 text-left transition-all ${
                    i === activeNeighborhood ? "bg-background/50" : "hover:bg-background/30"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-serif text-xl transition-colors ${
                        i === activeNeighborhood ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {n.name}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">{n.country}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {n.properties} Vermietung{n.properties !== 1 ? "en" : ""}
                    </span>
                    <svg
                      className={`h-4 w-4 transition-all ${
                        i === activeNeighborhood ? "rotate-0 text-accent" : "-rotate-90 text-muted-foreground"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            {/* Active neighborhood detail */}
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <p className="mb-4 font-sans text-base leading-relaxed text-muted-foreground">
                  {neighborhood.description}
                </p>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Verfügbar
                  </span>
                  <span className="font-serif text-2xl font-semibold text-foreground">
                    {neighborhood.properties}
                  </span>
                </div>
              </div>
              <a
                href="#collection"
                className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-foreground"
              >
                {neighborhood.name} Unterkünfte ansehen
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
