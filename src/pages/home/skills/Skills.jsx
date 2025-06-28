import React from "react";
import Marquee from "react-fast-marquee";
import { BiLogoFirebase } from "react-icons/bi";
import { FaNode, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <div className="max-w-[1500px] mx-auto">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        Skills
      </h1>
      <Marquee speed={70}>
        <div className="flex gap-18">
          <div className="bg-primary flex w-28 flex-col items-center rounded-2xl p-3">
            <SiMongodb size={35} color="green" />
            <h1 className="text-black font-bold">Mongodb</h1>
          </div>
          <div className="bg-primary flex w-28 flex-col items-center rounded-2xl p-3">
            <SiExpress size={35} color="white" />
            <h1 className="text-black font-bold">Express js</h1>
          </div>
          <div className="bg-primary flex w-28 flex-col items-center rounded-2xl p-3">
            <FaReact size={35} color="blue" />
            <h1 className="text-black font-bold">React</h1>
          </div>
          <div className="bg-primary flex w-28 flex-col items-center rounded-2xl p-3">
            <FaNode size={35} />
            <h1 className="text-black font-bold">Node js</h1>
          </div>
          <div className="bg-primary w-28 flex flex-col items-center rounded-2xl p-3">
            <RiTailwindCssFill size={35} color="blue" />
            <h1 className="text-black font-bold">Tailwind CSS</h1>
          </div>
          <div className="bg-primary w-28 flex flex-col  mr-18 items-center rounded-2xl p-3">
            <BiLogoFirebase size={35} color="yellow" />
            <h1 className="text-black font-bold">Firebase</h1>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Skills;
