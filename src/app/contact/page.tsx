import ContactDetailsSection from "@/components/ContactDetailsSection";
import ContactHelpSection, { ContactHero } from "@/components/ContactPageSections";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Us for Solar Consultation in Bengaluru",
  description:
    "Call +91 80500 18267 or email enquiry@samatha.green for solar consultation, site survey, AMC support, and technical assistance in Bengaluru.",
  path: "/contact",
  keywords: [
    "contact solar company Bengaluru",
    "solar consultation Bengaluru",
    "book solar site visit",
    "Samatha Green Energy contact",
  ],
});

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ])}
      />
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
