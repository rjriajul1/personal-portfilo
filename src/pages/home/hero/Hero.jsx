import React from "react";
import profile from "../../../assets/Profile.jpg";
import { Link } from "react-router";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="hero rounded-2xl max-w-[1600px] mx-auto mt-14 px-6 py-16">
      <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 order-2 lg:order-1 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Hello, I'm <span className="text-primary">Riajul Karim</span>
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl font-semibold text-grayLight">
            <Typewriter
              words={[
                "MERN Stack Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          {/* CTA Buttons */}
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            {/* Primary CTA */}
            <a
              href="#contact"
              className="bg-primary text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary"
            >
              Hire Me
            </a>

            {/* Secondary CTA */}
            <Link target="_blank"
              to="https://drive.google.com/file/d/1GrXboy1vSXVkzCiqw8gUCOja4gm-NNGl/view"
              className="border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Resume
            </Link>
          </div>

        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 order-1 lg:order-2 flex justify-center"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: "0 0 25px rgba(255,77,79,0.6)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative rounded-3xl overflow-hidden group"
            style={{
              padding: "6px",
              background: "linear-gradient(45deg, #FF4D4F, #1E90FF, #FF4D4F)",
              backgroundSize: "300% 300%",
              animation: "gradientAnimation 4s ease infinite",
            }}
          >
            <motion.img
              src={profile}
              alt="Riajul Karim"
              className="w-64 sm:w-72 md:w-80 lg:w-96 rounded-2xl object-cover cursor-pointer transform group-hover:scale-110 transition-all duration-700"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="order-3 lg:order-3 flex-1 lg:ml-10 mt-10 lg:mt-0 text-white"
        >
          <h1 className="text-3xl font-bold mb-4">About Me</h1>

          <p className="text-grayLight leading-relaxed max-w-lg mb-8">
            <Typewriter
              words={[
                "I’m a passionate MERN Stack Developer, dedicated to building modern, responsive, and user-friendly web applications that deliver exceptional performance.",
              ]}
              cursor
              cursorStyle="|"
              cursorColor="#FF4D4F"
              typeSpeed={30}
              delaySpeed={1000}
            />
          </p>

          <h2 className="text-2xl font-semibold mb-4">Find Me On</h2>
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
