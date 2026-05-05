"use client"

import Link from "next/link"

export function SiteFooter() {
  const contactLinks = [
    { label: "E-Mail", href: "mailto:primeresidenz@web.de" },
    { label: "+49 171 3739720", href: "tel:+491713739720" },
    { label: "+49 271 3356715", href: "tel:+492713356715" },
    { label: "WhatsApp", href: "https://wa.me/491713739720" },
  ]

  return (
    <footer className="border-t border-border bg-background px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        {/* Top: Large brand */}
        <div className="mb-16">
          <span className="font-serif text-7xl font-bold tracking-tight text-foreground md:text-9xl lg:text-[10rem]">
            Prime Residenz
          </span>
        </div>

        {/* Middle: Columns */}
        <div className="mb-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Kollektion
            </span>
            {["Stadtwohnungen", "Stadtzentrum", "Modernes Design", "Premium-Ausstattung", "Rundum-Service"].map(
              (item) => (
                <Link
                  key={item}
                  href="/collection"
                  className="font-sans text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  {item}
                </Link>
              )
            )}
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Dienstleistungen
            </span>
            {["Aufenthalt buchen", "Gruppenbuchungen", "Längere Aufenthalte", "Gästeservice", "Concierge", "Sonderwünsche"].map(
              (item) => (
                <Link
                  key={item}
                  href="/#contact"
                  className="font-sans text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  {item}
                </Link>
              )
            )}
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Standorte
            </span>
            {[
              "Siegen, Deutschland",
              "Kreuztal, Deutschland",
              "Wilnsdorf, Deutschland",
              "Premium-Unterkünfte",
              "Alle ansehen",
            ].map((item) => (
              <span key={item} className="font-sans text-sm text-foreground/70">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Kontakt
            </span>
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom: Legal */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-[10px] text-muted-foreground">
              &copy; 2026 Prime Residenz
            </span>
            <span className="h-3 w-px bg-border" />
            <Link href="/datenschutz" className="font-mono text-[10px] text-muted-foreground transition-colors hover:text-foreground">
              Datenschutz
            </Link>
            <span className="h-3 w-px bg-border" />
            <Link href="/bedingungen" className="font-mono text-[10px] text-muted-foreground transition-colors hover:text-foreground">
              Bedingungen
            </Link>
            <span className="h-3 w-px bg-border" />
            <Link href="/cookies" className="font-mono text-[10px] text-muted-foreground transition-colors hover:text-foreground">
              Cookies
            </Link>
            <span className="h-3 w-px bg-border" />
            <Link href="/impressum" className="font-mono text-[10px] text-muted-foreground transition-colors hover:text-foreground">
              Impressum
            </Link>
          </div>
          <span className="font-mono text-[10px] text-muted-foreground">
            Mit Präzision kuratiert. Mit Sinn gestaltet.
          </span>
        </div>
      </div>
    </footer>
  )
}
