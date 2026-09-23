import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";

const productLinks = [
  { label: "rene\u03BC Home", href: "/products/samatha-home#renemu-home" },
  { label: "rene\u03BC Elite", href: "/products/samatha-elite#renemu-elite" },
  { label: "rene\u03BC Plus", href: "/products/samatha-plus#renemu-plus" },
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

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61583996971893",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/samathagreenenergysolutions/",
    icon: InstagramIcon,
  },
];

function iconProps(size = 20) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg {...iconProps(18)}>
      <rect width="17" height="17" x="3.5" y="3.5" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...iconProps(20)}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg {...iconProps(20)}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg {...iconProps(20)}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg {...iconProps(20)}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function Footer({ showCta = false }: { showCta?: boolean }) {
  return (
    <div>
      {showCta ? <CtaBanner /> : null}
      <footer id="contact" className="bg-[#071f3b] text-white [font-synthesis:none]">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr] lg:px-8">
          <div>
            <Link href="/" className="relative mb-5 block h-[102px] w-[320px] overflow-hidden mt-[-40px]">
              <Image
                src="/logo-footer.png"
                alt="Samatha Green Energy Solutions"
                width={360}
                height={112}
                className="absolute left-32 top-1/2 h-auto w-[105%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </Link>
            <p className="max-w-sm text-base font-medium leading-7 text-white/72">
              Professional solar panel installation, rooftop solar solutions, maintenance, and
              renewable energy services for homes, businesses, and industries.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#2cb673]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold !text-white">Quick Links</h3>
            <div className="grid gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/72 text-base transition hover:text-[#2cb673]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold !text-white">Products</h3>
            <div className="grid gap-3">
              {productLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/72 text-base transition hover:text-[#2cb673]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold !text-white">Contact</h3>
            <div className="grid gap-3 text-white/72">
              <a
                href="tel:+918050018267"
                className="flex gap-3 leading-7 transition hover:text-[#2cb673]"
              >
                <span className="mt-0.5 shrink-0 text-[#2cb673]">
                  <PhoneIcon />
                </span>
                <span>+91 80500 18267</span>
              </a>
              <a
                href="mailto:enquiry@samatha.green"
                className="flex gap-3 leading-7 transition hover:text-[#2cb673]"
              >
                <span className="mt-0.5 shrink-0 text-[#2cb673]">
                  <MailIcon />
                </span>
                <span>enquiry@samatha.green</span>
              </a>
              <p className="flex gap-3 leading-7">
                <span className="mt-0.5 shrink-0 text-[#2cb673]">
                  <PinIcon />
                </span>
                <span>
                  No #53, Kowdenahalli, Kalkere Main Rd, K R Puram, Bengaluru, Karnataka 560016
                </span>
              </p>
              <p className="flex gap-3 leading-7">
                <span className="mt-0.5 shrink-0 text-[#2cb673]">
                  <ClockIcon />
                </span>
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-5 text-center text-sm text-white/65">
          Copyright © {new Date().getFullYear()} Samatha Green Energy Solutions Pvt Ltd. All rights
          reserved. Powered by{" "}
          <a
            href="https://dreambuzz.in"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#2cb673] hover:text-white"
          >
            DreamBuzz Solutions
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
