import { useState, useEffect } from "react";
import { Menu, Phone, X, Calendar, AlertTriangle, ChevronDown, ChevronRight } from "lucide-react";
import { clinic, services } from "@/lib/site-data";
import { technologies } from "@/lib/technology-data";

// Anchors are prefixed with the app root so they also work from inner pages
// (e.g. /services/root-canal-therapy), not just the homepage.
const HOME = `${process.env.PUBLIC_URL}/`;

const aboutLinks = [
  { href: `${HOME}our-team`, label: "Our Team" },
  { href: `${HOME}dr-sarna`, label: "Dr. Sarna" },
  { href: `${HOME}patient-forms`, label: "Patient Forms" },
];

const navLinks = [
  { href: `${HOME}blog`, label: "Blog" },
  { href: `${HOME}#reviews`, label: "Reviews" },
  { href: `${HOME}#faq`, label: "FAQ" },
  { href: `${HOME}contact`, label: "Contact" },
];

// Services with their own page link there; the rest point at the services rail.
const serviceHref = (s) => (s.href ? `${process.env.PUBLIC_URL}${s.href}` : `${HOME}#services`);
const techHref = (t) => `${process.env.PUBLIC_URL}${t.href}`;

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
            {/* About dropdown */}
            <div className="relative group">
              <a
                href={`${HOME}our-team`}
                data-testid="nav-about"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#334155] hover:text-[#0A192F] transition-colors py-2"
              >
                About
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </a>

              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-200">
                <div
                  data-testid="about-dropdown"
                  className="w-[240px] rounded-[24px] bg-white border border-slate-100 shadow-[0_30px_80px_-20px_rgba(10,25,47,0.25)] p-4"
                >
                  <div className="grid gap-0.5">
                    {aboutLinks.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        data-testid={`dropdown-about-${l.label.replace(/[^a-z]+/gi, "-").toLowerCase()}`}
                        className="group/item flex items-center gap-2 rounded-xl px-3 py-2 text-[13.5px] text-[#334155] hover:bg-[#F1F7FD] hover:text-[#0A192F] transition-colors"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-[#0284C7] shrink-0 group-hover/item:translate-x-0.5 transition-transform" />
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Services dropdown */}
            <div className="relative group">
              <a
                href={`${HOME}#services`}
                data-testid="nav-services"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#334155] hover:text-[#0A192F] transition-colors py-2"
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </a>

              {/* Hover panel (pt-3 bridges the hover gap between trigger and panel) */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-200">
                <div
                  data-testid="services-dropdown"
                  className="w-[620px] rounded-[24px] bg-white border border-slate-100 shadow-[0_30px_80px_-20px_rgba(10,25,47,0.25)] p-5"
                >
                  <div className="px-3 pb-3 mb-2 border-b border-slate-100 flex items-baseline justify-between">
                    <span className="text-[11px] uppercase tracking-[0.14em] text-[#94A3B8] font-medium">
                      Our services
                    </span>
                    <a href={`${HOME}#services`} className="text-[12px] font-medium text-[#0284C7] hover:text-[#0A192F] transition-colors">
                      View all
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                    {services.map((s) => (
                      <a
                        key={s.name}
                        href={serviceHref(s)}
                        data-testid={`dropdown-${s.name.replace(/[^a-z]+/gi, "-").toLowerCase()}`}
                        className="group/item flex items-center gap-2 rounded-xl px-3 py-2 text-[13.5px] text-[#334155] hover:bg-[#F1F7FD] hover:text-[#0A192F] transition-colors"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-[#0284C7] shrink-0 group-hover/item:translate-x-0.5 transition-transform" />
                        {s.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Technology dropdown */}
            <div className="relative group">
              <a
                href={`${HOME}technology`}
                data-testid="nav-technology"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#334155] hover:text-[#0A192F] transition-colors py-2"
              >
                Technology
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </a>

              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-200">
                <div
                  data-testid="technology-dropdown"
                  className="w-[560px] rounded-[24px] bg-white border border-slate-100 shadow-[0_30px_80px_-20px_rgba(10,25,47,0.25)] p-5"
                >
                  <div className="px-3 pb-3 mb-2 border-b border-slate-100 flex items-baseline justify-between">
                    <span className="text-[11px] uppercase tracking-[0.14em] text-[#94A3B8] font-medium">
                      Our technology
                    </span>
                    <a href={`${HOME}technology`} className="text-[12px] font-medium text-[#0284C7] hover:text-[#0A192F] transition-colors">
                      View all
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                    {technologies.map((t) => (
                      <a
                        key={t.name}
                        href={techHref(t)}
                        data-testid={`dropdown-tech-${t.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}
                        className="group/item flex items-center gap-2 rounded-xl px-3 py-2 text-[13.5px] text-[#334155] hover:bg-[#F1F7FD] hover:text-[#0A192F] transition-colors"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-[#0284C7] shrink-0 group-hover/item:translate-x-0.5 transition-transform" />
                        {t.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

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
          <div data-testid="mobile-menu" className="lg:hidden border-t border-slate-100 bg-white max-h-[70vh] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {/* About collapsible */}
              <details className="border-b border-slate-100">
                <summary
                  data-testid="mobile-about-toggle"
                  className="flex items-center justify-between text-[15px] font-medium text-[#334155] py-2.5 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
                >
                  About
                  <ChevronDown className="w-4 h-4 text-[#64748B]" />
                </summary>
                <div className="grid gap-x-3 pb-3">
                  {aboutLinks.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-1.5 py-1.5 text-[13.5px] text-[#475569]"
                    >
                      <ChevronRight className="w-3 h-3 text-[#0284C7] shrink-0" />
                      {l.label}
                    </a>
                  ))}
                </div>
              </details>

              {/* Services collapsible */}
              <details className="border-b border-slate-100">
                <summary
                  data-testid="mobile-services-toggle"
                  className="flex items-center justify-between text-[15px] font-medium text-[#334155] py-2.5 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
                >
                  Services
                  <ChevronDown className="w-4 h-4 text-[#64748B]" />
                </summary>
                <div className="grid grid-cols-2 gap-x-3 pb-3">
                  {services.map((s) => (
                    <a
                      key={s.name}
                      href={serviceHref(s)}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-1.5 py-1.5 text-[13.5px] text-[#475569]"
                    >
                      <ChevronRight className="w-3 h-3 text-[#0284C7] shrink-0" />
                      {s.name}
                    </a>
                  ))}
                </div>
              </details>

              {/* Technology collapsible */}
              <details className="border-b border-slate-100">
                <summary
                  data-testid="mobile-technology-toggle"
                  className="flex items-center justify-between text-[15px] font-medium text-[#334155] py-2.5 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
                >
                  Technology
                  <ChevronDown className="w-4 h-4 text-[#64748B]" />
                </summary>
                <div className="grid grid-cols-2 gap-x-3 pb-3">
                  <a
                    href={`${HOME}technology`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-1.5 py-1.5 text-[13.5px] font-medium text-[#0284C7] col-span-2"
                  >
                    <ChevronRight className="w-3 h-3 shrink-0" />
                    Technology overview
                  </a>
                  {technologies.map((t) => (
                    <a
                      key={t.name}
                      href={techHref(t)}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-1.5 py-1.5 text-[13.5px] text-[#475569]"
                    >
                      <ChevronRight className="w-3 h-3 text-[#0284C7] shrink-0" />
                      {t.name}
                    </a>
                  ))}
                </div>
              </details>

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
