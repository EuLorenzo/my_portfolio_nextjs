"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { motion } from "framer-motion";
import { AboutCuriosities } from "../../helpers/about-curiosities";
import { cn } from "@/lib/utils";
import { shantell_sans } from "@/app/components/fonts";

const AboutSlider = () => {
  return (
    <Marquee speed={60} gradient={false}>
      <div className="flex gap-6 py-4">
        {AboutCuriosities.map((content, i) => (
          <motion.div
            key={i}
            className="group shrink-0 flex flex-col items-center px-3"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl overflow-hidden"
            >
              <Image
                src={content.imageUrl}
                alt={content.curiosity}
                width={100}
                height={100}
              />
            </motion.div>

            <p
              className={cn(
                shantell_sans.className,
                "mt-3 max-w-[220px] text-center text-sm opacity-0 translate-y-2 transition-all",
                "group-hover:opacity-100 group-hover:translate-y-0",
              )}
            >
              {content.curiosity}
            </p>
          </motion.div>
        ))}
      </div>
    </Marquee>
  );
};

export default AboutSlider;
