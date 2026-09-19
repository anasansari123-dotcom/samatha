import SolutionPage from "@/components/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RTC Renewable Energy | Samatha",
  description:
    "Round the Clock Renewable Energy with solar, wind, and BESS/lithium-ion battery.",
};

export default function RtcPage() {
  return <SolutionPage solution="rtc" />;
}
