// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { Motion, slideInBottom } from "@/animations";

// const slides = [
//   {
//     image: "/images/hero.mp4",
//     title: "Smart Home Automation",
//   },
//   {
//     image: "/images/hero-2.jpg",
//     title: "Cinema & Audio Systems",
//   },
//   {
//     image: "/images/hero-3.jpg",
//     title: "Office Automation",
//   },
//   {
//     image: "/images/hero-4.jpg",
//     title: "Conference Room Solutions",
//   },
//   {
//     image: "/images/hero-5.jpg",
//     title: "Advanced CCTV Systems",
//   },
// ];

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     if (isHovered) return;
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [isHovered]);

//   const slide = slides[currentSlide];
//   const isVideo = slide.image.endsWith(".mp4");

//   return (
//     <section
//       className="relative h-[80vh] xl:h-[90vh] 2xl:h-screen w-full overflow-hidden"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Animated Background */}
//       <div className="absolute inset-0 z-0">
//         <AnimatePresence mode="sync">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0, transform: "translateY(20px)" }}
//             animate={{ opacity: 1, transform: "translateY(0)" }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//             className="w-full h-full"
//           >
//             {isVideo ? (
//               <video
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="w-full h-full object-cover"
//               >
//                 <source src={slide.image} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             ) : (
//               <Image
//                 src={slide.image}
//                 alt={slide.title}
//                 width={1920}
//                 height={1080}
//                 className="w-full h-full object-cover"
//               />
//             )}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//       <div className="absolute inset-0 bg-black/50" />

//       {/* Animated Title */}
//       <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
//         <AnimatePresence mode="sync">
//           <Motion
//             as={"h1"}
//             key={currentSlide}
//             variants={slideInBottom}
//             className="sangBlue-font text-white text-[42.56px] text-center md:text-6xl leading-tight lg:text-8xl font-bold px-4"
//           >
//             {slide.title}
//           </Motion>
//         </AnimatePresence>
//       </div>

//       {/* Dots Navigation */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-10 h-1 rounded-md border border-white transition-all duration-300 ${
//               index === currentSlide
//                 ? "bg-[color:var(--primary)] scale-125"
//                 : "bg-white/40"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    image: "/images/hero.mp4",
    title: "Smart Home Automation",
  },
  {
    image: "/images/hero-2.jpg",
    title: "Cinema & Audio Systems",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Office Automation",
  },
  {
    image: "/images/hero-4.jpg",
    title: "Conference Room Solutions",
  },
  {
    image: "/images/hero-5.jpg",
    title: "Advanced CCTV Systems",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isReady, setIsReady] = useState(true);

  const slide = slides[currentSlide];
  const isVideo = slide.image.endsWith(".mp4");

  // Auto-advance slides
  useEffect(() => {
    if (isHovered || !isReady) return;

    const timer = setTimeout(() => {
      setIsReady(false);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearTimeout(timer);
  }, [currentSlide, isHovered, isReady]);

  return (
    <section
      className="relative h-[80vh] xl:h-[90vh] 2xl:h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fallback Background */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Animated Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {isVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setIsReady(true)}
              className="w-full h-full object-cover"
            >
              <source src={slide.image} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              onLoad={() => setIsReady(true)}
              className="object-cover"
              priority={currentSlide === 0}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Slide Title */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={slide.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="sangBlue-font text-white text-[42.56px] md:text-6xl lg:text-8xl font-bold px-4"
          >
            {slide.title}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsReady(false); // pause transition briefly
              setCurrentSlide(index);
            }}
            className={`w-10 h-1 rounded-md border border-white transition-all duration-300 ${
              index === currentSlide
                ? "bg-[color:var(--primary)] scale-125"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
