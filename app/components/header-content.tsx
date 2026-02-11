"use client";

import { Button } from "./ui/button";
import { House } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import HeaderLink from "./header-link";
import { cn } from "@/lib/utils";
import Link from "next/link";

const links = [
  { href: "/projects", label: "Projetos" },
  { href: "/about", label: "Sobre" },
  { href: "/explore", label: "Explore" },
];

const HeaderContent = () => {
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
    <div className="flex flex-row justify-between h-28 items-center w-225 m-auto">
      <div className="h-4">
        <House
          color={"black"}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>

      <div className="flex flex-row gap-6 h-4">
        {links.map((link) => (
          <HeaderLink key={link.href} href={link.href} label={link.label} />
        ))}
      </div>

      <Button onClick={handleContactClick} className={cn("rounded-full")}>
        Contato
      </Button>
    </div>
  );
};

export default HeaderContent;
