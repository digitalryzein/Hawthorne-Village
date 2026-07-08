import { useEffect, useState } from "react";
import {
  Phone,
  ChevronRight,
  MapPin,
  Mail,
  Clock,
  Printer,
  Send,
  AlertTriangle,
  Landmark,
  ShieldCheck,
  CreditCard,
} from "lucide-react";
import Header from "@/components/site/Header";
import SocialProof from "@/components/site/SocialProof";
import VisitUs from "@/components/site/VisitUs";
import Footer from "@/components/site/Footer";
import StickyActions from "@/components/site/StickyActions";
import { clinic, insurers } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const PAGE_URL = "https://hawthornevillagedental.ca/contact/";
const FAX = "905-864-3031";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-[#0A192F] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 focus:border-[#2563EB] transition-all";

function PageMeta() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Contact Dental Clinic in Milton, ON - Hawthorne Village Dental Care";

    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    desc?.setAttribute(
      "content",
      "Contact Hawthorne Village Dental Care for full range family dental services. We look forward to meeting you to provide our best dental care in Milton."
    );

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href");
    canonical?.setAttribute("href", PAGE_URL);

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hawthornevillagedental.ca/" },
        { "@type": "ListItem", position: 2, name: "Contact", item: PAGE_URL },
      ],
    };

    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.dataset.jsonld = "hvdc-contact-0";
    s.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(s);

    return () => {
      document.title = prevTitle;
      if (prevDesc) desc?.setAttribute("content", prevDesc);
      if (prevCanonical) canonical?.setAttribute("href", prevCanonical);
      s.remove();
    };
  }, []);

  return null;
}

function Hero() {
  const ref = useReveal();
  return (
    <section data-testid="contact-hero" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E6F8F3] blur-3xl opacity-70" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-[#EEF4FF] blur-3xl opacity-80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-14 md:pt-14 md:pb-16">
        <nav data-testid="contact-breadcrumb" aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-[13px] text-[#64748B]">
          <a href={`${process.env.PUBLIC_URL}/`} className="hover:text-[#0A192F] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0A192F] font-medium">Contact</span>
        </nav>

        <div ref={ref} className="reveal max-w-3xl">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-4">
            Contact Hawthorne Village Dental Care
          </div>
          <h1 className="font-display font-medium text-[38px] leading-[1.06] md:text-[56px] md:leading-[1.03] text-[#0A192F] tracking-tight">
            We're easy <span className="font-light text-[#0284C7]">to reach.</span>
          </h1>
          <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[#475569] max-w-2xl">
            Complete the form below and we will contact you as soon as possible — urgent care is
            usually provided the same day. Prefer to talk? Our front desk answers in under a minute.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactMain() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", phone: "", reason: "Checkup & cleaning", time: "Morning", message: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = `Appointment request from ${form.name} — ${form.reason}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Reason for visit: ${form.reason}`,
      `Best time to be contacted: ${form.time}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${clinic.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const cards = [
    {
      icon: MapPin,
      label: "Address",
      lines: [`${clinic.address.street}`, `${clinic.address.city}, ${clinic.address.region} ${clinic.address.postal}`],
      href: "https://www.google.com/maps/place/10220+Derry+Rd+%23206,+Milton,+ON+L9T+7J3",
      external: true,
    },
    { icon: Phone, label: "Phone", lines: [clinic.phone], href: clinic.phoneHref },
    { icon: Mail, label: "Email", lines: [clinic.email], href: `mailto:${clinic.email}` },
    { icon: Printer, label: "Fax", lines: [FAX] },
  ];

  return (
    <section ref={ref} data-testid="contact-main" className="reveal pb-24 md:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12 items-start">
        {/* Form card */}
        <form
          onSubmit={submit}
          data-testid="contact-form"
          className="rounded-[32px] bg-[#F8FAFC] border border-slate-100 p-8 md:p-10"
        >
          <h2 className="font-display text-2xl md:text-[28px] font-semibold text-[#0A192F] tracking-tight">
            Send us a message
          </h2>
          <p className="mt-2 text-[14.5px] text-[#64748B]">
            Submitting opens your email app with everything filled in — just press send.
          </p>

          <div className="mt-7 grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label htmlFor="c-name" className="block text-[13px] font-medium text-[#334155] mb-1.5">Name *</label>
              <input id="c-name" required value={form.name} onChange={set("name")} className={inputClass} placeholder="Your full name" />
            </div>
            <div>
              <label htmlFor="c-email" className="block text-[13px] font-medium text-[#334155] mb-1.5">Email *</label>
              <input id="c-email" type="email" required value={form.email} onChange={set("email")} className={inputClass} placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="c-phone" className="block text-[13px] font-medium text-[#334155] mb-1.5">Phone *</label>
              <input id="c-phone" type="tel" required value={form.phone} onChange={set("phone")} className={inputClass} placeholder="(905) 000-0000" />
            </div>
            <div>
              <label htmlFor="c-reason" className="block text-[13px] font-medium text-[#334155] mb-1.5">Reason for your visit *</label>
              <select id="c-reason" value={form.reason} onChange={set("reason")} className={inputClass}>
                {["Checkup & cleaning", "Dental emergency", "Dental implants", "Invisalign / braces", "Cosmetic consultation", "New patient visit", "Other"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="c-time" className="block text-[13px] font-medium text-[#334155] mb-1.5">Best time to contact you *</label>
              <select id="c-time" value={form.time} onChange={set("time")} className={inputClass}>
                {["Morning", "Afternoon", "Evening"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="c-msg" className="block text-[13px] font-medium text-[#334155] mb-1.5">Message</label>
              <textarea id="c-msg" rows={4} value={form.message} onChange={set("message")} className={inputClass} placeholder="Tell us a little about what you need…" />
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              data-testid="contact-submit-btn"
              className="inline-flex items-center gap-2 h-12 md:h-13 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 text-[15px] font-medium shadow-[0_8px_24px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 transition-all"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
            <span className="text-[13px] text-[#94A3B8]">
              Or book directly online — it takes 60 seconds.
            </span>
          </div>
        </form>

        {/* Contact cards */}
        <div className="grid gap-4">
          {cards.map((c) => {
            const Wrapper = c.href ? "a" : "div";
            return (
              <Wrapper
                key={c.label}
                {...(c.href ? { href: c.href, ...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {}) } : {})}
                data-testid={`contact-card-${c.label.toLowerCase()}`}
                className="rounded-[24px] bg-white border border-slate-100 p-6 shadow-[0_10px_40px_-20px_rgba(10,25,47,0.12)] hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.18)] hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4"
              >
                <span className="w-11 h-11 rounded-2xl bg-[#E6F8F3] text-[#0284C7] flex items-center justify-center shrink-0">
                  <c.icon className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <div>
                  <div className="text-[11.5px] uppercase tracking-[0.14em] text-[#94A3B8] font-medium">{c.label}</div>
                  {c.lines.map((l) => (
                    <div key={l} className="mt-0.5 font-display text-[16.5px] font-medium text-[#0A192F] break-all">{l}</div>
                  ))}
                </div>
              </Wrapper>
            );
          })}

          {/* Hours card */}
          <div data-testid="contact-card-hours" className="rounded-[24px] bg-white border border-slate-100 p-6 shadow-[0_10px_40px_-20px_rgba(10,25,47,0.12)]">
            <div className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-2xl bg-[#E6F8F3] text-[#0284C7] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <div className="flex-1">
                <div className="text-[11.5px] uppercase tracking-[0.14em] text-[#94A3B8] font-medium mb-2">Office hours</div>
                <ul className="space-y-1.5 text-[14px] text-[#334155]">
                  {[
                    ["Mon – Thu", "10 AM – 7 PM"],
                    ["Friday", "9 AM – 6 PM"],
                    ["Saturday", "9 AM – 2 PM"],
                    ["Sunday", "Closed"],
                  ].map(([d, t]) => (
                    <li key={d} className="flex justify-between gap-4">
                      <span>{d}</span>
                      <span className={t === "Closed" ? "text-[#94A3B8]" : "text-[#64748B]"}>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmergencyAndInsurance() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="contact-extra" className="reveal py-24 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-6">
        {/* Emergency */}
        <div className="rounded-[32px] bg-[#0A192F] text-white p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#0284C7]/20 blur-3xl pointer-events-none" />
          <div className="relative">
            <span className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-[#F59E0B]" strokeWidth={1.75} />
            </span>
            <h2 className="mt-5 font-display text-2xl md:text-[28px] font-semibold tracking-tight">
              Dental emergency?
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/70 max-w-md">
              Walk-ins are welcome and we hold same-day emergency slots every weekday for pain,
              swelling and broken teeth. Urgent care is usually provided the same day — call and
              follow the after-hours prompt outside office hours.
            </p>
            <a
              href={clinic.phoneHref}
              data-testid="contact-emergency-call"
              className="mt-6 inline-flex items-center gap-2 h-12 rounded-full bg-white text-[#0A192F] px-7 text-[15px] font-medium hover:bg-[#E6F8F3] transition-colors"
            >
              <Phone className="w-4 h-4" /> {clinic.phone}
            </a>
          </div>
        </div>

        {/* Insurance */}
        <div className="rounded-[32px] bg-[#E6F8F3] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-white/40 blur-3xl pointer-events-none" />
          <div className="relative">
            <span className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
              <Landmark className="w-6 h-6 text-[#0284C7]" strokeWidth={1.75} />
            </span>
            <h2 className="mt-5 font-display text-2xl md:text-[28px] font-semibold text-[#0A192F] tracking-tight">
              Direct billing & insurance
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#334155] max-w-md">
              We bill almost every major Canadian insurer directly — no paperwork, no reimbursement
              wait — and we're a participating CDCP provider.
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {insurers.slice(0, 8).map((i) => (
                <span key={i} className="rounded-full bg-white/80 border border-white px-3 py-1 text-[12px] font-medium text-[#0A192F]">
                  {i}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[13.5px] text-[#334155]">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#10B981]" /> CDCP accepted</span>
              <span className="inline-flex items-center gap-1.5"><CreditCard className="w-4 h-4 text-[#0284C7]" /> 0% financing over 6–24 months</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="contact-page" className="min-h-screen bg-white text-[#1E293B]">
      <PageMeta />
      <Header />
      <main>
        <Hero />
        <ContactMain />
        <EmergencyAndInsurance />
        <SocialProof />
        <VisitUs />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
