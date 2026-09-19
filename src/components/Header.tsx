"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useQuoteModal } from "@/components/QuoteModal";
import SearchOverlay from "@/components/SearchOverlay";

const productItems = [
  { label: "reneμ Home", href: "/products/samatha-home#renemu-home" },
  { label: "reneμ Elite", href: "/products/samatha-elite#renemu-elite" },
  { label: "reneμ Plus", href: "/products/samatha-plus#renemu-plus" },
];

const solutionItems = [
  { label: "On grid", href: "/solutions/on-grid#on-grid" },
  { label: "Off grid", href: "/solutions/off-grid#off-grid" },
  { label: "Hybrid", href: "/solutions/hybrid#hybrid" },
  { label: "ESS", href: "/solutions/ess#ess" },
  {
    label: "Round the Clock Renewable Energy (RTC) (Solar + wind + BESS/Lithium-ion Battery)",
    href: "/solutions/rtc#rtc",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/#products",
    dropdown: true,
    items: productItems,
  },
  {
    label: "Solutions",
    href: "/solutions/on-grid",
    dropdown: true,
    items: solutionItems,
    wide: true,
  },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

function ChevronDown({ open = false }: { open?: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2 3.5L5 6.5L8 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4V15M12 15L8 11M12 15L16 11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 19H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const { openQuote } = useQuoteModal();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const isHome = pathname === "/";
  const isProductsSection = pathname.startsWith("/products/");
  const isSolutionsSection = pathname.startsWith("/solutions/");
  const isServicesPage = pathname.startsWith("/services");
  const isAboutPage = pathname.startsWith("/about");
  const isBlogPage = pathname.startsWith("/blog");
  const isContactPage = pathname.startsWith("/contact");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenDropdown(null);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04)]">
      <div className="mx-auto flex h-[92px] w-full max-w-[1440px] items-center gap-4 px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex min-w-0 flex-1 items-center justify-start">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/logo.png"
              alt="Samatha Green Energy Solutions"
              width={360}
              height={90}
              className="h-[4.25rem] w-auto object-contain sm:h-[4.75rem] lg:h-[5.25rem]"
              priority
            />
          </Link>
        </div>

        <nav ref={navRef} className="hidden shrink-0 items-center gap-5 xl:gap-7 lg:flex">
          {navLinks.map((link) => {
            const hasItems = Boolean(link.items?.length);
            const isOpen = openDropdown === link.label;
            const isActive =
              (link.label === "Home" && isHome) ||
              (link.label === "Products" && (isOpen || isProductsSection)) ||
              (link.label === "Solutions" && (isOpen || isSolutionsSection)) ||
              (link.label === "Services" && isServicesPage) ||
              (link.label === "About Us" && isAboutPage) ||
              (link.label === "Blog" && isBlogPage) ||
              (link.label === "Contact Us" && isContactPage);

            if (hasItems) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 whitespace-nowrap text-[0.92rem] font-medium tracking-normal [font-synthesis:none] transition-colors ${
                      isActive ? "text-brand-green" : "text-slate-700 hover:text-brand-green"
                    }`}
                    aria-expanded={isOpen}
                    aria-haspopup="menu"
                    onClick={() =>
                      setOpenDropdown((current) => (current === link.label ? null : link.label))
                    }
                  >
                    <span className="whitespace-nowrap">{link.label}</span>
                    <ChevronDown open={isOpen} />
                  </button>

                  {isOpen ? (
                    <div className="absolute left-0 top-full z-50 pt-3">
                      <div
                        role="menu"
                        className={`rounded-2xl border border-slate-200 bg-white py-2 shadow-[0_12px_30px_rgba(15,23,42,0.12)] ${
                          "wide" in link && link.wide ? "w-[min(420px,90vw)]" : "min-w-[180px]"
                        }`}
                      >
                        {link.items!.map((item) => {
                          const itemPath = item.href.split("#")[0];
                          const itemActive = pathname === itemPath;
                          return (
                            <Link
                              key={item.label}
                              href={item.href}
                              role="menuitem"
                              className={`block px-5 py-2.5 text-[0.92rem] font-medium leading-snug transition hover:bg-slate-50 hover:text-brand-green ${
                                itemActive ? "text-brand-green" : "text-slate-700"
                              }`}
                              onClick={() => setOpenDropdown(null)}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`group inline-flex items-center gap-1 whitespace-nowrap text-[0.92rem] font-medium tracking-normal [font-synthesis:none] transition-colors ${
                  isActive ? "text-brand-green" : "text-slate-700 hover:text-brand-green"
                }`}
              >
                <span className="whitespace-nowrap">{link.label}</span>
                {link.dropdown ? (
                  <span className="text-slate-400 transition-colors group-hover:text-brand-green">
                    <ChevronDown />
                  </span>
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2.5">
          <div className="hidden items-center gap-2.5 lg:flex">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef3f8] text-brand-blue transition hover:bg-[#e2ebf4]"
            >
              <SearchIcon />
            </button>
            <Link
              href="/#download"
              className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-full border border-[#b8cce3] bg-white px-4 text-sm font-semibold tracking-normal text-brand-blue [font-synthesis:none] transition hover:border-brand-blue hover:bg-[#f5f9fd]"
            >
              <DownloadIcon />
              Download App
            </Link>
            <button
              type="button"
              onClick={() => openQuote()}
              className="inline-flex h-10 items-center whitespace-nowrap rounded-full bg-brand-green px-5 text-sm font-semibold tracking-normal text-white shadow-[0_8px_20px_rgba(45,189,110,0.28)] [font-synthesis:none] transition hover:bg-brand-green-dark"
            >
              Get a Free Quote
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
          >
            <SearchIcon />
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                (link.label === "Home" && isHome) ||
                (link.label === "Products" && isProductsSection) ||
                (link.label === "Solutions" && isSolutionsSection) ||
                (link.label === "Services" && isServicesPage) ||
                (link.label === "About Us" && isAboutPage) ||
                (link.label === "Blog" && isBlogPage) ||
                (link.label === "Contact Us" && isContactPage);
              const mobileExpanded = mobileOpenDropdown === link.label;

              if (link.items?.length) {
                return (
                  <div key={link.label}>
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between py-2 text-base font-medium ${
                        isActive ? "text-brand-green" : "text-slate-700"
                      }`}
                      onClick={() =>
                        setMobileOpenDropdown((current) =>
                          current === link.label ? null : link.label,
                        )
                      }
                    >
                      {link.label}
                      <ChevronDown open={mobileExpanded} />
                    </button>
                    {mobileExpanded ? (
                      <div className="mb-2 ml-3 space-y-1 border-l border-slate-200 pl-3">
                        {link.items.map((item) => {
                          const itemPath = item.href.split("#")[0];
                          return (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileOpenDropdown(null);
                              }}
                              className={`block py-1.5 text-sm leading-snug ${
                                pathname === itemPath ? "text-brand-green" : "text-slate-600"
                              }`}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2 text-base font-medium ${
                    isActive ? "text-brand-green" : "text-slate-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Link
              href="/#download"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#b8cce3] text-sm font-semibold text-brand-blue"
            >
              <DownloadIcon />
              Download App
            </Link>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openQuote();
              }}
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand-green text-sm font-semibold text-white"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      ) : null}
    </header>
    <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
