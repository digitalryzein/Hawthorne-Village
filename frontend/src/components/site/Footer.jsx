import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { clinic } from "@/lib/site-data";

const cols = {
  services: [
    "Dental Implants", "Invisalign", "Emergency Dentistry", "Children's Dentistry",
    "Cosmetic Dentistry", "Root Canal", "Same-Day Crowns", "Teeth Whitening",
  ],
  quick: [
    { label: "About", href: "#dentist" },
    { label: "Technology", href: "#technology" },
    { label: "Patient Reviews", href: "#reviews" },
    { label: "Smile Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-slate-300 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-white to-[#7DD3FC] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#0A192F]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5.5c-2-2-5-2-6.5 0-1.5 2-1 6 0 9s3 5 3 5c1 0 1.5-1.5 2-3 .5-1.5 1-2.5 1.5-2.5s1 1 1.5 2.5c.5 1.5 1 3 2 3 0 0 2-2 3-5s1.5-7 0-9c-1.5-2-4.5-2-6.5 0z"/>
              </svg>
            </div>
            <div>
              <div className="font-display font-semibold text-white text-[17px] leading-tight">Hawthorne Village</div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400">Dental Care · Milton</div>
            </div>
          </div>
          <p className="text-[14px] leading-relaxed text-slate-400">
            Modern, gentle family dentistry serving Milton, Hawthorne Village and the Halton Region since 2010.
          </p>
        </div>

        {/* Services */}
        <div>
          <div className="font-display font-semibold text-white mb-5">Popular Services</div>
          <ul className="space-y-2.5">
            {cols.services.map((s) => (
              <li key={s}>
                <a href="#services" className="text-[14px] text-slate-400 hover:text-white transition-colors">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <div className="font-display font-semibold text-white mb-5">Explore</div>
          <ul className="space-y-2.5">
            {cols.quick.map((q) => (
              <li key={q.label}>
                <a href={q.href} className="text-[14px] text-slate-400 hover:text-white transition-colors">{q.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="font-display font-semibold text-white mb-5">Visit us</div>
          <ul className="space-y-3 text-[14px] text-slate-300">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 text-[#7DD3FC] shrink-0" />
              <span>10220 Derry Rd #206<br />Milton, ON L9T 7J3</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#7DD3FC] shrink-0" />
              <a href={clinic.phoneHref} className="hover:text-white">{clinic.phone}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#7DD3FC] shrink-0" />
              <a href={`mailto:${clinic.email}`} className="hover:text-white break-all">{clinic.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 mt-0.5 text-[#7DD3FC] shrink-0" />
              <div className="text-slate-400 text-[13px] leading-relaxed">
                Mon–Thu 10 AM – 7 PM<br />
                Fri 9 AM – 6 PM · Sat 9 AM – 2 PM
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-slate-500">
        <div>© {new Date().getFullYear()} Hawthorne Village Dental Care. All rights reserved.</div>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          <span className="text-slate-600">Serving Milton, Hawthorne Village & Halton Region</span>
        </div>
      </div>
    </footer>
  );
}
