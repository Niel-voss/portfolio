import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-[#07070a] text-white py-16 lg:py-24 px-6 md:px-10 overflow-x-hidden border-t border-white/5 font-sans">
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

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
              I'm a full-stack developer focused on building modern web applications that balance thoughtful design with reliable engineering. I enjoy taking ideas from concept to production, solving complex problems and creating experiences that feel simple to use.
            </p>

            <div className="flex flex-col gap-6">

              {/* Feature 1: Problem Solver */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shrink-0 text-[#a855f7]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-200 font-semibold text-sm mb-1.5">Problem Solver</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    I enjoy breaking complex problems into practical solutions.
                  </p>
                </div>
              </div>

              {/* Feature 2: User Focused */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shrink-0 text-[#a855f7]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-200 font-semibold text-sm mb-1.5">User Focused</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    I build with clarity, usability and real users in mind.
                  </p>
                </div>
              </div>

              {/* Feature 3: Full Stack */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shrink-0 text-[#a855f7]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l8 4.5v9L12 22l-8-4.5v-9L12 2z"></path>
                    <polyline points="12 22 12 11"></polyline>
                    <polyline points="12 11 20 6.5"></polyline>
                    <polyline points="4 6.5 12 11"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-200 font-semibold text-sm mb-1.5">Full Stack</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    From interfaces and APIs to databases and authentication.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= MIDDLE COLUMN: Info Card (Col Span 4) ================= */}
          <div className="col-span-1 lg:col-span-4 mt-8 lg:mt-0">
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
                  <div className="text-gray-200">Lagos, Nigeria</div>
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
                  <div className="text-gray-200">Graduate (2026)</div>
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

          {/* ================= RIGHT COLUMN: What I Bring (Col Span 3) ================= */}
          <div className="col-span-1 lg:col-span-3 flex flex-col gap-4 mt-8 lg:mt-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#a855f7]/10 text-[#a855f7] text-[11px] font-bold tracking-widest uppercase w-max">
              What I Bring
            </div>

            <div className="bg-[#0a0a0f] border border-white/5 rounded-2xl p-6 flex flex-col justify-center gap-7 shadow-lg h-full">

              {/* Item 1: Full-Stack */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#a855f7]/10 flex items-center justify-center shrink-0 text-[#a855f7]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[1.1rem] font-bold text-gray-100 leading-none mb-1.5 mt-1">Full-Stack</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Frontend + backend development</p>
                </div>
              </div>

              {/* Item 2: Product Mindset */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#a855f7]/10 flex items-center justify-center shrink-0 text-[#a855f7]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                    <path d="M15 11.23C15 9.94 15.82 8.78 17 8.35C18.42 7.82 19 6.47 19 5.09a7 7 0 1 0-14 0c0 1.38.58 2.73 2 3.26c1.18.43 2 1.59 2 2.88V18"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[1.1rem] font-bold text-gray-100 leading-none mb-1.5 mt-1">Product Mindset</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">From idea → design → implementation</p>
                </div>
              </div>

              {/* Item 3: Security Focused */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#a855f7]/10 flex items-center justify-center shrink-0 text-[#a855f7]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[1.1rem] font-bold text-gray-100 leading-none mb-1.5 mt-1">Security Focused</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Authentication, RBAC & data protection</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}