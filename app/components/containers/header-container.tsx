"use client";

import type { FC } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import HeaderContent from "../header-content";

interface HeaderContainerProps {}

const HeaderContainer: FC<HeaderContainerProps> = () => {
  const { scrollY } = useScroll();

  const [floating, setFloating] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldFloat = latest > 80;
    setFloating(shouldFloat);
  });

  return (
    <>
      <div
        id="contato"
        className={cn(
          "transition-opacity",
          floating ? "opacity-0" : "opacity-100",
        )}
      >
        <HeaderContent />
      </div>

      <motion.div
        initial={false}
        animate={floating ? "show" : "hide"}
        variants={{
          show: { y: 0, opacity: 1, pointerEvents: "auto" },
          hide: { y: -20, opacity: 0, pointerEvents: "none" },
        }}
        transition={{ duration: 0.22 }}
        className="fixed top-4 left-0 right-0 z-50"
      >
        <div
          className={cn(
            "mx-auto w-225",
            "rounded-full border bg-background/70 backdrop-blur",
            "shadow-sm",
          )}
        >
          <div className="h-15 flex items-center justify-center">
            <div className="flex flex-row justify-between items-center w-225 px-4">
              <HeaderContent />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HeaderContainer;
