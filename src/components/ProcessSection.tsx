import Link from "next/link";

const provideItems = [
  { label: "On-Grid Solar Systems", href: "/solutions/on-grid#on-grid", icon: "zap" },
  { label: "Off-Grid Solar Systems", href: "/solutions/off-grid#off-grid", icon: "battery" },
  { label: "Hybrid Solar Systems", href: "/solutions/hybrid#hybrid", icon: "copy" },
  { label: "Energy Storage Systems (ESS)", href: "/solutions/ess#ess", icon: "battery" },
  {
    label: "Round the Clock Renewable Energy (RTC) (Solar + wind + BESS/Lithium-ion Battery)",
    href: "/solutions/rtc#rtc",
    icon: "clock",
  },
  { label: "Rooftop Solar Solutions", href: "/services", icon: "house" },
  { label: "Ground Mounted Solar Systems", href: "/services", icon: "pin" },
  { label: "Solar Carports", href: "/services", icon: "building" },
] as const;

const whyItems = [
  { label: "Complete EPC Solar Solutions", icon: "check" },
  { label: "Expert Site Survey & Design", icon: "user" },
  { label: "Quality Materials & Reliable Installation", icon: "shield" },
  { label: "AMC Service Support", icon: "wrench" },
  { label: "Fast Issue Resolution", icon: "zap" },
  { label: "Mobile App Monitoring", icon: "phone" },
  { label: "Residential to Industrial Solutions", icon: "building" },
] as const;

type IconName = (typeof provideItems)[number]["icon"] | (typeof whyItems)[number]["icon"] | "plug" | "grid";

function StrokeIcon({ type, size = 22 }: { type: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (type) {
    case "zap":
      return (
        <svg {...common}>
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
        </svg>
      );
    case "battery":
      return (
        <svg {...common}>
          <path d="m11 7-3 5h4l-3 5" />
          <path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935" />
          <path d="M22 14v-4" />
          <path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936" />
        </svg>
      );
    case "copy":
      return (
        <svg {...common}>
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      );
    case "house":
      return (
        <svg {...common}>
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
          <circle cx="12" cy="8" r="2" />
          <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
        </svg>
      );
    case "plug":
      return (
        <svg {...common}>
          <path d="M12 22v-5" />
          <path d="M9 8V2" />
          <path d="M15 8V2" />
          <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
        </svg>
      );
    case "grid":
      return (
        <svg {...common}>
          <rect width="7" height="7" x="3" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="14" rx="1" />
          <rect width="7" height="7" x="3" y="14" rx="1" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case "user":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="10" r="3" />
          <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
          <path d="M10 6h4" />
          <path d="M10 10h4" />
          <path d="M10 14h4" />
          <path d="M10 18h4" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      );
  }
}

export default function ProcessSection() {
  return (
    <>
      <section id="services" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-[14px] font-extrabold tracking-[0.16em] text-[#2cb673]">OUR PROCESS</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-[clamp(1.7rem,3.5vw,2.4rem)] font-extrabold leading-tight text-[#0a1c3e]">
            We Ensure Smooth Flow in Our Process with 100% Results
          </h2>
          <p className="mx-auto mt-4 max-w-3xl font-sans text-[16px] leading-[1.65] text-gray-500">
            From the first conversation to long-term maintenance, every step is planned to keep
            your solar project clear, efficient, and dependable.
          </p>
        </div>

        <div className="relative mx-auto mt-8 w-full max-w-[1000px] px-4 sm:mt-10 sm:px-6">
          <img
            src="/process-infinity.png"
            alt="Our process: Solar Energy Assessment, System Design, Installation, Monitoring and Support"
            width={2000}
            height={1270}
            decoding="async"
            className="mx-auto h-auto w-full object-contain"
          />
        </div>
      </section>

      <section className="bg-[#eef3f8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 sm:p-8">
            <p className="text-[14px] font-extrabold uppercase tracking-[0.18em] text-[#2cb673]">
              What We Provide
            </p>
            <h2 className="mt-3 max-w-xl font-sans text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#0A2540] sm:text-[36px] sm:leading-[40px]">
              Reliable Solar Systems for Every Energy Need
            </h2>
            <p className="mt-4 max-w-xl font-sans text-[17px] leading-[1.65] text-gray-500">
              Choose the right solar setup for your site, power usage, backup requirement, and
              long-term energy goals.
            </p>

            <div className="mt-7 grid items-stretch gap-4 sm:grid-cols-2 mb-25">
              {provideItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex h-full min-h-20 items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-5 transition hover:-translate-y-1 hover:border-[#2cb673]/50 hover:shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#E8F1F8] text-[#1B4F8A] transition group-hover:bg-brand-green group-hover:text-white">
                    <StrokeIcon type={item.icon} size={22} />
                  </span>
                  <span className="text-[15px] font-extrabold leading-5 text-[#0A2540]">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl bg-[#0D529C] p-6 text-white shadow-[0_12px_32px_rgba(13,82,156,0.3)] sm:p-8">
            <p className="mb-3 text-[14px] font-extrabold uppercase tracking-[0.18em] text-[#2cb673]">
              Why Choose Us
            </p>
            <h2 className="max-w-md font-sans text-[32px] font-extrabold leading-[1.15] tracking-tight !text-white sm:text-[36px] sm:leading-[40px]">
              Built for dependable solar performance
            </h2>
            <p className="mt-4 font-sans text-[19px] font-medium leading-7 text-white/80">
              Our team handles planning, materials, installation, monitoring, and support so your
              system keeps producing with fewer interruptions.
            </p>

            <ul className="mt-8 grid gap-3">
              {whyItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#2cb673] text-white">
                    <StrokeIcon type={item.icon} size={20} />
                  </span>
                  <span className="text-base font-semibold leading-6 text-white">{item.label}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
