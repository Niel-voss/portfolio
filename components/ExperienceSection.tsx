
import Link from "next/link";

const experiences = [
  {
    title: "Independent Software Developer",
    date: "Ongoing",
    company: "Vendly",
    location: "Personal Product · UNIBEN",
    type: "experience",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M3 10h18M8 4v6M16 4v6" />
      </svg>
    ),
    description:
      "Building and deploying a peer-to-peer marketplace for University of Benin students.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    bullets: [
      "Built and deployed a full-stack marketplace, owning development from UI to database and deployment.",
      "Implemented authentication, student verification, listings, image uploads, and real-time messaging.",
      "Worked on secure access control, input validation, and efficient listing pagination.",
    ],
  },
  {
    title: "Final-Year Project Developer",
    date: "University Project",
    company: "University of Miradelle",
    location: "University of Benin",
    type: "project",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    description:
      "Developed a university portal focused on role-based permissions and protected resources.",
    tags: ["Next.js", "Auth.js", "Prisma", "PostgreSQL"],
    bullets: [
      "Implemented role-based authorization with middleware and server-side access checks.",
      "Built administrative functionality for managing users, roles, and permissions.",
    ],
  },
  {
    title: "Frontend Development Training",
    date: "Training / SIWES",
    company: "IGHub",
    location: "Benin City, Nigeria",
    type: "training",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <path d="m14 4-4 16" />
      </svg>
    ),
    description:
      "Developed my frontend foundations through hands-on learning and web development practice.",
    tags: ["HTML", "CSS", "JavaScript"],
    bullets: [
      "Practised building responsive interfaces and adding interactivity with JavaScript.",
    ],
  },
  {
    title: "B.Sc. Computer Science",
    date: "Graduate",
    company: "University of Benin (UNIBEN)",
    location: "Benin City, Nigeria",
    type: "education",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m22 10-10-5-10 5 10 5 10-5Z" />
        <path d="M6 12v5c3.5 3 8.5 3 12 0v-5" />
        <path d="M22 10v6" />
      </svg>
    ),
    description:
      "Built a foundation in programming, databases, algorithms, and software engineering.",
    tags: [],
    bullets: [],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full overflow-x-hidden border-t px-5 py-16 font-sans sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      style={{
        background: "var(--portfolio-bg)",
        color: "var(--portfolio-text)",
        borderColor: "var(--portfolio-border)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Section introduction */}
          <div className="flex flex-col items-start lg:sticky lg:top-28 lg:col-span-4">
            <span
              className="mb-5 inline-flex w-fit items-center rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em]"
              style={{
                color: "var(--portfolio-accent)",
                background: "var(--portfolio-accent-soft)",
                borderColor: "var(--portfolio-border)",
              }}
            >
              Experience & Education
            </span>

            <h2 className="mb-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.5rem]">
              Learning by{" "}
              <span style={{ color: "var(--portfolio-accent)" }}>
                building.
              </span>
            </h2>

            <p
              className="mb-7 max-w-sm text-sm leading-7 sm:text-base"
              style={{ color: "var(--portfolio-muted)" }}
            >
              From independent products to academic projects, I learn by
              building, solving problems, and turning ideas into working
              software.
            </p>

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5"
              style={{
                color: "var(--portfolio-text)",
                background: "var(--portfolio-surface)",
                borderColor: "var(--portfolio-border)",
              }}
            >
              View full resume
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </Link>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {experiences.map((exp, index) => {
                const isLast = index === experiences.length - 1;

                return (
                  <article
                    key={exp.title}
                    className={`group relative flex items-start gap-3 sm:gap-5 ${!isLast ? "pb-10 sm:pb-12" : ""
                      }`}
                  >
                    {/* Timeline indicator */}
                    <div className="relative flex w-3 shrink-0 justify-center self-stretch pt-5">
                      <span
                        className="relative z-10 mt-0.5 h-3 w-3 shrink-0 rounded-full ring-4 transition-shadow group-hover:shadow-[0_0_14px_rgba(168,85,247,0.5)]"
                        style={{
                          background: "var(--portfolio-accent)",
                          boxShadow: "0 0 0 4px var(--portfolio-bg)",
                        }}
                      />

                      {!isLast && (
                        <span
                          className="absolute bottom-0 left-1/2 top-9 w-px -translate-x-1/2"
                          style={{
                            background: "var(--portfolio-border)",
                          }}
                        />
                      )}
                    </div>

                    {/* Entry icon */}
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12"
                      style={{
                        color: "var(--portfolio-accent)",
                        background: "var(--portfolio-card)",
                        borderColor: "var(--portfolio-border)",
                      }}
                    >
                      <div className="h-6 w-6">{exp.icon}</div>
                    </div>

                    {/* Entry content */}
                    <div className="min-w-0 flex-1 pt-0.5">
                      <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                        <h3 className="text-base font-bold leading-snug sm:text-lg">
                          {exp.title}
                        </h3>

                        <span
                          className="shrink-0 text-xs font-medium sm:pt-1 sm:text-sm"
                          style={{ color: "var(--portfolio-accent)" }}
                        >
                          {exp.date}
                        </span>
                      </div>

                      <div
                        className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"
                        style={{ color: "var(--portfolio-muted)" }}
                      >
                        <span
                          className="font-medium"
                          style={{ color: "var(--portfolio-muted-strong)" }}
                        >
                          {exp.company}
                        </span>
                        <span aria-hidden="true" className="opacity-50">
                          ·
                        </span>
                        <span>{exp.location}</span>
                      </div>

                      <p
                        className="mb-4 text-sm leading-6"
                        style={{ color: "var(--portfolio-muted)" }}
                      >
                        {exp.description}
                      </p>

                      {exp.tags.length > 0 && (
                        <div className="mb-4 flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-lg border px-2.5 py-1.5 text-[11px] font-medium"
                              style={{
                                color: "var(--portfolio-muted-strong)",
                                background: "var(--portfolio-chip)",
                                borderColor: "var(--portfolio-border)",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {exp.bullets.length > 0 && (
                        <ul className="flex flex-col gap-2.5">
                          {exp.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-start gap-2.5 text-sm leading-6"
                              style={{ color: "var(--portfolio-muted)" }}
                            >
                              <span
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{
                                  background: "var(--portfolio-accent)",
                                }}
                              />
                              <span className="min-w-0 flex-1">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
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
