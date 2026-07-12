"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";

import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: React.ReactElement[];
  initialScroll?: number;
}

export type CardData = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

type CarouselContextType = {
  onCardClose: (index: number) => void;
  currentIndex: number;
};

export const CarouselContext = createContext<CarouselContextType>({
  onCardClose: () => undefined,
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0,
}: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollability = () => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = carousel;

    setCanScrollLeft(scrollLeft > 0);

    setCanScrollRight(
      Math.ceil(scrollLeft + clientWidth) < scrollWidth,
    );
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    carousel.scrollLeft = initialScroll;
    checkScrollability();

    const handleResize = () => {
      checkScrollability();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [initialScroll, items.length]);

  const scrollLeft = () => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    carousel.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    carousel.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const isMobile = () => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.innerWidth < 768;
  };

  const handleCardClose = (index: number) => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const mobile = isMobile();

    const cardWidth = mobile ? 224 : 384;
    const gap = 16;

    const scrollPosition = (cardWidth + gap) * index;

    carousel.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  return (
    <CarouselContext.Provider
      value={{
        onCardClose: handleCardClose,
        currentIndex,
      }}
    >
      <div className="relative w-full">
        <div
          ref={carouselRef}
          onScroll={checkScrollability}
          className="flex w-full overflow-x-auto overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:py-20"
        >
          <div
            className={cn(
              "pointer-events-none absolute right-0 z-20 h-full w-[5%]",
              "bg-gradient-to-l from-white to-transparent",
              "dark:from-neutral-950",
            )}
          />

          <div
            className={cn(
              "mx-auto flex max-w-7xl flex-row justify-start gap-4 pl-4",
            )}
          >
            {items.map((item, index) => (
              <motion.div
                key={`card-${index}`}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                }}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mr-4 flex justify-end gap-2 md:mr-10">
          <button
            type="button"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll carousel left"
            className={cn(
              "relative z-40 flex h-10 w-10 items-center justify-center",
              "rounded-full bg-gray-100 transition",
              "hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50",
              "dark:bg-neutral-800 dark:hover:bg-neutral-700",
            )}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-600 dark:text-gray-200" />
          </button>

          <button
            type="button"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll carousel right"
            className={cn(
              "relative z-40 flex h-10 w-10 items-center justify-center",
              "rounded-full bg-gray-100 transition",
              "hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50",
              "dark:bg-neutral-800 dark:hover:bg-neutral-700",
            )}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-600 dark:text-gray-200" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

interface CardProps {
  card: CardData;
  index: number;
  layout?: boolean;
}

export const Card = ({
  card,
  index,
  layout = false,
}: CardProps) => {
  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const { onCardClose } = useContext(CarouselContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useOutsideClick(containerRef, () => {
    if (open) {
      handleClose();
    }
  });

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-y-auto">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />

            <motion.div
              ref={containerRef}
              layoutId={
                layout
                  ? `card-${card.title}-${index}`
                  : undefined
              }
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 30,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className={cn(
                "relative z-[60] mx-auto my-10 h-fit max-w-5xl",
                "rounded-3xl bg-white p-4 font-sans shadow-2xl",
                "md:p-10 dark:bg-neutral-900",
              )}
            >
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close card"
                className="sticky top-4 right-0 ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-black transition hover:scale-105 dark:bg-white"
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>

              <motion.p
                layoutId={
                  layout
                    ? `category-${card.title}-${index}`
                    : undefined
                }
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>

              <motion.h2
                layoutId={
                  layout
                    ? `title-${card.title}-${index}`
                    : undefined
                }
                className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
              >
                {card.title}
              </motion.h2>

              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={handleOpen}
        layoutId={
          layout
            ? `card-${card.title}-${index}`
            : undefined
        }
        className={cn(
          "relative z-10 flex h-80 w-56 flex-col",
          "items-start justify-start overflow-hidden rounded-3xl",
          "bg-gray-100 text-left",
          "md:h-[40rem] md:w-96",
          "dark:bg-neutral-900",
        )}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/70 via-black/10 to-transparent" />

        <div className="relative z-40 p-6 md:p-8">
          <motion.p
            layoutId={
              layout
                ? `category-${card.title}-${index}`
                : undefined
            }
            className="text-left font-sans text-sm font-medium text-white md:text-base"
          >
            {card.category}
          </motion.p>

          <motion.h3
            layoutId={
              layout
                ? `title-${card.title}-${index}`
                : undefined
            }
            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold text-white [text-wrap:balance] md:text-3xl"
          >
            {card.title}
          </motion.h3>
        </div>

        <BlurImage
          src={card.src}
          alt={card.title}
          className="absolute inset-0 z-10 h-full w-full object-cover"
        />
      </motion.button>
    </>
  );
};

type BlurImageProps =
  React.ImgHTMLAttributes<HTMLImageElement>;

export const BlurImage = ({
  src,
  className,
  alt,
  onLoad,
  ...rest
}: BlurImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <img
      {...rest}
      src={src}
      alt={alt || "Carousel image"}
      loading="lazy"
      decoding="async"
      onLoad={(event) => {
        setIsLoading(false);
        onLoad?.(event);
      }}
      className={cn(
        "transition duration-500",
        isLoading
          ? "scale-105 blur-sm"
          : "scale-100 blur-0",
        className,
      )}
    />
  );
};