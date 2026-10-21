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

const projects = [
  {
    title: "Vendly",
    description:
      "A student-to-student marketplace for UNIBEN, connecting people who want to buy or sell items and offer services.",
    techStack: [
      { name: "Next.js", icon: siNextdotjs, colorOverride: "ffffff" },
      { name: "TypeScript", icon: siTypescript },
      { name: "Tailwind CSS", icon: siTailwindcss },
      { name: "Neon", icon: siNeon },
    ],
    status: "LIVE",
    statusStyle: "live",
    liveLink: "https://vendlymarket.com.ng",
    githubLink: null,
    caseStudyLink: "/projects/vendly-market",
    image: "/vendly.png",
  },
  {
    title: "University of Miradelle",
    description:
      "A university management system (a  demo environment) built to implement role-based access control, protected resources and administrative audit trails.",
    techStack: [
      { name: "Next.js", icon: siNextdotjs, colorOverride: "ffffff" },
      { name: "Prisma", icon: siPrisma },
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "TypeScript", icon: siTypescript },
    ],
    status: "DEPLOYED",
    statusStyle: "live",
    liveLink: "https://rbac-project-flame.vercel.app/",
    githubLink: null,
    caseStudyLink: "/projects/university-rbac",
    image: "/rbac.webp",
  },
  {
    title: "Past Questions App",
    description:
      "A mobile application project designed to help UNIBEN students access past examination questions.",
    techStack: [
      { name: "React", icon: siReact },
      { name: "Node.js", icon: siNodedotjs },
      { name: "MongoDB", icon: siMongodb },
    ],
    status: "IN DEVELOPMENT",
    statusStyle: "development",
    liveLink: null,
    githubLink: null,
    caseStudyLink: null,
    image: null,
  },
] as const;

const statusStyles = {
  live: "border-emerald-500/25 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  development:
    "border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300",
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full overflow-x-clip bg-[var(--projects-bg)] font-sans text-[var(--projects-text)]"
    >
      <div className="h-px w-full bg-[var(--projects-border)]" />

      <div className="px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Section introduction */}
            <div className="flex flex-col items-start lg:sticky lg:top-28 lg:col-span-3">
              <span className="mb-5 inline-flex w-max items-center rounded-full border border-[var(--projects-border)] bg-[var(--projects-surface)] px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[var(--projects-accent)]">
                Selected work
              </span>

              <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Things I&apos;ve built
              </h2>

              <p className="mb-7 max-w-md text-sm leading-7 text-[var(--projects-muted)]">
                A selection of projects where I explore practical problems,
                full-stack development and thoughtful user experiences.
              </p>

              <Link
                href="/projects"
                className="hidden items-center gap-2 rounded-full border border-[var(--projects-border)] px-5 py-3 text-sm font-medium transition-colors hover:bg-[var(--projects-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--projects-accent)] lg:inline-flex"
              >
                View all projects
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Project cards */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:gap-6">
                {projects.map((project) => (
                  <article
                    key={project.title}
                    className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[var(--projects-border)] bg-[var(--projects-card)] p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5"
                  >
                    {/* Main clickable project area */}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live project in a new tab`}
                        className="absolute inset-0 z-0 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[var(--projects-accent)]"
                      />
                    )}

                    {/* Status */}
                    <div className="pointer-events-none relative z-10 mb-4">
                      <span
                        className={`inline - flex items - center gap - 2 rounded - full border px - 2.5 py - 1 text - [10px] font - bold tracking - wider ${statusStyles[project.statusStyle]} `}
                      >
                        <span
                          className={`h - 1.5 w - 1.5 rounded - full ${project.statusStyle === "live"
                            ? "bg-emerald-500"
                            : "bg-violet-500"
                            } `}
                        />
                        {project.status}
                      </span>
                    </div>

                    {/* Project details */}
                    <div className="pointer-events-none relative z-10">
                      <h3 className="mb-2 text-xl font-bold tracking-tight">
                        {project.title}
                      </h3>

                      <p className="mb-5 min-h-[4.5rem] text-sm leading-6 text-[var(--projects-muted)]">
                        {project.description}
                      </p>
                    </div>

                    {/* Preview */}
                    <div className="pointer-events-none relative z-10 mb-5 aspect-video w-full overflow-hidden rounded-xl border border-[var(--projects-border)] bg-[var(--projects-preview)]">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.title} project screenshot`}
                          fill
                          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 45vw, 35vw"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
                        />
                      ) : (
                        <div className="flex h-full flex-col items-center justify-center gap-3 p-5 text-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--projects-border)] bg-[var(--projects-card)] text-[var(--projects-accent)]">
                            <svg
                              aria-hidden="true"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect
                                x="5"
                                y="2"
                                width="14"
                                height="20"
                                rx="2"
                              />
                              <path d="M12 18h.01" />
                            </svg>
                          </div>

                          <span className="text-xs font-medium text-[var(--projects-muted)]">
                            Project preview coming soon
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Technology stack */}
                    <div className="pointer-events-none relative z-10 mb-5 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech.name}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--projects-border)] bg-[var(--projects-surface)] px-2.5 py-1.5 text-xs font-medium text-[var(--projects-muted)]"
                        >
                          <svg
                            aria-hidden="true"
                            className="h-3.5 w-3.5 shrink-0"
                            viewBox="0 0 24 24"
                            fill={`#${("colorOverride" in tech ? tech.colorOverride : undefined) ?? tech.icon.hex} `}
                          >
                            <path d={tech.icon.path} />
                          </svg>
                          {tech.name}
                        </span>
                      ))}
                    </div>

                    {/* Actions stay above the card-wide link */}
                    <div className="relative z-20 mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--projects-border)] pt-4 text-sm font-semibold">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[var(--projects-accent)] transition-opacity hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--projects-accent)]"
                        >
                          View project
                          <svg
                            aria-hidden="true"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M14 3h7v7" />
                            <path d="M10 14 21 3" />
                            <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                          </svg>
                        </a>
                      )}

                      {project.caseStudyLink && (
                        <Link
                          href={project.caseStudyLink}
                          className="inline-flex items-center gap-1.5 text-[var(--projects-muted)] transition-colors hover:text-[var(--projects-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--projects-accent)]"
                        >
                          Case study
                          <svg
                            aria-hidden="true"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M7 17 17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                        </Link>
                      )}

                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--projects-muted)] transition-colors hover:text-[var(--projects-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--projects-accent)]"
                        >
                          Source code
                        </a>
                      )}

                      {!project.liveLink && !project.caseStudyLink && (
                        <span className="text-xs font-medium text-[var(--projects-muted)]">
                          In development
                        </span>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              {/* Mobile: View all projects */}
              <div className="mt-8 flex justify-center lg:hidden">
                <Link
                  href="/projects"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--projects-border)] px-6 py-3.5 text-sm font-medium transition-colors hover:bg-[var(--projects-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--projects-accent)] sm:w-auto"
                >
                  View all projects
                  <svg
                    aria-hidden="true"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
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