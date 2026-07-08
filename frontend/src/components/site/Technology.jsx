import { Check } from "lucide-react";
import { technology } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

export default function Technology() {
  const ref = useReveal();
  return (
    <section id="technology" ref={ref} className="reveal py-24 md:py-32 bg-[#0A192F] text-white overflow-hidden relative">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#0284C7]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-center">
        <div>
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#7DD3FC] font-medium mb-3">Advanced dental technology</div>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-[1.05]">
            The technology behind <span className="italic font-light text-[#94A3B8]">a gentler visit.</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-[#CBD5E1]">
            Hawthorne Village Dental Care invests in state-of-the-art equipment so every visit is more precise
            and less stressful. From 3D imaging to laser cavity detection, our tools reduce radiation, protect
            your comfort and often turn two-visit treatments into one.
          </p>

          <div className="mt-8 relative rounded-[28px] overflow-hidden aspect-[4/3] max-w-[520px]">
            <img
              src="https://images.pexels.com/photos/13176356/pexels-photo-13176356.jpeg"
              alt="Modern dental scanner and 3D CBCT technology at Hawthorne Village Dental Care Milton"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <ul className="grid sm:grid-cols-2 gap-3">
          {technology.map((t, i) => (
            <li
              key={t.name}
              data-testid={`tech-item-${i}`}
              className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 hover:bg-white/[0.06] transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 w-6 h-6 rounded-full bg-[#E6F8F3] text-[#0A192F] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <div>
                  <div className="font-medium text-[15px] leading-tight">{t.name}</div>
                  <div className="mt-1.5 text-[13.5px] text-[#94A3B8] leading-relaxed">{t.benefit}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
