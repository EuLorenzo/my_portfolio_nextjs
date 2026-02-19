import type { FC } from "react";
import { libre_baskerville } from "../fonts";
import { projectsArray } from "@/app/projects/projectType";
import ProjectsCard from "../projects-card";
import { cn } from "@/lib/utils";

interface ProjectsContainerProps {
  howManyItems?: number;
}

const ProjectsContainer: FC<ProjectsContainerProps> = ({ howManyItems }) => {
  return (
    <div className={cn("px-5")}>
      <h1 className={cn(libre_baskerville.className, `mb-3`, "")}>Projetos</h1>

      <div className="flex flex-col gap-4">
        {projectsArray.slice(0, howManyItems ?? undefined).map((p) => (
          <ProjectsCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;
