"use client";

import Image from "next/image";
import { Motion, slideInBottom, slideInLeft, slideInRight } from "@/animations";

const ResidentialSolution = () => {
  return (
    <section>
      <div className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/home-automation.jpg"
          alt="a beautiful smart home"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 z-0" />
        <Motion
          as="h1"
          variants={slideInBottom}
          className="relative z-10 font-klav-bold text-white text-[60px] lg:text-[65px] px-4"
        >
          Residential Solutions
        </Motion>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 md:px-8 space-y-16 md:space-y-28">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20">
          <div className="md:w-[50%]">
            <Motion
              as={"h2"}
              variants={slideInRight}
              className="font-klav-bold text-[40px] lg:text-6xl leading-tight mb-4"
            >
              Smart Home Automation
            </Motion>
            <Motion
              as={"div"}
              variants={slideInBottom}
              className="text-[17px] leading-loose"
            >
              <p>
                Smart home automation gives homeowners full control over their
                living spaces—enhancing comfort, boosting energy efficiency,
                improving security, and creating a seamless, connected
                lifestyle.
              </p>
              <p>
                Our integrated smart home solutions cover a wide range of
                systems, including:
              </p>
              <ul className="list-disc pl-8 mt-4">
                <li>Automated Lighting</li>
                <li>Climate Control & Thermostats</li>
                <li>Advanced Security & Surveillance</li>
                <li>Home Cinema Systems</li>
                <li>Multiroom Music Distribution</li>
                <li>Smart Mirror TVs</li>
                <li>Motorized Blinds & Shades</li>
              </ul>
            </Motion>
          </div>
          <Motion
            as={"div"}
            variants={slideInBottom}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
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

        <div className="flex flex-col md:flex-row items-center gap-10  md:gap-20">
          <div className="md:w-[50%]">
            <Motion
              as={"h2"}
              variants={slideInLeft}
              className="font-klav-bold text-[40px] leading-tight lg:text-6xl mb-4"
            >
              Intercom
            </Motion>
            <Motion
              as={"div"}
              variants={slideInBottom}
              className="text-[17px] leading-loose"
            >
              <p>
                Stay connected and in control with a modern intercom system
                designed for today&apos;s smart homes. we install easy-to-use
                audio and video intercoms that let you communicate within your
                home and safely mnage who comes to your door. Whether
                you&apos;re speaking to a visitor at the gate, checking in on a
                family member in another room, or answering from your phone
                while you&apos;re away, our intercom solutions offer
                convenience, security, and peace of mind.
              </p>
            </Motion>
          </div>
          <Motion
            as={"div"}
            variants={slideInRight}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/intercom.png"
              alt="Intercom"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </Motion>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20">
          <div className="md:w-[50%]">
            <Motion
              as={"h2"}
              variants={slideInRight}
              className="font-klav-bold text-[40px] leading-tight lg:text-6xl mb-4"
            >
              Internet Distribution
            </Motion>
            <Motion
              as={"div"}
              variants={slideInBottom}
              className="text-[17px] leading-loose space-y-4"
            >
              <p>
                A modern smart home needs more than just Wi-Fi — it needs a
                reliable, high speed network that reaches every corner of the
                house. At BlinkAV, we design and install robust internet and
                network distribution systems that ensure fast, stable, and
                secure connectivity for all your devices.
              </p>
              <p>
                Whether you’re streaming movies, gaming, working from home, or
                controlling smart devices, our solutions keep you connected
                without lag or dead zones.
              </p>
            </Motion>
          </div>
          <Motion
            as={"div"}
            variants={slideInLeft}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/Internet distribution.jpg"
              alt="An image of a distributed network"
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
