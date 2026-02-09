"use client";

import { Button } from "./ui/button";
import { House } from "lucide-react";
import { useRouter } from "next/navigation";
import HeaderLink from "./header-link";

const links = [
  { href: "/projects", label: "Projetos" },
  { href: "/about", label: "Sobre" },
  { href: "/explore", label: "Explore" },
];

const Header = ({}) => {
  const router = useRouter();

  return (
    <div className="flex flex-row justify-between h-28 items-center w-225 m-auto">
      <div className="h-4">
        <House
          color={"black"}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>

      <div className="flex flex-row gap-6">
        {links.map((link) => (
          <HeaderLink key={link.href} href={link.href} label={link.label} />
        ))}
      </div>

      <div className="h-4">
        <Button>Contato</Button>
      </div>
    </div>
  );
};

export default Header;
