import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const projectElements = projects.map((project) => {
    return (
      <div key = {project.id} >
        <ProjectItem name = {project.name} about = {project.about} technologies={project.technologies}/>
      </div>
    )
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectElements}</div>
    </div>
  );
}

export default ProjectList;
