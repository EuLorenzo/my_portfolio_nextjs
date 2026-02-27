"use client";

import GameContainer from "./game-container";
import AboutCuriositiesCard from "../about/about-curiosities-card";
import AboutCard from "../about/about-card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const AboutContainer = () => {
  return (
    <motion.div className={cn("max-w-375 mx-auto")}>
      <div
        className={cn("flex flex-row justify-between py-1 mx-auto gap-5 px-5")}
      >
        <div className={cn("hidden", "xl:flex flex-col justify-around")}>
          <AboutCuriositiesCard
            fadePosition="left"
            imageSrc="/lorenzo/guitar.png"
            content="Eu toco violão há 3 anos."
          />

          <AboutCuriositiesCard
            delay={0.2}
            fadePosition="left"
            imageSrc="/lorenzo/basketball.png"
            content="Jordan melhor que Lebron!"
          />
        </div>

        <div className={cn("w-full max-w-220", "md:mx-auto")}>
          <AboutCard />
        </div>

        <div className={cn("hidden", "xl:flex flex-col justify-around")}>
          <AboutCuriositiesCard
            delay={0.4}
            fadePosition="right"
            imageSrc="/lorenzo/gilberto.png"
            content="Meu álbum favorito."
          />

          <AboutCuriositiesCard
            delay={0.6}
            fadePosition="right"
            imageSrc="/lorenzo/glove.png"
            content="Luto há mais de 1 ano."
          />
        </div>
      </div>

      <div className="mt-10 mx-5">
        <GameContainer />
      </div>
    </motion.div>
  );
};

export default AboutContainer;
