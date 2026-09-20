import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "rene\u03BC Elite | Samatha Green Energy Solutions",
  description:
    "rene\u03BC Elite premium solar systems with higher performance and refined installation quality.",
};

export default function SamathaElitePage() {
  return <ProductPage product="elite" />;
}
