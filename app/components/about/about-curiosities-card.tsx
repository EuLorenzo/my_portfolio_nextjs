import Image from "next/image";
import type { FC } from "react";
import { motion } from "framer-motion";
import { shantell_sans } from "../fonts";
import { floatingArray } from "../../helpers/framer-floaters";
import { cn } from "@/lib/utils";

interface AboutCuriositiesCardProps {
  fadePosition: "right" | "left";
  delay?: number;
  imageSrc: string;
  content: string;
}

const contentVariant = {
  initial: { opacity: 0 },
  hover: { opacity: 1 },
};

const containerVariant = {
  hover: { scale: 1.1 },
};

const AboutCuriositiesCard: FC<AboutCuriositiesCardProps> = ({
  fadePosition,
  delay = 0,
  imageSrc,
  content,
}) => {
  const floatVariant = floatingArray[returnRandomNumber()];

  return (
    <motion.div
      initial={{ opacity: 0, x: fadePosition === "left" ? "-50%" : "50%" }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1, delay } }}
    >
      <motion.div
        initial="initial"
        whileHover={"hover"}
        animate={floatVariant.animate}
        variants={containerVariant}
        className="flex flex-col items-center max-w-50 min-w-37.5"
      >
        <div className="max-w-50 min-w-37.5 ">
          <Image src={imageSrc} alt="Imagem" width={200} height={200} />
        </div>
        <motion.p
          className={cn(shantell_sans.className, "text-center")}
          variants={contentVariant}
        >
          {content}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const returnRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 4);

  return randomNumber;
};

export default AboutCuriositiesCard;
