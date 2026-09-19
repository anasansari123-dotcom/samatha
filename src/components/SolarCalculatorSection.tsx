"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const propertyOptions = [
  {
    id: "home",
    label: "reneμX Home",
    description: "Rooftop solar for residences",
    href: "/products/samatha-home#renemu-home",
    icon: HomeIcon,
  },
  {
    id: "elite",
    label: "reneμX Elite",
    description: "Premium systems with higher savings",
    href: "/products/samatha-elite#renemu-elite",
    icon: ShieldIcon,
  },
  {
    id: "plus",
    label: "reneμX Plus",
    description: "Commercial & industrial setups",
    href: "/products/samatha-plus#renemu-plus",
    icon: WrenchIcon,
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
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 10.5L12 4L20 10.5V20H14.5V14.5H9.5V20H4V10.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5L19 6.5V11.5C19 16 15.8 19.6 12 20.5C8.2 19.6 5 16 5 11.5V6.5L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 12.2L11.1 14.1L15 10.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.7 6.3A4.2 4.2 0 0 0 9.5 9.8L4.8 14.5L9.5 19.2L14.2 14.5A4.2 4.2 0 0 0 17.7 9.3L15.2 11.8L12.2 8.8L14.7 6.3Z"
        stroke="currentColor"
        strokeWidth="1.7"
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
  const [selectedNeed, setSelectedNeed] = useState<(typeof propertyOptions)[number]["id"]>("home");

  const estimate = useMemo(() => {
    const monthlyBill = Math.max(0, Number(bill) || 0);
    const rate = Math.max(0.1, Number(tariff) || 0.1);
    const monthlyUnits = monthlyBill / rate;
    const estimatedSize = monthlyUnits / 120;
    const yearlySavings = monthlyBill * 12 * 0.78;

    return {
      size: estimatedSize,
      units: monthlyUnits,
      savings: yearlySavings,
    };
  }, [bill, tariff]);

  return (
    <section id="products" className="bg-white">
      <div className="mx-auto max-w-[920px] px-4 pb-10 pt-16 text-center sm:px-6 sm:pt-20 lg:px-8">
        <h2 className="font-sans text-[32px] font-bold leading-tight tracking-[-0.01em] text-[#001F3F] sm:text-[34px] lg:text-[36px]">
          Samatha Green Energy Solutions
        </h2>
        <p className="mt-3 font-sans text-[18px] font-semibold leading-snug text-[#2cb673] sm:text-[20px]">
          Clean Energy | Smart Solutions
        </p>
        <p className="mx-auto mt-5 max-w-[760px] font-sans text-[16px] font-normal leading-[1.65] text-[#4A4A4A]">
          Samatha Green Energy Solutions is an EPC renewable energy company providing complete
          solar solutions for residential, commercial, and industrial requirements. We deliver
          end-to-end solar services including design, installation, storage solutions,
          maintenance, and advanced monitoring systems.
        </p>
      </div>

      <div className="bg-[#eef3f8]">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-8 lg:py-16">
          <div>
            <p className="text-xs font-bold tracking-[0.14em] text-brand-green">SOLAR CALCULATOR</p>
            <h3 className="mt-3 max-w-xl font-display text-[clamp(1.55rem,3vw,2.15rem)] font-extrabold leading-tight text-brand-navy">
              Estimate Your Solar System Size and Savings
            </h3>
            <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-slate-500">
              Enter your monthly electricity bill and tariff to get a quick planning estimate
              before our team prepares a detailed proposal.
            </p>

            <div className="mt-7 rounded-[28px] border border-white/80 bg-white p-6 shadow-[0_18px_50px_rgba(11,42,74,0.08)] sm:p-8">
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-green text-white shadow-[0_8px_18px_rgba(45,189,110,0.28)]">
                  <CalculatorIcon />
                </div>
                <div>
                  <h4 className="text-xl font-bold tracking-tight text-brand-navy sm:text-2xl">
                    Solar Calculator
                  </h4>
                  <p className="mt-1 text-sm text-slate-500 sm:text-[0.95rem]">
                    Quick estimate for rooftop solar planning
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2 sm:gap-6">
                <label className="block text-left">
                  <span className="mb-2 block text-sm font-semibold text-brand-navy">
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
                  <span className="mb-2 block text-sm font-semibold text-brand-navy">
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

              <div className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-4">
                <div className="rounded-2xl bg-[#edf2f7] px-4 py-5 text-left sm:px-5">
                  <p className="text-sm font-semibold text-slate-500">Estimated size</p>
                  <p className="mt-2 text-2xl font-bold tracking-tight text-brand-navy sm:text-[1.65rem]">
                    {estimate.size.toFixed(1)} kW
                  </p>
                </div>
                <div className="rounded-2xl bg-[#edf2f7] px-4 py-5 text-left sm:px-5">
                  <p className="text-sm font-semibold text-slate-500">Monthly units</p>
                  <p className="mt-2 text-2xl font-bold tracking-tight text-brand-navy sm:text-[1.65rem]">
                    {Math.round(estimate.units).toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="rounded-2xl bg-brand-green px-4 py-5 text-left text-white shadow-[0_10px_24px_rgba(45,189,110,0.28)] sm:px-5">
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

          <div className="rounded-[28px] border border-white/80 bg-white p-6 shadow-[0_18px_50px_rgba(11,42,74,0.08)] sm:p-7 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-green">
              Choose Your Need
            </p>
            <h3 className="mt-3 font-display text-[clamp(1.35rem,2.4vw,1.75rem)] font-semibold leading-snug text-brand-navy">
              Solar solutions for every property type
            </h3>
            <p className="mt-3 text-[0.95rem] leading-8 text-slate-500">
              Select the closest category during enquiry and we will guide you with system sizing,
              cost, subsidy, installation timeline, and maintenance options.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {propertyOptions.map((option) => {
                const Icon = option.icon;
                const active = selectedNeed === option.id;
                return (
                  <Link
                    key={option.id}
                    id={`products-${option.id}`}
                    href={option.href}
                    onClick={() => setSelectedNeed(option.id)}
                    className={`group flex scroll-mt-28 items-center gap-4 rounded-xl border px-4 py-4 text-left transition hover:-translate-y-0.5 ${
                      active
                        ? "border-brand-green bg-brand-green/5 shadow-[0_0_0_1px_rgba(45,189,110,0.15)]"
                        : "border-slate-200 bg-white hover:border-brand-green/50 hover:bg-slate-50 hover:shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                    }`}
                  >
                    <span
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full transition ${
                        active
                          ? "bg-brand-green text-white"
                          : "bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white"
                      }`}
                    >
                      <Icon />
                    </span>
                    <span>
                      <span className="block text-lg font-semibold text-brand-navy">
                        {option.label}
                      </span>
                      <span className="mt-0.5 block text-sm text-slate-500">
                        {option.description}
                      </span>
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
