import React from "react";
import Link from "next/link";

export default function SkillsExpertiseSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Redux Toolkit"],
    },
    {
      title: "Backend &\nAPIs",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Next.js API", "JWT", "Bcrypt", "Zod"],
    },
    {
      title: "Database &\nAuth",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      skills: ["PostgreSQL", "MongoDB", "Prisma", "Neon", "Firebase Auth", "Supabase", "Redis", "Drizzle ORM"],
    },
    {
      title: "UI/UX &\n Other Tools",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"></path>
          <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"></path>
        </svg>
      ),
      skills: ["Figma", "Framer Motion", "Shadcn/UI", "Radix UI", "Git & GitHub", "VS Code", "Postman", "Vercel"],
    },
  ];

  return (
    <section id="skills" className="w-full bg-[#07070a] text-white py-16 lg:py-24 px-6 md:px-10 overflow-x-hidden border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto w-full">

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* ================= LEFT COLUMN: Header Info (Col Span 3) ================= */}
          <div className="col-span-1 lg:col-span-3 flex flex-col items-start lg:sticky lg:top-28">

            {/* Tag */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#a855f7]/10 text-[#a855f7] text-[11px] font-bold tracking-widest uppercase mb-5 w-max">
              SKILLS / EXPERTISE
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[2.25rem] font-bold leading-[1.2] mb-5 tracking-tight">
              What I bring <br /> to <span className="text-[#a855f7]">the table.</span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              A blend of modern technologies, solid fundamentals, and continuous learning to build reliable, scalable, and delightful user experiences.
            </p>

            {/* Button */}
            <Link
              href="/skills"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 transition-colors rounded-full px-6 py-2.5 text-sm font-medium text-gray-200 hover:text-white"
            >
              View all skills
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>

          </div>

          {/* ================= RIGHT COLUMN: Skills Grid (Col Span 9) ================= */}
          <div className="col-span-1 lg:col-span-9">

            {/* Cards Grid: 1 col mobile, 2 cols tablet, 4 cols large desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-[#0a0a0f] border border-white/5 rounded-2xl p-6 flex flex-col shadow-lg transition-transform hover:-translate-y-1 duration-300"
                >

                  {/* Category Icon */}
                  <div className="text-[#a855f7] mb-6">
                    {category.icon}
                  </div>

                  {/* Category Title */}
                  <h3 className="text-xl font-bold text-gray-100 mb-6 whitespace-pre-line leading-snug">
                    {category.title}
                  </h3>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-white/5 border border-white/5 text-gray-300 text-[11px] font-medium px-3 py-1.5 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}