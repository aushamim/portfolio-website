import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = async () => {
  const getProjects = async () => {
    const res = await fetch(`./projects.json`);
    return res.json();
  };
  const projects = await getProjects();
  return (
    <div className="min-h-screen py-20 px-5 xl:p-20">
      <div>
        <h1 className="text-4xl font-semibold text-center">
          Some of My Projects
        </h1>
        <span className="w-32 h-1 mt-1 mx-auto bg-purple-500 rounded block"></span>
      </div>

      <div className="mt-16">
        {projects?.map((project) => (
          <ProjectCard
            key={projects?.indexOf(project)}
            sl={projects?.indexOf(project) + 1}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
