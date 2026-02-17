"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import HeaderContent from "../header-content";

const HeaderContainer = () => {
  const { scrollY } = useScroll();

  const [floating, setFloating] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldFloat = latest > 80;
    const isFloating = shouldFloat && window.innerWidth > 715;
    setFloating(isFloating);
  });

  return (
    <>
      <div
        id="contato"
        className={cn(
          "fixed top-5 w-full max-w-225 m-auto z-50",
          "sm:relative sm:top-0",
          "transition-opacity",
          floating ? "opacity-0" : "opacity-100",
        )}
      >
        <HeaderContent />
      </div>

      <div className={cn("h-25", "sm:hidden")} />

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
            "mx-auto max-w-225 rounded-full border bg-background/70 backdrop-blur shadow-sm",
            "sm:mx-5",
            "md:mx-auto",
          )}
        >
          <div className="h-15 flex items-center justify-center">
            <div
              className={cn(
                "flex flex-row justify-between items-center w-225",
                "md:px-4",
              )}
            >
              <HeaderContent />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HeaderContainer;
