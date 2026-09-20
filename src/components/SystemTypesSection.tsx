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
          <p className="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">SYSTEM TYPES</p>
          <h2 className="page-title mt-3 font-display font-bold text-brand-navy">
            Choose the Right Solar System
          </h2>
          <p className="page-desc mx-auto mt-4 max-w-2xl">
            The first three system types cover standard grid connected, independent, and backup
            ready solar requirements.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1180px] items-stretch gap-5 lg:grid-cols-3">
          {systemCards.map((card) => {
            const active = activeSolution === card.id;
            return (
              <article
                key={card.id}
                id={card.id}
                className={`flex h-full scroll-mt-28 flex-col rounded-[20px] border bg-[#F4F8FB] px-7 py-8 text-left ${
                  active ? "border-brand-green/45 ring-1 ring-brand-green/20" : "border-[#E6EDF4]"
                }`}
              >
                <Link href={card.href} className="flex h-full flex-col no-underline">
                  <div className="relative mx-auto h-[190px] w-full max-w-[200px]">
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      className="object-contain mix-blend-multiply"
                      sizes="200px"
                    />
                  </div>
                  <h3 className="page-card-title mt-5 font-extrabold text-[#0B2545]">
                    {card.title}
                  </h3>
                  <p className="page-desc mt-3">
                    {card.description}
                  </p>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-[14px] font-extrabold tracking-[0.18em] text-brand-green">
            COMPARISON
          </p>
          <h2 className="page-title mt-3 font-display font-extrabold text-brand-navy">
            System Comparison Table
          </h2>
          <p className="page-desc mx-auto mt-4 max-w-[640px]">
            Compare On-Grid, Off-Grid, and Hybrid solar systems across grid connection, backup,
            outage support, surplus energy handling, and cost.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[1210px] overflow-x-auto rounded-[22px] border border-[#e6edf5] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
          <table className="min-w-[980px] w-full border-collapse text-left">
            <colgroup>
              <col className="w-[30%]" />
              <col className="w-[23.3%]" />
              <col className="w-[23.3%]" />
              <col className="w-[23.4%]" />
            </colgroup>
            <thead>
              <tr className="bg-brand-blue text-white">
                <th className="px-6 py-[18px] text-base font-bold">Property</th>
                <th className="border-l border-white/20 px-6 py-[18px] text-base font-bold">
                  On-Grid
                </th>
                <th className="border-l border-white/20 px-6 py-[18px] text-base font-bold">
                  Off-Grid
                </th>
                <th className="border-l border-white/20 px-6 py-[18px] text-base font-bold">
                  Hybrid
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr
                  key={row.property}
                  className={index % 2 === 0 ? "bg-white" : "bg-[#f4f8fc]"}
                >
                  <td className="px-6 py-5 text-base font-bold text-brand-navy">
                    {row.property}
                  </td>
                  <td className="px-6 py-5 text-[15px] font-semibold text-slate-500">{row.onGrid}</td>
                  <td className="px-6 py-5 text-[15px] font-semibold text-slate-500">{row.offGrid}</td>
                  <td className="px-6 py-5 text-[15px] font-semibold text-slate-500">{row.hybrid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
