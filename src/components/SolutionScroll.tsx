"use client";

import { useEffect } from "react";
import type { SolutionKey } from "@/components/SystemTypesSection";

export default function SolutionScroll({ solution }: { solution: SolutionKey }) {
  useEffect(() => {
    const scrollToSolution = () => {
      const el = document.getElementById(solution);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const timer = window.setTimeout(scrollToSolution, 120);
    return () => window.clearTimeout(timer);
  }, [solution]);

  return null;
}
