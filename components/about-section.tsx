"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="about" className="bg-card px-6 py-24 lg:px-10">
      <div ref={ref} className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Image */}
          <div
            className={`relative aspect-[3/4] overflow-hidden lg:aspect-auto ${isVisible ? "animate-morph-in" : "opacity-0"}`}
          >
            <Image
              src="/images/hero-property.jpg"
              alt="DEMA luxury property"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />

            {/* Floating stat card */}
            <div className="absolute bottom-8 right-8 rounded-sm border border-primary-foreground/20 bg-foreground/30 px-6 py-4 backdrop-blur-lg">
              <span className="block font-serif text-3xl font-bold text-primary-foreground">4+</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70">
                Luxury Rentals
              </span>
            </div>
          </div>

          {/* Content */}
          <div className={`flex flex-col justify-center ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              ( Our Philosophy )
            </p>
            <h2 className="mb-8 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Luxury
              <br />
              Experiences
            </h2>
            <p className="mb-6 font-sans text-base leading-relaxed text-muted-foreground">
              At DEMA, we believe that travel accommodation is more than a place to sleep. It is a gateway
              to authentic living, carefully curated for those who appreciate exceptional design and 
              uncompromising quality. Our collection represents the finest luxury rental apartments,
              each selected for its ability to inspire extraordinary moments.
            </p>
            <p className="mb-10 font-sans text-base leading-relaxed text-muted-foreground">
              Founded by hospitality experts, interior designers, and travel enthusiasts,
              we approach rental properties not as commodities but as curated experiences. Every listing
              in our collection is designed to elevate your stay into something memorable.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Curation", description: "Only exceptional luxury apartments meet our standards" },
                { label: "Comfort", description: "Premium amenities and thoughtful design in every space" },
                { label: "Authenticity", description: "Genuine local character combined with global luxury" },
                { label: "Experience", description: "Every stay creates lasting memories and moments" },
              ].map((value) => (
                <div key={value.label} className="flex flex-col gap-1">
                  <span className="font-serif text-lg font-semibold text-foreground">{value.label}</span>
                  <span className="font-sans text-xs leading-relaxed text-muted-foreground">
                    {value.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
