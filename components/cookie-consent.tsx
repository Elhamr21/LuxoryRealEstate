"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Script from "next/script"

const CONSENT_KEY = "prime-residenz-cookie-consent"
const CONSENT_RESET_EVENT = "prime-residenz:reset-cookie-consent"
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

type ConsentChoice = "accepted" | "rejected"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function readConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY)
    return value === "accepted" || value === "rejected" ? value : null
  } catch {
    return null
  }
}

function writeConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice)
  } catch {
    // Ignore storage failures; the current in-memory choice still applies.
  }
}

function setGoogleAnalyticsDisabled(disabled: boolean) {
  if (!GA_MEASUREMENT_ID) {
    return
  }

  ;(window as unknown as Record<string, unknown>)[
    `ga-disable-${GA_MEASUREMENT_ID}`
  ] = disabled
}

function expireCookie(name: string, domain?: string) {
  document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax${
    domain ? `; domain=${domain}` : ""
  }`
}

function deleteAnalyticsCookies() {
  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"))

  const hostname = window.location.hostname
  const hostnameParts = hostname.split(".")
  const domains = new Set<string | undefined>([
    undefined,
    hostname,
    `.${hostname}`,
  ])

  if (hostnameParts.length > 2) {
    domains.add(`.${hostnameParts.slice(-2).join(".")}`)
  }

  cookieNames.forEach((name) => {
    domains.forEach((domain) => expireCookie(name, domain))
  })
}

export function CookieConsent() {
  const pathname = usePathname()
  const [isReady, setIsReady] = useState(false)
  const [consent, setConsent] = useState<ConsentChoice | null>(null)
  const [analyticsReady, setAnalyticsReady] = useState(false)

  useEffect(() => {
    setConsent(readConsent())
    setIsReady(true)

    const resetConsent = () => {
      try {
        window.localStorage.removeItem(CONSENT_KEY)
      } catch {
        // Ignore storage failures; showing the banner is enough.
      }
      setConsent(null)
      setIsReady(true)
    }

    window.addEventListener(CONSENT_RESET_EVENT, resetConsent)
    return () => window.removeEventListener(CONSENT_RESET_EVENT, resetConsent)
  }, [])

  useEffect(() => {
    if (
      consent !== "accepted" ||
      !analyticsReady ||
      !GA_MEASUREMENT_ID ||
      !window.gtag
    ) {
      return
    }

    window.gtag("event", "page_view", {
      page_path: `${pathname}${window.location.search}`,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [analyticsReady, consent, pathname])

  const chooseConsent = (choice: ConsentChoice) => {
    writeConsent(choice)
    setGoogleAnalyticsDisabled(choice === "rejected")

    if (choice === "rejected") {
      window.gtag?.("consent", "update", { analytics_storage: "denied" })
      deleteAnalyticsCookies()
    }

    setConsent(choice)
  }

  const shouldLoadAnalytics = consent === "accepted" && Boolean(GA_MEASUREMENT_ID)

  return (
    <>
      {shouldLoadAnalytics ? (
        <>
          <Script id="prime-residenz-ga" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                anonymize_ip: true,
                send_page_view: false
              });
            `}
          </Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
            onLoad={() => setAnalyticsReady(true)}
          />
        </>
      ) : null}

      {isReady && consent === null ? (
        <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background/95 px-6 py-5 shadow-[0_-18px_60px_rgba(24,34,42,0.16)] backdrop-blur-md lg:px-10">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                Cookie-Einstellungen
              </p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-foreground/80">
                Wir nutzen notwendige Speicherfunktionen für diese Auswahl. Google
                Analytics verwenden wir nur mit Ihrer Einwilligung, um die Nutzung
                der Website zu messen und unser Angebot zu verbessern.
              </p>
              <Link
                href="/cookies"
                className="mt-3 inline-flex font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Details ansehen
              </Link>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => chooseConsent("rejected")}
                className="rounded-sm border border-border px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-muted"
              >
                Nur notwendig
              </button>
              <button
                type="button"
                onClick={() => chooseConsent("accepted")}
                className="rounded-sm bg-primary px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Analytics akzeptieren
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export function CookieSettingsButton() {
  const reopenSettings = () => {
    try {
      window.localStorage.removeItem(CONSENT_KEY)
    } catch {
      // Ignore storage failures; the banner can still be reopened.
    }
    window.dispatchEvent(new Event(CONSENT_RESET_EVENT))
  }

  return (
    <button
      type="button"
      onClick={reopenSettings}
      className="rounded-sm bg-primary px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
    >
      Cookie-Auswahl öffnen
    </button>
  )
}
