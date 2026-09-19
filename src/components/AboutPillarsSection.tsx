const pillars = [
  {
    title: "Innovation",
    text: "Smart, tech-enabled renewable-energy solutions powered by the Samatha clean energy ecosystem.",
    icon: "innovation",
  },
  {
    title: "Sustainability",
    text: "Driving the transition toward a cleaner, greener, and net-zero carbon future.",
    icon: "sustainability",
  },
  {
    title: "Reliability",
    text: "Delivering dependable, high-performance energy systems for long-term energy security.",
    icon: "reliability",
  },
  {
    title: "Savings",
    text: "Reducing energy costs through efficient and optimized renewable energy solutions.",
    icon: "savings",
  },
  {
    title: "Customer Centricity",
    text: "Providing tailored clean energy solutions with seamless digital support and lifecycle service.",
    icon: "customer",
  },
] as const;

const expertiseColumns = [
  {
    title: "Certified Experienced Team",
    icon: "badge",
    items: [
      {
        heading: "Certified Professionals",
        text: "Our team of experts, qualified engineers, and certified professionals are equipped to execute top-notch renewable energy solutions. We are proud partners with Waaree, Luminous, Schneider Electric, and other leading energy brands.",
      },
      {
        heading: "Deep Industry Knowledge",
        text: "Extensive experience in designing and implementing renewable energy solutions, including grid-tied, off-grid, hybrid, and advanced energy systems across residential, commercial, and industrial sectors.",
      },
      {
        heading: "Safety Excellence",
        text: "Strong commitment to safety and quality standards across system design, installation, testing, commissioning, and operational execution, ensuring reliable and compliant project delivery.",
      },
    ],
  },
  {
    title: "Comprehensive Service & Project Management",
    icon: "clipboard",
    items: [
      {
        heading: "End-to-End Project Management",
        text: "Comprehensive management of renewable energy projects from site assessment, customized system design, engineering, approvals, installation, testing, and final commissioning.",
      },
      {
        heading: "Advanced System Design",
        text: "Leveraging advanced design tools and engineering expertise to optimize energy generation, maximize system efficiency, and deliver strong long-term ROI.",
      },
      {
        heading: "Financial & Policy Guidance",
        text: "Expert support in navigating applicable subsidies, incentives, financing options, and regulatory approvals to help clients maximize cost savings.",
      },
      {
        heading: "Seamless System Integration",
        text: "Specialized expertise in integrating solar PV, battery storage, EV infrastructure, and smart energy systems with existing utility and facility infrastructure.",
      },
    ],
  },
  {
    title: "Cutting-Edge Technology & Quality Assurance",
    icon: "quality",
    items: [
      {
        heading: "Tier-1 Technology Solutions",
        text: "Partnerships with leading renewable energy brands to deliver high-performance solar modules, advanced inverters, battery storage, and smart energy technologies.",
      },
      {
        heading: "Quality Assurance Excellence",
        text: "Rigorous multi-stage quality control across design, installation, testing, and commissioning to ensure long-term performance, reliability, and system durability.",
      },
      {
        heading: "Smart Performance Monitoring",
        text: "Advanced remote monitoring capabilities providing real-time system performance insights, proactive maintenance support, and optimized operational uptime.",
      },
      {
        heading: "Warranty & Long-Term Support",
        text: "Comprehensive product warranties, workmanship assurance, and dedicated technical support for reliable long-term system performance.",
      },
    ],
  },
] as const;

function PillarIcon({ type }: { type: (typeof pillars)[number]["icon"] }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (type) {
    case "innovation":
      return (
        <svg {...common}>
          <path
            d="M9 18H15M10 21H14M12 3A5 5 0 0 1 17 8C17 10.5 15.5 11.8 14.5 13H9.5C8.5 11.8 7 10.5 7 8A5 5 0 0 1 12 3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "sustainability":
      return (
        <svg {...common}>
          <path
            d="M5 19C8 12 14 9 19 5C15 10 14 15 12 19C10 16 7 15 5 19Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path d="M12 19C11 14 9 11 6 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "reliability":
      return (
        <svg {...common}>
          <path
            d="M12 3L19 6.5V11.5C19 16 15.8 19.5 12 20.5C8.2 19.5 5 16 5 11.5V6.5L12 3Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path d="M8 13L11 10L13 12L16 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "savings":
      return (
        <svg {...common}>
          <rect x="4" y="7" width="16" height="11" rx="5.5" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="12.5" r="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 12.5H8M16 12.5H17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "customer":
      return (
        <svg {...common}>
          <path
            d="M5 15V11A7 7 0 0 1 19 11V15"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <rect x="3.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
          <rect x="16.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M19 18H15.5A2.5 2.5 0 0 1 13 15.5V14" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
  }
}

function ColumnIcon({ type }: { type: (typeof expertiseColumns)[number]["icon"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  if (type === "badge") {
    return (
      <svg {...common}>
        <path
          d="M12 3L19 6.2V11.4C19 16 16 19.4 12 21C8 19.4 5 16 5 11.4V6.2L12 3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M9 12L11 14L15.5 9.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "clipboard") {
    return (
      <svg {...common}>
        <rect x="6" y="5" width="12" height="15" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 5H15V7.2H9V5Z" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M9 11H15M9 14.2H15M9 17.4H13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        d="M13 3L5 13.5H12L11 21L19 10.5H12L13 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutPillarsSection() {
  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-green">CORE PILLARS</p>
          <h2 className="mt-3 font-display text-[clamp(1.55rem,3vw,2.2rem)] font-bold text-brand-navy">
            The Principles Behind Our Clean Energy Ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-slate-500">
            Our work is guided by innovation, sustainability, reliability, savings, and a
            customer-first approach across every project.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1280px] gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-[0_8px_22px_rgba(15,23,42,0.04)]"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <PillarIcon type={pillar.icon} />
              </span>
              <h3 className="mt-4 text-base font-bold text-brand-navy">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-xs font-bold tracking-[0.12em] text-[#2cb673]">
            QUALIFICATIONS, EXPERTISE, COMPLIANCES AND CERTIFICATIONS
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.55rem,3vw,2.2rem)] font-bold text-[#0A2540]">
            Expertise and Capabilities
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-[#64748B]">
            From certified project teams to advanced design, quality assurance, and long-term
            support — Samatha delivers end-to-end renewable energy capability.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1200px] items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
          {expertiseColumns.map((column) => (
            <article
              key={column.title}
              className="flex h-full flex-col rounded-2xl bg-[#f4f8f5] p-6 sm:p-7"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-[#2cb673]">
                  <ColumnIcon type={column.icon} />
                </span>
                <h3 className="text-[1.15rem] font-extrabold leading-snug text-[#0A2540] sm:text-[1.22rem]">
                  {column.title}
                </h3>
              </div>
              <div className="mt-6 flex flex-1 flex-col gap-5">
                {column.items.map((item) => (
                  <div key={item.heading}>
                    <h4 className="text-[15px] font-bold leading-snug text-[#1B4F8A]">
                      {item.heading}
                    </h4>
                    <p className="mt-1.5 text-[14px] leading-6 text-[#5B6B7C]">{item.text}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
