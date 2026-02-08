import React, { useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";

const Banner = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.4 + 0.1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${this.opacity})`;
        ctx.fill();
      }
    }

    const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawLines();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const socialLinks = [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/rakibul-islam-6258541b4/", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/ri5257", label: "GitHub" },
    { icon: FaTwitter, href: "https://x.com/dev_rakib_eb", label: "Twitter" },
    { icon: FaFacebook, href: "https://www.facebook.com/rakibulislam.eb.rakib/", label: "Facebook" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-up">
            <div className="relative group">
              <div
                className="absolute -inset-1 rounded-full opacity-50 blur-md transition-opacity duration-500 group-hover:opacity-75"
                style={{
                  background: "linear-gradient(135deg, rgba(56,189,248,0.4), rgba(56,189,248,0.1))",
                }}
                aria-hidden="true"
              />
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-slate-700/50 shadow-2xl" style={{ animation: "pulse-glow 4s ease-in-out infinite" }}>
                <img
                  src="https://ik.imagekit.io/plateia/Profile%20(1).png"
                  alt="Rakibul Islam - Web Developer"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-700/50">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-text-secondary">Available</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="animate-fade-up stagger-1 text-accent font-mono text-sm tracking-wide mb-3">
              Hello, I am
            </p>
            <h1 className="animate-fade-up stagger-2 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-text-primary leading-tight">
              Rakibul Islam
            </h1>
            <h2 className="animate-fade-up stagger-3 mt-3 text-xl sm:text-2xl lg:text-3xl font-medium text-text-secondary">
              MERN Stack <span className="text-accent">Developer</span>
            </h2>
            <p className="animate-fade-up stagger-4 mt-6 max-w-lg text-text-secondary leading-relaxed text-base lg:text-lg mx-auto lg:mx-0">
              I build accessible, pixel-perfect digital experiences for the web.
              Passionate about crafting user interfaces that blend thoughtful design
              with robust engineering.
            </p>

            {/* Social links */}
            <div className="animate-fade-up stagger-5 mt-8 flex items-center gap-4 justify-center lg:justify-start">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group p-3 rounded-lg border border-slate-700/50 text-text-muted hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-200 focus-ring"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors cursor-pointer focus-ring rounded-lg p-2"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-mono tracking-wider uppercase">Scroll</span>
        <FiArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
};

export default Banner;
