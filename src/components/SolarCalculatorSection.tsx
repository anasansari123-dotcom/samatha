"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const propertyOptions = [
  {
    id: "home",
    label: "rene\u03BC Home",
    description: "Rooftop solar for residences",
    href: "/products/samatha-home#renemu-home",
    icon: HomeIcon,
    sizeDivisor: 120,
    savingsRate: 0.78,
  },
  {
    id: "elite",
    label: "rene\u03BC Elite",
    description: "Premium systems with higher savings",
    href: "/products/samatha-elite#renemu-elite",
    icon: ShieldIcon,
    sizeDivisor: 108,
    savingsRate: 0.85,
  },
  {
    id: "plus",
    label: "rene\u03BC Plus",
    description: "Commercial & industrial setups",
    href: "/products/samatha-plus#renemu-plus",
    icon: WrenchIcon,
    sizeDivisor: 95,
    savingsRate: 0.81,
  },
] as const;

function CalculatorIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="2.5" width="16" height="19" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <rect x="7" y="5.5" width="10" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8.2" cy="13" r="1" fill="currentColor" />
      <circle cx="12" cy="13" r="1" fill="currentColor" />
      <circle cx="15.8" cy="13" r="1" fill="currentColor" />
      <circle cx="8.2" cy="16.8" r="1" fill="currentColor" />
      <circle cx="12" cy="16.8" r="1" fill="currentColor" />
      <circle cx="15.8" cy="16.8" r="1" fill="currentColor" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 10.5L12 4L20 10.5V20H14.5V14.5H9.5V20H4V10.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5L19 6.5V11.5C19 16 15.8 19.6 12 20.5C8.2 19.6 5 16 5 11.5V6.5L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 12.2L11.1 14.1L15 10.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function SolarCalculatorSection() {
  const [bill, setBill] = useState("6000");
  const [tariff, setTariff] = useState("8.8");
  const selectedProduct = propertyOptions[0];

  const estimate = useMemo(() => {
    const monthlyBill = Math.max(0, Number(bill) || 0);
    const rate = Math.max(0.1, Number(tariff) || 0.1);
    const monthlyUnits = monthlyBill / rate;
    const estimatedSize = monthlyUnits / selectedProduct.sizeDivisor;
    const yearlySavings = monthlyBill * 12 * selectedProduct.savingsRate;

    return {
      size: estimatedSize,
      units: monthlyUnits,
      savings: yearlySavings,
    };
  }, [bill, tariff, selectedProduct]);

  return (
    <section id="products" className="bg-white">
      <div className="mx-auto max-w-[1180px] px-4 pb-10 pt-16 text-center sm:px-6 sm:pt-20 lg:px-8">
        <h2 className="font-sans text-[32px] font-bold leading-tight tracking-[-0.01em] text-[#001F3F] sm:text-[34px] lg:text-[36px]">
          Samatha Green Energy Solutions
        </h2>
        <p className="section-kicker mt-3 font-sans leading-snug text-[#2cb673]">
          Clean Energy | Smart Solutions
        </p>
        <p className="mx-auto mt-5 max-w-[880px] font-sans text-[18px] leading-[1.65] text-[#334155]">
          Samatha Green Energy Solutions is an EPC renewable energy company providing complete
          solar solutions for residential, commercial, and industrial requirements. We deliver
          end-to-end solar services including design, installation, storage solutions,
          maintenance, and advanced monitoring systems.
        </p>
      </div>

      <div className="bg-[#eef3f8]">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-8 lg:py-16">
          <div>
            <p className="text-[14px] font-extrabold uppercase tracking-[0.16em] text-[#2cb673]">
              SOLAR CALCULATOR
            </p>
            <h3 className="calc-heading mt-3 max-w-[620px] font-sans tracking-[-0.02em] text-[#071f3b]">
              Estimate Your Solar System Size and Savings
            </h3>
            <p className="mt-4 max-w-[540px] font-sans text-[16px] leading-[1.65] text-gray-500">
              Enter your monthly electricity bill and tariff to get a quick planning estimate
              before our team prepares a detailed proposal.
            </p>

            <div className="mt-7 rounded-[28px] border border-white/80 bg-white p-6 shadow-[0_18px_50px_rgba(11,42,74,0.08)] sm:p-8">
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#2cb673]">
                  <CalculatorIcon />
                </div>
                <div>
                  <h4 className="text-xl font-bold tracking-tight text-brand-navy sm:text-2xl">
                    Solar Calculator
                  </h4>
                  <p className="mt-1 text-base font-medium text-slate-500 sm:text-[1rem]">
                    Quick estimate for rooftop solar planning
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2 sm:gap-6">
                <label className="block text-left">
                  <span className="mb-2 block text-sm font-semibold text-[#0D529C]">
                    Monthly electricity bill
                  </span>
                  <input
                    type="number"
                    min={0}
                    inputMode="decimal"
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-lg font-semibold text-brand-navy outline-none transition placeholder:text-slate-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                  />
                </label>
                <label className="block text-left">
                  <span className="mb-2 block text-sm font-semibold text-[#0D529C]">
                    Tariff per unit
                  </span>
                  <input
                    type="number"
                    min={0}
                    step="0.1"
                    inputMode="decimal"
                    value={tariff}
                    onChange={(e) => setTariff(e.target.value)}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-lg font-semibold text-brand-navy outline-none transition placeholder:text-slate-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                  />
                </label>
              </div>

              <div key={selectedProduct.id} className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-4">
                <div className="rounded-2xl bg-[#edf2f7] px-4 py-5 text-left transition-all duration-300 ease-out sm:px-5">
                  <p className="text-sm font-semibold text-slate-500">Estimated size</p>
                  <p className="mt-2 text-2xl font-bold tracking-tight text-brand-navy sm:text-[1.65rem]">
                    {estimate.size.toFixed(1)} kW
                  </p>
                </div>
                <div className="rounded-2xl bg-[#edf2f7] px-4 py-5 text-left transition-all duration-300 ease-out sm:px-5">
                  <p className="text-sm font-semibold text-slate-500">Monthly units</p>
                  <p className="mt-2 text-2xl font-bold tracking-tight text-brand-navy sm:text-[1.65rem]">
                    {Math.round(estimate.units).toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="rounded-2xl bg-brand-green px-4 py-5 text-left text-white shadow-[0_10px_24px_rgba(45,189,110,0.28)] transition-all duration-300 ease-out sm:px-5">
                  <p className="text-sm font-semibold text-white/90">Yearly savings</p>
                  <p className="mt-2 text-2xl font-bold tracking-tight sm:text-[1.65rem]">
                    {formatCurrency(Math.round(estimate.savings))}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-left text-[0.8rem] leading-relaxed text-slate-400 sm:text-[0.82rem]">
                This is an indicative estimate based on average generation and tariff assumptions.
                Actual system size and savings may vary depending on roof space, location, and
                consumption pattern.
              </p>
            </div>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8 lg:self-start">
            <p className="mb-3 text-[14px] font-extrabold uppercase tracking-[0.28em] text-[#2cb673]">
              Choose Your Need
            </p>
            <h3 className="choose-heading mt-0 max-w-[420px] font-sans tracking-[-0.02em] text-[#071f3b]">
              Solar solutions for every property type
            </h3>
            <p className="mt-4 font-sans text-[15px] leading-[1.65] text-gray-500">
              Select the closest category during enquiry and we will guide you with system sizing,
              cost, subsidy, installation timeline, and maintenance options.
            </p>

            <div className="mt-8 flex flex-col gap-3 mb-18">
              {propertyOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <Link
                    key={option.id}
                    id={`products-${option.id}`}
                    href={option.href}
                    className="group flex scroll-mt-28 items-center gap-4 rounded-xl border border-slate-300 bg-white px-5 py-4 text-left no-underline transition duration-300 ease-out hover:border-slate-400 hover:bg-slate-50"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-[#2cb673] transition duration-300 ease-out group-hover:bg-[#2cb673] group-hover:text-white">
                      <Icon />
                    </span>
                    <span className="block flex-1 text-lg font-medium tracking-[-0.01em] text-[#071f3b]">
                      {option.label}
                    </span>
                    <span className="ml-auto shrink-0 text-[#2cb673] opacity-0 translate-x-[-8px] transition duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                      <ArrowIcon />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
