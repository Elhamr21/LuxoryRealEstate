import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { FaqSection } from "@/components/faq-section"
import { Navigation } from "@/components/navigation"
import { PropertyCard } from "@/components/property-card"
import { SiteFooter } from "@/components/site-footer"
import { cityFaqs } from "@/lib/faq"
import { cities, cityPath, getCityBySlug, getPropertiesByCity } from "@/lib/locations"
import {
  absoluteUrl,
  breadcrumbStructuredData,
  cityStructuredData,
  faqStructuredData,
  serializeJsonLd,
} from "@/lib/seo"

interface CityPageProps {
  params: Promise<{
    city: string
  }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = getCityBySlug(slug)

  if (!city) {
    return { title: "Standort nicht gefunden" }
  }

  const cityProperties = getPropertiesByCity(city.slug)
  const count = cityProperties.length
  const maxBeds = Math.max(...cityProperties.map((property) => property.beds))
  const title = `Ferienwohnung ${city.name} – ${count} Unterkünfte`
  const description = `${count} möblierte Unterkünfte in ${city.name} von Prime Residenz mit bis zu ${maxBeds} Schlafzimmern und eigener Küche. ${city.highlights.join(" · ")}. Jetzt direkt oder über Booking.com/Airbnb buchen.`
  const url = absoluteUrl(cityPath(city.slug))

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Prime Residenz`,
      description,
      url,
      images: [{ url: absoluteUrl(city.image), alt: city.headline }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Prime Residenz`,
      description,
      images: [absoluteUrl(city.image)],
    },
  }
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params
  const city = getCityBySlug(slug)

  if (!city) {
    notFound()
  }

  const cityProperties = getPropertiesByCity(city.slug)
  const faqs = cityFaqs(city.slug)
  const url = absoluteUrl(cityPath(city.slug))
  const otherCities = cities.filter((item) => item.slug !== city.slug)

  return (
    <main className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(cityStructuredData(city, cityProperties)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(
            breadcrumbStructuredData([
              { name: "Startseite", url: absoluteUrl("/") },
              { name: "Unterkünfte", url: absoluteUrl("/collection") },
              { name: city.name, url },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqStructuredData(faqs, url)) }}
      />
      <Navigation />

      <section className="relative overflow-hidden bg-card px-6 pb-20 pt-36 lg:px-10 lg:pt-40">
        <div className="relative mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <nav aria-label="Brotkrumen" className="mb-8 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-foreground">
                    Startseite
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/collection" className="transition-colors hover:text-foreground">
                    Unterkünfte
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-foreground">
                  {city.name}
                </li>
              </ol>
            </nav>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {cityProperties.length} Unterkünfte in {city.name}
            </p>
            <h1 className="font-serif text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
              {city.headline}
            </h1>
            <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
              {city.intro}
            </p>
            <ul className="mt-8 flex max-w-2xl flex-col gap-3">
              {city.details.map((detail) => (
                <li key={detail} className="flex gap-3 font-sans text-sm leading-relaxed text-foreground md:text-base">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={city.image}
              alt={`Ferienwohnung von Prime Residenz in ${city.name}`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10" aria-labelledby="city-listings">
        <div className="mx-auto max-w-[1400px]">
          <h2 id="city-listings" className="mb-12 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Unterkünfte in {city.name}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cityProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} href={`/collection/${property.id}`} />
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} title={`Fragen zu Unterkünften in ${city.name}`} className="bg-card" />

      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-serif text-2xl font-semibold text-foreground">Weitere Standorte</p>
          <div className="flex flex-wrap gap-3">
            {otherCities.map((item) => (
              <Link
                key={item.slug}
                href={cityPath(item.slug)}
                className="rounded-sm border border-foreground px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                Ferienwohnungen in {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
