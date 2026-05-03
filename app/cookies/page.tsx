import type { Metadata } from "next"

import { CookieSettingsButton } from "@/components/cookie-consent"
import { LegalPage, LegalSection } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Cookies | Prime Residenz",
  description:
    "Cookie-Hinweise und Einstellungen für Prime Residenz, einschließlich Google Analytics.",
}

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Cookie-Hinweise"
      title="Cookies"
      description="Hier erklären wir, welche Speichertechnologien diese Website nutzt und wie Sie Ihre Auswahl ändern können."
    >
      <LegalSection title="Cookie-Auswahl">
        <p>
          Sie können Ihre Einwilligung für Google Analytics jederzeit neu
          festlegen. Wenn Sie nur notwendige Funktionen wählen, wird Google
          Analytics nicht geladen.
        </p>
        <div className="pt-2">
          <CookieSettingsButton />
        </div>
      </LegalSection>

      <LegalSection title="Notwendige Speicherung">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border text-foreground">
                <th className="py-3 pr-4 font-mono text-[10px] uppercase tracking-[0.18em]">
                  Name
                </th>
                <th className="py-3 pr-4 font-mono text-[10px] uppercase tracking-[0.18em]">
                  Zweck
                </th>
                <th className="py-3 pr-4 font-mono text-[10px] uppercase tracking-[0.18em]">
                  Speicherdauer
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-4 pr-4 text-foreground">
                  prime-residenz-cookie-consent
                </td>
                <td className="py-4 pr-4">
                  Speichert lokal im Browser, ob Analytics akzeptiert oder
                  abgelehnt wurde.
                </td>
                <td className="py-4 pr-4">
                  Bis zur Löschung durch den Nutzer oder bis die Auswahl neu
                  gesetzt wird.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection title="Google Analytics">
        <p>
          Google Analytics wird nur nach Ihrer Einwilligung geladen. Dabei können
          die folgenden Cookies von Google Analytics gesetzt werden:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border text-foreground">
                <th className="py-3 pr-4 font-mono text-[10px] uppercase tracking-[0.18em]">
                  Cookie
                </th>
                <th className="py-3 pr-4 font-mono text-[10px] uppercase tracking-[0.18em]">
                  Zweck
                </th>
                <th className="py-3 pr-4 font-mono text-[10px] uppercase tracking-[0.18em]">
                  Standarddauer
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-4 pr-4 text-foreground">_ga</td>
                <td className="py-4 pr-4">
                  Unterscheidung einzelner Nutzer für statistische Auswertungen.
                </td>
                <td className="py-4 pr-4">2 Jahre</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-4 pr-4 text-foreground">
                  _ga_&lt;container-id&gt;
                </td>
                <td className="py-4 pr-4">
                  Speicherung des Sitzungsstatus für Google Analytics 4.
                </td>
                <td className="py-4 pr-4">2 Jahre</td>
              </tr>
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection title="Browser-Einstellungen">
        <p>
          Sie können Cookies außerdem über Ihren Browser löschen oder blockieren.
          Bei einer Blockierung können einzelne Funktionen der Website
          eingeschränkt sein. Bereits gesetzte Google-Analytics-Cookies können
          Sie über die Browser-Einstellungen entfernen.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
