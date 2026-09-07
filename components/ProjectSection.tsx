import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siNeon,
  siPrisma,
  siPostgresql,
  siReact,
  siNodedotjs,
  siMongodb,
} from "simple-icons/icons";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Vendly",
      description: "A P2P marketplace for UNIBEN students to buy and sell fairly used items.",
      techStack: [
        { name: "Next.js", icon: siNextdotjs, colorOverride: "ffffff" },
        { name: "TypeScript", icon: siTypescript, colorOverride: "3178C6" },
        { name: "Tailwind", icon: siTailwindcss, colorOverride: "06B6D4" },
        { name: "Neon", icon: siNeon, colorOverride: "00E599" },
      ],
      status: "IN PRODUCTION",
      statusConfig: { color: "text-amber-400", dot: "bg-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20" },
      githubLink: "#",
      caseStudyLink: "#",
      liveLink: null,
      image: "/vendly.webp",
    },
    {
      title: "University of Miradelle",
      description: "RBAC system with middleware resource protection and audit logs.",
      techStack: [
        { name: "Next.js", icon: siNextdotjs, colorOverride: "ffffff" },
        { name: "Prisma", icon: siPrisma, colorOverride: "ffffff" },
        { name: "PostgreSQL", icon: siPostgresql, colorOverride: "4169E1" },
        { name: "Auth.js", image: "https://authjs.dev/img/logo-sm.png" },
      ],
      status: "LIVE",
      statusConfig: { color: "text-emerald-400", dot: "bg-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
      liveLink: "https://rbac-project-flame.vercel.app/",
      githubLink: "#",
      caseStudyLink: "#",
      image: "/rbac.webp",
    },
    {
      title: "Past Questions App",
      description: "A mobile application for UNIBEN past questions.",
      techStack: [
        { name: "React Native", icon: siReact, colorOverride: "61DAFB" },
        { name: "Node.js", icon: siNodedotjs, colorOverride: "339933" },
        { name: "MongoDB", icon: siMongodb, colorOverride: "47A248" },
      ],
      status: "IN DEVELOPMENT",
      statusConfig: { color: "text-purple-400", dot: "bg-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
      githubLink: "#",
      caseStudyLink: "#",
      liveLink: null,
      image: null,
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-[#07070a] text-white overflow-x-hidden font-sans"
    >
      <div className="w-full h-px bg-white/5"></div>

      <div className="py-16 lg:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto w-full">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

            {/* ================= LEFT COLUMN ================= */}
            <div className="col-span-1 lg:col-span-3 flex flex-col items-start lg:sticky lg:top-28">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#a855f7]/10 text-[#a855f7] text-[11px] font-bold tracking-widest uppercase mb-5 w-max">
                FEATURED PROJECTS
              </div>

              <h2 className="text-3xl md:text-4xl font-bold leading-[1.2] mb-4 tracking-tight">
                Some things <br className="hidden lg:block" /> I've built
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                A selection of projects that showcase my focus on solving real
                problems, building reliable systems, and crafting clean user
                experiences.
              </p>

              <Link
                href="/projects"
                className="hidden lg:inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 transition-colors rounded-full px-6 py-2.5 text-sm font-medium text-white"
              >
                View all projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* ================= PROJECT CARDS ================= */}
            <div className="col-span-1 lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">

                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-[#0c0c11] border border-white/5 rounded-[20px] flex flex-col h-full group hover:border-white/10 transition-all duration-300 shadow-lg p-4"
                  >
                    {/* Explicit Status Pill Badge */}
                    <div className="mb-4">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${project.statusConfig.bg} ${project.statusConfig.border}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${project.statusConfig.dot} animate-pulse`} />
                        <span className={`${project.statusConfig.color} text-[9px] font-bold tracking-widest uppercase`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description with minimum height lock */}
                    <h3 className="text-xl font-bold text-gray-100 mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-[13px] leading-relaxed mb-4 min-h-[40px]">
                      {project.description}
                    </p>

                    {/* Strictly Uniform 16:9 Image Preview */}
                    <div className="w-full aspect-video bg-gradient-to-br from-[#1a1a24] to-[#0d0d14] relative flex items-center justify-center overflow-hidden rounded-xl border border-white/5 mb-5 shrink-0">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.title} preview`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      ) : (
                        <div className="flex flex-col items-center gap-2 text-white/20 group-hover:scale-110 transition-transform duration-500">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                            <line x1="12" y1="18" x2="12.01" y2="18"></line>
                          </svg>
                          <span className="text-[10px] font-bold tracking-widest uppercase">App Mockup Pending</span>
                        </div>
                      )}
                    </div>

                    {/* Tech Stack with minimum height lock for uniform wrap wrapping */}
                    <div className="flex flex-wrap gap-2 mb-4 content-start min-h-[56px]">
                      {project.techStack.map((tech, i) => (
                        <div
                          key={i}
                          className="bg-white/5 border border-white/5 flex items-center gap-1.5 px-2 py-1 rounded-md h-max"
                        >
                          <div className="shrink-0 flex items-center justify-center">
                            {"image" in tech && tech.image ? (
                              <img src={tech.image} width="12" height="12" alt={`${tech.name} logo`} className="object-contain" />
                            ) : tech.icon ? (
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill={`#${tech.colorOverride || tech.icon.hex}`}
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                              >
                                <path d={tech.icon.path} />
                              </svg>
                            ) : null}
                          </div>
                          <span className="text-gray-300 text-[10.5px] font-medium">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action Links anchored to the bottom */}
                    <div className="mt-auto pt-3 border-t border-white/5 flex items-center gap-2 sm:gap-3 text-[11.5px] font-medium whitespace-nowrap overflow-hidden">
                      {project.liveLink && (
                        <>
                          <Link
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#a855f7] hover:text-[#c084fc] transition-colors inline-flex items-center gap-1.5 group/link"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            Live Preview
                          </Link>
                          <span className="text-gray-700 text-[8px]">•</span>
                        </>
                      )}

                      {project.caseStudyLink && (
                        <Link
                          href={project.caseStudyLink}
                          className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5 group/link"
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:scale-110 transition-transform">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                          Case Study
                        </Link>
                      )}

                      {project.githubLink && (
                        <>
                          <span className="text-gray-700 text-[8px]">•</span>
                          <Link
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5 group/link"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:scale-110 transition-transform">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            GitHub
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex justify-center lg:hidden">
                <Link
                  href="/projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 transition-colors rounded-full px-6 py-3.5 text-sm font-medium text-white"
                >
                  View all projects
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
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