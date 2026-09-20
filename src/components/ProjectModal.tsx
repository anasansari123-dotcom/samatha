"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";

function BrandWatermark() {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      aria-hidden="true"
    >
      <div className="relative aspect-square h-[80%] overflow-hidden opacity-[0.38]">
        <Image
          src="/logo.png"
          alt=""
          width={640}
          height={160}
          className="absolute left-0 top-1/2 h-[118%] w-auto max-w-none -translate-y-1/2"
        />
      </div>
    </div>
  );
}

export function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick?: () => void;
}) {
  const hasBakedWatermark =
    project.image.includes("project-real") || project.image === "/3.jpg";

  const content = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden rounded-[16px] bg-slate-200">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {hasBakedWatermark ? null : <BrandWatermark />}
      </div>
      <div className="flex min-h-[8.25rem] flex-1 flex-col pt-4 text-left">
        <p className="text-[14px] font-extrabold uppercase tracking-[0.16em] text-[#2F9B69]">
          {project.category}
        </p>
        <h3 className="mt-2 line-clamp-2 min-h-[2.7em] text-[1.28rem] font-extrabold leading-[1.35] text-[#0A2540] sm:text-[1.35rem]">
          {project.title}
        </h3>
        <p className="mt-auto pt-2 text-sm font-medium leading-snug text-[#8a94a6]">
          {project.location}
        </p>
      </div>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="group flex h-full w-full flex-col rounded-2xl text-left transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-4"
      >
        {content}
      </button>
    );
  }

  return (
    <article className="group flex h-full flex-col rounded-2xl transition hover:-translate-y-0.5">
      {content}
    </article>
  );
}

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [tabIndex, setTabIndex] = useState(0);
  const activeTab = project?.tabs[tabIndex];

  useEffect(() => {
    setTabIndex(0);
  }, [project?.title]);

  useEffect(() => {
    if (!project) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project || !activeTab) return null;

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-end bg-brand-navy/70 px-0 py-0 backdrop-blur-sm sm:place-items-center sm:px-4 sm:py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="max-h-[94vh] w-full overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:max-h-[90vh] sm:max-w-5xl sm:rounded-3xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 border-b border-slate-200 p-4 sm:gap-4 sm:p-7">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
              {project.category}
            </p>
            <h2
              id="project-modal-title"
              className="mt-2 text-xl font-extrabold leading-tight text-brand-navy sm:text-3xl"
            >
              {project.title}
            </h2>
            <p className="mt-2 flex items-center gap-2 text-[13px] font-normal text-[#8a94a6]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
              </svg>
              {project.location}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#eef3f8] text-brand-navy transition hover:bg-brand-green hover:text-white sm:h-11 sm:w-11"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="p-4 sm:p-7">
          <p className="max-w-3xl text-[15px] leading-7 text-slate-600 sm:text-base">
            {project.description}
          </p>

          {project.specs.length > 0 ? (
            <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {project.specs.map((spec) => (
                <div
                  key={spec}
                  className="rounded-xl bg-[#eef3f8] px-3.5 py-3 text-[13px] font-bold leading-5 text-[#001F3F] sm:text-sm"
                >
                  {spec}
                </div>
              ))}
            </div>
          ) : null}

          <div className="-mx-4 mt-6 flex gap-2 overflow-x-auto border-b border-slate-200 px-4 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {project.tabs.map((tab, index) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setTabIndex(index)}
                className={`shrink-0 border-b-2 px-3 py-3 text-sm font-bold transition sm:px-4 ${
                  tabIndex === index
                    ? "border-brand-green text-brand-green"
                    : "border-transparent text-slate-500 hover:text-brand-navy"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid gap-5 pt-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-6 lg:pt-6">
            <div className="overflow-hidden rounded-2xl bg-[#eef3f8] shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[16/11] w-full">
                <Image
                  src={activeTab.image}
                  alt={`${project.title} ${activeTab.label}`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-green">
                {activeTab.label}
              </p>
              <h3 className="mt-3 text-xl font-extrabold leading-tight text-brand-navy sm:text-2xl">
                {activeTab.heading ?? project.title}
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-slate-600">{activeTab.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
