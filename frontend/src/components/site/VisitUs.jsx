import { MapPin, Phone, Mail, Clock, ArrowUpRight, Navigation } from "lucide-react";
import { clinic } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const directionsUrl =
  "https://www.google.com/maps/place/10220+Derry+Rd+%23206,+Milton,+ON+L9T+7J3/@43.5286418,-79.8392422,17z/data=!4m13!1m7!3m6!1s0x882b6f29c581f29b:0x4d3bf41b39da4397!2s10220+Derry+Rd+%23206,+Milton,+ON+L9T+7J3!3b1!8m2!3d43.5286418!4d-79.8370535!3m4!1s0x882b6f29c581f29b:0x4d3bf41b39da4397!8m2!3d43.5286418!4d-79.8370535";

const embedUrl =
  "https://maps.google.com/maps?q=10220%20Derry%20Rd%20%23206%20Milton%20ON&t=&z=15&ie=UTF8&iwloc=&output=embed";

export default function VisitUs() {
  const ref = useReveal();
  const today = new Date().toLocaleDateString("en-CA", { weekday: "long" });

  return (
    <section
      id="visit"
      ref={ref}
      data-testid="visit-section"
      className="reveal py-24 md:py-32 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
              Visit our Milton dental clinic
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
              We&apos;re right here, <span className="italic font-light text-[#64748B]">on Derry Road.</span>
            </h2>
          </div>
          <p className="text-[16px] text-[#64748B] max-w-md">
            Free parking, ground-floor accessibility and easy access from anywhere
            in Milton, Hawthorne Village, Beaty, Bronte Meadows and beyond, so this dentist office is never far from home.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-6 md:gap-8">
          {/* Details */}
          <div className="rounded-[28px] bg-white border border-slate-100 p-8 md:p-10 flex flex-col">
            {/* Address */}
            <div className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-2xl bg-[#E6F8F3] text-[#0284C7] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <div>
                <div className="text-[12px] uppercase tracking-[0.14em] text-[#64748B] font-medium">Address</div>
                <div className="mt-1 font-display text-lg text-[#0A192F] leading-snug">
                  {clinic.address.street}<br />
                  {clinic.address.city}, {clinic.address.region} {clinic.address.postal}
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.14em] text-[#64748B] font-medium">
                  <Phone className="w-3.5 h-3.5" /> Phone
                </div>
                <a
                  href={clinic.phoneHref}
                  className="mt-1.5 font-display text-lg text-[#0A192F] hover:text-[#2563EB] transition-colors block"
                >
                  {clinic.phone}
                </a>
              </div>
              <div>
                <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.14em] text-[#64748B] font-medium">
                  <Mail className="w-3.5 h-3.5" /> Email
                </div>
                <a
                  href={`mailto:${clinic.email}`}
                  className="mt-1.5 font-display text-[15px] text-[#0A192F] hover:text-[#2563EB] transition-colors block break-all"
                >
                  {clinic.email}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-8">
              <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.14em] text-[#64748B] font-medium mb-3">
                <Clock className="w-3.5 h-3.5" /> Hours
              </div>
              <ul className="divide-y divide-slate-100">
                {clinic.hours.map((h) => {
                  const isToday = h.day === today;
                  return (
                    <li
                      key={h.day}
                      data-testid={`hours-${h.day.toLowerCase()}`}
                      className={`flex items-center justify-between py-2.5 text-[14.5px] ${
                        isToday ? "text-[#0A192F] font-medium" : "text-[#475569]"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {h.day}
                        {isToday && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#E6F8F3] text-[#0284C7] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                            <span className="w-1 h-1 rounded-full bg-[#10B981]" />
                            Today
                          </span>
                        )}
                      </span>
                      <span className={h.time === "Closed" ? "text-[#94A3B8]" : ""}>{h.time}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* CTAs */}
            <div className="mt-auto pt-8 flex flex-wrap gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="visit-directions-btn"
                className="inline-flex items-center gap-2 h-12 rounded-full bg-[#0A192F] hover:bg-[#111c36] text-white px-6 text-[14.5px] font-medium transition-all hover:-translate-y-0.5"
              >
                <Navigation className="w-4 h-4" /> Get directions
              </a>
              <a
                href={clinic.phoneHref}
                data-testid="visit-call-btn"
                className="inline-flex items-center gap-2 h-12 rounded-full bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-6 text-[14.5px] font-medium text-[#0A192F] transition-all"
              >
                <Phone className="w-4 h-4" /> Call clinic
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative rounded-[28px] overflow-hidden bg-white border border-slate-100 min-h-[420px] lg:min-h-[520px]">
            <iframe
              title="Hawthorne Village Dental Care, 10220 Derry Rd #206, Milton, ON"
              src={embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0 grayscale-[15%]"
              allowFullScreen
            />
            {/* Floating pin card */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="visit-map-card"
              className="absolute bottom-5 left-5 right-5 md:right-auto md:max-w-[300px] group flex items-center gap-3 bg-white/95 backdrop-blur rounded-2xl px-4 py-3.5 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100 hover:-translate-y-0.5 transition-all"
            >
              <span className="w-10 h-10 rounded-xl bg-[#0A192F] text-white flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold text-[#0A192F] truncate">
                  Hawthorne Village Dental Care
                </div>
                <div className="text-[12px] text-[#64748B] truncate">
                  10220 Derry Rd #206, Milton
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#2563EB] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
