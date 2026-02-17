import type { FC } from "react";
import { ProjectType } from "../projects/projectType";
import Image from "next/image";
import { motion } from "framer-motion";
import { libre_baskerville } from "./fonts";
import { cn } from "@/lib/utils";

interface ProjectsCardProps {
  project: ProjectType;
}

const cardVariants = {
  initial: {},
  hover: { backgroundColor: "rgba(0, 0, 0, 0.1)", outlineColor: "black" },
};

const paragraphVariants = {
  initial: { opacity: 0, height: 0 },
  hover: { opacity: 1, height: "auto" },
};

const skillsVariants = {
  initial: { opacity: 0, height: 0 },
  hover: { opacity: 1, height: "auto" },
};

const imageVariants = {
  initial: {
    y: 0,
    rotate: 0,
    scale: 1,
  },

  hover: {
    y: [-4, 4, -4], // sobe e desce
    rotate: [-1, 1, -1], // micro rotação],

    transition: {
      duration: 2.5,
      repeat: Infinity,
    },
  },
};

const ProjectsCard: FC<ProjectsCardProps> = ({ project }) => {
  const isRight = project.imagePosition === "right";

  const imageContainer = (
    <motion.div
      variants={imageVariants}
      className={cn(
        "hidden",
        "sm:flex justify-center items-center w-auto h-auto",
      )}
    >
      <Image
        src={project.imagesSrc[0]}
        alt="Project Image"
        loading="eager"
        width={200}
        height={200}
      />
    </motion.div>
  );

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className={cn(
        "",
        "sm:h-112.5 rounded-2xl outline flex flex-row justify-around  p-5",
      )}
    >
      {!isRight && imageContainer}

      <div
        className={cn(
          "w-full items-center",
          "sm:w-1/2 sm:items-start flex flex-col justify-center ",
        )}
      >
        <h1 className={cn(libre_baskerville.className, `text-3xl font-bold `)}>
          {project.title}
        </h1>

        <motion.p
          className={cn("hidden", "sm:block")}
          variants={paragraphVariants}
        >
          {project.description}
        </motion.p>

        <motion.div
          variants={skillsVariants}
          className={cn(
            "hidden",
            "sm:flex flex-row mt-5 gap-2 overflow-hidden",
          )}
        >
          <SkillSpan skill={project.skills[0]} />

          <SkillSpan skill={project.skills[1]} />

          <SkillSpan skill={project.skills[2]} />
        </motion.div>
      </div>

      {isRight && imageContainer}
    </motion.div>
  );
};

const SkillSpan = ({ skill }: { skill: string }) => {
  const skillVariant = {
    initial: {},
    hover: { outlineColor: "white" },
  };

  return (
    <motion.span
      variants={skillVariant}
      className="bg-Myblue px-4 py-1 rounded-2xl text-white font-light outline"
    >
      {skill}
    </motion.span>
  );
};

export default ProjectsCard;
