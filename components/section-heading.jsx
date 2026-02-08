"use client"

import { useEffect, useRef, useState } from "react"

export function SectionHeading({ label, title, description, align = "center" }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span
        className={`inline-block font-mono text-sm tracking-widest uppercase text-primary mb-3 opacity-0 ${
          isVisible ? "animate-fade-up" : ""
        }`}
      >
        {label}
      </span>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground opacity-0 text-balance ${
          isVisible ? "animate-fade-up stagger-1" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-muted-foreground text-lg max-w-2xl leading-relaxed opacity-0 ${
            align === "center" ? "mx-auto" : ""
          } ${isVisible ? "animate-fade-up stagger-2" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
