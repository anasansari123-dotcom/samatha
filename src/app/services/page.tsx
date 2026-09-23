import CtaBanner from "@/components/CtaBanner";
import EnergyAssessmentSection from "@/components/EnergyAssessmentSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import SolarServicesSection from "@/components/SolarServicesSection";
import { breadcrumbJsonLd, createPageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Solar Installation & Energy Assessment Services",
  description:
    "Energy assessment, rooftop solar installation, BESS, solar carports, street lights, and AMC support from Samatha Green Energy Solutions in Bengaluru.",
  path: "/services",
  keywords: [
    "solar installation services Bengaluru",
    "energy assessment",
    "rooftop solar installation",
    "solar AMC Bengaluru",
    "battery energy storage systems",
  ],
});

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "Solar and Renewable Energy Services",
          description:
            "Energy assessment, rooftop solar installation, battery storage, and AMC support for homes, businesses, and industry in Bengaluru.",
          path: "/services",
        })}
      />
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
