import Link from "next/link";

type CtaBannerProps = {
  title?: string;
  description?: string;
};

export default function CtaBanner({
  title = "Ready to Switch to Solar Energy?",
  description = "Get expert guidance and a customized solar solution for your property.",
}: CtaBannerProps) {
  return (
    <section className="w-full bg-gradient-to-r from-[#0A4D8D] via-[#1a9b8e] to-[#2cb673]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 px-4 py-12 sm:flex-row sm:items-center sm:px-6 sm:py-14 lg:px-8">
        <div className="max-w-3xl">
          <h3 className="page-title max-w-[720px] font-sans font-extrabold tracking-[-0.02em] !text-white">
            {title}
          </h3>
          <p className="page-desc-on-dark mt-3 max-w-[680px]">
            {description}
          </p>
        </div>
        <Link
          href="/contact#enquiry"
          className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-[#0A2540] shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition hover:bg-slate-50"
        >
          Request a Free Quote
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
