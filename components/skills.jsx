"use client"

import { useEffect, useRef, useState } from "react"
import { SectionHeading } from "./section-heading"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Firebase",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Netlify",
      "Vercel",
      "Heroku",
      "WordPress",
      "Figma",
    ],
  },
  {
    title: "Other",
    skills: [
      "Redux",
      "Sass",
      "jQuery",
      "AWS",
      "DigitalOcean",
      "Responsive Design",
      "SEO",
    ],
  },
]

export function Skills() {
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
    <section id="skills" className="py-24 lg:py-32 px-6 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-card/50" />

      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading
          label="Skills"
          title="Technologies I Work With"
          description="A comprehensive toolkit for building modern, scalable web applications from frontend to backend."
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500 opacity-0 ${
                isVisible ? `animate-fade-up stagger-${catIndex + 1}` : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <h3 className="text-lg font-bold text-foreground tracking-wide">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
