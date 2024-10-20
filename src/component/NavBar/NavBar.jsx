import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo (100 x 50 px) (300 x 80 px) (1).png";
import { IoMdDownload } from "react-icons/io";
import "./NavBar.css";

const NavBar = () => {
  const navLinks = (
    <ul className="md:space-x-5 md:space-y-0 flex flex-col md:flex-row items-center ">
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold border-b-2 border-black"
              : "hover:text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold border-b-2 border-black"
              : "hover:text-white"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/education"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold border-b-2 border-black"
              : "hover:text-white"
          }
        >
          Education
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skills"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold border-b-2 border-black"
              : "hover:text-white"
          }
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold border-b-2 border-black"
              : "hover:text-white"
          }
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold border-b-2 border-black"
              : "hover:text-white"
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div className="bg-gradient-to-r from-black via-slate-400 to-black shadow-xl">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar-start flex items-center">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <img className="h-12 w-auto" src={logo} alt="Rakib" />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex space-x-20">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
