import { useCallback, useEffect, useRef, useState } from "react";
import { Star, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { clinic, testimonials } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const reviewUrl =
  "https://www.google.com/maps/search/?api=1&query=Hawthorne%20Village%20Dental%20Care%2C%2010220%20Derry%20Rd%20%23206%2C%20Milton%2C%20ON";

// Reviews longer than this get a "Read more" toggle.
const CLAMP_LENGTH = 140;

const avatarTones = [
  "bg-[#6366F1]", "bg-[#0D9488]", "bg-[#D97706]", "bg-[#0284C7]", "bg-[#DB2777]", "bg-[#16A34A]",
];

function GoogleG({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8c-.5 2.8-2.1 5.1-4.4 6.7v5.5h7.1c4.2-3.9 6.6-9.6 6.6-16.2z" />
      <path fill="#34A853" d="M24 46c6 0 11-2 14.6-5.3l-7.1-5.5c-2 1.3-4.5 2.1-7.5 2.1-5.8 0-10.7-3.9-12.4-9.2H4.3v5.7C7.9 41 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.6 28.1c-.4-1.3-.7-2.7-.7-4.1s.3-2.8.7-4.1v-5.7H4.3C2.9 17.1 2 20.4 2 24s.9 6.9 2.3 9.8l7.3-5.7z" />
      <path fill="#EA4335" d="M24 10.8c3.3 0 6.2 1.1 8.5 3.3l6.3-6.3C35 4.2 30 2 24 2 15.4 2 7.9 7 4.3 14.2l7.3 5.7c1.7-5.3 6.6-9.1 12.4-9.1z" />
    </svg>
  );
}

function GoogleWordmark({ className }) {
  return (
    <span className={`font-semibold ${className}`} aria-label="Google">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
}

function Stars({ count = 5, className = "w-4 h-4" }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={`${className} fill-[#F59E0B] text-[#F59E0B]`} />
      ))}
    </div>
  );
}

function ReviewCard({ t, tone }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = t.body.length > CLAMP_LENGTH;

  return (
    <article
      data-testid={`testimonial-${t.name.replace(/\s+/g, "-").toLowerCase()}`}
      className="snap-start shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgba(10,25,47,0.05)] p-6 flex flex-col"
    >
      <div className="flex items-center gap-3">
        <div className={`w-11 h-11 rounded-full ${tone} text-white font-semibold text-[15px] flex items-center justify-center shrink-0`}>
          {t.name[0].toUpperCase()}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[#0A192F] text-[15px] truncate">{t.name}</span>
            <BadgeCheck className="w-4 h-4 shrink-0 fill-[#1D9BF0] text-white" />
          </div>
          <div className="text-[12px] text-[#64748B]">
            reviewed on <GoogleWordmark className="text-[12px]" />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Stars count={t.rating} />
      </div>

      <p className={`mt-3 text-[14.5px] leading-relaxed text-[#334155] ${!expanded && isLong ? "line-clamp-3" : ""}`}>
        {t.body}
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-1.5 self-start text-[14px] text-[#0284C7] hover:text-[#0369A1] font-medium transition-colors"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </article>
  );
}

export default function SocialProof() {
  const ref = useReveal();
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  const measure = useCallback(() => {
    const el = trackRef.current;
    // clientWidth can be 0 mid-layout; dividing by it yields Infinity and
    // Array.from({ length: Infinity }) throws, so bail until it's measurable.
    if (!el || !el.clientWidth) return;
    setPages(Math.max(1, Math.min(20, Math.ceil(el.scrollWidth / el.clientWidth))));
    setPage(Math.min(pagesFrom(el), Math.round(el.scrollLeft / el.clientWidth)));
  }, []);

  function pagesFrom(el) {
    return Math.max(0, Math.min(19, Math.ceil(el.scrollWidth / el.clientWidth) - 1));
  }

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const goTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const target = Math.max(0, Math.min(i, pages - 1));
    el.scrollTo({ left: target * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section id="reviews" data-testid="social-proof" ref={ref} className="reveal py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05] text-center">
          What our patients <span className="font-light text-[#64748B]">say.</span>
        </h2>

        {/* Rating summary + CTA */}
        <div className="mt-10 md:mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <div className="flex items-center gap-2.5">
              <GoogleG className="w-6 h-6" />
              <span className="font-display text-[19px] md:text-[21px] font-semibold text-[#0A192F]">
                Excellent on Google
              </span>
            </div>
            <div className="mt-2 flex items-center gap-2.5">
              <Stars className="w-5 h-5" />
              <span className="text-[14.5px] text-[#334155]">
                <strong className="text-[#0A192F]">{clinic.googleRating}</strong> out of 5 based on{" "}
                <strong className="text-[#0A192F]">{clinic.reviewCount}+ reviews</strong>
              </span>
            </div>
          </div>
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="review-us-btn"
            className="self-start md:self-auto inline-flex items-center rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3 text-[15px] font-medium shadow-[0_8px_24px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 transition-all"
          >
            Review us on Google
          </a>
        </div>

        {/* Carousel */}
        <div className="relative mt-8 md:mt-10">
          <div
            ref={trackRef}
            onScroll={measure}
            data-testid="reviews-carousel"
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t, i) => (
              <ReviewCard key={t.name} t={t} tone={avatarTones[i % avatarTones.length]} />
            ))}
          </div>

          {/* Arrows */}
          <button
            type="button"
            aria-label="Previous reviews"
            data-testid="reviews-prev"
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-[#334155] hover:text-[#0A192F] hover:border-slate-300 transition-colors disabled:opacity-0 disabled:pointer-events-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Next reviews"
            data-testid="reviews-next"
            onClick={() => goTo(page + 1)}
            disabled={page >= pages - 1}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-[#334155] hover:text-[#0A192F] hover:border-slate-300 transition-colors disabled:opacity-0 disabled:pointer-events-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Pagination dots */}
        {pages > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to reviews page ${i + 1}`}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all ${
                  i === page ? "w-2.5 h-2.5 bg-[#0A192F]" : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
