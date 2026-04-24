import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { PropertyDetail } from "@/components/property-detail"
import { SiteFooter } from "@/components/site-footer"
import { getPropertyById, properties } from "@/lib/properties"

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
      title: "Unterkunft nicht gefunden | Prime Residenz",
    }
  }

  return {
    title: `${property.title} | Prime Residenz`,
    description: `${property.title} in ${property.location} mit ${property.beds} Betten, ${property.baths} Bädern und Premium-Ausstattung.`,
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
      <Navigation />
      <PropertyDetail property={property} backHref="/collection" />
      <SiteFooter />
    </main>
  )
}
