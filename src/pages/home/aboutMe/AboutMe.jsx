import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router";

const fadeInUp = {
  hidden: { opacity: 0, y: 42 },  
  show: {
    opacity: 1,
    y: 0, 
    transition: {
      duration: 0.5, 
      ease: "easeOut", 
    },
  },
};

const staggerChildren = {
  show: {
    transition: {
      staggerChildren: 0.12, 
    },
  },
};


const AboutMe = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 px-6  text-grayLight"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Heading */}
        <motion.h2
          id="about-heading"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-6"
        >
          About Me
        </motion.h2>


        <p className="text-center text-primary text-xl mb-10 font-semibold">
          <Typewriter
            words={["MERN Stack Developer"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        {/* Card container */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="rounded-2xl shadow-xl shadow-primary/10 bg-[#1A1A1A] p-8 md:p-12 lg:p-16 space-y-6 text-lg leading-relaxed"
        >
          <p>
            I’m <span className="font-semibold text-primary">Riajul Islam</span>
            , a dedicated{" "}
            <span className="font-semibold text-white">
              MERN Stack Developer
            </span>{" "}
            who loves building modern, responsive, and user‑focused web
            applications. I started with basic HTML & CSS, got excited by
            JavaScript, and never stopped exploring the full power of the web.
          </p>

          <p>
            These days I work across the full stack using{" "}
            <span className="text-primary font-semibold">MongoDB</span>,{" "}
            <span className="text-primary font-semibold">Express.js</span>,{" "}
            <span className="text-primary font-semibold">React</span>, and{" "}
            <span className="text-primary font-semibold">Node.js</span> to build
            scalable applications end‑to‑end. I care about clean architecture,
            performance, and creating smooth UX that actually solves real
            problems.
          </p>

          <p>
            Beyond coding, I enjoy exploring new UI ideas, learning from
            developer communities, watching tech deep‑dives, and playing
            football to recharge. I believe in continuous learning, open
            collaboration, and shipping useful products — fast.
          </p>
        </motion.div>

       
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 1 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center text-sm"
        >
          <motion.div
            variants={fadeInUp}
            className="p-4 rounded-lg bg-[#1F1F1F] hover:bg-primary/10 transition"
          >
            <FaReact className="mx-auto text-2xl text-primary" />
            <span className="block mt-2">React</span>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="p-4 rounded-lg bg-[#1F1F1F] hover:bg-primary/10 transition"
          >
            <SiTailwindcss className="mx-auto text-2xl text-primary" />
            <span className="block mt-2">Tailwind</span>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="p-4 rounded-lg bg-[#1F1F1F] hover:bg-primary/10 transition"
          >
            <FaNodeJs className="mx-auto text-2xl text-primary" />
            <span className="block mt-2">Node.js</span>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="p-4 rounded-lg bg-[#1F1F1F] hover:bg-primary/10 transition"
          >
            <SiExpress className="mx-auto text-2xl text-primary" />
            <span className="block mt-2">Express</span>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="p-4 rounded-lg bg-[#1F1F1F] hover:bg-primary/10 transition"
          >
            <SiMongodb className="mx-auto text-2xl text-primary" />
            <span className="block mt-2">MongoDB</span>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="p-4 rounded-lg bg-[#1F1F1F] hover:bg-primary/10 transition"
          >
            <FaDatabase className="mx-auto text-2xl text-primary" />
            <span className="block mt-2">REST / DB</span>
          </motion.div>
        </motion.div>

        {/* CTA Row */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 1 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="btn btn-primary rounded-full px-8 transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary"
          >
            View My Work
          </Link>
          <Link
            to="#contact"
            className="btn btn-outline rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-white"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
