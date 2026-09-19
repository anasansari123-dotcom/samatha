import BlogSection from "@/components/BlogSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import ProjectsTestimonialsSection from "@/components/ProjectsTestimonialsSection";
import SolarCalculatorSection from "@/components/SolarCalculatorSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
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
