import SolutionPage from "@/components/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESS Energy Storage | Samatha",
  description: "Battery Energy Storage Systems for flexible, reliable power.",
};

export default function EssPage() {
  return <SolutionPage solution="ess" />;
}
