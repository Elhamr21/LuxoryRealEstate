import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { PropertyDetail } from "@/components/property-detail"
import { SiteFooter } from "@/components/site-footer"
import { getPropertyById, properties } from "@/lib/properties"
import {
  absoluteUrl,
  breadcrumbStructuredData,
  propertyDescription,
  propertyStructuredData,
  serializeJsonLd,
} from "@/lib/seo"

interface PropertyPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }))
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { id } = await params
  const property = getPropertyById(id)

  if (!property) {
    return {
      title: "Unterkunft nicht gefunden",
    }
  }

  const description = propertyDescription(property)
  const url = absoluteUrl(`/collection/${property.id}`)

  return {
    title: property.title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${property.title} | Prime Residenz`,
      description,
      url,
      images: [
        {
          url: absoluteUrl(property.image),
          alt: property.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${property.title} | Prime Residenz`,
      description,
      images: [absoluteUrl(property.image)],
    },
  }
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params
  const property = getPropertyById(id)

  if (!property) {
    notFound()
  }

  return (
    <main className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(propertyStructuredData(property)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(
            breadcrumbStructuredData([
              { name: "Startseite", url: absoluteUrl("/") },
              { name: "Kollektion", url: absoluteUrl("/collection") },
              { name: property.title, url: absoluteUrl(`/collection/${property.id}`) },
            ])
          ),
        }}
      />
      <Navigation />
      <PropertyDetail property={property} backHref="/collection" />
      <SiteFooter />
    </main>
  )
}
