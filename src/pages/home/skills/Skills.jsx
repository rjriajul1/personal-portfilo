import React, { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiFirebase
} from "react-icons/si";
import { motion, useAnimation, useInView } from "framer-motion";

const frontendSkills = [
  { name: "HTML", level: 80, icon: FaHtml5, colorFrom: "#e44d26", colorTo: "#f16529" },
  { name: "CSS", level: 90, icon: FaCss3Alt, colorFrom: "#264de4", colorTo: "#2965f1" },
  { name: "Tailwind CSS", level: 88, icon: SiTailwindcss, colorFrom: "#38bdf8", colorTo: "#0ea5e9" },
  { name: "JavaScript", level: 72, icon: SiJavascript, colorFrom: "#f7df1e", colorTo: "#eab308" },
  { name: "React", level: 86, icon: FaReact, colorFrom: "#61dafb", colorTo: "#0ea5e9" },
  { name: "Git / GitHub", level: 80, icon: FaGithub, colorFrom: "#f05032", colorTo: "#ef4444" }
];

const backendSkills = [
  { name: "Node.js", level: 88, icon: FaNodeJs, colorFrom: "#3c873a", colorTo: "#22c55e" },
  { name: "Express.js", level: 84, icon: SiExpress, colorFrom: "#ffffff", colorTo: "#9ca3af" },
  { name: "MongoDB", level: 82, icon: SiMongodb, colorFrom: "#4db33d", colorTo: "#22c55e" },
  { name: "JWT Auth", level: 86, icon: SiJsonwebtokens, colorFrom: "#d97706", colorTo: "#fbbf24" },
  { name: "Firebase", level: 85, icon: SiFirebase, colorFrom: "#ffca28", colorTo: "#fbbf24" }
];

function useSlideIn(direction = "left") {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? -80 : 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return { ref, controls, variants };
}

const SkillBar = ({ name, level, icon:Icon, colorFrom, colorTo }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-50px" });
  
  useEffect(() => {
    if (inView) controls.start({ width: `${level}%` });
  }, [inView, controls, level]);

  return (
    <div className="group w-full select-none" ref={ref}>
      <div className="flex items-center gap-3 mb-1">
        <Icon className="text-xl md:text-2xl shrink-0" />
        <span className="text-sm md:text-base font-medium tracking-wide">{name}</span>
        <span className="ml-auto text-xs md:text-sm font-semibold opacity-80">{level}%</span>
      </div>
      <div className="w-full h-3 md:h-3.5 bg-zinc-700/60 rounded-full overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-sm"
          style={{ background: `linear-gradient(90deg, ${colorFrom}, ${colorTo})` }}
        ></div>
        <motion.div
          className="h-full rounded-full origin-left group-hover:scale-y-110"
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
          style={{ background: `linear-gradient(90deg, ${colorFrom}, ${colorTo})` }}
        />
      </div>
    </div>
  );
};

const SkillColumn = ({ title, skills, slideDir }) => {
  const { ref, controls, variants } = useSlideIn(slideDir);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="flex flex-col gap-5 p-5 rounded-xl bg-zinc-900/60 border border-zinc-700/60 hover:border-zinc-500/80 transition-colors duration-300 backdrop-blur-sm"
    >
      <h3 className="text-xl md:text-2xl font-semibold tracking-wide mb-1 text-white/90">{title}</h3>
      {skills.map((s) => (
        <SkillBar key={s.name} {...s} />
      ))}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative w-full py-16 md:py-24 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            MERN Stack <span className="text-blue-400">Skills</span>
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm md:text-base text-zinc-400">
            Frontend & Backend capability visualized with animated progress bars.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <SkillColumn title="Frontend" skills={frontendSkills} slideDir="left" />
          <SkillColumn title="Backend" skills={backendSkills} slideDir="right" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
