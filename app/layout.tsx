import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 1. Import your preferred font here
import "./globals.css";

// 2. Configure the font
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Ensures text remains visible during webfont load
});

export const metadata: Metadata = {
  title: "Thomas Daniel - Fullstack Developer",
  description: "Personal portfolio website for Thomas Daniel",
};

// 3. Standardize the TypeScript props for Next.js layouts
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      {/* 4. Apply the font's className directly to the body */}
      <body className={`${inter.className} min-h-full flex flex-col bg-[#07070a] text-white`}>
        {children}
      </body>
    </html>
  );
}