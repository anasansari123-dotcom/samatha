"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import ProjectModal, { ProjectCard } from "@/components/ProjectModal";
import { projects, type Project } from "@/data/projects";

const testimonials = [
  {
    title: "Residential Solar Installation",
    quote:
      "Excellent service from Samatha Green Energy Solutions. The team explained everything clearly, from panel selection to installation. Our electricity bill has reduced significantly after installing the solar system.",
    name: "Ravi Kumar",
    meta: "Mysuru",
    rating: 5,
  },
  {
    title: "Quality & Support",
    quote:
      "Very satisfied with the quality of solar products and after-sales support. The installation was completed on time, and the team was professional throughout.",
    name: "Priya S.",
    meta: "Mandya",
    rating: 4,
  },
  {
    title: "Commercial Solar Setup",
    quote:
      "We needed a dependable commercial system with monitoring. Samatha delivered on time and helped our facility cut energy costs.",
    name: "Suresh Nair",
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
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 hover:text-brand-navy"
      >
        <ArrowIcon direction="left" />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 hover:text-brand-navy"
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
    <div className="flex items-center gap-0.5 text-[#f5b301]" aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3.6l2.4 4.86 5.36.78-3.88 3.78.92 5.34L12 16.9l-4.8 2.52.92-5.34L4.24 9.24l5.36-.78L12 3.6z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M10.2 7.2C7.4 7.2 5.2 9.4 5.2 12.2c0 1.9 1.1 3.5 2.7 4.3-.2.7-.7 1.6-1.7 2.5-.2.2-.1.5.2.5 2.4 0 4.3-1.7 5-4.1.3-1 .3-1.9.2-2.7-.5-2.1-2.1-3.5-4.4-3.5zm9.3 0c-2.8 0-5 2.2-5 5 0 1.9 1.1 3.5 2.7 4.3-.2.7-.7 1.6-1.7 2.5-.2.2-.1.5.2.5 2.4 0 4.3-1.7 5-4.1.3-1 .3-1.9.2-2.7-.5-2.1-2.1-3.5-4.4-3.5z" />
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
              <p className="text-xs font-bold tracking-[0.16em] text-brand-green">PROJECTS</p>
              <h2 className="mt-3 font-display text-[clamp(1.55rem,3.2vw,2.2rem)] font-extrabold leading-tight text-brand-navy">
                Recent Solar Panel Installation Projects
              </h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-500">
                Explore residential, commercial, and industrial renewable energy solutions
                completed by our team. Click any project to view details and images.
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
              className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-navy px-6 text-sm font-semibold text-white shadow-lg shadow-brand-navy/20 transition hover:-translate-y-0.5 hover:bg-brand-green"
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
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.16em] text-brand-green">TESTIMONIALS</p>
              <h2 className="mt-3 font-display text-[clamp(1.55rem,3.2vw,2.2rem)] font-extrabold leading-tight text-brand-navy">
                What Our Solar Customers Say
              </h2>
            </div>
            <NavButtons onPrev={prevTestimonials} onNext={nextTestimonials} />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonialPages[testimonialPage].map((item) => (
              <article
                key={item.name + item.title}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-brand-green">
                    <QuoteIcon />
                  </span>
                  <Stars count={item.rating} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="font-semibold text-brand-navy">{item.name}</p>
                  <p className="mt-0.5 text-sm text-slate-500">{item.meta}</p>
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
