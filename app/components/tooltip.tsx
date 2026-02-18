import React from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { followCursor, Placement } from "tippy.js/headless";
import Image from "next/image";
import { cn } from "@/lib/utils";

type TooltipProps = {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt?: string;
  width?: number;
  rounded?: number;
  placement?: Placement;
};

export function Tooltip({
  children,
  imageSrc,
  imageAlt = "preview",
  width = 220,
  rounded = 14,
  placement = "top",
}: TooltipProps) {
  return (
    <Tippy
      placement={placement}
      followCursor={true}
      plugins={[followCursor]}
      offset={[16, 16]}
      animation={false}
      interactive={false}
      popperOptions={{
        modifiers: [{ name: "preventOverflow", options: { padding: 8 } }],
      }}
      render={(attrs) => (
        <div
          tabIndex={-1}
          className={cn(`overflow-hidden shadow-2xl shadow-black/50`)}
          style={{ borderRadius: rounded, width }}
          {...attrs}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={width}
            height={width}
            unoptimized
          />
        </div>
      )}
    >
      <span className="cursor-pointer">{children}</span>
    </Tippy>
  );
}
