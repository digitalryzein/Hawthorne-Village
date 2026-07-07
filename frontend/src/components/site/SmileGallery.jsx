import { gallery } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

export default function SmileGallery() {
  const ref = useReveal();
  return (
    <section id="gallery" ref={ref} className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">Smile gallery</div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            Real Milton patients, <span className="italic font-light text-[#64748B]">real transformations.</span>
          </h2>
          <p className="mt-5 text-[17px] text-[#475569] leading-relaxed">
            A few recent cases from our practice — no filters, no stock photos, just careful dentistry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {gallery.map((g, i) => (
            <div
              key={i}
              data-testid={`gallery-item-${i}`}
              className="rounded-3xl overflow-hidden bg-[#F8FAFC] border border-slate-100 shadow-[0_8px_30px_rgba(10,25,47,0.04)]"
            >
              <div className="grid grid-cols-2 gap-0.5">
                <figure className="relative aspect-square overflow-hidden bg-white">
                  <img src={g.before} alt="Before treatment" loading="lazy" className="w-full h-full object-cover" />
                  <figcaption className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur px-2.5 py-0.5 text-[11px] font-medium text-[#0A192F]">
                    Before
                  </figcaption>
                </figure>
                <figure className="relative aspect-square overflow-hidden bg-white">
                  <img src={g.after} alt="After treatment" loading="lazy" className="w-full h-full object-cover" />
                  <figcaption className="absolute top-3 left-3 rounded-full bg-[#10B981] px-2.5 py-0.5 text-[11px] font-medium text-white">
                    After
                  </figcaption>
                </figure>
              </div>
              <div className="p-5 md:p-6 flex items-center justify-between">
                <div className="font-display font-semibold text-[#0A192F]">{g.label}</div>
                <div className="text-[13px] text-[#64748B]">Milton, ON</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
