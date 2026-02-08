import React, { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import SectionWrapper from "../../../component/SectionWrapper";

const contactInfo = [
  {
    icon: FiMapPin,
    label: "Location",
    value: "East Bakalia, Chittagong, Bangladesh",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "rakibulislam.eb@gmail.com",
    href: "mailto:rakibulislam.eb@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+880 18639-72739",
    href: "tel:+8801863972739",
  },
];

const socialLinks = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/rakibul-islam-6258541b4/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/ri5257", label: "GitHub" },
  { icon: FaTwitter, href: "https://x.com/dev_rakib_eb", label: "Twitter" },
  { icon: FaFacebookF, href: "https://www.facebook.com/rakibulislam.eb.rakib/", label: "Facebook" },
];

const Contaact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:rakibulislam.eb@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoLink);
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-5xl">
        <h2 className="section-heading">Contact</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4 leading-tight text-balance">
          Get in <span className="text-accent">touch</span>
        </h3>
        <p className="text-text-secondary mb-12 max-w-2xl leading-relaxed">
          Have a project in mind or just want to connect? I am always open to
          discussing new opportunities, collaborations, or answering any
          questions you may have.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Info items */}
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors duration-200">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-text-secondary text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">
                Connect with me
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 rounded-lg border border-slate-800/50 text-text-muted hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-200 focus-ring"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-xl border border-slate-800/50 bg-bg-card/30 space-y-6"
              autoComplete="off"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bg/50 border border-slate-700/50 rounded-lg text-text-primary text-sm placeholder-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bg/50 border border-slate-700/50 rounded-lg text-text-primary text-sm placeholder-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-bg/50 border border-slate-700/50 rounded-lg text-text-primary text-sm placeholder-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-bg bg-accent rounded-lg hover:bg-accent-hover transition-all duration-200 focus-ring"
              >
                Send Message
                <FiSend
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contaact;
