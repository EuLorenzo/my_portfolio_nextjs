import { cn } from "@/lib/utils";
import { libre_baskerville } from "../components/fonts";
import ProjectsContainer from "../components/containers/projects-container";

const Projects = () => {
  return (
    <div className="max-w-225 mx-auto">
      <ProjectsContainer page="projects" howManyItems={"full"} />
    </div>
  );
};

export default Projects;
