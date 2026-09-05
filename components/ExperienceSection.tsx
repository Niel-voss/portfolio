import React from "react";
import Link from "next/link";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer / Full-Stack Developer",
      date: "Jan 2023 - Present",
      company: "TechNova Solutions",
      location: "Benin City, Nigeria",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      bullets: [
        "Architected and built scalable web applications used by thousands of users.",
        "Led the development of key product features using React, Next.js, and Node.js.",
        "Collaborated with designers and product managers to deliver high-impact solutions.",
        "Optimized applications for performance, SEO, and accessibility.",
      ],
    },
    {
      title: "Freelance Full-Stack Developer",
      date: "Jun 2021 - Dec 2022",
      company: "Self-Employed",
      location: "Remote",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          <path d="M12 12v.01"></path>
        </svg>
      ),
      bullets: [
        "Built custom web applications and dashboards for startups and small businesses.",
        "Delivered end-to-end solutions including UI/UX, backend, and database design.",
        "Integrated third-party APIs and payment systems.",
        "Maintained long-term client relationships with consistent delivery.",
      ],
    },
    {
      title: "Computer Science Graduate",
      date: "Sep 2018 - Jun 2022",
      company: "University of Benin (UNIBEN)",
      location: "Benin City, Nigeria",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
      bullets: [
        "Graduated with a B.Sc. in Computer Science.",
        "Focused on software engineering, algorithms, and databases.",
        "Built academic and personal projects that strengthened my practical skills.",
        "Member of the Google Developer Student Club.",
      ],
    },
  ];

  return (
    <section id="experience" className="w-full bg-[#07070a] text-white py-16 lg:py-24 px-6 md:px-10 overflow-x-hidden border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto w-full">

        {/* Main Grid: 1 col on mobile, 12 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ================= LEFT COLUMN: Header Info ================= */}
          <div className="col-span-1 lg:col-span-4 flex flex-col items-start lg:sticky lg:top-28 z-20">
            {/* Tag */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#a855f7]/10 text-[#a855f7] text-[11px] font-bold tracking-widest uppercase mb-5 w-max">
              EXPERIENCE
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-[1.2] mb-5 tracking-tight">
              My <span className="text-[#a855f7]">journey</span> so far.
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
              I've worked on a variety of projects—from building products to collaborating with teams—that have shaped me into the developer I am today.
            </p>

            {/* Button */}
            <Link
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 transition-colors rounded-full px-6 py-2.5 text-sm font-medium text-gray-200 hover:text-white"
            >
              View Full Resume
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

          {/* ================= RIGHT COLUMN: Timeline ================= */}
          <div className="col-span-1 lg:col-span-8 mt-4 lg:mt-0">
            {/* Removed gap-12 here, moving spacing to pb-12 on the children for exact math */}
            <div className="flex flex-col">
              {experiences.map((exp, index) => {
                const isLast = index === experiences.length - 1;

                return (
                  <div
                    key={index}
                    className={`flex items-stretch gap-5 md:gap-8 relative group ${!isLast ? "pb-12 md:pb-16" : ""}`}
                  >

                    {/* Timeline Axis (Line & Glow Dot) */}
                    <div className="w-4 shrink-0 flex flex-col items-center pt-6 relative">

                      {/* Glowing Dot (Center is perfectly at 32px from top) */}
                      <div className="w-4 h-4 rounded-full bg-[#a855f7] ring-[6px] ring-[#07070a] shadow-[0_0_15px_rgba(168,85,247,0.8)] relative z-20"></div>

                      {/* Connecting Line */}
                      {/* Starts at 32px (dot center) and stretches down exactly 32px into the next row to hit its dot center */}
                      {!isLast && (
                        <div className="absolute top-[32px] -bottom-[32px] left-1/2 -translate-x-1/2 w-[2px] bg-white/10 z-0"></div>
                      )}
                    </div>

                    {/* Prominent Icon Box (self-start keeps it from stretching) */}
                    <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 self-start rounded-2xl bg-[#0a0a0f] border border-white/5 flex items-center justify-center text-[#a855f7] shadow-md z-10 transition-transform group-hover:scale-105 duration-300">
                      {exp.icon}
                    </div>

                    {/* Content Details (self-start keeps it from stretching) */}
                    <div className="flex-1 flex flex-col pt-1 self-start">

                      {/* Header row: Title and Date */}
                      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-1 xl:gap-4 mb-2">
                        <h3 className="text-[1.1rem] md:text-[1.15rem] font-bold text-gray-100 leading-snug">
                          {exp.title}
                        </h3>
                        <span className="text-[#a855f7] text-sm font-medium shrink-0">
                          {exp.date}
                        </span>
                      </div>

                      {/* Subheader: Company and Location */}
                      <div className="flex flex-wrap items-center gap-x-2 text-sm text-gray-400 mb-5">
                        <span className="text-gray-300 font-medium">{exp.company}</span>
                        <span className="text-gray-600 text-[10px]">●</span>
                        <span>{exp.location}</span>
                      </div>

                      {/* Bullet Points */}
                      <ul className="flex flex-col gap-3">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                            <span className="text-[#a855f7]/50 mt-[7px] w-1.5 h-1.5 shrink-0 rounded-full bg-[#a855f7]/50"></span>
                            <span className="flex-1">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}