"use client";

import Image from "next/image";
import SocialIcon from "../icons/Social-Icon";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 px-6 lg:px-12 border-t border-t-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 items-start">
        <Link href="/" className="-mt-6">
          <Image
            src="/images/logo-black.png"
            alt="Blinkav Home Logo"
            width={200}
            height={50}
          />
        </Link>
        <div className="max-w-xs">
          <h4 className="sangBlue-font font-bold mb-4">Show Shows</h4>
        </div>

        <div>
          <h4 className="sangBlue-font font-bold mb-4">Categories</h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/services/residential-solutions"
                className="hover:underline"
              >
                Residential Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/services/workspace-solutions"
                className="hover:underline"
              >
                Workspace Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/services/audio-visual-solutions"
                className="hover:underline"
              >
                Audio Visual Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/services/security-solutions"
                className="hover:underline"
              >
                Security Solutions
              </Link>
            </li>
          </ul>
        </div>
        <div className="max-w-xs">
          <h4 className="sangBlue-font font-bold mb-4">About us</h4>
          <p>
            Blinkav Ltd is a leading provider of innovative solutions, dedicated
            to enhancing the efficiency and productivity of our clients.
          </p>
        </div>
        <div className="max-w-xs">
          <h4 className="sangBlue-font font-bold mb-4">Contact us</h4>
          <p>
            Have questions or need support? Reach out to us at{" "}
            <a href="mailto:support@blinkav.com" className="hover:underline">
              support@blinkav.com
            </a>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8">
        <SocialIcon bgColor={"bg-transparent"} className="shadow-none" />
      </div>
    </footer>
  );
};

export default Footer;
