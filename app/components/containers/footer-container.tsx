"use client";

import { Button } from "../ui/button";
import { libre_baskerville } from "../fonts";
import Image from "next/image";
import { ArrowDownToLine, Copy, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import useClock from "@/app/hooks/useClock";
import { cn } from "@/lib/utils";
import Link from "next/link";

const emailArrowVariant = {
  initial: { opacity: 1, width: 1, x: -25 },
  hover: {
    width: "auto",
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const FooterContainer = () => {
  const { getDate, getTime } = useClock();

  const email = "lorenzo.frinhani@gmail.com";

  const openResume = () => {
    console.log("RODOU");
    window.open("/resume/LorenzoFrinhani_Curriculo.pdf");
  };

  return (
    <div className="border-t border-t-gray-400 bg-gray-300">
      <div className="w-225 m-auto pt-20 pb-20">
        <div className="flex flex-col gap-5 mb-5">
          <p className="text-sm">
            Obrigado pela visita... Espero que tenha gostado!
          </p>
          <h1 className={cn(libre_baskerville.className, `text-3xl`)}>
            Se isso te assusta, pode ser uma boa coisa para tentar.
          </h1>

          <motion.div
            className="flex gap-1 items-center overflow-hidden w-min"
            initial="initial"
            whileHover={"hover"}
          >
            <motion.div variants={emailArrowVariant}>
              <MoveRight />
            </motion.div>
            <a
              className={cn(libre_baskerville.className, `text-2xl`)}
              href={mailtoLink(email)}
              target="_blank"
            >
              lorenzo.frinhani@gmail.com
            </a>
          </motion.div>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex gap-5">
            <Button
              variant={"footer_button"}
              onClick={async () => {
                await navigator.clipboard.writeText(email);
                toast("Email copiado com sucesso!");
              }}
            >
              Copiar Email <Copy />
            </Button>
            <Button variant={"footer_button"} onClick={() => openResume()}>
              Currículo <ArrowDownToLine />
            </Button>
            <Link
              href={"https://www.linkedin.com/in/lorenzofrinhani/"}
              target="_blank"
            >
              <Button variant={"footer_button"}>
                LinkedIn{" "}
                <Image
                  src={"/linkedin.png"}
                  alt="LinkedIn Icon"
                  width={24}
                  height={24}
                />
              </Button>
            </Link>
          </div>

          <div className="w-49 flex flex-col items-end">
            <p>São Paulo, SP</p>
            <p>
              {getDate()} - {getTime()}
            </p>
          </div>
        </div>
      </div>

      <div
        id="contato-footer"
        className="border-t border-t-gray-400 bg-[#DFDDDF] text-center py-7"
      >
        <p className="font-light">Copyright © Lorenzo Frinhani 2026</p>
      </div>
    </div>
  );
};

const mailtoLink = (email: string) => {
  const subject = "Contato via Portfólio";

  const body = `
  Olá,

  Vi seu portfólio e gostaria de conversar sobre oportunidades.

  Nome:
  Empresa:
  Telefone:
  `;

  return `mailto:${email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
};

export default FooterContainer;
