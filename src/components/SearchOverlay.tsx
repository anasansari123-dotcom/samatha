"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type SearchItem = {
  type: "Page" | "Product" | "Solution" | "Service" | "Blog" | "FAQ" | "Home";
  title: string;
  text: string;
  href: string;
};

const searchIndex: SearchItem[] = [
  { type: "Page", title: "Home", text: "Home", href: "/" },
  { type: "Page", title: "Products", text: "Products reneμ Home Elite Plus", href: "/#products" },
  { type: "Page", title: "Solutions", text: "On-grid off-grid hybrid ESS RTC solar solutions", href: "/solutions/on-grid" },
  { type: "Page", title: "Services", text: "Solar services energy assessment AMC", href: "/services" },
  { type: "Page", title: "About Us", text: "About Samatha Green Energy Solutions", href: "/about" },
  { type: "Page", title: "Blog", text: "Renewable energy insights articles", href: "/blog" },
  { type: "Page", title: "Contact Us", text: "Contact office enquiry quote", href: "/contact" },

  { type: "Product", title: "reneμ Home", text: "Independent homes and smart living solar", href: "/products/samatha-home#renemu-home" },
  { type: "Product", title: "reneμ Elite", text: "Premium villas and luxury solar solutions", href: "/products/samatha-elite#renemu-elite" },
  { type: "Product", title: "reneμ Plus", text: "Commercial and industrial solar projects", href: "/products/samatha-plus#renemu-plus" },
  {
    type: "Product",
    title: "Solar Panels",
    text: "High-efficiency mono and polycrystalline panels for rooftop and ground-mounted systems.",
    href: "/services",
  },
  {
    type: "Product",
    title: "Solar Inverters",
    text: "Reliable on-grid, off-grid, and hybrid inverters for stable energy conversion.",
    href: "/services",
  },
  {
    type: "Product",
    title: "Battery Storage",
    text: "Energy storage products for backup power and better solar energy management.",
    href: "/solutions/ess#ess",
  },
  {
    type: "Product",
    title: "Mounting Structures",
    text: "Durable rooftop and industrial mounting structures designed for long service life.",
    href: "/services",
  },

  { type: "Solution", title: "On grid", text: "On-grid solar system", href: "/solutions/on-grid#on-grid" },
  { type: "Solution", title: "Off grid", text: "Off-grid solar system", href: "/solutions/off-grid#off-grid" },
  { type: "Solution", title: "Hybrid", text: "Hybrid solar system", href: "/solutions/hybrid#hybrid" },
  { type: "Solution", title: "ESS", text: "Energy Storage System battery backup", href: "/solutions/ess#ess" },
  {
    type: "Solution",
    title: "Round the Clock Renewable Energy (RTC) (Solar + wind + BESS/Lithium-ion Battery)",
    text: "Round the Clock Renewable Energy (RTC) (Solar + wind + BESS/Lithium-ion Battery)",
    href: "/solutions/rtc#rtc",
  },
  {
    type: "Solution",
    title: "On-Grid Solar System",
    text: "Grid-connected systems for efficient daytime power and net metering benefits.",
    href: "/solutions/on-grid#on-grid",
  },
  {
    type: "Solution",
    title: "Off-Grid Solar System",
    text: "Independent solar power with battery backup for remote or unstable grid areas.",
    href: "/solutions/off-grid#off-grid",
  },
  {
    type: "Solution",
    title: "Hybrid Solar System",
    text: "Flexible systems combining grid connection, solar generation, and storage.",
    href: "/solutions/hybrid#hybrid",
  },

  {
    type: "Service",
    title: "Residential Solar Panel Solutions",
    text: "Rooftop solar for homes with net metering, backup, and energy independence.",
    href: "/services",
  },
  {
    type: "Service",
    title: "Commercial Solar Panel Solutions",
    text: "Solar systems that reduce operating costs for commercial buildings.",
    href: "/services",
  },
  {
    type: "Service",
    title: "Industrial Solar Panel Solutions",
    text: "High-capacity solar for manufacturing and industrial loads.",
    href: "/services",
  },
  {
    type: "Service",
    title: "Battery Energy Storage Systems (BESS)",
    text: "Intelligent energy storage for backup, peak load, and solar optimization.",
    href: "/services",
  },
  {
    type: "Service",
    title: "Solar Carports",
    text: "Parking shelters that generate solar power and support EV charging.",
    href: "/services",
  },
  {
    type: "Service",
    title: "Solar Water Pump",
    text: "Reliable solar-powered pumping for agriculture and rural water needs.",
    href: "/services",
  },
  {
    type: "Service",
    title: "Solar Street Lights",
    text: "Energy-saving outdoor lighting with solar modules and automatic controls.",
    href: "/services",
  },
  {
    type: "Service",
    title: "Energy Assessment",
    text: "Smarter energy planning before system selection.",
    href: "/services",
  },

  {
    type: "Blog",
    title: "How to Choose the Right Renewable Energy System",
    text: "A practical look at matching solar, hybrid, BESS, and microgrid options to your site.",
    href: "/blog",
  },
  {
    type: "Blog",
    title: "Why BESS Matters for Reliable Clean Power",
    text: "Battery Energy Storage Systems improve backup, peak load management, and reliability.",
    href: "/blog",
  },
  {
    type: "Blog",
    title: "Understanding On-Grid, Off-Grid, and Hybrid Systems",
    text: "Compare the three common solar system types for homes, businesses, and industry.",
    href: "/blog",
  },

  {
    type: "FAQ",
    title: "What renewable energy solutions do you offer?",
    text: "On-grid, off-grid, hybrid solar, BESS, rooftop systems, and RTC solutions.",
    href: "/#faq",
  },
  {
    type: "FAQ",
    title: "Will solar work during power cuts?",
    text: "Hybrid or off-grid setups with battery storage keep critical loads running.",
    href: "/#faq",
  },
  {
    type: "FAQ",
    title: "How much can I save on my electricity bill?",
    text: "Savings depend on consumption, tariff, roof orientation, and system size.",
    href: "/#faq",
  },
  {
    type: "FAQ",
    title: "Do you provide AMC and after-sales support?",
    text: "Yes. After-sales service, technical support, and Annual Maintenance Contracts.",
    href: "/#faq",
  },

  {
    type: "Home",
    title: "One Partner. All Energy Solution.",
    text: "Powering a smarter and greener tomorrow. Solar solutions and energy storage.",
    href: "/",
  },
  {
    type: "Home",
    title: "Intelligent Energy. Seamless Backup.",
    text: "On-grid, off-grid, and hybrid solar solutions with intelligent battery backup.",
    href: "/",
  },
];

export default function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return [];
    return searchIndex
      .filter((item) => `${item.title} ${item.text} ${item.type}`.toLowerCase().includes(term))
      .slice(0, 8);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => inputRef.current?.focus(), 40);

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
      window.clearTimeout(timer);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  function goTo(href: string) {
    onClose();
    router.push(href);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] overflow-hidden bg-black/72 p-4 text-white backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Site search"
    >
      <div className="mx-auto flex h-full max-w-[1280px] flex-col px-2 py-8 sm:px-6">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#0A2540] shadow-2xl ring-1 ring-white/30 transition hover:bg-brand-green hover:text-white"
            aria-label="Close search"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="mx-auto mt-10 w-full max-w-3xl">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (results[0]) goTo(results[0].href);
            }}
            className="flex items-center gap-3 rounded-full bg-white px-5 py-4 text-[#0A2540] shadow-2xl"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-brand-blue">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
              <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products, services, solutions, FAQs..."
              className="min-w-0 flex-1 bg-transparent text-lg font-semibold outline-none placeholder:text-slate-400"
              aria-label="Search website content"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="grid h-8 w-8 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Clear search"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            ) : null}
          </form>

          {query.trim() ? (
            <div className="mt-6 grid max-h-[calc(100vh-220px)] gap-3 overflow-y-auto pr-1">
              {results.length ? (
                results.map((item) => (
                  <Link
                    key={`${item.type}-${item.title}-${item.href}`}
                    href={item.href}
                    onClick={onClose}
                    className="rounded-2xl bg-white p-5 text-left text-[#0A2540] shadow-2xl ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:ring-brand-green/35"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-green">
                      {item.type}
                    </span>
                    <span className="mt-2 block text-xl font-extrabold leading-snug">{item.title}</span>
                    <span className="mt-2 line-clamp-2 block text-sm leading-6 text-slate-600">
                      {item.text}
                    </span>
                  </Link>
                ))
              ) : (
                <p className="rounded-2xl bg-white p-5 text-slate-600 shadow-2xl">
                  No matching website content found.
                </p>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
