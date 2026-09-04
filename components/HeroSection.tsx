import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#07070a] text-white overflow-hidden pt-12 pb-24 px-6 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 relative z-10">

        {/* ================= LEFT COLUMN: Text Content ================= */}
        <div className="flex-1 flex flex-col items-start w-full z-20">
          <p className="text-gray-300 text-lg mb-4 flex items-center gap-2 font-medium">
            Hi, I'm Daniel <span className="animate-pulse origin-bottom-right">👋</span>
          </p>

          <h1 className="text-[2.75rem] leading-[1.1] sm:text-5xl lg:text-6xl lg:leading-[1.15] font-bold mb-6 tracking-tight">
            I build clean, functional <br className="hidden md:block" />
            and useful <span className="text-[#a855f7]">digital products.</span>
          </h1>

          <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-[540px] mb-10">
            I'm a full-stack developer who loves turning ideas into real web applications. I focus on creating smooth user experiences, writing clean code and building solutions that actually solve problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mb-10 lg:mb-12">
            <Link
              href="/projects"
              className="w-full sm:w-auto bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3.5 rounded-full flex items-center justify-center gap-2 text-sm font-medium transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
            >
              View My Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>

            <a
              href="/cv.pdf"
              download
              className="w-full sm:w-auto bg-transparent border border-white/20 hover:bg-white/5 text-white px-8 py-3.5 rounded-full flex items-center justify-center gap-2 text-sm font-medium transition-all"
            >
              Download CV
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-7 text-gray-400">
            {/* GitHub */}
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
            {/* X / Twitter */}
            <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            {/* Email */}
            <a href="mailto:contact@example.com" className="hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: Visuals & Image ================= */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">

          {/* Main Background Purple Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-[#a855f7]/30 blur-[100px] rounded-full z-0 pointer-events-none"></div>

          <div className="relative w-full max-w-[340px] lg:max-w-[420px] z-10 flex flex-col items-center">

            {/* Hand-drawn Doodle (Responsive Positioning) */}
            <div className="absolute -top-4 -left-8 lg:top-16 lg:-left-24 transform -rotate-[8deg] flex flex-col items-center z-30">
              <p className="font-sans italic text-gray-400 text-sm lg:text-base opacity-80 whitespace-nowrap mb-1">
                Just a dev <br /> building his dreams...
              </p>
              {/* Squiggly Arrow SVG */}
              <svg className="w-8 h-12 text-gray-500 transform rotate-12 -ml-6" viewBox="0 0 40 60" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10,5 Q30,15 25,35 T35,55" />
                <path d="M25,50 L35,55 L38,45" />
              </svg>
            </div>

            {/* Connecting Line from Image to Badge (Desktop Only) */}
            <svg className="hidden lg:block absolute top-[40%] -right-16 w-32 h-40 text-[#a855f7]/40 z-0 pointer-events-none" viewBox="0 0 100 150" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4">
              <path d="M0,0 Q60,10 60,60 L60,130 Q60,150 100,150" />
            </svg>

            {/* Main Portrait Image */}
            <div className="relative w-full aspect-[4/5] rounded-b-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop"
                alt="Developer Portrait"
                className="w-full h-full object-cover object-top"
              />
              {/* Fade out gradient to blend image bottom smoothly into the background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/20 to-transparent"></div>
            </div>

            {/* Floating Info Card (Badge) */}
            <div className="absolute -bottom-8 lg:bottom-12 right-0 lg:-right-20 bg-[#0d0d14]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-2xl z-30 w-[90%] sm:w-auto left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0">
              {/* Code Icon Container */}
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>

              {/* Badge Text */}
              <div className="whitespace-nowrap">
                <h3 className="text-gray-100 font-semibold text-sm lg:text-base">Full Stack Developer</h3>
                <p className="text-gray-400 text-xs mt-0.5">React • Next.js • Node.js</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}