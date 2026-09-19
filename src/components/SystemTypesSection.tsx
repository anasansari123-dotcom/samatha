import Image from "next/image";
import Link from "next/link";

export type SolutionKey = "on-grid" | "off-grid" | "hybrid" | "ess" | "rtc";

const systemCards = [
  {
    id: "on-grid" as const,
    href: "/solutions/on-grid#on-grid",
    title: "On-Grid System",
    image: "/ongrid21.jpg",
    description:
      "The standard choice for the fastest return on investment (ROI) with hassle-free maintenance. This system is connected to the utility grid and helps reduce electricity bills through net metering.",
  },
  {
    id: "off-grid" as const,
    href: "/solutions/off-grid#off-grid",
    title: "Off-Grid System",
    image: "/offgrid.jpg",
    description:
      "Recommended for locations where grid power is unavailable or unreliable. This system uses battery backup and works independently without utility grid support.",
  },
  {
    id: "hybrid" as const,
    href: "/solutions/hybrid#hybrid",
    title: "Hybrid System",
    image: "/hybrid21.jpg",
    description:
      "Best for areas with frequent power cuts. It combines battery backup and grid connection while also allowing excess power to be sent back through net metering.",
  },
] as const;

const comparisonRows = [
  {
    property: "Connection to Grid",
    onGrid: "Yes",
    offGrid: "No",
    hybrid: "Yes",
  },
  {
    property: "Battery Backup",
    onGrid: "No",
    offGrid: "Yes",
    hybrid: "Yes",
  },
  {
    property: "Night Time",
    onGrid: "Uses Grid",
    offGrid: "Uses Battery",
    hybrid: "Uses both Grid and Battery",
  },
  {
    property: "In Case of Low Energy Generation",
    onGrid: "Supplements through electric grid",
    offGrid: "Unable to charge battery",
    hybrid: "Supplements through electric grid",
  },
  {
    property: "In Case of Surplus Energy",
    onGrid: "Sent back to grid",
    offGrid: "Wasted",
    hybrid: "Sent back to the grid",
  },
  {
    property: "Cost",
    onGrid: "Low",
    offGrid: "High",
    hybrid: "High",
  },
  {
    property: "Works During Power Outages",
    onGrid: "No",
    offGrid: "Yes",
    hybrid: "Yes",
  },
  {
    property: "Unit Adjustment in Electricity Bill",
    onGrid: "Yes",
    offGrid: "No",
    hybrid: "Yes",
  },
];

export default function SystemTypesSection({
  activeSolution,
}: {
  activeSolution?: SolutionKey;
}) {
  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-green">SYSTEM TYPES</p>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,3.2vw,2.25rem)] font-bold text-brand-navy">
            Choose the Right Solar System
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-slate-500">
            The first three system types cover standard grid connected, independent, and backup
            ready solar requirements.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1200px] gap-6 md:grid-cols-2 xl:grid-cols-3">
          {systemCards.map((card) => {
            const active = activeSolution === card.id;
            return (
              <article
                key={card.id}
                id={card.id}
                className={`scroll-mt-28 rounded-2xl border bg-white p-6 text-center shadow-[0_10px_28px_rgba(15,23,42,0.05)] transition ${
                  active
                    ? "border-brand-green/50 ring-1 ring-brand-green/20"
                    : "border-slate-200"
                }`}
              >
                <div className="relative mx-auto h-[210px] w-full max-w-[240px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain"
                    sizes="240px"
                  />
                </div>
                <h3 className="mt-2 text-xl font-bold text-brand-navy">{card.title}</h3>
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

      <section className="bg-[#eef3f8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-green">COMPARISON</p>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,3.2vw,2.25rem)] font-bold text-brand-navy">
            System Comparison Table
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-slate-500">
            Compare On Grid, Off Grid, and Hybrid solar systems across grid connection, backup,
            outage support, surplus energy handling, and cost.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[1200px] overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.05)]">
          <table className="min-w-[760px] w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-brand-navy text-white">
                <th className="px-5 py-4 font-semibold">Property</th>
                <th className="px-5 py-4 font-semibold">On-Grid</th>
                <th className="px-5 py-4 font-semibold">Off-Grid</th>
                <th className="px-5 py-4 font-semibold">Hybrid</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr
                  key={row.property}
                  className={index % 2 === 0 ? "bg-white" : "bg-[#f4f8fc]"}
                >
                  <td className="px-5 py-4 font-semibold text-brand-navy">{row.property}</td>
                  <td className="px-5 py-4 text-slate-600">{row.onGrid}</td>
                  <td className="px-5 py-4 text-slate-600">{row.offGrid}</td>
                  <td className="px-5 py-4 text-slate-600">{row.hybrid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
