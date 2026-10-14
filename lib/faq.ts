import { cities, getPropertiesByCity, type CitySlug } from "@/lib/locations"
import { properties, type Property } from "@/lib/properties"

export interface FaqItem {
  question: string
  answer: string
}

const contactAnswer =
  "Per E-Mail an primeresidenz@web.de, telefonisch unter +49 171 3739720 oder +49 271 3356715, per WhatsApp oder über das Kontaktformular auf unserer Website."

function hasFeature(property: Property, tokens: string[]) {
  const haystack = property.features.join(" ").toLowerCase()
  return tokens.some((token) => haystack.includes(token))
}

const parkingTokens = ["parkplatz", "parken", "tiefgarage"]
const wifiTokens = ["wifi", "wlan"]
const petTokens = ["haustiere"]

function titles(list: Property[]) {
  return list.map((property) => property.title).join(", ")
}

export function homeFaqs(): FaqItem[] {
  const cityCounts = cities
    .map((city) => `${getPropertiesByCity(city.slug).length} in ${city.name}`)
    .join(", ")
  const withParking = properties.filter((property) => hasFeature(property, parkingTokens))
  const petFriendly = properties.filter((property) => hasFeature(property, petTokens))
  const largest = properties.reduce((max, property) => (property.beds > max.beds ? property : max))

  return [
    {
      question: "Wo befinden sich die Unterkünfte von Prime Residenz?",
      answer: `Prime Residenz vermietet ${properties.length} möblierte Ferienwohnungen, Apartments und Ferienhäuser im Siegerland: ${cityCounts}. Alle Unterkünfte liegen im Raum Siegen in Nordrhein-Westfalen.`,
    },
    {
      question: "Wie kann ich eine Unterkunft buchen?",
      answer: `Sie können direkt über Booking.com oder Airbnb buchen – die Links finden Sie auf der Detailseite jeder Unterkunft. Für Direktanfragen, Gruppen oder längere Aufenthalte erreichen Sie uns ${contactAnswer.charAt(0).toLowerCase()}${contactAnswer.slice(1)}`,
    },
    {
      question: "Gibt es Parkplätze an den Unterkünften?",
      answer: `Ja, ${withParking.length} von ${properties.length} Unterkünften bieten einen Parkplatz, kostenloses Parken oder eine Tiefgarage. Die genaue Parksituation steht in der Ausstattung jeder Unterkunft.`,
    },
    {
      question: "Sind die Unterkünfte für Geschäftsreisende und Monteure geeignet?",
      answer: `Ja. Viele Apartments haben WLAN, einen Arbeitsplatz und eine voll ausgestattete Küche. Für Arbeitsteams eignet sich besonders das „${largest.title}“ mit ${largest.beds} Schlafzimmern und ${largest.baths} Badezimmern.`,
    },
    {
      question: "Sind längere Aufenthalte möglich?",
      answer:
        "Ja. Der Mindestaufenthalt beträgt eine Nacht, längere Aufenthalte über Wochen oder Monate sind möglich. Für Langzeitaufenthalte und Firmenbuchungen kontaktieren Sie uns am besten direkt.",
    },
    {
      question: "Sind Haustiere erlaubt?",
      answer: petFriendly.length
        ? `Haustiere sind in folgender Unterkunft willkommen: ${titles(petFriendly)}. Für alle anderen Unterkünfte fragen Sie bitte vor der Buchung bei uns an.`
        : "Bitte fragen Sie vor der Buchung bei uns an, ob Haustiere in der gewünschten Unterkunft erlaubt sind.",
    },
    {
      question: "Welche Stornierungsbedingungen gelten?",
      answer:
        "Die Stornierungsbedingungen richten sich nach der Buchungsplattform und dem gewählten Tarif. Sie werden auf Booking.com bzw. Airbnb vor Abschluss der Buchung angezeigt.",
    },
  ]
}

export function cityFaqs(slug: CitySlug): FaqItem[] {
  const city = cities.find((item) => item.slug === slug)
  if (!city) return []

  const list = getPropertiesByCity(slug)
  const withParking = list.filter((property) => hasFeature(property, parkingTokens))
  const withWifi = list.filter((property) => hasFeature(property, wifiTokens))
  const maxBeds = Math.max(...list.map((property) => property.beds))

  const faqs: FaqItem[] = [
    {
      question: `Wie viele Unterkünfte hat Prime Residenz in ${city.name}?`,
      answer: `In ${city.name} bietet Prime Residenz ${list.length} Unterkünfte an: ${titles(list)}.`,
    },
    {
      question: `Wie groß sind die Unterkünfte in ${city.name}?`,
      answer: `Die Unterkünfte in ${city.name} haben zwischen ${Math.min(...list.map((p) => p.beds))} und ${maxBeds} Schlafzimmer und eignen sich damit für Alleinreisende, Paare, Familien${maxBeds >= 3 ? " und Gruppen" : ""}.`,
    },
  ]

  if (withParking.length) {
    faqs.push({
      question: `Gibt es Parkplätze bei den Unterkünften in ${city.name}?`,
      answer: `Ja, ${withParking.length === list.length ? "alle" : `${withParking.length} von ${list.length}`} Unterkünfte${withParking.length === list.length ? "" : "n"} in ${city.name} bieten Parkmöglichkeiten: ${titles(withParking)}.`,
    })
  }

  if (withWifi.length) {
    faqs.push({
      question: `Haben die Unterkünfte in ${city.name} WLAN?`,
      answer: `WLAN ist in der Ausstattung folgender Unterkünfte ausdrücklich enthalten: ${titles(withWifi)}. Details stehen auf der jeweiligen Detailseite.`,
    })
  }

  faqs.push({
    question: `Wie buche ich eine Unterkunft in ${city.name}?`,
    answer: `Über Booking.com oder Airbnb (Links auf jeder Detailseite) oder direkt bei uns: ${contactAnswer}`,
  })

  return faqs
}
