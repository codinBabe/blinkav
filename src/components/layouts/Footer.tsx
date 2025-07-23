"use client";

import Image from "next/image";
import SocialIcon from "../icons/Social-Icon";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-20 px-4 md:px-10 lg:px-12 border-t border-t-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-black.png"
              alt="Blinkav Home Logo"
              width={200}
              height={50}
            />
          </Link>

          <h5 className="sangBlue-font md:text-xl lg:text-2xl max-w-lg text-center md:text-left">
            Since 2016, Blinkav LTD has enhanced daily efficiency for
            individuals and corporations.
          </h5>

          <SocialIcon bgColor={"#DDD0C8"} />
        </div>

        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} Blinkav Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
