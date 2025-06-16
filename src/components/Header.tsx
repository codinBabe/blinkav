"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const menu = [
    { label: "Home", href: "/" },
    {
      label: "Our Services",
      dropdown: [
        {
          label: "Residential Solutions",
          href: "/services/residential-solutions",
        },
        { label: "Workplace Solutions", href: "/services/workplace-solutions" },
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
    <header className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Image
              src="/images/iper-logo.webp"
              alt="Company Logo"
              width={250}
              height={50}
            />
          </div>

          <nav>
            <ul className="nav-font flex items-center space-x-8 relative">
              {menu.map((item, index) =>
                item.dropdown ? (
                  <li
                    key={index}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <span className="inline-flex items-center">
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
                      <ul className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg z-10 space-y-3 rounded-md py-2">
                        {item.dropdown.map((subItem, subIdx) => (
                          <li
                            key={subIdx}
                            className="px-4 py-2 hover:bg-gray-100"
                          >
                            <Link href={subItem.href}>{subItem.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={index}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
