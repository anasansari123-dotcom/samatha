import SolutionPage from "@/components/SolutionPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "RTC Renewable Energy",
  description:
    "Round the Clock renewable energy with solar, wind, and battery storage.",
  path: "/solutions/rtc",
  index: false,
});

export default function RtcPage() {
  return <SolutionPage solution="rtc" />;
}
