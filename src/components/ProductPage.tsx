import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategoriesSection from "@/components/ProductCategoriesSection";

type ProductKey = "home" | "elite" | "plus";

export default function ProductPage({ product }: { product: ProductKey }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductCategoriesSection activeProduct={product} />
      </main>
      <Footer showCta={true} />
    </div>
  );
}
