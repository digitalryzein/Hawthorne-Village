import { CheckCircle2, CreditCard, Landmark } from "lucide-react";
import { insurers } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

export default function Insurance() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="rounded-[32px] bg-[#E6F8F3] p-10 md:p-16 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/40 blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">Insurance & payment</div>
            <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
              Direct billing, CDCP <span className="italic font-light text-[#0A192F]/70">and flexible payment plans.</span>
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-[#334155]">
              We bill your insurance directly, participate in the Canadian Dental Care Plan (CDCP),
              and partner with financing providers so no family has to postpone care because of cost.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                { icon: CheckCircle2, text: "Direct billing to every major Canadian insurer" },
                { icon: Landmark, text: "CDCP-participating provider" },
                { icon: CreditCard, text: "0% financing plans available — 6, 12 or 24 months" },
              ].map((f, i) => (
                <li key={i} data-testid={`insurance-feature-${i}`} className="flex items-start gap-3 text-[15px] text-[#0A192F]">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-white text-[#10B981] flex items-center justify-center shrink-0">
                    <f.icon className="w-4 h-4" />
                  </span>
                  <span className="pt-0.5">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {insurers.map((ins) => (
                <div
                  key={ins}
                  className="rounded-2xl bg-white/80 backdrop-blur border border-white px-4 py-4 text-[14px] font-medium text-[#0A192F] text-center shadow-sm"
                >
                  {ins}
                </div>
              ))}
            </div>
            <p className="mt-4 text-[12.5px] text-[#334155]/70 text-center">
              Don&apos;t see your provider? Call us — chances are, we still bill directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
