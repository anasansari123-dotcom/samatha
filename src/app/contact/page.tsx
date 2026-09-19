import ContactDetailsSection from "@/components/ContactDetailsSection";
import ContactHelpSection, { ContactHero } from "@/components/ContactPageSections";
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
      <Footer />
    </div>
  );
}
