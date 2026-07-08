import { useEffect } from "react";
import {
  Calendar,
  Phone,
  ChevronRight,
  ScanLine,
  ShieldCheck,
  CheckCircle2,
  Landmark,
  CreditCard,
  Award,
  Anchor,
  Crown,
  MoveDiagonal,
  Utensils,
  Frown,
  Bone,
  Smile,
  Sparkles,
  Timer,
  HeartPulse,
  Layers,
  Activity,
  Baby,
  BadgeCheck,
  Bed,
  Braces,
  Brain,
  CalendarCheck,
  CircleDot,
  Clock,
  Cpu,
  Droplets,
  Ear,
  Eye,
  Feather,
  Gauge,
  Gem,
  Hand,
  Heart,
  Hourglass,
  Leaf,
  Microscope,
  Moon,
  Puzzle,
  RefreshCw,
  Ruler,
  Scan,
  Shield,
  ShieldPlus,
  Slice,
  SmilePlus,
  Snowflake,
  Star,
  Stethoscope,
  Sun,
  Syringe,
  Target,
  Thermometer,
  Trophy,
  Wand2,
  Waves,
  Wind,
  Wrench,
  Zap,
  ZoomIn,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/site/Header";
import Awards from "@/components/site/Awards";
import SocialProof from "@/components/site/SocialProof";
import FinalCTA from "@/components/site/FinalCTA";
import VisitUs from "@/components/site/VisitUs";
import Footer from "@/components/site/Footer";
import StickyActions from "@/components/site/StickyActions";
import { clinic, gallery } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

// Icon registry: configs reference icons by name so they stay serializable.
const ICONS = {
  Activity, Anchor, Award, Baby, BadgeCheck, Bed, Bone, Braces, Brain, Calendar,
  CalendarCheck, CheckCircle2, CircleDot, Clock, Cpu, CreditCard, Crown, Droplets,
  Ear, Eye, Feather, Frown, Gauge, Gem, Hand, Heart, HeartPulse, Hourglass, Landmark,
  Layers, Leaf, Microscope, Moon, MoveDiagonal, Phone, Puzzle, RefreshCw, Ruler,
  Scan, ScanLine, Shield, ShieldCheck, ShieldPlus, Slice, Smile, SmilePlus,
  Snowflake, Sparkles, Star, Stethoscope, Sun, Syringe, Target, Thermometer, Timer,
  Trophy, Utensils, Wand2, Waves, Wind, Wrench, Zap, ZoomIn,
};

function Icon({ name, className, strokeWidth = 1.75 }) {
  const Cmp = ICONS[name] || Sparkles;
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}

// Two-tone section heading: dark lead + light tail.
function TwoTone({ a, b, lightClass = "text-[#64748B]" }) {
  return (
    <>
      {a} <span className={`font-light ${lightClass}`}>{b}</span>
    </>
  );
}

function PageMeta({ config }) {
  useEffect(() => {
    const pageUrl = `https://hawthornevillagedental.ca${config.urlPath || `/services/${config.slug}/`}`;
    const prevTitle = document.title;
    document.title = config.meta.title;

    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    desc?.setAttribute("content", config.meta.description);

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href");
    canonical?.setAttribute("href", pageUrl);

    const procedureSchema = {
      "@context": "https://schema.org",
      "@type": config.meta.schemaType || "MedicalProcedure",
      name: config.name,
      ...(config.meta.procedure?.alternateName ? { alternateName: config.meta.procedure.alternateName } : {}),
      url: pageUrl,
      description: config.meta.procedure?.description || config.meta.description,
      ...(config.meta.procedure?.howPerformed ? { howPerformed: config.meta.procedure.howPerformed } : {}),
      provider: {
        "@type": "Dentist",
        name: clinic.name,
        telephone: clinic.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: clinic.address.street,
          addressLocality: clinic.address.city,
          addressRegion: clinic.address.region,
          postalCode: clinic.address.postal,
          addressCountry: clinic.address.country,
        },
      },
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: config.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };

    const parentCrumb = config.breadcrumb || { label: "Services", href: "/#services" };
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hawthornevillagedental.ca/" },
        { "@type": "ListItem", position: 2, name: parentCrumb.label, item: `https://hawthornevillagedental.ca${parentCrumb.href}` },
        { "@type": "ListItem", position: 3, name: config.name, item: pageUrl },
      ],
    };

    const scripts = [procedureSchema, faqSchema, breadcrumbSchema].map((data, i) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.jsonld = `hvdc-${config.slug}-${i}`;
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
  }, [config]);

  return null;
}

function PageHero({ config }) {
  const leftRef = useReveal();
  const rightRef = useReveal();
  const { hero } = config;
  const tid = config.testIdPrefix;

  return (
    <section data-testid={`${tid}-hero`} className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E6F8F3] blur-3xl opacity-70" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-[#EEF4FF] blur-3xl opacity-80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-20 md:pt-14 md:pb-28">
        {/* Breadcrumb */}
        <nav data-testid={`${tid}-breadcrumb`} aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-[13px] text-[#64748B]">
          <a href={`${process.env.PUBLIC_URL}/`} className="hover:text-[#0A192F] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <a
            href={`${process.env.PUBLIC_URL}${(config.breadcrumb || { href: "/#services" }).href}`}
            className="hover:text-[#0A192F] transition-colors"
          >
            {(config.breadcrumb || { label: "Services" }).label}
          </a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0A192F] font-medium">{config.name}</span>
        </nav>

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div ref={leftRef} className="reveal">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-4">
              {hero.eyebrow}
            </div>

            <h1 className="font-display font-medium text-[38px] leading-[1.06] md:text-[56px] md:leading-[1.03] text-[#0A192F] tracking-tight">
              {hero.titleA} <span className="font-light text-[#0284C7]">{hero.titleB}</span>
            </h1>

            <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[#475569] max-w-xl">
              {hero.intro}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                data-testid={`${tid}-book-btn`}
                href={clinic.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-12 md:h-14 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 md:px-8 text-[15px] font-medium shadow-[0_8px_24px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-4 h-4 mr-2" /> {hero.bookLabel || "Book Appointment"}
              </a>
              <a
                data-testid={`${tid}-call-btn`}
                href={clinic.phoneHref}
                className="inline-flex items-center gap-2 h-12 md:h-14 rounded-full bg-white border border-slate-200 px-6 text-[15px] font-medium text-[#0A192F] hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                <Phone className="w-4 h-4" /> {clinic.phone}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {hero.stats.map((t) => (
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
                src={hero.image.src}
                alt={hero.image.alt}
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/25 via-transparent to-transparent" />
            </div>

            <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#E6F8F3] flex items-center justify-center">
                <Icon name={hero.floatBottomLeft.icon} className="w-5 h-5 text-[#0284C7]" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[13px] text-[#64748B]">{hero.floatBottomLeft.label}</div>
                <div className="font-display font-semibold text-[#0A192F]">{hero.floatBottomLeft.value}</div>
              </div>
            </div>

            <div className="hidden md:flex absolute -top-4 -right-4 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100 max-w-[230px]">
              <Icon name={hero.floatTopRight.icon} className="w-5 h-5 text-[#10B981] shrink-0" strokeWidth={2} />
              <div className="text-[13px] leading-tight">
                <div className="font-semibold text-[#0A192F]">{hero.floatTopRight.title}</div>
                <div className="text-[#64748B]">{hero.floatTopRight.sub}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroSection({ config }) {
  const ref = useReveal();
  const { intro } = config;
  const tid = config.testIdPrefix;

  return (
    <section ref={ref} data-testid={`${tid}-intro`} className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-center">
        {/* Image side */}
        <div className="relative">
          <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-[0_30px_80px_-20px_rgba(10,25,47,0.3)] group">
            <img
              src={intro.image.src}
              alt={intro.image.alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 via-transparent to-transparent" />
          </div>

          {/* Floating cards */}
          <div className="hidden md:flex absolute -bottom-6 left-6 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-[#E6F8F3] flex items-center justify-center">
              <Icon name={intro.floatCards[0].icon} className="w-5 h-5 text-[#0284C7]" strokeWidth={2} />
            </div>
            <div>
              <div className="font-display font-semibold text-[#0A192F]">{intro.floatCards[0].title}</div>
              <div className="text-[13px] text-[#64748B]">{intro.floatCards[0].sub}</div>
            </div>
          </div>
          {intro.floatCards[1] && (
            <div className="hidden md:flex absolute -top-4 -right-4 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100 max-w-[240px]">
              <Icon name={intro.floatCards[1].icon} className="w-5 h-5 text-[#10B981] shrink-0" strokeWidth={2} />
              <div className="text-[13px] leading-tight">
                <div className="font-semibold text-[#0A192F]">{intro.floatCards[1].title}</div>
                <div className="text-[#64748B]">{intro.floatCards[1].sub}</div>
              </div>
            </div>
          )}
        </div>

        {/* Content side */}
        <div>
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            {intro.eyebrow}
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            <TwoTone a={intro.titleA} b={intro.titleB} />
          </h2>
          <p className="mt-6 text-[16.5px] leading-relaxed text-[#475569] max-w-xl">{intro.paragraph}</p>

          <div className="mt-8 grid gap-4">
            {intro.parts.map((c, i) => (
              <div
                key={i}
                data-testid={`${tid}-component-${i + 1}`}
                className="rounded-[24px] bg-[#F8FAFC] border border-slate-100 p-6 md:p-7 flex items-start gap-5 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.15)] transition-all duration-300"
              >
                <span className="w-12 h-12 rounded-2xl bg-[#E6F8F3] text-[#0284C7] flex items-center justify-center shrink-0">
                  <Icon name={c.icon} className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-mono text-[13px] tabular-nums text-[#0284C7] font-semibold">{c.kicker}</div>
                  <h3 className="mt-1 font-display text-[20px] font-semibold text-[#0A192F] leading-snug">{c.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-[#64748B]">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {intro.closingNote && (
            <p className="mt-6 text-[14.5px] leading-relaxed text-[#64748B] max-w-xl">{intro.closingNote}</p>
          )}
        </div>
      </div>
    </section>
  );
}

function ContextSection({ config }) {
  const ref = useReveal();
  const { context } = config;
  const tid = config.testIdPrefix;

  return (
    <section ref={ref} data-testid={`${tid}-context`} className="reveal py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            {context.eyebrow}
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            <TwoTone a={context.titleA} b={context.titleB} />
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Feature image tile */}
          <div
            data-testid={`${tid}-context-feature`}
            className="relative rounded-[24px] overflow-hidden sm:col-span-2 lg:col-span-1 lg:row-span-2 min-h-[300px] group"
          >
            <img
              src={context.feature.image.src}
              alt={context.feature.image.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-8 text-white">
              <div className="font-display text-2xl md:text-[26px] leading-snug">{context.feature.headline}</div>
              <p className="mt-3 text-[14px] leading-relaxed text-white/75">{context.feature.caption}</p>
            </div>
          </div>

          {context.cards.map((s, i) => (
            <div
              key={s.title}
              data-testid={`${tid}-context-${i}`}
              className="rounded-[24px] bg-white border border-slate-100 p-7 shadow-[0_10px_40px_-20px_rgba(10,25,47,0.12)] hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="w-11 h-11 rounded-2xl bg-[#E6F8F3] text-[#0284C7] flex items-center justify-center">
                <Icon name={s.icon} className="w-5 h-5" />
              </span>
              <h3 className="mt-5 font-display text-[19px] font-semibold text-[#0A192F] leading-snug">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[#64748B]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection({ config }) {
  const ref = useReveal();
  const { benefits } = config;
  const tid = config.testIdPrefix;

  return (
    <section ref={ref} data-testid={`${tid}-benefits`} className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            {benefits.eyebrow}
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            <TwoTone a={benefits.titleA} b={benefits.titleB} />
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Stat tile */}
          <div
            data-testid={`${tid}-benefit-stat`}
            className="rounded-[24px] bg-[#E6F8F3] p-7 md:p-8 flex flex-col justify-between min-h-[220px]"
          >
            <Icon name={benefits.stat.icon} className="w-6 h-6 text-[#0284C7]" />
            <div>
              <div className="font-display text-5xl md:text-6xl font-semibold text-[#0A192F] leading-none">
                {benefits.stat.value}
              </div>
              <div className="mt-2 text-[15px] font-medium text-[#0A192F]">{benefits.stat.label}</div>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#334155]/80">{benefits.stat.note}</p>
            </div>
          </div>

          {benefits.cards.map((b, i) => (
            <div
              key={b.title}
              data-testid={`${tid}-benefit-${i}`}
              className="rounded-[24px] bg-[#F8FAFC] border border-slate-100 p-7 hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="w-11 h-11 rounded-2xl bg-[#E6F8F3] text-[#0284C7] flex items-center justify-center">
                <Icon name={b.icon} className="w-5 h-5" />
              </span>
              <h3 className="mt-5 font-display text-[19px] font-semibold text-[#0A192F] leading-snug">{b.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[#64748B]">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 rounded-[24px] bg-[#0A192F] text-white px-7 py-6">
          <div className="flex-1 min-w-[240px]">
            <div className="font-display text-lg md:text-xl font-semibold">{benefits.cta.title}</div>
            <div className="mt-1 text-[14.5px] text-[#94A3B8]">{benefits.cta.sub}</div>
          </div>
          <a
            href={clinic.phoneHref}
            data-testid={`${tid}-consult-call`}
            className="inline-flex items-center gap-2 h-12 rounded-full bg-white text-[#0A192F] px-6 text-[14.5px] font-medium hover:bg-[#E6F8F3] transition-colors"
          >
            <Phone className="w-4 h-4" /> {clinic.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

function OptionsSection({ config }) {
  const ref = useReveal();
  const { options } = config;
  const tid = config.testIdPrefix;

  return (
    <section ref={ref} data-testid={`${tid}-options`} className="reveal py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            {options.eyebrow}
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            <TwoTone a={options.titleA} b={options.titleB} />
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {options.cards.map((o, i) => (
            <div
              key={o.title}
              data-testid={`${tid}-option-${i}`}
              className="relative rounded-[24px] bg-white border border-slate-100 p-7 shadow-[0_10px_40px_-20px_rgba(10,25,47,0.12)] hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.2)] transition-all duration-300"
            >
              <div className="font-mono text-[13px] tabular-nums text-[#0284C7] font-semibold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-display text-[19px] font-semibold text-[#0A192F] leading-snug">{o.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-[#64748B]">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection({ config }) {
  const ref = useReveal();
  const tid = config.testIdPrefix;
  const item = gallery.find((g) => g.id === config.galleryId);
  if (!item) return null;

  return (
    <section ref={ref} data-testid={`${tid}-gallery`} className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
              Real patient, real result
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
              {item.patient}&apos;s <span className="font-light text-[#64748B]">new smile.</span>
            </h2>
            <div className="mt-8 space-y-6">
              <div>
                <div className="text-[12px] uppercase tracking-[0.14em] text-[#94A3B8] font-medium mb-2">Problem</div>
                <p className="text-[15.5px] leading-relaxed text-[#475569]">{item.problem}</p>
              </div>
              <div>
                <div className="text-[12px] uppercase tracking-[0.14em] text-[#10B981] font-medium mb-2">Solution</div>
                <p className="text-[15.5px] leading-relaxed text-[#475569]">{item.solution}</p>
              </div>
            </div>
            <a
              href={`${process.env.PUBLIC_URL}/#gallery`}
              data-testid={`${tid}-gallery-link`}
              className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-[#0284C7] hover:text-[#0369A1] transition-colors"
            >
              See more transformations <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Before", src: item.before, badge: "bg-white text-[#0A192F]" },
              { label: "After", src: item.after, badge: "bg-[#0A192F] text-white" },
            ].map((img) => (
              <div key={img.label} className="relative rounded-[24px] overflow-hidden aspect-[3/4] shadow-[0_20px_50px_-20px_rgba(10,25,47,0.25)]">
                <img
                  src={img.src}
                  alt={`${item.patient}'s smile ${img.label.toLowerCase()} ${config.name.toLowerCase()} treatment`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className={`absolute top-4 left-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider shadow ${img.badge}`}>
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyHereSection({ config }) {
  const ref = useReveal();
  const { whyHere } = config;
  const tid = config.testIdPrefix;

  return (
    <section ref={ref} data-testid={`${tid}-why`} className="reveal py-24 md:py-32 bg-[#0A192F] text-white overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#0284C7]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-center">
        <div>
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#7DD3FC] font-medium mb-3">
            Why have it done here
          </div>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-[1.05]">
            <TwoTone a={whyHere.titleA} b={whyHere.titleB} lightClass="text-[#94A3B8]" />
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-[#CBD5E1]">{whyHere.paragraph}</p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-3">
          {whyHere.items.map((t, i) => (
            <li
              key={t.name}
              data-testid={`${tid}-why-item-${i}`}
              className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 hover:bg-white/[0.06] transition-colors"
            >
              <span className="w-10 h-10 rounded-xl bg-[#E6F8F3] text-[#0A192F] flex items-center justify-center">
                <Icon name={t.icon} className="w-5 h-5" />
              </span>
              <div className="mt-4 font-medium text-[15px] leading-tight">{t.name}</div>
              <div className="mt-1.5 text-[13.5px] text-[#94A3B8] leading-relaxed">{t.benefit}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CostSection({ config }) {
  const ref = useReveal();
  const tid = config.testIdPrefix;

  return (
    <section ref={ref} data-testid={`${tid}-cost`} className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="rounded-[32px] bg-[#E6F8F3] p-10 md:p-16 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/40 blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
              Cost and coverage
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
              A clear price <span className="font-light text-[#0A192F]/70">before we begin.</span>
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-[#334155]">{config.cost.paragraph}</p>
          </div>

          <div className="relative">
            <ul className="space-y-3">
              {[
                { icon: CheckCircle2, text: "Written estimate before any treatment starts" },
                { icon: Landmark, text: "Direct billing to your insurer and CDCP accepted" },
                { icon: CreditCard, text: "0% financing over 6, 12 or 24 months" },
              ].map((f, i) => (
                <li
                  key={i}
                  data-testid={`${tid}-cost-item-${i}`}
                  className="flex items-start gap-3 rounded-2xl bg-white/80 backdrop-blur border border-white px-5 py-4 text-[15px] text-[#0A192F] shadow-sm"
                >
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-[#E6F8F3] text-[#10B981] flex items-center justify-center shrink-0">
                    <f.icon className="w-4 h-4" />
                  </span>
                  <span className="pt-0.5">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection({ config }) {
  const ref = useReveal();
  const tid = config.testIdPrefix;

  return (
    <section ref={ref} data-testid={`${tid}-faq`} className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            {config.faqEyebrow || `${config.name} questions`}
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            Asked in this chair, <span className="font-light text-[#64748B]">every week.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {config.faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              data-testid={`${tid}-faq-item-${i}`}
              className="border-b border-slate-200 last:border-b-0"
            >
              <AccordionTrigger className="text-left font-display text-[17px] md:text-lg font-medium text-[#0A192F] hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-[#475569] pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default function ServicePageTemplate({ config }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [config.slug]);

  return (
    <div data-testid={`${config.testIdPrefix}-page`} className="min-h-screen bg-white text-[#1E293B]">
      <PageMeta config={config} />
      <Header />
      <main>
        <PageHero config={config} />
        <Awards
          eyebrow={config.awards.eyebrow || "Award-winning dentists in Milton"}
          title={<TwoTone a={config.awards.titleA} b={config.awards.titleB} />}
          subtitle={config.awards.subtitle}
        />
        <IntroSection config={config} />
        <ContextSection config={config} />
        <BenefitsSection config={config} />
        <OptionsSection config={config} />
        {config.galleryId && <GallerySection config={config} />}
        <WhyHereSection config={config} />
        {config.cost && <CostSection config={config} />}
        <SocialProof />
        <FAQSection config={config} />
        <FinalCTA />
        <VisitUs />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
