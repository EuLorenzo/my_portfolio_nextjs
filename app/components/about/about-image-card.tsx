import { cn } from "@/lib/utils";
import type { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface AboutImageCardProps {}

const AboutImageCard: FC<AboutImageCardProps> = () => {
  return (
    <motion.div
      initial="initial"
      whileHover={"hover"}
      className={cn(
        "justify-center",
        "sm:justify-between flex flex-row outline outline-black rounded-lg p-5 w-220 mx-5",
      )}
    >
      <div
        className={cn(
          "hidden",
          "sm:block sm:w-[200px] rounded-lg overflow-hidden bg-amber-50",
        )}
      >
        <Image
          src="/lorenzo/main.jpg"
          alt="Imagem do Lorenzo"
          width={400}
          height={400}
        />
      </div>
    </motion.div>
  );
};

export default AboutImageCard;
