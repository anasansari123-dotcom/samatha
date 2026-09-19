import CtaBanner from "@/components/CtaBanner";
import EnergyAssessmentSection from "@/components/EnergyAssessmentSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SolarServicesSection from "@/components/SolarServicesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Samatha Green Energy Solutions",
  description:
    "Energy assessment and solar services for smarter planning, efficiency, and long-term savings.",
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <EnergyAssessmentSection />
        <SolarServicesSection />
      </main>
      <CtaBanner
        title="Need Solar Product Guidance?"
        description="Get help selecting the right renewable energy product, system design, and service plan for your site."
      />
      <Footer />
    </div>
  );
}
