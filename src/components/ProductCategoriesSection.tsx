"use client";

import { useEffect } from "react";
import { useQuoteModal } from "@/components/QuoteModal";

const categories = [
  {
    id: "home",
    anchor: "renemu-home",
    tagline: "INDEPENDENT HOMES & SMART LIVING",
    title: "reneμ Home",
    description:
      "Designed for independent homes seeking smarter energy management, reneμ Home combines clean energy solutions with intelligent monitoring for greater savings, convenience, and energy independence.",
    icon: "home",
  },
  {
    id: "elite",
    anchor: "renemu-elite",
    tagline: "PREMIUM VILLAS & LUXURY SPACES",
    title: "reneμ Elite",
    description:
      "Crafted for premium villas and luxury spaces, reneμ Elite delivers advanced renewable energy solutions that seamlessly integrate sustainability, aesthetics, and high-performance energy management.",
    icon: "elite",
  },
  {
    id: "plus",
    anchor: "renemu-plus",
    tagline: "COMMERCIAL & INDUSTRIAL PROJECTS",
    title: "reneμ Plus",
    description:
      "Engineered for commercial, industrial and utility projects, reneμ Plus delivers customized renewable energy solutions tailored to resolve complex requirements, maximizing efficiency, reliability, and long-term business value with accurate ROI.",
    icon: "plus",
  },
] as const;

function CategoryIcon({ type }: { type: (typeof categories)[number]["icon"] }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  if (type === "elite") {
    return (
      <svg {...common}>
        <path
          d="M5 16L7.2 8.5L10.5 12.5L12 6L13.5 12.5L16.8 8.5L19 16H5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M6 18.5H18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "plus") {
    return (
      <svg {...common}>
        <path
          d="M4 19H20M6.5 19V12H10.5V19M13 19V10H17V19M17 10L20 12.5V19"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M8.5 9V7M15 10V6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        d="M4.5 11L12 4.5L19.5 11V19.5H14.5V14H9.5V19.5H4.5V11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function scrollToAnchor(anchor: string) {
  const el = document.getElementById(anchor);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function ProductCategoriesSection({
  activeProduct,
}: {
  activeProduct?: "home" | "elite" | "plus";
}) {
  const { openQuote } = useQuoteModal();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const fromHash = categories.find((item) => item.anchor === hash);
    const fromProduct = categories.find((item) => item.id === activeProduct);
    const target = fromHash ?? fromProduct;
    if (!target) return;

    const timer = window.setTimeout(() => scrollToAnchor(target.anchor), 80);
    return () => window.clearTimeout(timer);
  }, [activeProduct]);

  useEffect(() => {
    function onHashChange() {
      const hash = window.location.hash.replace("#", "");
      if (hash) scrollToAnchor(hash);
    }

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[920px] text-center">
        <h2 className="font-display text-[clamp(1.6rem,3.2vw,2.25rem)] font-extrabold leading-tight text-[#0A2540]">
          Our Products Categories - reneμX
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-[#64748B]">
          Choose the right service category for your property type, energy usage, monitoring needs,
          and long-term maintenance expectations.
        </p>
      </div>

      <div className="mx-auto mt-10 flex max-w-[980px] flex-col gap-5">
        {categories.map((category) => {
          const isActive = activeProduct === category.id;
          return (
            <article
              key={category.id}
              id={category.anchor}
              className={`scroll-mt-28 rounded-[20px] border bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.05)] transition-all duration-300 ease-out sm:p-8 ${
                isActive
                  ? "border-[#2cb673]/45 ring-1 ring-[#2cb673]/15 shadow-[0_16px_36px_rgba(44,182,115,0.12)]"
                  : "border-[#E6EDF4] hover:-translate-y-0.5 hover:border-[#2cb673]/35 hover:shadow-[0_14px_32px_rgba(15,23,42,0.08)]"
              }`}
            >
              <span className="text-[#2cb673]">
                <CategoryIcon type={category.icon} />
              </span>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2cb673]">
                {category.tagline}
              </p>
              <h3 className="mt-2 font-display text-[1.55rem] font-extrabold text-[#0A2540] sm:text-[1.7rem]">
                {category.title}
              </h3>
              <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#5B6B7C]">
                {category.description}
              </p>
              <button
                type="button"
                onClick={() => openQuote(category.title)}
                className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-[#2cb673] px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#24a85f] hover:shadow-[0_8px_18px_rgba(45,189,110,0.28)]"
              >
                Get Service Quote
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
