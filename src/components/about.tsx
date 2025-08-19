"use client";

import {
  CustomLeftArrow,
  CustomRightArrow,
} from "@/components/icons/Custom-Arrow";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Motion, slideInBottom, slideInLeft, slideInRight } from "@/animations";

const partnerImages = [
  "/images/partners/1.png",
  "/images/partners/2.png",
  "/images/partners/3.png",
  "/images/partners/4.png",
  "/images/partners/5.png",
  "/images/partners/6.png"
];

const processSteps = [
  {
    step: "1",
    title: "Consultation",
    description: "We assess your needs and property requirements",
  },
  {
    step: "2",
    title: "Design",
    description: "Custom solution design tailored to your space",
  },
  {
    step: "3",
    title: "Installation",
    description: "Professional installation by certified technicians",
  },
  {
    step: "4",
    title: "Support",
    description: "Ongoing maintenance and 24/7 technical support",
  },
];

const AboutUs = () => {
  return (
    <div className="overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <section className="w-full flex flex-col xl:flex-row items-center gap-8 lg:gap-12">
          <Motion
            as={"div"}
            variants={slideInBottom}
            className="md:hidden w-full xl:w-3/5 h-full rounded-xl overflow-hidden flex-shrink-0 -mt-8"
          >
            <Image
              src={"/images/About-Us.webp"}
              alt="About Us"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </Motion>
          <div>
            <Motion
              as={"h1"}
              variants={slideInLeft}
              className="sangBlue-font text-[40px] leading-tight lg:text-6xl lg:leading-normal mb-6"
            >
              About us
            </Motion>
            <Motion
              as={"div"}
              variants={slideInBottom}
              className="space-y-4 leading-loose text-[17px]"
            >
              <p>
                <b>Founded in 2023</b>, Blinkav is a technology integration company committed to delivering world-class solutions in smart automation,
                security, and connectivity. Backed by a skilled team of over 10 professionals, we bring innovation; precision, and reliability to every
                project we execute.<br></br>
                We serve residential, commercial, and hospitality spaces with tailored, future-ready systems.</p>
                <p>At Blinkav, our goal is simple - <b>to connect people to their spaces through intelligient technology</b>
              </p>
            </Motion>
          </div>
          <Motion
            as={"div"}
            variants={slideInBottom}
            className="hidden md:block w-full xl:w-3/5 h-full rounded-xl overflow-hidden flex-shrink-0"
          >
            <Image
              src={"/images/aboutus/about (2).jpeg"}
              alt="About Us"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </Motion>
        </section>

        <section className="relative mt-20 w-full h-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="about-bg rounded-xl" />
          <Motion
            as={"div"}
            variants={slideInBottom}
            className="ml-12 mt-12 w-[90%] md:ml-28 md:w-[75%] lg:w-[40%] md:mt-18 h-96 rounded-xl overflow-hidden flex-shrink-0"
          >
            <Image
              src={"/images/aboutus/about (5).jpeg"}
              alt="What We Offer"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </Motion>
          <div>
            <Motion
              as={"h2"}
              variants={slideInBottom}
              className="sangBlue-font text-[40px] leading-tight mb-4 lg:text-6xl"
            >
              What we offer?
            </Motion>
            <Motion
              as={"p"}
              variants={slideInBottom}
              className="leading-loose text-[17px]"
            >
              As a collective team, we provide global consulting and technical expertise to support our clients in the <b>planning, design, development, construction, operation and maintenance</b> of critical infrastructure and smart technology systems.
            </Motion>
            <br></br>
            <Motion
              as={"p"}
              variants={slideInBottom}
              className="leading-loose text-[17px]"
            >
              We serve <b>private homeowners</b> seeking to enhance security, convenience, and energy efficiency through intelligent home installations, as well as <b>corporate clients</b> looking to streamline operations and improve productivity through integrated, future-ready solutions.
            </Motion>
          </div>
        </section>

        <section className="mt-24 w-full flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full">
            <Motion
              as={"h2"}
              variants={slideInBottom}
              className="sangBlue-font text-[40px] leading-tight mb-4"
            >
              Why choose us?
            </Motion>
            <Motion
              as={"ul"}
              variants={slideInBottom}
              className="leading-loose text-[17px] list-disc pl-12"
            >
              <li>Dedicated Support Team</li>
              <li>Industry Recognized Certification (CTS, AVIXA, CEDIA)</li>
              <li>ELAN, URC, HDL & Lutron Certified</li>
              <li>Excellent After Sales Services</li>
            </Motion>
          </div>
          <Motion
            as={"div"}
            variants={slideInBottom}
            className="w-full lg:w-3/5 h-full rounded-xl overflow-hidden flex-shrink-0"
          >
            <Image
              src={"/images/aboutus/about (5).jpeg"}
              alt="Why Choose Us"
              unoptimized
              width={600}
              height={100}
              className="w-full h-full object-cover"
            />
          </Motion>
        </section>

        {/* our patners */}
        <section className="mt-20 w-full">
          <div className="w-full flex flex-col md:flex-row items-start md:items-center md:justify-between">
            <Motion
              as={"h2"}
              variants={slideInLeft}
              className="sangBlue-font text-[40px] leading-loose lg:text-6xl"
            >
              Our Partners
            </Motion>
            <Motion
              as={"p"}
              variants={slideInRight}
              className="md:w-[60%] leading-loose text-[17px]"
            >
              At Blinkav, we pride ourselves on delivering premium, reliable and innovative technology solutions. To ensure this, we've strategically partnered with globally recognized brands that are leaders in their respective industries. These partnerships are more than just business relationships - they represent our commitment to excellence. By aligning with these industry leaders. We ensures our clients benefit from the most innovative, future-proof technologies on the market today.
            </Motion>
          </div>
          <Motion
            as={"div"}
            variants={slideInBottom}
            className="w-full mt-12 mb-32 relative"
          >
            <Carousel
              arrows
              autoPlay
              autoPlaySpeed={3000}
              infinite
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
              responsive={{
                desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
                tablet: { breakpoint: { max: 1024, min: 640 }, items: 3 },
                mobile: { breakpoint: { max: 640, min: 0 }, items: 2 },
              }}
              className="relative"
              containerClass="carousel-container"
            >
              {partnerImages.map((img, idx) => (
                <div key={idx} className="flex justify-center items-center p-4">
                  <Image
                    src={img}
                    alt={`Partner ${idx + 1}`}
                    width={150}
                    height={80}
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </Carousel>
          </Motion>
        </section>

        {/* Our Process */}
        <section className="mb-20 bg-[#DDD0C8] px-4 sm:px-6 lg:px-8 py-12 rounded-lg">
          <div className="max-w-7xl mx-auto">
            <Motion
              as={"div"}
              variants={slideInBottom}
              className="text-center mb-14"
            >
              <h2 className="sangBlue-font text-4xl text-[color:var(--foreground)] mb-4">
                Our Process
              </h2>
              <p className="text-xl text-[color:var(--muted-foreground)] max-w-3xl mx-auto">
                From initial consultation to ongoing support, we ensure a smooth
                experience
              </p>
            </Motion>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const slideIn = index < 2 ? slideInLeft : slideInRight;
                return (
                  <Motion
                    as={"div"}
                    variants={slideIn}
                    key={index}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-[color:var(--primary)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="sangBlue-font text-xl font-semibold text-[color:var(--foreground)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[color:var(--muted-foreground)]">
                      {step.description}
                    </p>
                  </Motion>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
