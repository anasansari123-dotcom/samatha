import JsonLd from "@/components/JsonLd";
import ProductPage from "@/components/ProductPage";
import { breadcrumbJsonLd, createPageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "rene\u03BC Home Rooftop Solar",
  description:
    "rene\u03BC Home rooftop solar for residences in Bengaluru — reliable generation, net metering support, and long-term electricity savings.",
  path: "/products/samatha-home",
  keywords: [
    "residential rooftop solar Bengaluru",
    "reneμ Home",
    "home solar system",
    "net metering solar",
  ],
});

export default function SamathaHomePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "rene\u03BC Home", path: "/products/samatha-home" },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "rene\u03BC Home Rooftop Solar",
          description:
            "Residential rooftop solar solutions for independent homes with reliable generation and long-term savings.",
          path: "/products/samatha-home",
        })}
      />
      <ProductPage product="home" />
    </>
  );
}
