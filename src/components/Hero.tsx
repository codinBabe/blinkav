"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 8000); // Stay on each slide for 8s

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Image layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgImages[index]}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            initial={{ opacity: 0, scale: 1.3, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -100 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              backgroundImage: `url(${bgImages[index]})`,
            }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay tint */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Text layer */}
      <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={bgTexts[index]}
            className="text-white text-4xl md:text-8xl font-bold whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            {bgTexts[index]}
          </motion.h1>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
