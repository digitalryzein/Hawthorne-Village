import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowUpRight } from "lucide-react";
import { clinic } from "@/lib/site-data";

const services = [
  { label: "Dental Implants", href: "#services" },
  { label: "Invisalign", href: "#services" },
  { label: "Emergency Dentistry", href: "#services" },
  { label: "Children's Dentistry", href: "#services" },
  { label: "Cosmetic Dentistry", href: "#services" },
  { label: "Root Canal", href: "#services" },
  { label: "Same-Day Crowns", href: "#services" },
  { label: "Teeth Whitening", href: "#services" },
];

const explore = [
  { label: "About Dr. Sarna", href: "#dentist" },
  { label: "Technology", href: "#technology" },
  { label: "Patient Reviews", href: "#reviews" },
  { label: "Smile Gallery", href: "#gallery" },
  { label: "New Patients", href: "#new-patients" },
  { label: "Insurance & CDCP", href: "#insurance" },
  { label: "FAQ", href: "#faq" },
  { label: "Visit Us", href: "#visit" },
];

const socials = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "YouTube", href: "#", Icon: Youtube },
];

const nearby = [
  "Hawthorne Village", "Beaty", "Clarke", "Ford", "Coates",
  "Willmott", "Bronte Meadows", "Campbellville", "Mississauga",
  "Oakville", "Burlington", "Georgetown",
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0A192F] text-slate-300 overflow-hidden">
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] rounded-full bg-[#0284C7]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-20 md:pt-24 pb-10">
        {/* Big brand block + closing CTA */}
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-end pb-14 md:pb-20 border-b border-white/10">
          <div>
            <div className="text-[12px] uppercase tracking-[0.24em] text-[#7DD3FC] font-medium mb-5">
              Milton · Ontario · Since 2010
            </div>
            <div className="font-display text-5xl md:text-7xl lg:text-[92px] leading-[0.95] tracking-tight text-white">
              Hawthorne <span className="italic font-light text-[#7DD3FC]">Village</span>
              <br />
              Dental Care
            </div>
          </div>
          <div className="md:justify-self-end w-full md:w-auto">
            <p className="text-[15px] text-slate-400 max-w-sm leading-relaxed mb-6">
              Ready for a healthier, brighter smile? Book online in 60 seconds or give us a call —
              we&apos;d love to meet you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                data-testid="footer-book-btn"
                href={clinic.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 h-12 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 text-[14.5px] font-medium hover:-translate-y-0.5 transition-all shadow-[0_8px_24px_rgba(37,99,235,0.45)]"
              >
                Book Appointment
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </a>
              <a
                data-testid="footer-call-btn"
                href={clinic.phoneHref}
                className="inline-flex items-center gap-2 h-12 rounded-full bg-white/8 border border-white/15 hover:bg-white/12 text-white px-6 text-[14.5px] font-medium transition-colors"
              >
                <Phone className="w-4 h-4" /> {clinic.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Info grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pt-14 pb-14 border-b border-white/10">
          {/* Visit */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.14em] text-[#7DD3FC] font-medium mb-5">
              Visit
            </div>
            <address className="not-italic space-y-4 text-[14px] text-slate-300 leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                <span>
                  10220 Derry Rd #206<br />
                  Milton, ON L9T 7J3
                </span>
              </div>
              <a href={clinic.phoneHref} className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-slate-400" />
                {clinic.phone}
              </a>
              <a href={`mailto:${clinic.email}`} className="flex items-center gap-3 hover:text-white transition-colors break-all">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                {clinic.email}
              </a>
            </address>
          </div>

          {/* Hours */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.14em] text-[#7DD3FC] font-medium mb-5">
              Hours
            </div>
            <ul className="text-[14px] text-slate-300 space-y-2.5">
              <li className="flex justify-between gap-3"><span>Mon – Thu</span><span className="text-slate-400">10 AM – 7 PM</span></li>
              <li className="flex justify-between gap-3"><span>Friday</span><span className="text-slate-400">9 AM – 6 PM</span></li>
              <li className="flex justify-between gap-3"><span>Saturday</span><span className="text-slate-400">9 AM – 2 PM</span></li>
              <li className="flex justify-between gap-3"><span>Sunday</span><span className="text-slate-500">Closed</span></li>
            </ul>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1 text-[11.5px] text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              Same-day emergencies daily
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.14em] text-[#7DD3FC] font-medium mb-5">
              Services
            </div>
            <ul className="grid grid-cols-1 gap-y-2.5 text-[14px]">
              {services.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-slate-300 hover:text-white transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.14em] text-[#7DD3FC] font-medium mb-5">
              Explore
            </div>
            <ul className="grid grid-cols-1 gap-y-2.5 text-[14px]">
              {explore.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-slate-300 hover:text-white transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Neighbourhoods strip */}
        <div className="pt-10 pb-8 border-b border-white/10">
          <div className="text-[11px] uppercase tracking-[0.14em] text-slate-500 font-medium mb-3">
            Serving families across
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-slate-400">
            {nearby.map((n, i) => (
              <span key={n} className="flex items-center gap-4">
                <span>{n}</span>
                {i < nearby.length - 1 && <span className="text-slate-600">·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 text-[13px]">
          <div className="text-slate-500">
            © {new Date().getFullYear()} Hawthorne Village Dental Care. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                data-testid={`footer-social-${label.toLowerCase()}`}
                className="w-9 h-9 rounded-full bg-white/8 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Icon className="w-4 h-4" strokeWidth={1.75} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5 text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
