"use client";

import Image from "next/image";
import { Motion, slideInBottom, slideInLeft, slideInRight } from "@/animations";

const DevelopmentSolution = () => {
  return (
    <section>
      <div className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/bg3.jpg"
          alt="coding background"
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
          Developmental Solutions
        </Motion>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 md:px-8 space-y-16 md:space-y-28">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20">
          <div className="md:w-[50%]">
            <Motion
              as={"div"}
              variants={slideInBottom}
              className="text-[17px] leading-loose"
            >
              <p>
                At Blinkav, we craft modern web solutions that empower
                businesses to thrive in the digital space. Our development
                process is rooted in performance, user experience, and
                cutting-edge technologies that ensure robust, scalable, and
                beautiful digital products.
              </p>
              <p>
                From UI/UX design to full-stack development and mobile app
                integration, our goal is to provide end-to-end services that
                meet your business needs and elevate your digital presence.
              </p>
            </Motion>
          </div>
          <Motion
            as={"div"}
            variants={slideInBottom}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/hero-6.jpg"
              alt="Frontend Development"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </Motion>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="md:w-[50%]">
            <Motion
              as={"h2"}
              variants={slideInLeft}
              className="font-klav-bold text-[40px] leading-tight lg:text-6xl mb-4"
            >
              Frontend Development
            </Motion>
            <Motion
              as={"div"}
              variants={slideInBottom}
              className="text-[17px] leading-loose space-y-4"
            >
              <p>
                We build responsive, fast, and accessible interfaces using
                technologies like React, Next.js, Vue.js, and TailwindCSS. Every
                element is crafted to ensure an engaging user experience across
                all devices and platforms.
              </p>
              <p>
                Our approach prioritizes performance, SEO, and interactivity
                using modern frameworks and best practices.
              </p>
            </Motion>
          </div>
          <Motion
            as={"div"}
            variants={slideInRight}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/frontend-dev.jpg"
              alt="Frontend Development"
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
              Backend Development
            </Motion>
            <Motion
              as={"div"}
              variants={slideInBottom}
              className="text-[17px] space-y-4 leading-loose"
            >
              <p>
                We build secure, scalable, and high-performance backends using
                Node.js, Express, NestJS, and PostgreSQL. Our APIs are designed
                to support complex systems with ease, including real-time
                functionality and secure data handling.
              </p>
              <p>
                From database architecture to authentication and cloud
                integration, we manage the heavy lifting so your product stays
                efficient and maintainable.
              </p>
            </Motion>
          </div>
          <Motion
            as={"div"}
            variants={slideInLeft}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/backend-dev.jpg"
              alt="Backend Development"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </Motion>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="md:w-[50%]">
            <Motion
              as={"h2"}
              variants={slideInLeft}
              className="font-klav-bold text-[40px] leading-tight lg:text-6xl mb-4"
            >
              UI/UX Design
            </Motion>
            <Motion
              as={"div"}
              variants={slideInBottom}
              className="text-[17px] leading-loose space-y-4"
            >
              <p>
                Design is at the heart of everything we build. Our designers use
                tools like Figma, Adobe XD, and Sketch to create visually
                compelling and highly functional interfaces that delight users
                and drive engagement.
              </p>
              <p>
                We prioritize usability, consistency, and branding to turn
                concepts into intuitive digital experiences.
              </p>
            </Motion>
          </div>
          <Motion
            as={"div"}
            variants={slideInRight}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/ui-ux.jpg"
              alt="UI/UX Design"
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
              Mobile App Development
            </Motion>
            <Motion
              as={"div"}
              variants={slideInBottom}
              className="text-[17px] space-y-4 leading-loose"
            >
              <p>
                We develop cross-platform mobile applications using React Native
                and Flutter to ensure smooth performance and native-like
                experiences across Android and iOS devices.
              </p>
              <p>
                Whether you need a companion app for your web platform or a
                stand-alone mobile solution, we ensure speed, reliability, and
                scalability.
              </p>
            </Motion>
          </div>
          <Motion
            as={"div"}
            variants={slideInLeft}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/mobile-app.jpg"
              alt="Mobile App Development"
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

export default DevelopmentSolution;
