import { Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

function Card({ t }) {
  const initials = t.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <div
      data-testid={`testimonial-${t.name.replace(/\s+/g, "-").toLowerCase()}`}
      className="w-[340px] md:w-[400px] shrink-0 bg-white rounded-2xl p-6 md:p-7 border border-slate-100 shadow-[0_8px_30px_rgba(10,25,47,0.05)]"
    >
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
        ))}
      </div>
      <p className="text-[15px] leading-relaxed text-[#334155]">&ldquo;{t.body}&rdquo;</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#E6F8F3] text-[#0284C7] font-semibold text-sm flex items-center justify-center">
          {initials}
        </div>
        <div>
          <div className="font-medium text-[#0A192F] text-sm">{t.name}</div>
          <div className="text-xs text-[#64748B]">Verified Google Review</div>
        </div>
      </div>
    </div>
  );
}

export default function SocialProof() {
  const ref = useReveal();
  return (
    <section id="reviews" data-testid="social-proof" ref={ref} className="reveal py-20 md:py-28 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-10 md:mb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div>
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">Patient stories</div>
            <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05] max-w-2xl">
              Milton families keep coming back — <span className="italic font-light text-[#64748B]">and telling their friends.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#475569]">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
              ))}
            </div>
            <span><strong className="text-[#0A192F]">4.9</strong> from 480+ Google reviews</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-5 animate-marquee w-max px-6">
          {[...testimonials, ...testimonials].map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F8FAFC] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F8FAFC] to-transparent" />
      </div>
    </section>
  );
}
