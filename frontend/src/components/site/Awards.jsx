import { Award, Trophy, Star, Medal, Sparkles, Crown } from "lucide-react";
import { awards } from "@/lib/site-data";

// Tier-driven design tokens. Each badge gets a unique premium palette
// (ribbon, medallion + typography) — no images required.
const tones = {
  crimson: {
    ring: "from-[#7F1D1D] to-[#DC2626]",
    medal: "bg-gradient-to-br from-[#B91C1C] to-[#7F1D1D] text-white ring-[#FCA5A5]/40",
    accent: "text-[#DC2626]",
    icon: Trophy,
    tierBg: "bg-[#FEE2E2] text-[#B91C1C]",
  },
  platinum: {
    ring: "from-slate-300 to-slate-500",
    medal: "bg-gradient-to-br from-slate-200 to-slate-400 text-slate-800 ring-slate-300/60",
    accent: "text-slate-600",
    icon: Medal,
    tierBg: "bg-slate-100 text-slate-700",
  },
  diamond: {
    ring: "from-[#0EA5E9] to-[#0284C7]",
    medal: "bg-gradient-to-br from-[#38BDF8] to-[#0284C7] text-white ring-[#7DD3FC]/50",
    accent: "text-[#0284C7]",
    icon: Sparkles,
    tierBg: "bg-[#E0F2FE] text-[#075985]",
  },
  gold: {
    ring: "from-[#D97706] to-[#B45309]",
    medal: "bg-gradient-to-br from-[#FBBF24] to-[#D97706] text-white ring-[#FCD34D]/50",
    accent: "text-[#B45309]",
    icon: Crown,
    tierBg: "bg-[#FEF3C7] text-[#92400E]",
  },
  laurel: {
    ring: "from-[#166534] to-[#14532D]",
    medal: "bg-gradient-to-br from-[#22C55E] to-[#16A34A] text-white ring-[#86EFAC]/50",
    accent: "text-[#16A34A]",
    icon: Award,
    tierBg: "bg-[#DCFCE7] text-[#166534]",
  },
  mint: {
    ring: "from-[#0284C7] to-[#0369A1]",
    medal: "bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] text-white ring-[#7DD3FC]/50",
    accent: "text-[#0284C7]",
    icon: Star,
    tierBg: "bg-[#E6F8F3] text-[#0284C7]",
  },
};

function AwardCard({ item }) {
  const t = tones[item.tone] || tones.platinum;
  const Icon = t.icon;
  return (
    <article
      data-testid={`award-${item.year}-${item.tier.toLowerCase()}`}
      className="shrink-0 w-[240px] md:w-[260px] group"
    >
      <div className="relative h-full rounded-2xl bg-white border border-slate-100 p-5 md:p-6 hover:-translate-y-1 hover:shadow-[0_18px_50px_-20px_rgba(10,25,47,0.2)] transition-all duration-300">
        {/* Ribbon accent */}
        <div className={`absolute top-0 left-6 right-6 h-[3px] rounded-b-full bg-gradient-to-r ${t.ring}`} />

        <div className="flex items-start gap-4">
          {/* Medallion */}
          <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ring-4 ${t.medal}`}>
            <Icon className="w-6 h-6" strokeWidth={1.75} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="text-[11px] uppercase tracking-[0.14em] text-[#94A3B8] font-medium truncate">
              {item.publisher}
            </div>
            <div className="mt-1 font-display text-[17px] leading-tight font-semibold text-[#0A192F]">
              {item.title}
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${t.tierBg}`}>
                {item.tier}
              </span>
              <span className={`text-[13px] font-display font-medium ${t.accent}`}>{item.year}</span>
            </div>
          </div>
        </div>

        {item.note && (
          <div className="mt-4 pt-3 border-t border-slate-100 text-[12px] text-[#64748B] italic">
            {item.note}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Awards() {
  // Duplicate the array so the CSS marquee loops seamlessly.
  const track = [...awards, ...awards];

  return (
    <section
      id="awards"
      data-testid="awards-section"
      className="relative py-16 md:py-20 bg-[#F8FAFC] border-y border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 md:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <div className="text-[12px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-2">
            Award-winning dentists in Milton
          </div>
          <h2 className="font-display text-2xl md:text-3xl text-[#0A192F] tracking-tight leading-tight">
            A decade of awards from the community <span className="italic font-light text-[#64748B]">we serve.</span>
          </h2>
        </div>
        <div className="text-[13px] text-[#64748B] max-w-sm">
          12 consecutive recognitions from the Milton Champion, Hamilton Spectator,
          Three Best Rated and Opencare, voted by patients, not committees.
        </div>
      </div>

      {/* Auto-scroller */}
      <div className="relative">
        <div className="flex gap-4 md:gap-5 animate-marquee-slow w-max px-6 md:px-8">
          {track.map((a, i) => (
            <AwardCard key={`${a.year}-${a.tier}-${i}`} item={a} />
          ))}
        </div>
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-[#F8FAFC] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-[#F8FAFC] to-transparent" />
      </div>
    </section>
  );
}
