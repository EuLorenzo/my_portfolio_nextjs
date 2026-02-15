"use client";

import Image from "next/image";
import type { FC } from "react";
import AboutCard from "../about-card";
import AboutImagesCard from "../about-images-card";
import GameContainer from "./game-container";
import { cn } from "@/lib/utils";

interface AboutContainerProps {}

const AboutContainer: FC<AboutContainerProps> = () => {
  return (
    <div
      className={cn(
        "items-start",
        "flex sm:items-center justify-center w-full",
      )}
      style={{ minHeight: "calc(100vh - 112px)" }}
    >
      <div className="flex flex-row justify-evenly w-full">
        <div className={cn("hidden", "sm:flex flex-col justify-around")}>
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

        <div className={cn("hidden", "sm:flex flex-col justify-around")}>
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
