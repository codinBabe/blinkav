"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SocialIcon from "../icons/Social-Icon";
import useScrollToTop from "@/hooks/use-scroll-to-top";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();
  const showScroll = useScrollToTop();

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  }, [pathname]);

  const noBgPaths = pathname === "/" || pathname.startsWith("/services/");

  const menu = [
    { label: "Home", href: "/" },
    {
      label: "Our Services",
      dropdown: [
        {
          label: "Residential Solutions",
          href: "/services/residential-solutions",
        },
        { label: "Workspace Solutions", href: "/services/workspace-solutions" },
        {
          label: "Audio Visual Solutions",
          href: "/services/audio-visual-solutions",
        },
        {
          label: "Security Solutions",
          href: "/services/security-solutions",
        },
        {
          label: "Web Development Solutions",
          href: "/services/web-development-solutions",
        },
      ],
    },
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`${
        noBgPaths
          ? "absolute top-0 left-0 right-0 bg-transparent"
          : "bg-[#edebe9]"
      } px-4 lg:px-0 py-4 z-50`}
    >
      <Link
        href={"/"}
        className="border-b border-b-[var(--border)] mb-4 w-full hidden lg:flex justify-center"
      >
        <Image
          src={noBgPaths ? "/images/logo-white.png" : "/images/logo-black.png"}
          alt="Blinkav Logo"
          width={200}
          height={50}
          priority
          className="mb-2"
        />
      </Link>
      <div className="max-w-7xl mx-auto flex lg:flex-col items-center justify-between lg:justify-center">
        <Link href={"/"} className="lg:hidden">
          <Image
            src={
              noBgPaths ? "/images/logo-white.png" : "/images/logo-black.png"
            }
            alt="Blinkav Logo"
            width={200}
            height={50}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center justify-evenly w-full lg:-mt-5">
          {menu.map((item, index) =>
            item.dropdown ? (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span
                  className={`${
                    noBgPaths ? "text-white" : "text-black"
                  } inline-flex items-center font-bold leading-[70px]`}
                >
                  {item.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 right-0 top-[50px] ml-[-40vw] w-screen bg-white shadow-lg z-20 py-4"
                  >
                    <div className="max-w-7xl mx-auto px-4 flex justify-center gap-8">
                      {item.dropdown.map((subItem, subIdx) => (
                        <Link
                          key={subIdx}
                          href={subItem.href}
                          className="text-sm font-semibold hover:underline whitespace-nowrap"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                className={`${
                  noBgPaths ? "text-white" : "text-black"
                } font-bold leading-[70px]`}
                href={item.href}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden mt-2">
          <button onClick={() => setMobileMenuOpen(true)}>
            <Bars3Icon
              className={`w-8 h-8 ${noBgPaths ? "text-white" : "text-black"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="w-[90%] fixed top-0 right-0 h-full z-50 bg-[#edebe9] flex flex-col p-6 pt-10 shadow-lg overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4"
          >
            <XMarkIcon className="w-6 h-6 text-black" />
          </button>

          {/* Logo */}
          <Link href={"/"} className="flex justify-center">
            <Image
              src="/images/logo-black.png"
              alt="Blinkav Logo"
              width={300}
              height={50}
            />
          </Link>

          {/* Mobile Links */}
          <nav className="w-full flex flex-col mt-10 space-y-2">
            {menu.map((item, idx) =>
              item.dropdown ? (
                <div key={idx} className="w-full text-center">
                  <button
                    onClick={() => setMobileDropdownOpen(!isMobileDropdownOpen)}
                    className="w-full flex justify-between items-center font-bold text-[15px] py-2.5 border-b border-b-[#dddddd]"
                  >
                    <span className="w-full text-center">{item.label}</span>
                    <svg
                      className={`w-6 h-6 transition-transform ${
                        isMobileDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {isMobileDropdownOpen && (
                    <ul className="mt-2 space-y-2">
                      {item.dropdown.map((sub, i) => (
                        <li key={i}>
                          <Link
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-[15px] font-bold py-2.5 border-b border-b-[#dddddd]"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-bold text-[15px] py-2.5 w-full text-center border-b border-b-[#dddddd]"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-8">
            <SocialIcon bgColor="bg-transparent" className="shadow-none" />
          </div>
        </div>
      )}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-[9999] bg-black p-2 rounded shadow-md transition-opacity duration-300 hover:opacity-80"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </header>
  );
};

export default Header;
