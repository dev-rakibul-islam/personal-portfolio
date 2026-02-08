import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "education", "skills", "projects", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-2 focus-ring rounded-lg"
            aria-label="Go to home"
          >
            <span className="text-xl font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors duration-200">
              R<span className="text-accent">.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1" role="menubar">
            {navItems.map((item) => (
              <li key={item.id} role="none">
                <button
                  onClick={() => scrollToSection(item.id)}
                  role="menuitem"
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus-ring ${
                    activeSection === item.id
                      ? "text-accent"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Resume button - Desktop */}
          <a
            href="https://drive.google.com/uc?export=download&id=1Zl-36y9qrqLgP5gkgIABVrcHQSbGl-wp"
            download
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-accent border border-accent/30 rounded-lg hover:bg-accent/10 transition-all duration-200 focus-ring"
          >
            Resume
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors focus-ring rounded-lg"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-bg/95 backdrop-blur-xl border-t border-slate-800/50">
          <ul className="flex flex-col gap-1" role="menu">
            {navItems.map((item) => (
              <li key={item.id} role="none">
                <button
                  onClick={() => scrollToSection(item.id)}
                  role="menuitem"
                  className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-accent bg-accent/5"
                      : "text-text-secondary hover:text-text-primary hover:bg-slate-800/50"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="https://drive.google.com/uc?export=download&id=1Zl-36y9qrqLgP5gkgIABVrcHQSbGl-wp"
                download
                className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-accent border border-accent/30 rounded-lg hover:bg-accent/10 transition-all duration-200"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
