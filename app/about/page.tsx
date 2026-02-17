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
  return (
    <div className="">
      <AboutContainer />
    </div>
  );
};

export default About;
