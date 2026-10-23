
import Link from "next/link";
import Image from "next/image";
import DownloadCvBtn from "./DownloadCvBtn";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Niel-voss",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    name: "X",
    href: "https://x.com/Niel_voss40202",
    path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  },
  // {
  //   name: "LinkedIn",
  //   href: "https://linkedin.com",
  //   path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  // },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-x-clip bg-[var(--hero-bg)] px-5 pt-10 pb-24 text-[var(--hero-text)] font-sans sm:px-6 sm:pt-12 lg:px-10 lg:pt-24 lg:pb-32">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 lg:flex-row lg:gap-8">
        {/* Left column: Content */}
        <div className="z-20 flex w-full flex-1 flex-col items-start">
          <p className="mb-4 flex items-center gap-2 text-lg font-medium text-[var(--hero-soft)]">
            Hi, I&apos;m Niel Voss
            <span className="origin-bottom-right animate-pulse">👋</span>
          </p>

          <h1 className="mb-6 text-[2.75rem] font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.15]">
            I build clean, functional{" "}
            <br className="hidden md:block" />
            and purposeful{" "}
            <span className="text-[var(--hero-accent)]">
              digital products.
            </span>
          </h1>

          <p className="mb-8 max-w-[540px] text-base leading-relaxed text-[var(--hero-muted)] lg:mb-10 lg:text-lg">
            I&apos;m a full-stack developer who loves turning ideas into real
            web applications. I focus on creating smooth user experiences,
            writing clean code and building solutions that actually solve
            problems.
          </p>

          <div className="mb-7 flex w-full flex-col gap-4 sm:mb-9 sm:w-auto sm:flex-row lg:mb-10">
            <Link
              href="/#projects"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--hero-accent)] px-8 py-3.5 text-sm font-medium text-white shadow-[0_0_20px_var(--hero-glow)] transition-all hover:brightness-110 hover:shadow-[0_0_25px_var(--hero-glow)] sm:w-auto"
            >
              View My Projects
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

            <DownloadCvBtn />
          </div>

          {/* Social links */}
          <div
            aria-label="Social and contact links"
            className="mb-2 flex items-center gap-2 text-[var(--hero-soft)] sm:gap-3 lg:mb-0"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${social.name} profile`}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 hover:bg-[var(--hero-hover)] hover:text-[var(--hero-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--hero-accent)] sm:h-12 sm:w-12 lg:h-10 lg:w-10"
              >
                <svg
                  aria-hidden="true"
                  className="h-8 w-8 sm:h-8 sm:w-8 lg:h-6 lg:w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}

            <a
              href="mailto:thomasdaniel8373@gmail.com?subject=Developer%20Opportunity"
              aria-label="Email me"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 hover:bg-[var(--hero-hover)] hover:text-[var(--hero-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--hero-accent)] sm:h-12 sm:w-12 lg:h-10 lg:w-10"
            >
              <svg
                aria-hidden="true"
                className="h-8 w-8 sm:h-8 sm:w-8 lg:h-6 lg:w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right column: Portrait and floating cards */}
        <div className="relative z-10 flex w-full flex-1 justify-center pt-4 lg:justify-end lg:pt-0">
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--hero-glow)] blur-[100px] lg:h-[450px] lg:w-[450px]" />

          <div className="relative z-10 flex w-full max-w-[340px] flex-col items-center sm:max-w-[380px] lg:max-w-[420px]">
            <div className="absolute -top-6 left-2 z-30 flex -rotate-[8deg] flex-col items-center md:left-0 lg:-left-28 lg:top-8">
              <p className="mb-1 whitespace-nowrap text-sm italic text-[var(--hero-muted)] opacity-80 lg:text-base">
                From concept
                <br />
                to production...
              </p>
              <svg
                aria-hidden="true"
                className="ml-12 mt-1 h-12 w-12 text-[var(--hero-muted)] opacity-70"
                viewBox="0 0 50 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 10,10 Q 15,40 45,40" />
                <path d="M 35,30 L 45,40 L 35,50" />
              </svg>
            </div>

            <svg
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 top-[40%] z-0 hidden h-40 w-20 text-[var(--hero-accent)] opacity-40 lg:block"
              viewBox="0 0 100 150"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              strokeLinecap="round"
            >
              <path d="M 10,0 C 80,40 80,110 10,150" />
            </svg>

            <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-b-3xl shadow-2xl">
              <Image
                src="/portfolioIMG.webp"
                alt="Portrait of Niel Voss"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--hero-bg) 0%, color-mix(in srgb, var(--hero-bg) 20%, transparent) 45%, transparent 100%)",
                }}
              />
            </div>

            <div className="absolute -bottom-8 left-1/2 z-30 flex w-max max-w-[95%] -translate-x-1/2 items-center gap-3 rounded-2xl border border-[var(--hero-card-border)] bg-[var(--hero-card-bg)] p-3 shadow-2xl backdrop-blur-md sm:gap-4 sm:p-4 lg:bottom-12 lg:-left-20 lg:translate-x-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--hero-icon-bg)] text-[var(--hero-accent)] sm:h-12 sm:w-12">
                <svg
                  aria-hidden="true"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>

              <div className="whitespace-nowrap">
                <h3 className="text-sm font-semibold text-[var(--hero-card-text)] sm:text-base">
                  Full Stack Developer
                </h3>
                <p className="mt-0.5 text-xs text-[var(--hero-muted)]">
                  React • Next.js • Node.js
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-[var(--hero-divider)]" />
    </section>
  );
}
