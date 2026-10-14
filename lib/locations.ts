import { properties, type Property } from "@/lib/properties"

export type CitySlug = "siegen" | "kreuztal" | "wilnsdorf"

export interface CityLocation {
  slug: CitySlug
  name: string
  headline: string
  intro: string
  details: string[]
  highlights: string[]
  image: string
  coordinates: { lat: number; lng: number }
}

export const cities: CityLocation[] = [
  {
    slug: "siegen",
    name: "Siegen",
    headline: "Ferienwohnungen und Apartments in Siegen",
    intro:
      "Siegen ist die Universitätsstadt im Herzen des Siegerlandes im Süden von Nordrhein-Westfalen. Unsere Apartments liegen zentral oder stadtnah und eignen sich für Geschäftsreisen, Messe- und Projektaufenthalte, Familienbesuche und Städtetrips.",
    details: [
      "Gute Anbindung über die A45 (Sauerlandlinie) und die Hüttentalstraße (HTS).",
      "Kurze Wege zu Innenstadt, Universität Siegen, Gastronomie und Einkaufsmöglichkeiten.",
      "Apartments mit WLAN, Küche und – je nach Unterkunft – eigenem Parkplatz oder Tiefgarage.",
    ],
    highlights: ["Stadtzentrum", "Geschäftsreisen", "Autobahnnähe"],
    image: "/images/AirBNB/Stadtwohnung in Siegen-Zentrum Parkplatz Autobahn/Stadtwohnung in Siegen-Zentrum Parkplatz Autobahn1.webp",
    coordinates: { lat: 50.8748, lng: 8.0243 },
  },
  {
    slug: "kreuztal",
    name: "Kreuztal",
    headline: "Ferienwohnungen und Ferienhäuser in Kreuztal",
    intro:
      "Kreuztal liegt direkt nördlich von Siegen im Kreis Siegen-Wittgenstein. Unsere Wohnungen und Ferienhäuser im ruhigen Kreuztal-Zentrum verbinden kurze Wege in die Stadt mit einer entspannten Wohnlage – ideal für Familien, Gruppen und Monteure.",
    details: [
      "Ruhige Lage im Zentrum von Kreuztal mit Einkaufsmöglichkeiten und Restaurants in der Nähe.",
      "Schnell in Siegen und gut angebunden an das regionale Straßen- und Bahnnetz.",
      "Wohnungen mit Terrasse oder Balkon sowie Ferienhäuser mit mehreren Schlafzimmern für Gruppen.",
    ],
    highlights: ["Ruhige Lage", "Familien & Gruppen", "Monteure"],
    image: "/images/AirBNB/ModernesFerienhausinruhigerLageinKreuztal-Zentrum.webp",
    coordinates: { lat: 50.9617, lng: 7.9886 },
  },
  {
    slug: "wilnsdorf",
    name: "Wilnsdorf",
    headline: "Ferienwohnungen in Wilnsdorf",
    intro:
      "Wilnsdorf liegt südöstlich von Siegen, eingebettet in die Wälder und Hügel des Siegerlandes. Unsere Apartments bieten einen ruhigen Rückzugsort im Grünen und sind dank der nahen A45 trotzdem schnell erreichbar.",
    details: [
      "Ruhige, naturnahe Lage – gut für Erholung, Wandern und Auszeiten.",
      "Direkte Autobahnanbindung über die A45-Anschlussstelle Wilnsdorf.",
      "Kostenlose Parkmöglichkeiten direkt an der Unterkunft.",
    ],
    highlights: ["Natur", "Ruhe", "A45-Anbindung"],
    image: "/images/AirBNB/Gesamte Unterkunft Apartment in Wilnsdorf, Deutschland/Gesamte Unterkunft Apartment in Wilnsdorf, Deutschland1.jpg",
    coordinates: { lat: 50.8169, lng: 8.1050 },
  },
]

export function citySlugForProperty(property: Property): CitySlug {
  if (property.location.includes("Kreuztal")) return "kreuztal"
  if (property.location.includes("Wilnsdorf")) return "wilnsdorf"
  return "siegen"
}

export function getCityBySlug(slug: string) {
  return cities.find((city) => city.slug === slug)
}

export function getPropertiesByCity(slug: CitySlug) {
  return properties.filter((property) => citySlugForProperty(property) === slug)
}

export function cityPath(slug: CitySlug) {
  return `/unterkuenfte/${slug}`
}
