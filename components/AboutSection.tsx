import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#07070a] text-white py-16 lg:py-24 px-6 md:px-10 overflow-x-hidden border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">

          {/* ================= LEFT COLUMN: Text & Features (Col Span 5) ================= */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#a855f7]/10 text-[#a855f7] text-[11px] font-bold tracking-widest uppercase mb-6 w-max">
              About Me
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-[1.2] mb-5 tracking-tight">
              Turning ideas <br className="hidden md:block" />
              into <span className="text-[#a855f7]">real solutions.</span>
            </h2>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
              I'm Daniel, a Computer Science graduate from the University of Benin.
              I'm passionate about building scalable web applications, learning
              new technologies, and creating products that make life easier.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
              <div className="flex items-center gap-2.5 text-gray-300 font-medium text-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                  <path d="M12 2v1"></path>
                  <path d="M15.09 5.09l.71-.71"></path>
                  <path d="M18.91 18.91l-.71-.71"></path>
                  <path d="M22 12h-1"></path>
                  <path d="M18.91 5.09l-.71.71"></path>
                  <path d="M5.09 18.91l.71-.71"></path>
                  <path d="M2 12h1"></path>
                  <path d="M5.09 5.09l.71.71"></path>
                  <path d="M14 18c0-2-1-3-2-3s-2 1-2 3"></path>
                  <circle cx="12" cy="12" r="5"></circle>
                </svg>
                Problem Solver
              </div>

              <div className="flex items-center gap-2.5 text-gray-300 font-medium text-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                Fast Learner
              </div>

              <div className="flex items-center gap-2.5 text-gray-300 font-medium text-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Team Player
              </div>
            </div>
          </div>

          {/* ================= MIDDLE COLUMN: Info Card (Col Span 4) ================= */}
          <div className="col-span-1 lg:col-span-4">
            <div className="bg-[#0a0a0f] border border-white/5 rounded-2xl p-6 flex flex-col h-full shadow-lg">
              <div className="flex flex-col gap-5 flex-grow text-sm">
                <div className="grid grid-cols-[100px_1fr] xl:grid-cols-[110px_1fr] items-start">
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <span>Name</span>
                  </div>
                  <div className="text-gray-200">Daniel (Niel_Voss)</div>
                </div>

                <div className="grid grid-cols-[100px_1fr] xl:grid-cols-[110px_1fr] items-start">
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span>Location</span>
                  </div>
                  <div className="text-gray-200">Benin City, Nigeria</div>
                </div>

                <div className="grid grid-cols-[100px_1fr] xl:grid-cols-[110px_1fr] items-start">
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                    <span>Education</span>
                  </div>
                  <div className="text-gray-200 leading-snug">B.Sc. Computer Science<br />(UNIBEN)</div>
                </div>

                <div className="grid grid-cols-[100px_1fr] xl:grid-cols-[110px_1fr] items-start">
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    <span>Experience</span>
                  </div>
                  <div className="text-gray-200">Graduate (2025)</div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/5">
                <p className="text-gray-400 italic text-sm leading-relaxed">
                  "Better code. Better products. <br className="hidden sm:block lg:hidden" />
                  A bigger impact."
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Achievements (Col Span 3) ================= */}
          <div className="col-span-1 lg:col-span-3 flex flex-col gap-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#a855f7]/10 text-[#a855f7] text-[11px] font-bold tracking-widest uppercase w-max">
              Achievements
            </div>

            <div className="bg-[#0a0a0f] border border-white/5 rounded-2xl p-6 flex flex-col justify-center gap-7 shadow-lg h-full">

              {/* Stat 1: Projects */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#a855f7]/10 flex items-center justify-center shrink-0 text-[#a855f7]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[1.35rem] font-semibold text-gray-100 leading-none mb-1.5">5+</h3>
                  <p className="text-gray-400 text-sm">Projects Completed</p>
                </div>
              </div>

              {/* Stat 2: Technologies */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#a855f7]/10 flex items-center justify-center shrink-0 text-[#a855f7]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l8 4.5v9L12 22l-8-4.5v-9L12 2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[1.35rem] font-semibold text-gray-100 leading-none mb-1.5">3+</h3>
                  <p className="text-gray-400 text-sm mb-0.5">Technologies Mastered</p>
                  <p className="text-gray-500 text-xs">(Still learning...)</p>
                </div>
              </div>

              {/* Stat 3: Goal */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#a855f7]/10 flex items-center justify-center shrink-0 text-[#a855f7]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[1.35rem] font-semibold text-gray-100 leading-none mb-1.5">1</h3>
                  <p className="text-gray-400 text-sm mb-0.5">Goal</p>
                  <p className="text-gray-500 text-xs">Build products that matter.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}