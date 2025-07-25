"use client";

import Image from "next/image";
import { Motion, slideInBottom, slideInLeft, slideInRight } from "@/animations";

const WebSolution = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="web-bg relative w-full h-[80vh] overflow-hidden flex items-center justify-center text-center">
        <Motion
          as="h1"
          variants={slideInLeft}
          className="sangBlue-font text-white text-[60px] md:leading-loose lg:text-[65px]"
        >
          Web Development Solutions
        </Motion>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-16 md:space-y-28">
        {/* Intro Section */}
        <div className="w-full flex flex-col md:flex-row-reverse items-center gap-10 mt-16 md:mt-28">
          <Motion
            as="div"
            variants={slideInBottom}
            className="md:max-w-xl space-y-6 text-[17px] leading-loose"
          >
            <p>
              At Blinkav, we craft modern web solutions that empower businesses
              to thrive in the digital space. Our development process is rooted
              in performance, user experience, and cutting-edge technologies
              that ensure robust, scalable, and beautiful digital products.
            </p>
            <p>
              From UI/UX design to full-stack development and mobile app
              integration, our goal is to provide end-to-end services that meet
              your business needs and elevate your digital presence.
            </p>
          </Motion>
          <Motion
            as="div"
            variants={slideInBottom}
            className="w-full h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/frontend-dev.jpg"
              alt="Web Development"
              unoptimized
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </Motion>
        </div>

        {/* Frontend Development */}
        <div className="relative flex flex-col md:flex-row items-center gap-10">
          <div className="md:max-w-xl">
            <Motion
              as={"h2"}
              variants={slideInLeft}
              className="sangBlue-font text-[40px] leading-tight lg:text-5xl mb-4"
            >
              Frontend Development
            </Motion>
            <Motion
              as="div"
              variants={slideInBottom}
              className="space-y-6 text-[17px] leading-loose"
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
            as="div"
            variants={slideInBottom}
            className="w-full h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/frontend-dev.jpg"
              alt="Frontend Development"
              unoptimized
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </Motion>
        </div>

        {/* Backend Development */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:max-w-xl">
            <Motion
              as="h2"
              variants={slideInRight}
              className="sangBlue-font text-[40px] leading-tight lg:text-5xl mb-4"
            >
              Backend Development
            </Motion>
            <Motion
              as="div"
              variants={slideInBottom}
              className="space-y-6 text-[17px] leading-loose"
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
            as="div"
            variants={slideInBottom}
            className="w-full h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/backend-dev.jpg"
              alt="Backend Development"
              unoptimized
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </Motion>
        </div>

        {/* UI/UX Design */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:max-w-xl">
            <Motion
              as={"h2"}
              variants={slideInLeft}
              className="sangBlue-font text-[40px] leading-tight lg:text-5xl mb-4"
            >
              UI/UX Design
            </Motion>
            <Motion
              as="div"
              variants={slideInBottom}
              className="space-y-6 text-[17px] leading-loose"
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
            as="div"
            variants={slideInBottom}
            className="w-full h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/ui-ux.jpg"
              alt="UI/UX Design"
              unoptimized
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </Motion>
        </div>

        {/* Mobile App Development */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-28">
          <div>
            <Motion
              as={"h2"}
              variants={slideInRight}
              className="sangBlue-font text-[40px] leading-tight lg:text-5xl mb-4"
            >
              Mobile App Development
            </Motion>
            <Motion
              as="div"
              variants={slideInBottom}
              className="space-y-6 text-[17px] leading-loose"
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
            as="div"
            variants={slideInBottom}
            className="w-full h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/mobile-app.jpg"
              alt="Mobile App Development"
              unoptimized
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default WebSolution;
