import Image from "next/image";
import Link from "next/link";
import type { SolutionKey } from "@/components/SystemTypesSection";

const advancedCards = [
  {
    id: "ess" as const,
    href: "/solutions/ess#ess",
    title: "ESS (Energy Storage System)",
    image: "/ess.jpg",
    description:
      "A smart battery hub that manages the timing and flow of electricity to save money and provide backup protection during blackouts.",
  },
  {
    id: "rtc" as const,
    href: "/solutions/rtc#rtc",
    title: "Round the Clock Renewable Energy (RTC) (Solar + wind + BESS/Lithium-ion Battery)",
    image: "/rtc.jpg",
    description:
      "Our Round the Clock Renewable Energy (RTC) (Solar + wind + BESS/Lithium-ion Battery) systems deliver uninterrupted power through the intelligent integration of solar energy, battery storage, wind, and smart power management. Designed for continuous energy supply, they reduce dependency on conventional grid electricity and fuel sources such as diesel generators.",
  },
];

export default function AdvancedSolutionsSection({
  activeSolution,
}: {
  activeSolution?: SolutionKey;
}) {
  return (
    <>
      <section className="bg-[#eef3f8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1000px] text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-green">ADVANCED SOLUTIONS</p>
          <h2 className="mt-3 font-display text-[clamp(1.4rem,3vw,2.05rem)] font-bold leading-tight text-brand-navy">
            Energy Storage and Round the Clock Renewable Energy (RTC) (Solar + wind +
            BESS/Lithium-ion Battery) Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-slate-500">
            For customers who need stronger backup, smarter energy control, and continuous
            renewable power, we design advanced storage and round-the-clock systems.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1100px] gap-6 lg:grid-cols-2">
          {advancedCards.map((card) => {
            const active = activeSolution === card.id;
            return (
              <article
                key={card.id}
                id={card.id}
                className={`scroll-mt-28 rounded-2xl border bg-white p-6 text-center shadow-[0_10px_28px_rgba(15,23,42,0.05)] sm:p-8 ${
                  active
                    ? "border-brand-green/50 ring-1 ring-brand-green/20"
                    : "border-slate-200"
                }`}
              >
                <div className="relative mx-auto h-[230px] w-full max-w-[260px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain"
                    sizes="260px"
                  />
                </div>
                <h3 className="mt-2 text-xl font-bold leading-snug text-brand-navy">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{card.description}</p>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex text-sm font-semibold text-brand-green hover:text-brand-green-dark"
                >
                  Learn more →
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
