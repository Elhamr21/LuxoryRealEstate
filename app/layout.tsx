import React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans, Playfair_Display, Space_Mono } from "next/font/google"

import { CookieConsent } from "@/components/cookie-consent"
import {
  absoluteUrl,
  defaultOgImage,
  serializeJsonLd,
  siteDescription,
  siteName,
  siteStructuredData,
  siteUrl,
} from "@/lib/seo"

import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Prime Residenz | Premium-Unterkünfte in Siegen, Kreuztal und Wilnsdorf",
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Prime Residenz",
    "Ferienwohnung Siegen",
    "Apartment Siegen",
    "Unterkunft Kreuztal",
    "Ferienhaus Kreuztal",
    "Unterkunft Wilnsdorf",
    "Kurzzeitvermietung Siegen",
    "Monteurwohnung Siegen",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName,
    url: absoluteUrl("/"),
    title: "Prime Residenz | Premium-Unterkünfte in Siegen, Kreuztal und Wilnsdorf",
    description: siteDescription,
    images: [
      {
        url: absoluteUrl(defaultOgImage),
        alt: "Premium-Unterkunft von Prime Residenz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Residenz | Premium-Unterkünfte",
    description: siteDescription,
    images: [absoluteUrl(defaultOgImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "travel",
}

export const viewport: Viewport = {
  themeColor: "#FAF9F7",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${dmSans.variable} ${playfair.variable} ${spaceMono.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(siteStructuredData()) }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
