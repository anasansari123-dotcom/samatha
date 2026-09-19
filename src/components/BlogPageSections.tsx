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
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 5.5C5 4.7 5.7 4 6.5 4H12V18H6.5C5.7 18 5 17.3 5 16.5V5.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M19 5.5C19 4.7 18.3 4 17.5 4H12V18H17.5C18.3 18 19 17.3 19 16.5V5.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 3.5V7M16 3.5V7M3.5 10H20.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
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
