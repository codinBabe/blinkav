"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ResidentialSolution: React.FC = () => {
  return (
    <section>
      <div className="residential-bg relative w-full h-[80vh] md:h-[70vh] lg:h-[60vh] overflow-hidden flex items-center justify-center text-center">
        <motion.h1
          className="text-white text-[60px] md:leading-tight"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Residential Solutions
        </motion.h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center gap-20 py-20">
          <div className="w-full max-w-2xl h-full rounded-xl overflow-hidden">
            <Image
              src="/images/Residential-3.webp"
              alt="Residential Solutions"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-[40px] lg:text-6xl leading-tight mb-4">
              Smart Home Automation
            </h2>
            <div className="neue-font text-[17px] leading-loose">
              <p>
                Smart home automation empowers homeowners to have greater
                control over their living spaces, optimize energy consumption,
                enhance security, and enjoy a seamless and convenient lifestyle.
              </p>
              <p>Our Smart home solutions encompasses several areas such as</p>
              <ul className="list-disc pl-8 mt-4">
                <li>Lighting</li>
                <li>Climate control</li>
                <li>Security systems</li>
                <li>Home cinema</li>
                <li>Distributed Music system</li>
                <li>Smart Mirror TV</li>
                <li>Motorized shades</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-20 pb-20">
          <div>
            <h2 className="text-[40px] leading-tight lg:text-6xl mb-4">
              Entertainment Unleased
            </h2>
            <div className="neue-font text-[17px] leading-loose">
              <ul className="list-disc pl-8 mt-4">
                <li>Home theater systems</li>
                <li>Audio speakers</li>
              </ul>
              <p>
                Seamlessly connected, allowing users to control their multimedia
                experience throughout the house. Integration with virtual
                assistants enables voice commands for a hands-free and immersive
                entertainment setup.
              </p>
            </div>
          </div>
          <div className="w-full max-w-2xl h-full rounded-xl overflow-hidden">
            <Image
              src="/images/Residential-2.webp"
              alt="Residential Solutions"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialSolution;
