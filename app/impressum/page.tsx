import type { Metadata } from "next"

import { LegalPage, LegalSection } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Impressum | Prime Residenz",
  description:
    "Impressum und Anbieterkennzeichnung von Prime Residenz.",
}

export default function ImpressumPage() {
  return (
    <LegalPage
      eyebrow="Anbieterkennzeichnung"
      title="Impressum"
      description="Informationen zum Diensteanbieter, Kontaktmöglichkeiten und Hinweise zur Verantwortlichkeit für dieses Online-Angebot."
    >
      <LegalSection title="Angaben gemäß § 5 DDG">
        <p>
          Prime Residenz
          <br />
          Hochstr. 36
          <br />
          57076 Siegen
          <br />
          Deutschland
        </p>
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>
          E-Mail:{" "}
          <a
            href="mailto:primeresidenz@web.de"
            className="text-foreground underline underline-offset-4"
          >
            primeresidenz@web.de
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Verantwortlich für Inhalte">
        <p>
          Verantwortlich für die Inhalte dieser Website ist Prime Residenz unter
          der oben genannten Anschrift.
        </p>
      </LegalSection>

      <LegalSection title="Verbraucherstreitbeilegung">
        <p>
          Wir sind nicht verpflichtet und nicht bereit, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Inhalte">
        <p>
          Wir erstellen die Inhalte dieser Website mit Sorgfalt. Für die
          Richtigkeit, Vollständigkeit und Aktualität übernehmen wir jedoch keine
          Gewähr. Gesetzliche Verpflichtungen zur Entfernung oder Sperrung von
          Informationen bleiben unberührt.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Links">
        <p>
          Diese Website kann Links zu externen Websites enthalten. Für deren
          Inhalte sind ausschließlich die jeweiligen Betreiber verantwortlich.
          Bei Bekanntwerden rechtswidriger Inhalte entfernen wir entsprechende
          Links.
        </p>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <p>
          Die auf dieser Website veröffentlichten Inhalte, Bilder und
          Gestaltungen unterliegen dem deutschen Urheberrecht. Jede Nutzung
          außerhalb der gesetzlichen Grenzen bedarf der vorherigen Zustimmung des
          jeweiligen Rechteinhabers.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
