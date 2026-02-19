"use client";

import GameContainer from "./game-container";
import AboutCuriositiesCard from "../about/about-curiosities-card";
import AboutCard from "../about/about-card";
import { cn } from "@/lib/utils";
import ManualSlider from "../ManualSlider";
import AboutImageCard from "../about/about-image-card";

const AboutContainer = () => {
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

        <div className={cn("w-full")}>
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
