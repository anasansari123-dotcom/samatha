import Link from "next/link";

const posts = [
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
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 7v14" />
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    </svg>
  );
}

export default function BlogSection() {
  return (
    <section id="blog" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">BLOG</p>
            <h2 className="mt-3 font-display text-[clamp(1.55rem,3.2vw,2.2rem)] font-bold leading-tight text-brand-navy">
              Renewable Energy Insights
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-gray-500">
              Practical articles on solar planning, storage, savings, and cleaner energy for homes
              and businesses.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex h-11 w-fit items-center gap-2 rounded-full bg-[#0D529C] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2cb673]"
          >
            View Blog
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

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
            >
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[#2cb673]/12 text-[#2cb673]">
                <BookIcon />
              </span>
              <p className="text-[14px] font-extrabold uppercase tracking-[0.16em] text-[#2cb673]">
                {post.category}
              </p>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight text-[#0A2540]">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-7 text-gray-500">{post.excerpt}</p>
              <p className="mt-5 text-sm font-bold text-slate-500">{post.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
