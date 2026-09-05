import React from "react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "Understand your goals, audience, and challenges through research and meaningful conversations.",
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
      description: "Craft intuitive user experiences and clean interfaces that solve real problems.",
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
      description: "Write clean, scalable code and build fast, reliable products with modern technologies.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
    {
      number: "04",
      title: "Deliver",
      description: "Test, deploy, and iterate based on feedback to ensure continuous improvement.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5M22 2c0 0-1.5 3-4 6l-6.5 6.5a2.12 2.12 0 0 1-3 0 2.12 2.12 0 0 1 0-3L15 5c3-2.5 6-4 6-4Z"></path>
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
          <div className="col-span-1 lg:col-span-3 flex flex-col items-start">

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

            {/* Horizontal Connecting Line (Only visible on large screens when grid is 1 row) */}
            <div className="hidden lg:block absolute top-[85px] left-8 right-8 h-[1px] bg-[#a855f7]/30 z-0"></div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 relative z-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-[#0a0a0f] border border-white/5 rounded-2xl p-6 lg:p-7 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1 duration-300 relative group"
                >

                  {/* Step Number Badge (Top Left Corner) */}
                  <div className="absolute top-4 left-4 w-7 h-7 rounded-full bg-[#a855f7]/10 flex items-center justify-center border border-[#a855f7]/20">
                    <span className="text-[#a855f7] text-[10px] font-bold tracking-wide">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="text-[#a855f7] mt-8 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-100 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
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