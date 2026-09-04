"use client";

import { useState } from "react";
import Link from "next/link";
import GetInTouchButton from "./GetInTouchButton";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-[#07070a] text-white py-4 px-6 md:px-10 font-sans border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          {/* Stylized N Logo SVG */}
          <div className="text-[#a855f7] flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 26V6L16 12V20L22 6V26"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 18L16 12M16 20L22 14"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-xl font-semibold tracking-wide">Niel_Voss</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 py-1 ${link.active
                  ? "text-[#a855f7] border-b-2 border-[#a855f7]"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions (Theme Toggle & Button) */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Sun / Theme Icon */}
          <button
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle Theme"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="M4.93 4.93l1.41 1.41"></path>
              <path d="M17.66 17.66l1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="M6.34 17.66l-1.41 1.41"></path>
              <path d="M19.07 4.93l-1.41 1.41"></path>
            </svg>
          </button>

          {/* Get in Touch Button */}
          <GetInTouchButton />
        </div>

        {/* Mobile Animated Hamburger Menu Button */}
        <button
          className="lg:hidden relative w-6 h-5 flex flex-col justify-between items-center group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`absolute h-[2px] w-full bg-gray-200 rounded-lg transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "rotate-45 top-2.5 bg-white" : "top-0"
              }`}
          />
          <span
            className={`absolute h-[2px] w-full bg-gray-200 rounded-lg transform transition-all duration-300 ease-in-out top-2.5 ${isMobileMenuOpen ? "opacity-0 translate-x-3" : "opacity-100"
              }`}
          />
          <span
            className={`absolute h-[2px] w-full bg-gray-200 rounded-lg transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "-rotate-45 top-2.5 bg-white" : "top-5"
              }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu (Animated Grid approach) */}
      <div
        className={`lg:hidden grid transition-all duration-300 ease-in-out ${isMobileMenuOpen
            ? "grid-rows-[1fr] opacity-100 mt-4"
            : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
      >
        <div className="overflow-hidden">
          <div className="bg-[#0a0a0f] rounded-lg border border-white/10 p-4 flex flex-col gap-4 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium px-2 py-2 rounded-md transition-colors ${link.active
                    ? "text-[#a855f7] bg-[#a855f7]/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-[1px] bg-white/10 w-full my-2"></div>

            {/* Mobile Contact Button */}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#a855f7] text-center text-white px-5 py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors hover:bg-[#9333ea]"
            >
              Get in touch
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="-mt-0.5"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}