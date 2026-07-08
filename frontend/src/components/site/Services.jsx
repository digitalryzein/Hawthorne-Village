import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

function ServiceCard({ s }) {
  return (
    <a
      href="#contact"
      data-testid={`service-card-${s.name.replace(/\s+/g, "-").toLowerCase()}`}
      onDragStart={(e) => e.preventDefault()}
      className="group relative shrink-0 w-[300px] md:w-[340px] rounded-[28px] overflow-hidden bg-white border border-slate-100 shadow-[0_10px_40px_-20px_rgba(10,25,47,0.15)] hover:shadow-[0_25px_60px_-20px_rgba(10,25,47,0.3)] hover:-translate-y-2 transition-all duration-500 ease-out select-none"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
        <img
          src={s.image}
          alt={`${s.name} at Hawthorne Village Dental Care Milton`}
          loading="lazy"
          draggable={false}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-out pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur text-[#0A192F] flex items-center justify-center shadow-md group-hover:bg-[#2563EB] group-hover:text-white group-hover:rotate-45 transition-all duration-500">
          <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <h3 className="font-display text-[22px] md:text-[24px] font-semibold leading-tight">
            {s.name}
          </h3>
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
            <p className="overflow-hidden text-[13.5px] leading-relaxed text-white/85 opacity-0 group-hover:opacity-100 group-hover:mt-2.5 transition-all duration-500 delay-100">
              {s.blurb}
            </p>
          </div>
          <div className="mt-3 h-px bg-white/25 group-hover:bg-[#7DD3FC] transition-colors" />
          <div className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-white/90 group-hover:text-[#7DD3FC] transition-colors">
            Learn more
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </a>
  );
}

/**
 * Auto-scrolling + drag/wheel scrollable services rail.
 * - Continuously scrolls left at ~0.5 px per frame.
 * - Pauses while the user is hovering, dragging or wheeling.
 * - Resumes after 1.4s of no interaction.
 * - Loops seamlessly by wrapping scrollLeft between [0, half].
 */
function ScrollRail({ items }) {
  const track = [...items, ...items];
  const railRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    let raf;
    let paused = false;
    let resumeAt = 0;

    const step = () => {
      const now = performance.now();
      if (!paused && now > resumeAt) {
        // Seamless loop: reset when we've scrolled past half of the track width.
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
        el.scrollLeft += 0.5;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    const pauseFor = (ms = 1400) => {
      resumeAt = performance.now() + ms;
    };
    const hardPause = () => {
      paused = true;
    };
    const release = () => {
      paused = false;
      pauseFor(1400);
    };

    // Hover
    el.addEventListener("mouseenter", hardPause);
    el.addEventListener("mouseleave", release);

    // Wheel — turn vertical wheel into horizontal scroll
    const onWheel = (e) => {
      const dominant = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (!dominant) return;
      e.preventDefault();
      el.scrollLeft += dominant;
      pauseFor(1400);
    };
    el.addEventListener("wheel", onWheel, { passive: false });

    // Drag to scroll
    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    const onDown = (e) => {
      isDown = true;
      setDragging(true);
      startX = e.pageX;
      startScroll = el.scrollLeft;
      el.setPointerCapture?.(e.pointerId);
      hardPause();
    };
    const onMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      el.scrollLeft = startScroll - (e.pageX - startX);
    };
    const onUp = (e) => {
      if (!isDown) return;
      isDown = false;
      setDragging(false);
      el.releasePointerCapture?.(e.pointerId);
      release();
    };
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    el.addEventListener("pointerleave", onUp);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", hardPause);
      el.removeEventListener("mouseleave", release);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      el.removeEventListener("pointerleave", onUp);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={railRef}
        data-testid="services-rail"
        className={`flex gap-5 md:gap-6 overflow-x-auto no-scrollbar px-6 md:px-8 py-2 ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ scrollBehavior: "auto" }}
      >
        {track.map((s, i) => (
          <ServiceCard key={`${s.name}-${i}`} s={s} />
        ))}
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" ref={ref} className="reveal py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
              Complete dental care
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
              A dentist you&apos;ll never <span className="italic font-light text-[#64748B]">have to leave.</span>
            </h2>
          </div>
          <p className="text-[16px] text-[#64748B] max-w-md">
            From your child&apos;s first check-up to a full smile makeover, our Milton dental clinic delivers
            every service you need, under one roof, from a team that knows your name.
          </p>
        </div>
      </div>

      <ScrollRail items={services} />

      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-8 text-center">
        <p className="text-[13px] text-[#94A3B8]">
          Auto-scrolling · Drag, scroll or hover to pause
        </p>
      </div>
    </section>
  );
}
