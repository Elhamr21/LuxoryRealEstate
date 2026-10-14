import type { FaqItem } from "@/lib/faq"

interface FaqSectionProps {
  faqs: FaqItem[]
  title?: string
  eyebrow?: string
  className?: string
}

export function FaqSection({
  faqs,
  title = "Häufige Fragen",
  eyebrow = "( FAQ )",
  className = "bg-background",
}: FaqSectionProps) {
  return (
    <section id="faq" className={`px-6 py-24 lg:px-10 ${className}`} aria-labelledby="faq-heading">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{eyebrow}</p>
          <h2 id="faq-heading" className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            {title}
          </h2>
        </div>
        <div className="flex flex-col">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-border py-5 first:border-t">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-lg font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                <h3 className="font-serif text-lg font-semibold">{faq.question}</h3>
                <span
                  aria-hidden="true"
                  className="font-mono text-xl text-accent transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
