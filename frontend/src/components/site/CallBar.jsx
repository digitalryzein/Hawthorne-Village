import { Phone, ArrowUpRight } from "lucide-react";
import { clinic } from "@/lib/site-data";

const items = [
  { region: "Milton", label: "Looking for a Dentist in Milton?", phone: clinic.phone, href: clinic.phoneHref },
  { region: "Halton", label: "Dental Emergency in Halton Region?", phone: clinic.phone, href: clinic.phoneHref },
];

export default function CallBar() {
  return (
    <section
      data-testid="call-bar"
      aria-label="Contact strip"
      className="relative bg-[#0A192F] text-white overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/3 w-[480px] h-[480px] rounded-full bg-[#0284C7]/12 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-6 md:py-7 grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] items-center gap-6 md:gap-4">
        {items.map((it, i) => (
          <div
            key={it.region}
            data-testid={`call-bar-item-${it.region.toLowerCase()}`}
            className={`flex items-center gap-4 md:gap-5 ${
              i === 0 ? "md:border-r md:border-white/12 md:pr-6" : "md:pl-2"
            }`}
          >
            {/* Ringing phone icon */}
            <div className="relative shrink-0">
              <span className="absolute inset-0 rounded-full bg-[#0284C7]/25 animate-ping" />
              <span className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/8 border border-white/15 flex items-center justify-center">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={1.75} />
              </span>
            </div>

            <div className="min-w-0">
              <div className="font-display text-[17px] md:text-[19px] font-semibold leading-tight text-white">
                {it.label}
              </div>
              <a
                href={it.href}
                data-testid={`call-bar-phone-${it.region.toLowerCase()}`}
                className="mt-1 inline-flex items-center gap-1.5 text-[14px] md:text-[15px] text-[#CBD5E1] hover:text-[#7DD3FC] transition-colors"
              >
                Call on : <span className="font-medium text-white">{it.phone}</span>
              </a>
            </div>
          </div>
        ))}

        {/* Meet the doctor CTA */}
        <a
          href="#dentist"
          data-testid="call-bar-doctor-btn"
          className="justify-self-start md:justify-self-end group inline-flex items-center gap-2.5 rounded-full bg-white text-[#0A192F] pl-6 pr-1.5 py-1.5 text-[14.5px] font-medium hover:bg-[#E6F8F3] transition-colors"
        >
          Meet the Doctor
          <span className="w-10 h-10 rounded-full bg-[#0284C7] text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
          </span>
        </a>
      </div>
    </section>
  );
}
