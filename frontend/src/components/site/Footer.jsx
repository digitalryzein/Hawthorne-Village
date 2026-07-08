import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { clinic } from "@/lib/site-data";

const links = [
  { label: "Services", href: "#services" },
  { label: "Dr. Sarna", href: "#dentist" },
  { label: "Technology", href: "#technology" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Visit Us", href: "#visit" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-slate-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        {/* Top row */}
        <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-10 items-center pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-white to-[#7DD3FC] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#0A192F]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5.5c-2-2-5-2-6.5 0-1.5 2-1 6 0 9s3 5 3 5c1 0 1.5-1.5 2-3 .5-1.5 1-2.5 1.5-2.5s1 1 1.5 2.5c.5 1.5 1 3 2 3 0 0 2-2 3-5s1.5-7 0-9c-1.5-2-4.5-2-6.5 0z" />
              </svg>
            </div>
            <div>
              <div className="font-display text-lg text-white leading-tight">Hawthorne Village Dental Care</div>
              <div className="text-[13px] text-slate-400">Your family dentist in Milton, Ontario</div>
            </div>
          </div>

          {/* CTA */}
          <a
            data-testid="footer-book-btn"
            href={clinic.bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 h-12 rounded-full bg-white text-[#0A192F] hover:bg-[#E6F8F3] pl-6 pr-1.5 py-1.5 text-[14.5px] font-medium transition-colors"
          >
            Book Appointment
            <span className="w-9 h-9 rounded-full bg-[#0284C7] text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
            </span>
          </a>
        </div>

        {/* Contact + links */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 py-12 border-b border-white/10">
          {/* Contact */}
          <div className="space-y-3.5 text-[14.5px] text-slate-300">
            <a href={clinic.phoneHref} className="flex items-center gap-3 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-[#7DD3FC]" /> {clinic.phone}
            </a>
            <a href={`mailto:${clinic.email}`} className="flex items-center gap-3 hover:text-white transition-colors break-all">
              <Mail className="w-4 h-4 text-[#7DD3FC] shrink-0" /> {clinic.email}
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-[#7DD3FC] shrink-0" />
              <span>10220 Derry Rd #206, Milton, ON L9T 7J3</span>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 md:col-span-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[14.5px] text-slate-300 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex md:justify-end items-start gap-2">
            {[Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label={["Instagram", "Facebook"][i]}
                data-testid={`footer-social-${i}`}
                className="w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Icon className="w-4 h-4" strokeWidth={1.75} />
              </a>
            ))}
            <a
              href="https://g.page/r/hawthorne-village-dental-care"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-1.5 h-10 rounded-full bg-white/8 hover:bg-white/15 text-slate-300 hover:text-white px-4 text-[13px] transition-colors"
            >
              Google Reviews →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-slate-500">
          <div>© {new Date().getFullYear()} Hawthorne Village Dental Care</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
