import type { Dispatch, FC, SetStateAction } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/app/components/ui/command";
import { cn } from "@/lib/utils";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projetos" },
  { href: "/about", label: "Sobre" },
  { href: "/explore", label: "Explore" },
];

interface HeaderCommandProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const HeaderCommand: FC<HeaderCommandProps> = ({ isOpen, setIsOpen }) => {
  return (
    <CommandDialog
      showCloseButton={false}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Command className="">
        <CommandList className="transition-colors">
          {links.map((link, key) => (
            <Link
              key={key}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center justify-center font-medium transition-colors py-3 cursor-pointer",
                "hover:text-Myblue",
              )}
            >
              {link.label}
            </Link>
          ))}
        </CommandList>
      </Command>
    </CommandDialog>
  );
};

export default HeaderCommand;
