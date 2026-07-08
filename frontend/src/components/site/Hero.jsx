import { Star, Phone, Calendar, ShieldCheck, MapPin } from "lucide-react";
import { clinic } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

export default function Hero() {
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section
      data-testid="hero-section"
      id="top"
      className="relative overflow-hidden bg-white"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E6F8F3] blur-3xl opacity-70" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-[#EEF4FF] blur-3xl opacity-80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left copy */}
          <div ref={leftRef} className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 pl-1.5 pr-4 py-1.5 shadow-sm mb-6">
              <span className="flex items-center gap-1 rounded-full bg-[#0A192F] text-white text-[11px] font-semibold px-2 py-0.5">
                <Star className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" /> 4.9
              </span>
              <span className="text-[13px] text-[#334155]">
                Rated by <strong className="font-semibold text-[#0A192F]">480+</strong> Milton families on Google
              </span>
            </div>

            <h1 className="font-display font-medium text-[42px] leading-[1.05] md:text-6xl md:leading-[1.02] text-[#0A192F] tracking-tight">
              Milton&apos;s most trusted dentist{" "}
              <span className="italic font-light text-[#0284C7]">finally</span> makes every visit comfortable.
            </h1>

            <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[#475569] max-w-xl">
              Gentle, modern dental care for children, adults and seniors, with evening hours,
              same-day emergency slots, direct billing and CDCP coverage. Right here on Derry Road, Milton.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                data-testid="hero-book-btn"
                href={clinic.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-12 md:h-14 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 md:px-8 text-[15px] font-medium shadow-[0_8px_24px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-4 h-4 mr-2" /> Book Appointment
              </a>
              <a
                data-testid="hero-call-btn"
                href={clinic.phoneHref}
                className="inline-flex items-center gap-2 h-12 md:h-14 rounded-full bg-white border border-slate-200 px-6 text-[15px] font-medium text-[#0A192F] hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                <Phone className="w-4 h-4" /> {clinic.phone}
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {[
                { k: "10,000+", v: "Happy patients" },
                { k: "15+ yrs", v: "In Milton" },
                { k: "Direct", v: "Insurance billing" },
                { k: "CDCP", v: "Accepted here" },
              ].map((t) => (
                <div key={t.v} data-testid={`hero-trust-${t.v.replace(/\s+/g,"-").toLowerCase()}`} className="text-left">
                  <div className="font-display text-xl md:text-2xl font-semibold text-[#0A192F]">{t.k}</div>
                  <div className="text-xs md:text-[13px] text-[#64748B] mt-0.5">{t.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div ref={rightRef} className="reveal relative">
            <div className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(10,25,47,0.35)] aspect-[4/5] max-h-[620px]">
              <img
                src="https://images.pexels.com/photos/3845808/pexels-photo-3845808.jpeg"
                alt="A friendly Milton dentist chatting with a smiling family patient at Hawthorne Village Dental Care"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/25 via-transparent to-transparent" />
            </div>

            {/* Floating Google rating card */}
            <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#E6F8F3] flex items-center justify-center">
                <Star className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
              </div>
              <div>
                <div className="text-[13px] text-[#64748B]">Google Reviews</div>
                <div className="font-display font-semibold text-[#0A192F]">4.9 · 480+ reviews</div>
              </div>
            </div>

            {/* Floating CDCP card */}
            <div className="hidden md:flex absolute -top-4 -right-4 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100 max-w-[220px]">
              <ShieldCheck className="w-5 h-5 text-[#10B981]" />
              <div className="text-[13px] leading-tight">
                <div className="font-semibold text-[#0A192F]">CDCP accepted</div>
                <div className="text-[#64748B]">Direct billing available</div>
              </div>
            </div>

            {/* Address chip */}
            <div className="md:hidden mt-4 flex items-center gap-2 text-[13px] text-[#64748B]">
              <MapPin className="w-4 h-4" /> 10220 Derry Rd #206, Milton
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
