import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

export default function Services() {
  const ref = useReveal();
  return (
    <section id="services" ref={ref} className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">Complete dental care</div>
            <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
              A dentist you&apos;ll never <span className="italic font-light text-[#64748B]">have to leave.</span>
            </h2>
          </div>
          <p className="text-[16px] text-[#64748B] max-w-md">
            From your child&apos;s first check-up to a full smile makeover — every service you need,
            delivered under one roof by a team that knows your name.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
            <a
              key={s.name}
              href="#contact"
              data-testid={`service-card-${i}`}
              className="group relative bg-white rounded-3xl border border-slate-100 hover:border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_30px_rgba(10,25,47,0.04)] hover:shadow-[0_16px_50px_rgba(10,25,47,0.1)]"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={s.image}
                  alt={`${s.name} at Hawthorne Village Dental Care Milton`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-[#0A192F] leading-snug">{s.name}</h3>
                  <ArrowUpRight className="w-5 h-5 text-[#94A3B8] group-hover:text-[#2563EB] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-[#64748B]">{s.blurb}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
