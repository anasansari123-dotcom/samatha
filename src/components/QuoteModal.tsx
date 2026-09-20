"use client";

import {
  createContext,
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const WHATSAPP_NUMBER = "918050018267";

const serviceOptions = [
  "Residential Solar",
  "Commercial Solar",
  "Industrial Solar",
  "Hybrid / BESS",
  "rene\u03BC Home",
  "rene\u03BC Elite",
  "rene\u03BC Plus",
  "AMC / Service Support",
  "Site Survey",
  "Other",
];

const propertyTypes = ["Residential", "Commercial", "Industrial", "Institutional", "Other"];

type QuoteFormState = {
  name: string;
  phone: string;
  location: string;
  service: string;
  propertyType: string;
  message: string;
};

const emptyForm: QuoteFormState = {
  name: "",
  phone: "",
  location: "",
  service: "Residential Solar",
  propertyType: "Residential",
  message: "",
};

type QuoteModalContextValue = {
  openQuote: (serviceName?: string) => void;
  closeQuote: () => void;
};

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) {
    throw new Error("useQuoteModal must be used within QuoteModalProvider");
  }
  return ctx;
}

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [serviceName, setServiceName] = useState<string | undefined>();
  const [form, setForm] = useState<QuoteFormState>(emptyForm);

  const openQuote = useCallback((name?: string) => {
    setServiceName(name);
    setForm({
      ...emptyForm,
      service: name || "Residential Solar",
    });
    setOpen(true);
  }, []);

  const closeQuote = useCallback(() => {
    setOpen(false);
    setServiceName(undefined);
  }, []);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeQuote();
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeQuote]);

  function updateField<K extends keyof QuoteFormState>(key: K, value: QuoteFormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines = [
      serviceName ? "New Service Quote Request" : "New Solar Quote Request",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Location: ${form.location}`,
      `Service Required: ${form.service}`,
      `Property Type: ${form.propertyType}`,
      `Message: ${form.message || "N/A"}`,
    ];
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
    setForm(emptyForm);
    closeQuote();
  }

  const value = useMemo(() => ({ openQuote, closeQuote }), [openQuote, closeQuote]);

  return (
    <QuoteModalContext.Provider value={value}>
      {children}
      {open ? (
        <div
          className="fixed inset-0 z-[100] grid place-items-end bg-brand-navy/70 px-0 py-0 backdrop-blur-sm sm:place-items-center sm:px-4 sm:py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-modal-title"
          onClick={closeQuote}
        >
          <div
            className="max-h-[94vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:max-h-[90vh] sm:rounded-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-5 sm:p-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
                  Free Solar Quote
                </p>
                <h2
                  id="quote-modal-title"
                  className="mt-2 text-2xl font-extrabold text-brand-navy"
                >
                  {serviceName
                    ? `Get ${serviceName} Quote`
                    : "Get a Customized Solar Proposal"}
                </h2>
                <p className="mt-2 leading-6 text-slate-600">
                  Share your requirement and send it directly to our WhatsApp team.
                </p>
              </div>
              <button
                type="button"
                onClick={closeQuote}
                aria-label="Close quote form"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#eef3f8] text-brand-navy transition hover:bg-brand-green hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5 sm:p-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-brand-navy">
                  Name
                  <input
                    required
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-brand-green focus:ring-4 focus:ring-brand-green/15"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-brand-navy">
                  Phone
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-brand-green focus:ring-4 focus:ring-brand-green/15"
                    placeholder="10-digit mobile number"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-brand-navy">
                  Location
                  <input
                    required
                    value={form.location}
                    onChange={(e) => updateField("location", e.target.value)}
                    className="rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-brand-green focus:ring-4 focus:ring-brand-green/15"
                    placeholder="City / area"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-brand-navy">
                  Service Required
                  <select
                    value={form.service}
                    onChange={(e) => updateField("service", e.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-brand-green focus:ring-4 focus:ring-brand-green/15"
                  >
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold text-brand-navy sm:col-span-2">
                  Property Type
                  <select
                    value={form.propertyType}
                    onChange={(e) => updateField("propertyType", e.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-brand-green focus:ring-4 focus:ring-brand-green/15"
                  >
                    {propertyTypes.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold text-brand-navy sm:col-span-2">
                  Message
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    className="resize-y rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-brand-green focus:ring-4 focus:ring-brand-green/15"
                    placeholder="Tell us about your roof space, monthly bill, or any special requirement"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-sm leading-6 text-slate-500">
                  Submitting opens WhatsApp with your quote details pre-filled.
                </p>
                <button
                  type="submit"
                  className="inline-flex h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#2cb673] px-8 text-sm font-bold text-white shadow-[0_8px_22px_rgba(44,182,115,0.5)] transition hover:bg-[#24a85f] hover:shadow-[0_10px_26px_rgba(44,182,115,0.6)]"
                >
                  Send on WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </QuoteModalContext.Provider>
  );
}
