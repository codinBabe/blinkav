"use client";

import {
  BoltIcon,
  CameraIcon,
  CheckCircleIcon,
  HomeIcon,
  MicrophoneIcon,
  ShieldCheckIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import { motion, useInView } from "framer-motion";
import { containerStagger, slideInBottom } from "@/animations";
import { useRef, useState } from "react";
import { Button } from "./ui";

const services = [
  {
    icon: CameraIcon,
    title: "CCTV & Surveillance",
    description:
      "Professional security camera systems with remote monitoring and advanced analytics",
    image: "/images/cctv-surveillance.jpg",
    features: [
      "4K IP cameras",
      "Night vision",
      "Mobile app access",
      "Cloud storage",
    ],
  },
  {
    icon: HomeIcon,
    title: "Home Automation",
    description:
      "Smart home solutions for lighting, climate, and security control",
    image: "/images/home-automation.jpg",
    features: [
      "Smart lighting",
      "Climate control",
      "Voice integration",
      "Mobile control",
    ],
  },
  {
    icon: SpeakerWaveIcon,
    title: "Audio Systems",
    description: "Multi-room audio distribution and high-quality sound systems",
    image: "/images/hero-4.jpg",
    features: [
      "Whole-home audio",
      "Zone control",
      "Streaming integration",
      "Premium speakers",
    ],
  },
  {
    icon: MicrophoneIcon,
    title: "Conference Solutions",
    description:
      "Professional meeting room setups with video conferencing capabilities",
    image: "/images/conference-solution.jpg",
    features: [
      "Video conferencing",
      "Wireless presentation",
      "Audio enhancement",
      "Room booking",
    ],
  },
  {
    icon: ShieldCheckIcon,
    title: "Access Control",
    description:
      "Secure entry systems with keyless access and visitor management",
    image: "/images/access-control.jpg",
    features: [
      "Keyless entry",
      "Visitor management",
      "Integration ready",
      "Mobile access",
    ],
  },
  {
    icon: BoltIcon,
    title: "Smart Integration",
    description:
      "Seamless integration of all your smart home and office systems",
    image: "/images/smart-integration.jpg",
    features: [
      "System integration",
      "Custom programming",
      "Maintenance",
      "24/7 support",
    ],
  },
];

const ServicesOverview = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, amount: 0.3 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={containerRef}
          variants={containerStagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                variants={slideInBottom}
                className="relative w-full h-[360px] perspective"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* 3D Card Inner */}
                <div
                  className="relative w-full h-full transition-transform duration-700 preserve-3d"
                  style={{
                    transform: `rotateY(${isHovered ? 180 : 0}deg)`,
                  }}
                >
                  {/* Front */}
                  <div
                    className="absolute w-full h-full flex flex-col items-center justify-center text-center backface-hidden bg-cover bg-center shadow-md rounded-lg text-white overflow-hidden"
                    style={{
                      backgroundImage: `url(${service.image})`,
                    }}
                  >
                    {/* Optional Overlay */}
                    <div className="absolute inset-0 bg-black/40 rounded-lg z-[1]" />
                    <div className="relative z-[2] flex flex-col items-center justify-center px-6">
                      <div className="w-12 h-12 bg-gradient rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="sangBlue-font text-2xl font-semibold leading-none tracking-tight mb-4">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute w-full h-full flex flex-col items-center justify-center backface-hidden bg-white shadow-md rounded-lg p-6 border border-[#ddd0c8] transform rotateY-180">
                    <h3 className="sangBlue-font text-2xl font-semibold leading-none tracking-tight mb-4">
                      {service.title}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircleIcon className="w-4 h-4 text-primary mr-2" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={slideInBottom}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Button
            className="mx-auto mt-12 block font-semibold"
            size="lg"
            variant={"gradient"}
            onClick={() => (window.location.href = "/contact")}
          >
            Request for Quote and Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
