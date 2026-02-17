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
    <div className={cn("mx-5")}>
      <div className={cn("hidden")}>
        {AboutCuriosities.slice(0, 2).map((curiosity, index) => (
          <AboutCuriositiesCard
            key={index}
            imageSrc={curiosity.imageUrl}
            content={curiosity.curiosity}
          />
        ))}
      </div>

      <div className={cn("")}>
        <ManualSlider
          slides={[
            <AboutCard key="About-card" />,
            <AboutImageCard key={"About-image"} />,
          ]}
        />
      </div>

      <div className={cn("hidden")}>
        <AboutCard />
      </div>

      <div className={cn("hidden")}>
        {AboutCuriosities.slice(2, 4).map((curiosity, index) => (
          <AboutCuriositiesCard
            key={index}
            imageSrc={curiosity.imageUrl}
            content={curiosity.curiosity}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutContainer;
