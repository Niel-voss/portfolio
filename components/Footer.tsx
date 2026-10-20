
"use client";

import Link from "next/link";

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: "github" },
  { name: "X", href: "https://x.com", icon: "x" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { name: "Email", href: "mailto:td0864691@gmail.com", icon: "email" },
];

function BrandLogo({ small = false }: { small?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span style={{ color: "var(--portfolio-accent)" }}>
        <svg
          width={small ? 28 : 32}
          height={small ? 28 : 32}
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 26V6L16 12V20L22 6V26"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 18L16 12M16 20L22 14"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span
        className={`${small ? "text-lg" : "text-xl"} font-semibold tracking-wide`}
        style={{ color: "var(--portfolio-text)" }}
      >
        Niel_Voss
      </span>
    </Link>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
      </svg>
    );
  }

  if (icon === "x") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.59-6.64 7.59H.47l8.6-9.83L0 1.15h7.59l5.25 6.93ZM17.61 20.64h2.04L6.49 3.24H4.3Z" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 0H3.55C1.59 0 0 1.55 0 3.45v17.1C0 22.45 1.59 24 3.55 24h16.9C22.41 24 24 22.45 24 20.55V3.45C24 1.55 22.41 0 20.45 0ZM7.12 20.4H3.56V9h3.56ZM5.34 7.44a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM20.44 20.4h-3.55v-5.55c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92v5.65H9.38V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.36-1.85c3.59 0 4.25 2.36 4.25 5.43Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cardStyle = {
    background: "var(--portfolio-card)",
    borderColor: "var(--portfolio-border)",
    boxShadow: "var(--portfolio-card-shadow)",
  };

  const mutedText = { color: "var(--portfolio-muted)" };
  const linkText = { color: "var(--portfolio-muted-strong)" };

  return (
    <footer
      className="relative w-full overflow-x-hidden border-t pt-16 pb-8 font-sans md:pt-20"
      style={{
        background: "var(--portfolio-bg)",
        color: "var(--portfolio-text)",
        borderColor: "var(--portfolio-border)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">

        {/* Contact CTA */}
        <div
          className="relative mb-16 flex w-full flex-col items-center overflow-hidden rounded-3xl border px-6 py-16 text-center md:mb-20 md:p-20"
          style={cardStyle}
        >
          {/* Grid background adapts to either theme */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: 0.65,
              backgroundImage: `
                linear-gradient(color-mix(in srgb, var(--portfolio-text) 8%, transparent) 1px, transparent 1px),
                linear-gradient(90deg, color-mix(in srgb, var(--portfolio-text) 8%, transparent) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              maskImage: "radial-gradient(ellipse at center, transparent 15%, black 85%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, transparent 15%, black 85%)",
            }}
          />

          {/* Purple ambient glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[200px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] md:h-[300px] md:w-[600px] md:blur-[140px]"
            style={{ background: "var(--portfolio-accent-soft)" }}
          />

          {/* Abstract orbit artwork */}
          <svg
            className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-50"
            viewBox="0 0 1000 400"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="footer-orbit-one" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                <stop offset="35%" stopColor="#a855f7" stopOpacity=".7" />
                <stop offset="70%" stopColor="#a855f7" stopOpacity=".7" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="footer-orbit-two" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity=".45" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M-100 100C200-50 400 350 1100 200" stroke="url(#footer-orbit-one)" strokeWidth="1.5" />
            <path d="M-100 350C300 450 600 0 1100 300" stroke="url(#footer-orbit-two)" strokeWidth="1" />
          </svg>

          <span className="pointer-events-none absolute left-4 top-[20%] z-0 select-none font-mono text-3xl font-semibold opacity-50 md:left-12 md:top-[30%] md:text-[2.75rem]" style={{ color: "var(--portfolio-accent)" }}>
            {"</>"}
          </span>
          <span className="pointer-events-none absolute bottom-[20%] right-4 z-0 select-none font-mono text-3xl font-semibold opacity-50 md:bottom-[25%] md:right-12 md:text-[2.75rem]" style={{ color: "var(--portfolio-accent)" }}>
            {"</>"}
          </span>

          <div
            className="absolute left-[15%] top-[25%] z-0 h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--portfolio-accent)", boxShadow: "0 0 12px 3px var(--portfolio-accent-soft)" }}
          />
          <div
            className="absolute bottom-[30%] right-[20%] z-0 h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--portfolio-accent)", boxShadow: "0 0 12px 3px var(--portfolio-accent-soft)" }}
          />

          {/* CTA foreground */}
          <div className="relative z-10 flex flex-col items-center">
            <span
              className="mb-6 inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em]"
              style={{
                background: "var(--portfolio-accent-soft)",
                color: "var(--portfolio-accent)",
              }}
            >
              Let&apos;s work together
            </span>

            <h2 className="mb-5 text-[2rem] font-bold leading-tight tracking-tight md:text-5xl">
              Let&apos;s build something{" "}
              <span style={{ color: "var(--portfolio-accent)" }}>useful.</span>
            </h2>

            <p className="mb-10 max-w-md text-sm leading-relaxed md:text-base" style={mutedText}>
              Have a project in mind or just want to say hi?
              <br className="hidden sm:block" /> I&apos;d love to hear from you.
            </p>

            <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-all hover:-translate-y-0.5 active:scale-95 sm:w-auto"
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

              <a
                href="/cv.pdf"
                download
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-sm font-medium tracking-wide transition-all hover:-translate-y-0.5 active:scale-95 sm:w-auto"
                style={{
                  borderColor: "var(--portfolio-border)",
                  color: "var(--portfolio-text)",
                  background: "var(--portfolio-surface)",
                }}
              >
                Download CV
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer navigation */}
        <div className="mb-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          <div className="flex flex-col items-start pr-0 sm:col-span-2 lg:col-span-2 lg:pr-8">
            <div className="mb-6">
              <BrandLogo small />
            </div>

            <p className="mb-8 max-w-sm text-sm leading-relaxed" style={mutedText}>
              Full-stack developer building clean, functional, and useful digital products.
            </p>

            <div className="flex items-center gap-5" style={mutedText}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name === "Email" ? undefined : "_blank"}
                  rel={social.name === "Email" ? undefined : "noopener noreferrer"}
                  className="transition-colors hover:text-[var(--portfolio-accent)]"
                  aria-label={social.name}
                  title={social.name}
                >
                  <span className="block h-5 w-5">
                    <SocialIcon icon={social.icon} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-5 text-sm font-semibold" style={{ color: "var(--portfolio-accent)" }}>
              Navigation
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {[
                ["Home", "/"],
                ["About", "/#about"],
                ["Projects", "/#projects"],
                ["Skills", "/#skills"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="transition-colors hover:text-[var(--portfolio-accent)]" style={linkText}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-5 text-sm font-semibold" style={{ color: "var(--portfolio-accent)" }}>
              Explore
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {[
                ["Experience", "/#experience"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="transition-colors hover:text-[var(--portfolio-accent)]" style={linkText}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start sm:col-span-2 lg:col-span-2 lg:pl-8">
            <h3 className="mb-5 text-sm font-semibold" style={{ color: "var(--portfolio-accent)" }}>
              Let&apos;s connect
            </h3>
            <p className="mb-6 text-sm leading-relaxed" style={mutedText}>
              Open to new opportunities and interesting projects.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-medium transition-all hover:border-[var(--portfolio-accent)] hover:text-[var(--portfolio-accent)]"
              style={{
                borderColor: "var(--portfolio-border)",
                color: "var(--portfolio-text)",
              }}
            >
              Get in touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Copyright and back to top */}
        <div className="mb-6 h-px w-full" style={{ background: "var(--portfolio-border)" }} />

        <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs sm:text-sm" style={mutedText}>
            © {new Date().getFullYear()} Niel_Voss. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm transition-colors hover:text-[var(--portfolio-accent)]"
            style={mutedText}
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full border transition-all group-hover:border-[var(--portfolio-accent)] group-hover:bg-[var(--portfolio-accent-soft)]"
              style={{ borderColor: "var(--portfolio-border)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </span>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
