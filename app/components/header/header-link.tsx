import type { FC } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface HeaderLinkProps {
  href: string;
  label: string;
}

const HeaderLink: FC<HeaderLinkProps> = ({ href, label }) => {
  const pathname = usePathname();

  return (
    <div className="h-4">
      <div key={href} className="box-border">
        <Link
          href={href}
          className={
            "font-medium hover:text-Myblue transition-colors bg-transparent"
          }
        >
          {label}
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: pathname === href ? 1 : 0 }}
        className={cn(
          pathname === href ? "block" : "none",
          "w-1 h-1 bg-gray-400 rounded-full m-auto hover:bg-Myblue transition-colors",
        )}
      ></motion.div>
    </div>
  );
};

export default HeaderLink;
