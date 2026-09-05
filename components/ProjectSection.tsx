import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Vendly",
      description: "A P2P marketplace for UNIBEN students to buy and sell fairly used items.",
      techStack: ["Next.js", "TypeScript", "Tailwind"],
      link: "#",
    },
    {
      title: "University of Miradelle",
      description: "RBAC system for a university with role-based access, middleware resource protection, audit logs and more.",
      techStack: ["Next.js", "Prisma", "PostgreSQL"],
      link: "https://rbac-project-flame.vercel.app/",
      image: "/rbac.webp",
    },
    {
      title: "Past Questions App",
      description: "A mobile app for UNIBEN past questions (with monetization planned).",
      techStack: ["React Native", "Node.js", "MongoDB"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="w-full bg-[#07070a] text-white overflow-x-hidden font-sans">

      {/* ================= THE DEMARCATION LINE ================= */}
      <div className="w-full h-px bg-white/5"></div>

      {/* Section Padding applied inside the wrapper */}
      <div className="py-16 lg:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto w-full">

          {/* Main Grid: 1 col on mobile, 12 cols on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

            {/* ================= LEFT COLUMN: Text Info (Col Span 3) ================= */}
            <div className="col-span-1 lg:col-span-3 flex flex-col items-start lg:sticky lg:top-28">
              {/* Tag */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#a855f7]/10 text-[#a855f7] text-[11px] font-bold tracking-widest uppercase mb-5 w-max">
                FEATURED PROJECTS
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold leading-[1.2] mb-4 tracking-tight">
                Some things <br className="hidden lg:block" /> I've built
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                A few selected projects that showcase my skills, problem-solving approach and love for clean design and functionality.
              </p>

              {/* Desktop Button (Hidden on Mobile) */}
              <Link
                href="/projects"
                className="hidden lg:inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 transition-colors rounded-full px-6 py-2.5 text-sm font-medium text-white"
              >
                View all projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

            {/* ================= RIGHT COLUMN: Project Cards (Col Span 9) ================= */}
            <div className="col-span-1 lg:col-span-9">
              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-[#0a0a0f] border border-white/5 rounded-2xl overflow-hidden flex flex-col group hover:border-white/10 transition-colors shadow-lg"
                  >
                    {/* Project Preview */}
                    <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#1a1a24] to-[#0d0d14] relative flex items-center justify-center overflow-hidden border-b border-white/5">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.title} preview`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/10 group-hover:scale-110 transition-transform duration-500">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Title & Link Icon */}
                      <Link href={project.link} className="flex items-center justify-between group/link mb-3">
                        <h3 className="text-lg font-bold text-gray-100 group-hover/link:text-[#a855f7] transition-colors">
                          {project.title}
                        </h3>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover/link:text-[#a855f7] transition-colors">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </Link>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mt-6">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-white/5 border border-white/5 text-gray-300 text-[11px] font-medium px-3 py-1.5 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Button (Hidden on Desktop) */}
              <div className="mt-8 flex justify-center lg:hidden">
                <Link
                  href="/projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 transition-colors rounded-full px-6 py-3.5 text-sm font-medium text-white"
                >
                  View all projects
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}