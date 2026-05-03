import type { Property } from "@/lib/properties"

export const siteName = "Prime Residenz"
export const siteDescription =
  "Premium-Unterkünfte, Ferienwohnungen und Apartments in Siegen, Kreuztal und Wilnsdorf für Kurztrips, Geschäftsreisen und längere Aufenthalte."

export const defaultOgImage = "/images/AirBNB/hero1.jpeg"

const fallbackSiteUrl = "https://prime-residenz.de"

function normalizeSiteUrl(url: string) {
  try {
    return new URL(url).origin
  } catch {
    return fallbackSiteUrl
  }
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl)

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString()
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}

export function propertyDescription(property: Property) {
  const location = property.title.toLowerCase().includes(property.location.toLowerCase())
    ? ""
    : ` in ${property.location}`

  return `${property.title}${location}: ${property.beds} Schlafzimmer, ${property.baths} Bad/Bäder und Ausstattung wie ${property.features.slice(0, 3).join(", ")}. Verfügbarkeit und Preise finden Sie auf Booking oder Airbnb.`
}

function localityFromLocation(location: string) {
  if (location.includes("Kreuztal")) return "Kreuztal"
  if (location.includes("Wilnsdorf")) return "Wilnsdorf"
  return "Siegen"
}

function propertyAccommodationType(property: Property) {
  return property.title.toLowerCase().includes("ferienhaus") ? "House" : "Apartment"
}

function accommodationCategory(property: Property) {
  return property.title.toLowerCase().includes("ferienhaus") ? "Ferienhaus" : "Ferienwohnung"
}

function numericFloorSize(sqft: string) {
  const parsed = Number(sqft.replace(/[^\d.]/g, ""))
  return Number.isFinite(parsed) && parsed > 0 ? parsed : undefined
}

function propertyImages(property: Property) {
  return Array.from(new Set([property.image, ...(property.images || [])])).map((image) =>
    absoluteUrl(image)
  )
}

function amenityFeatures(features: string[]) {
  const haystack = features.join(" ").toLowerCase()
  const amenities: Array<Record<string, string | boolean>> = []

  const addBoolean = (name: string, tokens: string[]) => {
    if (tokens.some((token) => haystack.includes(token))) {
      amenities.push({ "@type": "LocationFeatureSpecification", name, value: true })
    }
  }

  addBoolean("wifi", ["wifi", "wlan"])
  addBoolean("ac", ["klimaanlage"])
  addBoolean("kitchen", ["kueche", "küche", "kuechenausstattung", "küchenausstattung"])
  addBoolean("tv", ["tv", "flachbildschirm", "unterhaltungssystem"])
  addBoolean("heating", ["heizung", "zentralheizung"])
  addBoolean("fireplace", ["kamin"])
  addBoolean("balcony", ["balkon"])
  addBoolean("patio", ["terrasse", "garten", "gartenzugang", "gartenaufenthalt"])
  addBoolean("petsAllowed", ["haustiere"])
  addBoolean("selfCheckinCheckout", ["check-in", "checkin"])
  addBoolean("washerDryer", ["waschmaschine", "trockner", "waesche", "wäsche"])

  if (["parkplatz", "parken", "tiefgarage"].some((token) => haystack.includes(token))) {
    amenities.push({
      "@type": "LocationFeatureSpecification",
      name: "parkingType",
      value: "Free",
    })
  }

  if (["wifi", "wlan"].some((token) => haystack.includes(token))) {
    amenities.push({
      "@type": "LocationFeatureSpecification",
      name: "internetType",
      value: "Free",
    })
  }

  return amenities
}

export function siteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LodgingBusiness",
        "@id": `${siteUrl}/#business`,
        name: siteName,
        url: siteUrl,
        email: "primeresidenz@web.de",
        telephone: ["+491713739720", "+492713356715"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Hochstr. 36",
          postalCode: "57076",
          addressLocality: "Siegen",
          addressRegion: "Nordrhein-Westfalen",
          addressCountry: "DE",
        },
        areaServed: [
          { "@type": "City", name: "Siegen" },
          { "@type": "City", name: "Kreuztal" },
          { "@type": "City", name: "Wilnsdorf" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        url: siteUrl,
        inLanguage: "de-DE",
        publisher: {
          "@id": `${siteUrl}/#business`,
        },
      },
    ],
  }
}

export function homeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl("/")}#webpage`,
    url: absoluteUrl("/"),
    name: "Premium-Unterkünfte in Siegen, Kreuztal und Wilnsdorf",
    description: siteDescription,
    inLanguage: "de-DE",
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#business`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(defaultOgImage),
    },
  }
}

export function collectionStructuredData(properties: Property[]) {
  const collectionUrl = absoluteUrl("/collection")

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${collectionUrl}#itemlist`,
    name: "Prime Residenz Unterkunftskollektion",
    description:
      "Ferienwohnungen, Apartments und Ferienhäuser in Siegen, Kreuztal und Wilnsdorf.",
    numberOfItems: properties.length,
    itemListElement: properties.map((property, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/collection/${property.id}`),
      name: property.title,
      image: absoluteUrl(property.image),
    })),
  }
}

export function breadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function propertyStructuredData(property: Property) {
  const propertyUrl = absoluteUrl(`/collection/${property.id}`)
  const floorSize = numericFloorSize(property.sqft)
  const amenities = amenityFeatures(property.features)
  const bookingUrl = property.bookingUrl || property.airbnbUrl || propertyUrl

  return {
    "@context": "https://schema.org",
    "@type": propertyAccommodationType(property),
    "@id": `${propertyUrl}#accommodation`,
    identifier: property.id,
    name: property.title,
    description: property.description,
    url: propertyUrl,
    mainEntityOfPage: propertyUrl,
    additionalType: "VacationRental",
    accommodationCategory: accommodationCategory(property),
    image: propertyImages(property),
    containedInPlace: {
      "@id": `${siteUrl}/#business`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: localityFromLocation(property.location),
      addressRegion: "Nordrhein-Westfalen",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: Number(property.coordinates.lat.toFixed(5)),
      longitude: Number(property.coordinates.lng.toFixed(5)),
    },
    occupancy: {
      "@type": "QuantitativeValue",
      minValue: 1,
      maxValue: Math.max(property.beds * 2, 1),
    },
    numberOfBedrooms: property.beds,
    numberOfBathroomsTotal: property.baths,
    numberOfRooms: property.beds + property.baths + 1,
    floorSize: floorSize
      ? {
          "@type": "QuantitativeValue",
          value: floorSize,
          unitCode: "FTK",
        }
      : undefined,
    amenityFeature: amenities.length ? amenities : undefined,
    tourBookingPage: bookingUrl,
    yearBuilt: property.yearBuilt,
    subjectOf: {
      "@type": "WebPage",
      url: bookingUrl,
      name: "Verfügbarkeit und Buchung",
    },
    knowsLanguage: ["de-DE", "en"],
  }
}
