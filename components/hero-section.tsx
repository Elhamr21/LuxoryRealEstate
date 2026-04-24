"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const heroSlides = [
  {
    image: "/images/AirBNB/hero1.jpeg",
    title: "Wohnung in Kreuztal-Zentrum",
    location: "Kre, Deutschland",
  },
  {
    image: "/images/AirBNB/hero2.jpeg",
    title: "Großes Ferienhaus in Siegen-Kreuztal",
    location: "Siegen, Deutschland",
  },
  {
    image: "/images/AirBNB/hero3.jpeg",
    title: "Charmante Wohnung in Kreuztal-Zentrum",
    location: "Kreuztal, Deutschland",
  },
  {
    image: "/images/AirBNB/hero4.jpeg",
    title: "Neubauwohnung im Zentrum von Siegen",
    location: "Siegen, Deutschland",
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length)
        setIsTransitioning(false)
      }, 600)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = heroSlides[current]

  return (
    <section id="top" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      {heroSlides.map((s, i) => (
  <div
    key={`${s.title}-${i}`}
    className="absolute inset-0 transition-opacity duration-1000"
    style={{ opacity: i === current ? 1 : 0 }}
  >
          <Image
            src={s.image || "/placeholder.svg"}
            alt={s.title}
            fill
            className="object-cover scale-105"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Architectural overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/10 to-foreground/60" />

      {/* Grid lines overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 lg:px-10">
        <div className="mx-auto w-full max-w-[1400px]">
          {/* Marquee ticker */}
          <div className="mb-12 overflow-hidden border-b border-primary-foreground/20 pb-4">
            <div className="animate-marquee flex whitespace-nowrap">
              {Array.from({ length: 4 }).map((_, i) => (
                <span
                  key={i}
                  className="mr-12 font-mono text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50"
                >
                  Premium-Vermietungen &nbsp;&middot;&nbsp; Komfortable Unterkunft &nbsp;&middot;&nbsp; Lokale Expertise &nbsp;&middot;&nbsp; Qualitäts-Apartments &nbsp;&middot;&nbsp;
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div
              className={`transition-all duration-700 ${
                isTransitioning
                  ? "translate-y-4 opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                Ausgewählte Unterkunft
              </p>
              <h1 className="font-serif text-5xl font-bold leading-tight text-primary-foreground md:text-7xl lg:text-8xl">
                {slide.title}
              </h1>
              <div className="mt-4 flex items-center gap-4">
                <span className="font-sans text-lg text-primary-foreground/80">
                  {slide.location}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 lg:items-end">
              <a
                href="/collection"
                className="group flex items-center gap-3 rounded-sm border border-primary-foreground/30 px-8 py-3 text-primary-foreground transition-all hover:border-primary-foreground hover:bg-primary-foreground/10"
              >
                <span className="font-mono text-xs uppercase tracking-[0.15em]">
                  Kollektion Entdecken
                </span>
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>

              {/* Slide indicators */}
              <div className="flex items-center gap-3">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setIsTransitioning(true)
                      setTimeout(() => {
                        setCurrent(i)
                        setIsTransitioning(false)
                      }, 400)
                    }}
                    className={`h-px transition-all duration-500 ${
                      i === current
                        ? "w-10 bg-primary-foreground"
                        : "w-5 bg-primary-foreground/30"
                    }`}
                    aria-label={`Folie ${i + 1} anzeigen`}
                  />
                ))}
                <span className="ml-2 font-mono text-[10px] text-primary-foreground/40">
                  {String(current + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary-foreground/40">
            Scrollen
          </span>
          <div className="h-8 w-px animate-pulse bg-primary-foreground/30" />
        </div>
      </div>
    </section>
  )
}
