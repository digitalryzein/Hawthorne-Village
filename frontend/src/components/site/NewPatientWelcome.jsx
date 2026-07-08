import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinic } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const perks = [
  "A full new-patient exam with digital X-rays",
  "One-on-one time with Dr. Sarna to map out your care",
  "Direct billing to your insurer, no paperwork",
  "A same-week appointment, guaranteed, or we call you first",
];

const stats = [
  { k: "$0", v: "New-patient consult" },
  { k: "24 hr", v: "Booking response" },
  { k: "6–24", v: "Month 0% financing" },
  { k: "10k+", v: "Milton smiles" },
];

export default function NewPatientWelcome() {
  const ref = useReveal();

  return (
    <section
      id="new-patients"
      ref={ref}
      data-testid="new-patient-section"
      className="reveal py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="rounded-[32px] bg-[#F8FAFC] border border-slate-100 overflow-hidden">
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            {/* Left copy + CTAs */}
            <div className="p-10 md:p-14 lg:p-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
                <span className="text-[12px] uppercase tracking-[0.14em] text-[#0A192F] font-medium">
                  New patient welcome
                </span>
              </div>

              <h2 className="mt-6 font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
                Your first visit,{" "}
                <span className="italic font-light text-[#64748B]">completely free.</span>
              </h2>

              <p className="mt-5 text-[17px] text-[#475569] leading-relaxed max-w-lg">
                Choosing a new dentist in Milton is a big decision. Come in for a free consultation,
                no pressure and no surprise bills, just an honest conversation about your smile and
                what it actually needs.
              </p>

              <ul className="mt-8 space-y-3">
                {perks.map((p, i) => (
                  <li
                    key={i}
                    data-testid={`welcome-perk-${i}`}
                    className="flex items-start gap-3 text-[15px] text-[#334155]"
                  >
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-[#E6F8F3] text-[#10B981] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    <span className="pt-0.5">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button
                  data-testid="welcome-book-btn"
                  asChild
                  className="h-12 md:h-13 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 text-[15px] font-medium shadow-[0_8px_24px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 transition-all"
                >
                  <a href={clinic.bookUrl} target="_blank" rel="noopener noreferrer">
                    Book Appointment
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </a>
                </Button>
                <a
                  href="#services"
                  data-testid="welcome-learn-btn"
                  className="inline-flex items-center gap-2 h-12 md:h-13 rounded-full bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-6 text-[15px] font-medium text-[#0A192F] transition-all"
                >
                  See what&apos;s included
                </a>
              </div>

              <div className="mt-6 text-[13px] text-[#94A3B8]">
                No credit card required · Cancel anytime · Kids under 12 always free with a parent visit
              </div>
            </div>

            {/* Right: stat cluster */}
            <div className="relative bg-[#0A192F] p-10 md:p-14 lg:p-16 flex items-center">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-32 -right-20 w-80 h-80 rounded-full bg-[#0284C7]/20 blur-3xl" />
                <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#E6F8F3]/8 blur-3xl" />
              </div>

              <div className="relative w-full">
                <div className="text-[12px] uppercase tracking-[0.14em] text-[#7DD3FC] font-medium mb-5">
                  What you can expect
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s, i) => (
                    <div
                      key={s.v}
                      data-testid={`welcome-stat-${i}`}
                      className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 md:p-6"
                    >
                      <div className="font-display text-3xl md:text-4xl font-semibold text-white leading-none">
                        {s.k}
                      </div>
                      <div className="mt-2 text-[13px] text-[#94A3B8] leading-tight">
                        {s.v}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="text-[13px] text-white/70 max-w-[220px] leading-relaxed">
                    Prefer to talk first? Our front desk answers in under a minute.
                  </div>
                  <a
                    href="tel:+19058643368"
                    data-testid="welcome-call-btn"
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-white text-[#0A192F] px-4 py-2 text-[13px] font-medium hover:bg-[#E6F8F3] transition-colors"
                  >
                    Call clinic <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
