import Link from "next/link";
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

// Curated list with color overrides for logos that are black by default
const technologies = [
  // Frontend
  { name: "React", icon: siReact },
  { name: "Next.js", icon: siNextdotjs, colorOverride: "ffffff" },
  { name: "TypeScript", icon: siTypescript },
  { name: "Tailwind CSS", icon: siTailwindcss },

  // Backend
  { name: "Node.js", icon: siNodedotjs },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "Neon", icon: siNeon },
  {
    name: "Auth.js",
    image: "https://authjs.dev/img/logo-sm.png"
  },

  // Tools
  { name: "Git", icon: siGit },
  { name: "GitHub", icon: siGithub, colorOverride: "ffffff" },
  { name: "Resend", icon: siResend, colorOverride: "ffffff" },
  { name: "Zod", icon: siZod },
];

export default function TechStackSection() {
  return (
    <section className="w-full bg-[#07070a] text-white py-16 lg:py-24 px-6 md:px-10 overflow-x-hidden border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          <div className="col-span-1 lg:col-span-4 flex flex-col items-start lg:sticky lg:top-28">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#a855f7]/10 text-[#a855f7] text-[11px] font-bold tracking-widest uppercase mb-5 w-max">
              TECH STACK
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-[1.2] mb-5 tracking-tight">
              Tools I work with
            </h2>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
              I focus on a core set of modern technologies to build fast, scalable, and reliable digital products.
            </p>

            <Link
              href="/skills"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 transition-colors rounded-full px-6 py-2.5 text-sm font-medium text-white"
            >
              View all skills
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          <div className="col-span-1 lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-[#0a0a0f] border border-white/5 rounded-2xl p-4 flex items-center gap-3 transition-colors hover:bg-white/5 cursor-default group shadow-sm"
                >
                  <div className="shrink-0 flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ease-out">
                    {"image" in tech ? (
                      <img src={tech.image} width="24" height="24" alt={`${tech.name} logo`} className="object-contain" />
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        // Fallback to the brand hex if no colorOverride is provided
                        fill={`#${tech.colorOverride || tech.icon.hex}`}
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label={`${tech.name} logo`}
                      >
                        <path d={tech.icon.path} />
                      </svg>
                    )}
                  </div>

                  <span className="text-sm font-medium text-gray-200">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}