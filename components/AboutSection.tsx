
"use client";

export default function AboutSection() {
  const features = [
    {
      title: "Problem Solving",
      description: "Breaking complex problems into practical solutions.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      title: "User-Focused Design",
      description: "Building interfaces that feel clear and intuitive.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: "End-to-End Development",
      description: "Connecting interfaces, APIs, databases, and authentication.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l8 4.5v9L12 22l-8-4.5v-9L12 2z" />
          <polyline points="12 22 12 11" />
          <polyline points="12 11 20 6.5" />
          <polyline points="4 6.5 12 11" />
        </svg>
      ),
    },
  ];

  const personalDetails = [
    {
      label: "Name",
      value: "Thomas Daniel (Niel_Voss)",
      icon: (
        <>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </>
      ),
    },
    {
      label: "Location",
      value: "Lagos, Nigeria",
      icon: (
        <>
          <path d="M20 10c0 7-8 12-8 12S4 17 4 10a8 8 0 1 1 16 0z" />
          <circle cx="12" cy="10" r="3" />
        </>
      ),
    },
    {
      label: "Education",
      value: "B.Sc. Computer Science (UNIBEN)",
      icon: (
        <>
          <path d="M22 10l-10-5-10 5 10 5 10-5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </>
      ),
    },
    {
      label: "Graduation",
      value: "2026",
      icon: (
        <>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </>
      ),
    },
  ];

  const strengths = [
    {
      title: "Full-Stack Development",
      description: "Building across the frontend and backend.",
      icon: (
        <>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </>
      ),
    },
    {
      title: "Product Thinking",
      description: "Considering usability beyond the code.",
      icon: (
        <>
          <path d="M9 18h6M10 22h4" />
          <path d="M15 11.23C15 9.94 15.82 8.78 17 8.35 18.42 7.82 19 6.47 19 5.09a7 7 0 1 0-14 0c0 1.38.58 2.73 2 3.26C8.18 8.78 9 9.94 9 11.23V18" />
        </>
      ),
    },
    {
      title: "Secure Engineering",
      description: "Authentication, permissions, and data protection.",
      icon: (
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      ),
    },
  ];

  const cardStyle = {
    background: "var(--portfolio-card)",
    borderColor: "var(--portfolio-border)",
    boxShadow: "var(--portfolio-card-shadow)",
  };

  const iconBoxStyle = {
    background: "var(--portfolio-surface)",
    borderColor: "var(--portfolio-border)",
    color: "var(--portfolio-accent)",
  };

  return (
    <section
      id="about"
      className="w-full overflow-x-hidden border-t px-6 py-16 font-sans md:px-10 lg:py-24"
      style={{
        background: "var(--portfolio-bg)",
        color: "var(--portfolio-text)",
        borderColor: "var(--portfolio-border)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-8">

          {/* About and approach */}
          <div className="col-span-1 flex flex-col justify-center lg:col-span-5">
            <span
              className="mb-6 inline-flex w-max items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
              style={{
                background: "var(--portfolio-accent-soft)",
                color: "var(--portfolio-accent)",
              }}
            >
              About Me
            </span>

            <h2 className="mb-5 text-3xl font-bold leading-[1.2] tracking-tight md:text-4xl lg:text-[2.5rem]">
              Turning ideas into{" "}
              <span style={{ color: "var(--portfolio-accent)" }}>
                real solutions.
              </span>
            </h2>

            <p
              className="mb-10 max-w-lg text-sm leading-relaxed md:text-base"
              style={{ color: "var(--portfolio-muted)" }}
            >
              I&apos;m a full-stack developer who enjoys building useful web
              applications from concept to deployment. I focus on thoughtful
              design, reliable engineering, and solving problems for real users.
            </p>

            <div className="flex flex-col gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border p-2"
                    style={iconBoxStyle}
                  >
                    {feature.icon}
                  </div>

                  <div>
                    <h3
                      className="mb-1.5 text-sm font-semibold"
                      style={{ color: "var(--portfolio-text)" }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--portfolio-muted)" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal information */}
          <div className="col-span-1 mt-2 lg:col-span-4 lg:mt-0">
            <div
              className="flex h-full flex-col rounded-2xl border p-6"
              style={cardStyle}
            >
              <div className="flex flex-grow flex-col gap-6 text-sm">
                {personalDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="grid grid-cols-[100px_1fr] items-start gap-2 xl:grid-cols-[110px_1fr]"
                  >
                    <div
                      className="flex items-center gap-2"
                      style={{ color: "var(--portfolio-muted)" }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0"
                        aria-hidden="true"
                      >
                        {detail.icon}
                      </svg>
                      <span>{detail.label}</span>
                    </div>

                    <div
                      className="leading-snug"
                      style={{ color: "var(--portfolio-text)" }}
                    >
                      {detail.value}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-8 border-t pt-5"
                style={{ borderColor: "var(--portfolio-border)" }}
              >
                <p
                  className="text-sm italic leading-relaxed"
                  style={{ color: "var(--portfolio-muted)" }}
                >
                  &quot;Better code. Better products. A bigger impact.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Core strengths */}
          <div className="col-span-1 mt-2 flex flex-col gap-4 lg:col-span-3 lg:mt-0">
            <span
              className="inline-flex w-max items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
              style={{
                background: "var(--portfolio-accent-soft)",
                color: "var(--portfolio-accent)",
              }}
            >
              What I Bring
            </span>

            <div
              className="flex h-full flex-col justify-center gap-7 rounded-2xl border p-6"
              style={cardStyle}
            >
              {strengths.map((strength) => (
                <div key={strength.title} className="flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full p-2.5"
                    style={{
                      background: "var(--portfolio-accent-soft)",
                      color: "var(--portfolio-accent)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {strength.icon}
                    </svg>
                  </div>

                  <div>
                    <h3
                      className="mb-1.5 mt-1 text-base font-bold leading-tight"
                      style={{ color: "var(--portfolio-text)" }}
                    >
                      {strength.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--portfolio-muted)" }}
                    >
                      {strength.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
