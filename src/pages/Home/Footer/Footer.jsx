import React from "react";
import "./Footer.css"; // Assuming you save your CSS in this file

const Footer = () => {
  return (
    <footer>
      <div className="relative w-full  text-white text-center">
        <svg
          className="w-full"
          viewBox="0 0 120 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="wave"
              d="M0,10 C30,10 30,15 60,15 C90,15 90,10 120,10 C150,10 150,15 180,15 C210,15 210,10 240,10 V28 H0 Z"
            />
          </defs>

          <g className="wave-container">
            <use id="wave1" className="wave" href="#wave" x="0" y="0"></use>
            <use id="wave2" className="wave" href="#wave" x="0" y="2"></use>
          </g>
        </svg>
      </div>
      <hr />
      <div className="text-white text-center items-center">
        Rakibul Islam all rights reserved &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
