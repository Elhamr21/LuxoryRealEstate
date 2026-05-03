import type { ReactNode } from "react"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

type LegalPageProps = {
  eyebrow: string
  title: string
  description: string
  updated?: string
  children: ReactNode
}

export function LegalPage({
  eyebrow,
  title,
  description,
  updated = "Stand: Mai 2026",
  children,
}: LegalPageProps) {
  return (
    <main className="bg-background">
      <Navigation />
      <section className="relative overflow-hidden bg-card px-6 pb-16 pt-36 lg:px-10 lg:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(180,103,69,0.12),_transparent_36%),linear-gradient(135deg,_rgba(255,255,255,0.76),_rgba(249,246,241,0.96))]" />
        <div className="relative mx-auto max-w-[1100px]">
          <Link
            href="/#top"
            className="mb-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <span aria-hidden="true">←</span>
            Zur Startseite
          </Link>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {eyebrow}
          </p>
          <h1 className="max-w-4xl font-serif text-5xl font-bold leading-tight text-foreground md:text-7xl">
            {title}
          </h1>
          <p className="mt-8 max-w-3xl font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {updated}
          </p>
        </div>
      </section>
      <section className="px-6 py-16 lg:px-10">
        <article className="mx-auto max-w-[900px] space-y-10">{children}</article>
      </section>
      <SiteFooter />
    </main>
  )
}

export function LegalSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="border-t border-border pt-8 first:border-t-0 first:pt-0">
      <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
        {title}
      </h2>
      <div className="space-y-4 font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
        {children}
      </div>
    </section>
  )
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
