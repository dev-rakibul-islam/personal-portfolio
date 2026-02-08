import React, { useState } from "react";
import SectionWrapper from "../../../component/SectionWrapper";

const skillCategories = [
  {
    label: "All",
    key: "all",
  },
  {
    label: "Frontend",
    key: "frontend",
  },
  {
    label: "Backend",
    key: "backend",
  },
  {
    label: "Tools",
    key: "tools",
  },
];

const skills = [
  {
    name: "React",
    category: "frontend",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
    level: 90,
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
    level: 88,
  },
  {
    name: "HTML5",
    category: "frontend",
    icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    level: 95,
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: "https://img.icons8.com/color/48/000000/css3.png",
    level: 92,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png",
    level: 90,
  },
  {
    name: "Bootstrap",
    category: "frontend",
    icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
    level: 85,
  },
  {
    name: "Material UI",
    category: "frontend",
    icon: "https://img.icons8.com/color/48/000000/material-ui.png",
    level: 80,
  },
  {
    name: "Node.js",
    category: "backend",
    icon: "https://img.icons8.com/color/48/000000/nodejs.png",
    level: 85,
  },
  {
    name: "Express.js",
    category: "backend",
    icon: "https://img.icons8.com/fluency/48/000000/node-js.png",
    level: 85,
  },
  {
    name: "MongoDB",
    category: "backend",
    icon: "https://img.icons8.com/color/48/000000/mongodb.png",
    level: 82,
  },
  {
    name: "Firebase",
    category: "backend",
    icon: "https://img.icons8.com/color/48/000000/firebase.png",
    level: 80,
  },
  {
    name: "Git",
    category: "tools",
    icon: "https://img.icons8.com/color/48/000000/git.png",
    level: 88,
  },
  {
    name: "GitHub",
    category: "tools",
    icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png",
    level: 90,
  },
  {
    name: "Netlify",
    category: "tools",
    icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
    level: 82,
  },
  {
    name: "WordPress",
    category: "tools",
    icon: "https://img.icons8.com/color/48/000000/wordpress.png",
    level: 75,
  },
];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSkills =
    activeFilter === "all"
      ? skills
      : skills.filter((s) => s.category === activeFilter);

  return (
    <SectionWrapper id="skills">
      <div className="max-w-5xl">
        <h2 className="section-heading">Skills</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-text-primary mb-8 leading-tight text-balance">
          Technologies I <span className="text-accent">work with</span>
        </h3>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist">
          {skillCategories.map((cat) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={activeFilter === cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus-ring ${
                activeFilter === cat.key
                  ? "bg-accent/15 text-accent border border-accent/30"
                  : "text-text-muted border border-slate-800/50 hover:text-text-secondary hover:border-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group hover-card flex flex-col items-center gap-3 p-5 rounded-xl border border-slate-800/50 bg-bg-card/20 text-center"
            >
              <div className="relative">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                {skill.name}
              </span>
              {/* Skill level bar */}
              <div className="w-full h-1 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-accent/60 group-hover:bg-accent transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
