"use client";

import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import SocialIcon from "./Social-Icon";

const Footer: React.FC = () => {
  const icons = [
    {
      id: "phone",
      icon: <DevicePhoneMobileIcon className="h-6 w-6 text-black" />,
      link: "",
    },
    {
      id: "email",
      icon: <EnvelopeIcon className="h-6 w-6 text-black" />,
      link: "mailto:",
    },
    {
      id: "instagram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="h-6 w-6 text-black"
        >
          <path
            fill="currentColor"
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 
            114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 
            189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 
            74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 
            74.7zm146.4-194.3c0 14.9-12 26.8-26.8 
            26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 
            26.8-26.8 26.8 12 26.8 26.8zm76.1 
            27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 
            0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 
            93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 
            67.7 36.2 93.9s58 34.4 93.9 36.2c37 
            2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 
            93.9-36.2 26.2-26.2 34.4-58 
            36.2-93.9 2.1-37 2.1-147.8 
            0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 
            42.6-29.5 11.7-99.5 9-132.1 9s-102.7 
            2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 
            9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 
            99.5-9 132.1-9s102.7-2.6 132.1 
            9c19.6 7.8 34.7 22.9 42.6 
            42.6 11.7 29.5 9 99.5 9 
            132.1s2.7 102.7-9 132.1z"
          />
        </svg>
      ),
      link: "https://www.instagram.com/",
    },
  ];

  return (
    <footer className="py-20 px-4 md:px-12 border-t border-t-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <Image
            src="/images/iper-logo.webp"
            alt="Iper Home Logo"
            width={250}
            height={50}
          />

          <h5 className="md:text-xl lg:text-2xl max-w-lg text-center md:text-left">
            Since 2016, Iper Home LTD has enhanced daily efficiency for
            individuals and corporations.
          </h5>

          <SocialIcon bgColor={"#DDD0C8"} />
        </div>

        <div className="text-center mt-8 neue-font">
          <p>&copy; {new Date().getFullYear()} Iper Home Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
