import Image from "next/image";
import { motion } from "framer-motion";
import { libre_baskerville } from "../fonts";
import { cn } from "@/lib/utils";

const AboutCard = () => {
  return (
    <motion.div
      initial="initial"
      whileHover={"hover"}
      className={cn(
        "flex flex-row justify-center outline outline-black rounded-lg p-5 gap-5 max-w-220 mx-5",
        "md:justify-between sm:w-full",
      )}
    >
      <div
        className={cn(
          "hidden rounded-lg overflow-hidden bg-amber-50",
          "md:block",
        )}
      >
        <Image
          src="/lorenzo/main.jpg"
          alt="Imagem do Lorenzo"
          width={400}
          height={400}
        />
      </div>

      <motion.div
        className={cn(
          "outline rounded-lg px-2 py-5 w-100",
          "sm:w-full",
          "md:w-100",
        )}
      >
        <h1 className={`${libre_baskerville.className} text-2xl font-medium`}>
          Lorenzo{" "}
          <span className={`italic font-light ${libre_baskerville.className}`}>
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
