"use client"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        {/* Top: Large brand */}
        <div className="mb-16">
          <span className="font-serif text-7xl font-bold tracking-tight text-foreground md:text-9xl lg:text-[10rem]">
            DEMA
          </span>
        </div>

        {/* Middle: Columns */}
        <div className="mb-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Collection
            </span>
            {["Urban Apartments", "City Center", "Countryside", "Modern Design", "Premium Amenities", "Full Service"].map(
              (item) => (
                <a
                  key={item}
                  href="#collection"
                  className="font-sans text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Services
            </span>
            {["Book a Stay", "Group Bookings", "Extended Stays", "Guest Services", "Concierge", "Special Requests"].map(
              (item) => (
                <a
                  key={item}
                  href="#contact"
                  className="font-sans text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Locations
            </span>
            {[
              "Siegen, Germany",
              "Wilnsdorf, Germany",
              "Central Europe Base",
              "Premium Properties",
              "Coming Soon",
              "Inquire Now",
            ].map((item) => (
              <span key={item} className="font-sans text-sm text-foreground/70">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Connect
            </span>
            {["Instagram", "LinkedIn", "WeChat", "Newsletter"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-sans text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom: Legal */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-[10px] text-muted-foreground">
              &copy; 2026 DEMA Luxury Rentals
            </span>
            <span className="h-3 w-px bg-border" />
            <a href="#" className="font-mono text-[10px] text-muted-foreground transition-colors hover:text-foreground">
              Privacy
            </a>
            <span className="h-3 w-px bg-border" />
            <a href="#" className="font-mono text-[10px] text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </a>
            <span className="h-3 w-px bg-border" />
            <a href="#" className="font-mono text-[10px] text-muted-foreground transition-colors hover:text-foreground">
              Cookies
            </a>
          </div>
          <span className="font-mono text-[10px] text-muted-foreground">
            Curated with precision. Built with purpose.
          </span>
        </div>
      </div>
    </footer>
  )
}
