
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

const images = {
  hero: "/mobile-ui.jpg",
  marketplace: "/marketplace-ui.jpg",
  listing: "/listing-details-ui.jpg",
  chat: "/chat-ui.jpg",
  admin: "/admin-dashboard-ui.png",
};

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "Prisma",
  "Neon",
  "NextAuth",
  "Pusher",
  "Cloudinary",
];

const engineering = [
  {
    title: "Authentication and access control",
    description:
      "Implemented authentication flows, session-aware access, student verification checks, role-based permissions and account restrictions.",
  },
  {
    title: "Database and application data",
    description:
      "Used Prisma and PostgreSQL on Neon to model application data and support marketplace operations.",
  },
  {
    title: "Real-time messaging",
    description:
      "Integrated Pusher into the chat experience, including conversation handling and message interactions.",
  },
  {
    title: "Image management",
    description:
      "Integrated Cloudinary for listing image uploads and delivery, separating media handling from the application server.",
  },
  {
    title: "Search and listing retrieval",
    description:
      "Implemented search and paginated listing retrieval to support browsing through marketplace content.",
  },
  {
    title: "Validation and abuse prevention",
    description:
      "Added server-side validation, rate limiting and account restrictions to help protect important application operations.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p
        className="text-[11px] font-semibold uppercase tracking-[0.19em]"
        style={{ color: theme.accent }}
      >
        {eyebrow}
      </p>

      <h2
        className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
        style={{ color: theme.text }}
      >
        {title}
      </h2>

      {description && (
        <p
          className="mt-3 text-sm leading-7"
          style={{ color: theme.muted }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function PhonePreview({
  src,
  alt,
  label,
  description,
}: {
  src: string;
  alt: string;
  label: string;
  description: string;
}) {
  return (
    <figure className="min-w-0">
      <div
        className="mx-auto max-w-[285px] overflow-hidden rounded-[2rem] border p-2 shadow-xl sm:max-w-[310px]"
        style={{
          backgroundColor: theme.card,
          borderColor: theme.border,
          boxShadow: "0 18px 55px rgba(0,0,0,0.14)",
        }}
      >
        <div
          className="overflow-hidden rounded-[1.5rem] border"
          style={{ borderColor: theme.border }}
        >
          <Image
            src={src}
            alt={alt}
            width={800}
            height={1600}
            sizes="(max-width: 640px) 80vw, 310px"
            className="block h-auto w-full"
          />
        </div>
      </div>

      <figcaption className="mx-auto mt-4 max-w-[310px]">
        <p
          className="text-xs font-semibold"
          style={{ color: theme.text }}
        >
          {label}
        </p>
        <p
          className="mt-1.5 text-xs leading-6"
          style={{ color: theme.muted }}
        >
          {description}
        </p>
      </figcaption>
    </figure>
  );
}

export default function VendlyProjectPage() {
  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      {/* Navigation */}
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-xl"
        style={{
          borderColor: theme.border,
          backgroundColor: "color-mix(in srgb, var(--portfolio-bg, #08080d) 88%, transparent)",
        }}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: theme.muted }}
          >
            <span aria-hidden="true">←</span>
            Back to projects
          </Link>

          <a
            href="https://vendlymarket.com.ng"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition-opacity hover:opacity-85 sm:text-sm"
            style={{
              backgroundColor: theme.accent,
              color: "#ffffff",
            }}
          >
            View live demo
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      {/* Compact hero */}
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14">
        <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <div className="min-w-0">
            <div
              className="flex flex-wrap items-center gap-x-2.5 gap-y-2 text-[11px] font-medium sm:text-xs"
              style={{ color: theme.muted }}
            >
              <span>Independent product</span>
              <span aria-hidden="true">·</span>
              <span>Full-stack development</span>
              <span aria-hidden="true">·</span>
              <span>Marketplace</span>
            </div>

            <h1
              className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-[3.65rem]"
              style={{ color: theme.text }}
            >
              Vendly
              <span style={{ color: theme.accent }}>.</span>
              <br />
              A marketplace for student life.
            </h1>

            <p
              className="mt-5 max-w-xl text-sm leading-7 sm:text-base"
              style={{ color: theme.muted }}
            >
              A peer-to-peer marketplace built for University of Benin
              students to buy items, sell fairly used belongings and
              offer services within their campus community.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs">
              <span>
                <span style={{ color: theme.muted }}>Role: </span>
                <span className="font-medium">Primary developer</span>
              </span>
              <span>
                <span style={{ color: theme.muted }}>Status: </span>
                <span className="font-medium">Live website</span>
              </span>
            </div>

            <a
              href="#product"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: theme.accent }}
            >
              Explore the case study
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          {/* Mobile landing-page hero screenshot */}
          <div className="relative flex min-w-0 justify-center md:justify-end">
            <div
              className="absolute inset-x-8 top-8 bottom-8 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: theme.accent }}
              aria-hidden="true"
            />

            <div
              className="relative w-full max-w-[245px] overflow-hidden rounded-[2rem] border p-2 shadow-2xl sm:max-w-[270px]"
              style={{
                backgroundColor: theme.card,
                borderColor: theme.border,
                boxShadow: "0 24px 70px rgba(0,0,0,0.18)",
              }}
            >
              <div
                className="overflow-hidden rounded-[1.5rem] border"
                style={{ borderColor: theme.border }}
              >
                <Image
                  src={images.hero}
                  alt="Vendly mobile landing page hero showing the marketplace's introductory interface"
                  width={800}
                  height={1600}
                  priority
                  sizes="(max-width: 640px) 70vw, 270px"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project overview */}
      <section
        className="border-y"
        style={{
          borderColor: theme.border,
          backgroundColor: theme.card,
        }}
      >
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:px-8 sm:py-12 md:grid-cols-[0.75fr_1.25fr] md:gap-12">
          <SectionHeading
            eyebrow="Overview"
            title="From campus listings to a connected marketplace."
          />

          <div>
            <p
              className="text-sm leading-7"
              style={{ color: theme.muted }}
            >
              Students need a way to discover items and services
              offered by other students. Vendly brings buying, selling
              and service discovery into one product, with listing
              management, messaging and student verification supporting
              the experience.
            </p>

            <p
              className="mt-3 text-sm leading-7"
              style={{ color: theme.muted }}
            >
              I built most of the application myself, working across
              the responsive interface, application logic, database
              integration and the supporting features needed to make
              the marketplace usable.
            </p>
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section
        id="product"
        className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20"
      >
        <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <SectionHeading
              eyebrow="01 / Discover"
              title="A marketplace designed for browsing."
              description="The marketplace is the entry point for users looking for something to buy or a service offered by another student."
            />

            <p
              className="mt-4 text-sm leading-7"
              style={{ color: theme.muted }}
            >
              The interface brings listings into a consistent browsing
              experience, with search and listing cards helping users
              move from discovery to a more detailed view.
            </p>

            <div className="mt-5 space-y-3">
              {[
                "Browse items and services.",
                "Search for relevant listings.",
                "Open listings for additional information.",
                "Navigate the marketplace on mobile.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 text-sm"
                    style={{ color: theme.accent }}
                  >
                    ✓
                  </span>
                  <p
                    className="text-sm leading-6"
                    style={{ color: theme.muted }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <PhonePreview
            src={images.marketplace}
            alt="Vendly marketplace mobile interface"
            label="Marketplace"
            description="The mobile browsing experience for discovering items and services."
          />
        </div>
      </section>

      {/* Listing details */}
      <section
        className="border-y"
        style={{
          borderColor: theme.border,
          backgroundColor: theme.card,
        }}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <PhonePreview
            src={images.listing}
            alt="Vendly listing details mobile interface"
            label="Listing details"
            description="The listing page gives users a closer look at an item or service before contacting its owner."
          />

          <div>
            <SectionHeading
              eyebrow="02 / Evaluate"
              title="Help users understand a listing before they act."
              description="The listing details page is where browsing becomes a more informed decision."
            />

            <p
              className="mt-4 text-sm leading-7"
              style={{ color: theme.muted }}
            >
              I built a dedicated listing experience that brings
              relevant listing information and contact actions together.
              Users can review the offer and decide whether to reach
              out to the person behind it.
            </p>

            <div
              className="mt-5 border-l-2 pl-4"
              style={{ borderColor: theme.accent }}
            >
              <p className="text-sm font-semibold">
                Design consideration
              </p>
              <p
                className="mt-1.5 text-sm leading-6"
                style={{ color: theme.muted }}
              >
                Keep useful information and next-step actions within
                the same flow, especially on smaller screens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <SectionHeading
              eyebrow="03 / Communicate"
              title="Messaging is part of the marketplace experience."
              description="Vendly supports in-app conversations so buyers and sellers can communicate about listings within the platform."
            />

            <p
              className="mt-4 text-sm leading-7"
              style={{ color: theme.muted }}
            >
              I integrated Pusher into the chat experience and worked
              on conversation handling, message interactions and the
              interface users use to communicate.
            </p>

            <p
              className="mt-3 text-sm leading-7"
              style={{ color: theme.muted }}
            >
              Users arrange transactions and meetups themselves;
              Vendly provides the marketplace and communication tools
              rather than processing payments.
            </p>
          </div>

          <PhonePreview
            src={images.chat}
            alt="Vendly mobile chat interface"
            label="In-app messaging"
            description="A mobile conversation interface for marketplace users."
          />
        </div>
      </section>

      {/* Admin dashboard: landscape desktop screenshot */}
      <section
        className="border-y"
        style={{
          borderColor: theme.border,
          backgroundColor: theme.card,
        }}
      >
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <SectionHeading
            eyebrow="04 / Administration"
            title="A separate workspace for marketplace management."
            description="The administrative experience supports student verification and oversight of marketplace activity. Unlike the student-facing interface, this dashboard is presented in a wide desktop layout."
          />

          <figure className="mt-8 sm:mt-10">
            <div
              className="overflow-hidden rounded-xl border p-1.5 shadow-2xl sm:rounded-2xl sm:p-2"
              style={{
                borderColor: theme.border,
                backgroundColor: theme.bg,
                boxShadow: "0 24px 70px rgba(0,0,0,0.15)",
              }}
            >
              <div
                className="overflow-hidden rounded-lg border sm:rounded-xl"
                style={{ borderColor: theme.border }}
              >
                <Image
                  src={images.admin}
                  alt="Vendly desktop administrator dashboard and student verification management interface"
                  width={1800}
                  height={1100}
                  sizes="(max-width: 768px) 100vw, 1100px"
                  className="block h-auto w-full"
                />
              </div>
            </div>

            <figcaption
              className="mt-3 text-xs leading-6"
              style={{ color: theme.muted }}
            >
              Desktop administration interface — student-facing screens
              are showcased separately in their mobile layout.
            </figcaption>
          </figure>

          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold">
                Student verification
              </h3>
              <p
                className="mt-2 text-sm leading-7"
                style={{ color: theme.muted }}
              >
                Submitted student documentation can be reviewed by
                administrators as part of the manual verification
                workflow.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold">
                Administrative oversight
              </h3>
              <p
                className="mt-2 text-sm leading-7"
                style={{ color: theme.muted }}
              >
                Administrative tools support the management of
                verification requests and marketplace operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design decisions */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <SectionHeading
          eyebrow="05 / Design decisions"
          title="Built around the way students use their phones."
          description="The product experience focuses on keeping common marketplace tasks understandable and accessible on smaller screens."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Visual hierarchy",
              description:
                "Clear distinctions between headings, listing information and supporting actions help users scan content.",
            },
            {
              title: "Responsive layouts",
              description:
                "The student-facing interface adapts to mobile screens instead of relying on a desktop-only layout.",
            },
            {
              title: "Focused interactions",
              description:
                "Browsing, viewing a listing and contacting another user form a connected journey.",
            },
            {
              title: "Consistent components",
              description:
                "Shared visual patterns help different parts of the product feel like one application.",
            },
            {
              title: "Useful interface feedback",
              description:
                "Validation, loading and interaction states help users understand how the application responds.",
            },
            {
              title: "Distinct user experiences",
              description:
                "The marketplace serves students, while administrative workflows address verification and management needs.",
            },
          ].map((item, index) => (
            <article
              key={item.title}
              className="border-t pt-4"
              style={{ borderColor: theme.border }}
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.15em]"
                style={{ color: theme.accent }}
              >
                Design 0{index + 1}
              </p>
              <h3 className="mt-3 text-sm font-semibold">
                {item.title}
              </h3>
              <p
                className="mt-2 text-sm leading-6"
                style={{ color: theme.muted }}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Engineering */}
      <section
        className="border-y"
        style={{
          borderColor: theme.border,
          backgroundColor: theme.card,
        }}
      >
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <SectionHeading
            eyebrow="06 / Engineering"
            title="The systems behind the interface."
            description="Building Vendly meant connecting the UI to real application behavior, persistent data, messaging and media services."
          />

          <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {engineering.map((item, index) => (
              <article
                key={item.title}
                className="border-t pt-4"
                style={{ borderColor: theme.border }}
              >
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: theme.accent }}
                >
                  Engineering 0{index + 1}
                </p>
                <h3 className="mt-3 text-sm font-semibold">
                  {item.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-6"
                  style={{ color: theme.muted }}
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div
            className="mt-9 rounded-xl border p-5 sm:p-6"
            style={{
              borderColor: theme.border,
              backgroundColor: theme.bg,
            }}
          >
            <p className="text-sm font-semibold">Technology stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border px-3 py-1.5 text-xs"
                  style={{
                    borderColor: theme.border,
                    color: theme.muted,
                  }}
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contribution and reflection */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading
              eyebrow="07 / My contribution"
              title="Building beyond the interface."
              description="I built most of Vendly myself, spanning the product's user experience and much of the full-stack implementation."
            />

            <p
              className="mt-4 text-sm leading-7"
              style={{ color: theme.muted }}
            >
              My work includes responsive interfaces, marketplace
              listing flows, authentication, database integration,
              image handling, messaging and administrative workflows.
              Working across these areas has helped me understand
              how product decisions connect to implementation details.
            </p>
          </div>

          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.19em]"
              style={{ color: theme.accent }}
            >
              What I learned
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              A polished product also needs reliable systems.
            </h2>

            <p
              className="mt-4 text-sm leading-7"
              style={{ color: theme.muted }}
            >
              Building a live marketplace has meant thinking beyond
              individual screens: handling data, validating user input,
              managing account access, delivering images and connecting
              people through messaging.
            </p>

            <p
              className="mt-3 text-sm leading-7"
              style={{ color: theme.muted }}
            >
              Vendly continues to give me practical experience in
              building, testing and improving a product intended for
              real users.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <footer
        className="border-t"
        style={{
          borderColor: theme.border,
          backgroundColor: theme.card,
        }}
      >
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.19em]"
                style={{ color: theme.accent }}
              >
                Explore the product
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                See Vendly in action.
              </h2>
              <p
                className="mt-2 text-sm leading-6"
                style={{ color: theme.muted }}
              >
                Visit the live marketplace to explore the product.
              </p>
            </div>

            <a
              href="https://vendlymarket.com.ng"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full px-5 text-sm font-semibold transition-opacity hover:opacity-85 sm:self-auto"
              style={{
                backgroundColor: theme.accent,
                color: "#ffffff",
              }}
            >
              Visit Vendly ↗
            </a>
          </div>

          <div
            className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t pt-5"
            style={{ borderColor: theme.border }}
          >
            <Link
              href="/#projects"
              className="text-xs transition-opacity hover:opacity-70"
              style={{ color: theme.muted }}
            >
              ← Back to projects
            </Link>

            <p
              className="text-xs"
              style={{ color: theme.muted }}
            >
              Vendly · Full-stack product project
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
