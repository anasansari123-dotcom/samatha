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
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (type) {
    case "innovation":
      return (
        <svg {...common}>
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      );
    case "sustainability":
      return (
        <svg {...common}>
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      );
    case "reliability":
      return (
        <svg {...common}>
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "savings":
      return (
        <svg {...common}>
          <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z" />
          <path d="M2 9v1c0 1.1.9 2 2 2h1" />
          <path d="M16 11h.01" />
        </svg>
      );
    case "customer":
      return (
        <svg {...common}>
          <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
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
      <svg
        {...common}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
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
          <p className="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">CORE PILLARS</p>
          <h2 className="page-title mt-3 font-display font-bold text-brand-navy">
            The Principles Behind Our Clean Energy Ecosystem
          </h2>
          <p className="page-desc mx-auto mt-4 max-w-3xl">
            Our work is guided by innovation, sustainability, reliability, savings, and customer
            centricity across every solution we design, build, and support.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1280px] gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-left"
            >
              <span className="text-brand-green">
                <PillarIcon type={pillar.icon} />
              </span>
              <h3 className="page-sub-title mt-4 font-extrabold text-brand-navy">
                {pillar.title}
              </h3>
              <p className="page-desc mt-2">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-[14px] font-extrabold tracking-[0.12em] text-[#2cb673]">
            QUALIFICATIONS, EXPERTISE, COMPLIANCES AND CERTIFICATIONS
          </p>
          <h2 className="page-title mt-3 font-display font-bold text-[#0A2540]">
            Expertise and Capabilities
          </h2>
          <p className="page-desc mx-auto mt-4 max-w-3xl">
            From certified project teams to advanced design, quality assurance, and long-term
            support â€” Samatha delivers end-to-end renewable energy capability.
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
                <h3 className="page-sub-title font-extrabold text-[#0A2540]">
                  {column.title}
                </h3>
              </div>
              <div className="mt-6 flex flex-1 flex-col gap-5">
                {column.items.map((item) => (
                  <div key={item.heading}>
                    <h4 className="text-base font-bold leading-snug !text-[#0D529C]">
                      {item.heading}
                    </h4>
                    <p className="page-desc mt-1.5">{item.text}</p>
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
