"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import SocialIcon from "./icons/Social-Icon";
import { ContactForm, ProjectWizard } from "./forms";
import { containerStagger, slideInBottom, Motion } from "@/animations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui";

const Contact = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

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
      content: "info@blinkav.co",
    },
  ];

  return (
    <div className="py-20 contact-bg">
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={"hidden"}
          animate={"visible"}
          variants={slideInBottom}
          className="sangBlue-font flex flex-col items-center text-center mx-auto max-w-sm"
        >
          <h2 className="text-xl md:text-3xl lg:text-6xl mb-5">Get in Touch</h2>
          <p className="leading-loose mb-5">
            If you have any questions, feedback, or suggestions, we would love
            to hear from you.
          </p>
          <SocialIcon bgColor="bg-[color:var(--muted)]/80" />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerStagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12 md:mt-14"
        >
          {contactInfo.map((info, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                variants={slideInBottom}
                className="w-full"
              >
                <div
                  key={index}
                  className="relative group w-full h-72 mx-auto perspective"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className="sangBlue-font relative w-full h-full preserve-3d transition-transform duration-700"
                    style={{
                      transform: `rotateY(${isHovered ? 180 : 0}deg)`,
                    }}
                  >
                    {/* Front Side */}
                    <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 gap-4">
                      <info.icon className="h-8 w-8 text-[var(--primary)]" />
                      <h3 className="text-lg md:text-2xl font-bold">
                        {info.title}
                      </h3>
                      <p className="text-base md:text-lg text-center">
                        {info.content}
                      </p>
                    </div>

                    {/* Back Side */}
                    <div className="absolute w-full h-full backface-hidden bg-gradient rounded-2xl shadow-lg transform rotateY-180 flex flex-col items-center justify-center p-6 gap-4 text-black">
                      <info.icon className="h-8 w-8 text-black" />
                      <h3 className="text-lg md:text-2xl font-bold">
                        {info.title}
                      </h3>
                      <p className="text-base md:text-lg text-center">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="mt-28">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.123456789012!2d3.123456789012345!3d6.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b123456789012%3A0x1234567890123456!2sIper%20Home%20Ltd.!5e0!3m2!1sen!2sng!4v1234567890123456"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      <section className="container mx-auto py-20">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="consultation" className="w-full">
            <TabsList className="mx-auto mb-6 flex justify-center">
              <TabsTrigger value="consultation">Consultation</TabsTrigger>
              <TabsTrigger value="quote">Request Quote</TabsTrigger>
            </TabsList>

            <TabsContent value="consultation" className="max-w-xl mx-auto px-6">
              <div className="text-center mb-6">
                <Motion
                  as={"h2"}
                  variants={slideInBottom}
                  className="sangBlue-font text-[26px] md:text-[30px] lg:text-[60px] leading-tight mb-3"
                >
                  Schedule a Consultation
                </Motion>
                <Motion
                  as={"p"}
                  variants={slideInBottom}
                  className="leading-loose"
                >
                  We would love to hear from you!
                </Motion>
              </div>
              <Motion as={"div"} variants={slideInBottom}>
                <ContactForm />
              </Motion>
            </TabsContent>

            <TabsContent value="quote" className="px-6">
              <div className="text-center mb-6">
                <Motion
                  as={"h2"}
                  variants={slideInBottom}
                  className="sangBlue-font text-[26px] md:text-[30px] lg:text-[60px] leading-tight mb-3"
                >
                  Get Your Custom Quote
                </Motion>
                <Motion
                  as={"p"}
                  variants={slideInBottom}
                  className="leading-loose text-[var(--muted-foreground)]"
                >
                  Tell us about your project and we&apos;ll provide a tailored
                  solution
                </Motion>
              </div>
              <Motion as={"div"} variants={slideInBottom}>
                <ProjectWizard />
              </Motion>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Contact;
