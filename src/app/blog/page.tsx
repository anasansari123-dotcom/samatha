import BlogArticlesSection, { BlogHero } from "@/components/BlogPageSections";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Solar Energy Insights and Planning Guides",
  description:
    "Practical guides on rooftop solar, hybrid systems, battery storage, and renewable energy planning from Samatha Green Energy Solutions.",
  path: "/blog",
  keywords: [
    "solar energy blog",
    "how to choose solar system",
    "BESS battery storage",
    "on-grid vs off-grid vs hybrid",
  ],
});

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <Header />
      <main className="flex-1">
        <BlogHero />
        <BlogArticlesSection />
      </main>
      <Footer />
    </div>
  );
}
