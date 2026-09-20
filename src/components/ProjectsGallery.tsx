"use client";

import Link from "next/link";
import { useState } from "react";
import ProjectModal, { ProjectCard } from "@/components/ProjectModal";
import { projects, type Project } from "@/data/projects";

export default function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">PROJECT GALLERY</p>
          <h2 className="mt-3 font-display text-[clamp(1.55rem,3.2vw,2.2rem)] font-extrabold text-brand-navy">
            Residential, Commercial, and Industrial Solar Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[19px] font-medium leading-relaxed text-slate-500">
            Open any project card to view specifications, images, and installation details.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1200px] items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-[1200px] justify-center">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-navy px-6 text-sm font-semibold text-white transition hover:bg-brand-green"
          >
            Start Your Project
          </Link>
        </div>
      </section>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
