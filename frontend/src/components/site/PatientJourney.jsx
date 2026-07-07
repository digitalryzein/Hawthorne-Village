import { journey } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

export default function PatientJourney() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">How it works</div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            From booking to smiling <span className="italic font-light text-[#64748B]">— four simple steps.</span>
          </h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-8 md:gap-6">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] dashed-connector" />

          {journey.map((s, i) => (
            <div
              key={s.step}
              data-testid={`journey-step-${i}`}
              className="relative flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="relative z-10 w-12 h-12 rounded-full bg-white border border-slate-200 text-[#0284C7] font-display font-semibold flex items-center justify-center shadow-[0_6px_20px_rgba(10,25,47,0.06)]">
                {s.step}
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-[#0A192F]">{s.title}</h3>
              <p className="mt-2 text-[15px] text-[#64748B] leading-relaxed max-w-[240px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
