import JsonLd from "@/components/JsonLd";
import SolutionPage from "@/components/SolutionPage";
import { breadcrumbJsonLd, createPageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Hybrid Solar Systems in Bengaluru",
  description:
    "Hybrid solar systems that combine grid connection, rooftop generation, and battery backup for power cuts and better energy control.",
  path: "/solutions/hybrid",
  keywords: [
    "hybrid solar system Bengaluru",
    "solar with battery backup",
    "hybrid rooftop solar",
    "solar during power cuts",
  ],
});

export default function HybridPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Hybrid Solar", path: "/solutions/hybrid" },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "Hybrid Solar Systems",
          description:
            "Hybrid solar systems with grid connection and battery backup for frequent power cuts.",
          path: "/solutions/hybrid",
        })}
      />
      <SolutionPage solution="hybrid" />
    </>
  );
}
