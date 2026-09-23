import JsonLd from "@/components/JsonLd";
import ProductPage from "@/components/ProductPage";
import { breadcrumbJsonLd, createPageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "rene\u03BC Plus Commercial Solar",
  description:
    "rene\u03BC Plus commercial and industrial solar with scalable EPC delivery for factories, campuses, and high-consumption businesses.",
  path: "/products/samatha-plus",
  keywords: [
    "commercial solar Bengaluru",
    "industrial solar installation",
    "reneμ Plus",
    "solar EPC commercial",
  ],
});

export default function SamathaPlusPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "rene\u03BC Plus", path: "/products/samatha-plus" },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "rene\u03BC Plus Commercial Solar",
          description:
            "Commercial and industrial solar solutions with scalable EPC delivery for high-consumption sites.",
          path: "/products/samatha-plus",
        })}
      />
      <ProductPage product="plus" />
    </>
  );
}
