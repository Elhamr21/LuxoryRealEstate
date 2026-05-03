import React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans, Playfair_Display, Space_Mono } from "next/font/google"

import { CookieConsent } from "@/components/cookie-consent"

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
  title: "Prime Residenz | Premium-Mietobjekte",
  description:
    "Entdecken Sie außergewöhnliche Mietwohnungen und Unterkünfte in Siegen, Kreuztal und Wilnsdorf. Buchen Sie Ihren perfekten Aufenthalt mit Prime Residenz.",
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
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
