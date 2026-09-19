import Image from "next/image";
import Link from "next/link";

const provideItems = [
  { label: "On Grid Solar Systems", href: "/solutions/on-grid#on-grid", icon: "grid" },
  { label: "Off Grid Solar Systems", href: "/solutions/off-grid#off-grid", icon: "battery" },
  { label: "Hybrid Solar Systems", href: "/solutions/hybrid#hybrid", icon: "hybrid" },
  { label: "Energy Storage Systems (BESS)", href: "/solutions/ess#ess", icon: "storage" },
  {
    label: "Round the Clock Renewable Energy (RTC)",
    sub: "Solar + Wind + BESS / Lithium-ion Battery",
    href: "/solutions/rtc#rtc",
    icon: "clock",
  },
  { label: "Rooftop Solar Solutions", href: "/services", icon: "roof" },
  { label: "Ground Mounted Solar Systems", href: "/services", icon: "ground" },
  { label: "Solar Carports", href: "/services", icon: "carport" },
] as const;

const whyItems = [
  { label: "Complete EPC Solar Solutions", icon: "epc" },
  { label: "Expert Site Survey & Design", icon: "survey" },
  { label: "Quality Materials & Reliable Installation", icon: "quality" },
  { label: "AMC Service Support", icon: "amc" },
] as const;

function ProvideIcon({ type }: { type: (typeof provideItems)[number]["icon"] }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (type) {
    case "grid":
      return (
        <svg {...common}>
          <path
            d="M4 4H10V10H4V4ZM14 4H20V10H14V4ZM4 14H10V20H4V14ZM14 14H20V20H14V14Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
        </svg>
      );
    case "battery":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M19 10H21V14H19" stroke="currentColor" strokeWidth="1.7" />
          <path d="M7 10V14M11 10V14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "hybrid":
      return (
        <svg {...common}>
          <path
            d="M13 3L5 14H12L11 21L19 10H12L13 3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "storage":
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M9 8H15M9 12H15M9 16H13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12 8V12L15 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "roof":
      return (
        <svg {...common}>
          <path
            d="M3 12L12 4L21 12"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M6 11V20H18V11" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
    case "ground":
      return (
        <svg {...common}>
          <path
            d="M4 18H20M6 18V10L12 6L18 10V18"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path d="M10 18V13H14V18" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "carport":
      return (
        <svg {...common}>
          <path
            d="M4 14V10L12 5L20 10V14"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M5 18H9M15 18H19M4 14H20"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

function WhyIcon({ type }: { type: (typeof whyItems)[number]["icon"] }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (type) {
    case "epc":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.9" />
          <path
            d="M8.5 12.2L10.8 14.5L15.5 9.5"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "survey":
      return (
        <svg {...common}>
          <path
            d="M12 21S6 15.2 6 10.5A6 6 0 0 1 18 10.5C18 15.2 12 21 12 21Z"
            stroke="currentColor"
            strokeWidth="1.9"
          />
          <circle cx="12" cy="10.5" r="2.2" stroke="currentColor" strokeWidth="1.9" />
        </svg>
      );
    case "quality":
      return (
        <svg {...common}>
          <path
            d="M12 3L19 6.5V11.5C19 16 15.8 19.5 12 20.5C8.2 19.5 5 16 5 11.5V6.5L12 3Z"
            stroke="currentColor"
            strokeWidth="1.9"
          />
          <path
            d="M9.2 12L11.1 13.9L14.8 10"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "amc":
      return (
        <svg {...common}>
          <path
            d="M14.7 6.3A4 4 0 0 0 9.2 9.6L4.8 14L9.2 18.4L13.6 14A4 4 0 0 0 17 9.2L14.5 11.7L12 9.2L14.7 6.3Z"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export default function ProcessSection() {
  return (
    <>
      <section id="services" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-[#2cb673]">OUR PROCESS</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-[clamp(1.7rem,3.5vw,2.4rem)] font-extrabold leading-tight text-[#0a1c3e]">
            We Ensure Smooth Flow in Our Process with 100% Results
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#64748B]">
            From the first conversation to long-term maintenance, every step is planned to keep
            your solar project clear, efficient, and dependable.
          </p>
        </div>

        <div className="relative mx-auto mt-8 w-full max-w-[1280px] px-1 sm:mt-10 sm:px-2">
          <Image
            src="/process-infinity.png"
            alt="Our process: Solar Energy Assessment, System Design, Installation, Monitoring and Support"
            width={2000}
            height={1270}
            quality={100}
            unoptimized
            className="mx-auto h-auto w-full [image-rendering:-webkit-optimize-contrast]"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
        </div>
      </section>

      <section className="bg-[#eef3f8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {/* What We Provide — image 3 */}
          <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:p-8">
            <p className="text-xs font-bold tracking-[0.14em] text-[#2cb673]">WHAT WE PROVIDE</p>
            <h3 className="mt-3 max-w-lg font-display text-[clamp(1.45rem,2.6vw,1.9rem)] font-extrabold leading-tight text-[#0A2540]">
              Reliable Solar Systems for Every Energy Need
            </h3>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[#4A5568] sm:text-base">
              Choose the right solar setup for your site, power usage, backup requirement, and
              long-term energy goals.
            </p>

            <div className="mt-7 grid flex-1 content-start gap-3.5 sm:grid-cols-2">
              {provideItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group flex items-center gap-3.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-4 transition hover:-translate-y-0.5 hover:border-[#2cb673]/45 hover:bg-white hover:shadow-[0_10px_24px_rgba(15,23,42,0.08)] ${
                    "sub" in item ? "sm:min-h-[96px] sm:items-start" : ""
                  }`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EDF2F7] text-[#3182CE] transition group-hover:bg-[#2cb673] group-hover:text-white">
                    <ProvideIcon type={item.icon} />
                  </span>
                  <span className={"sub" in item ? "pt-0.5" : ""}>
                    <span className="block text-[15px] font-bold leading-snug text-[#0A2540]">
                      {item.label}
                    </span>
                    {"sub" in item ? (
                      <span className="mt-1 block text-[13px] leading-relaxed text-[#64748B]">
                        {item.sub}
                      </span>
                    ) : null}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Why Choose Us — image 2 */}
          <div className="flex h-full flex-col rounded-2xl bg-[#0D529C] p-6 text-white shadow-[0_12px_32px_rgba(13,82,156,0.3)] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2bb673]">
              Why Choose Us
            </p>
            <h3 className="mt-3 max-w-md font-display text-[clamp(1.5rem,2.7vw,2rem)] font-extrabold leading-tight text-white">
              Built for dependable solar performance
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/95 sm:text-base sm:leading-7">
              Our team handles planning, materials, installation, monitoring, and support so your
              system keeps producing with fewer interruptions.
            </p>

            <ul className="mt-8 flex flex-1 flex-col gap-3.5">
              {whyItems.map((item) => (
                <li
                  key={item.label}
                  className="group flex items-center gap-4 rounded-xl border border-white/30 bg-[#0a4585]/35 px-4 py-4 transition hover:border-[#2bb673]/70 hover:bg-white/5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2bb673] text-white">
                    <WhyIcon type={item.icon} />
                  </span>
                  <span className="text-[15px] font-semibold text-white sm:text-base">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
