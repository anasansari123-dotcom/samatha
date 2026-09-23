import JsonLd from "@/components/JsonLd";
import SolutionPage from "@/components/SolutionPage";
import { breadcrumbJsonLd, createPageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Energy Storage Systems (ESS)",
  description:
    "Battery energy storage systems that store solar or grid power for backup, peak-load savings, and smarter energy use.",
  path: "/solutions/ess",
  keywords: [
    "energy storage system Bengaluru",
    "BESS battery storage",
    "solar battery backup",
    "lithium ion energy storage",
  ],
});

export default function EssPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "ESS", path: "/solutions/ess" },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "Energy Storage Systems (ESS)",
          description:
            "Battery energy storage for backup power, peak-load management, and optimized solar use.",
          path: "/solutions/ess",
        })}
      />
      <SolutionPage solution="ess" />
    </>
  );
}
