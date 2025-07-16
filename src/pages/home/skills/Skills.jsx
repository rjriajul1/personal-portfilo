import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { BiLogoFirebase } from "react-icons/bi";
import { FaNode, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import Marquee from "react-fast-marquee";
import { GiWindyStripes } from "react-icons/gi";


const skills = [
  { name: "MongoDB", icon: <SiMongodb size={35} color="green" /> },
  { name: "Express JS", icon: <SiExpress size={35} color="white" /> },
  { name: "React", icon: <FaReact size={35} color="blue" /> },
  { name: "Node JS", icon: <FaNode size={35} /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill size={35} color="blue" /> },
  { name: "Firebase", icon: <BiLogoFirebase size={35} color="orange" /> },
  { name: "Stripe", icon: <GiWindyStripes size={35} color="blue" /> },
];

const SkillsMarqueeFade = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scrollWidth =
      containerRef.current.scrollWidth - containerRef.current.clientWidth;

    controls.start({
      x: -scrollWidth,
      transition: {
        duration: 20,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <section id="skill" className="max-w-[1600px] mx-auto py-16 px-6 text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-white mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <Marquee speed={50} pauseOnHover={true}>
        <motion.div
          ref={containerRef}
          animate={controls}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex  overflow-hidden whitespace-nowrap cursor-grab select-none"
          style={{ display: "inline-flex" }}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="bg-primary flex ml-20  flex-col items-center rounded-2xl p-4 w-32 shadow-lg flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(34,197,94,0.7)",
              }}
            >
              {skill.icon}
              <h1 className="text-black font-bold mt-2 whitespace-nowrap">
                {skill.name}
              </h1>
            </motion.div>
          ))}
        </motion.div>
      </Marquee>
    </section>
  );
};

export default SkillsMarqueeFade;
