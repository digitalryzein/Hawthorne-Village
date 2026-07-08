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
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/site/Header";
import SocialProof from "@/components/site/SocialProof";
import FinalCTA from "@/components/site/FinalCTA";
import VisitUs from "@/components/site/VisitUs";
import Footer from "@/components/site/Footer";
import StickyActions from "@/components/site/StickyActions";
import { clinic, gallery } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const PAGE_URL = "https://hawthornevillagedental.ca/services/dental-implants/";
const HERO_IMAGE = "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=1200&q=80&auto=format&fit=crop";

// Consequences of untreated tooth loss, from the practice's patient education content.
const consequences = [
  {
    icon: MoveDiagonal,
    title: "Neighbouring teeth drift",
    desc: "Even one missing tooth lets neighbouring and opposing teeth tip, drift and over-erupt into the gap.",
  },
  {
    icon: Utensils,
    title: "Chewing and speech suffer",
    desc: "Losing several teeth can make it genuinely hard to chew comfortably and speak clearly.",
  },
  {
    icon: Layers,
    title: "Your bite can collapse",
    desc: "A collapsing bite puts stress on jaw joints and facial muscles, often showing up as tension and headaches.",
  },
  {
    icon: Frown,
    title: "Facial structure changes",
    desc: "Reduced facial height from bone loss can create an older appearance and more noticeable facial lines.",
  },
];

const benefits = [
  {
    icon: Smile,
    title: "Looks and feels natural",
    desc: "Implants are designed to look, feel and function like your own teeth, in harmony with your smile and facial features.",
  },
  {
    icon: Anchor,
    title: "A secure, permanent foundation",
    desc: "No slipping, no adhesives. Implants give replacement teeth firm, safe support you can rely on every day.",
  },
  {
    icon: Bone,
    title: "Prevents further bone loss",
    desc: "Like natural roots, implants stimulate the jawbone, helping preserve it instead of letting it shrink away.",
  },
  {
    icon: Utensils,
    title: "Eat what you love again",
    desc: "Rediscover the joy of eating healthy, varied food without the discomfort of poorly fitting dentures.",
  },
  {
    icon: Sparkles,
    title: "Confidence in every laugh",
    desc: "Speak clearly, laugh comfortably and smile without thinking about it. That's the point of it all.",
  },
  {
    icon: HeartPulse,
    title: "Built to last a lifetime",
    desc: "With good oral hygiene and regular checkups, implants have a 95%+ ten-year success rate and often last a lifetime.",
  },
];

const options = [
  {
    title: "Single tooth implant",
    desc: "One implant and one crown replace a single missing tooth without touching the healthy teeth beside it.",
  },
  {
    title: "Implant-supported bridge",
    desc: "Two or more implants anchor a fixed bridge, replacing several missing teeth in a row.",
  },
  {
    title: "Teeth In a Day",
    desc: "Full-arch implants placed and restored with new teeth in a single visit, one of our signature services.",
  },
  {
    title: "Bone grafting support",
    desc: "If bone has already been lost, grafting rebuilds a solid foundation so implants have something to hold onto.",
  },
];

const steps = [
  {
    step: "01",
    title: "Plan in 3D",
    desc: "A low-radiation 3D CBCT scan maps your bone, nerves and sinuses so Dr. Sarna can plan the exact implant position before anything touches your mouth.",
  },
  {
    step: "02",
    title: "Place the implant",
    desc: "The titanium implant that replaces your tooth root is placed precisely, with The Wand painless anaesthesia and oral sedation available if you're anxious.",
  },
  {
    step: "03",
    title: "Heal and integrate",
    desc: "Over a few months the implant fuses with your jawbone. Plasma Rich Fibrin, made from your own platelets, can speed healing along.",
  },
  {
    step: "04",
    title: "Attach your new tooth",
    desc: "A custom crown is attached to the implant, matched to your natural teeth. Then you simply use it like the tooth you were born with.",
  },
];

const whyHere = [
  {
    icon: Award,
    name: "ICOI Fellowship in Implantology",
    benefit: "Dr. Sarna proudly holds a Fellowship with the International Congress of Oral Implantologists, with training at UCSF and UCLA.",
  },
  {
    icon: ScanLine,
    name: "3D CBCT-guided planning",
    benefit: "Every implant is planned on a 3D scan of your jaw, so placement is precise and predictable — no surprises mid-treatment.",
  },
  {
    icon: HeartPulse,
    name: "Plasma Rich Fibrin healing",
    benefit: "Your own platelets are used to speed healing after placement and grafting, a technique few Milton clinics offer.",
  },
  {
    icon: Timer,
    name: "Teeth In a Day capability",
    benefit: "For qualifying patients, full-arch implants are placed and restored with new teeth in a single visit.",
  },
];

const faqs = [
  {
    q: "What exactly is a dental implant?",
    a: "A dental implant is the closest solution to a natural tooth. It has two components: an implant portion that replaces the root of the tooth, and a crown portion that replaces the visible tooth above the gums. Together they look, feel and function like a natural tooth.",
  },
  {
    q: "How much does a dental implant cost in Milton?",
    a: "A single implant with crown at Hawthorne Village Dental Care typically ranges from $3,500 to $5,500 depending on bone quality and materials. You receive a written estimate before any treatment begins, we bill your insurance directly, and 0% financing is available over 6 to 24 months.",
  },
  {
    q: "How long do dental implants last?",
    a: "With good oral hygiene and regular checkups, dental implants have a 95%+ ten-year success rate and often last a lifetime. Like your own teeth, they stimulate the jaw and help prevent further bone loss.",
  },
  {
    q: "Does getting an implant hurt?",
    a: "Most patients are surprised by how comfortable the procedure is. We use The Wand computer-controlled anaesthesia, and oral sedation is available for anxious patients. Most people describe the recovery as milder than a tooth extraction.",
  },
  {
    q: "What if I've already lost bone in my jaw?",
    a: "That's common, and usually solvable. Dental bone grafting rebuilds lost jawbone so implants have a solid foundation to hold onto, and Plasma Rich Fibrin made from your own platelets helps the area heal faster.",
  },
  {
    q: "Why does a missing tooth need replacing at all?",
    a: "Even one missing tooth can cause neighbouring and opposing teeth to tip, drift and over-erupt. Several missing teeth can affect chewing, speech and your bite, stressing jaw joints and facial muscles, and bone loss can change your facial appearance over time. Replacing the tooth stops that chain reaction.",
  },
  {
    q: "Are implants covered by insurance or the CDCP?",
    a: "Many dental insurance plans cover part of implant treatment, and we bill your provider directly so there's no reimbursement wait. We're also a participating CDCP provider. Our front desk will confirm your exact coverage before treatment begins.",
  },
];

// Page-specific meta tags and JSON-LD, restored on unmount.
function PageMeta() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Dental Implants in Milton, ON - Hawthorne Village Dental Care";

    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    desc?.setAttribute(
      "content",
      "Are you suffering from permanent tooth loss? Hawthorne Village Dental Care offers same day dental implants service in Milton. Book your appointment now."
    );

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href");
    canonical?.setAttribute("href", PAGE_URL);

    const procedureSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: "Dental Implants",
      alternateName: "Dental Implant Surgery",
      url: PAGE_URL,
      description:
        "Dental implants provide a secure foundation for replacement teeth that look, feel and function like natural teeth, placed by an ICOI Fellow using 3D CBCT-guided planning.",
      howPerformed:
        "3D CBCT-guided treatment planning, placement of a titanium implant that replaces the tooth root, healing and osseointegration supported by Plasma Rich Fibrin when indicated, and restoration with a custom crown.",
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
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hawthornevillagedental.ca/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://hawthornevillagedental.ca/#services" },
        { "@type": "ListItem", position: 3, name: "Dental Implants", item: PAGE_URL },
      ],
    };

    const scripts = [procedureSchema, faqSchema, breadcrumbSchema].map((data, i) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.jsonld = `hvdc-implants-${i}`;
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

function PageHero() {
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section data-testid="implants-hero" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E6F8F3] blur-3xl opacity-70" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-[#EEF4FF] blur-3xl opacity-80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-20 md:pt-14 md:pb-28">
        {/* Breadcrumb */}
        <nav data-testid="implants-breadcrumb" aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-[13px] text-[#64748B]">
          <a href={`${process.env.PUBLIC_URL}/`} className="hover:text-[#0A192F] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <a href={`${process.env.PUBLIC_URL}/#services`} className="hover:text-[#0A192F] transition-colors">Services</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0A192F] font-medium">Dental Implants</span>
        </nav>

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div ref={leftRef} className="reveal">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-4">
              Dental implants in Milton
            </div>

            <h1 className="font-display font-medium text-[38px] leading-[1.06] md:text-[56px] md:leading-[1.03] text-[#0A192F] tracking-tight">
              Missing teeth, <span className="font-light text-[#0284C7]">replaced for good.</span>
            </h1>

            <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[#475569] max-w-xl">
              Dental implants provide a secure foundation for replacement teeth that look, feel and
              function like natural teeth. Eliminate the problems of poorly fitting dentures or missing
              teeth, and rediscover the comfort and confidence to enjoy your life.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                data-testid="implants-book-btn"
                href={clinic.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-12 md:h-14 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 md:px-8 text-[15px] font-medium shadow-[0_8px_24px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-4 h-4 mr-2" /> Book a Consultation
              </a>
              <a
                data-testid="implants-call-btn"
                href={clinic.phoneHref}
                className="inline-flex items-center gap-2 h-12 md:h-14 rounded-full bg-white border border-slate-200 px-6 text-[15px] font-medium text-[#0A192F] hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                <Phone className="w-4 h-4" /> {clinic.phone}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {[
                { k: "ICOI", v: "Implantology Fellow" },
                { k: "95%+", v: "10-year success rate" },
                { k: "3D", v: "CBCT-guided planning" },
                { k: "0%", v: "Financing available" },
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
                src={HERO_IMAGE}
                alt="Dental implant treatment at Hawthorne Village Dental Care in Milton"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/25 via-transparent to-transparent" />
            </div>

            <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#E6F8F3] flex items-center justify-center">
                <Award className="w-5 h-5 text-[#0284C7]" />
              </div>
              <div>
                <div className="text-[13px] text-[#64748B]">Dr. Raju Sarna</div>
                <div className="font-display font-semibold text-[#0A192F]">ICOI Fellow, Implantology</div>
              </div>
            </div>

            <div className="hidden md:flex absolute -top-4 -right-4 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100 max-w-[230px]">
              <ShieldCheck className="w-5 h-5 text-[#10B981]" />
              <div className="text-[13px] leading-tight">
                <div className="font-semibold text-[#0A192F]">Gold standard</div>
                <div className="text-[#64748B]">for tooth replacement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIsAnImplant() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="implants-intro" className="reveal py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-center">
        <div>
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            What is a dental implant
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            The closest thing to <span className="font-light text-[#64748B]">the tooth you lost.</span>
          </h2>
          <p className="mt-6 text-[16.5px] leading-relaxed text-[#475569]">
            Dental implants are currently the gold standard for tooth replacement. They look and feel
            like natural teeth and can last a lifetime with proper care — a permanent solution that lets
            you regain a natural-looking, healthy and functional smile.
          </p>
          <p className="mt-4 text-[16.5px] leading-relaxed text-[#475569]">
            Like your own teeth, implants stimulate the jaw and prevent bone loss. The benefits can last
            a lifetime: firm, safe support for your teeth and protection against further bone loss.
          </p>
        </div>

        <div className="grid gap-4">
          {[
            {
              n: "1",
              title: "The implant",
              desc: "A small titanium post that replaces the root portion of your missing tooth, anchored securely in the jawbone.",
              icon: Anchor,
            },
            {
              n: "2",
              title: "The crown",
              desc: "The visible tooth above the gums — custom-crafted porcelain matched to your natural teeth in shape and shade.",
              icon: Crown,
            },
          ].map((c) => (
            <div
              key={c.n}
              data-testid={`implants-component-${c.n}`}
              className="rounded-[24px] bg-white border border-slate-100 p-7 md:p-8 shadow-[0_10px_40px_-20px_rgba(10,25,47,0.12)] flex items-start gap-5"
            >
              <span className="w-12 h-12 rounded-2xl bg-[#E6F8F3] text-[#0284C7] flex items-center justify-center shrink-0">
                <c.icon className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <div>
                <div className="font-mono text-[13px] tabular-nums text-[#0284C7] font-semibold">Part {c.n}</div>
                <h3 className="mt-1 font-display text-[20px] font-semibold text-[#0A192F] leading-snug">{c.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#64748B]">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyReplace() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="implants-why-replace" className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            Why replace missing teeth
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            One missing tooth <span className="font-light text-[#64748B]">rarely stays one problem.</span>
          </h2>
          <p className="mt-5 text-[16.5px] leading-relaxed text-[#475569]">
            Dr. Sarna considers all of these factors when determining how to achieve dental aesthetics
            in harmony with your physiology — because a gap does more damage than most people expect.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {consequences.map((s, i) => (
            <div
              key={s.title}
              data-testid={`implants-consequence-${i}`}
              className="rounded-[24px] bg-[#F8FAFC] border border-slate-100 p-7 hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="w-11 h-11 rounded-2xl bg-[#E6F8F3] text-[#0284C7] flex items-center justify-center">
                <s.icon className="w-5 h-5" strokeWidth={1.75} />
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

function Benefits() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="implants-benefits" className="reveal py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            Benefits of a permanent solution
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            Why patients choose <span className="font-light text-[#64748B]">implants.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              data-testid={`implants-benefit-${i}`}
              className="rounded-[24px] bg-white border border-slate-100 p-7 shadow-[0_10px_40px_-20px_rgba(10,25,47,0.12)] hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.2)] hover:-translate-y-1 transition-all duration-300"
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
            <div className="font-display text-lg md:text-xl font-semibold">Wondering if implants are right for you?</div>
            <div className="mt-1 text-[14.5px] text-[#94A3B8]">
              Book a consultation with Dr. Sarna and get an honest assessment of your options.
            </div>
          </div>
          <a
            href={clinic.phoneHref}
            data-testid="implants-consult-call"
            className="inline-flex items-center gap-2 h-12 rounded-full bg-white text-[#0A192F] px-6 text-[14.5px] font-medium hover:bg-[#E6F8F3] transition-colors"
          >
            <Phone className="w-4 h-4" /> {clinic.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

function TreatmentOptions() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="implants-options" className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            Treatment options
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            From one tooth <span className="font-light text-[#64748B]">to a whole smile.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {options.map((o, i) => (
            <div
              key={o.title}
              data-testid={`implants-option-${i}`}
              className="relative rounded-[24px] bg-[#F8FAFC] border border-slate-100 p-7 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.2)] transition-all duration-300"
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

function Process() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="implants-process" className="reveal py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            What actually happens
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            Four clear steps <span className="font-light text-[#64748B]">to a new tooth.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div
              key={s.step}
              data-testid={`implants-step-${s.step}`}
              className="relative rounded-[24px] bg-white border border-slate-100 p-7 shadow-[0_10px_40px_-20px_rgba(10,25,47,0.12)]"
            >
              <div className="font-mono text-[13px] tabular-nums text-[#0284C7] font-semibold">{s.step}</div>
              <h3 className="mt-3 font-display text-[19px] font-semibold text-[#0A192F] leading-snug">{s.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-[#64748B]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const ref = useReveal();
  const implantCase = gallery.find((g) => g.id === "implants-bridges-veneers");
  if (!implantCase) return null;

  return (
    <section ref={ref} data-testid="implants-gallery" className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
              Real patient, real result
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
              {implantCase.patient}&apos;s <span className="font-light text-[#64748B]">new smile.</span>
            </h2>
            <div className="mt-8 space-y-6">
              <div>
                <div className="text-[12px] uppercase tracking-[0.14em] text-[#94A3B8] font-medium mb-2">Problem</div>
                <p className="text-[15.5px] leading-relaxed text-[#475569]">{implantCase.problem}</p>
              </div>
              <div>
                <div className="text-[12px] uppercase tracking-[0.14em] text-[#10B981] font-medium mb-2">Solution</div>
                <p className="text-[15.5px] leading-relaxed text-[#475569]">{implantCase.solution}</p>
              </div>
            </div>
            <a
              href={`${process.env.PUBLIC_URL}/#gallery`}
              data-testid="implants-gallery-link"
              className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-[#0284C7] hover:text-[#0369A1] transition-colors"
            >
              See more transformations <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Before", src: implantCase.before, badge: "bg-white text-[#0A192F]" },
              { label: "After", src: implantCase.after, badge: "bg-[#0A192F] text-white" },
            ].map((img) => (
              <div key={img.label} className="relative rounded-[24px] overflow-hidden aspect-[3/4] shadow-[0_20px_50px_-20px_rgba(10,25,47,0.25)]">
                <img
                  src={img.src}
                  alt={`${implantCase.patient}'s smile ${img.label.toLowerCase()} dental implant treatment`}
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

function WhyHere() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="implants-why" className="reveal py-24 md:py-32 bg-[#0A192F] text-white overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#0284C7]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-center">
        <div>
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#7DD3FC] font-medium mb-3">
            Why have it done here
          </div>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-[1.05]">
            Implants succeed <span className="font-light text-[#94A3B8]">on expertise.</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-[#CBD5E1]">
            Dr. Sarna is a recognized leader in cosmetic, restorative and implant dentistry with an
            emphasis on re-creating natural aesthetic beauty. He proudly holds an ICOI Fellowship in
            Implantology, and every implant at our Milton clinic is planned on 3D imaging before a
            single instrument touches your mouth.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-3">
          {whyHere.map((t, i) => (
            <li
              key={t.name}
              data-testid={`implants-why-item-${i}`}
              className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 hover:bg-white/[0.06] transition-colors"
            >
              <span className="w-10 h-10 rounded-xl bg-[#E6F8F3] text-[#0A192F] flex items-center justify-center">
                <t.icon className="w-5 h-5" strokeWidth={1.75} />
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

function CostStrip() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="implants-cost" className="reveal py-24 md:py-32 bg-white">
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
            <p className="mt-6 text-[17px] leading-relaxed text-[#334155]">
              A single implant with crown at our Milton clinic typically ranges from $3,500 to $5,500
              depending on bone quality and materials. You always get a written estimate first, and
              financing lets you spread the cost so it never has to delay care.
            </p>
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
                  data-testid={`implants-cost-item-${i}`}
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

function ServiceFAQ() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="implants-faq" className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            Dental implant questions
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            Asked in this chair, <span className="font-light text-[#64748B]">every week.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              data-testid={`implants-faq-item-${i}`}
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

export default function DentalImplants() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="implants-page" className="min-h-screen bg-white text-[#1E293B]">
      <PageMeta />
      <Header />
      <main>
        <PageHero />
        <WhatIsAnImplant />
        <WhyReplace />
        <Benefits />
        <TreatmentOptions />
        <Process />
        <BeforeAfter />
        <WhyHere />
        <CostStrip />
        <SocialProof />
        <ServiceFAQ />
        <FinalCTA />
        <VisitUs />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
