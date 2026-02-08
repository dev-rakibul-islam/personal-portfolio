import React from "react";
import { FiBookOpen } from "react-icons/fi";
import SectionWrapper from "../../../component/SectionWrapper";

const Education = () => {
  const data = [
    {
      institution: "International Islamic University Chittagong",
      degree: "BSS in Economics and Banking",
      session: "2018 - 2022",
    },
    {
      institution: "Chittagong Cantonment Public College",
      degree: "Higher Secondary Certificate (HSC)",
      session: "2016 - 2018",
    },
    {
      institution: "Programming Hero",
      degree: "Web Development Course",
      session: "Dec 2024 - Jun 2024",
    },
  ];

  return (
    <SectionWrapper id="education">
      <div className="max-w-4xl">
        <h2 className="section-heading">Education</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-text-primary mb-12 leading-tight text-balance">
          My academic <span className="text-accent">journey</span>
        </h3>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px bg-slate-800"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {data.map((item, index) => (
              <div key={index} className="relative flex gap-6 group">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-bg-card border-2 border-slate-700 flex items-center justify-center group-hover:border-accent/50 transition-colors duration-300">
                  <FiBookOpen
                    size={18}
                    className="text-text-muted group-hover:text-accent transition-colors duration-300"
                  />
                </div>

                {/* Content card */}
                <div className="flex-1 hover-card p-6 rounded-xl border border-slate-800/50 bg-bg-card/30 -mt-1">
                  <span className="inline-block text-xs font-mono font-medium text-accent mb-2 tracking-wide">
                    {item.session}
                  </span>
                  <h4 className="text-lg font-semibold text-text-primary mb-1">
                    {item.institution}
                  </h4>
                  <p className="text-sm text-text-secondary">{item.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
