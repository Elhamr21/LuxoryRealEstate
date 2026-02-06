"use client"

import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const marketData = {
  regions: [
    { name: "Europe", growth: 8.2, volume: "$4.2B", properties: 186 },
    { name: "North America", growth: 6.8, volume: "$6.1B", properties: 224 },
    { name: "Asia Pacific", growth: 12.4, volume: "$3.8B", properties: 142 },
    { name: "Middle East", growth: 15.1, volume: "$2.9B", properties: 98 },
  ],
  trends: [
    { month: "Jan", value: 82 },
    { month: "Feb", value: 85 },
    { month: "Mar", value: 78 },
    { month: "Apr", value: 91 },
    { month: "May", value: 88 },
    { month: "Jun", value: 94 },
    { month: "Jul", value: 97 },
    { month: "Aug", value: 93 },
    { month: "Sep", value: 99 },
    { month: "Oct", value: 102 },
    { month: "Nov", value: 98 },
    { month: "Dec", value: 106 },
  ],
  insights: [
    {
      title: "Waterfront Premium",
      description: "Oceanfront properties commanding 34% premium over inland equivalents across all markets.",
      change: "+34%",
    },
    {
      title: "Sustainable Luxury",
      description: "Net-zero estates seeing 22% faster appreciation as green architecture becomes standard.",
      change: "+22%",
    },
    {
      title: "Privacy Index",
      description: "Gated communities with advanced security systems achieving 18% value uplift year-over-year.",
      change: "+18%",
    },
  ],
}

export function MarketSection() {
  const [hoveredTrend, setHoveredTrend] = useState<number | null>(null)
  const { ref, isVisible } = useScrollReveal(0.1)

  const maxTrend = Math.max(...marketData.trends.map((t) => t.value))
  const minTrend = Math.min(...marketData.trends.map((t) => t.value))
  const trendRange = maxTrend - minTrend

  return (
    <section id="market" className="bg-background px-6 py-24 lg:px-10">
      <div ref={ref} className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className={`mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              ( Market Intelligence )
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Global
              <br />
              Insights
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
            Real-time market data and analysis from the world's most prestigious
            property markets, curated for discerning investors.
          </p>
        </div>

        {/* Trend Chart */}
        <div
          className={`mb-16 rounded-sm border border-border p-8 ${isVisible ? "animate-morph-in" : "opacity-0"}`}
          style={{ animationDelay: "200ms" }}
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground">Luxury Property Index</h3>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                12-Month Performance
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-2xl font-bold text-foreground">106</span>
              <span className="rounded-sm bg-accent/10 px-2 py-1 font-mono text-xs text-accent">
                +29.3%
              </span>
            </div>
          </div>

          {/* SVG Chart */}
          <div className="relative h-48 w-full md:h-64">
            <svg className="h-full w-full" viewBox="0 0 800 200" preserveAspectRatio="none">
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={i}
                  x1="0"
                  y1={i * 50}
                  x2="800"
                  y2={i * 50}
                  stroke="hsl(var(--border))"
                  strokeWidth="0.5"
                />
              ))}

              {/* Area fill */}
              <path
                d={`M0,${200 - ((marketData.trends[0].value - minTrend) / trendRange) * 180} ${marketData.trends
                  .map(
                    (t, i) =>
                      `L${(i / (marketData.trends.length - 1)) * 800},${200 - ((t.value - minTrend) / trendRange) * 180}`
                  )
                  .join(" ")} L800,200 L0,200 Z`}
                fill="hsl(var(--accent) / 0.08)"
              />

              {/* Line */}
              <path
                d={`M0,${200 - ((marketData.trends[0].value - minTrend) / trendRange) * 180} ${marketData.trends
                  .map(
                    (t, i) =>
                      `L${(i / (marketData.trends.length - 1)) * 800},${200 - ((t.value - minTrend) / trendRange) * 180}`
                  )
                  .join(" ")}`}
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="2"
              />

              {/* Data points */}
              {marketData.trends.map((t, i) => (
                <circle
                  key={t.month}
                  cx={(i / (marketData.trends.length - 1)) * 800}
                  cy={200 - ((t.value - minTrend) / trendRange) * 180}
                  r={hoveredTrend === i ? 5 : 3}
                  fill={hoveredTrend === i ? "hsl(var(--accent))" : "hsl(var(--background))"}
                  stroke="hsl(var(--accent))"
                  strokeWidth="2"
                  className="cursor-pointer transition-all"
                  onMouseEnter={() => setHoveredTrend(i)}
                  onMouseLeave={() => setHoveredTrend(null)}
                />
              ))}
            </svg>

            {/* Month labels */}
            <div className="mt-2 flex justify-between">
              {marketData.trends.map((t) => (
                <span key={t.month} className="font-mono text-[9px] text-muted-foreground">
                  {t.month}
                </span>
              ))}
            </div>

            {/* Hover tooltip */}
            {hoveredTrend !== null && (
              <div
                className="absolute -top-2 rounded-sm border border-border bg-card px-3 py-1.5 shadow-sm"
                style={{
                  left: `${(hoveredTrend / (marketData.trends.length - 1)) * 100}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <span className="font-mono text-xs font-semibold text-foreground">
                  {marketData.trends[hoveredTrend].value}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Regional Data + Insights */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Regional Breakdown */}
          <div
            className={`rounded-sm border border-border p-8 ${isVisible ? "animate-morph-in" : "opacity-0"}`}
            style={{ animationDelay: "400ms" }}
          >
            <h3 className="mb-6 font-serif text-xl font-semibold text-foreground">Regional Performance</h3>
            <div className="flex flex-col gap-5">
              {marketData.regions.map((region) => (
                <div key={region.name} className="group">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-sm text-foreground">{region.name}</span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {region.properties} properties
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-muted-foreground">{region.volume}</span>
                      <span className="font-mono text-xs font-semibold text-accent">
                        +{region.growth}%
                      </span>
                    </div>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-700 group-hover:bg-primary"
                      style={{ width: `${(region.growth / 20) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Insights */}
          <div
            className={`flex flex-col gap-4 ${isVisible ? "animate-morph-in" : "opacity-0"}`}
            style={{ animationDelay: "600ms" }}
          >
            {marketData.insights.map((insight) => (
              <div
                key={insight.title}
                className="group rounded-sm border border-border p-6 transition-all hover:border-accent hover:bg-accent/5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="font-serif text-lg font-semibold text-foreground">{insight.title}</h4>
                  <span className="rounded-sm bg-accent/10 px-3 py-1 font-mono text-xs font-semibold text-accent">
                    {insight.change}
                  </span>
                </div>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
