import React from "react";
import Link from "next/link";

const experiences = [
  {
    title: "Independent Software Developer",
    date: "Ongoing",
    company: "Vendly",
    location: "Personal Product · UNIBEN",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M3 10h18M8 4v6M16 4v6" />
      </svg>
    ),
    description:
      "Building a marketplace that helps University of Benin students buy, sell, and discover services within their campus community.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    bullets: [
      "Built and deployed a full-stack marketplace, taking ownership of the frontend, backend, database, and deployment.",
      "Implemented authentication, student verification, listing management, and buyer-seller messaging.",
      "Integrated real-time chat, Cloudinary image uploads, and cursor-based pagination.",
      "Worked on input validation, access control, and IDOR prevention to make user actions safer.",
      "Made product and infrastructure decisions with a focus on usability, maintainability, and keeping early operating costs low.",
    ],
  },
  {
    title: "Final-Year Project Developer",
    date: "University Project",
    company: "RBAC System",
    location: "University of Benin",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    description:
      "Developed a role-based access control system as my final-year project, exploring how applications can manage permissions and restrict access to protected resources.",
    tags: ["Next.js", "Auth.js", "Prisma", "bcrypt"],
    bullets: [
      "Implemented authentication and role-based authorization for protected routes and application features.",
      "Used middleware and server-side checks to control access based on user roles.",
      "Worked with Prisma and a PostgreSQL database to manage application data.",
      "Built administrative functionality around user roles and permissions, including a chief administrator role.",
      "Applied practical security concepts involving password hashing, session handling, and access control.",
    ],
  },
  {
    title: "Frontend Development Training",
    date: "Training / SIWES",
    company: "IGHub",
    location: "Benin City, Nigeria",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <path d="m14 4-4 16" />
      </svg>
    ),
    description:
      "Developed my frontend foundations through hands-on learning, practice, and building for the web.",
    tags: ["HTML", "CSS", "JavaScript"],
    bullets: [
      "Practised building web interfaces with HTML and CSS.",
      "Explored JavaScript to introduce interactivity and dynamic behaviour.",
      "Strengthened my understanding of responsive layouts and translating designs into working interfaces.",
    ],
  },
  {
    title: "B.Sc. Computer Science",
    date: "Graduate",
    company: "University of Benin (UNIBEN)",
    location: "Benin City, Nigeria",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m22 10-10-5-10 5 10 5 10-5Z" />
        <path d="M6 12v5c3.5 3 8.5 3 12 0v-5" />
        <path d="M22 10v6" />
      </svg>
    ),
    description:
      "Completed my Computer Science degree while developing an interest in software engineering and building practical solutions.",
    tags: ["Software Engineering", "Databases", "Problem Solving"],
    bullets: [
      "Built a foundation in computing, programming, algorithms, and database concepts.",
      "Applied what I learned through academic projects and independent software development.",
      "Continued learning beyond coursework by building and deploying real applications.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full overflow-x-hidden border-t border-white/5 bg-[#07070a] px-6 py-16 font-sans text-white md:px-10 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Section introduction */}
          <div className="flex flex-col items-start lg:sticky lg:top-28 lg:col-span-4">
            <div className="mb-5 inline-flex w-max items-center rounded-full bg-[#a855f7]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#a855f7]">
              Experience & Projects
            </div>

            <h2 className="mb-5 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.5rem]">
              Learning by{" "}
              <span className="text-[#a855f7]">building.</span>
            </h2>

            <p className="mb-8 max-w-sm text-sm leading-relaxed text-gray-400 md:text-base">
              I'm a Computer Science graduate who enjoys understanding how
              software works beyond the interface. Most of my growth has come
              from building projects, solving problems, and learning to take
              an idea from code to deployment.
            </p>

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              View Full Resume
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </Link>
          </div>

          {/* Experience timeline */}
          <div className="mt-2 lg:col-span-8 lg:mt-0">
            <div className="flex flex-col">
              {experiences.map((exp, index) => {
                const isLast = index === experiences.length - 1;

                return (
                  <article
                    key={exp.title}
                    className={`group relative flex items-start gap-4 md:gap-6 ${!isLast ? "pb-14 md:pb-16" : ""
                      }`}
                  >
                    {/* Timeline */}
                    <div className="relative flex w-3 shrink-0 justify-center self-stretch pt-6">
                      <div className="relative z-10 mt-0.5 h-3 w-3 shrink-0 rounded-full bg-[#a855f7] ring-4 ring-[#07070a] transition-shadow group-hover:shadow-[0_0_14px_rgba(168,85,247,0.65)]" />

                      {!isLast && (
                        <div className="absolute bottom-0 left-1/2 top-9 w-px -translate-x-1/2 bg-white/10" />
                      )}
                    </div>

                    {/* Icon */}
                    <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-[#0d0d13] text-[#a855f7] transition-transform duration-300 group-hover:scale-105 md:h-14 md:w-14">
                      {exp.icon}
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1 pt-1">
                      <div className="mb-2 flex flex-col gap-1 xl:flex-row xl:items-center xl:justify-between xl:gap-4">
                        <h3 className="text-base font-bold leading-snug text-gray-100 md:text-lg">
                          {exp.title}
                        </h3>

                        <span className="shrink-0 text-xs font-medium text-[#a855f7] md:text-sm">
                          {exp.date}
                        </span>
                      </div>

                      <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-400">
                        <span className="font-medium text-gray-300">
                          {exp.company}
                        </span>
                        <span className="text-[10px] text-gray-600">●</span>
                        <span>{exp.location}</span>
                      </div>

                      <p className="mb-4 text-sm leading-relaxed text-gray-400">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-5 flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <ul className="flex flex-col gap-3">
                        {exp.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 text-sm leading-relaxed text-gray-400"
                          >
                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#a855f7]/60" />
                            <span className="min-w-0 flex-1">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}