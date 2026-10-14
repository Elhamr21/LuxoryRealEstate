import { homeFaqs } from "@/lib/faq"
import { cities, cityPath, getPropertiesByCity } from "@/lib/locations"
import { absoluteUrl, siteDescription, siteName } from "@/lib/seo"

export const dynamic = "force-static"

// llms.txt (https://llmstxt.org): a plain-text summary for AI assistants and answer engines.
export function GET() {
  const citySections = cities
    .map((city) => {
      const listings = getPropertiesByCity(city.slug)
        .map(
          (property) =>
            `- [${property.title}](${absoluteUrl(`/collection/${property.id}`)}): ${property.beds} Schlafzimmer, ${property.baths} Bad, ${property.features.join(", ")}`
        )
        .join("\n")

      return `## ${city.name}\n\n[${city.headline}](${absoluteUrl(cityPath(city.slug))}): ${city.intro}\n\n${listings}`
    })
    .join("\n\n")

  const faqs = homeFaqs()
    .map((faq) => `### ${faq.question}\n\n${faq.answer}`)
    .join("\n\n")

  const body = `# ${siteName}

> ${siteDescription}

${siteName} vermietet möblierte Ferienwohnungen, Apartments und Ferienhäuser im Siegerland (Nordrhein-Westfalen, Deutschland). Buchung über Booking.com, Airbnb oder direkt per E-Mail, Telefon oder WhatsApp.

- Adresse: Hochstr. 36, 57076 Siegen, Deutschland
- E-Mail: primeresidenz@web.de
- Telefon: +49 171 3739720, +49 271 3356715
- Alle Unterkünfte: ${absoluteUrl("/collection")}

${citySections}

## Häufige Fragen

${faqs}

## Rechtliches

- [Impressum](${absoluteUrl("/impressum")})
- [Datenschutz](${absoluteUrl("/datenschutz")})
`

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
