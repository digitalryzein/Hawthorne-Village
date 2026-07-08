import { useState, useRef, useEffect } from "react";
import { gallery, clinic } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

function HorizontalSlider({ item }) {
  const [pos, setPos] = useState(50); // % of the "before" visible from the left
  const wrapRef = useRef(null);
  const dragging = useRef(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const setFromClient = (clientX) => {
      const rect = el.getBoundingClientRect();
      const rel = ((clientX - rect.left) / rect.width) * 100;
      setPos(Math.max(2, Math.min(98, rel)));
    };

    const move = (e) => {
      if (!dragging.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setFromClient(clientX);
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
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const rect = wrapRef.current.getBoundingClientRect();
    const rel = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, rel)));
  };

  return (
    <div
      ref={wrapRef}
      onMouseDown={start}
      onTouchStart={start}
      data-testid={`ba-h-slider-${item.id}`}
      className="group relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 shadow-[0_20px_60px_-25px_rgba(10,25,47,0.35)] cursor-ew-resize select-none"
    >
      {/* AFTER (full base layer) */}
      <img
        src={item.after}
        alt={`After ${item.label}`}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* BEFORE (clipped from the left) — uses clip-path so image never distorts */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)` }}
      >
        <img
          src={item.before}
          alt={`Before ${item.label}`}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Labels */}
      <span
        className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0A192F] transition-opacity"
        style={{ opacity: pos > 12 ? 1 : 0 }}
      >
        Before
      </span>
      <span
        className="absolute top-4 right-4 rounded-full bg-[#0A192F] text-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] transition-opacity"
        style={{ opacity: pos < 88 ? 1 : 0 }}
      >
        After
      </span>

      {/* Divider line */}
      <div
        className="absolute inset-y-0 z-10 pointer-events-none"
        style={{ left: `${pos}%`, transform: "translateX(-1px)" }}
      >
        <div className="absolute inset-y-0 w-[2px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.35)]" />

        {/* Drag handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-[0_10px_30px_-5px_rgba(10,25,47,0.4)] border border-slate-200 flex items-center justify-center gap-0.5">
          <ChevronLeft className="w-3.5 h-3.5 text-[#0A192F]" strokeWidth={2.5} />
          <ChevronRight className="w-3.5 h-3.5 text-[#0A192F]" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}

export default function SmileGallery() {
  const ref = useReveal();

  return (
    <section
      id="gallery"
      ref={ref}
      data-testid="smile-gallery"
      className="reveal py-24 md:py-32 bg-[#F8FAFC]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
              Smile gallery
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
              Real Milton patients,{" "}
              <span className="italic font-light text-[#64748B]">real transformations.</span>
            </h2>
          </div>
          <p className="text-[14px] text-[#94A3B8] max-w-sm">
            Actual patients treated at our Derry Road clinic. Drag the slider on each card
            to compare their before &amp; after.
          </p>
        </div>

        {/* 2-up grid of horizontal sliders */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {gallery.map((g, i) => (
            <div
              key={g.id}
              data-testid={`gallery-card-${g.id}`}
              className="flex flex-col"
            >
              <HorizontalSlider item={g} />

              {/* Case heading */}
              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-mono text-[12px] tabular-nums text-[#94A3B8]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-[#0A192F] leading-tight">
                  {g.label}
                </h3>
              </div>
              <div className="mt-1 text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium">
                Patient · {g.patient}
              </div>

              {/* Problem / Solution */}
              <dl className="mt-5 space-y-4 border-l border-slate-200 pl-5">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.14em] text-[#94A3B8] font-medium">
                    Problem
                  </dt>
                  <dd className="mt-1 text-[14.5px] text-[#475569] leading-relaxed">
                    {g.problem}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.14em] text-[#10B981] font-medium">
                    Solution
                  </dt>
                  <dd className="mt-1 text-[14.5px] text-[#334155] leading-relaxed">
                    {g.solution}
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={clinic.bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="gallery-cta"
            className="inline-flex items-center gap-2 h-12 rounded-full bg-[#0A192F] hover:bg-[#111c36] text-white px-7 text-[14.5px] font-medium hover:-translate-y-0.5 transition-all"
          >
            Book Appointment
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
