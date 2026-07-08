import { gallery } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

function CaseStrip({ item, index }) {
  return (
    <article
      data-testid={`gallery-strip-${item.id}`}
      className="group relative"
    >
      {/* Meta bar on top */}
      <div className="flex items-baseline justify-between mb-4 md:mb-5 gap-6">
        <div className="flex items-baseline gap-4 md:gap-6">
          <span className="font-mono text-[13px] tabular-nums text-[#94A3B8]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-2xl md:text-[32px] font-medium text-[#0A192F] leading-tight tracking-tight">
            {item.label}
          </h3>
        </div>
        <div className="hidden sm:block text-[12px] uppercase tracking-[0.14em] text-[#94A3B8]">
          {item.duration}
        </div>
      </div>

      {/* Full-bleed image pair */}
      <div className="relative grid grid-cols-2 gap-1.5 md:gap-2 aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-3xl bg-slate-100">
        <figure className="relative overflow-hidden">
          <img
            src={item.before}
            alt={`Before ${item.label}`}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[900ms] ease-out"
          />
          {/* subtle before overlay to differentiate */}
          <div className="absolute inset-0 bg-[#0A192F]/8" />
          <figcaption className="absolute bottom-4 left-4 md:bottom-6 md:left-6 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0A192F]">
            Before
          </figcaption>
        </figure>

        <figure className="relative overflow-hidden">
          <img
            src={item.after}
            alt={`After ${item.label}`}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[900ms] ease-out"
          />
          <figcaption className="absolute bottom-4 left-4 md:bottom-6 md:left-6 rounded-full bg-[#0A192F] text-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
            After
          </figcaption>
        </figure>

        {/* Centered divider line */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/60" />

        {/* Center pill with treatment */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="rounded-full bg-white/95 backdrop-blur px-4 py-2 text-[12.5px] font-medium text-[#0A192F] shadow-lg whitespace-nowrap">
            {item.treatment}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function SmileGallery() {
  const ref = useReveal();

  return (
    <section
      id="gallery"
      ref={ref}
      data-testid="smile-gallery"
      className="reveal py-24 md:py-32 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
              Smile gallery
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
              Real Milton patients,{" "}
              <span className="italic font-light text-[#64748B]">real transformations.</span>
            </h2>
          </div>
          <div className="text-[13px] text-[#94A3B8] font-mono tabular-nums">
            {String(gallery.length).padStart(2, "0")} recent cases · Milton, ON
          </div>
        </div>

        {/* Cinematic strips */}
        <div className="space-y-16 md:space-y-24">
          {gallery.map((g, i) => (
            <CaseStrip key={g.id} item={g} index={i} />
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <a
            href="#contact"
            data-testid="gallery-cta"
            className="inline-flex items-center gap-2 h-12 rounded-full bg-[#0A192F] hover:bg-[#111c36] text-white px-7 text-[14.5px] font-medium hover:-translate-y-0.5 transition-all"
          >
            Book a smile consultation
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
