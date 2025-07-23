"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SocialIcon from "../icons/Social-Icon";
import useScrollToTop from "@/hooks/use-scroll-to-top";

const Header = () => {
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
      href: "/#services",
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
      } p-6 z-50`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:px-6">
        <Link href={"/"}>
          <Image
            src={
              noBgPaths ? "/images/logo-white.png" : "/images/logo-black.png"
            }
            alt="Blinkav Logo"
            width={200}
            height={50}
          />
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          {menu.map((item, index) => (
            <Link
              key={index}
              className={`${
                noBgPaths ? "text-white" : "text-black"
              } font-bold leading-[70px] text-[15px]`}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
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
            {menu.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-[15px] py-2.5 w-full text-center border-b border-b-[#dddddd]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-8">
            <SocialIcon bgColor="bg-transparent" />
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
