import AboutHero, { AboutIntroSection } from "@/components/AboutSections";
import AboutPillarsSection from "@/components/AboutPillarsSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Our Solar Company in Bengaluru",
  description:
    "Samatha Green Energy Solutions is a Bengaluru solar EPC company delivering rooftop solar, battery storage, and tech-enabled renewable energy for homes and industry.",
  path: "/about",
  keywords: [
    "solar company Bengaluru",
    "Samatha Green Energy Solutions",
    "renewable energy company Karnataka",
    "solar EPC Bengaluru",
  ],
});

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
      <Header />
      <main className="flex-1">
        <AboutHero />
        <AboutIntroSection />
        <AboutPillarsSection />
      </main>
      <Footer showCta={true} />
    </div>
  );
}
