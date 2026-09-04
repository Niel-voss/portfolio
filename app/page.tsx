import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <HeroSection />
        {children}
      </body>
    </html>
  );
}