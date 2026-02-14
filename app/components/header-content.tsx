"use client";

import { Button } from "./ui/button";
import { House, Menu } from "lucide-react";
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
    <div
      className={cn(
        "max-w-225 px-6 h-15 bg-Myblue outline outline-Mydark-blue mx-5 text-Mydark-blue",
        "flex flex-row justify-between items-center rounded-full",
        "sm:px-0 sm:h-28 sm:outline-none sm:mx-0 sm:bg-MyPapaya sm:text-black",
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
        <Menu className={cn("", "sm:hidden")} />

        <Button
          onClick={handleContactClick}
          className={cn("hidden rounded-full", "sm:block")}
        >
          Contato
        </Button>
      </div>
    </div>
  );
};

export default HeaderContent;
