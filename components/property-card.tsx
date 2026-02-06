"use client"

import React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import type { Property } from "@/lib/properties"

interface PropertyCardProps {
  property: Property
  index: number
  onSelect: (property: Property) => void
}

export function PropertyCard({ property, index, onSelect }: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setMousePosition({ x, y })
  }

  const rotateX = isHovered ? (mousePosition.y - 0.5) * -8 : 0
  const rotateY = isHovered ? (mousePosition.x - 0.5) * 8 : 0

  const typeLabel = {
    oceanfront: "Oceanfront",
    urban: "Urban",
    country: "Country Estate",
    mountain: "Mountain",
    tropical: "Tropical",
    historic: "Historic",
  }

  return (
    <div
      ref={cardRef}
      className="group cursor-pointer"
      style={{
        perspective: "1000px",
        animationDelay: `${index * 150}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={() => onSelect(property)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onSelect(property)
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View ${property.title} - ${property.location}`}
    >
      <div
        className="transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          <Image
            src={property.image || "/placeholder.svg"}
            alt={property.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Overlay on hover */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background: `radial-gradient(ellipse at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, transparent 0%, hsl(var(--foreground) / 0.3) 100%)`,
            }}
          />

          {/* Type badge */}
          <div className="absolute left-4 top-4">
            <span className="rounded-sm bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur-sm">
              {typeLabel[property.type]}
            </span>
          </div>

          {/* Price on hover */}
          <div
            className={`absolute bottom-4 right-4 transition-all duration-500 ${
              isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            <span className="font-mono text-sm text-primary-foreground">
              {property.price}
            </span>
          </div>

          {/* Explore prompt */}
          <div
            className={`absolute inset-x-0 bottom-0 flex items-center justify-center pb-8 transition-all duration-500 ${
              isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <span className="flex items-center gap-2 rounded-sm border border-primary-foreground/50 bg-foreground/20 px-5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground backdrop-blur-md">
              Explore Residence
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="mt-5 flex flex-col gap-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                {property.title}
              </h3>
              <p className="mt-0.5 font-sans text-sm text-muted-foreground">
                {property.location}
              </p>
            </div>
            <span className="shrink-0 font-mono text-xs text-muted-foreground">
              {property.price}
            </span>
          </div>

          <div className="flex items-center gap-4 border-t border-border pt-3">
            <span className="font-mono text-[11px] text-muted-foreground">
              {property.beds} Beds
            </span>
            <span className="h-3 w-px bg-border" />
            <span className="font-mono text-[11px] text-muted-foreground">
              {property.baths} Baths
            </span>
            <span className="h-3 w-px bg-border" />
            <span className="font-mono text-[11px] text-muted-foreground">
              {property.sqft} sqft
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
