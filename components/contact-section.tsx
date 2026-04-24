"use client"

import React from "react"

import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal(0.1)
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-primary px-6 py-24 lg:px-10">
      <div ref={ref} className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left - Info */}
          <div className={`flex flex-col justify-center ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50">
              ( Kontakt )
            </p>
            <h2 className="mb-8 font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
              Planen Sie
              <br />
              Ihren Aufenthalt
            </h2>
            <p className="mb-10 max-w-md font-sans text-base leading-relaxed text-primary-foreground/70">
              Ob Sie einen Wochenendausflug, einen längeren Aufenthalt oder
              einen luxuriösen Rückzugsort suchen, unser Concierge-Team hilft
              Ihnen gern dabei, das perfekte Apartment-Erlebnis zu buchen.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { label: "Email", detail: "primeresidenz@web.de" },
                { label: "Telefon", detail: "01713739720" },
                { label: "Telefon", detail: "+49 271 3356715" },
              ].map((office) => (
                <div key={office.label + office.detail} className="flex items-center gap-4">
                  <span className="w-20 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/40">
                    {office.label}
                  </span>
                  <span className="font-sans text-sm text-primary-foreground/80">{office.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div
            className={`rounded-sm border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm lg:p-10 ${
              isVisible ? "animate-morph-in" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary-foreground/20">
                  <svg className="h-8 w-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-primary-foreground">Vielen Dank</h3>
                <p className="max-w-xs font-sans text-sm text-primary-foreground/60">
                  Ein Spezialist von Priem Residenz wird sich innerhalb von 24 Stunden bei Ihnen melden,
                  um Ihre Anfrage zu bestätigen und Sie bei Ihrem Aufenthalt zu unterstützen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h3 className="mb-2 font-serif text-xl font-semibold text-primary-foreground">
                  Informationen erhalten & buchen
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="firstName" className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/50">
                      Vorname
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      value={formState.firstName}
                      onChange={(e) => setFormState((s) => ({ ...s, firstName: e.target.value }))}
                      className="border-b border-primary-foreground/20 bg-transparent px-0 py-2 font-sans text-sm text-primary-foreground outline-none transition-colors focus:border-primary-foreground/60"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="lastName" className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/50">
                      Nachname
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      value={formState.lastName}
                      onChange={(e) => setFormState((s) => ({ ...s, lastName: e.target.value }))}
                      className="border-b border-primary-foreground/20 bg-transparent px-0 py-2 font-sans text-sm text-primary-foreground outline-none transition-colors focus:border-primary-foreground/60"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/50">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    className="border-b border-primary-foreground/20 bg-transparent px-0 py-2 font-sans text-sm text-primary-foreground outline-none transition-colors focus:border-primary-foreground/60"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/50">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState((s) => ({ ...s, phone: e.target.value }))}
                    className="border-b border-primary-foreground/20 bg-transparent px-0 py-2 font-sans text-sm text-primary-foreground outline-none transition-colors focus:border-primary-foreground/60"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="interest" className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/50">
                    Interesse
                  </label>
                  <select
                    id="interest"
                    value={formState.interest}
                    onChange={(e) => setFormState((s) => ({ ...s, interest: e.target.value }))}
                    className="border-b border-primary-foreground/20 bg-transparent px-0 py-2 font-sans text-sm text-primary-foreground outline-none transition-colors focus:border-primary-foreground/60"
                  >
                    <option value="" className="text-foreground">Wählen Sie Ihr Interesse</option>
                    <option value="buy" className="text-foreground">Eine Unterkunft buchen</option>
                    <option value="sell" className="text-foreground">Längeren Aufenthalt planen</option>
                    <option value="invest" className="text-foreground">Beratung zur Unterkunft</option>
                    <option value="tour" className="text-foreground">Private Besichtigung</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/50">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    className="resize-none border-b border-primary-foreground/20 bg-transparent px-0 py-2 font-sans text-sm text-primary-foreground outline-none transition-colors focus:border-primary-foreground/60"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 rounded-sm bg-primary-foreground px-8 py-3 font-mono text-xs uppercase tracking-[0.15em] text-primary transition-all hover:bg-primary-foreground/90"
                >
                  Anfrage senden
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
