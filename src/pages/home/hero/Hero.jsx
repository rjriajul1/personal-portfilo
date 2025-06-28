import React from "react";
import profile from "../../../assets/profile.jpg";
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
           <span className="text-2xl"> Web Developer | MERN Stack Enthusiast | UI Lover</span>
          </h1>
          <p className="py-6">
            I build responsive, fast, and user-friendly web applications using
            modern technologies. Let's work together to turn ideas into real
            digital experiences.
          </p>
          <button className="btn text-xl btn-primary">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
