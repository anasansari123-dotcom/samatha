"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#eef3f8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.9fr_1.3fr] lg:gap-14">
        <div className="lg:pt-2">
          <p className="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">FAQ</p>
          <h2 className="mt-3 max-w-md font-display text-[clamp(1.55rem,3vw,2.2rem)] font-bold leading-tight text-brand-navy">
            Common Questions About Solar Installation
          </h2>
          <p className="mt-4 max-w-md text-[16px] leading-relaxed text-gray-500">
            Find Quick answers about rooftop solar, system types, savings, maintenance, and what to
            expect when you work with Samatha.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-slate-200 bg-white shadow-[0_4px_16px_rgba(15,23,42,0.03)]"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span className="text-[1.08rem] font-bold text-brand-navy">
                    {faq.question}
                  </span>
                  <Chevron open={open} />
                </button>
                {open ? (
                  <div className="border-t border-slate-100 px-5 pb-4 pt-3">
                    <p className="text-[16px] leading-relaxed text-gray-500">{faq.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
