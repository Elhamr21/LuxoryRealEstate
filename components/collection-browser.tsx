"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { properties, type Property } from "@/lib/properties"
import { PropertyCard } from "@/components/property-card"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const filters = ["Alle", "Städtisch", "Vororte", "Luxus", "Modern", "Charmant", "Gartenblick"] as const

const filterMap: Record<string, Property["type"] | "all"> = {
  Alle: "all",
  Städtisch: "urban",
  Vororte: "country",
  Luxus: "urban",
  Modern: "urban",
  Charmant: "country",
  Gartenblick: "country",
}

interface CollectionBrowserProps {
  id?: string
  previewLimit?: number
  standalone?: boolean
}

export function CollectionBrowser({
  id = "collection",
  previewLimit,
  standalone = false,
}: CollectionBrowserProps) {
  const [activeFilter, setActiveFilter] = useState<string>("Alle")
  const { ref, isVisible } = useScrollReveal(0.1)

  const filteredProperties = useMemo(() => {
    const matchingProperties =
      activeFilter === "Alle"
        ? properties
        : properties.filter((property) => property.type === filterMap[activeFilter])

    return previewLimit ? matchingProperties.slice(0, previewLimit) : matchingProperties
  }, [activeFilter, previewLimit])

  const stats = [
    { label: "Mietungen", value: String(properties.length) },
    { label: "Standorte", value: "3" },
    { label: "Durchschn. Bewertung", value: "4.9★" },
    { label: "Verfügbarkeit", value: "Ganzjährig" },
  ]

  return (
    <section id={id} className="bg-background px-6 py-24 lg:px-10">
      <div ref={ref} className="mx-auto max-w-[1400px]">
        <div
          className={`mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              ( Unsere Kollektion )
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Luxus
              <br />
              Wohnungen
            </h2>
          </div>
          <div className="flex max-w-xl flex-col gap-6">
            <p className="font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
              Jede Immobilie in unserer Kollektion wurde sorgfältig aufgrund ihres außergewöhnlichen Designs,
              ihrer Premium-Lage und ihrer hervorragenden Annehmlichkeiten für luxuriöse Kurzzeitvermietungen ausgewählt.
            </p>
            {!standalone && (
              <div>
                <Link
                  href="/collection"
                  className="inline-flex items-center gap-3 rounded-sm border border-foreground px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground transition-all hover:bg-foreground hover:text-background"
                >
                  Alle Unterkünfte ansehen
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div
          className={`mb-12 flex flex-wrap gap-2 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
          style={{ animationDelay: "200ms" }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-sm border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] transition-all ${
                activeFilter === filter
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-transparent text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property, index) => (
            <div
              key={property.id}
              className={isVisible ? "animate-morph-in" : "opacity-0"}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <PropertyCard property={property} index={index} href={`/collection/${property.id}`} />
            </div>
          ))}
        </div>

        {!standalone && filteredProperties.length < properties.length && (
          <div className="mt-12 flex justify-center">
            <Link
              href="/collection"
              className="font-mono text-xs uppercase tracking-[0.18em] text-accent transition-colors hover:text-foreground"
            >
              Mehr Unterkünfte in der Kollektion ansehen
            </Link>
          </div>
        )}

        <div
          className={`mt-20 grid grid-cols-2 gap-8 border-t border-border pt-12 md:grid-cols-4 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                {stat.value}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
