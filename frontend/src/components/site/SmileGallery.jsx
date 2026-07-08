import { useState, useRef, useEffect } from "react";
import { gallery } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowLeftRight, Clock, Sparkles } from "lucide-react";
import BookingDialog from "@/components/site/BookingDialog";

/* Interactive before/after slider ---------------------------------------- */
function BeforeAfterSlider({ item }) {
  const [pos, setPos] = useState(50); // % of after image visible from the LEFT
  const wrapRef = useRef(null);
  const dragging = useRef(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const move = (e) => {
      if (!dragging.current) return;
      const rect = el.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const rel = ((clientX - rect.left) / rect.width) * 100;
      setPos(Math.max(2, Math.min(98, rel)));
    };
    const up = () => { dragging.current = false; };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
  }, []);

  const start = (e) => {
    dragging.current = true;
    // Set immediately on click so tap-to-position works
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const rel = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, rel)));
  };

  return (
    <div
      ref={wrapRef}
      onMouseDown={start}
      onTouchStart={start}
      data-testid={`ba-slider-${item.id}`}
      className="group relative w-full aspect-[4/5] md:aspect-[4/4.5] rounded-[28px] overflow-hidden bg-slate-100 shadow-[0_30px_80px_-20px_rgba(10,25,47,0.35)] cursor-ew-resize select-none"
    >
      {/* AFTER (base layer, full width) */}
      <img
        src={item.after}
        alt={`After ${item.label}`}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 z-10 rounded-full bg-[#10B981] text-white text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1">
        After
      </div>

      {/* BEFORE (clipped from the left) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={item.before}
          alt={`Before ${item.label}`}
          draggable={false}
          className="absolute inset-y-0 left-0 h-full object-cover"
          style={{ width: `${100 / (pos / 100)}%`, minWidth: `${wrapRef.current?.offsetWidth || 0}px` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/20 to-transparent" />
        <div className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur text-[#0A192F] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1">
          Before
        </div>
      </div>

      {/* Divider */}
      <div
        className="absolute inset-y-0 z-20 pointer-events-none"
        style={{ left: `${pos}%`, transform: "translateX(-1px)" }}
      >
        <div className="absolute inset-y-0 w-[2px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.35)]" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-[0_10px_30px_-5px_rgba(10,25,47,0.4)] border border-slate-200 flex items-center justify-center">
          <ArrowLeftRight className="w-4 h-4 text-[#0A192F]" strokeWidth={2.25} />
        </div>
      </div>

      {/* Hint label */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 rounded-full bg-[#0A192F]/85 backdrop-blur text-white text-[11px] px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
        Drag to compare
      </div>
    </div>
  );
}

/* Case list item on the right --------------------------------------------- */
function CaseItem({ item, active, onSelect, index }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      data-testid={`case-item-${item.id}`}
      className={`group w-full text-left flex items-center gap-4 rounded-2xl p-3 md:p-4 transition-all duration-300 ${
        active
          ? "bg-white border border-slate-200 shadow-[0_8px_30px_-15px_rgba(10,25,47,0.25)]"
          : "bg-white/40 border border-transparent hover:bg-white hover:border-slate-100"
      }`}
    >
      {/* Mini before/after thumbs */}
      <div className="relative flex -space-x-3 shrink-0">
        <img src={item.before} alt="" className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-white" />
        <img src={item.after} alt="" className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-white" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className={`text-[11px] font-mono tabular-nums ${active ? "text-[#0284C7]" : "text-[#94A3B8]"}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="font-display text-[15px] md:text-[16px] font-semibold text-[#0A192F] leading-tight truncate">
            {item.label}
          </div>
        </div>
        <div className="mt-1 text-[12.5px] text-[#64748B] truncate">{item.treatment}</div>
      </div>

      <ChevronRight
        className={`w-4 h-4 shrink-0 transition-all ${
          active ? "text-[#0284C7] translate-x-0.5" : "text-[#CBD5E1] group-hover:translate-x-0.5"
        }`}
      />
    </button>
  );
}

/* Section ----------------------------------------------------------------- */
export default function SmileGallery() {
  const ref = useReveal();
  const [activeId, setActiveId] = useState(gallery[0].id);
  const [bookOpen, setBookOpen] = useState(false);
  const active = gallery.find((g) => g.id === activeId) || gallery[0];

  return (
    <section id="gallery" ref={ref} data-testid="smile-gallery" className="reveal py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
              Smile gallery
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
              Real Milton patients,{" "}
              <span className="italic font-light text-[#64748B]">real transformations.</span>
            </h2>
          </div>
          <p className="text-[16px] text-[#64748B] max-w-md">
            Drag the slider to see the before and after. Every case here was completed
            by Dr. Sarna at our Derry Road clinic.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12 items-start">
          {/* LEFT: slider + case meta */}
          <div>
            <BeforeAfterSlider item={active} key={active.id} />

            {/* Metadata strip */}
            <div className="mt-6 rounded-2xl bg-white border border-slate-100 p-5 md:p-6 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-medium">Treatment</div>
                <div className="mt-0.5 font-display text-[15px] text-[#0A192F]">{active.treatment}</div>
              </div>
              <div className="hidden md:block h-8 w-px bg-slate-200" />
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#0284C7]" />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-medium">Duration</div>
                  <div className="mt-0.5 font-display text-[15px] text-[#0A192F]">{active.duration}</div>
                </div>
              </div>
              <div className="hidden md:block h-8 w-px bg-slate-200" />
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-medium">Patient</div>
                  <div className="mt-0.5 font-display text-[15px] text-[#0A192F]">Age {active.age}, Milton</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: cases + CTA */}
          <div className="space-y-6">
            <div>
              <div className="text-[12px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
                Choose a case ({gallery.length})
              </div>
              <div className="space-y-2.5">
                {gallery.map((g, i) => (
                  <CaseItem
                    key={g.id}
                    item={g}
                    index={i}
                    active={g.id === activeId}
                    onSelect={() => setActiveId(g.id)}
                  />
                ))}
              </div>
            </div>

            {/* Testimonial + CTA card */}
            <div className="relative rounded-[24px] bg-[#0A192F] text-white p-7 md:p-8 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-[#0284C7]/25 blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="text-[11px] uppercase tracking-[0.14em] text-[#7DD3FC] font-medium mb-3">
                  In their words
                </div>
                <p className="font-display italic text-[19px] md:text-[21px] leading-[1.35]">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <div className="mt-4 text-[13px] text-white/60">
                  — {active.label} patient, Milton
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="text-[13px] text-white/70 max-w-[180px] leading-snug">
                    Want a result like this?
                  </div>
                  <Button
                    data-testid="gallery-consult-btn"
                    onClick={() => setBookOpen(true)}
                    className="shrink-0 h-11 rounded-full bg-white text-[#0A192F] hover:bg-[#E6F8F3] px-5 text-[14px] font-medium transition-colors"
                  >
                    Book consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingDialog open={bookOpen} onOpenChange={setBookOpen} />
    </section>
  );
}
