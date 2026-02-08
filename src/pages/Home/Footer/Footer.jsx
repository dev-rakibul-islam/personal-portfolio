import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left - Logo + Copyright */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="text-lg font-bold text-text-primary tracking-tight">
              Rakibul Islam<span className="text-accent">.</span>
            </span>
            <p className="text-xs text-text-muted">
              Designed & Built with care. All rights reserved &copy;{" "}
              {new Date().getFullYear()}
            </p>
          </div>

          {/* Center - Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/rakibul-islam-6258541b4/", label: "LinkedIn" },
              { icon: FaGithub, href: "https://github.com/ri5257", label: "GitHub" },
              { icon: FaTwitter, href: "https://x.com/dev_rakib_eb", label: "Twitter" },
              { icon: FaFacebookF, href: "https://www.facebook.com/rakibulislam.eb.rakib/", label: "Facebook" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-text-muted hover:text-accent transition-colors duration-200 focus-ring"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Right - Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 text-xs font-mono text-text-muted hover:text-accent border border-slate-800/50 hover:border-accent/30 rounded-lg transition-all duration-200 focus-ring"
            aria-label="Scroll to top"
          >
            Back to top
            <FiArrowUp
              size={14}
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
