export interface Property {
  id: string
  title: string
  subtitle: string
  location: string
  price: string
  priceValue: number
  image: string
  images?: string[]
  beds: number
  baths: number
  sqft: string
  type: "oceanfront" | "urban" | "country" | "mountain" | "tropical" | "historic"
  featured?: boolean
  description: string
  architect: string
  yearBuilt: number
  features: string[]
  coordinates: { lat: number; lng: number }
  neighborhood: {
    walkScore: number
    transitScore: number
    schools: number
    restaurants: number
  }
  priceHistory: { year: number; price: number }[]
  bookingUrl: string
}

export const properties: Property[] = [
  {
    id: "siegen-parkplatz-wlan",
    title: "Stadtwohnung in Siegen Parkplatz WLAN Autobahn",
    subtitle: "Moderner urbaner Komfort mit nahtlosem Zugang",
    location: "Siegen, Deutschland",
    price: "€285/Nacht",
    priceValue: 285,
    image: "/images/AirBNB/City Apartment in Siegen Parkplatz WLAN Autobahn/City Apartment in Siegen Parkplatz WLAN Autobahn1.jpg",
    images: [
      "/images/AirBNB/City Apartment in Siegen Parkplatz WLAN Autobahn/City Apartment in Siegen Parkplatz WLAN Autobahn3.avif",
    ],
    beds: 2,
    baths: 1,
    sqft: "850",
    type: "urban",
    featured: true,
    description:
      "Diese moderne Stadtwohnung verbindet Annehmlichkeiten mit praktischem Autobahnzugang. Perfekt für Geschäftsreisende und Freizeitgäste mit Premium-WiFi überall und dediziertem Parkplatz. Der offene Wohnbereich präsentiert modernes Design mit durchdachten Details.",
    architect: "Studio für modernes Design",
    yearBuilt: 2018,
    features: [
      "Kostenloses WiFi",
      "Dedizierter Parkplatz",
      "Moderne Küche",
      "Flachbildschirm",
      "Klimaanlage",
      "Arbeitsplatz",
    ],
    coordinates: { lat: 50.8783, lng: 8.0316 },
    neighborhood: { walkScore: 65, transitScore: 55, schools: 3, restaurants: 18 },
    priceHistory: [
      { year: 2021, price: 220 },
      { year: 2022, price: 240 },
      { year: 2023, price: 260 },
      { year: 2024, price: 275 },
      { year: 2025, price: 285 },
    ],
    bookingUrl: "https://www.booking.com/Share-z8voFe",
  },
  {
    id: "siegen-deutschland",
    title: "Komplettes Apartment in Siegen, Deutschland",
    subtitle: "Luxuswohnen im Herzen von Siegen",
    location: "Siegen, Deutschland",
    price: "€325/Nacht",
    priceValue: 325,
    image: "/images/AirBNB/Gesamte Unterkunft Apartment in Siegen, Deutschland/Gesamte Unterkunft Apartment in Siegen, Deutschland1.png",
    images: [
      "/images/AirBNB/Gesamte Unterkunft Apartment in Siegen, Deutschland/Gesamte Unterkunft Apartment in Siegen, Deutschland1.png",
    ],
    beds: 3,
    baths: 2,
    sqft: "1,200",
    type: "urban",
    featured: true,
    description:
      "Erlebe raffiniertes Wohnen in diesem großzügigen Luxusapartment im lebhaften Herzen Siegens. Makellos gestaltet mit hochwertigen Möbeln und modernen Annehmlichkeiten, bietet dieses komplette Apartment den perfekten Rückzugsort für Familien oder Gruppen, die authentische deutsche Gastfreundschaft mit Premium-Ausstattung suchen.",
    architect: "Zeitgenössisches Designstudio",
    yearBuilt: 2019,
    features: [
      "Vollständige Küche",
      "Essbereich",
      "Waschmaschine/Trockner",
      "Smart-TV",
      "Hochgeschwindigkeits-WiFi",
      "Zentralheizung",
    ],
    coordinates: { lat: 50.8771, lng: 8.0288 },
    neighborhood: { walkScore: 78, transitScore: 72, schools: 5, restaurants: 32 },
    priceHistory: [
      { year: 2021, price: 245 },
      { year: 2022, price: 270 },
      { year: 2023, price: 295 },
      { year: 2024, price: 310 },
      { year: 2025, price: 325 },
    ],
    bookingUrl: "https://www.booking.com/Share-LTdUiT5",
  },
  {
    id: "wilnsdorf-unterkunft",
    title: "Komplettes Apartment in Wilnsdorf, Deutschland",
    subtitle: "Charmanter Landausflug",
    location: "Wilnsdorf, Deutschland",
    price: "€245/Nacht",
    priceValue: 245,
    image: "/images/AirBNB/hero4.jpeg",
    images: [
      "/images/AirBNB/hero4.jpeg",
    ],
    beds: 2,
    baths: 1,
    sqft: "950",
    type: "country",
    description:
      "Eingebettet in die malerische Wilnsdorfer Landschaft bietet dieses charmante Apartment einen ruhigen Rückzugsort umgeben von natürlicher Schönheit. Es verbindet rustikale Elemente mit modernem Komfort und ist die ideale Basis zum Erkunden der hügeligen Landschaften und gastfreundlichen Gemeinden der Region.",
    architect: "Spezialisten für ländliches Design",
    yearBuilt: 2017,
    features: [
      "Landschaftsblick",
      "Gartenzugang",
      "Moderne Annehmlichkeiten",
      "Gemütlicher Kamin",
      "Parkplatz inbegriffen",
      "Ruhige Lage",
    ],
    coordinates: { lat: 50.7542, lng: 8.2183 },
    neighborhood: { walkScore: 42, transitScore: 35, schools: 2, restaurants: 12 },
    priceHistory: [
      { year: 2021, price: 180 },
      { year: 2022, price: 205 },
      { year: 2023, price: 220 },
      { year: 2024, price: 235 },
      { year: 2025, price: 245 },
    ],
    bookingUrl: "https://www.booking.com/Share-Nmb6sX",
  },
  {
    id: "siegen-zentrum",
    title: "Stadtwohnung in Siegen-Zentrum Parkplatz Autobahn",
    subtitle: "Premium Innenstadtwohnen",
    location: "Siegen Innenstadt, Deutschland",
    price: "€360/Nacht",
    priceValue: 360,
    image: "/images/AirBNB/Stadtwohnung in Siegen-Zentrum Parkplatz Autobahn/Stadtwohnung in Siegen-Zentrum Parkplatz Autobahn1.png",
    images: [
      "/images/AirBNB/Stadtwohnung in Siegen-Zentrum Parkplatz Autobahn/Stadtwohnung in Siegen-Zentrum Parkplatz Autobahn2.avif",
    ],
    beds: 3,
    baths: 2,
    sqft: "1,350",
    type: "urban",
    featured: true,
    description:
      "Dieses prestigeträchtige Innenstadtapartment platziert dich im Herzen von Siegens lebendiger Kultur. Mit direktem Autobahnzugang und Premium-Ausstattung ist es das ultimative urbane Luxuserlebnis. Hohe Decken, natürliches Licht und Designer-Verkleidungen schaffen ein außergewöhnliches Umfeld für den anspruchsvollen Reisenden.",
    architect: "Urban Luxury Designs",
    yearBuilt: 2020,
    features: [
      "Zentrale Lage",
      "Premium-Möbel",
      "Vollständige Küchenausstattung",
      "Unterhaltungssystem",
      "Concierge-Service",
      "Tiefgarage",
    ],
    coordinates: { lat: 50.8761, lng: 8.0263 },
    neighborhood: { walkScore: 89, transitScore: 85, schools: 8, restaurants: 52 },
    priceHistory: [
      { year: 2021, price: 280 },
      { year: 2022, price: 310 },
      { year: 2023, price: 335 },
      { year: 2024, price: 350 },
      { year: 2025, price: 360 },
    ],
    bookingUrl: "https://www.booking.com/Share-Y1eNPV",
  },
  {
    id: "moderne-wohnung-siegen",
    title: "Moderne Wohnung in Siegen Parkplatz WLAN",
    subtitle: "Moderner Komfort mit Premium-Ausstattung",
    location: "Siegen, Deutschland",
    price: "€275/Nacht",
    priceValue: 275,
    image: "/images/AirBNB/ModerneWohnunginSiegenParkplatzWLAN.png",
    images: [
      "/images/AirBNB/ModerneWohnunginSiegenParkplatzWLAN.png",
    ],
    beds: 2,
    baths: 1,
    sqft: "850",
    type: "urban",
    featured: false,
    description:
      "Entdecke modernen Komfort in dieser wunderschön eingerichteten Siegener Wohnung. Perfekt für Geschäftsreisende und Freizeitgäste mit kostenlosem WiFi, dediziertem Parkplatz und modernem Design überall. Der einfache Zugang zu Hauptautobahnen und lokalen Annehmlichkeiten macht dies zur idealen Wahl zum Erkunden der Region.",
    architect: "Priem Residenz",
    yearBuilt: 2018,
    features: [
      "Kostenloses WiFi",
      "Dedizierter Parkplatz",
      "Moderne Küche",
      "Komfortables Schlafzimmer",
      "Klimaanlage",
      "Arbeitsplatz",
    ],
    coordinates: { lat: 50.8783, lng: 8.0316 },
    neighborhood: { walkScore: 65, transitScore: 55, schools: 3, restaurants: 18 },
    priceHistory: [
      { year: 2021, price: 220 },
      { year: 2022, price: 240 },
      { year: 2023, price: 260 },
      { year: 2024, price: 275 },
      { year: 2025, price: 275 },
    ],
    bookingUrl: "https://www.booking.com/Share-lNqi6YW",
  },
  {
    id: "charmante-wohnung-kreuztal",
    title: "Charmante Wohnung mit Terrasse in ruhiger Lage von Kreuztal-Zentrum",
    subtitle: "Ruhiger Rückzugsort mit Gartenblick",
    location: "Kreuztal, Deutschland",
    price: "€225/Nacht",
    priceValue: 225,
    image: "/images/AirBNB/CharmanteWohnungmitTerrasseinruhigerLagevonKreuztal-Zentrum.png",
    images: [
      "/images/AirBNB/CharmanteWohnungmitTerrasseinruhigerLagevonKreuztal-Zentrum.png",
    ],
    beds: 2,
    baths: 1,
    sqft: "780",
    type: "country",
    featured: false,
    description:
      "Flucht in diese charmante Wohnung in der ruhigen Mitte von Kreuztal. Die großzügige Terrasse überblickt ruhige Umgebungen, perfekt für Morgenkaffee oder abendliche Entspannung. Vollständig ausgestattet mit modernen Annehmlichkeiten bei Bewahrung einer gemütlichen, traditionellen Atmosphäre. Ideal für Paare oder kleine Familien, die Ruhe suchen.",
    architect: "Priem Residenz",
    yearBuilt: 2016,
    features: [
      "Private Terrasse",
      "Gartenblick",
      "Vollständig ausgestattete Küche",
      "Gemütliches Wohnzimmer",
      "Kostenloses Parken",
      "Ruhige Lage",
    ],
    coordinates: { lat: 50.9033, lng: 7.9925 },
    neighborhood: { walkScore: 58, transitScore: 48, schools: 2, restaurants: 12 },
    priceHistory: [
      { year: 2021, price: 180 },
      { year: 2022, price: 200 },
      { year: 2023, price: 215 },
      { year: 2024, price: 225 },
      { year: 2025, price: 225 },
    ],
    bookingUrl: "https://www.booking.com/Share-LTdUiT5",
  },
  {
    id: "modernes-ferienhaus-kreuztal",
    title: "Modernes Ferienhaus in ruhiger Lage in Kreuztal-Zentrum",
    subtitle: "Großzügiges Ferienhaus im Stadtzentrum",
    location: "Kreuztal, Deutschland",
    price: "€310/Nacht",
    priceValue: 310,
    image: "/images/AirBNB/ModernesFerienhausinruhigerLageinKreuztal-Zentrum.png",
    images: [
      "/images/AirBNB/ModernesFerienhausinruhigerLageinKreuztal-Zentrum.png",
    ],
    beds: 3,
    baths: 2,
    sqft: "1,100",
    type: "urban",
    featured: false,
    description:
      "Dieses moderne Ferienhaus im Zentrum von Kreuztal bietet die perfekte Basis für deinen Aufenthalt. Mit drei geräumigen Schlafzimmern und modernen Annehmlichkeiten überall bietet es Familien und Gruppen komfortabel Platz. Die ruhige, aber praktische Lage platziert dich zu Fuß Entfernung zu lokalen Läden und Restaurants.",
    architect: "Priem Residenz",
    yearBuilt: 2019,
    features: [
      "Drei Schlafzimmer",
      "Zwei Badezimmer",
      "Vollständige Küche",
      "Essbereich",
      "Waschmaschine/Trockner",
      "Gartenzugang",
    ],
    coordinates: { lat: 50.9033, lng: 7.9925 },
    neighborhood: { walkScore: 72, transitScore: 65, schools: 4, restaurants: 20 },
    priceHistory: [
      { year: 2021, price: 260 },
      { year: 2022, price: 280 },
      { year: 2023, price: 295 },
      { year: 2024, price: 310 },
      { year: 2025, price: 310 },
    ],
    bookingUrl: "https://www.booking.com/Share-Nmb6sX",
  },
  {
    id: "city-wohnung-balkon-kreuztal",
    title: "Stadtwohnung mit Balkon in ruhiger Lage von Kreuztal-Zentrum",
    subtitle: "Stadtleben mit malerischem Balkon",
    location: "Kreuztal, Deutschland",
    price: "€235/Nacht",
    priceValue: 235,
    image: "/images/AirBNB/CityWohnungmitBalkoninruhigerLagevonKreuztal-Zentrum.png",
    images: [
      "/images/AirBNB/CityWohnungmitBalkoninruhigerLagevonKreuztal-Zentrum.png",
    ],
    beds: 2,
    baths: 1,
    sqft: "820",
    type: "urban",
    featured: false,
    description:
      "Genießen Sie das Stadtleben in dieser attraktiven Wohnung mit schönem Balkon. Im ruhigen Zentrum von Kreuztal gelegen, verbindet dieses komfortable Zuhause modernes Design mit traditionellem Charme. Der Balkon bietet den perfekten Ort zum Entspannen nach der Erkundung der Gegend.",
    architect: "Priem Residenz",
    yearBuilt: 2017,
    features: [
      "Großzügiger Balkon",
      "Moderne Küche",
      "Komfortable Schlafzimmer",
      "Helles Wohnzimmer",
      "Parkplatz verfügbar",
      "Innenstadtlage",
    ],
    coordinates: { lat: 50.9033, lng: 7.9925 },
    neighborhood: { walkScore: 68, transitScore: 58, schools: 3, restaurants: 16 },
    priceHistory: [
      { year: 2021, price: 190 },
      { year: 2022, price: 210 },
      { year: 2023, price: 225 },
      { year: 2024, price: 235 },
      { year: 2025, price: 235 },
    ],
    bookingUrl: "https://www.booking.com/Share-Y1eNPV",
  },
  {
    id: "grosses-ferienhaus-siegen-kreuztal",
    title: "Großes Ferienhaus in Siegen-Kreuztal auch für Monteure",
    subtitle: "Großzügiges Familienhaus mit mehreren Annehmlichkeiten",
    location: "Siegen-Kreuztal, Deutschland",
    price: "€340/Nacht",
    priceValue: 340,
    image: "/images/AirBNB/GroßesFerienhausinSiegen-KreuztalauchfürMonteure.png",
    images: [
      "/images/AirBNB/GroßesFerienhausinSiegen-KreuztalauchfürMonteure.png",
    ],
    beds: 4,
    baths: 2,
    sqft: "1,350",
    type: "country",
    featured: false,
    description:
      "Dieses großzügige Familienhaus eignet sich perfekt für Gruppen und Arbeitsteams. Mit vier Schlafzimmern und mehreren Badezimmern gibt es reichlich Platz für alle. Ideal für längere Aufenthalte mit komfortablem häuslichem Umfeld mit allen modernen Annehmlichkeiten. Großartig für Familien, Freunde oder professionelle Teams.",
    architect: "Priem Residenz",
    yearBuilt: 2018,
    features: [
      "Vier Schlafzimmer",
      "Zwei Badezimmer",
      "Vollständige Küche",
      "Großer Wohnbereich",
      "Wäscheeinrichtung",
      "Reichlich Parkplatz",
    ],
    coordinates: { lat: 50.8900, lng: 8.0100 },
    neighborhood: { walkScore: 55, transitScore: 50, schools: 3, restaurants: 14 },
    priceHistory: [
      { year: 2021, price: 280 },
      { year: 2022, price: 300 },
      { year: 2023, price: 320 },
      { year: 2024, price: 335 },
      { year: 2025, price: 340 },
    ],
    bookingUrl: "https://www.booking.com/Share-6Gf5BI",
  },
]

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id)
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured)
}
