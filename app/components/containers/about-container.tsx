"use client";

import Image from "next/image";
import type { FC } from "react";
import AboutCard from "../about/about-card";
import GameContainer from "./game-container";
import { cn } from "@/lib/utils";
import { AboutCuriosities } from "@/app/helpers/about-curiosities";
import ManualSlider from "../ManualSlider";
import AboutImageCard from "../about/about-image-card";
import AboutCuriositiesCard from "../about/about-curiosities-card";

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
      <div className={cn("flex flex-row justify-evenly w-full")}>
        <div className={cn("hidden justify-around flex-col", "lg:flex")}>
          {AboutCuriosities.slice(0, 2).map((curiosity, index) => (
            <AboutCuriositiesCard
              key={index}
              imageSrc={curiosity.imageUrl}
              content={curiosity.curiosity}
            />
          ))}
        </div>

        <div className={cn("sm:hidden w-full")}>
          <ManualSlider
            slides={[
              <AboutCard key="About-card" />,
              <AboutImageCard key={"About-image"} />,
            ]}
          />
        </div>

        <div className={cn("hidden", "sm:block")}>
          <AboutCard />
        </div>

        <div className={cn("hidden flex-col justify-around", "lg:flex")}>
          {AboutCuriosities.slice(2, 4).map((curiosity, index) => (
            <AboutCuriositiesCard
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
