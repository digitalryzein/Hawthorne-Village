import { useEffect } from "react";
import {
  Calendar,
  Phone,
  ChevronRight,
  Microscope,
  Syringe,
  ScanLine,
  Timer,
  Thermometer,
  Activity,
  CircleDot,
  Droplets,
  Moon,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Landmark,
  CreditCard,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/site/Header";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";
import StickyActions from "@/components/site/StickyActions";
import { clinic } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const PAGE_URL = "https://hawthornevillagedental.ca/services/root-canal-therapy/";
const HERO_IMAGE = "https://images.unsplash.com/photo-1643401142249-84ef35c123c9?w=1200&q=80&auto=format&fit=crop";

const symptoms = [
  {
    icon: Activity,
    title: "A toothache that won't quit",
    desc: "Pain that throbs on its own, without biting or chewing, often means the nerve inside the tooth is inflamed.",
  },
  {
    icon: Thermometer,
    title: "Hot and cold sensitivity",
    desc: "A sip of coffee or ice water that keeps stinging long after you swallow is a classic warning sign.",
  },
  {
    icon: CircleDot,
    title: "Pain when you bite down",
    desc: "Pressure that hurts on one specific tooth can point to infection forming at the root.",
  },
  {
    icon: Droplets,
    title: "Swollen or tender gums",
    desc: "A small pimple-like bump on the gum near a sore tooth is often an abscess trying to drain.",
  },
  {
    icon: Moon,
    title: "A tooth turning dark",
    desc: "A tooth going grey next to its neighbours usually means the nerve inside is dying.",
  },
  {
    icon: Zap,
    title: "A deep crack or chip",
    desc: "Cracks give bacteria a path straight to the nerve, sometimes before anything even hurts.",
  },
];

const steps = [
  {
    step: "01",
    title: "Get you numb and comfortable",
    desc: "The Wand delivers freezing so gradually that most patients never feel the needle. If dental visits make you anxious, oral sedation is available too.",
  },
  {
    step: "02",
    title: "Clean out the infection",
    desc: "Working under the Seiler microscope at up to 40 times magnification, Dr. Sarna removes the inflamed nerve tissue and disinfects every canal.",
  },
  {
    step: "03",
    title: "Seal and protect the tooth",
    desc: "Each canal is filled and sealed so bacteria cannot get back in. Most root canals here are finished in a single visit of about 90 minutes.",
  },
  {
    step: "04",
    title: "Restore full strength",
    desc: "A crown, often milled the same day with CEREC, protects the tooth so you can chew on it like nothing ever happened.",
  },
];

const whyHere = [
  {
    icon: Microscope,
    name: "Seiler surgical microscope",
    benefit: "Up to 40 times magnification finds tiny canals a naked eye would miss, which is a big part of why treatment succeeds long term.",
  },
  {
    icon: Syringe,
    name: "The Wand painless anaesthesia",
    benefit: "Computer-controlled freezing that patients consistently describe as the easiest injection they have never felt.",
  },
  {
    icon: ScanLine,
    name: "3D CBCT and digital X-rays",
    benefit: "Low-radiation 3D imaging maps curved or extra roots before we start, so there are no surprises mid-treatment.",
  },
  {
    icon: Timer,
    name: "Same-day emergency slots",
    benefit: "Severe tooth pain rarely waits for a convenient time. We hold appointments every weekday for exactly this reason.",
  },
];

const faqs = [
  {
    q: "Does a root canal hurt?",
    a: "Not the way its reputation suggests. With The Wand delivering the freezing and the tooth fully numb, most patients say the treatment felt like getting a filling. The pain people remember is usually the infection before treatment, not the root canal itself.",
  },
  {
    q: "How long does a root canal take?",
    a: "Most root canals at our Milton clinic are completed in a single visit of 60 to 90 minutes. Molars with extra canals can occasionally need a second visit, and we tell you that upfront, never partway through.",
  },
  {
    q: "How much does a root canal cost in Milton?",
    a: "A root canal at Hawthorne Village Dental Care typically ranges from $900 to $1,600 depending on the tooth, with molars at the higher end. You receive a written estimate before treatment begins, we bill your insurance directly, and CDCP is accepted.",
  },
  {
    q: "Can't I just have the tooth pulled instead?",
    a: "You can, but keeping your natural tooth is almost always the better long-term choice. An extraction is cheaper on the day, then costs more later when the gap needs an implant or bridge to stop neighbouring teeth from shifting.",
  },
  {
    q: "Will I need a crown afterwards?",
    a: "Back teeth usually do, because a treated tooth becomes more brittle over time. We mill CEREC crowns in-office, so the crown is often placed the same day with no temporaries and no second appointment.",
  },
  {
    q: "What happens if I put it off?",
    a: "The infection does not resolve on its own. It spreads into the bone, can form a painful abscess, and makes the tooth harder to save. If a tooth has been talking to you, sooner is genuinely easier, cheaper and more comfortable.",
  },
  {
    q: "Can you see me today for tooth pain?",
    a: "In most cases, yes. We reserve same-day emergency slots every weekday. Call (905) 864-3368 and our front desk will fit you in as quickly as possible, often within hours.",
  },
];

// Page-specific meta tags and JSON-LD, restored on unmount.
function PageMeta() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Root Canal Therapy in Milton | Hawthorne Village Dental Care";

    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    desc?.setAttribute(
      "content",
      "Gentle, microscope-guided root canal therapy in Milton, Ontario. The Wand painless anaesthesia, single-visit treatment, direct billing and CDCP accepted. Same-day emergency appointments: (905) 864-3368."
    );

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href");
    canonical?.setAttribute("href", PAGE_URL);

    const procedureSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: "Root Canal Therapy",
      alternateName: "Endodontic Treatment",
      url: PAGE_URL,
      description:
        "Microscope-guided root canal therapy that removes infected nerve tissue, seals the canals and saves the natural tooth, usually in a single visit.",
      howPerformed:
        "Local anaesthesia via The Wand, canal cleaning and disinfection under a Seiler surgical microscope, sealing of the canals, and restoration with a crown when needed.",
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
        { "@type": "ListItem", position: 3, name: "Root Canal Therapy", item: PAGE_URL },
      ],
    };

    const scripts = [procedureSchema, faqSchema, breadcrumbSchema].map((data, i) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.jsonld = `hvdc-rct-${i}`;
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
    <section data-testid="rct-hero" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E6F8F3] blur-3xl opacity-70" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-[#EEF4FF] blur-3xl opacity-80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-20 md:pt-14 md:pb-28">
        {/* Breadcrumb */}
        <nav data-testid="rct-breadcrumb" aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-[13px] text-[#64748B]">
          <a href={`${process.env.PUBLIC_URL}/`} className="hover:text-[#0A192F] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <a href={`${process.env.PUBLIC_URL}/#services`} className="hover:text-[#0A192F] transition-colors">Services</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0A192F] font-medium">Root Canal Therapy</span>
        </nav>

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div ref={leftRef} className="reveal">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-4">
              Root canal therapy in Milton
            </div>

            <h1 className="font-display font-medium text-[38px] leading-[1.06] md:text-[56px] md:leading-[1.03] text-[#0A192F] tracking-tight">
              Save the tooth. <span className="italic font-light text-[#0284C7]">Lose the pain.</span>
            </h1>

            <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[#475569] max-w-xl">
              A root canal has a scary reputation it no longer deserves. With microscope-guided treatment
              and computer-controlled freezing, most patients at our Milton dental clinic walk out saying
              the same thing: that was easier than a filling.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                data-testid="rct-book-btn"
                href={clinic.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-12 md:h-14 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 md:px-8 text-[15px] font-medium shadow-[0_8px_24px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-4 h-4 mr-2" /> Book Appointment
              </a>
              <a
                data-testid="rct-call-btn"
                href={clinic.phoneHref}
                className="inline-flex items-center gap-2 h-12 md:h-14 rounded-full bg-white border border-slate-200 px-6 text-[15px] font-medium text-[#0A192F] hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                <Phone className="w-4 h-4" /> {clinic.phone}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {[
                { k: "40×", v: "Microscope precision" },
                { k: "~90 min", v: "Typical single visit" },
                { k: "Same-day", v: "Emergency slots" },
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
                alt="Root canal therapy being performed at Hawthorne Village Dental Care in Milton"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/25 via-transparent to-transparent" />
            </div>

            <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#E6F8F3] flex items-center justify-center">
                <Microscope className="w-5 h-5 text-[#0284C7]" />
              </div>
              <div>
                <div className="text-[13px] text-[#64748B]">Seiler microscope</div>
                <div className="font-display font-semibold text-[#0A192F]">40× magnification</div>
              </div>
            </div>

            <div className="hidden md:flex absolute -top-4 -right-4 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100 max-w-[230px]">
              <ShieldCheck className="w-5 h-5 text-[#10B981]" />
              <div className="text-[13px] leading-tight">
                <div className="font-semibold text-[#0A192F]">The Wand freezing</div>
                <div className="text-[#64748B]">Most patients feel nothing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Symptoms() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="rct-symptoms" className="reveal py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            When a tooth needs help
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            Is your tooth trying to <span className="italic font-light text-[#64748B]">tell you something?</span>
          </h2>
          <p className="mt-5 text-[16.5px] leading-relaxed text-[#475569]">
            These are the signs we hear about most from patients who end up needing root canal therapy.
            One of them alone doesn't confirm anything, but if any feel familiar, it's worth a look.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {symptoms.map((s, i) => (
            <div
              key={s.title}
              data-testid={`rct-symptom-${i}`}
              className="rounded-[24px] bg-white border border-slate-100 p-7 shadow-[0_10px_40px_-20px_rgba(10,25,47,0.12)] hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="w-11 h-11 rounded-2xl bg-[#E6F8F3] text-[#0284C7] flex items-center justify-center">
                <s.icon className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-display text-[19px] font-semibold text-[#0A192F] leading-snug">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[#64748B]">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 rounded-[24px] bg-[#0A192F] text-white px-7 py-6">
          <div className="flex-1 min-w-[240px]">
            <div className="font-display text-lg md:text-xl font-semibold">In pain right now?</div>
            <div className="mt-1 text-[14.5px] text-[#94A3B8]">
              We hold same-day emergency slots every weekday. Don't wait it out.
            </div>
          </div>
          <a
            href={clinic.phoneHref}
            data-testid="rct-emergency-call"
            className="inline-flex items-center gap-2 h-12 rounded-full bg-white text-[#0A192F] px-6 text-[14.5px] font-medium hover:bg-[#E6F8F3] transition-colors"
          >
            <Phone className="w-4 h-4" /> {clinic.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="rct-process" className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            What actually happens
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            Four calm steps, <span className="italic font-light text-[#64748B]">usually one visit.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div
              key={s.step}
              data-testid={`rct-step-${s.step}`}
              className="relative rounded-[24px] bg-[#F8FAFC] border border-slate-100 p-7"
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

function WhyHere() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="rct-why" className="reveal py-24 md:py-32 bg-[#0A192F] text-white overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#0284C7]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-center">
        <div>
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#7DD3FC] font-medium mb-3">
            Why have it done here
          </div>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-[1.05]">
            Root canals succeed <span className="italic font-light text-[#94A3B8]">on the details.</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-[#CBD5E1]">
            A root canal is only as good as the canals it finds and cleans. That's why Dr. Sarna performs
            them under a surgical microscope rather than by feel, and why our Milton clinic invests in
            imaging that shows the whole root before a single instrument touches your tooth.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-3">
          {whyHere.map((t, i) => (
            <li
              key={t.name}
              data-testid={`rct-why-item-${i}`}
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
    <section ref={ref} data-testid="rct-cost" className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="rounded-[32px] bg-[#E6F8F3] p-10 md:p-16 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/40 blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
              Cost and coverage
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
              A clear price <span className="italic font-light text-[#0A192F]/70">before we begin.</span>
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-[#334155]">
              A root canal at our Milton clinic typically runs from $900 to $1,600 depending on the tooth,
              with molars at the higher end, plus a crown if one is needed. You always get a written
              estimate first, and most dental insurance plans cover a significant portion.
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
                  data-testid={`rct-cost-item-${i}`}
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
    <section ref={ref} data-testid="rct-faq" className="reveal py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            Root canal questions
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            Asked in this chair, <span className="italic font-light text-[#64748B]">every week.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              data-testid={`rct-faq-item-${i}`}
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

export default function RootCanalTherapy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="rct-page" className="min-h-screen bg-white text-[#1E293B]">
      <PageMeta />
      <Header />
      <main>
        <PageHero />
        <Symptoms />
        <Process />
        <WhyHere />
        <CostStrip />
        <ServiceFAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
