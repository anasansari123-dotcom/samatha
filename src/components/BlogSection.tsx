import Link from "next/link";

const posts = [
  {
    category: "ENERGY PLANNING",
    title: "How to Choose the Right Renewable Energy System",
    excerpt:
      "A practical guide to matching on-grid, hybrid, or storage-ready systems with your usage pattern and roof conditions.",
    date: "May 2024",
    icon: "plan",
  },
  {
    category: "BATTERY STORAGE",
    title: "Why Battery Storage Matters for Reliable Power",
    excerpt:
      "Learn how BESS and hybrid setups keep critical loads running during outages while improving energy independence.",
    date: "May 2024",
    icon: "battery",
  },
  {
    category: "SOLAR SOLUTIONS",
    title: "Rooftop Solar Tips Before You Install",
    excerpt:
      "Key checks on shading, structure strength, sanction load, and maintenance that help your solar project perform longer.",
    date: "April 2024",
    icon: "solar",
  },
] as const;

function BlogIcon({ type }: { type: (typeof posts)[number]["icon"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  if (type === "battery") {
    return (
      <svg {...common}>
        <rect x="3" y="7" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M19 10H21V14H19" stroke="currentColor" strokeWidth="1.7" />
        <path d="M7 10V14M11 10V14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "solar") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M12 2.5V5M12 19V21.5M2.5 12H5M19 12H21.5M5.6 5.6L7.4 7.4M16.6 16.6L18.4 18.4M18.4 5.6L16.6 7.4M7.4 16.6L5.6 18.4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        d="M4 19V5H14L20 11V19H4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M14 5V11H20" stroke="currentColor" strokeWidth="1.7" />
      <path d="M7 15H13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export default function BlogSection() {
  return (
    <section id="blog" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.16em] text-brand-green">BLOG</p>
            <h2 className="mt-3 font-display text-[clamp(1.55rem,3.2vw,2.2rem)] font-bold leading-tight text-brand-navy">
              Renewable Energy Insights
            </h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-500">
              Practical articles on solar planning, storage, savings, and cleaner energy for homes
              and businesses.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex h-11 w-fit items-center gap-2 rounded-full bg-brand-navy px-6 text-sm font-semibold text-white transition hover:bg-[#0f3a63]"
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

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-[0_16px_34px_rgba(15,23,42,0.1)] animate-fade-up"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green transition group-hover:bg-brand-green group-hover:text-white">
                <BlogIcon type={post.icon} />
              </span>
              <p className="mt-5 text-xs font-bold tracking-[0.14em] text-brand-green">
                {post.category}
              </p>
              <h3 className="mt-2 text-lg font-extrabold leading-snug text-brand-navy">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{post.excerpt}</p>
              <p className="mt-5 text-sm font-semibold text-slate-400">{post.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
