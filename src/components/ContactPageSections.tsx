import Image from "next/image";

const helpCards = [
  {
    title: "Request a Free Consultation",
    text: "Customers can connect with our experts to discuss solar requirements for homes, businesses, and industrial projects.",
    icon: "headset",
  },
  {
    title: "Book a Site Survey",
    text: "Schedule a professional site visit for system inspection, shadow analysis, and customized solar solution planning.",
    icon: "calendar",
  },
  {
    title: "Service Support",
    text: "Raise service requests for maintenance, AMC support, complaint resolution, and technical assistance directly through the mobile app.",
    icon: "phone",
  },
] as const;

function HelpIcon({ type }: { type: (typeof helpCards)[number]["icon"] }) {
  const common = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (type === "headset") {
    return (
      <svg {...common}>
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg {...common}>
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

export function ContactHero() {
  return (
    <section className="relative min-h-[360px] overflow-hidden bg-[#0A4D8D] sm:min-h-[420px]">
      <Image
        src="/slide-2.png"
        alt=""
        fill
        priority
        className="object-cover object-[70%_center]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A4D8D] via-[#0A4D8D]/90 to-[#0A4D8D]/42" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#083a6e]/30 via-transparent to-[#083a6e]/15" />

      <div className="relative z-10 mx-auto flex min-h-[360px] max-w-[1280px] flex-col justify-center px-4 py-16 sm:min-h-[420px] sm:px-6 lg:px-8">
        <p className="text-[14px] font-extrabold uppercase tracking-[0.18em] text-[#2cb673]">
          SOLAR ENERGY SOLUTIONS
        </p>
        <h1 className="page-hero-title mt-3 font-display font-extrabold text-white">
          Contact Us
        </h1>
        <p className="page-desc-on-dark mt-4 max-w-2xl">
          Get in touch with Samatha Green Energy Solutions for solar consultation, site survey
          requests, installation support, AMC services, and technical assistance. Our team is ready
          to help you with complete renewable energy solutions.
        </p>
      </div>
    </section>
  );
}

export default function ContactHelpSection() {
  return (
    <section id="quote" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1100px] text-center">
        <p className="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">CONTACT SERVICES</p>
        <h2 className="page-title mt-3 font-display font-extrabold text-brand-navy">
          How Our Team Can Help
        </h2>
        <p className="page-desc mx-auto mt-4 max-w-2xl">
          Choose the right contact path for consultation, site planning, service support, AMC,
          monitoring, repairs, or upgrades.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1200px] gap-5 md:grid-cols-2 xl:grid-cols-3">
        {helpCards.map((card) => (
          <article
            key={card.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.03)] transition duration-300 ease-out hover:-translate-y-1 hover:border-brand-green/35 hover:shadow-[0_16px_36px_rgba(15,23,42,0.1)] sm:p-7"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green transition duration-300 group-hover:bg-brand-green group-hover:text-white">
              <HelpIcon type={card.icon} />
            </span>
            <h3 className="page-sub-title mt-5 font-extrabold text-brand-navy">{card.title}</h3>
            <p className="page-desc mt-3">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
