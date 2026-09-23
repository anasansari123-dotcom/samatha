import type { Metadata } from "next";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://samatha.green").replace(
  /\/$/,
  "",
);

export const SITE_NAME = "Samatha Green Energy Solutions";

export const SITE_DESCRIPTION =
  "Samatha Green Energy Solutions designs and installs rooftop solar, hybrid systems, and battery storage in Bengaluru for homes, businesses, and industry.";

export const SITE_KEYWORDS = [
  "solar panel installation Bengaluru",
  "rooftop solar Karnataka",
  "hybrid solar system",
  "battery energy storage",
  "on-grid solar",
  "off-grid solar",
  "solar EPC Bengaluru",
  "Samatha Green Energy",
];

export const company = {
  legalName: "Samatha Green Energy Solutions Pvt Ltd.",
  name: SITE_NAME,
  email: "enquiry@samatha.green",
  phone: "+918050018267",
  phoneDisplay: "+91 80500 18267",
  address: {
    street: "No #53, Kowdenahalli, Kalkere Main Rd, K R Puram",
    city: "Bengaluru",
    region: "Karnataka",
    postalCode: "560016",
    country: "IN",
  },
  geo: {
    lat: 13.0192437,
    lng: 77.6788921,
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61583996971893",
    "https://www.instagram.com/samathagreenenergysolutions/",
  ],
} as const;

export const indexedRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.6 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.6 },
  { path: "/products/samatha-home", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/samatha-elite", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/samatha-plus", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solutions/on-grid", changeFrequency: "monthly", priority: 0.9 },
  { path: "/solutions/off-grid", changeFrequency: "monthly", priority: 0.9 },
  { path: "/solutions/hybrid", changeFrequency: "monthly", priority: 0.9 },
  { path: "/solutions/ess", changeFrequency: "monthly", priority: 0.8 },
] as const;

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  index = true,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  index?: boolean;
  absoluteTitle?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords ?? SITE_KEYWORDS,
    alternates: {
      canonical: url,
      languages: {
        "en-IN": url,
        "x-default": url,
      },
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false, nocache: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: "website",
      locale: "en_IN",
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: company.name,
        legalName: company.legalName,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        email: company.email,
        telephone: company.phone,
        sameAs: company.sameAs,
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: company.name,
        image: `${SITE_URL}/logo.png`,
        url: SITE_URL,
        telephone: company.phone,
        email: company.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: company.address.street,
          addressLocality: company.address.city,
          addressRegion: company.address.region,
          postalCode: company.address.postalCode,
          addressCountry: company.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: company.geo.lat,
          longitude: company.geo.lng,
        },
        areaServed: [
          { "@type": "City", name: "Bengaluru" },
          { "@type": "State", name: "Karnataka" },
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:30",
          closes: "18:30",
        },
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: company.name,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-IN",
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Bengaluru" },
      { "@type": "State", name: "Karnataka" },
    ],
    serviceType: name,
  };
}
