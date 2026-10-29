
import Link from "next/link";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Redux Toolkit",
    ],
  },
  {
    title: "Backend & APIs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <path d="M6 6h.01M6 18h.01" />
      </svg>
    ),
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "Next.js API",
      "JWT",
      "Bcrypt",
      "Zod",
    ],
  },
  {
    title: "Database & Authentication",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      </svg>
    ),
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "Neon",
      "Redis",
    ],
  },
  {
    title: "UI/UX & Developer Tools",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
        <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
      </svg>
    ),
    skills: [
      "Figma",
      "Framer Motion",
      "Shadcn/UI",
      "Radix UI",
      "Git & GitHub",
      "VS Code",
      "Postman",
      "Vercel",
    ],
  },
];

export default function SkillsExpertiseSection() {
  return (
    <section
      id="skills"
      className="w-full overflow-hidden border-t px-5 py-16 font-sans sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      style={{
        background: "var(--portfolio-bg)",
        color: "var(--portfolio-text)",
        borderColor: "var(--portfolio-border)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Section introduction */}
          <div className="flex flex-col items-start lg:sticky lg:top-28 lg:col-span-3">
            <span
              className="mb-5 inline-flex w-fit items-center rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em]"
              style={{
                color: "var(--portfolio-accent)",
                background: "var(--portfolio-accent-soft)",
                borderColor: "var(--portfolio-border)",
              }}
            >
              Skills & expertise
            </span>

            <h2 className="mb-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.5rem]">
              What I bring
              <br />
              to{" "}
              <span style={{ color: "var(--portfolio-accent)" }}>
                the table.
              </span>
            </h2>

            <p
              className="mb-7 max-w-sm text-sm leading-7 sm:text-base"
              style={{ color: "var(--portfolio-muted)" }}
            >
              The skills and technical foundations I draw on to build
              functional interfaces, connect application logic, and work with
              data.
            </p>

            <Link
              href="/skills"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5"
              style={{
                color: "var(--portfolio-text)",
                borderColor: "var(--portfolio-border)",
                background: "var(--portfolio-surface)",
              }}
            >
              View all skills
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
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Skill categories */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-9 lg:gap-5">
            {skillCategories.map((category) => (
              <article
                key={category.title}
                className="rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 sm:p-6"
                style={{
                  background: "var(--portfolio-card)",
                  borderColor: "var(--portfolio-border)",
                  boxShadow: "var(--portfolio-card-shadow)",
                }}
              >
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    color: "var(--portfolio-accent)",
                    background: "var(--portfolio-accent-soft)",
                  }}
                >
                  <div className="h-6 w-6">{category.icon}</div>
                </div>

                <h3 className="mb-5 text-lg font-bold tracking-tight sm:text-xl">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border px-3 py-2 text-xs font-medium sm:text-[13px]"
                      style={{
                        color: "var(--portfolio-muted-strong)",
                        background: "var(--portfolio-chip)",
                        borderColor: "var(--portfolio-border)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
