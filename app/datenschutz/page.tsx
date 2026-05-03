import type { Metadata } from "next"

import { LegalList, LegalPage, LegalSection } from "@/components/legal-page"
import { absoluteUrl } from "@/lib/seo"

const description =
  "Datenschutzerklärung von Prime Residenz mit Informationen zu Kontaktanfragen, Cookies und Google Analytics."

export const metadata: Metadata = {
  title: "Datenschutz",
  description,
  alternates: {
    canonical: absoluteUrl("/datenschutz"),
  },
  openGraph: {
    title: "Datenschutz | Prime Residenz",
    description,
    url: absoluteUrl("/datenschutz"),
  },
  twitter: {
    card: "summary",
    title: "Datenschutz | Prime Residenz",
    description,
  },
}

export default function DatenschutzPage() {
  return (
    <LegalPage
      eyebrow="Datenschutzerklärung"
      title="Datenschutz"
      description="Hier informieren wir darüber, welche personenbezogenen Daten beim Besuch dieser Website und bei Kontaktanfragen verarbeitet werden."
    >
      <LegalSection title="Verantwortlicher">
        <p>
          Prime Residenz
          <br />
          Hochstr. 36
          <br />
          57076 Siegen
          <br />
          Deutschland
        </p>
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

      <LegalSection title="Allgemeine Hinweise">
        <p>
          Personenbezogene Daten sind alle Informationen, mit denen Sie
          persönlich identifiziert werden können. Wir verarbeiten Daten nur,
          soweit dies zur Bereitstellung dieser Website, zur Bearbeitung Ihrer
          Anfrage, zur Durchführung vorvertraglicher oder vertraglicher
          Maßnahmen, zur Erfüllung rechtlicher Pflichten oder aufgrund Ihrer
          Einwilligung erforderlich ist.
        </p>
      </LegalSection>

      <LegalSection title="Serverdaten und Websitebereitstellung">
        <p>
          Beim Aufruf der Website können technisch notwendige Daten verarbeitet
          werden, etwa IP-Adresse, Datum und Uhrzeit des Aufrufs, aufgerufene
          Seite, Referrer-URL, Browser, Betriebssystem und übertragene
          Datenmenge. Diese Verarbeitung dient der stabilen und sicheren
          Bereitstellung der Website.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes
          Interesse liegt im sicheren Betrieb und in der Fehleranalyse dieser
          Website.
        </p>
      </LegalSection>

      <LegalSection title="Kontaktanfragen">
        <p>
          Wenn Sie uns per E-Mail, Telefon oder Kontaktformular kontaktieren,
          verarbeiten wir die von Ihnen übermittelten Angaben, insbesondere Name,
          E-Mail-Adresse, Telefonnummer, Interesse und Nachrichtentext. Diese
          Daten nutzen wir zur Bearbeitung Ihrer Anfrage und zur Kommunikation
          mit Ihnen.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage auf
          eine Buchung oder vertragliche Abstimmung gerichtet ist. In anderen
          Fällen ist Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO mit unserem
          berechtigten Interesse an der Bearbeitung eingehender Anfragen.
        </p>
      </LegalSection>

      <LegalSection title="Google Analytics">
        <p>
          Diese Website verwendet Google Analytics 4, einen Webanalysedienst von
          Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland,
          nur wenn Sie zuvor in die Nutzung von Analytics eingewilligt haben.
          Ohne Einwilligung wird der Analytics-Code nicht geladen.
        </p>
        <p>
          Google Analytics kann Informationen über die Nutzung dieser Website
          verarbeiten, zum Beispiel Seitenaufrufe, Interaktionen, technische
          Geräte- und Browserinformationen, ungefährer Standort, Referrer und
          zufallsbasierte Kennungen. Google Analytics setzt hierfür eigene
          Cookies wie <span className="text-foreground">_ga</span> und{" "}
          <span className="text-foreground">_ga_&lt;container-id&gt;</span>.
        </p>
        <p>
          Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO
          und § 25 Abs. 1 TDDDG. Sie können Ihre Einwilligung jederzeit über die
          Cookie-Einstellungen widerrufen. Eine Verarbeitung durch Google kann
          auch außerhalb der EU/des EWR stattfinden; Google verweist hierfür auf
          Angemessenheitsbeschlüsse, das EU-U.S. Data Privacy Framework und
          Standardvertragsklauseln. Weitere Informationen finden Sie in den{" "}
          <a
            href="https://support.google.com/analytics/answer/6004245?hl=de"
            className="text-foreground underline underline-offset-4"
            rel="noreferrer"
            target="_blank"
          >
            Google Analytics Datenschutzhinweisen
          </a>{" "}
          und in der{" "}
          <a
            href="https://policies.google.com/privacy?hl=de"
            className="text-foreground underline underline-offset-4"
            rel="noreferrer"
            target="_blank"
          >
            Datenschutzerklärung von Google
          </a>{" "}
          sowie in Googles Hinweisen zu{" "}
          <a
            href="https://policies.google.com/privacy/frameworks?hl=de"
            className="text-foreground underline underline-offset-4"
            rel="noreferrer"
            target="_blank"
          >
            Datenübermittlungen
          </a>
          .
        </p>
        <p>
          Zusätzlich können Sie das{" "}
          <a
            href="https://support.google.com/analytics/answer/181881?hl=de"
            className="text-foreground underline underline-offset-4"
            rel="noreferrer"
            target="_blank"
          >
            Browser-Add-on zur Deaktivierung von Google Analytics
          </a>{" "}
          verwenden.
        </p>
      </LegalSection>

      <LegalSection title="Cookies und lokale Speicherung">
        <p>
          Wir speichern Ihre Cookie-Auswahl lokal in Ihrem Browser, damit die
          Website Ihre Entscheidung berücksichtigen kann. Analytics-Cookies
          werden nur gesetzt, wenn Sie Analytics akzeptieren.
        </p>
        <p>
          Details zu Art, Zweck und Speicherdauer finden Sie auf unserer
          Cookie-Seite.
        </p>
      </LegalSection>

      <LegalSection title="Empfänger und Dienstleister">
        <p>
          Daten können an technische Dienstleister weitergegeben werden, die uns
          beim Betrieb der Website, bei Hosting, E-Mail-Versand, Formulartechnik
          oder Analyse unterstützen. Dienstleister werden nur eingesetzt, soweit
          dies für die genannten Zwecke erforderlich ist und geeignete
          datenschutzrechtliche Vereinbarungen bestehen.
        </p>
      </LegalSection>

      <LegalSection title="Speicherdauer">
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie dies für die
          jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen
          bestehen. Kontaktanfragen löschen wir, sobald die Bearbeitung
          abgeschlossen ist und keine gesetzlichen oder vertraglichen Gründe für
          eine weitere Speicherung bestehen.
        </p>
      </LegalSection>

      <LegalSection title="Ihre Rechte">
        <p>
          Sie haben nach Maßgabe der DSGVO insbesondere folgende Rechte:
        </p>
        <LegalList
          items={[
            "Auskunft über die verarbeiteten personenbezogenen Daten",
            "Berichtigung unrichtiger oder unvollständiger Daten",
            "Löschung oder Einschränkung der Verarbeitung",
            "Datenübertragbarkeit",
            "Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen",
            "Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft",
          ]}
        />
      </LegalSection>

      <LegalSection title="Beschwerderecht">
        <p>
          Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
          beschweren. Für Nordrhein-Westfalen ist die Landesbeauftragte für
          Datenschutz und Informationsfreiheit Nordrhein-Westfalen zuständig:{" "}
          <a
            href="https://www.ldi.nrw.de/kontakt"
            className="text-foreground underline underline-offset-4"
            rel="noreferrer"
            target="_blank"
          >
            www.ldi.nrw.de/kontakt
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  )
}
