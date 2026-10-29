
import Image from "next/image";
import Link from "next/link";

const theme = {
  text: "var(--portfolio-text, var(--foreground, #f5f5f7))",
  muted: "var(--portfolio-muted, #9997a8)",
  bg: "var(--portfolio-bg, #08080d)",
  card: "var(--portfolio-card, #111119)",
  border: "var(--portfolio-border, #282633)",
  accent: "var(--projects-accent, #a855f7)",
};

const demoUrl = "https://rbac-project-flame.vercel.app/";

const roles = [
  {
    name: "Admin",
    description:
      "Manage accounts, change user roles, review administrative activity, and monitor system analytics.",
    icon: "A",
  },
  {
    name: "Lecturer",
    description:
      "Access lecturer resources and perform permitted academic operations, including grade-related actions.",
    icon: "L",
  },
  {
    name: "Student",
    description:
      "Access student-facing resources according to the role assigned to the account.",
    icon: "S",
  },
];

const events = [
  {
    title: "Role updated",
    detail: "An administrator changes an account's role.",
    type: "Access control",
  },
  {
    title: "Grade edited",
    detail: "A lecturer performs a grade-related operation.",
    type: "Academic activity",
  },
  {
    title: "User registered",
    detail: "A new account is recorded in the system.",
    type: "Account activity",
  },
  {
    title: "Session activity",
    detail: "Login and logout events are recorded.",
    type: "Authentication",
  },
];

const decisions = [
  {
    number: "01",
    title: "Middleware-based authorization",
    body: "Check the session role when a user attempts to access a protected resource. Unauthorized access is rejected with HTTP 403 rather than relying on hidden navigation links.",
  },
  {
    number: "02",
    title: "Roles managed through the application",
    body: "Allow an authorized administrator to create accounts and update the roles of existing users. Access rules can evolve without requiring manual role edits directly in the database.",
  },
  {
    number: "03",
    title: "Administrative auditability",
    body: "Give administrators visibility into important system activity, including account registrations, role changes, authentication events, and view grade edits.",
  },
];

const authorizationSteps = [
  {
    step: "01",
    title: "Request",
    body: "A user attempts to open a protected resource.",
  },
  {
    step: "02",
    title: "Session check",
    body: "Middleware checks the session and role.",
  },
  {
    step: "03",
    title: "Authorization",
    body: "The access rule determines whether the request is permitted.",
  },
  {
    step: "04",
    title: "Allow or deny",
    body: "Unauthorized access receives a forbidden 403 response.",
  },
];

const technologies = [
  {
    name: "Next.js",
    role: "Application framework",
    detail: "Portal UI, routing, and server-side functionality.",
  },
  {
    name: "TypeScript",
    role: "Application language",
    detail: "Typed components and application logic.",
  },
  {
    name: "Authentication and middleware",
    role: "Access control",
    detail: "Session-aware checks for protected resources.",
  },
  {
    name: "Prisma + PostgreSQL / Neon",
    role: "Data layer",
    detail: "Structured relational data and database operations.",
  },
];

const productionConsiderations = [
  {
    title: "Least privilege",
    body: "Give users only the access they need for their responsibilities.",
  },
  {
    title: "Audited changes",
    body: "Record who changed a role, what changed, and when.",
  },
  {
    title: "Stronger privilege controls",
    body: "For real deployments, consider expiring elevated access, approval workflows, and protection against unauthorized privilege escalation.",
  },
];

export default function UniversityRbacCaseStudyPage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: theme.bg, color: theme.text }}
    >
      {/* Top navigation */}
      <header
        className="sticky top-0 z-30 border-b backdrop-blur-xl"
        style={{
          borderColor: theme.border,
          background:
            "color-mix(in srgb, var(--portfolio-bg, #08080d) 86%, transparent)",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
            style={{ color: theme.muted }}
          >
            <span aria-hidden="true">←</span>
            Back to projects
          </Link>

          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            style={{
              background: theme.accent,
              color: "#ffffff",
            }}
          >
            View live demo
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
        <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
          <span className="font-medium" style={{ color: theme.muted }}>
            Final-year project
          </span>

          <span
            className="h-1 w-1 rounded-full"
            style={{ background: theme.border }}
            aria-hidden="true"
          />

          <span
            className="font-medium tracking-wide"
            style={{ color: theme.accent }}
          >
            RBAC <span style={{ color: theme.muted }}>/</span> Security
            <span style={{ color: theme.muted }}> / </span>
            Full-stack
          </span>
        </div>

        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-14">
          <div className="min-w-0">
            <p
              className="mb-4 text-xs font-bold uppercase tracking-[0.22em]"
              style={{ color: theme.accent }}
            >
              University of Miradelle
            </p>

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Access control that adapts as the institution grows.
            </h1>

            <p
              className="mt-6 max-w-xl text-base leading-8 sm:text-lg"
              style={{ color: theme.muted }}
            >
              A demo university management system showcasing dynamic role-based access control (RBAC), centralized account management, and administrative oversight without requiring manual database-level role changes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                style={{ background: theme.accent, color: "#fff" }}
              >
                Explore the demo
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#technical-decisions"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors hover:opacity-75"
                style={{ borderColor: theme.border }}
              >
                Explore the engineering
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div
              className="mt-10 grid grid-cols-2 gap-5 border-t pt-6 sm:grid-cols-3"
              style={{ borderColor: theme.border }}
            >
              <div>
                <p className="text-sm font-semibold">3 user roles</p>
                <p
                  className="mt-1 text-xs"
                  style={{ color: theme.muted }}
                >
                  Admin · Lecturer · Student
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold">Dynamic access</p>
                <p
                  className="mt-1 text-xs"
                  style={{ color: theme.muted }}
                >
                  Application-managed roles
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="text-sm font-semibold">Security-focused</p>
                <p
                  className="mt-1 text-xs"
                  style={{ color: theme.muted }}
                >
                  Session-aware authorization
                </p>
              </div>
            </div>
          </div>

          {/* Project image */}
          <div className="min-w-0">
            <div
              className="relative overflow-hidden rounded-2xl border"
              style={{
                borderColor: theme.border,
                background: theme.card,
                boxShadow: "0 24px 70px rgba(0,0,0,.12)",
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/rbac.webp"
                  alt="University of Miradelle university portal dashboard"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-4">
              <p className="text-xs" style={{ color: theme.muted }}>
                University of Miradelle
              </p>
              <span className="text-xs" style={{ color: theme.muted }}>
                RBAC university portal
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section
        className="border-y"
        style={{
          borderColor: theme.border,
          background: theme.card,
        }}
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-16 lg:py-20">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: theme.accent }}
            >
              01 / The problem
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Permissions should not be a database maintenance task.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 sm:text-base">
            <p style={{ color: theme.muted }}>
              University systems serve people with different responsibilities.
              Administrators manage the system, lecturers perform academic
              operations, and students access their own set of resources. Those
              boundaries need to be enforced consistently as accounts and
              responsibilities change.
            </p>

            <p style={{ color: theme.muted }}>
              A rigid implementation can make role changes unnecessarily
              dependent on manual database edits. Hiding a page or button is
              also not enough: a user may still attempt to access a protected
              resource directly.
            </p>

            <p style={{ color: theme.text }}>
              <strong>The project goal:</strong> demonstrate a system in which
              roles can be managed through the application, protected resources
              enforce access rules, and administrators can monitor important
              activity.
            </p>
          </div>
        </div>
      </section>

      {/* Role model */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: theme.accent }}
          >
            02 / The access model
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Three roles. Different responsibilities.
          </h2>

          <p
            className="mt-4 text-sm leading-7 sm:text-base"
            style={{ color: theme.muted }}
          >
            The role assigned to an account determines which protected
            resources it is permitted to access. The administrator can change
            that assignment as the system&apos;s needs evolve.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {roles.map((role) => (
            <article
              key={role.name}
              className="rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-1"
              style={{
                borderColor: theme.border,
                background: theme.card,
              }}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold"
                style={{
                  background: "rgba(168,85,247,.12)",
                  color: theme.accent,
                }}
              >
                {role.icon}
              </div>

              <h3 className="mt-5 text-lg font-semibold">{role.name}</h3>

              <p
                className="mt-3 text-sm leading-7"
                style={{ color: theme.muted }}
              >
                {role.description}
              </p>
            </article>
          ))}
        </div>

        <div
          className="mt-5 rounded-xl border p-4 text-sm leading-7"
          style={{
            borderColor: theme.border,
            color: theme.muted,
          }}
        >
          <strong style={{ color: theme.text }}>
            Important distinction:
          </strong>{" "}
          these are the project&apos;s three roles. This demonstration does not
          claim a complete, independently configurable permission matrix or
          time-limited privilege system.
        </div>
      </section>

      {/* Authorization flow */}
      <section
        className="border-y"
        style={{
          borderColor: theme.border,
          background: theme.card,
        }}
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <p
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: theme.accent }}
            >
              03 / How authorization works
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Don&apos;t just hide the door. Protect the resource.
            </h2>

            <p
              className="mt-4 text-sm leading-7 sm:text-base"
              style={{ color: theme.muted }}
            >
              The key engineering decision was to enforce authorization using
              the session role rather than trusting what the interface displays.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-4">
            {authorizationSteps.map((item, index) => (
              <div key={item.step} className="relative">
                <article
                  className="h-full rounded-2xl border p-5"
                  style={{
                    borderColor: theme.border,
                    background: theme.bg,
                  }}
                >
                  <p
                    className="text-xs font-semibold"
                    style={{ color: theme.accent }}
                  >
                    STEP {item.step}
                  </p>

                  <h3 className="mt-4 font-semibold">{item.title}</h3>

                  <p
                    className="mt-2 text-sm leading-6"
                    style={{ color: theme.muted }}
                  >
                    {item.body}
                  </p>
                </article>

                {index < authorizationSteps.length - 1 && (
                  <span
                    className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-lg md:block"
                    style={{ color: theme.accent }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Access denial explanation */}
          <div
            className="mt-8 grid gap-4 border-t pt-6 sm:grid-cols-[180px_1fr] sm:items-start"
            style={{ borderColor: theme.border }}
          >
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.16em]"
                style={{ color: theme.accent }}
              >
                Access denied
              </p>

              <p
                className="mt-2 font-mono text-2xl font-semibold tracking-tight"
                style={{ color: theme.text }}
              >
                HTTP 403
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Unauthorized requests are rejected.
              </h3>

              <p
                className="mt-2 max-w-2xl text-sm leading-7"
                style={{ color: theme.muted }}
              >
                When a user attempts to access a protected resource without
                the required role, the authorization layer denies the request.
                This illustrates the difference between hiding a page in the
                interface and enforcing access control at the application level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main features */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: theme.accent }}
          >
            04 / The implementation
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Three features that define the project.
          </h2>
        </div>

        <div className="mt-10 space-y-5">
          {decisions.map((item) => (
            <article
              key={item.number}
              className="grid gap-5 rounded-2xl border p-6 sm:grid-cols-[64px_1fr] sm:gap-8 sm:p-8"
              style={{
                borderColor: theme.border,
                background: theme.card,
              }}
            >
              <div
                className="text-2xl font-semibold"
                style={{ color: theme.accent }}
              >
                {item.number}
              </div>

              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p
                  className="mt-3 max-w-3xl text-sm leading-7 sm:text-base"
                  style={{ color: theme.muted }}
                >
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Audit log */}
        <section className="mt-20">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            {/* Description */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: theme.accent }}
              >
                Administrative visibility
              </p>

              <h3
                className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
                style={{ color: theme.text }}
              >
                Know what happens across the system.
              </h3>

              <p
                className="mt-4 text-sm leading-7 sm:text-base"
                style={{ color: theme.muted }}
              >
                The administrator dashboard includes an audit log for reviewing
                important system activity, helping administrators understand
                account changes and actions performed within the portal.
              </p>

              <p
                className="mt-3 text-sm leading-7"
                style={{ color: theme.muted }}
              >
                Alongside role analytics, this provides a clearer view of activity
                across user accounts and administrative operations.
              </p>
            </div>

            {/* Actual audit log screenshot */}
            <figure className="min-w-0">
              <div
                className="overflow-hidden rounded-2xl border shadow-xl"
                style={{
                  borderColor: theme.border,
                  backgroundColor: theme.card,
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12)",
                }}
              >
                <div
                  className="flex items-center justify-between gap-3 border-b px-4 py-3 sm:px-5"
                  style={{ borderColor: theme.border }}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${theme.accent}18`,
                        color: theme.accent,
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M8 6h13M8 12h13M8 18h13" />
                        <path d="M3 6h.01M3 12h.01M3 18h.01" />
                      </svg>
                    </div>

                    <div className="min-w-0">
                      <p
                        className="truncate text-sm font-semibold"
                        style={{ color: theme.text }}
                      >
                        Audit log
                      </p>
                      <p className="text-xs" style={{ color: theme.muted }}>
                        Administrative activity
                      </p>
                    </div>
                  </div>

                  <span
                    className="shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-medium sm:text-xs"
                    style={{
                      borderColor: theme.border,
                      color: theme.muted,
                    }}
                  >
                    Project screenshot
                  </span>
                </div>

                <div className="p-2 sm:p-3">
                  <div
                    className="overflow-hidden rounded-xl border"
                    style={{ borderColor: theme.border }}
                  >
                    <Image
                      src="/audit-log.png"
                      alt="Audit log interface from the University of Miradelle role-based access control portal"
                      width={1440}
                      height={900}
                      className="block h-auto w-full object-contain"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </div>
              </div>

              <figcaption
                className="mt-3 text-xs leading-5"
                style={{ color: theme.muted }}
              >
                Audit log interface from the University of Miradelle RBAC project.
              </figcaption>
            </figure>
          </div>
        </section>
      </section>

      {/* Architecture */}
      <section
        id="technical-decisions"
        className="scroll-mt-24 border-y"
        style={{
          borderColor: theme.border,
          background: theme.card,
        }}
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: theme.accent }}
            >
              05 / Architecture
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A full-stack foundation.
            </h2>

            <p
              className="mt-4 text-sm leading-7"
              style={{ color: theme.muted }}
            >
              I used a TypeScript-based Next.js application with a relational
              database and an ORM. This kept the portal&apos;s interface and
              server-side application logic within one codebase while
              maintaining structured database access.
            </p>
          </div>

          <div className="space-y-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col gap-2 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between"
                style={{
                  borderColor: theme.border,
                  background: theme.bg,
                }}
              >
                <div>
                  <p className="text-sm font-semibold">{tech.name}</p>

                  <p
                    className="mt-1 text-xs"
                    style={{ color: theme.muted }}
                  >
                    {tech.detail}
                  </p>
                </div>

                <span
                  className="shrink-0 text-xs"
                  style={{ color: theme.accent }}
                >
                  {tech.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardest challenge */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: theme.accent }}
            >
              06 / A lesson from development
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              When a shared layout depends on the database.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 sm:text-base">
            <p style={{ color: theme.muted }}>
              One architectural issue I encountered involved placing a database query in a shared layout.
              Because the layout was used across multiple pages, database availability became a
              broader application concern rather than an isolated dependency of the feature that
              required the data.
            </p>

            <p style={{ color: theme.muted }}>
              This experience highlighted the importance of carefully
              managing database dependencies in shared components.
              Queries that are essential to a specific feature should not
              unnecessarily become dependencies for unrelated pages, as this can
              increase the potential impact of database outages and affect overall

            </p>

            <div
              className="rounded-2xl border p-5"
              style={{
                borderColor: theme.border,
                background: theme.card,
              }}
            >
              <p className="font-semibold">What I took away</p>

              <ul
                className="mt-3 list-disc space-y-2 pl-5"
                style={{ color: theme.muted }}
              >
                <li>
                  Keep shared layout dependencies as small as practical.
                </li>
                <li>
                  Scope data fetching to the features that need the data.
                </li>
                <li>
                  Handle database failures deliberately instead of allowing
                  them to cascade across the interface.
                </li>
                <li>
                  Consider loading and failure states as part of application
                  architecture, not just UI polish.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security considerations */}
      <section
        className="border-y"
        style={{
          borderColor: theme.border,
          background: theme.card,
        }}
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: theme.accent }}
          >
            07 / Beyond the demo
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            What production-grade access management would require.
          </h2>

          <p
            className="mt-4 max-w-3xl text-sm leading-7 sm:text-base"
            style={{ color: theme.muted }}
          >
            Dynamic role management makes administration more flexible, but
            changing someone&apos;s role should itself be a protected operation.
            The ability to change roles does not automatically make a system
            enterprise-ready.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {productionConsiderations.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border p-5"
                style={{
                  borderColor: theme.border,
                  background: theme.bg,
                }}
              >
                <h3 className="font-semibold">{item.title}</h3>

                <p
                  className="mt-2 text-sm leading-6"
                  style={{ color: theme.muted }}
                >
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div
          className="overflow-hidden rounded-3xl border p-7 sm:p-10 lg:p-14"
          style={{
            borderColor: theme.border,
            background:
              "radial-gradient(ellipse at top right, rgba(168,85,247,.16), transparent 55%), var(--portfolio-card, #111119)",
          }}
        >
          <p
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: theme.accent }}
          >
            Project reflection
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Building access control taught me to think beyond the interface.
          </h2>

          <p
            className="mt-5 max-w-3xl text-sm leading-7 sm:text-base"
            style={{ color: theme.muted }}
          >
            The central lesson was that access control is not just a collection
            of role-specific pages. It is a system-wide responsibility involving
            session checks, protected resources, role management, and
            accountability for administrative actions.
          </p>

          <p
            className="mt-4 max-w-3xl text-sm leading-7 sm:text-base"
            style={{ color: theme.muted }}
          >
            This final-year project gave me a practical way to explore those
            concerns and understand the additional controls that would be
            needed before applying the same ideas to a real institutional
            environment.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              style={{ background: theme.accent, color: "#fff" }}
            >
              Visit project demo
              <span aria-hidden="true">↗</span>
            </a>

            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors hover:opacity-75"
              style={{ borderColor: theme.border }}
            >
              More projects
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <p
            className="mt-8 border-t pt-5 text-xs leading-6"
            style={{
              borderColor: theme.border,
              color: theme.muted,
            }}
          >
            Project status: Academic demonstration. The application is not
            presented as a production university system or as having undergone
            independent security certification.
          </p>
        </div>
      </section>
    </main>
  );
}
