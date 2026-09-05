import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niel Voss - Fullstack Developer",
  description: "Personal portfolio website for Thomas Daniel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#07070a] text-white">
        {children}
      </body>
    </html>
  );
}