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
    title: "City Apartment in Siegen Parkplatz WLAN Autobahn",
    subtitle: "Modern Urban Comfort with Seamless Access",
    location: "Siegen, Germany",
    price: "€285/night",
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
    bookingUrl: "https://www.booking.com/Share-z8voFe",
  },
  {
    id: "siegen-deutschland",
    title: "Gesamte Unterkunft Apartment in Siegen, Deutschland",
    subtitle: "Luxury Living in Heart of Siegen",
    location: "Siegen, Germany",
    price: "€325/night",
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
    bookingUrl: "https://www.booking.com/Share-LTdUiT5",
  },
  {
    id: "wilnsdorf-unterkunft",
    title: "Gesamte Unterkunft Apartment in Wilnsdorf, Deutschland",
    subtitle: "Charming Countryside Escape",
    location: "Wilnsdorf, Germany",
    price: "€245/night",
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
    bookingUrl: "https://www.booking.com/Share-Nmb6sX",
  },
  {
    id: "siegen-zentrum",
    title: "Stadtwohnung in Siegen-Zentrum Parkplatz Autobahn",
    subtitle: "Premium City Center Living",
    location: "Siegen City Center, Germany",
    price: "€360/night",
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
    bookingUrl: "https://www.booking.com/Share-Y1eNPV",
  },
  {
    id: "moderne-wohnung-siegen",
    title: "Moderne Wohnung in Siegen Parkplatz WLAN",
    subtitle: "Contemporary Comfort with Premium Amenities",
    location: "Siegen, Germany",
    price: "€275/night",
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
      "Discover modern comfort in this beautifully appointed Siegen apartment. Perfect for business travelers and leisure guests, this property features free WiFi, dedicated parking, and contemporary design throughout. Easy access to major highways and local amenities make this an ideal choice for exploring the region.",
    architect: "Priem Residenz",
    yearBuilt: 2018,
    features: [
      "Free WiFi",
      "Dedicated parking",
      "Modern kitchen",
      "Comfortable bedroom",
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
      { year: 2025, price: 275 },
    ],
    bookingUrl: "https://www.booking.com/Share-lNqi6YW",
  },
  {
    id: "charmante-wohnung-kreuztal",
    title: "Charmante Wohnung mit Terrasse in ruhiger Lage von Kreuztal-Zentrum",
    subtitle: "Peaceful Retreat with Garden Views",
    location: "Kreuztal, Germany",
    price: "€225/night",
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
      "Escape to this charming apartment nestled in the quiet center of Kreuztal. The spacious terrace overlooks peaceful surroundings, perfect for morning coffee or evening relaxation. Fully equipped with modern conveniences while maintaining a cozy, traditional atmosphere. Ideal for couples or small families seeking tranquility.",
    architect: "Priem Residenz",
    yearBuilt: 2016,
    features: [
      "Private terrace",
      "Garden view",
      "Fully equipped kitchen",
      "Cozy living room",
      "Free parking",
      "Quiet location",
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
    subtitle: "Spacious Holiday Home in Town Center",
    location: "Kreuztal, Germany",
    price: "€310/night",
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
      "This modern holiday home in central Kreuztal offers the perfect base for your stay. With three spacious bedrooms and contemporary amenities throughout, it accommodates families and groups comfortably. Quiet yet convenient location puts you within walking distance of local shops and restaurants.",
    architect: "Priem Residenz",
    yearBuilt: 2019,
    features: [
      "Three bedrooms",
      "Two bathrooms",
      "Full kitchen",
      "Dining area",
      "Washer/dryer",
      "Garden access",
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
    title: "City Wohnung mit Balkon in ruhiger Lage von Kreuztal-Zentrum",
    subtitle: "Urban Living with Scenic Balcony",
    location: "Kreuztal, Germany",
    price: "€235/night",
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
      "Enjoy city life from this attractive apartment featuring a lovely balcony. Located in the peaceful center of Kreuztal, this comfortable home combines modern design with traditional charm. The balcony provides the perfect space to unwind after exploring the local area.",
    architect: "Priem Residenz",
    yearBuilt: 2017,
    features: [
      "Spacious balcony",
      "Modern kitchen",
      "Comfortable bedrooms",
      "Bright living room",
      "Parking available",
      "City center location",
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
    subtitle: "Spacious Family Home with Multiple Amenities",
    location: "Siegen-Kreuztal, Germany",
    price: "€340/night",
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
      "This spacious family home accommodates groups and work crews perfectly. With four bedrooms and multiple bathrooms, there's ample space for everyone. Ideal for extended stays, offering a comfortable home-like environment with all modern conveniences. Great for families, friends, or professional teams.",
    architect: "Priem Residenz",
    yearBuilt: 2018,
    features: [
      "Four bedrooms",
      "Two bathrooms",
      "Full kitchen",
      "Large living area",
      "Laundry facilities",
      "Ample parking",
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
