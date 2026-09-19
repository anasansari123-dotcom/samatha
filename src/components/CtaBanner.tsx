"use client";

import { useQuoteModal } from "@/components/QuoteModal";

type CtaBannerProps = {
  title?: string;
  description?: string;
};

export default function CtaBanner({
  title = "Ready to Switch to Solar Energy?",
  description = "Get expert guidance and a customized solar solution for your property.",
}: CtaBannerProps) {
  const { openQuote } = useQuoteModal();

  return (
    <section className="w-full bg-gradient-to-r from-[#127c78] via-[#1aa882] to-[#35B56F]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center sm:px-6 sm:py-12 lg:px-8">
        <div className="max-w-3xl">
          <h3 className="max-w-[640px] font-display text-[clamp(1.45rem,2.8vw,2.05rem)] font-extrabold leading-tight text-white">
            {title}
          </h3>
          <p className="mt-3 max-w-[680px] text-sm leading-relaxed text-white/90 sm:text-[0.95rem]">
            {description}
          </p>
        </div>
        <button
          type="button"
          onClick={() => openQuote()}
          className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#0A4D8D] shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition hover:bg-slate-50"
        >
          Request a Free Quote
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
