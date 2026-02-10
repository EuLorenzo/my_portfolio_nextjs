"use client";

import Image from "next/image";
import type { FC } from "react";
import AboutCard from "../about-card";
import AboutImagesCard from "../about-images-card";
import GameContainer from "./game-container";

interface AboutContainerProps {}

const AboutContainer: FC<AboutContainerProps> = () => {
  return (
    <div>
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col justify-around">
          <AboutImagesCard
            imageSrc="/lorenzo/guitar.png"
            content="Eu toco violão há 3 anos."
          />

          <AboutImagesCard
            imageSrc="/lorenzo/basketball.png"
            content="Jordan melhor que Lebron!"
          />
        </div>

        <AboutCard />

        <div className="flex flex-col justify-around">
          <AboutImagesCard
            imageSrc="/lorenzo/gilberto.png"
            content="Meu álbum favorito."
          />

          <AboutImagesCard
            imageSrc="/lorenzo/glove.png"
            content="Luto há mais de 1 ano."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
