"use client"

import { useEffect, useRef, useState } from "react"
import { SectionHeading } from "./section-heading"

const educationData = [
  {
    institution: "International Islamic University Chittagong",
    degree: "BSS in Economics and Banking",
    period: "2018 - 2022",
    description:
      "Studied economics and banking, developing strong analytical and problem-solving skills that complement my technical expertise.",
  },
  {
    institution: "Chittagong Cantonment Public College",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2016 - 2018",
    description:
      "Completed higher secondary education with a focus on science, building a strong foundation in mathematics and analytical thinking.",
  },
  {
    institution: "Programming Hero",
    degree: "Complete Web Development Course",
    period: "Dec 2023 - Jun 2024",
    description:
      "Intensive full-stack web development bootcamp covering React, Node.js, MongoDB, Express.js, Firebase, and modern web technologies.",
  },
]

export function Education() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" className="py-24 lg:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Education"
          title="My Academic Journey"
          description="The foundation of knowledge that powers my development career."
        />

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {educationData.map((item, i) => (
              <div
                key={item.institution}
                className={`relative md:grid md:grid-cols-2 md:gap-12 md:mb-12 opacity-0 ${
                  isVisible ? `animate-fade-up stagger-${(i + 1) * 2}` : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                </div>

                {/* Content - alternate sides */}
                <div
                  className={`${
                    i % 2 === 0
                      ? "md:col-start-1 md:text-right md:pr-12"
                      : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <span className="inline-block font-mono text-sm text-primary mb-2">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {item.institution}
                  </h3>
                  <p className="text-primary/80 font-medium mb-3">
                    {item.degree}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Empty cell for alternating layout */}
                {i % 2 === 0 ? (
                  <div className="hidden md:block md:col-start-2" />
                ) : (
                  <div className="hidden md:block md:col-start-1 md:row-start-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
