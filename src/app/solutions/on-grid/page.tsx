import JsonLd from "@/components/JsonLd";
import SolutionPage from "@/components/SolutionPage";
import { breadcrumbJsonLd, createPageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "On-Grid Solar Systems in Bengaluru",
  description:
    "Grid-tied on-grid solar systems for faster payback, net metering, and lower electricity bills for homes and businesses in Bengaluru.",
  path: "/solutions/on-grid",
  keywords: [
    "on-grid solar Bengaluru",
    "net metering solar",
    "grid tied solar system",
    "rooftop solar savings",
  ],
});

export default function OnGridPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "On-Grid Solar", path: "/solutions/on-grid" },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "On-Grid Solar Systems",
          description:
            "Grid-tied solar systems designed for maximum bill savings and net metering benefits.",
          path: "/solutions/on-grid",
        })}
      />
      <SolutionPage solution="on-grid" />
    </>
  );
}
