import React from "react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "Understand the problem, users and requirements.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Design",
      description: "Plan the experience, interface and architecture.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
          <line x1="14" y1="5" x2="19" y2="10" />
          <line x1="16" y1="20" x2="22" y2="20" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Build",
      description: "Develop the product with clean, maintainable code.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Test",
      description: "Validate functionality, usability and edge cases.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Deploy",
      description: "Ship, monitor and continuously improve.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="process"
      className="w-full overflow-x-hidden border-t py-16 px-6 md:px-10 lg:py-24 font-sans"
      style={{
        backgroundColor: "var(--portfolio-bg)",
        color: "var(--portfolio-text)",
        borderColor: "var(--portfolio-border)",
        transition: "background-color 350ms ease, color 350ms ease, border-color 350ms ease",
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left column */}
          <div className="col-span-1 flex flex-col items-start lg:sticky lg:top-28 lg:col-span-3">
            <div
              className="mb-5 inline-flex w-max items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
              style={{
                backgroundColor: "var(--portfolio-accent-soft)",
                color: "var(--portfolio-accent)",
              }}
            >
              Process / How I Work
            </div>

            <h2 className="mb-5 text-3xl font-bold leading-[1.2] tracking-tight md:text-4xl lg:text-[2.25rem]">
              How I turn ideas{" "}
              <br className="hidden lg:block" />
              <span style={{ color: "var(--portfolio-accent)" }}>
                into products.
              </span>
            </h2>

            <p
              className="max-w-sm text-sm leading-relaxed"
              style={{ color: "var(--portfolio-muted)" }}
            >
              A simple, collaborative process that helps ensure we build the
              right solution—together.
            </p>
          </div>

          {/* Right column */}
          <div className="relative col-span-1 lg:col-span-9">
            {/* Connecting line on wide screens */}
            <div
              className="absolute left-8 right-8 top-[85px] z-0 hidden h-px xl:block"
              style={{ backgroundColor: "var(--portfolio-border)" }}
            />

            <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-5">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="process-card group relative flex flex-col items-center rounded-2xl border p-6 text-center shadow-lg"
                  style={{
                    backgroundColor: "var(--portfolio-card)",
                    borderColor: "var(--portfolio-border)",
                    boxShadow: "var(--portfolio-card-shadow)",
                  }}
                >
                  {/* Step number */}
                  <div
                    className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border"
                    style={{
                      backgroundColor: "var(--portfolio-accent-soft)",
                      borderColor: "var(--portfolio-border)",
                      color: "var(--portfolio-accent)",
                    }}
                  >
                    <span className="text-[10px] font-bold tracking-wide">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className="process-card__icon mb-5 mt-8"
                    style={{ color: "var(--portfolio-accent)" }}
                  >
                    {step.icon}
                  </div>

                  <h3
                    className="mb-2.5 text-lg font-bold"
                    style={{ color: "var(--portfolio-text)" }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ color: "var(--portfolio-muted)" }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
