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
              alt="Maison luxury property"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />

            {/* Floating stat card */}
            <div className="absolute bottom-8 right-8 rounded-sm border border-primary-foreground/20 bg-foreground/30 px-6 py-4 backdrop-blur-lg">
              <span className="block font-serif text-3xl font-bold text-primary-foreground">25+</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70">
                Years of Excellence
              </span>
            </div>
          </div>

          {/* Content */}
          <div className={`flex flex-col justify-center ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              ( Our Philosophy )
            </p>
            <h2 className="mb-8 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Architecture
              <br />
              as Art
            </h2>
            <p className="mb-6 font-sans text-base leading-relaxed text-muted-foreground">
              At Maison, we believe that a residence is more than a structure. It is a narrative
              written in stone, glass, and light. Our curated portfolio represents the finest
              examples of architectural vision from across the globe, each property selected
              for its ability to inspire and transform.
            </p>
            <p className="mb-10 font-sans text-base leading-relaxed text-muted-foreground">
              Founded by a collective of architects, art advisors, and real estate visionaries,
              we approach property not as commodity but as cultural artifact. Every listing
              in our collection tells a story worth inhabiting.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Curation", description: "Only the top 1% of properties earn our seal" },
                { label: "Discretion", description: "Privacy-first approach to every transaction" },
                { label: "Vision", description: "Architectural merit as the primary criterion" },
                { label: "Legacy", description: "Properties that appreciate in every sense" },
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
