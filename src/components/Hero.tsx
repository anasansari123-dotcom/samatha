"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";

type TitleLine = {
  text: string;
  color: "white" | "green";
};

type Slide = {
  image: string;
  title: TitleLine[];
  tagline?: ReactNode;
  body?: ReactNode;
  features?: string[];
  defaultFeature?: number;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  imagePosition?: string;
  overlay?: "photo" | "ui";
};

const slides: Slide[] = [
  {
    image: "/slide-2.png",
    title: [
      { text: "ONE PARTNER.", color: "green" },
      { text: "ALL ENERGY", color: "green" },
      { text: "SOLUTION.", color: "white" },
    ],
    tagline: (
      <>
        Powering a <span className="text-brand-green">smarter</span> and{" "}
        <span className="text-brand-green">greener</span> tomorrow.
      </>
    ),
    features: ["Solar Solutions", "Energy Storage", "Clean Energy", "Reliable Performance"],
    defaultFeature: 3,
    primaryCta: { label: "Explore Solutions", href: "/#solutions" },
    secondaryCta: { label: "Solar Calculator", href: "/#products" },
    imagePosition: "object-[68%_center]",
  },
  {
    image: "/slide-4.png",
    title: [
      { text: "SMART", color: "green" },
      { text: "SOLUTIONS.", color: "green" },
      { text: "STRONGER FUTURE.", color: "white" },
    ],
    body: (
      <>
        From expert installation to lasting performance, we deliver reliable solar and
        renewable solutions tailored to{" "}
        <span className="text-brand-green">your energy needs</span>.
      </>
    ),
    primaryCta: { label: "View Products", href: "/#products" },
    secondaryCta: { label: "Get Quote", href: "/contact" },
    imagePosition: "object-[78%_center]",
  },
  {
    image: "/slide-3.png",
    title: [
      { text: "CONSULT", color: "green" },
      { text: "WITH US.", color: "white" },
    ],
    tagline: (
      <>
        Your Vision. Our Expertise.{" "}
        <span className="text-brand-green">A Sustainable Future.</span>
      </>
    ),
    body: "At Samatha, we help you make the right energy decisions with customized solar solutions tailored to your goals. Let's build a cleaner, smarter, and more efficient future together.",
    features: [
      "Expert Consultation",
      "Customized Solutions",
      "Maximum Efficiency",
      "Sustainable Impact",
    ],
    defaultFeature: 3,
    primaryCta: { label: "Let's Talk", href: "/contact" },
    secondaryCta: { label: "About Us", href: "/about" },
    imagePosition: "object-[72%_center]",
  },
  {
    image: "/slide-5.png",
    title: [
      { text: "SMART DIGITAL", color: "green" },
      { text: "PLATFORM.", color: "white" },
    ],
    body: (
      <>
        One platform to monitor, manage and maximize the performance of all your renewable
        energy assets, tailored to{" "}
        <span className="text-brand-green">your energy needs</span>.
      </>
    ),
    features: [
      "Live Monitoring",
      "Performance Analytics",
      "Digital Warranty",
      "Service Requests",
      "Alerts & Notifications",
    ],
    defaultFeature: 2,
    primaryCta: { label: "Request a Demo", href: "/contact#quote" },
    secondaryCta: { label: "Learn More", href: "/about" },
    imagePosition: "object-[82%_center]",
    overlay: "ui",
  },
  {
    image: "/slide-1.png",
    title: [
      { text: "INTELLIGENT", color: "green" },
      { text: "ENERGY.", color: "green" },
      { text: "SEAMLESS BACKUP.", color: "white" },
    ],
    body: "Reliable on-grid, off-grid, and hybrid solar solutions with intelligent battery backup designed to keep your energy flowing without interruption.",
    features: ["On-Grid", "Off-Grid", "Hybrid Solar", "Battery Backup"],
    defaultFeature: 3,
    primaryCta: { label: "Compare Systems", href: "/solutions/on-grid" },
    secondaryCta: { label: "Talk to Expert", href: "/contact" },
    imagePosition: "object-[80%_center]",
  },
  {
    image: "/slide-6.png",
    title: [
      { text: "COMMERCIAL &", color: "green" },
      { text: "INDUSTRIAL", color: "green" },
      { text: "SOLUTIONS.", color: "white" },
    ],
    tagline: (
      <>
        Powering Business.{" "}
        <span className="text-brand-green">Driving Efficiency.</span>
      </>
    ),
    body: "Scalable solar and renewable energy solutions designed to reduce operational costs, improve energy efficiency, and support uninterrupted business operations.",
    primaryCta: { label: "Industrial Solutions", href: "/products/samatha-plus" },
    secondaryCta: { label: "Contact Sales", href: "/contact" },
    imagePosition: "object-[70%_center]",
  },
];

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {direction === "left" ? (
        <path
          d="M15 6L9 12L15 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M9 6L15 12L9 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [activeFeature, setActiveFeature] = useState(slides[0].defaultFeature ?? 0);
  const slide = slides[index];

  useEffect(() => {
    setActiveFeature(slides[index].defaultFeature ?? 0);
  }, [index]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
    }, 2000);
    return () => window.clearInterval(timer);
  }, [index]);

  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  const featureCols =
    (slide.features?.length ?? 0) >= 5
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : (slide.features?.length ?? 0) === 1
        ? "sm:grid-cols-1 max-w-xs"
        : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-brand-navy">
      {slides.map((item, i) => (
        <div
          key={`${item.image}-${i}`}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={item.image}
            alt=""
            fill
            priority={i === 0}
            className={`object-cover ${item.imagePosition ?? "object-center"}`}
            sizes="100vw"
          />
          <div
            className={
              item.overlay === "ui"
                ? "absolute inset-0 bg-gradient-to-r from-black/88 via-black/55 to-black/15"
                : "absolute inset-0 bg-gradient-to-r from-black/82 via-black/42 to-transparent"
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div>
      ))}

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/40 sm:left-5"
      >
        <Arrow direction="left" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/40 sm:right-5"
      >
        <Arrow direction="right" />
      </button>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-[1280px] flex-col justify-center px-4 py-16 pb-24 sm:px-6 lg:px-8 lg:py-20">
        <div key={index} className="max-w-5xl">
          <h1 className="animate-fade-up font-display text-[clamp(2.35rem,6.4vw,4.75rem)] font-black uppercase leading-[0.9] tracking-[-0.035em] [font-synthesis:none]">
            {slide.title.map((line) => (
              <span
                key={line.text}
                className={`block ${
                  line.color === "green" ? "text-brand-green" : "text-white"
                }`}
              >
                {line.text}
              </span>
            ))}
          </h1>

          <div className="animate-fade-up delay-1 mt-4 h-[2px] w-12 rounded-full bg-brand-green" />

          {slide.tagline ? (
            <p className="animate-fade-up delay-1 mt-4 text-base font-medium leading-relaxed text-white sm:text-lg">
              {slide.tagline}
            </p>
          ) : null}

          {slide.body ? (
            <p className="animate-fade-up delay-2 mt-3 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              {slide.body}
            </p>
          ) : null}
        </div>

        {slide.features?.length ? (
          <div
            className={`animate-fade-up delay-3 mt-6 grid max-w-3xl grid-cols-2 gap-2 sm:gap-2.5 ${featureCols}`}
          >
            {slide.features.map((feature, i) => {
              const active = i === activeFeature;
              return (
                <button
                  key={feature}
                  type="button"
                  onClick={() => setActiveFeature(i)}
                  className={`min-h-[40px] rounded-lg border px-2.5 py-2 text-center text-[0.7rem] font-medium leading-snug text-white backdrop-blur-[2px] transition sm:min-h-[44px] sm:px-3 sm:py-2 sm:text-xs ${
                    active
                      ? "border-white/80 bg-white/12 shadow-[0_0_0_1px_rgba(255,255,255,0.18)]"
                      : "border-white/35 bg-black/30 hover:border-white/55 hover:bg-black/40"
                  }`}
                >
                  {feature}
                </button>
              );
            })}
          </div>
        ) : null}

        <div className="animate-fade-up delay-4 mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
          <Link
            href={slide.primaryCta.href}
            className="inline-flex h-9 items-center justify-center rounded-full bg-brand-green px-5 text-xs font-semibold text-white shadow-[0_8px_18px_rgba(45,189,110,0.28)] transition hover:bg-brand-green-dark sm:h-10 sm:px-6 sm:text-sm"
          >
            {slide.primaryCta.label}
          </Link>
          <Link
            href={slide.secondaryCta.href}
            className="inline-flex h-9 items-center justify-center rounded-full border border-white/80 px-5 text-xs font-semibold text-white transition hover:bg-white/10 sm:h-10 sm:px-6 sm:text-sm"
          >
            {slide.secondaryCta.label}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5 sm:bottom-7">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? "h-2.5 w-8 bg-brand-green sm:h-3 sm:w-9"
                : "h-2.5 w-2.5 bg-white/55 hover:bg-white/80 sm:h-3 sm:w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
