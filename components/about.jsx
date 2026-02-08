"use client"

import { useEffect, useRef, useState } from "react"
import { SectionHeading } from "./section-heading"

const stats = [
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies", value: "20+" },
  { label: "Years Experience", value: "3+" },
  { label: "Cups of Coffee", value: "999+" },
]

export function About() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 lg:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About"
          title="A Bit About Me"
          description="Passionate about crafting digital experiences that blend thoughtful design with robust engineering."
        />

        <div ref={ref} className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left column - text */}
          <div className="lg:col-span-3 space-y-6">
            <p
              className={`text-lg leading-relaxed text-muted-foreground opacity-0 ${
                isVisible ? "animate-fade-up" : ""
              }`}
            >
              {"Hi there! I'm Rakibul Islam, a dedicated MERN stack developer driven by the desire to build seamless, efficient, and impactful web applications. I'm a lifelong learner, consistently exploring the evolving world of web development to bring the latest innovations into my projects."}
            </p>
            <p
              className={`text-lg leading-relaxed text-muted-foreground opacity-0 ${
                isVisible ? "animate-fade-up stagger-1" : ""
              }`}
            >
              Mastering the MERN stack{" "}
              <span className="text-foreground font-medium">
                (MongoDB, Express.js, React.js, Node.js)
              </span>{" "}
              has allowed me to develop scalable, high-performance applications.
              I also have a solid grasp of front-end technologies like HTML5,
              CSS3, and JavaScript, alongside experience with backend systems,
              REST APIs, and server management.
            </p>
            <p
              className={`text-lg leading-relaxed text-muted-foreground opacity-0 ${
                isVisible ? "animate-fade-up stagger-2" : ""
              }`}
            >
              {"Outside the realm of coding, I fuel my creativity through exploration -- whether it's traveling, reading insightful books, playing cricket, or binge-watching captivating movie series. I'm always ready to embrace challenges and contribute to meaningful projects."}
            </p>
          </div>

          {/* Right column - stats */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 opacity-0 ${
                    isVisible ? `animate-scale-in stagger-${i + 1}` : ""
                  }`}
                >
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
