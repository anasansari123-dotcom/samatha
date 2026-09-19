import SolutionPage from "@/components/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "On Grid Solar Solutions | Samatha",
  description: "Grid-tied on-grid solar systems for maximum bill savings.",
};

export default function OnGridPage() {
  return <SolutionPage solution="on-grid" />;
}
