import type { MetadataRoute } from "next"

import { cities, cityPath } from "@/lib/locations"
import { properties } from "@/lib/properties"
import { absoluteUrl, contentLastModified, defaultOgImage } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = contentLastModified

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl(defaultOgImage)],
    },
    {
      url: absoluteUrl("/collection"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ]

  const cityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: absoluteUrl(cityPath(city.slug)),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
    images: [absoluteUrl(city.image)],
  }))

  const propertyRoutes: MetadataRoute.Sitemap = properties.map((property) => ({
    url: absoluteUrl(`/collection/${property.id}`),
    lastModified,
    changeFrequency: "weekly",
    priority: property.featured ? 0.85 : 0.75,
    images: Array.from(new Set([property.image, ...(property.images || [])])).map((image) =>
      absoluteUrl(image)
    ),
  }))

  const legalRoutes: MetadataRoute.Sitemap = ["/impressum", "/datenschutz", "/bedingungen", "/cookies"].map(
    (path) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    })
  )

  return [...staticRoutes, ...cityRoutes, ...propertyRoutes, ...legalRoutes]
}
