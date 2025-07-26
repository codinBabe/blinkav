"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  containerStagger,
  listSlideIn,
  slideInBottom,
  slideInLeft,
  slideInRight,
} from "@/animations";
import ServicesOverview from "./service-overview";

const clients = [
  " Homespired LTD, Nigeria",
  " Royal Pine Estate, Nigeria",
  " Brief & Concise chambers",
];

const Services = () => {
  const listRef = useRef(null);
  const listInView = useInView(listRef, { once: true, amount: 0.3 });

  return (
    <section id="services" className="overflow-hidden px-6 py-10 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          variants={slideInRight}
          viewport={{ once: true }}
        >
          <h2 className="sangBlue-font text-3xl md:text-[48px] leading-tight text-center mt-6 md:mt-20">
            Our Services
          </h2>
          <p className="text-lg text-center">
            Comprehensive smart technology solutions for residential,
            commercial, and hospitality properties
          </p>
        </motion.div>
        <ServicesOverview />

        <div className="relative my-10 flex flex-col md:flex-row items-center gap-4 lg:justify-between">
          <div className="client-bg"></div>
          <div className="md:max-w-xl">
            <motion.h2
              initial={"hidden"}
              whileInView={"visible"}
              variants={slideInLeft}
              viewport={{ once: true }}
              className="sangBlue-font text-[40px] leading-tight mb-4"
            >
              People we&apos;ve worked for
            </motion.h2>
            <motion.p
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true }}
              variants={slideInLeft}
              className="text-[17px] leading-loose md:w-2/3 md:ml-4 lg:w-auto"
            >
              We&apos;ve had the privilege of delivering smart solutions to a
              wide range of clients across different industries
            </motion.p>

            <motion.ul
              ref={listRef}
              variants={containerStagger}
              initial="hidden"
              animate={listInView ? "visible" : "hidden"}
              className="flex flex-col flex-wrap gap-6 mt-8 overflow-hidden"
            >
              {clients.map((client, index) => (
                <motion.li
                  key={index}
                  variants={listSlideIn}
                  className="sangBlue-font flex item-start text-[13px] md:text-[17px] leading-tight transition-transform duration-300"
                  whileHover={{ x: 10 }}
                >
                  <span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-5 h-5 mr-4 transition-colors duration-300"
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
            className="relative mr-14 lg:mr-20 w-[90%] lg:w-[65%] mt-20 h-full rounded-xl overflow-hidden"
          >
            <Image
              unoptimized
              src="/images/clients2.jpg"
              alt="two people shaking hands"
              width={600}
              height={50}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
