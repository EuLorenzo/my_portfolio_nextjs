"use client";

import Image from "next/image";
import type { FC } from "react";
import GameContainer from "./game-container";
import AboutCuriositiesCard from "../about/about-curiosities-card";
import AboutCard from "../about/about-card";
import { cn } from "@/lib/utils";
import AboutSlider from "../about/about-slide";
import ManualSlider from "../ManualSlider";
import AboutImageCard from "../about/about-image-card";

interface AboutContainerProps {}

const AboutContainer: FC<AboutContainerProps> = () => {
  return (
    <div>
      <div className="flex flex-row justify-evenly">
        <div className={cn("hidden", "lg:flex flex-col justify-around")}>
          <AboutCuriositiesCard
            imageSrc="/lorenzo/guitar.png"
            content="Eu toco violão há 3 anos."
          />

          <AboutCuriositiesCard
            imageSrc="/lorenzo/basketball.png"
            content="Jordan melhor que Lebron!"
          />
        </div>

        <div className="md:hidden w-full">
          <ManualSlider
            slides={[
              <AboutCard key={"About-card"} />,
              <AboutImageCard key="About-image-card" />,
            ]}
          />
        </div>

        <div className={cn("hidden", "md:flex")}>
          <AboutCard />
        </div>

        <div className={cn("hidden", "lg:flex flex-col justify-around")}>
          <AboutCuriositiesCard
            imageSrc="/lorenzo/gilberto.png"
            content="Meu álbum favorito."
          />

          <AboutCuriositiesCard
            imageSrc="/lorenzo/glove.png"
            content="Luto há mais de 1 ano."
          />
        </div>
      </div>

      <div className="mt-10 mx-5">
        <GameContainer />
      </div>
    </div>
  );
};

export default AboutContainer;
