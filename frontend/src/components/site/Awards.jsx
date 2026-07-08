// Official certification and award logos, served from public/images/certifications.
const logos = [
  { src: "cert-01.png", alt: "Three Best Rated — Best Business of 2019 Excellence award, Dr. Raja Sama, DDS" },
  { src: "cert-05.png", alt: "Three Best Rated — Top 3 Dentists in Milton 2018" },
  { src: "cert-02.png", alt: "Milton Champion Readers' Choice Awards 2018 — Platinum winner" },
  { src: "cert-03.png", alt: "Readers' Choice Awards 2018 — Diamond winner" },
  { src: "cert-04.png", alt: "Readers' Choice Awards 2017 — Gold winner" },
  { src: "cert-06.png", alt: "Readers' Choice Awards 2019 — Diamond winner" },
  { src: "cert-07.png", alt: "Readers' Choice Awards 2020 — Diamond winner" },
  { src: "cert-08.png", alt: "Readers' Choice Awards 2020 — Platinum winner" },
  { src: "cert-09.png", alt: "Canadian Champion Readers' Choice Awards 2021 — Platinum winner" },
  { src: "cert-10.png", alt: "The Champion Readers' Choice Awards 2022 — Gold winner" },
  { src: "cert-11.png", alt: "Hamilton Spectator Readers' Choice Awards 2022 — Platinum winner" },
];

function AwardLogo({ item }) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/images/certifications/${item.src}`}
      alt={item.alt}
      loading="lazy"
      draggable="false"
      className="h-20 md:h-24 w-auto object-contain shrink-0 select-none"
    />
  );
}

export default function Awards() {
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
            A decade of awards from the community <span className="font-light text-[#64748B]">we serve.</span>
          </h2>
        </div>
        <div className="text-[13px] text-[#64748B] max-w-sm">
          12 consecutive awards from the Milton Champion, Hamilton Spectator, Three Best
          Rated and Opencare, chosen by patients rather than committees.
        </div>
      </div>

      {/* Auto-scroller — the track is duplicated so the CSS marquee loops seamlessly. */}
      <div className="relative">
        <div className="flex items-center gap-10 md:gap-14 animate-marquee-slow w-max px-6 md:px-8">
          {logos.map((item) => (
            <AwardLogo key={item.src} item={item} />
          ))}
          {logos.map((item) => (
            <AwardLogo key={`${item.src}-dup`} item={{ ...item, alt: "" }} />
          ))}
        </div>
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-[#F8FAFC] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-[#F8FAFC] to-transparent" />
      </div>
    </section>
  );
}
