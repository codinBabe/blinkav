"use client";

import { Icons } from "@/utils/Icons";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const partnerImages = [
  "/images/patner.webp",
  "/images/patner.webp",
  "/images/patner.webp",
  "/images/patner.webp",
  "/images/patner.webp",
  "/images/patner.webp",
  "/images/patner.webp",
];

const AboutUs: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="w-full flex flex-col xl:flex-row items-center gap-20">
          <div>
            <h1 className="text-xl md:text-3xl lg:text-6xl mb-6">About us</h1>
            <p className="neue-font leading-loose text-[17px]">
              Since 2016, Iper Home LTD is a company dedicated to improving the
              effectiveness of the daily lives of individuals both in private
              and corporate entities. We are confident that we have the manpower
              and financial strength to execute the project in the highest
              professional manner.
            </p>
            <br />
            <p className="neue-font leading-loose text-[17px]">
              Iper Home LTD has been providing sustainable designs for more than
              7 years. Our company has more than 18 employees in our Lagos
              office with affiliate offices in the UK, USA, and Nigeria.
            </p>
          </div>
          <div className="w-full xl:w-3/5 h-full rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src={"/images/About-Us.webp"}
              alt="About Us"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-20 w-full flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-2/5 h-full rounded-xl overflow-hidden flex-shrink-0">
            {/* overlapping image effect here */}
            <Image
              src={"/images/what-we-offer.webp"}
              alt="What We Offer"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl md:text-3xl lg:text-4xl mb-4">
              What we offer?
            </h2>
            <p className="neue-font leading-loose text-[17px]">
              As a collective group, we offer global consulting to assist our
              clients in planning, development, design, construction, operation,
              and maintenance of critical infrastructure and smart home
              installations for private owners who are looking to improve
              security, convenience, and energy management in their homes. We
              also corporate owners who require their work operations to be
              seamless and effective
            </p>
          </div>
        </div>

        <div className="mt-20 w-full flex flex-col lg:flex-row items-center gap-20">
          <div>
            <h2 className="text-xl md:text-3xl lg:text-4xl mb-4">
              Why choose us?
            </h2>
            <ul className="neue-font leading-loose text-[17px] list-disc pl-12">
              <li>Dedicated support team</li>
              <li>Extron, Leviton & Creston certified.</li>
              <li>CEDIA certified operations team</li>
              <li>Committed to exceptional customer experience</li>
            </ul>
          </div>
          <div className="w-full lg:w-3/5 h-full rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src={"/images/why-choose-us.webp"}
              alt="Why Choose Us"
              unoptimized
              width={600}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* our patners */}
        <div className="mt-20 w-full">
          <div className="w-full flex items-start gap-12">
            <h2 className="text-xl md:text-3xl lg:text-5xl">Our Partners</h2>
            <p className="w-[65%] neue-font leading-loose text-[17px]">
              We have partnered with the best brands and leading product
              manufacturers to ensure our solutions meets global standards and
              best practice in the industry.
            </p>
          </div>
          <div className="w-full mt-12 relative">
            <Carousel
              arrows={false}
              customLeftArrow={<Icons.LeftArrow />}
              customRightArrow={<Icons.RightArrow />}
              autoPlay
              autoPlaySpeed={3000}
              infinite
              responsive={{
                desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
                tablet: { breakpoint: { max: 1024, min: 640 }, items: 4 },
                mobile: { breakpoint: { max: 640, min: 0 }, items: 3 },
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
          </div>
        </div>

        <div className="mt-20 bg-[#DDD0C8] p-8 rounded-lg"></div>
      </div>
    </section>
  );
};

export default AboutUs;
