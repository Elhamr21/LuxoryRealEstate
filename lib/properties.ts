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
  clientHistory: { year: number; clients: number }[]
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
    clientHistory: [
      { year: 2021, clients: 220 },
      { year: 2022, clients: 240 },
      { year: 2023, clients: 260 },
      { year: 2024, clients: 275 },
      { year: 2025, clients: 285 },
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
    clientHistory: [
      { year: 2021, clients: 245 },
      { year: 2022, clients: 270 },
      { year: 2023, clients: 295 },
      { year: 2024, clients: 310 },
      { year: 2025, clients: 325 },
    ],
    bookingUrl: "https://www.booking.com/hotel/de/stadtwohnung-in-siegen.de.html?aid=898224&app_hotel_id=15041507&checkin=2026-05-12&checkout=2026-05-14&from_sn=ios&group_adults=4&group_children=0&label=hotel_details-z8vV9Q%401776087521&no_rooms=2&req_adults=4&req_children=0&room1=A%2CA%2CA%2CA%2C",
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
    clientHistory: [
      { year: 2021, clients: 180 },
      { year: 2022, clients: 205 },
      { year: 2023, clients: 220 },
      { year: 2024, clients: 235 },
      { year: 2025, clients: 245 },
    ],
    bookingUrl: "https://www.airbnb.de/rooms/1635504442875976412?unique_share_id=cffa133a-f21a-4409-8dbe-a77717b1947c&viralityEntryPoint=1&s=76&source_impression_id=p3_1777023541_P34xcS0XDbXiJeuk",
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
    clientHistory: [
      { year: 2021, clients: 280 },
      { year: 2022, clients: 310 },
      { year: 2023, clients: 335 },
      { year: 2024, clients: 350 },
      { year: 2025, clients: 360 },
    ],
    bookingUrl: "https://www.booking.com/hotel/de/stadtwohnung-in-siegen-zentrum.de.html?aid=898224&app_hotel_id=15343910&checkin=2026-05-12&checkout=2026-05-14&from_sn=ios&group_adults=4&group_children=0&label=hotel_details-L3jkr5U%401776087505&no_rooms=2&req_adults=4&req_children=0&room1=A%2CA%2CA%2CA%2C",
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
    architect: "Prime Residenz",
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
    clientHistory: [
      { year: 2021, clients: 220 },
      { year: 2022, clients: 240 },
      { year: 2023, clients: 260 },
      { year: 2024, clients: 275 },
      { year: 2025, clients: 275 },
    ],
    bookingUrl: "https://www.booking.com/hotel/de/moderne-wohnung-in-siegen.de.html?aid=898224&app_hotel_id=15183944&checkin=2026-05-12&checkout=2026-05-14&from_sn=ios&group_adults=4&group_children=0&label=hotel_details-glkYr3I%401776087484&no_rooms=2&req_adults=4&req_children=0&room1=A%2CA%2CA%2CA%2C",
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
    architect: "Prime Residenz",
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
    clientHistory: [
      { year: 2021, clients: 180 },
      { year: 2022, clients: 200 },
      { year: 2023, clients: 215 },
      { year: 2024, clients: 225 },
      { year: 2025, clients: 225 },
    ],
    bookingUrl: "https://www.booking.com/hotel/de/moderne-wohnung-in-siegen.de.html?aid=898224&app_hotel_id=15183944&checkin=2026-05-12&checkout=2026-05-14&from_sn=ios&group_adults=4&group_children=0&label=hotel_details-glkYr3I%401776087484&no_rooms=2&req_adults=4&req_children=0&room1=A%2CA%2CA%2CA%2C",
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
    architect: "Prime Residenz",
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
    clientHistory: [
      { year: 2021, clients: 260 },
      { year: 2022, clients: 280 },
      { year: 2023, clients: 295 },
      { year: 2024, clients: 310 },
      { year: 2025, clients: 310 },
    ],
    bookingUrl: "https://www.booking.com/hotel/de/wohnung-in-ruhiger-lage-von-kreuztal-zentrum.de.html?aid=898224&app_hotel_id=15608751&checkin=2026-06-15&checkout=2026-06-18&from_sn=ios&group_adults=2&group_children=0&label=hotel_details-Y1eNPV%401776873296&no_rooms=2&req_adults=2&req_children=0&room1=A%2CA%2C",
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
    architect: "Prime Residenz",
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
    clientHistory: [
      { year: 2021, clients: 190 },
      { year: 2022, clients: 210 },
      { year: 2023, clients: 225 },
      { year: 2024, clients: 235 },
      { year: 2025, clients: 235 },
    ],
    bookingUrl: "https://www.booking.com/hotel/de/idyllisches-ferienhaus-in-kreuztal-zentrum.de.html?aid=898224&app_hotel_id=15628008&checkin=2026-06-15&checkout=2026-06-18&from_sn=ios&group_adults=2&group_children=0&label=hotel_details-Nmb6sX%401776873287&no_rooms=2&req_adults=2&req_children=0&room1=A%2CA%2C",
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
    architect: "Prime Residenz",
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
    clientHistory: [
      { year: 2021, clients: 280 },
      { year: 2022, clients: 300 },
      { year: 2023, clients: 320 },
      { year: 2024, clients: 335 },
      { year: 2025, clients: 340 },
    ],
    bookingUrl: "https://www.booking.com/hotel/de/waldlicht-apartments-in-siegen-kreuztal.de.html?aid=898224&app_hotel_id=15161302&checkin=2026-06-15&checkout=2026-06-18&from_sn=ios&group_adults=2&group_children=0&label=hotel_details-6Gf5BI%401776873303&no_rooms=2&req_adults=2&req_children=0&room1=A%2CA%2C",
  },
]

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id)
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured)
}
