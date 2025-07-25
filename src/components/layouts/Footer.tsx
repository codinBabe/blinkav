"use client";

import Image from "next/image";
import SocialIcon from "../icons/Social-Icon";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 px-6 lg:px-12 border-t border-t-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <Link href="/">
            <Image
              src="/images/logo-black.png"
              alt="Blinkav Home Logo"
              width={200}
              height={50}
              className="mb-4"
            />
          </Link>
          <p className="text-sm text-gray-900 mt-8">
            Blinkav Ltd is a leading provider of innovative solutions, dedicated
            to enhancing the efficiency and productivity of our clients.
          </p>
        </div>

        {/* Services */}
        <div className="max-w-xs">
          <h4 className="sangBlue-font text-xl font-extrabold mb-4">
            Services
          </h4>
          <ul className="space-y-3 text-sm text-gray-700">
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
            <li>
              <Link
                href="/services/web-development-solutions"
                className="hover:underline"
              >
                Web Development Solutions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="max-w-xs">
          <h4 className="sangBlue-font text-xl font-extrabold mb-4">
            Contact Us
          </h4>
          <p className="text-sm text-gray-700">
            Want a quote? Fill out our{" "}
            <Link href="/contact" className="hover:underline text-blue-600">
              contact form
            </Link>
          </p>
          <p className="text-sm text-gray-700 mt-4">
            Have questions or need support? Reach out at{" "}
            <a
              href="mailto:support@blinkav.com"
              className="hover:underline text-blue-600"
            >
              support@blinkav.com
            </a>
          </p>
        </div>

        {/* Socials */}
        <div className="max-w-xs">
          <h4 className="sangBlue-font text-xl font-extrabold mb-4">
            Connect with us
          </h4>
          <SocialIcon bgColor="#DDD0C8" />
        </div>
      </div>

      {/* Footer bottom */}
      <div className="max-w-7xl mx-auto mt-12 text-center">
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Blinkav Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
