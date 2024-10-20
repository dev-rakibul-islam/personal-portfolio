import React from "react";

const projects = [
  {
    title: "P-Ticket",
    image_url: "https://i.ibb.co.com/3ym6DHz/Macbook-Air-ri5257-github-io.png", // Replace with your project homepage image path
    liveLink: "https://ri5257.github.io/A5-P-Ticket/", // Replace with your project live link
    githubLink: "https://github.com/username/project1", // Replace with your project GitHub link
    description: "A brief description of Project 1.",
  },
  {
    title: "TeachLoop",
    image_url:
      "https://i.ibb.co.com/s209tf1/Macbook-Air-tangerine-axolotl-4a2446-netlify-app.png",
    liveLink: "https://tangerine-axolotl-4a2446.netlify.app",
    githubClientSideLink:
      "https://github.com/programming-hero-web-course1/b9a12-client-side-ri5257",
    githubServerSideLink:
      "https://github.com/programming-hero-web-course1/b9a12-server-side-ri5257",
    description: "A brief description of Project 2.",
  },
  {
    title: "LibraEase",
    image_url:
      "https://i.ibb.co.com/qFTXW7m/Macbook-Air-b9-a11-assignment-web-app.png",
    liveLink: "https://b9-a11-assignment.web.app",
    githubClientSideLink:
      "https://github.com/Porgramming-Hero-web-course/b9a11-client-side-ri5257",
    githubServerSideLink:
      "https://github.com/Porgramming-Hero-web-course/b9a11-server-side-ri5257",
    description: "A brief description of Project 2.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-white font-bold text-center mb-8">
          My Projects
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black border-2 rounded-3xl px-2 py-7 shadow-lg overflow-hidden"
            >
              <img
                src={project.image_url}
                alt={`${project.title} homepage`}
                className="w-full p-4 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl text-white font-semibold mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-200  mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.githubClientSideLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    <button class="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
                      <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                      <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                        Client Side
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                        </svg>
                      </span>
                    </button>
                  </a>
                  <a
                    href={project.githubServerSideLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    <button class="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
                      <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                      <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                        Server Side
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                        </svg>
                      </span>
                    </button>
                  </a>
                </div>
                <div className="mt-3 flex justify-center items-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    <button class="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
                      <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                      <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                        Live Preview
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                        </svg>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
