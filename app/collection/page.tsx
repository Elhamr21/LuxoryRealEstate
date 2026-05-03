import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { CollectionBrowser } from "@/components/collection-browser"
import { SiteFooter } from "@/components/site-footer"
import { properties } from "@/lib/properties"
import {
  absoluteUrl,
  collectionStructuredData,
  defaultOgImage,
  serializeJsonLd,
} from "@/lib/seo"

export const metadata: Metadata = {
  title: "Kollektion",
  description:
    "Entdecken Sie die gesamte Prime Residenz Kollektion mit hochwertigen Unterkünften in Siegen, Kreuztal und Wilnsdorf.",
  alternates: {
    canonical: absoluteUrl("/collection"),
  },
  openGraph: {
    title: "Kollektion | Prime Residenz",
    description:
      "Alle Prime Residenz Unterkünfte in Siegen, Kreuztal und Wilnsdorf mit Ausstattung, Lage und Buchungsoptionen.",
    url: absoluteUrl("/collection"),
    images: [
      {
        url: absoluteUrl(defaultOgImage),
        alt: "Prime Residenz Kollektion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kollektion | Prime Residenz",
    description:
      "Alle Prime Residenz Unterkünfte in Siegen, Kreuztal und Wilnsdorf mit Ausstattung, Lage und Buchungsoptionen.",
    images: [absoluteUrl(defaultOgImage)],
  },
}

export default function CollectionPage() {
  return (
    <main className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(collectionStructuredData(properties)),
        }}
      />
      <Navigation />
      <section className="relative overflow-hidden bg-card px-6 pb-20 pt-36 lg:px-10 lg:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(180,103,69,0.14),_transparent_38%),linear-gradient(135deg,_rgba(255,255,255,0.72),_rgba(249,246,241,0.96))]" />
        <div className="relative mx-auto max-w-[1400px]">
          <Link
            href="/#top"
            className="mb-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Zur Startseite
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.85fr] lg:items-end">
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Prime Residenz Kollektion
              </p>
              <h1 className="max-w-4xl font-serif text-5xl font-bold leading-tight text-foreground md:text-7xl lg:text-8xl">
                Alle Unterkünfte an einem Ort.
              </h1>
            </div>
            <div className="space-y-5">
              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                Finden Sie die passende Unterkunft für Städtereisen, längere Aufenthalte oder ruhige Rückzugsorte.
                Jede Immobilie führt direkt zu einer eigenen Detailseite mit Ausstattung, Lage und Buchungsoptionen.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Siegen", "Kreuztal", "Wilnsdorf", "Kurzzeitvermietung"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-border bg-background/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CollectionBrowser standalone />
      <SiteFooter />
    </main>
  )
}
