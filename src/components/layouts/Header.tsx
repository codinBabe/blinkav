"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SocialIcon from "../Social-Icon";
import useScrollToTop from "@/hooks/use-scroll-to-top";

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

  const noBgPaths =
    pathname === "/" ||
    pathname === "/services/residential-solutions" ||
    pathname === "/services/workspace-solutions" ||
    pathname === "/services/audio-visual-solutions" ||
    pathname === "/services/security-solutions";

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
        { label: "Security Solutions", href: "/services/security-solutions" },
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
      } p-6 z-50`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:px-6">
        <Link href={"/"}>
          <Image
            src={
              noBgPaths
                ? "/images/iper-logo-white.webp"
                : "/images/iper-logo.webp"
            }
            alt="Company Logo"
            width={300}
            height={50}
          />
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
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
                  } inline-flex items-center font-bold leading-[70px] text-[15px]`}
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

                {isDropdownOpen && (
                  <ul className="absolute left-0 top-full w-56 bg-white shadow-lg z-10 rounded-xs py-2">
                    {item.dropdown.map((subItem, subIdx) => (
                      <li key={subIdx} className="px-3 py-2">
                        <Link
                          className="font-bold leading-loose text-[15px]"
                          href={subItem.href}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={index}
                className={`${
                  noBgPaths ? "text-white" : "text-black"
                } font-bold leading-[70px] text-[15px]`}
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
        <div className="w-4/5 fixed top-0 right-0 h-full z-50 bg-white flex flex-col p-6 pt-10 shadow-lg overflow-y-auto">
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
              src="/images/iper-logo.webp"
              alt="Logo"
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
