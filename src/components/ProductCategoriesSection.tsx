"use client";

import { useEffect } from "react";
import { useQuoteModal } from "@/components/QuoteModal";

const categories = [
  {
    id: "home",
    anchor: "renemu-home",
    tagline: "INDEPENDENT HOMES & SMART LIVING",
    title: "rene\u03BC Home",
    description:
      "Designed for independent homes seeking smarter energy management, rene\u03BC Home combines clean energy solutions with intelligent monitoring for greater savings, convenience, and energy independence.",
    icon: "home",
  },
  {
    id: "elite",
    anchor: "renemu-elite",
    tagline: "PREMIUM VILLAS & LUXURY SPACES",
    title: "rene\u03BC Elite",
    description:
      "Crafted for premium villas and luxury spaces, rene\u03BC Elite delivers advanced renewable energy solutions that seamlessly integrate sustainability, aesthetics, and high-performance energy management.",
    icon: "elite",
  },
  {
    id: "plus",
    anchor: "renemu-plus",
    tagline: "COMMERCIAL & INDUSTRIAL PROJECTS",
    title: "rene\u03BC Plus",
    description:
      "Engineered for commercial, industrial and utility projects, rene\u03BC Plus delivers customized renewable energy solutions tailored to resolve complex requirements, maximizing efficiency, reliability, and long-term business value with accurate ROI.",
    icon: "plus",
  },
] as const;

function CategoryIcon({ type }: { type: (typeof categories)[number]["icon"] }) {
  const common = {
    width: 42,
    height: 42,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (type === "elite") {
    return (
      <svg {...common}>
        <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
        <path d="M5 21h14" />
      </svg>
    );
  }

  if (type === "plus") {
    return (
      <svg {...common}>
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M17 18h1" />
        <path d="M12 18h1" />
        <path d="M7 18h1" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
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
    <section className="bg-[#eef3f8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[920px] text-center">
        <p className="text-[14px] font-extrabold uppercase tracking-[0.16em] text-[#2cb673]">Products</p>
        <h2 className="page-title mt-3 font-sans font-extrabold tracking-[-0.02em] text-[#0A2540]">
          Our Products Categories - rene\u03BCX
        </h2>
        <p className="page-desc mx-auto mt-3 max-w-2xl">
          Choose the right service category for your property type, energy usage, monitoring needs,
          and long-term maintenance expectations.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1280px] gap-8">
        {categories.map((category) => {
          const isActive = activeProduct === category.id;
          return (
            <article
              key={category.id}
              id={category.anchor}
              className={`scroll-mt-28 rounded-2xl bg-white p-5 ring-1 transition-all duration-300 ease-out shadow-[0_16px_40px_rgba(0,0,0,0.16)] ${
                isActive
                  ? "ring-[#2cb673]/40"
                  : "ring-slate-200 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.2)]"
              }`}
            >
              <div className="p-2 sm:p-5">
                <span className="mb-5 inline-flex text-[#2cb673]">
                  <CategoryIcon type={category.icon} />
                </span>
                <p className="text-[14px] font-extrabold uppercase tracking-[0.18em] text-[#2cb673]">
                  {category.tagline}
                </p>
                <h3 className="page-card-title mt-2 font-sans font-extrabold tracking-[-0.02em] text-[#0A2540]">
                  {category.title}
                </h3>
                <p className="page-desc mt-4 max-w-4xl">
                  {category.description}
                </p>
                <button
                  type="button"
                  onClick={() => openQuote(category.title)}
                  className="mt-7 inline-flex h-11 items-center justify-center rounded-full bg-[#2cb673] px-6 text-sm font-bold text-white shadow-[0_8px_22px_rgba(44,182,115,0.5)] transition hover:bg-[#24a85f] hover:shadow-[0_10px_26px_rgba(44,182,115,0.6)]"
                >
                  Get Service Quote
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
