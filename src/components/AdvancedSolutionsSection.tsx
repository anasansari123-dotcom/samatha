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
          <p className="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">ADVANCED SOLUTIONS</p>
          <h2 className="page-title mt-3 font-display font-bold leading-tight text-brand-navy">
            Energy Storage and Round the Clock Renewable Energy (RTC) (Solar + wind +
            BESS/Lithium-ion Battery) Solutions
          </h2>
          <p className="page-desc mx-auto mt-4 max-w-3xl">
            For customers who need stronger backup, smarter energy control, and continuous
            renewable power, we design advanced storage and round-the-clock systems.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1180px] items-stretch gap-5 lg:grid-cols-2">
          {advancedCards.map((card) => {
            const active = activeSolution === card.id;
            return (
              <article
                key={card.id}
                id={card.id}
                className={`flex h-full scroll-mt-28 flex-col rounded-[20px] border bg-[#F4F8FB] p-4 text-left transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)] sm:p-5 ${
                  active
                    ? "border-brand-green/45 ring-1 ring-brand-green/20"
                    : "border-[#E6EDF4] hover:border-brand-green/35"
                }`}
              >
                <Link href={card.href} className="group flex h-full flex-col no-underline">
                  <div className="overflow-hidden rounded-[16px] bg-white px-4 py-8">
                    <div className="relative mx-auto h-[170px] w-full max-w-[200px]">
                      <Image
                        src={card.image}
                        alt=""
                        fill
                        className="object-contain transition duration-500 ease-out group-hover:scale-105"
                        sizes="200px"
                      />
                    </div>
                  </div>
                  <h3 className="page-card-title mt-5 px-2 font-extrabold text-[#0B2545] transition-colors duration-300 group-hover:text-[#2cb673]">
                    {card.title}
                  </h3>
                  <p className="page-desc mt-3 px-2">
                    {card.description}
                  </p>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
