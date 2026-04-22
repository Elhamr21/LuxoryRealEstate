export interface Property {
  id: string
  title: string
  subtitle: string
  location: string
  price: string
  priceValue: number
  image: string
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
}

export const properties: Property[] = [
  {
    id: "siegen-parkplatz-wlan",
    title: "City Apartment in Siegen Parkplatz WLAN Autobahn",
    subtitle: "Modern Urban Comfort with Seamless Access",
    location: "Siegen, Germany",
    price: "€285/night",
    priceValue: 285,
    image: "/images/AirBNB/City Apartment in Siegen Parkplatz WLAN Autobahn/City Apartment in Siegen Parkplatz WLAN Autobahn1.jpg",
    beds: 2,
    baths: 1,
    sqft: "850",
    type: "urban",
    featured: true,
    description:
      "This contemporary urban apartment combines modern amenities with convenient freeway access. Perfect for business travelers and leisure guests, featuring premium WiFi throughout and dedicated parking. The open-plan living area showcases contemporary design with thoughtful details.",
    architect: "Modern Design Studio",
    yearBuilt: 2018,
    features: [
      "Free WiFi",
      "Dedicated parking",
      "Modern kitchen",
      "Flat-screen TV",
      "Climate control",
      "Work desk",
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
  },
  {
    id: "siegen-deutschland",
    title: "Gesamte Unterkunft Apartment in Siegen, Deutschland",
    subtitle: "Luxury Living in Heart of Siegen",
    location: "Siegen, Germany",
    price: "€325/night",
    priceValue: 325,
    image: "/images/AirBNB/Gesamte Unterkunft Apartment in Siegen, Deutschland/Gesamte Unterkunft Apartment in Siegen, Deutschland1.avif",
    beds: 3,
    baths: 2,
    sqft: "1,200",
    type: "urban",
    featured: true,
    description:
      "Experience refined living in this spacious luxury apartment located in the vibrant heart of Siegen. Impeccably designed with high-end furnishings and modern conveniences, this entire apartment offers the perfect retreat for families or groups seeking authentic German hospitality with premium amenities.",
    architect: "Contemporary Design Co.",
    yearBuilt: 2019,
    features: [
      "Full kitchen",
      "Dining area",
      "Washer/dryer",
      "Smart TV",
      "High-speed WiFi",
      "Central heating",
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
  },
  {
    id: "wilnsdorf-unterkunft",
    title: "Gesamte Unterkunft Apartment in Wilnsdorf, Deutschland",
    subtitle: "Charming Countryside Escape",
    location: "Wilnsdorf, Germany",
    price: "€245/night",
    priceValue: 245,
    image: "/images/AirBNB/Gesamte Unterkunft Apartment in Wilnsdorf, Deutschland/Gesamte Unterkunft Apartment in Wilnsdorf, Deutschland1.jpg",
    beds: 2,
    baths: 1,
    sqft: "950",
    type: "country",
    description:
      "Nestled in the picturesque Wilnsdorf countryside, this charming apartment offers a peaceful retreat surrounded by natural beauty. Blending rustic elements with modern comfort, it's an ideal base for exploring the region's rolling landscapes and welcoming communities.",
    architect: "Rural Design Specialists",
    yearBuilt: 2017,
    features: [
      "Country views",
      "Garden access",
      "Modern amenities",
      "Cozy fireplace",
      "Parking included",
      "Peaceful setting",
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
  },
  {
    id: "siegen-zentrum",
    title: "Stadtwohnung in Siegen-Zentrum Parkplatz Autobahn",
    subtitle: "Premium City Center Living",
    location: "Siegen City Center, Germany",
    price: "€360/night",
    priceValue: 360,
    image: "/images/AirBNB/Stadtwohnung in Siegen-Zentrum Parkplatz Autobahn/Stadtwohnung in Siegen-Zentrum Parkplatz Autobahn1.jpg",
    beds: 3,
    baths: 2,
    sqft: "1,350",
    type: "urban",
    featured: true,
    description:
      "This prestigious city center apartment puts you in the heart of Siegen's vibrant culture. With direct highway access and premium amenities, it's the ultimate urban luxury experience. High ceilings, natural light, and designer finishes create an exceptional environment for the discerning traveler.",
    architect: "Urban Luxury Designs",
    yearBuilt: 2020,
    features: [
      "Central location",
      "Premium furnishings",
      "Full kitchen suite",
      "Entertainment system",
      "Concierge service",
      "Underground parking",
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
  },
]

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id)
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured)
}
