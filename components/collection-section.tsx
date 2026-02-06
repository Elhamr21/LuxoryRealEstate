"use client"

import { useState } from "react"
import { properties, type Property } from "@/lib/properties"
import { PropertyCard } from "@/components/property-card"
import { PropertyDetail } from "@/components/property-detail"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const filters = ["All", "Oceanfront", "Urban", "Country Estate", "Mountain", "Tropical", "Historic"] as const

const filterMap: Record<string, Property["type"] | "all"> = {
  All: "all",
  Oceanfront: "oceanfront",
  Urban: "urban",
  "Country Estate": "country",
  Mountain: "mountain",
  Tropical: "tropical",
  Historic: "historic",
}

export function CollectionSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All")
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const { ref, isVisible } = useScrollReveal(0.1)

  const filtered =
    activeFilter === "All"
      ? properties
      : properties.filter((p) => p.type === filterMap[activeFilter])

  if (selectedProperty) {
    return (
      <PropertyDetail
        property={selectedProperty}
        onBack={() => setSelectedProperty(null)}
      />
    )
  }

  return (
    <section id="collection" className="bg-background px-6 py-24 lg:px-10">
      <div ref={ref} className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div
          className={`mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              ( Our Collection )
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Curated
              <br />
              Residences
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
            Each property in our portfolio has been hand-selected for its
            architectural distinction, extraordinary location, and timeless
            investment value.
          </p>
        </div>

        {/* Filters */}
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

        {/* Property Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((property, i) => (
            <div
              key={property.id}
              className={isVisible ? "animate-morph-in" : "opacity-0"}
              style={{ animationDelay: `${300 + i * 100}ms` }}
            >
              <PropertyCard
                property={property}
                index={i}
                onSelect={setSelectedProperty}
              />
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className={`mt-20 grid grid-cols-2 gap-8 border-t border-border pt-12 md:grid-cols-4 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          {[
            { label: "Properties", value: "48" },
            { label: "Countries", value: "12" },
            { label: "Total Value", value: "$2.1B" },
            { label: "Avg. Price", value: "$24M" },
          ].map((stat) => (
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
