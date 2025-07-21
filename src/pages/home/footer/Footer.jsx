import React from "react";
import logo from "../../../assets/logo.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
// ✅ Use Link only for *internal* routes. For external profiles, use <a>.
import { Link } from "react-router"; // or "react-router-dom" depending on your setup

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        bg-neutral text-neutral-content 
        pt-14 pb-8 sm:pt-16 sm:pb-10 mt-24 
        relative overflow-hidden
      "
    >
      {/* Decorative blurred blobs */}
      <span className="pointer-events-none absolute -top-10 -left-10 w-40 h-60 rounded-full bg-primary/50 blur-3xl" />
      <span className="pointer-events-none absolute bottom-0 right-0 w-52 h-52 rounded-full bg-primary/50 blur-3xl" />

      <div
        className="
          max-w-6xl mx-auto 
          px-4 sm:px-6 lg:px-8 
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
          gap-y-10 gap-x-8 
          relative z-10
        "
      >
        {/* Brand & Intro */}
        <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left">
          <img
            src={logo}
            alt="Riajul Karim Logo"
            className="w-20 h-20 rounded-full shadow-md"
            loading="lazy"
          />
          <h2 className="text-xl font-bold">Riajul Karim</h2>
          <p className="text-sm opacity-80 max-w-xs">
            MERN Stack / Full‑Stack JavaScript Developer. I build modern,
            scalable & user‑friendly web applications.
          </p>
        </div>

        {/* Quick Links */}
        <nav
          aria-label="Quick site navigation"
          className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2"
        >
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>

          {/* Internal links should use <Link>. Section jumps use <a href="#id"> */}
          <Link
            to="/"
            className="hover:underline hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm text-sm"
          >
            Home
          </Link>
          <a
            href="#about"
            className="hover:underline hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm text-sm"
          >
            About
          </a>
          <a
            href="#project"
            className="hover:underline hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm text-sm"
          >
            Projects
          </a>
          <a
            href="#skill"
            className="hover:underline hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm text-sm"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:underline hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm text-sm"
          >
            Contact
          </a>
        </nav>

        {/* Contact With Me */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
          <h3 className="text-lg font-semibold">Contact With Me</h3>

          <a
            href="mailto:riajul.karim52@gmail.com"
            className="flex items-center gap-3 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            aria-label="Send email to Riajul Karim"
          >
            <FaEnvelope aria-hidden="true" />
            <span className="text-sm break-all">riajul.karim52@gmail.com</span>
          </a>

          <a
            href="tel:+8801708867912"
            className="flex items-center gap-3 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            aria-label="Call Riajul Karim"
          >
            <FaPhone aria-hidden="true" />
            <span className="text-sm whitespace-nowrap">+880 1708-867-912</span>
          </a>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt aria-hidden="true" />
            <span className="text-sm">Dhaka, Bangladesh</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <h3 className="text-lg font-semibold">Follow Me</h3>
          <div className="flex gap-4 sm:gap-5">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1JHcRoWsFS/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my Facebook profile"
              className="bg-gray-800 p-3 sm:p-4 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <FaSquareFacebook size={22} className="sm:size-6" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/rjriajul1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="bg-gray-800 p-3 sm:p-4 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <FaGithub size={22} className="sm:size-6" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/riajul-karim"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              className="bg-gray-800 p-3 sm:p-4 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <FaLinkedin size={22} className="sm:size-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-content/20 mt-12 pt-4 text-center text-xs sm:text-sm opacity-80 relative z-10">
        © {year} Riajul Karim. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
