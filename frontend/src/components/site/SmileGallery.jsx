import { gallery } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

function Row({ item, index }) {
  return (
    <a
      href="#contact"
      data-testid={`gallery-row-${item.id}`}
      className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[80px_1fr_auto_auto] items-center gap-6 md:gap-10 py-6 md:py-8 border-t border-slate-200 last:border-b transition-colors"
    >
      {/* Case number */}
      <div className="font-mono text-[13px] tabular-nums text-[#94A3B8] group-hover:text-[#0284C7] transition-colors">
        / {String(index + 1).padStart(2, "0")}
      </div>

      {/* Title */}
      <div className="min-w-0">
        <div className="font-display text-xl md:text-3xl text-[#0A192F] leading-tight group-hover:italic group-hover:font-light transition-all">
          {item.label}
        </div>
        <div className="mt-1 text-[13px] md:text-[14px] text-[#94A3B8]">
          {item.treatment} · {item.duration}
        </div>
      </div>

      {/* Before / After thumbs — appear on hover on desktop, always visible on mobile */}
      <div className="hidden md:flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-500">
        <div className="relative">
          <img
            src={item.before}
            alt={`Before ${item.label}`}
            loading="lazy"
            className="w-20 h-24 object-cover rounded-lg"
          />
          <span className="absolute -top-2 left-2 rounded-full bg-white border border-slate-200 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#64748B]">
            Before
          </span>
        </div>
        <div className="relative">
          <img
            src={item.after}
            alt={`After ${item.label}`}
            loading="lazy"
            className="w-20 h-24 object-cover rounded-lg"
          />
          <span className="absolute -top-2 left-2 rounded-full bg-[#0A192F] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white">
            After
          </span>
        </div>
      </div>

      {/* Mobile: small preview pair */}
      <div className="flex md:hidden -space-x-2">
        <img src={item.before} alt="" className="w-10 h-10 rounded-full object-cover ring-2 ring-white" />
        <img src={item.after} alt="" className="w-10 h-10 rounded-full object-cover ring-2 ring-white" />
      </div>

      <span
        aria-hidden="true"
        className="text-[#CBD5E1] group-hover:text-[#0A192F] group-hover:translate-x-1 transition-all"
      >
        →
      </span>
    </a>
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
      <div className="max-w-5xl mx-auto px-6 md:px-8">
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
          <div className="text-[13px] text-[#94A3B8]">
            {String(gallery.length).padStart(2, "0")} recent cases · Milton, ON
          </div>
        </div>

        {/* Ultra-minimal list */}
        <div>
          {gallery.map((g, i) => (
            <Row key={g.id} item={g} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            data-testid="gallery-cta"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#2563EB] hover:gap-2.5 transition-all"
          >
            Book a smile consultation
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
