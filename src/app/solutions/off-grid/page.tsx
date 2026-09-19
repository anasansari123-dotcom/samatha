import SolutionPage from "@/components/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Off Grid Solar Solutions | Samatha",
  description: "Off-grid solar with battery backup for independent power.",
};

export default function OffGridPage() {
  return <SolutionPage solution="off-grid" />;
}
