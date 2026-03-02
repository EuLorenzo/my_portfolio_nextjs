import type { FC } from "react";
import { libre_baskerville } from "../fonts";
import { projectsArray } from "@/app/projects/projectType";
import ProjectsCard from "../projects-card";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

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
        <Link href={"/projects"}>
          <motion.div
            className={cn(
              "mt-4 bg-Mydark-blue outline text-white rounded-full flex flex-row items-center p-3 overflow-hidden gap-2 cursor-pointer hover:bg-Mydark-blue/95 transition-colors",
            )}
            initial="initial"
            whileHover={"hover"}
          >
            <motion.div
              variants={{
                initial: { opacity: 1, width: 1, x: -45 },
                hover: {
                  width: "auto",
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <MoveRight />
            </motion.div>

            <p className={cn(libre_baskerville.className, "text-sm")}>
              Ver todos projetos
            </p>
          </motion.div>
        </Link>
      )}
    </div>
  );
};

export default ProjectsContainer;
