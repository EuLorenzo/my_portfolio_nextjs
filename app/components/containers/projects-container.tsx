import type { FC } from "react";
import { libre_baskerville } from "../fonts";
import { projectsArray } from "@/app/projects/projectType";
import ProjectsCard from "../projects-card";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface ProjectsContainerProps {
  page: "land-page" | "projects";
  howManyItems?: number | "full";
}

const titleAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 },
};

const ProjectsContainer: FC<ProjectsContainerProps> = ({
  page,
  howManyItems,
}) => {
  const howManyItemsToShow = howManyItems === "full" ? undefined : howManyItems;

  return (
    <div className={cn("px-5")}>
      <motion.h1
        {...titleAnimation}
        className={cn(
          libre_baskerville.className,
          page === "projects" && "h-70 flex items-center justify-center",
          `mb-3`,
          "",
        )}
      >
        Projetos
      </motion.h1>

      <div className="flex flex-col gap-4">
        {projectsArray.slice(0, howManyItemsToShow).map((p) => (
          <ProjectsCard key={p.title} project={p} />
        ))}
      </div>

      {page === "land-page" && (
        <div className="w-full bg-Myblue mt-4 rounded-full p-2">
          <p
            className={cn(libre_baskerville.className, "text-sm text-MyPapaya")}
          >
            Ver todos projetos
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectsContainer;
