"use client";

import type { FC, ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

interface ManualSliderProps {
  slides: ReactNode[];
  className?: string;
}

const ManualSlider: FC<ManualSliderProps> = ({ slides, className }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className={cn("relative w-full", className)}>
      {/* viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        {/* container */}
        <div className="flex items-stretch">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={cn(
                "shrink-0",
                // cada slide ocupa 100% no mobile, e vai “cabendo mais” em telas maiores se quiser
                "w-full max-w-220",
              )}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* controles */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Anterior"
        className={cn(
          "absolute left-3 top-1/2 -translate-y-1/2",
          "rounded-full border border-black bg-white/90 p-2",
          "hover:bg-white",
        )}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={scrollNext}
        aria-label="Próximo"
        className={cn(
          "absolute right-3 top-1/2 -translate-y-1/2",
          "rounded-full border border-black bg-white/90 p-2",
          "hover:bg-white",
        )}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ManualSlider;
