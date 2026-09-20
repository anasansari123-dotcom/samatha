import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "rene\u03BC Home | Samatha Green Energy Solutions",
  description:
    "rene\u03BC Home rooftop solar solutions for residences — reliable, efficient, and built for long-term savings.",
};

export default function SamathaHomePage() {
  return <ProductPage product="home" />;
}
