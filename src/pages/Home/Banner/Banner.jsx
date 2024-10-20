import React, { useEffect, useState } from "react";
import {
  FaDev,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    };
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center p-6 md:p-12 lg:p-20 bg-black text-white">
      <div id="particles-js" className="absolute inset-0"></div>

      <div className="relative z-10 space-y-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug">
          <span className="block text-xl sm:text-2xl">Hi, I'm</span>
          Rakibul Islam <br />
          <span className="block text-3xl sm:text-4xl">I'm a</span>
          <span className="text-yellow-400 text-3xl sm:text-4xl md:text-5xl">
            Web Developer
          </span>
        </h2>

        <a
          href="https://drive.google.com/uc?export=download&id=1Zl-36y9qrqLgP5gkgIABVrcHQSbGl-wp"
          download
          className="inline-block"
        >
          <button
            aria-label="My Resume"
            className="px-6 py-2 mt-3 text-white font-bold text-lg rounded-lg shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-green-600 hover:shadow-green-500/50 hover:shadow-2xl focus:outline-none flex items-center justify-center"
          >
            My Resume <IoMdDownload className="ml-2" />
          </button>
        </a>

        <div className="flex justify-center space-x-4 mt-6">
          <a
            className="text-2xl text-white hover:text-yellow-400 transition-colors"
            href="https://www.linkedin.com/in/rakibul-islam-6258541b4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="text-2xl text-white hover:text-yellow-400 transition-colors"
            href="https://github.com/ri5257"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="text-2xl text-white hover:text-yellow-400 transition-colors"
            href="https://x.com/dev_rakib_eb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            className="text-2xl text-white hover:text-yellow-400 transition-colors"
            href="https://www.facebook.com/rakibulislam.eb.rakib/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
