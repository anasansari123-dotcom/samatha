import AboutHero, { AboutIntroSection } from "@/components/AboutSections";
import AboutPillarsSection from "@/components/AboutPillarsSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Samatha Green Energy Solutions",
  description:
    "Learn about Samatha Green Energy Solutions — tech-enabled renewable energy for homes, businesses, and industry.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
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
