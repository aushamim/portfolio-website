import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="min-h-screen py-20 px-5 xl:p-20">
      <div>
        <h1 className="text-4xl font-semibold text-center">
          Some of My Projects
        </h1>
        <span className="w-32 h-1 mt-1 mx-auto bg-purple-500 rounded block"></span>
      </div>

      <div className="mt-16">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
