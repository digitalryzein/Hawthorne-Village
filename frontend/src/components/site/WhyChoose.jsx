import { Ambulance, Clock, ShieldCheck, Landmark, HeartPulse, Cpu, Baby, Award } from "lucide-react";
import { whyChoose } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const iconMap = { Ambulance, Clock, ShieldCheck, Landmark, HeartPulse, Cpu, Baby, Award };

export default function WhyChoose() {
  const ref = useReveal();
  return (
    <section id="why" ref={ref} className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">Why families choose us</div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            Everything a Milton family needs, <span className="italic font-light text-[#64748B]">under one roof.</span>
          </h2>
          <p className="mt-5 text-[17px] text-[#475569] leading-relaxed max-w-2xl">
            Convenient hours, gentle care, transparent pricing and modern technology.
            We built the practice we would want to bring our own kids to.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {whyChoose.map((f, i) => {
            const Icon = iconMap[f.icon];
            return (
              <div
                key={f.title}
                data-testid={`why-card-${i}`}
                className={`group ${f.span || ""} ${f.bg} rounded-3xl p-7 md:p-8 border border-slate-100 hover:border-slate-200 hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgba(10,25,47,0.04)] hover:shadow-[0_16px_50px_rgba(10,25,47,0.08)]`}
              >
                <div className="w-11 h-11 rounded-2xl bg-[#0A192F]/5 text-[#0A192F] flex items-center justify-center mb-5 group-hover:bg-[#0284C7]/10 group-hover:text-[#0284C7] transition-colors">
                  {Icon && <Icon className="w-5 h-5" strokeWidth={1.75} />}
                </div>
                <h3 className="font-display text-xl md:text-[22px] font-semibold text-[#0A192F] leading-snug mb-2.5">
                  {f.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#64748B]">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
