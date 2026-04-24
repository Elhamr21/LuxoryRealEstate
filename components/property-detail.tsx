"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import type { Property } from "@/lib/properties"

interface PropertyDetailProps {
  property: Property
  onBack: () => void
}

export function PropertyDetail({ property, onBack }: PropertyDetailProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [activeTab, setActiveTab] = useState<"Übersicht" | "Ausstattung">("Übersicht")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = property.images && property.images.length > 0 ? property.images : [property.image]
  const maxClients = Math.max(...property.clientHistory.map((entry) => entry.clients))
  const minClients = Math.min(...property.clientHistory.map((entry) => entry.clients))
  const clientRange = maxClients - minClients
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    requestAnimationFrame(() => setIsRevealed(true))
  }, [])

  const handleBack = () => {
    setIsRevealed(false)
    setTimeout(onBack, 500)
  }

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section
      id="collection"
      className={`min-h-screen bg-background transition-all duration-700 ${
        isRevealed ? "opacity-100" : "opacity-0 scale-[0.98]"
      }`}
    >
      {/* Hero with Image Gallery */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src={images[currentImageIndex] || "/placeholder.svg"}
          alt={property.title}
          fill
          className="object-cover transition-opacity duration-500"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/60" />

        {/* Image Navigation - Show only if multiple images */}
        {images.length > 1 && (
          <>
            {/* Previous Button */}
            <button
              type="button"
              onClick={goToPrevImage}
              className="absolute left-6 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-sm bg-foreground/20 text-primary-foreground backdrop-blur-md transition-all hover:bg-foreground/40"
              aria-label="Vorheriges Bild"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={goToNextImage}
              className="absolute right-6 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-sm bg-foreground/20 text-primary-foreground backdrop-blur-md transition-all hover:bg-foreground/40"
              aria-label="Nächstes Bild"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-6 right-6 z-20 rounded-sm bg-foreground/20 px-3 py-1 backdrop-blur-md">
              <span className="font-mono text-[12px] text-primary-foreground">
                {currentImageIndex + 1} / {images.length}
              </span>
            </div>
          </>
        )}

        {/* Back button */}
        <button
          type="button"
          onClick={handleBack}
          className="absolute left-6 top-24 z-20 flex items-center gap-2 rounded-sm border border-primary-foreground/30 bg-foreground/20 px-4 py-2 text-primary-foreground backdrop-blur-md transition-all hover:bg-foreground/40 lg:left-10"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em]">Zurück</span>
        </button>

        {/* Property title overlay */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-12 lg:px-10">
          <div className="mx-auto max-w-[1400px]">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60">
              {property.subtitle}
            </p>
            <h1 className="font-serif text-5xl font-bold text-primary-foreground md:text-7xl">
              {property.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <span className="font-sans text-lg text-primary-foreground/80">{property.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        {/* Quick Stats */}
        <div className="mb-16 grid grid-cols-2 gap-6 border-b border-border pb-12 md:grid-cols-5">
          {[
            { label: "Schlafzimmer", value: String(property.beds) },
            { label: "Badezimmer", value: String(property.baths) },
            { label: "Wohnfläche", value: `${property.sqft} Quadratfuß` },
            { label: "Verwaltung", value: property.architect },
            { label: "Verfügbar seit", value: String(property.yearBuilt) },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </span>
              <span className="font-serif text-xl font-semibold text-foreground">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-10 flex gap-1 border-b border-border">
          {(["Übersicht", "Ausstattung"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`border-b-2 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.15em] transition-all ${
                activeTab === tab
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {activeTab === "Übersicht" && (
            <div className="flex flex-col gap-12">
              <div className="grid gap-12 lg:grid-cols-2">
                <div>
                  <h3 className="mb-6 font-serif text-2xl font-semibold text-foreground">Über diese Unterkunft</h3>
                  <p className="font-sans text-base leading-relaxed text-muted-foreground">{property.description}</p>
                  <div className="mt-8 flex flex-col gap-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Verwaltet von</p>
                    <p className="font-serif text-lg text-foreground">{property.architect}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="font-serif text-2xl font-semibold text-foreground">Umgebung</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Laufscore", value: property.neighborhood.walkScore, max: 100 },
                      { label: "ÖPNV-Score", value: property.neighborhood.transitScore, max: 100 },
                      { label: "Schulen in der Nähe", value: property.neighborhood.schools, max: 20 },
                      { label: "Restaurants", value: property.neighborhood.restaurants, max: 200 },
                    ].map((item) => (
                      <div key={item.label} className="rounded-sm border border-border p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                            {item.label}
                          </span>
                          <span className="font-mono text-sm font-semibold text-foreground">{item.value}</span>
                        </div>
                        <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full rounded-full bg-accent transition-all duration-1000"
                            style={{ width: `${(item.value / item.max) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-[1.6fr_0.9fr]">
                <div className="rounded-sm border border-border p-6">
                  <div className="mb-6 flex items-end justify-between gap-6">
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-foreground">Kundenhistorie</h3>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                        Jaehrliche Gaeste pro Unterkunft
                      </p>
                    </div>
                  </div>

                  <div className="flex h-64 items-end gap-3">
                    {property.clientHistory.map((entry) => {
                      const height = clientRange > 0 ? ((entry.clients - minClients) / clientRange) * 75 + 25 : 55

                      return (
                        <div key={entry.year} className="flex flex-1 flex-col items-center gap-3">
                          <span className="font-mono text-[10px] text-muted-foreground">{entry.clients}</span>
                          <div
                            className="w-full rounded-t-sm bg-accent/80 transition-all duration-700 hover:bg-accent"
                            style={{ height: `${height}%` }}
                          />
                          <span className="font-mono text-[10px] text-muted-foreground">{entry.year}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="rounded-sm border border-border p-6">
                  <h3 className="mb-6 font-serif text-2xl font-semibold text-foreground">Buchungsdetails</h3>
                  <div className="flex flex-col gap-4">
                    {[
                      {
                        label: "Mindestaufenthalt",
                        value: "1 Nacht",
                      },
                      { label: "Stornierungsbedingungen", value: "Flexibel" },
                      { label: "Verfügbarkeit", value: "Ganzjährig" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between border-b border-border pb-3">
                        <span className="font-mono text-xs text-muted-foreground">{item.label}</span>
                        <span className="font-mono text-sm font-semibold text-foreground">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 pt-4">
                    <a
                      href={property.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-sm bg-accent px-6 py-3 text-center font-mono text-xs uppercase tracking-[0.15em] text-accent-foreground transition-all hover:bg-accent/90 font-semibold"
                    >
                      Auf Booking ansehen
                    </a>
                    <a
                      href="https://wa.me/4901713739720?text=Hallo,%20ich%20interessiere%20mich%20für%20die%20Buchung"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-sm bg-primary px-6 py-3 text-center font-mono text-xs uppercase tracking-[0.15em] text-primary-foreground transition-all hover:bg-primary/90"
                    >
                      Über WhatsApp anfragen
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Ausstattung" && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {property.features.map((feature) => (
                <div
                  key={feature}
                  className="group flex items-center gap-4 rounded-sm border border-border p-5 transition-all hover:border-accent hover:bg-accent/5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-muted">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="font-sans text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
