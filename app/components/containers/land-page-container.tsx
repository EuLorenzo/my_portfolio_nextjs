import { Tooltip } from "../tooltip";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const titlesAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 },
};

const LandPageContainer = () => {
  return (
    <div
      className={cn(
        "flex text-4xl text-Mydark-blue w-full px-5 overflow-hidden",
      )}
    >
      <motion.div
        initial="initial"
        animate="animate"
        className="flex flex-col text-4xl gap-4 margin-auto leading-11"
      >
        <motion.h1 {...titlesAnimation}>
          Olá, como vai? Eu sou o{" "}
          <Tooltip imageSrc="/lorenzo/main.jpg" placement="right-start">
            <span className="highlitedSpan">Lorenzo</span>
          </Tooltip>
          .
        </motion.h1>

        <motion.h1
          {...titlesAnimation}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <Tooltip imageSrc="/gifs/cat_coding.gif" placement="left-start">
            <span className="highlitedSpan">Desenvolvedor Full-Stack</span>
          </Tooltip>{" "}
          e cursando Engenharia de Software.
        </motion.h1>
        <motion.h1
          {...titlesAnimation}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Também um grande fã de{" "}
          <Tooltip
            imageSrc="/gifs/basketball_guy.gif"
            placement="bottom-start"
            width={250}
          >
            <span className="highlitedSpan">basquetebol</span>
          </Tooltip>
          .
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default LandPageContainer;
