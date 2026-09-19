import SolutionPage from "@/components/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hybrid Solar Solutions | Samatha",
  description: "Hybrid solar systems with grid connection and battery backup.",
};

export default function HybridPage() {
  return <SolutionPage solution="hybrid" />;
}
