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
    value: "No #53, Kowdenahalli, Kalkere Main Rd, Bengaluru, Karnataka 560016",
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
  "Residential Solar",
  "Commercial Solar",
  "Industrial Solar",
  "Hybrid / BESS",
  "AMC / Service Support",
  "Site Survey",
  "Other",
];

const quickActions = [
  {
    label: "Call Now",
    href: "tel:8050018267",
    icon: "phone",
  },
  {
    label: "WhatsApp Support",
    href: "https://wa.me/918050018267",
    icon: "whatsapp",
  },
  {
    label: "Book Site Visit",
    href: "tel:8050018267",
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
        <svg {...common}>
          <path
            d="M5 19L6.2 15.2A7.5 7.5 0 1 1 8.8 17.1L5 19Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 10.2C9.5 10.2 9.7 10.3 9.9 10.6L10.6 11.8C10.7 12 10.7 12.2 10.6 12.4C10.5 12.6 10.2 13.1 9.8 13.5C9.4 13.9 10.2 14.6 10.8 15C11.4 15.4 12.1 15.8 12.6 15.9C12.8 15.9 13 15.9 13.1 15.7L14.1 14.5C14.3 14.3 14.5 14.3 14.8 14.4L16.2 14.9C16.5 15 16.7 15.2 16.7 15.5C16.7 16.5 15.9 17.2 14.9 17.2C12.2 17.2 9.5 14.7 8.8 12.2C8.6 11.3 8.8 10.3 9.2 10.2Z"
            fill="currentColor"
          />
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
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-brand-green">
              OFFICE CONTACT DETAILS
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-brand-navy">
              Samatha Green Energy Solutions
            </h2>
            <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-slate-500">
              Use the details below for enquiries, site visits, installation support, AMC
              assistance, and renewable energy project planning.
            </p>

            <div className="mt-7 rounded-2xl border border-white bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)] sm:p-6">
              <ul className="divide-y divide-slate-100">
                {officeDetails.map((item) => (
                  <li key={item.label} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                      <DetailIcon type={item.icon} />
                    </span>
                    <div>
                      <p className="text-[0.7rem] font-bold tracking-[0.12em] text-brand-blue">
                        {item.label}
                      </p>
                      {"href" in item && item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-sm font-medium text-brand-navy transition hover:text-brand-green"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-medium text-brand-navy">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-brand-green">SEND ENQUIRY</p>
            <h2 className="mt-3 font-display text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-brand-navy">
              Tell Us About Your Requirement
            </h2>
            <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-slate-500">
              Share your project or support requirement and our team will respond with the next
              step.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 rounded-2xl border border-white bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)] sm:p-6"
            >
              <div className="space-y-4">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-600">Name</span>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-brand-navy outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-600">Phone</span>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-brand-navy outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-600">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-brand-navy outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-600">
                    Service Required
                  </span>
                  <select
                    required
                    name="service"
                    defaultValue=""
                    className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-brand-navy outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
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

                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-600">Message</span>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell us about your property or energy needs"
                    className="w-full resize-y rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-brand-navy outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-brand-green px-6 text-sm font-semibold text-white transition hover:bg-brand-green-dark"
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
                <p className="mt-3 text-sm font-medium text-brand-green">
                  Thank you. Your enquiry has been noted. Our team will get back to you soon.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-green">QUICK ACTIONS</p>
          <h2 className="mt-3 font-display text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-brand-navy">
            Reach the Right Support Channel
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-[900px] grid-cols-2 gap-6 sm:grid-cols-4">
          {quickActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center gap-3 text-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f1fb] text-brand-blue transition group-hover:bg-brand-green/10 group-hover:text-brand-green">
                <DetailIcon type={action.icon} />
              </span>
              <span className="text-sm font-semibold text-brand-navy">{action.label}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-[#f7fafc] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-green">FIND US</p>
          <h2 className="mt-3 font-display text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-brand-navy">
            Office Location
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1100px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.06)] lg:grid-cols-[0.9fr_1.2fr]">
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
              <DetailIcon type="pin" />
            </span>
            <h3 className="mt-4 text-xl font-bold text-brand-navy">
              Samatha Green Energy Solutions Pvt Ltd
            </h3>
            <p className="mt-1 text-sm text-slate-500">Solar Energy Company</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              No #53, Kowdenahalli, Kalkere Main Rd, Bengaluru, Karnataka 560016
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=No+53+Kowdenahalli+Kalkere+Main+Rd+Bengaluru+Karnataka+560016"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 w-fit items-center justify-center rounded-full bg-[#14559b] px-6 text-sm font-semibold text-white transition hover:bg-[#124a87]"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="relative min-h-[280px] bg-slate-100 lg:min-h-[340px]">
            <iframe
              title="Samatha Green Energy Solutions office location"
              src="https://maps.google.com/maps?q=No%2053%20Kowdenahalli%20Kalkere%20Main%20Rd%20Bengaluru%20Karnataka%20560016&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
