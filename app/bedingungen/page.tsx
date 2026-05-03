import type { Metadata } from "next"

import { LegalList, LegalPage, LegalSection } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Bedingungen | Prime Residenz",
  description:
    "Bedingungen für die Nutzung der Prime Residenz Website und für Kontakt- und Buchungsanfragen.",
}

export default function BedingungenPage() {
  return (
    <LegalPage
      eyebrow="Nutzungsbedingungen"
      title="Bedingungen"
      description="Diese Bedingungen regeln die Nutzung dieser Website und die Abwicklung von Anfragen über Prime Residenz."
    >
      <LegalSection title="Geltungsbereich">
        <p>
          Diese Bedingungen gelten für die Nutzung der Website von Prime
          Residenz sowie für Kontakt- und Buchungsanfragen, die über diese
          Website, per E-Mail oder telefonisch gestellt werden. Für konkrete
          Buchungen können zusätzliche individuelle Vereinbarungen oder die
          Bedingungen externer Buchungsplattformen gelten.
        </p>
      </LegalSection>

      <LegalSection title="Informationen auf der Website">
        <p>
          Angaben zu Unterkünften, Ausstattung, Verfügbarkeit, Preisen und
          Leistungen dienen der Information. Sie stellen kein rechtlich bindendes
          Angebot dar. Maßgeblich sind die Angaben, die im Rahmen einer konkreten
          Buchungsbestätigung oder über die jeweilige Buchungsplattform
          bestätigt werden.
        </p>
      </LegalSection>

      <LegalSection title="Anfragen und Buchungen">
        <p>
          Eine Anfrage über die Website ist unverbindlich. Ein Vertrag kommt erst
          zustande, wenn die Buchung ausdrücklich bestätigt wird und alle
          wesentlichen Bedingungen, insbesondere Zeitraum, Unterkunft, Preis,
          Zahlungsweise und Stornierungsregelung, vereinbart sind.
        </p>
      </LegalSection>

      <LegalSection title="Pflichten der Gäste">
        <p>
          Gäste verpflichten sich, die gebuchte Unterkunft sorgfältig zu
          behandeln, Hausregeln einzuhalten und Schäden, Mängel oder besondere
          Vorkommnisse unverzüglich mitzuteilen. Die Unterkunft darf nur von den
          vereinbarten Personen und zu den vereinbarten Zwecken genutzt werden.
        </p>
      </LegalSection>

      <LegalSection title="Preise, Zahlung und Stornierung">
        <p>
          Preise, Zahlungsfristen, Kautionen und Stornierungsbedingungen werden
          für jede Buchung individuell oder über die jeweilige Buchungsplattform
          festgelegt. Soweit dort keine Regelung besteht, gelten die im
          Einzelfall schriftlich bestätigten Bedingungen.
        </p>
      </LegalSection>

      <LegalSection title="Verfügbarkeit und Änderungen">
        <p>
          Verfügbarkeiten können sich ändern. Prime Residenz ist berechtigt,
          Inhalte dieser Website, Unterkunftsbeschreibungen und Leistungen zu
          aktualisieren, sofern bereits bestätigte Buchungen dadurch nicht
          unzulässig beeinträchtigt werden.
        </p>
      </LegalSection>

      <LegalSection title="Urheber- und Nutzungsrechte">
        <p>
          Texte, Bilder, Layouts und sonstige Inhalte dieser Website dürfen ohne
          vorherige Zustimmung nicht vervielfältigt, veröffentlicht oder
          kommerziell genutzt werden, soweit keine gesetzliche Erlaubnis besteht.
        </p>
      </LegalSection>

      <LegalSection title="Haftung">
        <p>
          Für Schäden haften wir nach den gesetzlichen Vorschriften bei Vorsatz,
          grober Fahrlässigkeit, Verletzung von Leben, Körper oder Gesundheit
          sowie bei zwingender gesetzlicher Haftung. Im Übrigen ist die Haftung
          auf vertragstypische, vorhersehbare Schäden beschränkt, soweit eine
          wesentliche Vertragspflicht verletzt wurde.
        </p>
      </LegalSection>

      <LegalSection title="Unzulässige Nutzung">
        <p>Untersagt sind insbesondere:</p>
        <LegalList
          items={[
            "technische Angriffe oder Störungen der Website",
            "missbräuchliche oder automatisierte Kontaktanfragen",
            "die Übermittlung rechtswidriger, irreführender oder fremder Inhalte",
            "die Nutzung von Website-Inhalten ohne erforderliche Rechte",
          ]}
        />
      </LegalSection>

      <LegalSection title="Anwendbares Recht">
        <p>
          Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts, soweit
          keine zwingenden Verbraucherschutzvorschriften entgegenstehen.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
