"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const bgImages = [
  "/images/iper-hero-1.webp",
  "/images/iper-hero-2.webp",
  "/images/iper-hero-3.webp",
  "/images/iper-hero-4.webp",
  "/images/iper-hero-5.webp",
];

const bgTexts = [
  "Work Smarter Live Better",
  "Residential Solutions",
  "Workplace Solutions",
  "Audio Visual Solutions",
  "Security Solutions",
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);
  const total = bgImages.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 10000);

    return () => clearTimeout(timer);
  }, [index]);

  const goToSlide = (i: number) => setIndex(i);
  const prevSlide = () => setIndex((index - 1 + total) % total);
  const nextSlide = () => setIndex((index + 1) % total);

  return (
    <section className="relative h-[70vh] xl:h-[90vh] 2xl:h-screen w-full overflow-hidden">
      {/* Image layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgImages[index]}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            initial={{ opacity: 0, scale: 1.1, x: -100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 1 }}
            transition={{
              duration: 3.5,
            }}
            style={{
              backgroundImage: `url(${bgImages[index]})`,
            }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay tint */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text layer */}
      <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={bgTexts[index]}
            className="sangBlue-font text-white text-[42.56px]  md:text-6xl leading-tight lg:text-8xl font-bold lg:whitespace-nowrap"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {bgTexts[index] === "Work Smarter Live Better" ? (
              <>
                <span className="block lg:inline whitespace-nowrap">
                  Work Smarter
                </span>
                <br className="hidden lg:block" />
                <span className="block lg:inline">Live Better</span>
              </>
            ) : (
              bgTexts[index]
            )}
          </motion.h1>
        </AnimatePresence>
      </div>
      {/* Navigation dots */}
      <div className="absolute bottom-6 left-6 right-6 md:px-6 z-30 flex justify-between items-center">
        {/* Dots on the left */}
        <div className="flex gap-3">
          {bgImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label="Go to slide"
              className={`relative w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                i === index ? "bg-white shadow-lg" : "bg-black"
              }`}
            >
              <span
                className={`block rounded-full transition-all duration-300 shadow ${
                  i === index
                    ? "bg-gray-300 w-2.5 h-2.5 shadow-lg"
                    : "bg-white w-1.5 h-1.5"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Arrows on the right */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            onMouseEnter={() => setHovered("left")}
            onMouseLeave={() => setHovered(null)}
            className={`relative bg-[#edebe9] text-black shadow transition-all duration-300 ease-in-out ${
              hovered === "left"
                ? "rounded-l-full rounded-r-2xl p-3"
                : "rounded-full p-3"
            }`}
            aria-label="Previous"
          >
            <div className="relative flex items-center gap-1">
              <ChevronLeftIcon className="w-4 h-4 md:w-6 md:h-6 z-10" />
              {hovered === "left" && (
                <motion.span
                  className="h-[2px] bg-black origin-left -ml-5"
                  initial={{ width: 0 }}
                  animate={{ width: 35 }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </button>

          <button
            onClick={nextSlide}
            onMouseEnter={() => setHovered("right")}
            onMouseLeave={() => setHovered(null)}
            className={`relative bg-[#edebe9] text-black shadow transition-all duration-300 ease-in-out ${
              hovered === "right"
                ? "rounded-r-full rounded-l-2xl p-3"
                : "rounded-full p-3"
            }`}
            aria-label="Next"
          >
            <div className="relative flex items-center gap-1">
              {hovered === "right" && (
                <motion.span
                  className="h-[2px] bg-black origin-right -mr-5"
                  initial={{ width: 0 }}
                  animate={{ width: 35 }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <ChevronRightIcon className="w-4 h-4 md:w-6 md:h-6 z-10" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
