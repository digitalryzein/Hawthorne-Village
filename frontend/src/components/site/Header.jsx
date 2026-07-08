import { useState, useEffect } from "react";
import { Menu, Phone, X, Calendar, AlertTriangle } from "lucide-react";
import { clinic } from "@/lib/site-data";

// Anchors are prefixed with the app root so they also work from inner pages
// (e.g. /services/root-canal-therapy), not just the homepage.
const HOME = `${process.env.PUBLIC_URL}/`;

const navLinks = [
  { href: `${HOME}#services`, label: "Services" },
  { href: `${HOME}#dentist`, label: "Dr. Sarna" },
  { href: `${HOME}#technology`, label: "Technology" },
  { href: `${HOME}#reviews`, label: "Reviews" },
  { href: `${HOME}#faq`, label: "FAQ" },
  { href: `${HOME}#contact`, label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Emergency banner */}
      <div data-testid="emergency-banner" className="bg-[#0A192F] text-white text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-9 md:h-10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <AlertTriangle className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
            <span className="truncate">Dental emergency? Walk-ins welcome, same-day appointments available.</span>
          </div>
          <a
            data-testid="emergency-call-link"
            href={clinic.phoneHref}
            className="hidden sm:inline-flex items-center gap-1.5 font-medium hover:text-[#7DD3FC] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" /> {clinic.phone}
          </a>
        </div>
      </div>

      {/* Main header */}
      <header
        data-testid="site-header"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
            : "bg-white/60 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href={`${HOME}#top`} data-testid="site-logo" className="flex items-center group">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="Hawthorne Village Dental Care logo"
              className="h-9 md:h-11 w-auto object-contain"
            />
          </a>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-${l.label.toLowerCase().replace(/\s|\./g, "-")}`}
                className="text-sm font-medium text-[#334155] hover:text-[#0A192F] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={clinic.phoneHref}
              data-testid="header-call-link"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[#0A192F] hover:text-[#2563EB] transition-colors px-3 py-2"
            >
              <Phone className="w-4 h-4" /> {clinic.phone}
            </a>
            <a
              data-testid="header-book-btn"
              href={clinic.bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white h-10 md:h-11 px-4 md:px-6 font-medium text-sm shadow-[0_4px_14px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-4 h-4 mr-1.5" /> Book Appointment
            </a>
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden ml-1 p-2 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <div data-testid="mobile-menu" className="lg:hidden border-t border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[15px] font-medium text-[#334155] py-2.5 border-b border-slate-100 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={clinic.phoneHref}
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#2563EB]"
              >
                <Phone className="w-4 h-4" /> {clinic.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
