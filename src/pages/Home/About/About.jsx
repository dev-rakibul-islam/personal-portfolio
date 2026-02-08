import React from "react";
import { FiCode, FiLayers, FiServer, FiZap } from "react-icons/fi";
import SectionWrapper from "../../../component/SectionWrapper";

const highlights = [
  {
    icon: FiCode,
    title: "Frontend",
    description: "React, JavaScript, HTML5, CSS3, Tailwind CSS",
  },
  {
    icon: FiServer,
    title: "Backend",
    description: "Node.js, Express.js, REST APIs, MongoDB",
  },
  {
    icon: FiLayers,
    title: "Full Stack",
    description: "MERN stack, Firebase, Authentication, Deployment",
  },
  {
    icon: FiZap,
    title: "Tools",
    description: "Git, GitHub, VS Code, Figma, Vercel, Netlify",
  },
];

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="max-w-4xl">
        <h2 className="section-heading">About Me</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6 leading-tight text-balance">
          A passionate developer who loves building
          <span className="text-accent"> digital experiences</span>
        </h3>

        <div className="space-y-4 text-text-secondary leading-relaxed text-base lg:text-lg">
          <p>
            I am Rakibul Islam, a dedicated MERN stack developer driven by the desire
            to build seamless, efficient, and impactful web applications. I am a lifelong
            learner, consistently exploring the evolving world of web development to bring
            the latest innovations into my projects.
          </p>
          <p>
            Mastering the MERN stack (MongoDB, Express.js, React.js, Node.js) has allowed
            me to develop scalable, high-performance applications. I also have a solid grasp
            of front-end technologies like HTML5, CSS3, and JavaScript, alongside experience
            with backend systems, REST APIs, and server management.
          </p>
          <p>
            Outside the realm of coding, I fuel my creativity through exploration -- whether
            it is traveling, reading insightful books, playing cricket, or watching captivating
            movie series.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="group hover-card p-5 rounded-xl border border-slate-800/50 bg-bg-card/30"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors duration-200">
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">{title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
