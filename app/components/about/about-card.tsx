import Image from "next/image";
import type { FC } from "react";
import { motion } from "framer-motion";
import { libre_baskerville } from "../fonts";
import { cn } from "@/lib/utils";

interface AboutCardProps {}

const AboutCard: FC<AboutCardProps> = () => {
  return (
    <motion.div
      initial="initial"
      whileHover={"hover"}
      className={cn("outline outline-black rounded-lg p-5")}
    >
      <div className={cn("hidden")}>
        <Image
          src="/lorenzo/main.jpg"
          alt="Imagem do Lorenzo"
          width={400}
          height={400}
        />
      </div>

      <motion.div className={cn("w-full", "outline rounded-lg px-2 py-5")}>
        <h1 className={cn(libre_baskerville.className, `text-2xl font-medium`)}>
          Lorenzo{" "}
          <span
            className={cn(libre_baskerville.className, `italic font-light`)}
          >
            Frinhani
          </span>
        </h1>

        <br />

        <p>
          Lorenzo Frinhani é estudante de Engenharia de Software, natural de
          Minas Gerais e residente no Rio Grande do Sul desde a infância. Atua
          como desenvolvedor Full Stack onde une lógica, performance e
          experiência do usuário para criar interfaces funcionais, intuitivas e
          bem estruturadas. Possui facilidade em transitar entre diferentes
          camadas de um projeto, desde a concepção até a implementação, sempre
          buscando soluções eficientes e organizadas.
        </p>

        <br />

        <p>
          Fora do ambiente acadêmico e profissional, Lorenzo tem no basquetebol
          seu principal hobby. Também é um apaixonado por música, toca violão e
          dedica parte do seu tempo ao estudo musical, fortalecendo sua
          sensibilidade criativa. Essa combinação entre tecnologia, esporte e
          arte reflete sua busca constante por evolução pessoal e profissional,
          com o objetivo de desenvolver soluções que impactem positivamente a
          vida das pessoas.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutCard;
