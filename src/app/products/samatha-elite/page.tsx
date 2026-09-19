import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "reneμ Elite | Samatha Green Energy Solutions",
  description:
    "reneμ Elite premium solar systems with higher performance and refined installation quality.",
};

export default function SamathaElitePage() {
  return <ProductPage product="elite" />;
}
