"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#07070a] text-white relative overflow-x-hidden font-sans pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">

        {/* ================= TOP SECTION: Call to Action Card ================= */}
        <div className="relative w-full rounded-3xl bg-[#0a0a0f] border border-white/5 px-6 py-16 md:p-20 flex flex-col items-center text-center overflow-hidden mb-20 shadow-2xl">

          {/* 1. Base Grid Pattern */}
          <div
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(ellipse at center, transparent 20%, black 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black 80%)'
            }}
          ></div>

          {/* 2. Central Deep Purple Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] md:w-[600px] md:h-[300px] bg-[#a855f7]/20 blur-[100px] md:blur-[140px] rounded-full pointer-events-none z-0"></div>

          {/* 3. Sweeping Curved Lines (Abstract Orbits) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40" viewBox="0 0 1000 400" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M -100,100 C 200,-50 400,350 1100,200" stroke="url(#gradient-curve-1)" strokeWidth="1.5" />
            <path d="M -100,350 C 300,450 600,0 1100,300" stroke="url(#gradient-curve-2)" strokeWidth="1" opacity="0.5" />
            <defs>
              <linearGradient id="gradient-curve-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                <stop offset="30%" stopColor="#a855f7" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#a855f7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient-curve-2" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* 4. Glowing Sparkles/Stars */}
          <div className="absolute left-[15%] top-[25%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_3px_rgba(168,85,247,0.8)] z-0"></div>
          <div className="absolute right-[20%] bottom-[30%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_3px_rgba(168,85,247,0.8)] z-0"></div>
          <div className="absolute right-[35%] top-[20%] w-1 h-1 bg-[#a855f7] rounded-full blur-[1px] z-0"></div>

          {/* 5. Asymmetric Floating Code Tags */}
          {/* Left Tag: Positioned Higher */}
          <div className="absolute left-4 md:left-12 top-[20%] md:top-[30%] text-[#a855f7]/40 text-3xl md:text-[2.75rem] font-mono font-semibold select-none z-0">
            &lt;/&gt;
          </div>
          {/* Right Tag: Positioned Lower */}
          <div className="absolute right-4 md:right-12 bottom-[20%] md:bottom-[25%] text-[#a855f7]/40 text-3xl md:text-[2.75rem] font-mono font-semibold select-none z-0">
            &lt;/&gt;
          </div>

          {/* CTA Content (Foreground) */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Pill */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#a855f7]/10 text-[#a855f7] text-[11px] font-bold tracking-[0.15em] uppercase mb-6">
              LET'S WORK TOGETHER
            </div>

            {/* Heading */}
            <h2 className="text-[2rem] md:text-5xl font-bold leading-tight mb-5 tracking-tight">
              Let's build something <span className="text-[#a855f7]">useful.</span>
            </h2>

            {/* Subtext */}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-md mx-auto">
              Have a project in mind or just want to say hi? <br className="hidden sm:block" />
              I'd love to hear from you.
            </p>

            {/* Buttons (Built from scratch) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">

              {/* Get in touch (Solid) */}
              <Link
                href="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white px-7 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] active:scale-95"
              >
                <span>Get in touch</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </Link>

              {/* Download CV (Outline) */}
              <a
                href="/cv.pdf"
                download
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border border-white/20 hover:bg-white/5 text-white px-7 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all active:scale-95"
              >
                <span>Download CV</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-y-0.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* ================= MIDDLE SECTION: Footer Links Grid ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Logo & Bio (Spans 2 cols on desktop) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="text-[#a855f7] flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 26V6L16 12V20L22 6V26" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 18L16 12M16 20L22 14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-lg font-semibold tracking-wide">Niel_Voss</span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Full-stack developer who loves building clean, functional, and useful digital products.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-6 text-gray-400">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="mailto:contact@example.com" className="hover:text-white transition-colors" aria-label="Email">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="col-span-1 flex flex-col">
            <h3 className="text-[#a855f7] font-semibold text-sm mb-5">Navigation</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/skills" className="hover:text-white transition-colors">Skills</Link></li>
            </ul>
          </div>

          {/* Column 3: More */}
          <div className="col-span-1 flex flex-col">
            <h3 className="text-[#a855f7] font-semibold text-sm mb-5">More</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li><Link href="/experience" className="hover:text-white transition-colors">Experience</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Let's Connect (Spans 2 cols on desktop) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col items-start lg:pl-8">
            <h3 className="text-[#a855f7] font-semibold text-sm mb-5">Let's connect</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Open to new opportunities and interesting projects.
            </p>
            {/* Outlined Contact Button matching design */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-gray-200 text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Get in touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

        </div>

        {/* ================= BOTTOM SECTION: Copyright & Back to Top ================= */}
        <div className="w-full h-px bg-white/10 mb-6"></div>

        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Niel_Voss. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-[#a855f7]/20 group-hover:border-[#a855f7]/50 transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </div>
            <span>Back to top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}