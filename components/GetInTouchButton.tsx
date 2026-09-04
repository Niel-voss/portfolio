import React from "react";
import Link from "next/link";

interface GetInTouchButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  asButton?: boolean; // Added so you can trigger clicks without losing the href route if needed
}

export default function GetInTouchButton({
  href = "/contact",
  onClick,
  className = "",
  asButton = false,
}: GetInTouchButtonProps) {
  const buttonContent = (
    <>
      <span>Get in touch</span>
      {/* Paper Plane Icon */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
      </svg>
    </>
  );

  const baseStyles = `
    group inline-flex items-center justify-center gap-2 
    bg-[#a855f7] hover:bg-[#9333ea] text-white 
    px-6 py-2.5 rounded-full text-sm font-medium tracking-wide
    transition-all duration-200 ease-in-out
    shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] active:scale-95
    ${className}
  `;

  // Render strictly as a button (e.g., for forms or specific click events)
  if (asButton) {
    return (
      <button onClick={onClick} className={baseStyles}>
        {buttonContent}
      </button>
    );
  }

  // Render as a Next.js Link (can also accept an onClick to close mobile menus)
  return (
    <Link href={href} onClick={onClick} className={baseStyles}>
      {buttonContent}
    </Link>
  );
}