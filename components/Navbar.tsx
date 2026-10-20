
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import GetInTouchButton from "./GetInTouchButton";

type Theme = "dark" | "light";

const THEME_STORAGE_KEY = "portfolio-theme";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "mailto:td0864691@gmail.com" },
  ];

  // Restore the saved theme when the navbar mounts.
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const initialTheme: Theme =
      savedTheme === "light" ? "light" : "dark";

    document.documentElement.setAttribute(
      "data-theme",
      initialTheme
    );

    setTheme(initialTheme);
  }, []);

  // Update the entire portfolio, not just the navbar.
  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute(
      "data-theme",
      nextTheme
    );

    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  };
  const themeToggle = (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="theme-toggle"
    >
      <span className="theme-toggle__icon" key={theme}>
        {theme === "dark" ? (
          // Sun icon — click to switch to light mode
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
          </svg>
        ) : (
          // Moon icon — click to switch to dark mode
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z" />
          </svg>
        )}
      </span>
    </button>
  );


  return (
    <nav
      className="sticky top-0 z-50 w-full border-b px-6 py-4 font-sans backdrop-blur-xl md:px-10"
      style={{
        background: "var(--portfolio-bg)",
        color: "var(--portfolio-text)",
        borderColor: "var(--portfolio-border)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div
            className="flex items-center justify-center"
            style={{ color: "var(--portfolio-accent)" }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
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

          <span className="text-xl font-semibold tracking-wide">
            Niel_Voss
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`border-b-2 py-1 text-sm font-medium transition-colors duration-200 ${link.active
                ? "border-[var(--portfolio-accent)] text-[var(--portfolio-accent)]"
                : "border-transparent text-[var(--portfolio-muted-strong)] hover:text-[var(--portfolio-text)]"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 lg:flex">
          {themeToggle}
          <GetInTouchButton />
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-3 lg:hidden">
          {themeToggle}

          <button
            type="button"
            className="relative flex h-6 w-6 flex-col items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`absolute h-[2px] w-6 rounded-full transition-all duration-300 ${isMobileMenuOpen
                ? "translate-y-0 rotate-45"
                : "-translate-y-2"
                }`}
              style={{
                background: "var(--portfolio-text)",
              }}
            />
            <span
              className={`absolute h-[2px] w-6 rounded-full transition-all duration-300 ${isMobileMenuOpen
                ? "translate-x-2 opacity-0"
                : "translate-x-0 opacity-100"
                }`}
              style={{
                background: "var(--portfolio-text)",
              }}
            />
            <span
              className={`absolute h-[2px] w-6 rounded-full transition-all duration-300 ${isMobileMenuOpen
                ? "translate-y-0 -rotate-45"
                : "translate-y-2"
                }`}
              style={{
                background: "var(--portfolio-text)",
              }}
            />
          </button>
        </div>
      </div>

      {/* Animated mobile menu */}
      <div
        className={`grid transition-all duration-300 ease-in-out lg:hidden ${isMobileMenuOpen
          ? "mt-4 grid-rows-[1fr] opacity-100"
          : "mt-0 grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <div
            className="flex flex-col gap-3 rounded-2xl border p-5 shadow-xl"
            style={{
              background: "var(--portfolio-card)",
              borderColor: "var(--portfolio-border)",
              boxShadow: "var(--portfolio-card-shadow)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${link.active
                  ? "text-[var(--portfolio-accent)]"
                  : "text-[var(--portfolio-muted-strong)] hover:text-[var(--portfolio-text)]"
                  }`}
                style={
                  link.active
                    ? {
                      background: "var(--portfolio-accent-soft)",
                    }
                    : undefined
                }
              >
                {link.name}
              </Link>
            ))}

            <div
              className="my-1 h-px w-full"
              style={{
                background: "var(--portfolio-border)",
              }}
            />

            <GetInTouchButton
              className="w-full py-3.5"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
