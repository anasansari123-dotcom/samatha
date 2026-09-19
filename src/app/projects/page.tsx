import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import ProjectsGallery from "@/components/ProjectsGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Gallery | Samatha Green Energy Solutions",
  description:
    "View completed solar energy projects including residential rooftop solar, hybrid solar with battery backup, and commercial solar installations.",
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <PageBanner
          eyebrow="Solar Energy Solutions"
          title="Projects & Gallery"
          description="A look at completed solar panel installation projects across homes, businesses, and industrial facilities."
          image="/slide-2.png"
        />
        <ProjectsGallery />
      </main>
      <Footer />
    </div>
  );
}
