"use client";

import Image from "next/image";
import type { FC } from "react";
import AboutCard from "../about-card";
import AboutImagesCard from "../about-images-card";
import GameContainer from "./game-container";
import { cn } from "@/lib/utils";
import { AboutCuriosities } from "@/app/helpers/about-curiosities";

interface AboutContainerProps {}

const AboutContainer: FC<AboutContainerProps> = () => {
  return (
    <div
      className={cn(
        "flex items-start justify-center w-full h-[calc(100vh-200px)]",
        "mb1:h-[calc(100vh-300px)]",
        "sm:items-center sm:h-[calc(100vh-112px)]",
      )}
    >
      <div className="flex flex-row justify-evenly w-full">
        <div className={cn("hidden justify-around flex-col", "sm:flex")}>
          {AboutCuriosities.slice(0, 2).map((curiosity, index) => (
            <AboutImagesCard
              key={index}
              imageSrc={curiosity.imageUrl}
              content={curiosity.curiosity}
            />
          ))}
        </div>

        <AboutCard />

        <div className={cn("hidden flex-col justify-around", "sm:flex")}>
          {AboutCuriosities.slice(2, 4).map((curiosity, index) => (
            <AboutImagesCard
              key={index}
              imageSrc={curiosity.imageUrl}
              content={curiosity.curiosity}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
