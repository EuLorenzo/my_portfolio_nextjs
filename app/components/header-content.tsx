"use client";

import { Button } from "./ui/button";
import { House, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import HeaderLink from "./header-link";
import { cn } from "@/lib/utils";
import Link from "next/link";
import HeaderContainer from "./containers/header-container";
import { useState } from "react";
import HeaderCommand from "./header-command";

const links = [
  { href: "/projects", label: "Projetos" },
  { href: "/about", label: "Sobre" },
  { href: "/explore", label: "Explore" },
];

const HeaderContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleContactClick = async () => {
    if (pathname === "/") {
      document
        .getElementById("contato-footer")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contato");
    }
  };

  return (
    <div
      className={cn(
        "max-w-225 px-6 h-15 bg-Mydark-blue outline mx-5 text-white",
        "flex flex-row justify-between items-center rounded-full",
        "sm:px-0 sm:h-28 sm:outline-none sm:mx-0 sm:bg-MyPapaya sm:text-black sm:w-full",
      )}
    >
      <div className="h-4">
        <House className="cursor-pointer" onClick={() => router.push("/")} />
      </div>

      <div className={cn("hidden", "sm:flex flex-row gap-6 h-4")}>
        {links.map((link) => (
          <HeaderLink key={link.href} href={link.href} label={link.label} />
        ))}
      </div>

      <div>
        <Menu
          className={cn("", "sm:hidden")}
          onClick={() => setIsOpen(!isOpen)}
        />

        <Button
          onClick={handleContactClick}
          className={cn("hidden rounded-full", "sm:block")}
        >
          Contato
        </Button>

        <HeaderCommand isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default HeaderContent;
