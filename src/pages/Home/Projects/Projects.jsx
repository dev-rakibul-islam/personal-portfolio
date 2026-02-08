import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import SectionWrapper from "../../../component/SectionWrapper";

const projects = [
  {
    title: "P-Ticket",
    description:
      "A modern ticket booking and management platform with an intuitive user interface and seamless booking experience.",
    image: "https://i.ibb.co.com/3ym6DHz/Macbook-Air-ri5257-github-io.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://ri5257.github.io/A5-P-Ticket/",
    githubLink: "https://github.com/ri5257/A5-P-Ticket",
  },
  {
    title: "TeachLoop",
    description:
      "A comprehensive e-learning platform connecting teachers and students with real-time class management and study materials.",
    image:
      "https://i.ibb.co.com/s209tf1/Macbook-Air-tangerine-axolotl-4a2446-netlify-app.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
    liveLink: "https://tangerine-axolotl-4a2446.netlify.app",
    githubLink:
      "https://github.com/programming-hero-web-course1/b9a12-client-side-ri5257",
  },
  {
    title: "LibraEase",
    description:
      "A feature-rich library management system with advanced search, borrowing workflows, and user dashboards.",
    image:
      "https://i.ibb.co.com/qFTXW7m/Macbook-Air-b9-a11-assignment-web-app.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
    liveLink: "https://b9-a11-assignment.web.app",
    githubLink:
      "https://github.com/Porgramming-Hero-web-course/b9a11-client-side-ri5257",
  },
];

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-5xl">
        <h2 className="section-heading">Projects</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-text-primary mb-12 leading-tight text-balance">
          Selected <span className="text-accent">work</span>
        </h3>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group"
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center`}
              >
                {/* Image */}
                <div className="flex-1 w-full">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-xl border border-slate-800/50 bg-bg-card/30 focus-ring"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </a>
                </div>

                {/* Content */}
                <div className="flex-1 w-full">
                  <p className="text-accent font-mono text-sm mb-2">
                    Featured Project
                  </p>
                  <h4 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h4>
                  <div className="p-5 rounded-xl bg-bg-card/50 border border-slate-800/50 mb-4">
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="p-2.5 rounded-lg text-text-muted hover:text-accent hover:bg-accent/5 border border-slate-800/50 hover:border-accent/30 transition-all duration-200 focus-ring"
                    >
                      <FiGithub size={18} />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live preview`}
                      className="p-2.5 rounded-lg text-text-muted hover:text-accent hover:bg-accent/5 border border-slate-800/50 hover:border-accent/30 transition-all duration-200 focus-ring"
                    >
                      <FiExternalLink size={18} />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent border border-accent/30 rounded-lg hover:bg-accent/10 transition-all duration-200 focus-ring"
                    >
                      View Live
                      <FiExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
