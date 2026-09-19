import BlogArticlesSection, { BlogHero } from "@/components/BlogPageSections";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Samatha Green Energy Solutions",
  description:
    "Insights and practical guidance on solar, battery storage, hybrid systems, and renewable energy planning.",
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <BlogHero />
        <BlogArticlesSection />
      </main>
      <Footer />
    </div>
  );
}
