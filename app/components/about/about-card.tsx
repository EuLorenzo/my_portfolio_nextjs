import Image from "next/image";
import { motion } from "framer-motion";
import { libre_baskerville } from "../fonts";
import { cn } from "@/lib/utils";

const AboutCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      whileHover={"hover"}
      className={cn(
        "flex flex-col justify-center outline outline-black rounded-lg p-5 gap-5 max-w-220",
        "md:justify-between md:flex-row md:m-auto ",
      )}
    >
      <div className="rounded-lg overflow-hidden bg-[#0C0C0A] flex justify-center items-center">
        <div
          className={cn(
            "max-h-112 max-w-125 flex justify-center items-center",
            "md:max-w-100",
          )}
        >
          <Image
            src="/lorenzo/main.jpg"
            alt="Imagem do Lorenzo"
            width={600}
            height={600}
          />
        </div>
      </div>

      <motion.div
        className={cn(
          "outline rounded-lg px-2 py-5 w-full",
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
          Lorenzo Frinhani é estudante de Engenharia de Software. Atua como
          desenvolvedor Full Stack onde une lógica, performance e experiência do
          usuário para criar interfaces funcionais, intuitivas e bem
          estruturadas. Possui facilidade em transitar entre diferentes camadas
          de um projeto, desde a concepção até a implementação, sempre buscando
          soluções eficientes e organizadas.
        </p>

        <br />

        <p>
          Fora do ambiente acadêmico e profissional, Lorenzo tem no basquetebol
          seu principal hobby. Também é um apaixonado por música e dedica parte
          do seu tempo ao estudo musical, fortalecendo sua sensibilidade
          criativa. Essa combinação entre tecnologia, esporte e arte reflete sua
          busca constante por evolução pessoal e profissional, com o objetivo de
          desenvolver soluções que impactem positivamente a vida das pessoas.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutCard;
