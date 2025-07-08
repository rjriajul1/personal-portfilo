import React from "react";
import logo from "../../../assets/logo.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
     <footer className="bg-primary text-primary-content py-10 text-center">
      <div className="flex flex-col items-center space-y-4">
        {/* Logo */}
        <img className="w-20 h-20 rounded-full" src={logo} alt="Logo" />

        {/* Name and Description */}
        <p className="text-lg font-bold">Riajul Islam</p>
        <p className="max-w-md text-sm">
          Full-Stack Web Developer | React, Node.js, MongoDB
          <br />
          Passionate about building user-friendly, scalable applications.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <Link
            to="https://github.com/rjriajul1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </Link>
          <Link
            to="https://www.linkedin.com/in/riajul-karim"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
          <a href="mailto:riajul.karim52@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Riajul Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
