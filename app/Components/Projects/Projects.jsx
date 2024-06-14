import React from "react";
import ProjectCard from "./ProjectCard";
import { promises as fs } from "fs";

const Projects = async () => {
  const file = await fs.readFile(process.cwd() + "/projects.json", "utf8");
  const projects = JSON.parse(file);
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
