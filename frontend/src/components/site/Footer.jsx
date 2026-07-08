import { Phone, Instagram, Facebook, Star, ArrowUpRight, Navigation } from "lucide-react";
import { clinic } from "@/lib/site-data";

const directionsUrl =
  "https://www.google.com/maps/place/10220+Derry+Rd+%23206,+Milton,+ON+L9T+7J3";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Dr. Sarna", href: "#dentist" },
  { label: "Technology", href: "#technology" },
  { label: "Reviews", href: "#reviews" },
  { label: "Smile Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "New Patients", href: "#new-patients" },
  { label: "Visit Us", href: "#visit" },
];

export default function Footer() {
  return (
    <footer className="bg-[#F4F7FB]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        {/* Editorial statement row */}
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-12 lg:gap-20 items-end pb-14 md:pb-16 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1.5 shadow-sm mb-6">
              <span className="flex items-center gap-1 rounded-full bg-[#0A192F] text-white text-[11px] font-semibold px-2 py-0.5">
                <Star className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" /> 4.9
              </span>
              <span className="text-[13px] text-[#334155]">
                Rated by <strong className="font-semibold text-[#0A192F]">480+</strong> Milton families
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-[#0A192F]">
              See you soon,{" "}
              <span className="italic font-light text-[#0284C7]">Milton.</span>
            </h2>

            <p className="mt-5 text-[16px] text-[#475569] max-w-lg leading-relaxed">
              Book online in 60 seconds, drop by our Derry Road clinic, or give us a call.
              Our team answers in under a minute.
            </p>
          </div>

          {/* Action column */}
          <div className="grid gap-3 md:justify-self-end w-full md:w-auto">
            <a
              data-testid="footer-book-btn"
              href={clinic.bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-4 rounded-2xl bg-[#0A192F] text-white pl-6 pr-2 py-3 min-w-[280px] hover:bg-[#111c36] hover:-translate-y-0.5 transition-all"
            >
              <span className="font-display text-[17px]">Book Appointment</span>
              <span className="w-11 h-11 rounded-xl bg-[#2563EB] group-hover:rotate-45 transition-transform duration-500 flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5" strokeWidth={2.25} />
              </span>
            </a>
            <a
              data-testid="footer-call-btn"
              href={clinic.phoneHref}
              className="group inline-flex items-center justify-between gap-4 rounded-2xl bg-white border border-slate-200 text-[#0A192F] pl-6 pr-2 py-3 min-w-[280px] hover:border-slate-300 hover:-translate-y-0.5 transition-all"
            >
              <span className="font-display text-[17px]">{clinic.phone}</span>
              <span className="w-11 h-11 rounded-xl bg-[#E6F8F3] text-[#0284C7] flex items-center justify-center">
                <Phone className="w-4 h-4" strokeWidth={2} />
              </span>
            </a>
            <a
              data-testid="footer-directions-btn"
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-4 rounded-2xl bg-white border border-slate-200 text-[#0A192F] pl-6 pr-2 py-3 min-w-[280px] hover:border-slate-300 hover:-translate-y-0.5 transition-all"
            >
              <span className="font-display text-[17px]">Get directions</span>
              <span className="w-11 h-11 rounded-xl bg-[#E6F8F3] text-[#0284C7] flex items-center justify-center">
                <Navigation className="w-4 h-4" strokeWidth={2} />
              </span>
            </a>
          </div>
        </div>

        {/* Info grid */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 py-12 md:py-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0A192F] to-[#0284C7] flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5.5c-2-2-5-2-6.5 0-1.5 2-1 6 0 9s3 5 3 5c1 0 1.5-1.5 2-3 .5-1.5 1-2.5 1.5-2.5s1 1 1.5 2.5c.5 1.5 1 3 2 3 0 0 2-2 3-5s1.5-7 0-9c-1.5-2-4.5-2-6.5 0z" />
                </svg>
              </div>
              <div>
                <div className="font-display font-semibold text-[#0A192F] text-[17px] leading-tight">
                  Hawthorne Village
                </div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-[#64748B]">
                  Dental Care · Milton
                </div>
              </div>
            </div>
            <p className="text-[14.5px] text-[#475569] leading-relaxed max-w-[280px]">
              A trusted dentist in Milton, Ontario since 2010. Gentle, modern care
              for children, adults and seniors on Derry Road.
            </p>
          </div>

          {/* Hours */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.14em] text-[#94A3B8] font-medium mb-4">
              Open this week
            </div>
            <ul className="text-[14.5px] text-[#334155] space-y-2">
              <li className="flex justify-between gap-4"><span>Mon – Thu</span><span className="text-[#64748B]">10 AM – 7 PM</span></li>
              <li className="flex justify-between gap-4"><span>Friday</span><span className="text-[#64748B]">9 AM – 6 PM</span></li>
              <li className="flex justify-between gap-4"><span>Saturday</span><span className="text-[#64748B]">9 AM – 2 PM</span></li>
              <li className="flex justify-between gap-4"><span>Sunday</span><span className="text-[#94A3B8]">Closed</span></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.14em] text-[#94A3B8] font-medium mb-4">
              Explore
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-[14.5px]">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[#334155] hover:text-[#0A192F] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-[13px] text-[#64748B]">
            © {new Date().getFullYear()} Hawthorne Village Dental Care · Milton, ON
          </div>

          <div className="flex items-center gap-2">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                data-testid={`footer-social-${label.toLowerCase()}`}
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-[#334155] hover:text-[#0A192F] hover:border-slate-300 flex items-center justify-center transition-colors"
              >
                <Icon className="w-4 h-4" strokeWidth={1.75} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5 text-[13px] text-[#64748B]">
            <a href="#" className="hover:text-[#0A192F] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#0A192F] transition-colors">Accessibility</a>
            <a href="/sitemap.xml" className="hover:text-[#0A192F] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
