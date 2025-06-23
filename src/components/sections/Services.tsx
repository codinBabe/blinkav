"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  containerStagger,
  listSlideIn,
  slideInBottom,
  slideInLeft,
  slideInRight,
} from "@/animations";

const solutions = [
  {
    title: "Residential Solutions",
    icon: "/images/SMART-HOME.jpg",
    route: "/services/residential-solutions",
  },
  {
    title: "Workplace Solutions",
    icon: "/images/workspace.jpg",
    route: "/services/workspace-solutions",
  },
  {
    title: "Audio Visual Solutions",
    icon: "/images/Audio-Visual.jpg",
    route: "/services/audio-visual-solutions",
  },
  {
    title: "Security Solutions",
    icon: "/images/SECURITY-PAGE.jpg",
    route: "/services/security-solutions",
  },
];

const clients = [
  "OJ&T, Nigeria",
  "Art interiors, Nigeria",
  "Powerview LTD, Nigeria",
  "Bomis LTD, Nigeria",
  "Green springs School",
  "Toyota Nigeria LTD",
];

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cardRef = useRef(null);
  const listRef = useRef(null);

  const cardInView = useInView(cardRef, { once: true, amount: 0.3 });
  const listInView = useInView(listRef, { once: true, amount: 0.3 });

  return (
    <section className="py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={"hidden"}
          whileInView={"visible"}
          variants={slideInRight}
          viewport={{ once: true }}
          className="sangBlue-font text-[50px] leading-tight text-center mb-12"
        >
          People making Technology work
        </motion.h2>

        <div className="fix-3d-parent">
          <motion.div
            ref={cardRef}
            variants={containerStagger}
            initial="hidden"
            animate={cardInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {solutions.map((item, idx) => {
              const isHovered = hoveredIndex === idx;

              return (
                <motion.div
                  key={idx}
                  variants={slideInBottom}
                  className="w-full"
                >
                  <div
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="w-full h-96 perspective mx-auto"
                  >
                    <div
                      className="relative w-full h-full preserve-3d transition-transform duration-700"
                      style={{
                        transform: `rotateY(${isHovered ? 180 : 0}deg)`,
                      }}
                    >
                      {/* Front Side */}
                      <div
                        className="absolute w-full h-full backface-hidden bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${item.icon})` }}
                      >
                        <div className="absolute inset-0 bg-black/40" />
                      </div>

                      {/* Back Side */}
                      <div
                        className="absolute w-full h-full backface-hidden bg-cover bg-left bg-no-repeat transform rotateY-180 scale-105"
                        style={{ backgroundImage: `url(${item.icon})` }}
                      >
                        <div className="absolute inset-0 bg-black/40" />
                      </div>
                    </div>

                    {/* Text Overlay */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center px-2 text-white text-center">
                      <Link
                        href={item.route}
                        className="sangBlue-font text-[40px] leading-tight font-semibold"
                      >
                        {item.title}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="client-bg mt-28 pb-10 px-4 lg:px-16">
          <div className="flex flex-col md:flex-row items-center gap-4 lg:justify-between">
            <div>
              <motion.h2
                initial={"hidden"}
                whileInView={"visible"}
                variants={slideInLeft}
                viewport={{ once: true }}
                className="sangBlue-font text-3xl md:text-4xl lg:text-5xl lg:whitespace-nowrap mb-4"
              >
                IperHome’s Clients
              </motion.h2>
              <motion.p
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{ once: true }}
                variants={slideInLeft}
                className="text-[17px] leading-loose md:w-2/3 md:ml-4 lg:w-auto"
              >
                A list of our recent clients who loves our work!
              </motion.p>

              <motion.ul
                ref={listRef}
                variants={containerStagger}
                initial="hidden"
                animate={listInView ? "visible" : "hidden"}
                className="flex flex-col flex-wrap gap-4 mt-8"
              >
                {clients.map((client, index) => (
                  <motion.li
                    key={index}
                    variants={listSlideIn}
                    className="sangBlue-font flex item-start text-lg transition-transform duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block w-5 h-5 mr-2 transition-colors duration-300"
                      >
                        <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path>
                      </svg>
                    </span>
                    <span className="">{client}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <motion.div
              variants={slideInBottom}
              initial="hidden"
              whileInView={"visible"}
              className="mr-10 w-[40%] mt-20 h-full rounded-xl overflow-hidden flex-shrink-0"
            >
              <Image
                unoptimized
                src="/images/iperhomeclient.webp"
                alt="Iper Home Logo"
                width={600}
                height={50}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
