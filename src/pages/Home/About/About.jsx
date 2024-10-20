import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="bg-gray-900 backdrop-blur-3xl bg-opacity-25  text-white min-h-screen flex flex-col items-center justify-center px-6 py-10"
    >
      <div className="max-w-4xl w-full">
        <div className="flex items-center flex-col">
          {/* Image Section */}
          <div className="w-96 h-96 rounded-b-full border-b-2 border-b-yellow-400 overflow-hidden flex-shrink-0">
            <img
              src="https://i.ibb.co.com/0GKpDBh/Web-Developer-1.png"
              alt="Rakibul Islam"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="mt-6 sm:mt-0">
            <h2 className="text-4xl font-bold text-center sm:text-left mb-4">
              About <span className="underline text-[#ffdb26]">Me</span>
            </h2>
            <p className="text-lg leading-7 mb-4">
              Hi there! I'm Rakibul Islam, a dedicated MERN stack developer
              driven by the desire to build seamless, efficient, and impactful
              web applications. I'm a lifelong learner, consistently exploring
              the evolving world of web development to bring the latest
              innovations into my projects.
            </p>
            <p className="text-lg leading-7 mb-4">
              Mastering the MERN stack (MongoDB, Express.js, React.js, Node.js)
              has allowed me to develop scalable, high-performance applications.
              I also have a solid grasp of front-end technologies like HTML5,
              CSS3, and JavaScript, alongside experience with backend systems,
              REST APIs, and server management.
            </p>
            <p className="text-lg leading-7 mb-4">
              Outside the realm of coding, I fuel my creativity through
              exploration—whether it's traveling, reading insightful books,
              playing cricket, or binge-watching captivating movie series.
            </p>
            <p className="text-lg leading-7">
              I’m always ready to embrace challenges, harness cutting-edge
              technologies, and contribute to meaningful projects. If you're
              looking for a tech partner to bring your ideas to life, let's
              chat!
            </p>
            <p className="mt-4 text-lg leading-7">
              Ready to collaborate and create something extraordinary? Let's
              make it happen!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
