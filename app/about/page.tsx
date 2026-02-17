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
          "block bg-gray-100 sm:bg-red-100",
          opacity.get() === 0 ? "pointer-events-none" : "pointer-events-auto",
        )}
        style={{
          //opacity,
          minHeight: "",
          top: 0,
        }}
      >
        <AboutContainer />
      </motion.div>

      <div className={cn("mt-20 mb-20")}>
        <AboutSlider />
      </div>

      <motion.div className={cn("h-170")}>
        <GameContainer />
      </motion.div>
    </div>
  );
};

export default About;
