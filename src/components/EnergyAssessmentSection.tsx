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
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (type) {
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      );
    case "gauge":
      return (
        <svg {...common}>
          <path d="m12 14 4-4" />
          <path d="M3.34 19a10 10 0 1 1 17.32 0" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M3 3v16a2 2 0 0 0 2 2h16" />
          <path d="M18 17V9" />
          <path d="M13 17V5" />
          <path d="M8 17v-3" />
        </svg>
      );
    case "sun":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      );
    case "report":
      return (
        <svg {...common}>
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      );
    case "savings":
      return (
        <svg {...common}>
          <path d="M16 17h6v-6" />
          <path d="m22 17-8.5-8.5-5 5L2 7" />
        </svg>
      );
  }
}

export default function EnergyAssessmentSection() {
  return (
    <section className="bg-[#f4f8fc] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.92fr_1.18fr] lg:items-start lg:gap-12">
        <div>
          <p className="text-[14px] font-extrabold uppercase tracking-[0.16em] text-[#2cb673]">
            ENERGY ASSESSMENT
          </p>
          <h2 className="page-title mt-3 max-w-lg font-display font-extrabold text-[#0A2540]">
            Smarter Energy Planning Before System Selection
          </h2>
          <p className="page-desc mt-4 max-w-lg">
            Our Energy Assessment services provide a detailed analysis of energy consumption,
            system performance, and efficiency gaps to identify cost-saving opportunities.
            Designed for residential, commercial, and industrial facilities, they help optimize
            energy usage and improve operational performance.
          </p>

          <div className="group relative mt-8 aspect-[16/10] overflow-hidden rounded-[18px] bg-slate-200 shadow-[0_12px_30px_rgba(10,77,141,0.1)] transition duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_20px_44px_rgba(10,77,141,0.18)]">
            <Image
              src="/ser.jpg"
              alt="Technician reviewing energy assessment data on site"
              fill
              className="object-cover transition duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex min-h-[210px] flex-col rounded-[18px] border border-[#E6EDF4] bg-white px-5 py-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.12)] sm:min-h-[200px] sm:px-6 sm:py-7"
            >
              <span className="text-[#2cb673]">
                <FeatureIcon type={feature.icon} />
              </span>
              <h3 className="mt-4 !text-[18px] !leading-snug font-extrabold text-[#0A2540]">
                {feature.title}
              </h3>
              <p className="page-desc mt-2">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
