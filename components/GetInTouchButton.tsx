import React from "react";
import Link from "next/link";

interface GetInTouchButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function GetInTouchButton({
  href = "/contact",
  onClick,
  className = "",
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
    bg-[#8b5cf6] hover:bg-[#7c3aed] text-white 
    px-5 py-2.5 rounded-xl text-sm font-medium tracking-wide
    transition-all duration-200 ease-in-out
    shadow-sm hover:shadow-md active:scale-95
    ${className}
  `;

  // Render as a Link if href is provided, otherwise render as a standard button
  if (onClick) {
    return (
      <button onClick={onClick} className={baseStyles}>
        {buttonContent}
      </button>
    );
  }

  return (
    <Link href={href} className={baseStyles}>
      {buttonContent}
    </Link>
  );
}