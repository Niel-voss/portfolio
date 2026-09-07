import React from "react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "Understand the problem, users and requirements.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
    },
    {
      number: "02",
      title: "Design",
      description: "Plan the experience, interface and architecture.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          <line x1="14" y1="5" x2="19" y2="10"></line>
          <line x1="16" y1="20" x2="22" y2="20"></line>
        </svg>
      ),
    },
    {
      number: "03",
      title: "Build",
      description: "Develop the product with clean, maintainable code.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
    {
      number: "04",
      title: "Test",
      description: "Validate functionality, usability and edge cases.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 11 14 15 10"></polyline>
        </svg>
      ),
    },
    {
      number: "05",
      title: "Deploy",
      description: "Ship, monitor and continuously improve.",
      // Replaced with a clean, modern gear icon
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#07070a] text-white py-16 lg:py-24 px-6 md:px-10 overflow-x-hidden border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto w-full">

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ================= LEFT COLUMN: Header Info ================= */}
          <div className="col-span-1 lg:col-span-3 flex flex-col items-start lg:sticky lg:top-28">

            {/* Tag */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#a855f7]/10 text-[#a855f7] text-[11px] font-bold tracking-widest uppercase mb-5 w-max">
              PROCESS / HOW I WORK
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[2.25rem] font-bold leading-[1.2] mb-5 tracking-tight">
              How I turn ideas <br className="hidden lg:block" />
              <span className="text-[#a855f7]">into products.</span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              A simple, collaborative process that helps ensure we build the right solution—together.
            </p>

          </div>

          {/* ================= RIGHT COLUMN: Process Cards ================= */}
          <div className="col-span-1 lg:col-span-9 relative">

            {/* Horizontal Connecting Line (Visible only when grid forms a single row on xl screens) */}
            <div className="hidden xl:block absolute top-[85px] left-8 right-8 h-[1px] bg-[#a855f7]/30 z-0"></div>

            {/* Cards Grid: Adjusted for 5 items (wraps on lg, single row on xl) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6 relative z-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-[#0a0a0f] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1 duration-300 relative group"
                >

                  {/* Step Number Badge (Top Left Corner) */}
                  <div className="absolute top-4 left-4 w-7 h-7 rounded-full bg-[#a855f7]/10 flex items-center justify-center border border-[#a855f7]/20">
                    <span className="text-[#a855f7] text-[10px] font-bold tracking-wide">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="text-[#a855f7] mt-8 mb-5 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-100 mb-2.5">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-[13px] leading-relaxed">
                    {step.description}
                  </p>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}