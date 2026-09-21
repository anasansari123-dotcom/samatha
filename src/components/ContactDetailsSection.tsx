"use client";

import { FormEvent, useState } from "react";

const officeDetails = [
  {
    label: "COMPANY NAME",
    value: "Samatha Green Energy Solutions",
    icon: "building",
  },
  {
    label: "OFFICE ADDRESS",
    value: "No #53, Kowdenahalli, Kalkere Main Rd, K R Puram, Bengaluru, Karnataka 560016",
    icon: "pin",
  },
  {
    label: "CONTACT NUMBER",
    value: "8050018267",
    href: "tel:8050018267",
    icon: "phone",
  },
  {
    label: "EMAIL ADDRESS",
    value: "enquiry@samatha.green",
    href: "mailto:enquiry@samatha.green",
    icon: "email",
  },
  {
    label: "SERVICES",
    value: "Residential | Commercial | Industrial Solar Solutions",
    icon: "headset",
  },
  {
    label: "SUPPORT AVAILABLE FOR",
    value: "Installation | AMC | Monitoring | Repairs | Upgrades",
    icon: "wrench",
  },
] as const;

const serviceOptions = [
  "Residential Solar Installation",
  "Commercial Solar Solutions",
  "Industrial Solar Systems",
  "Solar Panel Maintenance",
  "Solar Consultation",
  "Rooftop Solar Solutions",
];

const officeMap = {
  lat: 13.0192437,
  lng: 77.6788921,
};

const officeMapsUrl = "https://www.google.com/maps?q=13.0192437,77.6788921&z=17&hl=en";
const officeMapsEmbedUrl = `https://www.google.com/maps?q=${officeMap.lat},${officeMap.lng}&hl=en&z=17&output=embed`;

const quickActions = [
  {
    label: "Call Now",
    href: "tel:+918050018267",
    icon: "phone",
  },
  {
    label: "WhatsApp Support",
    href: "https://wa.me/918050018267?text=Hi%20Samatha%2C%20I%20need%20solar%20support.",
    icon: "whatsapp",
  },
  {
    label: "Book Site Visit",
    href: "/contact#enquiry",
    icon: "pin",
  },
  {
    label: "Email Support",
    href: "mailto:enquiry@samatha.green",
    icon: "email",
  },
] as const;

function DetailIcon({ type }: { type: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (type) {
    case "building":
      return (
        <svg {...common}>
          <path
            d="M5 20V6H14V20M14 10H19V20M8 10H11M8 14H11M8 18H11"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path
            d="M12 21S5 14.8 5 10A7 7 0 0 1 19 10C19 14.8 12 21 12 21Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path
            d="M6.5 4.5H9L10.5 8L8.7 9.2C9.6 11.1 11.1 12.7 13 13.8L14.3 12L18 13.5V16C18 17.1 17.1 18 16 18C9.9 18 5 13.1 5 7C5 5.9 5.9 5 7 5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "email":
      return (
        <svg {...common}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "headset":
      return (
        <svg {...common}>
          <path d="M5 15V11A7 7 0 0 1 19 11V15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <rect x="3.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
          <rect x="16.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path
            d="M14.7 6.3A4.2 4.2 0 0 0 9.5 9.8L4.8 14.5L9.5 19.2L14.2 14.5A4.2 4.2 0 0 0 17.7 9.3L15.2 11.8L12.2 8.8L14.7 6.3Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common} fill="currentColor">
          <path d="M5 19L6.2 15.2A7.5 7.5 0 1 1 8.8 17.1L5 19Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ContactDetailsSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section id="enquiry" className="bg-[#eef3f8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] items-start gap-6 lg:grid-cols-2 lg:gap-8">
          <div>
            <p className="text-[14px] font-extrabold uppercase tracking-[0.16em] text-[#2cb673]">
              Office Contact Details
            </p>
            <h2 className="page-title mt-3 font-display font-extrabold text-[#0A2540]">
              Samatha Green Energy Solutions
            </h2>
            <p className="page-desc mt-3 max-w-xl">
              Use the details below for enquiries, site visits, installation support, AMC
              assistance, and renewable energy project planning.
            </p>
            <div className="mt-7 rounded-[28px] bg-white px-6 py-7 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:px-8 sm:py-8">
              <ul className="divide-y divide-slate-100">
                {officeDetails.map((item) => (
                  <li key={item.label} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                    <span className="mt-0.5 shrink-0 text-[#2cb673]">
                      <DetailIcon type={item.icon} />
                    </span>
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#125393]">
                        {item.label}
                      </p>
                      {"href" in item && item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-[15px] font-bold leading-snug text-[#0A2540] transition hover:text-brand-green sm:text-base"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-[15px] font-bold leading-snug text-[#0A2540] sm:text-base">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="text-[14px] font-extrabold uppercase tracking-[0.16em] text-[#2cb673]">
              Send Enquiry
            </p>
            <h2 className="page-title mt-3 font-display font-extrabold text-[#0A2540]">
              Tell Us About Your Requirement
            </h2>
            <p className="page-desc mt-3 max-w-xl">
              Share your project or support requirement and our team will respond with the next
              step.
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-7 rounded-[28px] bg-white px-6 py-7 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:px-8 sm:py-8"
            >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-extrabold text-[#0A2540]">Name</span>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-[15px] font-semibold text-brand-navy outline-none transition placeholder:font-medium placeholder:text-slate-400 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-extrabold text-[#0A2540]">Phone</span>
                <input
                  required
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-[15px] font-semibold text-brand-navy outline-none transition placeholder:font-medium placeholder:text-slate-400 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-extrabold text-[#0A2540]">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-[15px] font-semibold text-brand-navy outline-none transition placeholder:font-medium placeholder:text-slate-400 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-extrabold text-[#0A2540]">
                  Service Required
                </span>
                <select
                  required
                  name="service"
                  defaultValue=""
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-[15px] font-semibold text-brand-navy outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                >
                  <option value="" disabled>
                    Select service
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-extrabold text-[#0A2540]">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell us about your property or energy needs"
                  className="w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[15px] font-semibold text-brand-navy outline-none transition placeholder:font-medium placeholder:text-slate-400 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-brand-green px-7 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(45,189,110,0.28)] transition hover:bg-brand-green-dark"
            >
              Send Enquiry
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 12L20 5L13 20L11 13L4 12Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {submitted ? (
              <p className="mt-3 text-sm font-bold text-brand-green">
                Thank you. Your enquiry has been noted. Our team will get back to you soon.
              </p>
            ) : null}
          </form>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">QUICK ACTIONS</p>
          <h2 className="mt-3 font-display text-[clamp(1.5rem,2.8vw,2.1rem)] font-extrabold text-brand-navy">
            Reach the Right Support Channel
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-[980px] grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-10">
          {quickActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center gap-3.5 text-center"
            >
              <span
                className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#eef3f8] text-[#1d4f91] shadow-[0_4px_10px_rgba(15,23,42,0.08)] transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:bg-brand-green group-hover:text-white group-hover:shadow-[0_4px_0_#1f9a55,0_10px_18px_rgba(45,189,110,0.22)] sm:h-[80px] sm:w-[80px]"
              >
                <span className="scale-[2]">
                  <DetailIcon type={action.icon} />
                </span>
              </span>
              <span className="text-[14px] font-extrabold text-[#0A2540] transition-colors duration-300 group-hover:text-brand-green sm:text-[15px]">
                {action.label}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-[#f7fafc] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">FIND US</p>
          <h2 className="mt-3 font-display text-[clamp(1.5rem,2.8vw,2.1rem)] font-extrabold text-brand-navy">
            Office Location
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1280px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.06)] lg:grid-cols-[0.9fr_1.2fr]">
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
              <DetailIcon type="pin" />
            </span>
            <h3 className="page-card-title mt-4 font-extrabold text-brand-navy">
              Samatha Green Energy Solutions Pvt Ltd
            </h3>
            <p className="mt-1 text-base font-bold text-slate-500">Solar Energy Company</p>
            <p className="page-desc mt-4">
              No #53, Kowdenahalli, Kalkere Main Rd, K R Puram, Bengaluru, Karnataka 560016
            </p>
            <a
              href={officeMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 w-fit items-center justify-center rounded-full bg-[#14559b] px-6 text-sm font-semibold text-white transition hover:bg-[#124a87]"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="relative min-h-[340px] bg-slate-100 lg:min-h-[460px]">
            <iframe
              title="Samatha Green Energy Solutions office location"
              src={officeMapsEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
