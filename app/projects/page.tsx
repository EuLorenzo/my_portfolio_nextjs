"use client";

import ProjectsContainer from "../components/containers/projects-container";

const Projects = () => {
  return (
    <div className="max-w-225 mx-auto">
      <ProjectsContainer page="projects" howManyItems={"full"} />
    </div>
  );
};

export default Projects;
