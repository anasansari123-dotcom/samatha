import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "reneμX Home | Samatha Green Energy Solutions",
  description:
    "reneμX Home rooftop solar solutions for residences — reliable, efficient, and built for long-term savings.",
};

export default function SamathaHomePage() {
  return <ProductPage product="home" />;
}
