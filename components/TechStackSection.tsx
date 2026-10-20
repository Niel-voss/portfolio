
import {
  siGit,
  siGithub,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siTailwindcss,
  siTypescript,
  siNeon,
  siResend,
  siZod,
} from "simple-icons/icons";

type Technology = {
  name: string;
  icon?: {
    path: string;
    hex: string;
  };
  colorOverride?: string;
  image?: string;
};

const technologies: Technology[] = [
  { name: "React", icon: siReact },
  { name: "Next.js", icon: siNextdotjs, colorOverride: "ffffff" },
  { name: "TypeScript", icon: siTypescript },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "Node.js", icon: siNodedotjs },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "Neon", icon: siNeon },
  {
    name: "Auth.js",
    image: "https://authjs.dev/img/logo-sm.png",
  },
  { name: "Git", icon: siGit },
  { name: "GitHub", icon: siGithub, colorOverride: "ffffff" },
  { name: "Resend", icon: siResend, colorOverride: "ffffff" },
  { name: "Zod", icon: siZod },
];

export default function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="w-full overflow-hidden border-t px-5 py-14 font-sans sm:px-8 sm:py-16 lg:px-12 lg:py-20"
      style={{
        background: "var(--portfolio-bg)",
        color: "var(--portfolio-text)",
        borderColor: "var(--portfolio-border)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Compact heading */}
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p
            className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em]"
            style={{ color: "var(--portfolio-accent)" }}
          >
            Tools of the trade
          </p>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            My tech stack
          </h2>

          <p
            className="mt-3 max-w-xl text-sm leading-7 sm:text-base"
            style={{ color: "var(--portfolio-muted)" }}
          >
            A selection of the technologies and developer tools I use to build,
            connect, validate, and deploy applications.
          </p>
        </div>

        {/* Technology grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex min-h-[76px] min-w-0 items-center gap-3 rounded-xl border p-3 transition duration-200 hover:-translate-y-0.5 sm:gap-3.5 sm:p-4"
              style={{
                background: "var(--portfolio-card)",
                borderColor: "var(--portfolio-border)",
                boxShadow: "var(--portfolio-card-shadow)",
              }}
            >
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-110"
                style={{ background: "var(--portfolio-chip)" }}
              >
                {tech.image ? (
                  <img
                    src={tech.image}
                    width={24}
                    height={24}
                    alt=""
                    loading="lazy"
                    className="h-6 w-6 object-contain"
                  />
                ) : tech.icon ? (
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill={`#${tech.colorOverride || tech.icon.hex}`}
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d={tech.icon.path} />
                  </svg>
                ) : null}
              </div>

              <span
                className="min-w-0 break-words text-xs font-semibold sm:text-sm"
                style={{ color: "var(--portfolio-text)" }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
