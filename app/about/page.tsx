"use client";

import { useState, type FC } from "react";
import AboutContainer from "../components/containers/about-container";
import GameContainer from "../components/containers/game-container";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import AboutSlider from "../components/about/about-slide";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="">
      <motion.div
        className={cn(
          "mt-10 h-[calc(100vh-275px)] bg-green-100",
          "mb1:h-[calc(100vh-350px)] mb1:bg-red-100",
          "sm:mt-0 sm:h-[calc(100vh-112px)] sm:bg-amber-100",
          opacity.get() === 0 ? "pointer-events-none" : "pointer-events-auto",
        )}
        style={{
          minHeight: "",
          position: "sticky",
          opacity,
          top: 0,
        }}
      >
        <AboutContainer />
      </motion.div>

      <div className={cn("sm:hidden")}>
        <AboutSlider />
      </div>

      <motion.div
        className={cn(
          "flex items-start justify-center pt-10 h-[calc(100vh-275px)]",
          "sm:h-[calc(100vh-112px)]",
        )}
      >
        <GameContainer />
      </motion.div>
    </div>
  );
};

export default About;
