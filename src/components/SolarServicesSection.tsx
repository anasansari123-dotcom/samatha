import Image from "next/image";

const services = [
  {
    label: "SOLAR PRODUCT",
    title: "Residential Solar Panel Solutions",
    description:
      "Empower your home with smart solar solutions that reduce electricity costs and provide reliable energy independence. Turn your rooftop into a clean power source that adds long-term value and ensures uninterrupted comfort.",
    image: "/11.jpg",
    imageRight: false,
    points: [
      "Near-zero electricity bills with solar self-generation and net metering",
      "Reliable power backup during outages with hybrid solar solutions",
      "Higher property value with a future-ready, energy-efficient home",
      "Energy independence with reduced dependence on grid electricity",
      "Clean and sustainable living with eco-friendly renewable power",
    ],
  },
  {
    label: "SOLAR PRODUCT",
    title: "Commercial Solar Panel Solutions",
    description:
      "Optimize your business operations with smart solar solutions that significantly reduce electricity expenses and improve profitability. Designed for commercial spaces with high daytime energy use, solar delivers strong ROI and dependable performance.",
    image: "/12.jpg",
    imageRight: false,
    points: [
      "Lower operating costs with substantial savings on monthly electricity bills",
      "High ROI through efficient energy generation and faster payback",
      "Maximum daytime utilization by using solar power when your business needs it most",
      "Reliable power continuity for critical operations with hybrid backup solutions",
      "Tax and financial benefits such as accelerated depreciation where applicable",
    ],
  },
  {
    label: "SOLAR PRODUCT",
    title: "Institutional Solar Panel Solutions",
    description:
      "Transform institutional spaces into efficient energy hubs with smart solar solutions that reduce operating costs and support sustainability goals. Ideal for schools, hospitals, colleges, and public facilities with large rooftop spaces.",
    image: "/13.jpg",
    imageRight: false,
    points: [
      "Lower and predictable energy costs for better budget planning and long-term savings",
      "Large-scale energy savings by maximizing unused rooftop space",
      "Sustainability and CSR compliance with clean, renewable energy adoption",
      "Enhanced brand reputation by showcasing environmental responsibility",
      "Educational and practical value as a live learning tool for students and staff",
    ],
  },
  {
    label: "SOLAR PRODUCT",
    title: "Industrial Solar Panel Solutions",
    description:
      "Power your industrial operations with high-capacity solar solutions designed to reduce energy costs and ensure uninterrupted production. Ideal for manufacturing units, cold storage, and processing plants with large energy demands.",
    image: "/14.jpg",
    imageRight: true,
    points: [
      "Significant energy cost savings by reducing large-scale electricity procurement expenses",
      "Uninterrupted production support with reliable hybrid backup solutions",
      "Demand charge reduction by lowering grid dependence during peak tariff hours",
      "Sustainability compliance to meet green energy and supply chain requirements",
      "Long-term reliability with industrial-grade systems built for 25+ years of performance",
      "Optimal space utilization through rooftop or ground-mounted solar installations",
    ],
  },
  {
    label: "SOLAR PRODUCT",
    title: "Battery Energy Storage Systems (BESS)",
    description:
      "Our Battery Energy Storage Systems provide intelligent energy storage solutions for efficient power management, backup support, and optimized energy utilization. Designed for seamless integration with solar and grid systems, they help reduce operational costs and improve energy reliability.",
    image: "/15.jpg",
    imageRight: true,
    points: [
      "Energy storage and backup power for uninterrupted operation during outages and high-demand periods",
      "Peak load management to reduce peak electricity consumption and lower demand charges",
      "Smart monitoring and control with real-time performance tracking and automated energy management",
      "Better performance than conventional backup systems by storing and using energy efficiently",
      "Reduced energy costs through optimized use of stored solar or grid power",
      "Scalable modular design for residential, commercial, and industrial energy requirements",
    ],
  },
  {
    label: "SOLAR PRODUCT",
    title: "Grid Based and Solar Based EV Charging Infrastructure",
    description:
      "Our EV charging solutions provide expert guidance and future-ready charging infrastructure tailored to your energy requirements, budget, and scalability needs. Designed with smart energy management and solar integration, they deliver efficient and cost-effective EV charging solutions.",
    image: "/16.jpg",
    imageRight: true,
    points: [
      "Expert EV consultation to select charging infrastructure based on usage, vehicle type, and power needs",
      "Solar integrated charging to reduce electricity consumption and lower charging costs",
      "Reliable charging performance for residential, commercial, and public applications",
      "Future-ready scalable infrastructure to support growing EV adoption",
      "Smarter energy management than standalone grid-dependent charging systems",
    ],
  },
  {
    label: "SOLAR PRODUCT",
    title: "Solar Carports",
    description:
      "Our Solar Carport EV Charging solutions combine smart parking infrastructure with clean solar power generation for efficient electric vehicle charging. Designed for residential, commercial, and industrial applications, they maximize space utilization while reducing energy costs.",
    image: "/17.jpg",
    imageRight: false,
    points: [
      "Solar-powered EV charging using clean renewable energy to reduce charging costs",
      "Dual-purpose infrastructure serving as both a parking shelter and power generation system",
      "Reduced per-unit charging expenses for EV users through solar integration",
      "Convert unused parking areas into productive energy assets",
      "Smart energy management for solar generation, EV charging demand, and power distribution",
      "Future-ready sustainable infrastructure for scalable clean energy charging",
    ],
  },
  {
    label: "SOLAR PRODUCT",
    title:
      "Round the Clock Renewable Energy (RTC) (Solar + wind + BESS/Lithium-ion Battery)",
    description:
      "Our Round the Clock Renewable Energy (RTC) (Solar + wind + BESS/Lithium-ion Battery) systems deliver uninterrupted power through the intelligent integration of solar energy, wind, battery storage, and smart power management. Designed for continuous energy supply, they reduce dependency on conventional grid electricity and fuel sources such as diesel generators.",
    image: "/19.jpg",
    imageRight: false,
    points: [
      "24/7 uninterrupted power supply during daytime, nighttime, and power outages",
      "Reduced energy costs through efficient use of solar, wind, and energy storage",
      "Smart power management with automatic control of renewable, storage, and backup sources",
      "Lower grid and fuel dependency for greater energy independence",
      "Reliable continuous performance for applications requiring uninterrupted power availability",
    ],
  },
  {
    label: "SOLAR PRODUCT",
    title: "Microgrid Solutions",
    description:
      "Our Microgrid Solutions integrate solar, wind, battery storage, grid connectivity, and backup systems to deliver intelligent and reliable energy management. Designed for continuous power availability, they improve energy efficiency, reduce operational costs, and support greater energy independence.",
    image: "/20.jpg",
    imageRight: false,
    points: [
      "Reliable and uninterrupted power supply during grid failures and interruptions",
      "Peak load optimization to lower demand charges and improve system stability",
      "Smart energy management across solar power, battery storage, and backup sources",
      "Renewable energy integration for seamless use of solar and clean energy systems",
      "Greater energy independence with reduced reliance on the main power grid",
    ],
  },
  {
    label: "SOLAR PRODUCT",
    title: "Lithium-Ion Backup Solutions",
    description:
      "Our Lithium-Ion Backup Solutions provide reliable, high-efficiency power storage for uninterrupted operations across residential and commercial applications. Designed for faster charging, longer battery life, and smart energy management, they offer a superior alternative to conventional backup systems.",
    image: "/21.jpg",
    imageRight: true,
    points: [
      "Reliable power backup during outages and voltage fluctuations",
      "Fast charging and high efficiency compared to traditional battery technologies",
      "Longer battery life with extended life cycles and reduced replacement frequency",
      "Low maintenance performance with advanced battery management",
      "Solar integration compatibility for efficient renewable energy storage",
      "Smarter backup with intelligent monitoring, enhanced safety, and lower ownership costs",
    ],
  },
  {
    label: "SOLAR PRODUCT",
    title: "Solar Street Lights",
    description:
      "Our solar street lighting solutions provide reliable, independent illumination for roads, campuses, and outdoor spaces without the need for trenching or complex cabling. Designed for efficient dusk-to-dawn operation, they ensure dependable lighting with minimal maintenance.",
    image: "/22.jpg",
    imageRight: true,
    points: [
      "All-in-one compact design with integrated solar panel, LED luminaire, and lithium battery",
      "Automatic dusk-to-dawn operation with smart sensors for efficient lighting",
      "Reliable battery backup with long-lasting LiFePO4 batteries offering 2-3 days of autonomy",
      "Energy optimization with optional PIR motion sensors to maximize battery life",
      "Low maintenance design for long-term outdoor performance",
    ],
  },
  {
    label: "SOLAR PRODUCT",
    title: "Solar Water Pump",
    description:
      "Our solar water pumping solutions provide a reliable and cost-effective water supply for agriculture, horticulture, apartments, and remote applications without dependence on grid power or diesel. Designed for efficient performance, they deliver sustainable water access with low operating costs.",
    image: "/23.jpg",
    imageRight: true,
    points: [
      "Diesel-free operation with zero fuel costs and reduced environmental impact",
      "High durability with robust stainless-steel construction for demanding conditions",
      "Maximum water output with advanced MPPT controllers, even in low sunlight",
      "Government-compliant systems meeting MNRE standards with applicable subsidy eligibility",
      "Reliable water supply for irrigation, rural drinking water, and commercial transfer",
    ],
  },
  {
    label: "SOLAR PRODUCT",
    title: "Solar Hybrid Generator",
    description:
      "Our Solar Hybrid Generator solutions combine solar energy, battery storage, and generator backup to deliver reliable and cost-efficient power management. Designed to reduce fuel dependency, they ensure uninterrupted power with significantly lower operating expenses.",
    image: "/24.jpg",
    imageRight: false,
    points: [
      "Up to 60% cost reduction compared to conventional generator-based power systems",
      "Uninterrupted power supply with solar, battery storage, and generator backup",
      "Lower fuel consumption by minimizing diesel generator runtime",
      "Reduced emissions and noise for cleaner, quieter energy operation",
      "Higher reliability than conventional generators through smarter energy management",
      "Low maintenance performance with durable industrial-grade components",
    ],
  },
  {
    label: "SOLAR PRODUCT",
    title: "Solar Fence Energy System",
    description:
      "Our Solar Fencing Systems provide reliable perimeter protection using solar-powered, non-lethal electric pulses to deter unauthorized entry, theft, and animal intrusion. Designed for uninterrupted security, they offer a cost-effective solution with minimal operating expenses.",
    image: "/25.jpg",
    imageRight: false,
    points: [
      "Versatile deployment for villas, residential communities, farms, commercial, and industrial premises",
      "Safe and non-lethal protection with controlled electric pulses",
      "Reduced operating costs by minimizing electricity consumption and maintenance expenses",
      "High return on investment through long-term energy savings and applicable subsidy benefits",
      "Uninterrupted security operation powered by solar energy",
      "Remote monitoring and mobile alerts for real-time intrusion notifications",
    ],
  },
  {
    label: "SOLAR PRODUCT",
    title: "Solar Water Heater",
    description:
      "Harness the power of sunlight for a continuous and cost-effective hot water supply with our solar water heating solutions. Designed for homes, hotels, hospitals, hostels, and commercial spaces with low maintenance and high efficiency.",
    image: "/26.jpg",
    imageRight: false,
    points: [
      "Zero running cost with continuous hot water after initial installation",
      "High heating efficiency using advanced ETC technology for faster heat absorption",
      "Lower electricity bills by reducing dependence on conventional geysers and boilers",
      "Quick return on investment with a typical payback period of 2-4 years",
      "Eco-friendly solution that lowers carbon emissions and supports sustainable energy use",
    ],
  },
  {
    label: "SOLAR PRODUCT",
    title: "Solar CCTV Systems",
    description:
      "Our solar-powered CCTV solutions deliver reliable 24/7 security monitoring in any location, even where grid access is unavailable. Designed for complete energy independence, they ensure continuous surveillance with minimal infrastructure requirements.",
    image: "/27.jpg",
    imageRight: true,
    points: [
      "Energy-independent operation powered by solar energy with integrated battery backup",
      "24/7 continuous monitoring during day, night, and cloudy conditions",
      "Remote connectivity with 4G or Wi-Fi access for live viewing and alert management",
      "Quick deployment with no external wiring or trenching",
      "Reliable security for construction sites, farms, warehouses, toll plazas, and critical infrastructure",
    ],
  },
  {
    label: "SOLAR PRODUCT",
    title: "Solar Lift Systems",
    description:
      "Our Solar Lift solutions enable efficient elevator operation using solar energy, helping reduce electricity consumption and operating expenses. Integrated with advanced LiFePO4 technology, they ensure smooth, safe, and reliable lift performance.",
    image: "/28.jpg",
    imageRight: true,
    points: [
      "Reduced electricity bills by lowering energy costs from daily lift operations",
      "Independent installation flexibility with standalone deployment capability",
      "Dedicated Lift-inverter technology for smooth, stable, and safe lift functioning",
      "Reduced dependence on grid electricity for elevator operations",
      "Improved energy efficiency through optimized solar power utilization",
      "Reliable performance designed for consistent and uninterrupted lift operation",
    ],
  },
  {
    label: "SOLAR PRODUCT",
    title: "Solar STP (Sewage Treatment Plant)",
    description:
      "Our Solar STP solutions combine advanced sewage treatment technology with solar energy to deliver sustainable and cost-efficient wastewater management. Designed to reduce electricity dependency, they significantly lower operating costs compared to conventional STP systems.",
    image: "/29.jpg",
    imageRight: true,
    points: [
      "Up to 60% lower electricity consumption compared to traditional grid-based STP systems",
      "Reduced operational costs with efficient solar-powered operation and lower OPEX",
      "Faster return on investment through long-term electricity and maintenance savings",
      "Smarter than conventional STPs by using clean solar energy instead of grid-only power",
      "Sustainable wastewater treatment with reduced carbon footprint",
    ],
  },
] as const;

const hiddenServiceTitles = new Set([
  "Solar Hybrid Generator",
  "Solar Fence Energy System",
  "Solar Water Heater",
  "Solar CCTV Systems",
  "Grid Based and Solar Based EV Charging Infrastructure",
  "Microgrid Solutions",
  "Round the Clock Renewable Energy (RTC) (Solar + wind + BESS/Lithium-ion Battery)",
]);

const visibleServices = services.filter((service) => !hiddenServiceTitles.has(service.title));

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-[#2cb673]"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M8 12.2L10.6 14.8L16 9.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition duration-500 ease-out group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 540px"
      />
    </div>
  );
}

function ServiceContent({
  service,
}: {
  service: (typeof services)[number];
}) {
  return (
    <div className="flex h-full flex-col justify-start rounded-2xl p-3 sm:p-5">
      <p className="text-[14px] font-extrabold tracking-[0.14em] text-[#2cb673]">{service.label}</p>
      <h3 className="page-card-title mt-2 font-display font-extrabold text-[#0A2540]">
        {service.title}
      </h3>
      <p className="page-desc mt-3">{service.description}</p>
      <ul className="mt-5 space-y-1.5">
        {service.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-3 rounded-lg px-1 py-0.5 text-[15px] font-medium leading-relaxed text-[#334155] sm:text-base"
          >
            <CheckIcon />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SolarServicesSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1100px] text-center">
        <p className="text-[14px] font-extrabold tracking-[0.16em] text-[#2cb673]">SERVICES</p>
        <h2 className="page-title mt-3 font-display font-extrabold leading-tight text-[#0A2540]">
          Solar and Renewable Energy Services
        </h2>
        <p className="page-desc mx-auto mt-4 max-w-2xl">
          Explore our complete product range for homes, businesses, institutions, industries, and
          community energy requirements.
        </p>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1200px] flex-col gap-8 sm:gap-10">
        {visibleServices.map((service) => (
          <article
            key={service.title}
            className="rounded-[28px] bg-[#eef3f8] p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_18px_42px_rgba(15,23,42,0.12)] sm:p-8 lg:p-10"
          >
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
              <ServiceImage src={service.image} alt={service.title} />
              <ServiceContent service={service} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
