import React, { useEffect, useState } from "react";
import Project from "../project/Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div id="project" className="max-w-[1600px] py-25 mx-auto">
      <h1 className="text-4xl font-bold text-center text-green-700 mt-16 mb-10">
        Projects
      </h1>
      <div className="flex flex-col gap-8">
        {projects?.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
