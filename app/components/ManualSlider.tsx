"use client";

import type { FC, ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface ManualSliderProps {
  slides: ReactNode[];
  className?: string;
}

const ManualSlider: FC<ManualSliderProps> = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  //const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  //const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div
      className=""
      style={{
        maxWidth: "48rem",
        margin: "auto",
      }}
    >
      <div className="" ref={emblaRef} style={{}}>
        <div
          className=""
          style={{
            display: "flex",
            touchAction: "pan-y pinch-zoom",
            marginLeft: "calc(1rem * -1)",
          }}
        >
          {slides.map((slide, key) => (
            <div
              className="embla__slide"
              key={key}
              style={{ flex: "0 0 100%", minWidth: "0", paddingLeft: "1rem" }}
            >
              <div
                className="embla__slide__number"
                style={{
                  border: "0.2rem solid var(--detail-medium-contrast)",
                  borderRadius: "1.8rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "var(--slide-height)",
                  userSelect: "none",
                }}
              >
                {slide}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*
        controles

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

      */}
    </div>
  );
};

export default ManualSlider;
