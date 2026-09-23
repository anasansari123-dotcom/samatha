import JsonLd from "@/components/JsonLd";
import ProductPage from "@/components/ProductPage";
import { breadcrumbJsonLd, createPageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "rene\u03BC Elite Premium Solar",
  description:
    "rene\u03BC Elite premium solar for villas and high-performance homes, with refined installation quality and stronger long-term output.",
  path: "/products/samatha-elite",
  keywords: [
    "premium solar system",
    "villa solar installation Bengaluru",
    "reneμ Elite",
    "high performance rooftop solar",
  ],
});

export default function SamathaElitePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "rene\u03BC Elite", path: "/products/samatha-elite" },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "rene\u03BC Elite Premium Solar",
          description:
            "Premium solar systems for villas and luxury homes with higher performance and refined installation quality.",
          path: "/products/samatha-elite",
        })}
      />
      <ProductPage product="elite" />
    </>
  );
}
