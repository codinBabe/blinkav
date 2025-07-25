"use client";

import Image from "next/image";
import { Motion, slideInBottom, slideInLeft, slideInRight } from "@/animations";

const ResidentialSolution = () => {
  return (
    <section>
      <div className="residential-bg relative w-full h-[80vh] overflow-hidden flex items-center justify-center text-center">
        <Motion
          as="h1"
          variants={slideInBottom}
          className="sangBlue-font text-white text-[60px] md:leading-loose lg:text-[65px]"
        >
          Residential Solutions
        </Motion>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-16 md:space-y-28">
        <div className="flex flex-col md:flex-row-reverse items-center gap-20 mt-16 md:mt-28">
          <div className="md:max-w-xl">
            <Motion
              as={"h2"}
              variants={slideInRight}
              className="sangBlue-font text-[40px] lg:text-6xl leading-tight mb-4"
            >
              Smart Home Automation
            </Motion>
            <Motion
              as={"div"}
              variants={slideInBottom}
              className="text-[17px] leading-loose"
            >
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
            </Motion>
          </div>
          <Motion
            as={"div"}
            variants={slideInBottom}
            className="w-full h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/Residential-3.webp"
              alt="Residential Solutions"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </Motion>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-20 mb-20">
          <div className="md:max-w-xl">
            <Motion
              as={"h2"}
              variants={slideInLeft}
              className="sangBlue-font text-[40px] leading-tight lg:text-6xl mb-4"
            >
              Entertainment Unleased
            </Motion>
            <Motion
              as={"div"}
              variants={slideInBottom}
              className="text-[17px] leading-loose"
            >
              <ul className="list-disc pl-8 my-4">
                <li>Home theater systems</li>
                <li>Audio speakers</li>
              </ul>
              <p>
                Seamlessly connected, allowing users to control their multimedia
                experience throughout the house. Integration with virtual
                assistants enables voice commands for a hands-free and immersive
                entertainment setup.
              </p>
            </Motion>
          </div>
          <Motion
            as={"div"}
            variants={slideInRight}
            className="w-full h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/Residential-2.webp"
              alt="Residential Solutions"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default ResidentialSolution;
