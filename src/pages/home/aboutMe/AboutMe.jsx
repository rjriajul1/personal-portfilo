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
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerChildren = {
  show: { transition: { staggerChildren: 0.12 } },
};

const AboutMe = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 px-4 sm:px-6 md:px-8 lg:px-10 text-grayLight"
    >
      <div className="max-w-[1500px] mx-auto">
        {/* Heading */}
        <motion.h2
          id="about-heading"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4 sm:mb-6"
        >
          About Me
        </motion.h2>

        {/* Typewriter */}
        <p className="text-center text-primary text-lg sm:text-xl mb-8 sm:mb-10 font-semibold">
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

        {/* About Card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="rounded-2xl shadow-xl shadow-primary/10 bg-[#1A1A1A] p-6 sm:p-8 md:p-12 lg:p-16 space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed"
        >
          <p>
            I’m <span className="font-semibold text-primary">Riajul Islam</span>
            , a dedicated{" "}
            <span className="font-semibold text-white">
              MERN Stack Developer
            </span>{" "}
            who loves building modern, responsive, and user‑focused web
            applications.
          </p>

          <p>
            I work with{" "}
            <span className="text-primary font-semibold">MongoDB</span>,{" "}
            <span className="text-primary font-semibold">Express.js</span>,{" "}
            <span className="text-primary font-semibold">React</span>, and{" "}
            <span className="text-primary font-semibold">Node.js</span> to build
            scalable applications end‑to‑end.
          </p>

          <p>
            Beyond coding, I enjoy exploring new UI ideas, learning from
            developer communities, watching tech deep‑dives, and playing
            football to recharge.
          </p>
        </motion.div>

        {/* Skills Icons */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 1 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 text-center text-xs sm:text-sm"
        >
          {[
            { Icon: FaReact, name: "React" },
            { Icon: SiTailwindcss, name: "Tailwind" },
            { Icon: FaNodeJs, name: "Node.js" },
            { Icon: SiExpress, name: "Express" },
            { Icon: SiMongodb, name: "MongoDB" },
            { Icon: FaDatabase, name: "REST / DB" },
          ].map(({ Icon, name }, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="p-3 sm:p-4 rounded-lg bg-[#1F1F1F] hover:bg-primary/10 transition"
            >
              <Icon className="mx-auto text-xl sm:text-2xl text-primary" />
              <span className="block mt-1 sm:mt-2">{name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 1 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            to="/"
            className="btn btn-primary rounded-full px-6 sm:px-8 text-sm sm:text-base transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
