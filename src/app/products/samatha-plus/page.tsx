import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "reneμ Plus | Samatha Green Energy Solutions",
  description:
    "reneμ Plus commercial and industrial solar solutions with scalable EPC delivery.",
};

export default function SamathaPlusPage() {
  return <ProductPage product="plus" />;
}
