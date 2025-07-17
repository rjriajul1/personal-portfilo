import React from "react";
import logo from "../../../assets/logo.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral text-neutral-content pt-16 pb-10 mt-24 relative overflow-hidden">
      <span className="pointer-events-none absolute -top-10 -left-10 w-40 h-60 rounded-full bg-primary/50 blur-3xl" />
      <span className="pointer-events-none absolute bottom-0 right-0 w-52 h-52 rounded-full bg-primary/50 blur-3xl" />

      <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
        {/* Brand & Intro */}
        <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
          <img
            src={logo}
            alt="Riajul Karim Logo"
            className="w-20 h-20 rounded-full shadow-md"
          />
          <h2 className="text-xl font-bold">Riajul Karim</h2>
          <p className="text-sm opacity-80 max-w-xs">
            MERN Stack / Full‑Stack JavaScript Developer. I build modern,
            scalable & user‑friendly web applications.
          </p>
        </div>

        {/* Quick Links */}
        <nav className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <Link
            to="#home"
            className="hover:underline hover:text-primary transition-colors"
          >
            Home
          </Link>
          <a
            href="#about"
            className="hover:underline hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#project"
            className="hover:underline hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#skill"
            className="hover:underline hover:text-primary transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:underline hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Contact With Me */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h3 className="text-lg font-semibold">Contact With Me</h3>
          <a
            href="mailto:riajul.karim52@gmail.com"
            className="flex items-center gap-3 hover:text-primary transition-colors"
            aria-label="Send email to Riajul Karim"
          >
            <FaEnvelope />
            <span className="text-sm break-all">riajul.karim52@gmail.com</span>
          </a>
          <a
            href="tel:+8801708867912"
            className="flex items-center gap-3 hover:text-primary transition-colors"
            aria-label="Call or WhatsApp Riajul Karim"
          >
            <FaPhone />
            <span className="text-sm">+8801708867912</span>
          </a>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt />
            <span className="text-sm">Dhaka, Bangladesh</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-lg font-semibold">Follow Me</h3>
          <div className="flex gap-5">
            {/* Facebook */}
            <Link
              to="https://www.facebook.com/share/1JHcRoWsFS/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110"
            >
              <FaSquareFacebook size={26} color="white" />
            </Link>

            {/* GitHub */}
            <Link
              to="https://github.com/rjriajul1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110"
            >
              <FaGithub size={26} color="white" />
            </Link>

            {/* LinkedIn */}
            <Link
              to="https://www.linkedin.com/in/riajul-karim"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110"
            >
              <FaLinkedin size={26} color="white" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-content/20 mt-12 pt-4 text-center text-sm opacity-80 relative z-10">
        © {year} Riajul Karim. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
