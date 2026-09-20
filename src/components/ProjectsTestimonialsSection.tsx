"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import ProjectModal, { ProjectCard } from "@/components/ProjectModal";
import { projects, type Project } from "@/data/projects";

const testimonials = [
  {
    title: "Residential Solar Installation",
    quote:
      "Excellent service from Samatha Green Energy Solutions. The team explained everything clearly, from panel selection to installation. Our electricity bill has reduced significantly after installing the solar system. Highly recommended for anyone looking for reliable solar solutions.",
    name: "Ravi Kumar",
    meta: "Mysuru",
    rating: 5,
  },
  {
    title: "Quality & Support",
    quote:
      "Very satisfied with the quality of solar products and after-sales support. The installation was completed on time, and the team was professional throughout the process. Great experience overall.",
    name: "Priya S.",
    meta: "Mandya",
    rating: 4,
  },
  {
    title: "Commercial Project",
    quote:
      "We installed a solar system for our business premises, and the experience was smooth from consultation to execution. Their technical knowledge and support were impressive.",
    name: "Naveen R.",
    meta: "Business Owner",
    rating: 5,
  },
  {
    title: "Hybrid System Experience",
    quote:
      "Power backup during outages was our main concern. The hybrid solution works reliably and the app monitoring is easy to use.",
    name: "Meera Iyer",
    meta: "Whitefield",
    rating: 5,
  },
  {
    title: "End-to-End Service",
    quote:
      "From paperwork to final handover, everything was clear. The installation quality and after-sales support have been excellent.",
    name: "Arjun Patel",
    meta: "Hosur",
    rating: 5,
  },
  {
    title: "Trusted Solar Partner",
    quote:
      "Great consultation, honest estimates, and clean installation. Our factory rooftop system is performing as projected.",
    name: "Lakshmi Devi",
    meta: "Industrial Client",
    rating: 5,
  },
] as const;

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function NavButtons({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef3f8] text-[#0D529C] transition hover:bg-brand-green hover:text-white sm:h-11 sm:w-11"
      >
        <ArrowIcon direction="left" />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef3f8] text-[#0D529C] transition hover:bg-brand-green hover:text-white sm:h-11 sm:w-11"
      >
        <ArrowIcon direction="right" />
      </button>
    </div>
  );
}

function Dots({
  count,
  active,
  onSelect,
}: {
  count: number;
  active: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onSelect(i)}
          className={`h-2.5 rounded-full transition-all ${
            i === active ? "w-7 bg-brand-green" : "w-2.5 bg-slate-300 hover:bg-slate-400"
          }`}
        />
      ))}
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-400" aria-label={`${count} star rating`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < count;
        return (
          <svg
            key={i}
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill={filled ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
            className={filled ? "text-amber-400" : "text-slate-300"}
            aria-hidden="true"
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
        );
      })}
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
    </svg>
  );
}

export default function ProjectsTestimonialsSection() {
  const visibleCount = 3;
  const projectSlideCount = projects.length;

  const [projectPage, setProjectPage] = useState(0);
  const [testimonialPage, setTestimonialPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [paused, setPaused] = useState(false);

  const visibleProjects = useMemo(() => {
    return Array.from({ length: Math.min(visibleCount, projects.length) }, (_, offset) => {
      return projects[(projectPage + offset) % projects.length];
    });
  }, [projectPage]);

  const testimonialPages = useMemo(() => {
    const pages = [];
    for (let i = 0; i < testimonials.length; i += 3) {
      pages.push(testimonials.slice(i, i + 3));
    }
    return pages;
  }, []);

  useEffect(() => {
    if (paused || testimonialPages.length <= 1) return;
    const timer = window.setInterval(() => {
      setTestimonialPage((page) => (page === testimonialPages.length - 1 ? 0 : page + 1));
    }, 3000);
    return () => window.clearInterval(timer);
  }, [paused, testimonialPages.length]);

  const prevProjects = () =>
    setProjectPage((p) => (p === 0 ? projectSlideCount - 1 : p - 1));
  const nextProjects = () =>
    setProjectPage((p) => (p === projectSlideCount - 1 ? 0 : p + 1));
  const prevTestimonials = () =>
    setTestimonialPage((p) => (p === 0 ? testimonialPages.length - 1 : p - 1));
  const nextTestimonials = () =>
    setTestimonialPage((p) => (p === testimonialPages.length - 1 ? 0 : p + 1));

  return (
    <>
      <section id="projects" className="bg-[#eef3f8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">PROJECTS</p>
              <h2 className="mt-3 font-display text-[clamp(1.55rem,3.2vw,2.2rem)] font-extrabold leading-tight text-brand-navy">
                Recent Solar Panel Installation Projects
              </h2>
              <p className="mt-3 font-sans text-[15px] leading-[1.65] text-gray-500">
                Explore residential, commercial, and industrial renewable energy solutions
                completed by our team. 
              </p>
            </div>
            <NavButtons onPrev={prevProjects} onNext={nextProjects} />
          </div>

          <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={`${project.title}-${project.location}`}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-6">
            <Dots
              count={projectSlideCount}
              active={projectPage}
              onSelect={setProjectPage}
            />
            <Link
              href="/projects"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0D529C] px-6 text-sm font-semibold text-white shadow-lg shadow-[#0D529C]/20 transition hover:-translate-y-0.5 hover:bg-brand-green"
            >
              View All Projects
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
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <section
        className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="relative flex flex-col items-center text-center">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-brand-green">
              TESTIMONIALS
            </p>
            <h2 className="mt-2 text-[33px] !font-extrabold !leading-8 tracking-tight text-brand-navy">
              What Our Solar Customers Say
            </h2>
            <div className="mt-4 sm:absolute sm:right-0 sm:top-1/2 sm:mt-8 sm:-translate-y-1/2">
              <NavButtons onPrev={prevTestimonials} onNext={nextTestimonials} />
            </div>
          </div>

          <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonialPages[testimonialPage].map((item) => (
              <article
                key={item.name + item.title}
                className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[#2cb673]">
                    <QuoteIcon />
                  </span>
                  <Stars count={item.rating} />
                </div>
                <h3 className="mb-2 !text-[17px] !font-extrabold !leading-snug text-[#0A2540]">{item.title}</h3>
                <p className="flex-1 text-[15px] leading-6 text-slate-600">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-auto border-t border-slate-200 pt-4">
                  <p className="text-[15px] font-semibold text-[#0A2540]">{item.name}</p>
                  <p className="mt-0.5 text-[13px] text-slate-500">{item.meta}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Dots
              count={testimonialPages.length}
              active={testimonialPage}
              onSelect={setTestimonialPage}
            />
          </div>
        </div>
      </section>
    </>
  );
}
