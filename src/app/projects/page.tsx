import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageBanner from "@/components/PageBanner";
import ProjectsGallery from "@/components/ProjectsGallery";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Solar Projects & Installation Gallery",
  description:
    "See completed Samatha rooftop solar, hybrid battery backup, and commercial solar installations across homes, businesses, and industrial sites.",
  path: "/projects",
  keywords: [
    "solar projects Bengaluru",
    "rooftop solar gallery",
    "commercial solar installation",
    "hybrid solar projects",
  ],
});

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
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
