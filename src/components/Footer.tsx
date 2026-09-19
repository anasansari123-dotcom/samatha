import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";

const productLinks = [
  { label: "reneμ Home", href: "/products/samatha-home#renemu-home" },
  { label: "reneμ Elite", href: "/products/samatha-elite#renemu-elite" },
  { label: "reneμ Plus", href: "/products/samatha-plus#renemu-plus" },
  { label: "Services & AMC Support", href: "/services" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products" },
  { label: "Solutions", href: "/solutions/on-grid" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function FooterLogo() {
  return (
    <Link href="/" className="-mt-1 inline-flex h-[5.25rem] w-[300px] shrink-0 items-center overflow-hidden sm:h-24 sm:w-[380px] lg:h-[6.75rem] lg:w-[440px]">
      <Image
        src="/logo-footer.png"
        alt="Samatha Green Energy Solutions"
        width={480}
        height={120}
        className="h-full w-full origin-left scale-[1.55] object-contain object-left brightness-110 contrast-105"
      />
    </Link>
  );
}

export default function Footer({ showCta = false }: { showCta?: boolean }) {
  return (
    <div>
      {showCta ? <CtaBanner /> : null}
      <footer id="contact" className="bg-[#071f3b] text-white [font-synthesis:none]">
        <div className="h-[3px] w-full bg-gradient-to-r from-[#0A4D8D] via-[#1a8f7a] to-[#35B56F]" />
        <div className="mx-auto grid max-w-[1280px] items-start gap-8 px-4 pb-10 pt-7 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.2fr] lg:gap-8 lg:px-8 lg:pb-12 lg:pt-8">
          <div>
            <FooterLogo />
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white sm:text-base">
              Professional solar panel installation, rooftop solar solutions, maintenance, and
              renewable energy services for homes, businesses, and industries.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-green hover:text-white"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-green hover:text-white"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-extrabold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[15px] text-white transition hover:text-brand-green sm:text-base">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-extrabold text-white">Products</h3>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[15px] text-white transition hover:text-brand-green sm:text-base">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-extrabold text-white">Contact</h3>
            <ul className="mt-4 space-y-3.5 text-[15px] text-white sm:text-base">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-brand-green">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M6.5 4.5H9L10.5 8L8.7 9.2C9.6 11.1 11.1 12.7 13 13.8L14.3 12L18 13.5V16C18 17.1 17.1 18 16 18C9.9 18 5 13.1 5 7C5 5.9 5.9 5 7 5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <a href="tel:+918050018267" className="transition hover:text-brand-green">
                  +91 80500 18267
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-brand-green">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  </svg>
                </span>
                <a href="mailto:enquiry@samatha.green" className="transition hover:text-brand-green">
                  enquiry@samatha.green
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-brand-green">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 21S5 14.8 5 10A7 7 0 0 1 19 10C19 14.8 12 21 12 21Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <span>
                  No #53, Kowdenahalli, Kalkere Main Rd, K R Puram,
                  <br />
                  Bengaluru, Karnataka 560016
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-brand-green">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 8V12L15 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <p className="mx-auto max-w-[1280px] px-4 py-4 text-center text-sm leading-relaxed text-white/85 sm:px-6 lg:px-8 sm:text-[15px]">
            Copyright © 2026 Samatha Green Energy Solutions Pvt Ltd. All rights reserved. Powered by{" "}
            <span className="text-brand-green">DreamBuzz Solutions</span>.
          </p>
        </div>
      </footer>
    </div>
  );
}
