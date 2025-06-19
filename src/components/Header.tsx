"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SocialIcon from "./Social-Icon";

const Header: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <Image
            src={
              noBgPaths
                ? "/images/iper-logo-white.webp"
                : "/images/iper-logo.webp"
            }
            alt="Company Logo"
            width={250}
            height={50}
          />
        </div>

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
                  } inline-flex items-center neue-font font-bold leading-[70px] text-[15px]`}
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
                          className="neue-font font-bold leading-loose text-[15px]"
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
                } neue-font font-bold leading-[70px] text-[15px]`}
                href={item.href}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(true)}>
            <Bars3Icon
              className={`w-8 h-8 ${noBgPaths ? "text-white" : "text-black"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="w-4/5 fixed top-0 right-0 h-full z-50 bg-white flex flex-col items-center justify-start p-6 pt-10 space-y-6 shadow-lg">
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4"
          >
            <XMarkIcon className="w-6 h-6 text-black" />
          </button>

          {/* Logo */}
          <Image
            src="/images/iper-logo.webp"
            alt="Logo"
            width={400}
            height={50}
          />

          {/* Mobile Links */}
          <nav className="w-full flex flex-col items-center space-y-7 mt-6">
            {menu.map((item, idx) =>
              item.dropdown ? (
                <div key={idx} className="w-full group">
                  <span className="cursor-pointer neue-font font-bold text-[15px] flex justify-center items-center gap-1 border-b border-b-[#dddddd]">
                    {item.label}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                  {isDropdownOpen && (
                    <ul className="mt-2 space-y-4">
                      {item.dropdown.map((sub, i) => (
                        <li key={i}>
                          <Link
                            href={sub.href}
                            className="neue-font text-[15px] font-bold border-b border-b-[#dddddd]"
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
                  className="neue-font font-bold text-[15px] border-b border-b-[#dddddd]"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 pt-2">
            <SocialIcon bgColor="bg-none" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
