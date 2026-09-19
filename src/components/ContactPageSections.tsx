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
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  if (type === "headset") {
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

  if (type === "calendar") {
    return (
      <svg {...common}>
        <rect x="3.5" y="5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M8 3.5V7M16 3.5V7M3.5 10H20.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10 17H14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
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
        <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#2cb673]">
          SOLAR ENERGY SOLUTIONS
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.12] text-white">
          Contact Us
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/95 sm:text-[1.05rem] sm:leading-7">
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
        <p className="text-xs font-bold tracking-[0.16em] text-brand-green">CONTACT SERVICES</p>
        <h2 className="mt-3 font-display text-[clamp(1.55rem,3.2vw,2.2rem)] font-bold text-brand-navy">
          How Our Team Can Help
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-slate-500">
          Choose the right contact path for consultation, site planning, service support, AMC,
          monitoring, repairs, or upgrades.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1200px] gap-5 md:grid-cols-2 xl:grid-cols-3">
        {helpCards.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.03)] sm:p-7"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
              <HelpIcon type={card.icon} />
            </span>
            <h3 className="mt-5 text-lg font-bold text-brand-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
