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
              src="/images/hero-property.png"
              alt="Hochwertige Unterkunft von Prime Residenz"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />

            {/* Floating stat card */}
            <div className="absolute bottom-8 right-8 rounded-sm border border-primary-foreground/20 bg-foreground/30 px-6 py-4 backdrop-blur-lg">
              <span className="block font-serif text-3xl font-bold text-primary-foreground">4+</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70">
                Luxusunterkünfte
              </span>
            </div>
          </div>

          {/* Content */}
          <div className={`flex flex-col justify-center ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              ( Unsere Philosophie )
            </p>
            <h2 className="mb-8 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Außergewöhnliche
              <br />
              Unterkünfte
            </h2>
            <p className="mb-6 font-sans text-base leading-relaxed text-muted-foreground">
              Bei Prime Residenz glauben wir, dass Ihre Unterkunft mehr ist als nur ein Ort zum Übernachten. Sie ist ein
              Tor zu authentischem Wohnen, sorgfältig kuratiert für Menschen, die außergewöhnlichen Komfort und
              kompromisslose Qualität schätzen. Unsere Kollektion repräsentiert Premium-Mietobjekte in Siegen,
              Kreuztal und Wilnsdorf, die jeweils aufgrund ihrer Fähigkeit ausgewählt wurden, unvergessliche Erlebnisse zu schaffen.
            </p>
            <p className="mb-10 font-sans text-base leading-relaxed text-muted-foreground">
              Gegründet mit einer Leidenschaft für Gastfreundschaft und exzellenten Service, behandeln wir Mietobjekte mit
              Sorgfalt und Liebe zum Detail. Jedes Inserat in unserer Kollektion ist darauf ausgelegt, die perfekte
              Basis für Ihren Aufenthalt zu bieten, ob für Geschäft, Freizeit oder besondere Anlässe.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Qualität", description: "Sorgfältig ausgewählte Unterkünfte, die hohen Standards entsprechen" },
                { label: "Lage", description: "Erstklassige Standorte in Siegen, Kreuztal und Wilnsdorf" },
                { label: "Service", description: "Professionelle Verwaltung und Gästebetreuung" },
                { label: "Komfort", description: "Moderne Ausstattung und durchdachtes Design in jedem Raum" },
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
