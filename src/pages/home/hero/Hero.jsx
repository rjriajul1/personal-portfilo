import profile from "../../../assets/Profile.jpg";
import { Link } from "react-router";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
const orbitRadius = 30; // Circle er radius
const duration = 40;
// Image rotate animation (image নিজেই rotate হবে)
const rotateImage = {
  animate: {
    x: Array.from({ length: 100 }, (_, i) => 
      Math.cos((i / 100) * Math.PI * 2) * orbitRadius
    ),
    y: Array.from({ length: 100 }, (_, i) => 
      Math.sin((i / 100) * Math.PI * 2) * orbitRadius
    ),
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const Hero = () => {
  return (
    <section className="max-w-[1400px] mx-auto mt-20 px-6">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-14 justify-between">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl selection:text-red-500 md:text-6xl font-bold text-white leading-tight">
            Hi, I’m <span className="text-primary selection:text-white">Riajul Karim</span>
          </h1>

          <h2 className="mt-4 text-xl selection:text-red-500 md:text-2xl font-semibold text-grayLight">
            <Typewriter
              words={["MERN Stack Developer", "Web Developer", "Software Engineer"]}
              loop
              cursor
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="mt-6 text-2xl md:text-xl text-gray-400 max-w-xl selection:text-red-500">
            I build modern, scalable, and user-friendly web applications with clean code and smooth user experience.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex justify-center lg:justify-start gap-5">
            <a
              href="#contact"
              className="relative px-7 py-3 rounded-full font-semibold text-white bg-primary overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
              <span className="relative z-10 group-hover:text-primary transition">
                Hire Me
              </span>
            </a>

            <Link
              target="_blank"
              to="https://drive.google.com/file/d/1GrXboy1vSXVkzCiqw8gUCOja4gm-NNGl/view"
              className="px-7 py-3 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
            >
              Resume
            </Link>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-5 mt-10 justify-center lg:justify-start">
            {[ 
              { icon: <FaSquareFacebook size={24} />, link: "https://www.facebook.com/share/1JHcRoWsFS/" },
              { icon: <FaGithub size={24} />, link: "https://github.com/rjriajul1" },
              { icon: <FaLinkedin size={24} />, link: "https://www.linkedin.com/in/riajul-karim" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 
                       bg-gradient-to-tr from-primary via-blue-500 to-purple-500 
                       shadow-[0_0_45px_rgba(255,77,79,0.5)] flex items-center justify-center"
          >
            {/* IMAGE ITSELF ROTATES */}
            <motion.img
              variants={rotateImage}
              animate="animate"
              whileHover={{ scale: 1.08 }}
              src={profile}
              alt="Riajul Karim"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
