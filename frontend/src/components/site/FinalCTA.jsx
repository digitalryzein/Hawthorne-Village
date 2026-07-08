import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { clinic } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

export default function FinalCTA() {
  const ref = useReveal();
  return (
    <section id="contact" ref={ref} className="reveal py-24 md:py-32 bg-[#0A192F] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-[#0284C7]/15 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 w-[560px] h-[560px] rounded-full bg-[#E6F8F3]/10 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
        <div className="text-[13px] uppercase tracking-[0.14em] text-[#7DD3FC] font-medium mb-4">
          Ready when you are
        </div>
        <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.03]">
          Your next smile <span className="italic font-light text-[#94A3B8]">starts with a hello.</span>
        </h2>
        <p className="mt-6 text-lg text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed">
          Whether it&apos;s your first check-up in years, a nervous child&apos;s first visit, or a full smile makeover,
          we would love to meet you. New patients welcome. Same-day emergencies and walk-ins welcome.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button
            data-testid="final-book-btn"
            asChild
            className="h-14 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] px-8 text-[15px] font-medium shadow-[0_10px_40px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 transition-all"
          >
            <a href={clinic.bookUrl} target="_blank" rel="noopener noreferrer">
              <Calendar className="w-4 h-4 mr-2" /> Book Appointment
            </a>
          </Button>
          <a
            data-testid="final-call-btn"
            href={clinic.phoneHref}
            className="inline-flex items-center gap-2 h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur px-7 text-[15px] font-medium hover:bg-white/15 transition-all"
          >
            <Phone className="w-4 h-4" /> {clinic.phone}
          </a>
        </div>

        <div className="mt-10 text-sm text-[#94A3B8]">
          10220 Derry Rd #206, Milton, ON L9T 7J3 · Open until 7 PM weekdays
        </div>
      </div>
    </section>
  );
}
