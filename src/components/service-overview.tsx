"use client";

import {
  BoltIcon,
  CameraIcon,
  CheckCircleIcon,
  HomeIcon,
  MicrophoneIcon,
  ShieldCheckIcon,
  SpeakerWaveIcon,
  CodeBracketIcon,
  CalculatorIcon
} from "@heroicons/react/24/outline";
import { motion, useInView } from "framer-motion";
import { containerStagger, slideInBottom } from "@/animations";
import { useRef, useState } from "react";
import { Button } from "./ui";
import Image from "next/image";

const services = [
  {
    icon: CameraIcon,
    title: "CCTV & Surveillance",
    description:
      "Professional security camera systems with remote monitoring and advanced analytics",
    image: "/images/cctv-surveillance.jpg",
    features: [
      "4k IP Cameras",
      "AI-Powered Cameras",
      "Remote Monitoring & Mobile Access",
      "Integrated Alarms & Access Control",
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
    title: "Entertainment Systems",
    description: "Seamlessly blending technology with lifestyle through cutting-edge entertainment systems.",
    image: "/images/hero-4.jpg",
    features: [
      "Cinema and Media Rooms",
      "Video Distribution",
      "Multiroom Audio Systems",
      "Outdoor Entertainment Solutions",
    ],
  },
  {
    icon: MicrophoneIcon,
    title: "Conference Solutions",
    description:
      "Professional meeting room setups with video conferencing capabilities",
    image: "/images/conference-solution.jpg",
    features: [
      "Zoom & Teams Rooms Integration",
      "Interactive Smarts Displays and Touch Panels",
      "All-in-One Video Bars",
      "Wireless Presentation Systems",
      "Hybrid Meeting Optimization"
    ],
  },
  {
    icon: ShieldCheckIcon,
    title: "Intercom & PBX Systems ",
    description:
      "Intercom solutions enable clear audio and video communication for access control, visitor management, and internal communication.",
    image: "/images/intercom 2.jpg",
    features: [
      "PBX/VoIP",
      "IP Intercom",
      "Multi-way Communication",
      "Multiroom Extension",
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
  {
    icon: CodeBracketIcon,
    title: "Web Development",
    description:
      "End-to-end web solutions including frontend, backend, UI/UX design, and mobile app development for modern businesses.",
    image: "/images/bg3.jpg",
    features: [
      "Responsive frontend",
      "Scalable backend",
      "Secure Database",
      "Server Management",
    ],
  },
  {
    icon: CalculatorIcon,
    title: "App Development",
    description:
      "End-to-end mobile app development for modern businesses.",
    image: "/images/bg2.jpg",
    features: [
      "Responsive Layout",
      "Scalable backend",
      "Modern UI/UX design",
      "Cross-platform Mobile apps (iOS & Android)",
    ],
  },
];

const ServicesOverview = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="w-full mx-auto px-4">
        <motion.div
          ref={containerRef}
          variants={containerStagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
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
                  <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-md text-white flex items-center justify-center">
                    <div className="absolute inset-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover rounded-lg"
                        priority={index === 0}
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 z-[1]" />

                    {/* Content */}
                    <div className="relative z-[2] flex flex-col items-center justify-center text-center px-6">
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
            className="mx-auto mt-12 block font-semibold shadow-lg"
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
