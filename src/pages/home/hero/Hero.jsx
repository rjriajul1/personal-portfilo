import React from "react";
import profile from "../../../assets/profile.jpg";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="hero rounded-2xl max-w-[1600px] mt-8 mx-auto bg-primary">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={profile} className=" w-72 h-72 rounded-full shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            {" "}
            Hi, I'm Riajul Islam
            <br />
            <span className="text-2xl">
              {" "}
              Web Developer | MERN Stack Enthusiast | UI Lover
            </span>
          </h1>
          <p className="py-6">
            I build responsive, fast, and user-friendly web applications using
            modern technologies. Let's work together to turn ideas into real
            digital experiences.
          </p>
          <div className="flex gap-4 mb-8 ml-2">
            <Link
              to="https://www.facebook.com/share/1JHcRoWsFS/"
              target="_blank"
            >
              <FaSquareFacebook className="hover:text-blue-500" size={28} />
            </Link>
            <Link to="https://github.com/rjriajul1" target="_blank">
              <FaGithub className="hover:text-white" size={28} />
            </Link>
          </div>
          <Link to="https://docs.google.com/document/d/1rRHc9w-2UwdKTsyJaZTsv8_JkYmUeP51nSvRdTor5qA/edit?usp=sharing" target="_blank"><button className="btn text-xl btn-primary">Resume</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
