import Link from "next/link";
import DownloadCvBtn from "./DownloadCvBtn";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#07070a] text-white overflow-x-hidden pt-20 pb-24 lg:pt-32 lg:pb-32 px-6 md:px-10 font-sans">

      {/* Reduced mobile gap from gap-16 to gap-6 to pull the image up */}
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 relative z-10">

        {/* ================= LEFT COLUMN: Text Content ================= */}
        <div className="flex-1 flex flex-col items-start w-full z-20">
          <p className="text-gray-300 text-lg mb-4 flex items-center gap-2 font-medium">
            Hi, I'm Niel Voss <span className="animate-pulse origin-bottom-right">👋</span>
          </p>

          <h1 className="text-[2.75rem] leading-[1.1] sm:text-5xl lg:text-6xl lg:leading-[1.15] font-bold mb-6 tracking-tight">
            I build clean, functional <br className="hidden md:block" />
            and purposeful <span className="text-[#a855f7]">digital products.</span>
          </h1>

          <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-[540px] mb-8 lg:mb-10">
            I'm a full-stack developer who loves turning ideas into real web applications. I focus on creating smooth user experiences, writing clean code and building solutions that actually solve problems.
          </p>

          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mb-8 lg:mb-12">
            <Link
              href="/#projects"
              className="w-full sm:w-auto bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3.5 rounded-full flex items-center justify-center gap-2 text-sm font-medium transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
            >
              View My Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>

            <DownloadCvBtn />
          </div>

          <div className="flex items-center gap-2 lg:gap-4 text-gray-300 mb-2 lg:mb-0">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 lg:p-2 hover:text-white hover:scale-110 transition-all duration-200">
              <svg className="w-8 h-8 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
            <a href="https://x.com/Niel_voss40202" target="_blank" rel="noreferrer" className="p-3 lg:p-2 hover:text-white hover:scale-110 transition-all duration-200">
              <svg className="w-8 h-8 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 lg:p-2 hover:text-white hover:scale-110 transition-all duration-200">
              <svg className="w-8 h-8 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="mailto:td0864691@gmail.com" className="p-3 lg:p-2 hover:text-white hover:scale-110 transition-all duration-200">
              <svg className="w-8 h-8 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: Visuals & Image ================= */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end z-10 pt-4 lg:pt-0">

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-[#a855f7]/30 blur-[100px] rounded-full z-0 pointer-events-none"></div>

          <div className="relative w-full max-w-[340px] lg:max-w-[420px] z-10 flex flex-col items-center">

            <div className="absolute -top-6 left-2 md:left-0 lg:top-8 lg:-left-28 transform -rotate-[8deg] flex flex-col items-center z-30">
              <p className="font-sans italic text-gray-400 text-sm lg:text-base opacity-80 whitespace-nowrap mb-1">
                From concept <br /> to production...
              </p>
              <svg className="w-12 h-12 text-gray-400/70 ml-12 mt-1" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 10,10 Q 15,40 45,40" />
                <path d="M 35,30 L 45,40 L 35,50" />
              </svg>
            </div>

            <svg className="hidden lg:block absolute top-[40%] -right-12 w-20 h-40 text-[#a855f7]/40 z-0 pointer-events-none" viewBox="0 0 100 150" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" strokeLinecap="round">
              <path d="M 10,0 C 80,40 80,110 10,150" />
            </svg>

            <div className="relative w-full aspect-[4/5] rounded-b-3xl overflow-hidden shadow-2xl z-10">
              <Image
                src="/portfolioIMG.webp"
                alt="Developer Portrait"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 lg:bottom-12 lg:-left-20 lg:translate-x-0 bg-[#0d0d14]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-2xl z-30 w-max max-w-[90%] sm:w-auto">
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="whitespace-nowrap">
                <h3 className="text-gray-100 font-semibold text-sm lg:text-base">Full Stack Developer</h3>
                <p className="text-gray-400 text-xs mt-0.5">React • Next.js • Node.js</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ================= THE DEMARCATION LINE ================= */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/5"></div>

    </section>
  );
}