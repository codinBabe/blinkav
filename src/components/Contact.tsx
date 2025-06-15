"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import SocialIcon from "./Social-Icon";

const Contact: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Call Us",
      content: "+234 123 4567",
    },
    {
      icon: MapPinIcon,
      title: "Reach Us",
      content: "123 TECH STREET, LAGOS, NIGERIA",
    },
    {
      icon: EnvelopeIcon,
      title: "Email Us",
      content: "info@iperhome.com",
    },
  ];

  return (
    <section className="py-20 bg-[#EDEBE9] contact-bg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mx-auto max-w-sm">
          <h2 className="text-xl md:text-3xl lg:text-6xl mb-5">Get in Touch</h2>
          <p className="leading-loose mb-5">
            If you have any questions, feedback, or suggestions, we would love
            to hear from you.
          </p>
          <SocialIcon bgColor="bg-[#DDD0C8]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 mt-12">
          {contactInfo.map((info, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="relative group w-[350px] h-60 mx-auto perspective"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="relative w-full h-full preserve-3d transition-transform duration-700"
                  animate={{ rotateY: isHovered ? 180 : 0 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front Side */}
                  <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6 gap-4">
                    <info.icon className="h-8 w-8 text-black" />
                    <h3 className="text-lg md:text-2xl font-bold text-black">
                      {info.title}
                    </h3>
                    <p className="text-base md:text-lg text-center">
                      {info.content}
                    </p>
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full backface-hidden bg-black rounded-xl shadow-lg transform rotateY-180 flex flex-col items-center justify-center p-6 gap-4 text-white">
                    <info.icon className="h-8 w-8 text-white" />
                    <h3 className="text-lg md:text-2xl font-bold">
                      {info.title}
                    </h3>
                    <p className="text-base md:text-lg text-center">
                      {info.content}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-14">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.123456789012!2d3.123456789012345!3d6.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b123456789012%3A0x1234567890123456!2sIper%20Home%20Ltd.!5e0!3m2!1sen!2sng!4v1234567890123456"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="max-w-xl mx-auto py-20">
        {/* form */}
        <div className="text-center">
          <h2 className="text-xl md:text-3xl lg:text-6xl mb-5">
            Schedule a Consultation
          </h2>
          <p className="leading-loose">We would love to hear from you!</p>
        </div>
        <form className="max-w-2xl mx-auto mt-10">
          <div className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Your Full Name"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="tel"
              placeholder="Your Contact Number"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full mt-6 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="mt-6 px-6 py-3 bg-[#DDD0C8] text-black font-semibold rounded-lg transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
