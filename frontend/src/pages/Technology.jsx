import { useEffect } from "react";
import {
  Calendar,
  Phone,
  ChevronRight,
  Scan,
  ScanLine,
  Zap,
  Crown,
  Microscope,
  Sun,
  Wand2,
  Sparkles,
  Wind,
  Target,
  Droplets,
  Eye,
  Cpu,
  Feather,
  Timer,
  ShieldCheck,
  Gauge,
  HeartPulse,
} from "lucide-react";
import Header from "@/components/site/Header";
import SocialProof from "@/components/site/SocialProof";
import FinalCTA from "@/components/site/FinalCTA";
import VisitUs from "@/components/site/VisitUs";
import Footer from "@/components/site/Footer";
import StickyActions from "@/components/site/StickyActions";
import { clinic } from "@/lib/site-data";
import { technologies } from "@/lib/technology-data";
import { useReveal } from "@/hooks/useReveal";

const PAGE_URL = "https://hawthornevillagedental.ca/technology/";

const TECH_ICONS = {
  Scan, ScanLine, Zap, Crown, Microscope, Sun, Wand2, Sparkles, Wind, Target, Droplets, Eye,
};

const whyItMatters = [
  {
    icon: Gauge,
    title: "Precision you can't eyeball",
    desc: "40× microscope magnification and 3D imaging find what naked eyes miss — which is why treatment succeeds long term.",
  },
  {
    icon: Feather,
    title: "Comfort by design",
    desc: "Computer-controlled freezing, gentle isolation and laser techniques take the discomfort out of the visit.",
  },
  {
    icon: Timer,
    title: "Fewer visits, faster care",
    desc: "CEREC crowns are milled in-office and instant digital X-rays mean answers now, not next appointment.",
  },
  {
    icon: ShieldCheck,
    title: "Safety at every layer",
    desc: "Up to 90% less radiation, continuously filtered air and bacteria-free water in every treatment unit.",
  },
  {
    icon: Eye,
    title: "Problems caught earlier",
    desc: "Laser cavity detection and two-minute VELscope oral cancer screening find trouble at its smallest.",
  },
  {
    icon: HeartPulse,
    title: "Healing, accelerated",
    desc: "Soft-tissue laser work means less bleeding, no sutures for many procedures, and faster recovery.",
  },
];

function PageMeta() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Technology | Hawthorne Village Dental";

    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    desc?.setAttribute(
      "content",
      "Explore the advanced dental technology at Hawthorne Village Dental Care in Milton: 3D CBCT imaging, CEREC same-day crowns, laser dentistry, The Wand painless anaesthesia, VELscope screening and more."
    );

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href");
    canonical?.setAttribute("href", PAGE_URL);

    const listSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Dental technology at Hawthorne Village Dental Care",
      itemListElement: technologies.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: t.name,
        url: `https://hawthornevillagedental.ca${t.href}${t.href.endsWith("/") ? "" : "/"}`,
      })),
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hawthornevillagedental.ca/" },
        { "@type": "ListItem", position: 2, name: "Technology", item: PAGE_URL },
      ],
    };

    const scripts = [listSchema, breadcrumbSchema].map((data, i) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.jsonld = `hvdc-technology-${i}`;
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
      return s;
    });

    return () => {
      document.title = prevTitle;
      if (prevDesc) desc?.setAttribute("content", prevDesc);
      if (prevCanonical) canonical?.setAttribute("href", prevCanonical);
      scripts.forEach((s) => s.remove());
    };
  }, []);

  return null;
}

function Hero() {
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section data-testid="tech-hero" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E6F8F3] blur-3xl opacity-70" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-[#EEF4FF] blur-3xl opacity-80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-20 md:pt-14 md:pb-28">
        <nav data-testid="tech-breadcrumb" aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-[13px] text-[#64748B]">
          <a href={`${process.env.PUBLIC_URL}/`} className="hover:text-[#0A192F] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0A192F] font-medium">Technology</span>
        </nav>

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div ref={leftRef} className="reveal">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-4">
              Advanced dental technology in Milton
            </div>

            <h1 className="font-display font-medium text-[38px] leading-[1.06] md:text-[56px] md:leading-[1.03] text-[#0A192F] tracking-tight">
              The technology behind <span className="font-light text-[#0284C7]">a gentler visit.</span>
            </h1>

            <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[#475569] max-w-xl">
              Modern equipment isn't about gadgets — it's about quieter, faster, more precise care
              with less radiation, earlier detection and quicker healing. Our Milton clinic invests in
              twelve technologies so every appointment is easier than the last one you remember.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                data-testid="tech-book-btn"
                href={clinic.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-12 md:h-14 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 md:px-8 text-[15px] font-medium shadow-[0_8px_24px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-4 h-4 mr-2" /> Book Appointment
              </a>
              <a
                data-testid="tech-call-btn"
                href={clinic.phoneHref}
                className="inline-flex items-center gap-2 h-12 md:h-14 rounded-full bg-white border border-slate-200 px-6 text-[15px] font-medium text-[#0A192F] hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                <Phone className="w-4 h-4" /> {clinic.phone}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {[
                { k: "12", v: "Technologies in-house" },
                { k: "90%", v: "Less X-ray radiation" },
                { k: "40×", v: "Microscope magnification" },
                { k: "<2 min", v: "Oral cancer screening" },
              ].map((t) => (
                <div key={t.v} className="text-left">
                  <div className="font-display text-xl md:text-2xl font-semibold text-[#0A192F]">{t.k}</div>
                  <div className="text-xs md:text-[13px] text-[#64748B] mt-0.5">{t.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div ref={rightRef} className="reveal relative">
            <div className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(10,25,47,0.35)] aspect-[4/5] max-h-[560px]">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&auto=format&fit=crop"
                alt="A modern digital operatory at Hawthorne Village Dental Care in Milton"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/25 via-transparent to-transparent" />
            </div>

            <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#E6F8F3] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-[#0284C7]" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[13px] text-[#64748B]">Digital everything</div>
                <div className="font-display font-semibold text-[#0A192F]">Faster, quieter, precise</div>
              </div>
            </div>

            <div className="hidden md:flex absolute -top-4 -right-4 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100 max-w-[230px]">
              <ShieldCheck className="w-5 h-5 text-[#10B981] shrink-0" strokeWidth={2} />
              <div className="text-[13px] leading-tight">
                <div className="font-semibold text-[#0A192F]">Safety first</div>
                <div className="text-[#64748B]">filtered air, purified water</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechGrid() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="tech-grid" className="reveal py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            Explore our technology
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            Twelve tools, <span className="font-light text-[#64748B]">one gentler visit.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {technologies.map((t, i) => {
            const Icon = TECH_ICONS[t.icon] || Cpu;
            return (
              <a
                key={t.name}
                href={`${process.env.PUBLIC_URL}${t.href}`}
                data-testid={`tech-card-${i}`}
                className="group rounded-[24px] bg-white border border-slate-100 p-7 shadow-[0_10px_40px_-20px_rgba(10,25,47,0.12)] hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <span className="w-11 h-11 rounded-2xl bg-[#E6F8F3] text-[#0284C7] flex items-center justify-center">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-[19px] font-semibold text-[#0A192F] leading-snug">{t.name}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#64748B] flex-1">{t.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[13.5px] font-medium text-[#0284C7] group-hover:gap-1.5 transition-all">
                  Learn more <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyItMatters() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="tech-why" className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            Why technology matters
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            Better tools, <span className="font-light text-[#64748B]">better dentistry.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyItMatters.map((b, i) => (
            <div
              key={b.title}
              data-testid={`tech-benefit-${i}`}
              className="rounded-[24px] bg-[#F8FAFC] border border-slate-100 p-7 hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="w-11 h-11 rounded-2xl bg-[#E6F8F3] text-[#0284C7] flex items-center justify-center">
                <b.icon className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-display text-[19px] font-semibold text-[#0A192F] leading-snug">{b.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[#64748B]">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 rounded-[24px] bg-[#0A192F] text-white px-7 py-6">
          <div className="flex-1 min-w-[240px]">
            <div className="font-display text-lg md:text-xl font-semibold">Curious what modern dentistry feels like?</div>
            <div className="mt-1 text-[14.5px] text-[#94A3B8]">
              Book a visit and experience the difference the right equipment makes.
            </div>
          </div>
          <a
            href={clinic.phoneHref}
            data-testid="tech-cta-call"
            className="inline-flex items-center gap-2 h-12 rounded-full bg-white text-[#0A192F] px-6 text-[14.5px] font-medium hover:bg-[#E6F8F3] transition-colors"
          >
            <Phone className="w-4 h-4" /> {clinic.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Technology() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="technology-page" className="min-h-screen bg-white text-[#1E293B]">
      <PageMeta />
      <Header />
      <main>
        <Hero />
        <TechGrid />
        <WhyItMatters />
        <SocialProof />
        <FinalCTA />
        <VisitUs />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
