"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What renewable energy solutions do you offer?",
    answer:
      "We provide on-grid, off-grid, and hybrid solar systems, battery energy storage (BESS), rooftop and ground-mounted installations, solar carports, and round-the-clock renewable solutions tailored to homes, businesses, and industrial sites.",
  },
  {
    question: "How long does a typical rooftop solar installation take?",
    answer:
      "Most residential rooftop projects are completed within 3â€“7 days after design approval and material readiness. Commercial timelines vary based on system size, structure readiness, and statutory clearances.",
  },
  {
    question: "Will solar work during power cuts?",
    answer:
      "On-grid systems shut down during grid outages for safety. If you need backup, we recommend hybrid or off-grid setups with battery storage so critical loads continue running during cuts.",
  },
  {
    question: "How much can I save on my electricity bill?",
    answer:
      "Savings depend on your monthly consumption, tariff, roof orientation, and system size. Many customers reduce bills significantly; use our solar calculator for a quick estimate, then we refine it with a site survey.",
  },
  {
    question: "Do you help with subsidies and net metering?",
    answer:
      "Yes. Our team guides you through eligible subsidy documentation, DISCOM processes, and net-metering applications wherever applicable for your location and project type.",
  },
  {
    question: "What maintenance does a solar system need?",
    answer:
      "Solar systems need periodic panel cleaning, visual checks, and performance monitoring. We also offer AMC support for inspections, issue resolution, and long-term system health.",
  },
  {
    question: "What is the lifespan of solar panels?",
    answer:
      "Quality solar panels typically perform for 25 years or more, with gradual efficiency decline over time. Inverters and batteries may need replacement earlier based on usage and product warranty.",
  },
  {
    question: "Can I expand my system later?",
    answer:
      "In many cases, yes. We design with future expansion in mind where roof space, inverter capacity, and electrical infrastructure allow. Share your growth plans during consultation for the best layout.",
  },
  {
    question: "Do you provide monitoring through a mobile app?",
    answer:
      "Yes. Compatible systems can be monitored via mobile app or web dashboard so you can track generation, consumption trends, and alerts in real time.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We primarily serve Bengaluru and surrounding regions across Karnataka, and evaluate project requests for nearby commercial and industrial sites based on scope and logistics.",
  },
] as const;

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
