import Image from "next/image";

const features = [
  {
    title: "Identify Energy Losses",
    description: "Detect excessive power consumption, wastage, and system inefficiencies.",
    icon: "search",
  },
  {
    title: "Improve System Efficiency",
    description: "Optimize electrical systems and equipment for stronger performance.",
    icon: "gauge",
  },
  {
    title: "Optimized Load Management",
    description: "Improve power distribution, operational stability, and energy utilization.",
    icon: "chart",
  },
  {
    title: "Renewable Energy Planning",
    description: "Identify solar integration and sustainable energy opportunities.",
    icon: "sun",
  },
  {
    title: "Detailed Energy Reporting",
    description: "Get actionable insights for smarter planning and decision-making.",
    icon: "report",
  },
  {
    title: "Long-Term Cost Savings",
    description: "Reduce operating expenses through energy-efficient operations.",
    icon: "savings",
  },
] as const;

function FeatureIcon({ type }: { type: (typeof features)[number]["icon"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (type) {
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M16 16L20.2 20.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "gauge":
      return (
        <svg {...common}>
          <path
            d="M5.5 16.5A7.2 7.2 0 0 1 18.5 16.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M12 16.5L16.2 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="16.5" r="1.4" fill="currentColor" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path
            d="M5 19V12M10 19V8M15 19V13.5M20 19V6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "sun":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 3.6V6.2M12 17.8V20.4M3.6 12H6.2M17.8 12H20.4M6.3 6.3L8.1 8.1M15.9 15.9L17.7 17.7M17.7 6.3L15.9 8.1M8.1 15.9L6.3 17.7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "report":
      return (
        <svg {...common}>
          <rect x="6.5" y="5" width="11" height="14.5" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 5.2H15V7.4H9V5.2Z" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M9.5 11H14.5M9.5 14H14.5M9.5 17H13"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "savings":
      return (
        <svg {...common}>
          <path
            d="M4 16.5L10.2 10.3L13.2 13.3L20 6.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 6.5H20V12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export default function EnergyAssessmentSection() {
  return (
    <section className="bg-[#f4f8fc] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.92fr_1.18fr] lg:items-start lg:gap-12">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#2cb673]">
            ENERGY ASSESSMENT
          </p>
          <h2 className="mt-3 max-w-lg font-display text-[clamp(1.7rem,3.2vw,2.45rem)] font-extrabold leading-[1.15] text-[#0A2540]">
            Smarter Energy Planning Before System Selection
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-7 text-[#5B6B7C] sm:text-base sm:leading-8">
            Our Energy Assessment services provide a detailed analysis of energy consumption,
            system performance, and efficiency gaps to identify cost-saving opportunities.
            Designed for residential, commercial, and industrial facilities, they help optimize
            energy usage and improve operational performance.
          </p>

          <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-[18px] bg-slate-200 shadow-[0_12px_30px_rgba(10,77,141,0.1)]">
            <Image
              src="/ser.jpg"
              alt="Technician reviewing energy assessment data on site"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex min-h-[210px] flex-col rounded-[18px] border border-[#E6EDF4] bg-white px-5 py-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:min-h-[200px] sm:px-6 sm:py-7"
            >
              <span className="text-[#2cb673]">
                <FeatureIcon type={feature.icon} />
              </span>
              <h3 className="mt-4 text-[1.05rem] font-extrabold leading-snug text-[#0A2540]">
                {feature.title}
              </h3>
              <p className="mt-2 text-[14px] leading-6 text-[#64748B]">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
