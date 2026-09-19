import ContactDetailsSection from "@/components/ContactDetailsSection";
import ContactHelpSection, { ContactHero } from "@/components/ContactPageSections";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Samatha Green Energy Solutions",
  description:
    "Contact Samatha Green Energy Solutions for solar consultation, site survey, AMC support, and technical assistance.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <ContactHero />
        <ContactHelpSection />
        <ContactDetailsSection />
      </main>
      <CtaBanner
        title="Need Solar Consultation or Service Support?"
        description="Contact us for installation, AMC, monitoring, repairs, upgrades, or a customized renewable energy solution."
      />
      <Footer />
    </div>
  );
}
