import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Project from "../project/Project";
// import img2 from "../../../assets/project/assignment_10 _2.png";
// import img1 from "../../../assets/project/assignment_10_1.png";
// import img3 from "../../../assets/project/assignment-10_3.png";


const Projects = () => {
    const[projects,setProjects]= useState([])
    console.log(projects);

 
  useEffect(()=>{
    fetch('projects.json')
    .then(res=>res.json())
    .then(data=>setProjects(data))
  },[])
  return (
    <div id="project" className="max-w-[1600px] mx-auto">
      <h1 className="text-4xl font-bold text-center text-green-700 mt-16 mb-8">
        Projects
      </h1>
      <div className="flex flex-col gap-8">
        {projects?.map(project=><Project key={project.id} project={project}></Project>)}
      </div>
      
    </div>
  );
};

export default Projects;
