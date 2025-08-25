"use client";

import Image from "next/image";
import { Motion, slideInBottom, slideInLeft, slideInRight } from "@/animations";

const DevelopmentSolution = () => {
  return (
    <section>
      {/* Hero Section */}
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
          Development Solutions
        </Motion>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 md:px-8 space-y-16 md:space-y-28">

        {/* Overview */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <Motion
            as="div"
            variants={slideInLeft}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/hero-6.jpg"
              alt="Development Overview"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </Motion>
          <div className="md:w-[50%]">
            <Motion
              as="div"
              variants={slideInBottom}
              className="text-[17px] leading-loose space-y-4"
            >
              <p> At Blinkav, we craft modern web solutions that empower businesses to thrive in the digital space. Our development process is rooted in performance, user experience, and cutting-edge technologies that ensure robust, scalable, and beautiful digital products. </p> <p> From UI/UX design to full-stack development and mobile app integration, our goal is to provide end-to-end services that meet your business needs and elevate your digital presence. </p>
            </Motion>
          </div>
        </div>

        {/* UI/UX Design */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="md:w-[50%]">
            <Motion
              as="h2"
              variants={slideInLeft}
              className="font-klav-bold text-[40px] leading-tight lg:text-6xl mb-4"
            >
              UI/UX Design
            </Motion>
            <Motion
              as="div"
              variants={slideInBottom}
              className="text-[17px] space-y-4 leading-loose"
            >
              <p> Design is the soul of every product we create. We craft visually striking and highly intuitive interfaces that captivate users and elevate engagement from the very first interaction. </p> <p> With a deep focus on usability, consistency, and brand alignment, we transform ideas into seamless digital experiences—where every click feels natural and every screen tells a story. </p>
            </Motion>
          </div>
          <Motion
            as="div"
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

        {/* Frontend Development */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="md:w-[50%]">
            <Motion
              as="h2"
              variants={slideInLeft}
              className="font-klav-bold text-[40px] leading-tight lg:text-6xl mb-4"
            >
              Frontend Development
            </Motion>
            <Motion
              as="div"
              variants={slideInBottom}
              className="text-[17px] leading-loose space-y-4"
            >
              <p> We design and develop responsive, high-performance interfaces that deliver seamless user experiences across all devices. Every detail is thoughtfully crafted to ensure accessibility, speed, and visual impact. </p> <p> Our approach blends creative precision with technical excellence, prioritizing fast load times, discoverability, and dynamic interactivity—so your digital presence feels as powerful as it looks. </p>
            </Motion>
          </div>
          <Motion
            as="div"
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

        {/* Backend Development */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20">
          <div className="md:w-[50%]">
            <Motion
              as="h2"
              variants={slideInRight}
              className="font-klav-bold text-[40px] leading-tight lg:text-6xl mb-4"
            >
              Backend Development
            </Motion>
            <Motion
              as="div"
              variants={slideInBottom}
              className="text-[17px] space-y-4 leading-loose"
            >
              <p> We engineer robust, scalable backend systems that power seamless digital experiences. Designed for speed, security, and flexibility, our infrastructure supports everything from real-time features to complex data workflows. </p> <p> From structuring databases to implementing secure authentication and integrating with cloud services, we handle the technical foundation—so your product remains reliable, efficient, and ready to grow. </p>
            </Motion>
          </div>
          <Motion
            as="div"
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

        {/* Mobile App Development */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="md:w-[50%]">
            <Motion
              as="h2"
              variants={slideInLeft}
              className="font-klav-bold text-[40px] leading-tight lg:text-6xl mb-4"
            >
              Mobile App Development
            </Motion>
            <Motion
              as="div"
              variants={slideInBottom}
              className="text-[17px] space-y-4 leading-loose"
            >
              <p> We create mobile apps that work smoothly on both Android and iOS devices—so your users get a great experience no matter what phone they use. Our apps are designed to feel fast, intuitive, and just like native apps you&apos;d find in the app stores. </p> <p> Whether you need a mobile version of your website or a completely new app idea brought to life, we build reliable and scalable solutions that grow with your business and keep users coming back. </p>
            </Motion>
          </div>
          <Motion
            as="div"
            variants={slideInRight}
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
