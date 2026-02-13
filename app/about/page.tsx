"use client";

import { useState, type FC } from "react";
import AboutContainer from "../components/containers/about-container";
import GameContainer from "../components/containers/game-container";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="">
      <motion.div
        className={cn(
          opacity.get() === 0 ? "pointer-events-none" : "pointer-events-auto",
        )}
        style={{
          minHeight: "calc(100vh - 112px)",
          position: "sticky",
          opacity,
          top: 0,
          zIndex: 10,
        }}
      >
        <AboutContainer />
      </motion.div>

      <motion.div
        className={cn("flex items-center justify-center")}
        style={{ minHeight: "calc(100vh - 112px)" }}
      >
        <GameContainer />
      </motion.div>
    </div>
  );
};

export default About;
