"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    title: "Residential Solutions",
    icon: "/images/SMART-HOME.jpg",
    route: "/services/residential-solutions",
  },
  {
    title: "Workplace Solutions",
    icon: "/images/workspace.jpg",
    route: "/services/workplace-solutions",
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

  return (
    <section className="py-20 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-3xl lg:text-6xl text-center mb-12">
          People making Technology work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
          {solutions.map((item, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <Link
                href={item.route}
                key={idx}
                className="relative group h-80 md:h-96 w-[280px] mx-auto perspective"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="relative w-full h-full preserve-3d transition-transform duration-700"
                  animate={{ rotateY: isHovered ? 180 : 0 }}
                >
                  {/* Front */}
                  <div
                    className="absolute w-full h-full backface-hidden bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${item.icon})` }}
                  >
                    <div className="absolute inset-0 bg-black/40" />
                  </div>

                  {/* Back (zoomed version without shadow) */}
                  <div
                    className="absolute w-full h-full backface-hidden bg-cover bg-left bg-no-repeat transform rotateY-180 scale-105"
                    style={{ backgroundImage: `url(${item.icon})` }}
                  >
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                </motion.div>

                {/* Text overlay (stays static) */}
                <div className="absolute inset-0 z-10 flex items-center justify-center px-2 text-white text-center">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="pt-32 pb-10 px-4 lg:px-16">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl lg:whitespace-nowrap mb-4">
                IperHome’s Clients
              </h2>
              <p className="neue-font text-[17px] leading-loose md:w-2/3 md:ml-4 lg:w-auto">
                A list of our recent clients who loves our work!
              </p>

              <ul className="flex flex-col flex-wrap gap-4 mt-8">
                {clients.map((client, index) => (
                  <motion.li
                    key={index}
                    className="flex item-start text-lg transition-transform duration-300"
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
              </ul>
            </div>
            <div className="w-full md:max-w-xs lg:max-w-sm h-full rounded-xl overflow-hidden flex-shrink-0">
              <Image
                unoptimized
                src="/images/iperhomeclient.webp"
                alt="Iper Home Logo"
                width={600}
                height={50}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
