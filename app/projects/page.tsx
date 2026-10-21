
import Link from "next/link";

const projects = [
  {
    title: "Vendly",
    category: "Full-Stack Application",
    status: "Live",
    description:
      "A peer-to-peer marketplace for the University of Benin community to buy items, sell used belongings, and offer services.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth.js"],
    href: "/projects/vendly-market",
    external: "https://vendlymarket.com.ng",
    featured: true,
  },
  {
    title: "University RBAC Portal",
    category: "Full-Stack Application",
    status: "Project",
    description:
      "A university portal exploring role-based permissions, dynamic role management, and audit logging across administrative workflows.",
    stack: ["Next.js", "TypeScript", "Auth.js", "Prisma", "PostgreSQL"],
    href: "/projects/university-rbac",
    external: "http://rbac-project-flame.vercel.app/",
    featured: true,
  },
  {
    title: "IGHub Website Clone",
    category: "Frontend Learning Project",
    status: "Learning project",
    description:
      "A recreation of a website interface built to practise frontend layout, styling, responsive design, and component structure.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "",
    external: "",
    featured: false,
  },
  {
    title: "Amazon UI Clone",
    category: "Frontend Learning Project",
    status: "Learning project",
    description:
      "A learning project inspired by an e-commerce interface, built to practise page layouts and reusable UI patterns.",
    stack: ["React", "JavaScript", "CSS"],
    href: "",
    external: "",
    featured: false,
  },
  {
    title: "Todo List",
    category: "Frontend Learning Project",
    status: "Learning project",
    description:
      "A small task-management application built to practise interactive interfaces and application state.",
    stack: ["JavaScript", "React", "CSS"],
    href: "",
    external: "",
    featured: false,
  },
];

const theme = {
  text: "var(--portfolio-text, var(--foreground, #f5f5f7))",
  muted: "var(--portfolio-muted, #9997a8)",
  border: "var(--portfolio-border, #282633)",
  card: "var(--portfolio-card, #111119)",
  accent: "var(--projects-accent, #a855f7)",
};

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <article
      className="flex h-full flex-col rounded-2xl border p-5 sm:p-6"
      style={{
        background: theme.card,
        borderColor: theme.border,
      }}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <span
          className="text-xs font-medium"
          style={{ color: theme.muted }}
        >
          {project.category}
        </span>

        {project.featured && (
          <span
            className="rounded-full border px-2.5 py-1 text-xs"
            style={{
              color: theme.accent,
              borderColor: theme.border,
            }}
          >
            Featured
          </span>
        )}
      </div>

      <h2
        className="text-xl font-semibold tracking-tight"
        style={{ color: theme.text }}
      >
        {project.title}
      </h2>

      <p
        className="mt-3 flex-1 text-sm leading-7"
        style={{ color: theme.muted }}
      >
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border px-2 py-1 text-xs"
            style={{
              color: theme.muted,
              borderColor: theme.border,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div
        className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t pt-4"
        style={{ borderColor: theme.border }}
      >
        {project.href ? (
          <Link
            href={project.href}
            className="text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: theme.accent }}
          >
            View case study <span aria-hidden="true">↗</span>
          </Link>
        ) : (
          <span className="text-sm" style={{ color: theme.muted }}>
            Learning project
          </span>
        )}

        {project.external && (
          <a
            href={project.external}
            target="_blank"
            rel="noreferrer"
            className="text-sm transition-opacity hover:opacity-70"
            style={{ color: theme.text }}
          >
            {project.title === "Vendly" ? "Visit website" : "Live demo"}
            <span aria-hidden="true"> ↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const featured = projects.filter((project) => project.featured);
  const learning = projects.filter((project) => !project.featured);

  return (
    <main
      className="min-h-screen"
      style={{
        background: "var(--portfolio-bg, #08080d)",
        color: theme.text,
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
        <header
          className="mb-12 flex items-center justify-between gap-4 border-b pb-5"
          style={{ borderColor: theme.border }}
        >
          <Link
            href="/"
            className="text-sm transition-opacity hover:opacity-70"
            style={{ color: theme.muted }}
          >
            ← Back to home
          </Link>

          <span className="text-sm font-medium">Projects</span>
        </header>

        <section className="max-w-2xl">
          <p
            className="text-sm font-medium"
            style={{ color: theme.accent }}
          >
            SELECTED WORK
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Things I&apos;ve built.
          </h1>

          <p
            className="mt-5 text-base leading-7 sm:text-lg"
            style={{ color: theme.muted }}
          >
            A collection of applications and experiments from my journey
            as a developer, from production projects to smaller learning
            builds.
          </p>
        </section>

        <section className="mt-12">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold">Featured projects</h2>
            <span className="text-sm" style={{ color: theme.muted }}>
              {featured.length} projects
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {learning.length > 0 && (
          <section className="mt-14">
            <div className="mb-5">
              <h2 className="text-lg font-semibold">Learning projects</h2>
              <p className="mt-2 text-sm" style={{ color: theme.muted }}>
                Smaller builds that helped me practise and strengthen
                my frontend development skills.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {learning.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        )}

        <footer
          className="mt-16 border-t py-7 text-sm"
          style={{ borderColor: theme.border, color: theme.muted }}
        >
          Interested in working together?{" "}
          <Link
            href="mailto:td0864691@gmail.com?subject=Developer%20Opportunity" className="group inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-all hover:-translate-y-0.5 active:scale-95 sm:w-auto"
            style={{
              background: "var(--portfolio-accent)",
              boxShadow: "0 0 20px var(--portfolio-accent-soft)",
            }}
          >
            Get in touch
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </Link>
        </footer>
      </div>
    </main>
  );
}
