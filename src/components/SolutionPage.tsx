import AdvancedSolutionsSection from "@/components/AdvancedSolutionsSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SolutionScroll from "@/components/SolutionScroll";
import SystemTypesSection, { type SolutionKey } from "@/components/SystemTypesSection";

export type { SolutionKey };

export default function SolutionPage({ solution }: { solution: SolutionKey }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <SolutionScroll solution={solution} />
        <SystemTypesSection activeSolution={solution} />
        <AdvancedSolutionsSection activeSolution={solution} />
      </main>
      <Footer />
    </div>
  );
}
