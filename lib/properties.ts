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
    id: "villa-aurora",
    title: "Villa Aurora",
    subtitle: "Where Light Meets the Sea",
    location: "Amalfi Coast, Italy",
    price: "$14,500,000",
    priceValue: 14500000,
    image: "/images/property-1.jpg",
    beds: 6,
    baths: 8,
    sqft: "12,400",
    type: "oceanfront",
    featured: true,
    description:
      "Perched above the shimmering Tyrrhenian Sea, Villa Aurora captures the essence of Mediterranean luxury. Every room opens to panoramic ocean vistas, while hand-laid mosaic floors and Carrara marble surfaces echo centuries of Italian artisanship.",
    architect: "Studio Fuksas",
    yearBuilt: 2021,
    features: [
      "Infinity pool",
      "Private beach access",
      "Wine cellar",
      "Home cinema",
      "Helipad",
      "Staff quarters",
    ],
    coordinates: { lat: 40.6333, lng: 14.6029 },
    neighborhood: { walkScore: 62, transitScore: 45, schools: 4, restaurants: 28 },
    priceHistory: [
      { year: 2021, price: 11200000 },
      { year: 2022, price: 12100000 },
      { year: 2023, price: 13000000 },
      { year: 2024, price: 13800000 },
      { year: 2025, price: 14500000 },
    ],
  },
  {
    id: "chateau-lumiere",
    title: "Chateau Lumiere",
    subtitle: "A Legacy in Stone",
    location: "Loire Valley, France",
    price: "$22,000,000",
    priceValue: 22000000,
    image: "/images/property-2.jpg",
    beds: 12,
    baths: 14,
    sqft: "28,600",
    type: "country",
    featured: true,
    description:
      "Set within 40 hectares of manicured parkland, Chateau Lumiere is a masterwork of 18th-century French architecture, meticulously restored with contemporary comforts while preserving its storied grandeur.",
    architect: "Jean-Michel Wilmotte",
    yearBuilt: 1764,
    features: [
      "40-hectare estate",
      "Chapel",
      "Orangery",
      "Equestrian facilities",
      "Guest cottages",
      "Formal gardens",
    ],
    coordinates: { lat: 47.3222, lng: 0.6848 },
    neighborhood: { walkScore: 30, transitScore: 15, schools: 2, restaurants: 8 },
    priceHistory: [
      { year: 2021, price: 18500000 },
      { year: 2022, price: 19200000 },
      { year: 2023, price: 20100000 },
      { year: 2024, price: 21200000 },
      { year: 2025, price: 22000000 },
    ],
  },
  {
    id: "skyline-residence",
    title: "The Skyline Residence",
    subtitle: "Above the Urban Canopy",
    location: "Manhattan, New York",
    price: "$38,500,000",
    priceValue: 38500000,
    image: "/images/property-3.jpg",
    beds: 5,
    baths: 7,
    sqft: "8,200",
    type: "urban",
    featured: true,
    description:
      "Commanding the 82nd floor of one of Manhattan's most iconic towers, this residence offers unobstructed views from the Statue of Liberty to Central Park. A masterclass in vertical luxury.",
    architect: "Foster + Partners",
    yearBuilt: 2023,
    features: [
      "360-degree views",
      "Private elevator",
      "Smart home system",
      "Climate-controlled wine room",
      "Gallery walls",
      "Terrace garden",
    ],
    coordinates: { lat: 40.7614, lng: -73.9776 },
    neighborhood: { walkScore: 98, transitScore: 100, schools: 12, restaurants: 200 },
    priceHistory: [
      { year: 2021, price: 32000000 },
      { year: 2022, price: 34200000 },
      { year: 2023, price: 35800000 },
      { year: 2024, price: 37100000 },
      { year: 2025, price: 38500000 },
    ],
  },
  {
    id: "alpine-retreat",
    title: "Alpine Retreat",
    subtitle: "Sanctuary Among Peaks",
    location: "Zermatt, Switzerland",
    price: "$19,200,000",
    priceValue: 19200000,
    image: "/images/property-4.jpg",
    beds: 7,
    baths: 9,
    sqft: "14,800",
    type: "mountain",
    description:
      "Nestled at the foot of the Matterhorn, this contemporary alpine chalet blends rugged natural materials with sophisticated design. Floor-to-ceiling windows frame the most dramatic mountain scenery on Earth.",
    architect: "Peter Zumthor Atelier",
    yearBuilt: 2020,
    features: [
      "Matterhorn views",
      "Indoor spa",
      "Ski-in/ski-out",
      "Home gym",
      "Fireplace lounge",
      "Boot room",
    ],
    coordinates: { lat: 46.0207, lng: 7.7491 },
    neighborhood: { walkScore: 72, transitScore: 55, schools: 3, restaurants: 42 },
    priceHistory: [
      { year: 2021, price: 16000000 },
      { year: 2022, price: 17100000 },
      { year: 2023, price: 17800000 },
      { year: 2024, price: 18500000 },
      { year: 2025, price: 19200000 },
    ],
  },
  {
    id: "villa-serene",
    title: "Villa Serene",
    subtitle: "Tropical Tranquility Refined",
    location: "Ubud, Bali",
    price: "$6,800,000",
    priceValue: 6800000,
    image: "/images/property-5.jpg",
    beds: 5,
    baths: 6,
    sqft: "9,600",
    type: "tropical",
    description:
      "An architectural poem written in teak and stone, Villa Serene dissolves the boundary between indoor and outdoor living. Overlooking cascading rice terraces, this estate is a meditation on tropical luxury.",
    architect: "Ibuku Studio",
    yearBuilt: 2022,
    features: [
      "Rice terrace views",
      "Open-air pavilions",
      "Natural spring pool",
      "Yoga platform",
      "Organic garden",
      "Art studio",
    ],
    coordinates: { lat: -8.5069, lng: 115.2625 },
    neighborhood: { walkScore: 45, transitScore: 20, schools: 5, restaurants: 35 },
    priceHistory: [
      { year: 2021, price: 5200000 },
      { year: 2022, price: 5600000 },
      { year: 2023, price: 6000000 },
      { year: 2024, price: 6400000 },
      { year: 2025, price: 6800000 },
    ],
  },
  {
    id: "kensington-house",
    title: "Kensington House",
    subtitle: "Georgian Grandeur Reimagined",
    location: "London, United Kingdom",
    price: "$28,900,000",
    priceValue: 28900000,
    image: "/images/property-6.jpg",
    beds: 8,
    baths: 10,
    sqft: "11,200",
    type: "historic",
    description:
      "Behind the elegant Georgian facade of this Grade II listed townhouse lies a strikingly modern interior by leading London architects. Five floors of curated luxury in one of the world's most prestigious addresses.",
    architect: "David Chipperfield Architects",
    yearBuilt: 1842,
    features: [
      "Listed building",
      "Private garden",
      "Underground garage",
      "Library",
      "Roof terrace",
      "Gymnasium",
    ],
    coordinates: { lat: 51.5014, lng: -0.1925 },
    neighborhood: { walkScore: 95, transitScore: 92, schools: 15, restaurants: 120 },
    priceHistory: [
      { year: 2021, price: 24000000 },
      { year: 2022, price: 25500000 },
      { year: 2023, price: 26800000 },
      { year: 2024, price: 27900000 },
      { year: 2025, price: 28900000 },
    ],
  },
]

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id)
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured)
}
