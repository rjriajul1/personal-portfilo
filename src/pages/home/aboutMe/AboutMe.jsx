import React from "react";
// import "aos/dist/aos.css";
const AboutMe = () => {
  return (
    <section className="bg-white py-25" id="about">
      <div className="">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
          About Me
        </h2>
        <div className="max-w-[1600px] mx-auto bg-green-50 rounded-2xl shadow-md">
          <div className="  p-8 md:px-15 lg:p-20 space-y-4 text-gray-800 text-lg leading-relaxed">
            <p>
              I'm{" "}
              <span className="font-semibold text-green-700">Riajul Islam</span>
              , a passionate full-stack web developer with hands-on experience
              in building modern, responsive, and user-focused web applications.
              My journey started with HTML and CSS, and I quickly fell in love
              with JavaScript and the world of interactive frontend development.
            </p>
            <p>
              Today, I work mainly with the
              <span className="font-semibold">MERN stack</span> —{" "}
              <span className="text-green-700">MongoDB</span>,{" "}
              <span className="text-green-700">Express.js</span>,{" "}
              <span className="text-green-700">React</span>, and{" "}
              <span className="text-green-700">Node.js</span> — to build dynamic
              web applications from start to finish. I enjoy solving real-world
              problems through clean code and creative design.
            </p>
            <p>
              Outside of coding, I love exploring design ideas, watching tech
              videos, and playing football. I’m a strong believer in continuous
              learning and enjoy collaborating with others to create impactful
              digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
