import React from "react";
import profile from "../../../assets/profile.jpg";
import { Link } from "react-router";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import "aos/dist/aos.css";
import { motion } from "motion/react";
import Button from "../../shared/Button";
import { Typewriter } from "react-simple-typewriter";
const Hero = () => {
  return (
    <div className="hero rounded-2xl max-w-[1600px] mt-14 mx-auto ">
      <div className="flex p-4 flex-col lg:flex-row lg:items-center ">
        {/* introduction */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ x: [0, 120, 0], scale: 1 }}
          transition={{ duration: 2 }}
          className="flex-1 order-2 lg:order-1 mr-8 mt-10 lg:mt-0"
        >
          <motion.h1
            animate={{ color: ["#C5172E", "#FFFCFB"] }}
            transition={{ duration: 5, delay: 3, repeat: Infinity }}
            className="text-7xl heading-font font-bold leading-20"
          >
            {" "}
            Hello, I'm Riajul Karim
          </motion.h1>
          <div className="mt-12">
            <Button />
          </div>
        </motion.div>

        {/* photo */}
        <div className="order-1 lg:order-2 flex-1 duration-5000 p-10 lg:p-0">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            src={profile}
            className=" w-full rounded-2xl shadow-2xl"
          />
        </div>

        {/* about and link */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ x: [120, 120, 0], scale: 1 }}
          transition={{ duration: 2 }}
          className="order-3 lg:order-3 lg:ml-8 mt-10 lg:mt-0   flex-1"
        >
          <h1 className="text-2xl mb-6">About Me</h1>
          <p className="w-1/2 lg:w-full">
            <Typewriter
              words={[
                "I’m a passionate MERN Stack Developer, dedicated to building modern, responsive, and user-friendly web applications that deliver exceptional performance.",
              ]}
              cursor
              cursorStyle="|"
              cursorColor="red"
              typeSpeed={30}
              delaySpeed={1000}
            />
          </p>
          <div>
            <h1 className="mt-12 mb-6 text-2xl font-bold">Find Me On</h1>
            <div className="flex gap-4">
              <div className="bg-gray-800 p-4 rounded-full  transition-all duration-1000  hover:bg-primary ">
                <Link
                  to="https://www.facebook.com/share/1JHcRoWsFS/"
                  target="_blank"
                >
                  <FaSquareFacebook color="white" size={28} />
                </Link>
              </div>
              <div className="bg-gray-800 p-4 rounded-full  transition-all duration-1000  hover:bg-primary ">
                <Link to="https://github.com/rjriajul1" target="_blank">
                  <FaGithub color="white" size={28} />
                </Link>
              </div>
              <div className="bg-gray-800 p-4 rounded-full  transition-all duration-1000  hover:bg-primary ">
                <Link
                  to="https://www.linkedin.com/in/riajul-karim"
                  target="_blank"
                >
                  <FaLinkedin color="white" size={28} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
