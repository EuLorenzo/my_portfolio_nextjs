import Image from "next/image";
import type { FC } from "react";
import { motion } from "framer-motion";
import { shantell_sans } from "./fonts";
import { floatingArray } from "../helpers/framer-floaters";

interface AboutImagesCardProps {
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

const AboutImagesCard: FC<AboutImagesCardProps> = ({ imageSrc, content }) => {
  const floatVariant = floatingArray[returnRandomNumber()];

  return (
    <motion.div
      initial="initial"
      whileHover={"hover"}
      animate={floatVariant.animate}
      variants={containerVariant}
      className="flex flex-col items-center"
    >
      <Image src={imageSrc} alt="Imagem" width={200} height={200} />
      <motion.p
        className={`${shantell_sans.className}`}
        variants={contentVariant}
      >
        {content}
      </motion.p>
    </motion.div>
  );
};

const returnRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 4);

  return randomNumber;
};

export default AboutImagesCard;
