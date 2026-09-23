import JsonLd from "@/components/JsonLd";
import SolutionPage from "@/components/SolutionPage";
import { breadcrumbJsonLd, createPageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Off-Grid Solar with Battery Backup",
  description:
    "Independent off-grid solar systems with battery backup for remote sites and locations with unreliable grid power.",
  path: "/solutions/off-grid",
  keywords: [
    "off-grid solar Bengaluru",
    "solar battery backup",
    "independent solar power",
    "off grid rooftop solar",
  ],
});

export default function OffGridPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Off-Grid Solar", path: "/solutions/off-grid" },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "Off-Grid Solar Systems",
          description:
            "Off-grid solar with battery backup for independent power where the grid is unavailable or unreliable.",
          path: "/solutions/off-grid",
        })}
      />
      <SolutionPage solution="off-grid" />
    </>
  );
}
