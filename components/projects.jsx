"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { SectionHeading } from "./section-heading"

const projects = [
  {
    title: "P-Ticket",
    description:
      "A streamlined ticket management platform designed for seamless event booking and management with an intuitive user interface.",
    imageUrl: "https://i.ibb.co.com/3ym6DHz/Macbook-Air-ri5257-github-io.png",
    liveLink: "https://ri5257.github.io/A5-P-Ticket/",
    clientGithub: "https://github.com/username/project1",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "TeachLoop",
    description:
      "A full-stack educational platform connecting teachers and students with course management, enrollment tracking, and interactive learning tools.",
    imageUrl:
      "https://i.ibb.co.com/s209tf1/Macbook-Air-tangerine-axolotl-4a2446-netlify-app.png",
    liveLink: "https://tangerine-axolotl-4a2446.netlify.app",
    clientGithub:
      "https://github.com/programming-hero-web-course1/b9a12-client-side-ri5257",
    serverGithub:
      "https://github.com/programming-hero-web-course1/b9a12-server-side-ri5257",
    tags: ["React", "Node.js", "MongoDB", "Firebase"],
  },
  {
    title: "LibraEase",
    description:
      "A modern library management system with book borrowing, return tracking, and user authentication for seamless digital library operations.",
    imageUrl:
      "https://i.ibb.co.com/qFTXW7m/Macbook-Air-b9-a11-assignment-web-app.png",
    liveLink: "https://b9-a11-assignment.web.app",
    clientGithub:
      "https://github.com/Porgramming-Hero-web-course/b9a11-client-side-ri5257",
    serverGithub:
      "https://github.com/Porgramming-Hero-web-course/b9a11-server-side-ri5257",
    tags: ["React", "Express.js", "MongoDB", "Firebase"],
  },
]

function ExternalLinkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

export function Projects() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-24 lg:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Selected Work"
          description="A showcase of projects that demonstrate my skills in building full-stack web applications."
        />

        <div ref={ref} className="space-y-20">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative grid lg:grid-cols-12 gap-8 items-center opacity-0 ${
                isVisible ? `animate-fade-up stagger-${(i + 1) * 2}` : ""
              }`}
            >
              {/* Image */}
              <div
                className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="relative overflow-hidden rounded-2xl bg-card border border-border group-hover:border-primary/20 transition-all duration-500">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={project.imageUrl}
                      alt={`${project.title} project screenshot`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                    <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`lg:col-span-5 ${
                  i % 2 === 1 ? "lg:order-1 lg:text-right" : ""
                }`}
              >
                <span className="font-mono text-sm text-primary mb-2 block">
                  Featured Project
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <div className="p-6 rounded-xl bg-card border border-border mb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div
                  className={`flex flex-wrap gap-2 mb-6 ${
                    i % 2 === 1 ? "lg:justify-end" : ""
                  }`}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-md bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div
                  className={`flex items-center gap-4 ${
                    i % 2 === 1 ? "lg:justify-end" : ""
                  }`}
                >
                  {project.clientGithub && (
                    <a
                      href={project.clientGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
                      aria-label={`${project.title} client code on GitHub`}
                    >
                      <GithubIcon />
                    </a>
                  )}
                  {project.serverGithub && (
                    <a
                      href={project.serverGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
                      aria-label={`${project.title} server code on GitHub`}
                    >
                      <GithubIcon />
                    </a>
                  )}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    Live Demo
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
