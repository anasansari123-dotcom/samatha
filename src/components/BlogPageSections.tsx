import Link from "next/link";
import PageBanner from "@/components/PageBanner";

const articles = [
  {
    category: "ENERGY PLANNING",
    title: "How to Choose the Right Renewable Energy System",
    excerpt:
      "A practical look at matching solar, hybrid, BESS, and microgrid options to your site, energy usage, and backup requirements.",
    date: "May 2026",
  },
  {
    category: "BATTERY STORAGE",
    title: "Why BESS Matters for Reliable Clean Power",
    excerpt:
      "Battery Energy Storage Systems improve backup, peak load management, renewable energy utilization, and long-term energy reliability.",
    date: "May 2026",
  },
  {
    category: "SOLAR SOLUTIONS",
    title: "Understanding On-Grid, Off-Grid, and Hybrid Systems",
    excerpt:
      "Compare the three common solar system types and learn which one fits homes, businesses, industries, and remote sites.",
    date: "May 2026",
  },
] as const;

function BookIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 7v14" />
      <path d="M16 12h2" />
      <path d="M16 8h2" />
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
      <path d="M6 12h2" />
      <path d="M6 8h2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

export function BlogHero() {
  return (
    <PageBanner
      eyebrow="Solar Energy Solutions"
      title="Blog"
      description="Insights and practical guidance for choosing, installing, and maintaining renewable energy systems."
      image="/slide-2.png"
    />
  );
}

export default function BlogArticlesSection() {
  return (
    <section className="bg-[#f4f8fc] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[920px] text-center">
        <p className="text-xs font-bold tracking-[0.16em] text-[#2cb673]">LATEST ARTICLES</p>
        <h2 className="mt-3 font-display text-[clamp(1.65rem,3.4vw,2.35rem)] font-extrabold leading-tight text-[#0A2540]">
          Renewable Energy Insights
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#64748B]">
          Explore practical guidance on solar, battery storage, hybrid energy systems, and smart
          renewable energy planning.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1200px] items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.title}
            className="flex h-full flex-col rounded-[18px] border border-[#E6EDF4] bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)] sm:p-7"
          >
            <span className="text-[#2cb673]">
              <BookIcon />
            </span>
            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2cb673]">
              {article.category}
            </p>
            <h3 className="mt-3 text-[1.28rem] font-extrabold leading-[1.3] text-[#0A2540] sm:text-[1.38rem]">
              {article.title}
            </h3>
            <p className="mt-3 flex-1 text-[15px] leading-7 text-[#64748B]">{article.excerpt}</p>
            <div className="mt-6 flex items-center gap-2 text-[13px] font-medium text-[#6B7A8D]">
              <CalendarIcon />
              <span>{article.date}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-[1200px] justify-center">
        <Link
          href="/contact"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0A4D8D] px-6 text-sm font-semibold text-white transition hover:bg-[#2cb673]"
        >
          Talk to an Expert
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
