"use client"

import { useState } from "react"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const neighborhoods = [
  {
    name: "Amalfi Coast",
    country: "Italy",
    image: "/images/property-1.jpg",
    properties: 8,
    avgPrice: "$12.4M",
    description: "Where dramatic cliffs meet cerulean waters, the Amalfi Coast represents the pinnacle of Mediterranean luxury living.",
    highlights: ["UNESCO Heritage", "Microclimate", "Private Coves"],
  },
  {
    name: "Manhattan",
    country: "United States",
    image: "/images/property-3.jpg",
    properties: 12,
    avgPrice: "$28.6M",
    description: "The world's most iconic skyline, where vertical living reaches its most refined expression.",
    highlights: ["Cultural Capital", "Investment Hub", "World Cuisine"],
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    image: "/images/property-4.jpg",
    properties: 6,
    avgPrice: "$16.8M",
    description: "Pristine alpine environments paired with world-class infrastructure and unmatched privacy.",
    highlights: ["Tax Benefits", "Ski Culture", "Clean Air"],
  },
  {
    name: "Kensington",
    country: "United Kingdom",
    image: "/images/property-6.jpg",
    properties: 9,
    avgPrice: "$22.1M",
    description: "Historic elegance in one of London's most prestigious garden squares, steps from Hyde Park.",
    highlights: ["Royal Borough", "Garden Squares", "Heritage"],
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
            ( Neighborhoods )
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Living
            <br />
            Destinations
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
                      {n.properties} Properties
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
                <div className="flex items-center gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Avg. Price
                    </span>
                    <span className="font-serif text-2xl font-semibold text-foreground">
                      {neighborhood.avgPrice}
                    </span>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Available
                    </span>
                    <span className="font-serif text-2xl font-semibold text-foreground">
                      {neighborhood.properties}
                    </span>
                  </div>
                </div>
              </div>
              <a
                href="#collection"
                className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-foreground"
              >
                View {neighborhood.name} Properties
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
