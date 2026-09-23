import BlogSection from "@/components/BlogSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import ProcessSection from "@/components/ProcessSection";
import ProjectsTestimonialsSection from "@/components/ProjectsTestimonialsSection";
import SolarCalculatorSection from "@/components/SolarCalculatorSection";
import { faqs } from "@/data/faqs";
import { SITE_DESCRIPTION, createPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Solar Panel Installation in Bengaluru | Samatha Green Energy",
  description: SITE_DESCRIPTION,
  path: "/",
  keywords: [
    "solar panel installation Bengaluru",
    "rooftop solar Bengaluru",
    "solar company Karnataka",
    "hybrid solar system",
    "battery energy storage Bengaluru",
    "on-grid solar installation",
  ],
  absoluteTitle: true,
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <JsonLd data={faqJsonLd(faqs)} />
      <Header />
      <main className="flex-1">
        <Hero />
        <SolarCalculatorSection />
        <ProcessSection />
        <ProjectsTestimonialsSection />
        <FaqSection />
        <BlogSection />
      </main>
      <Footer showCta={false} />
    </div>
  );
}
