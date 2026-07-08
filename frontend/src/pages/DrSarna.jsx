import { useEffect } from "react";
import {
  Calendar,
  Phone,
  ChevronRight,
  Award,
  GraduationCap,
  School,
  Presentation,
  BadgeCheck,
  Anchor,
  Slice,
  Sparkles,
  Bone,
  Wind,
  AlignCenter,
  SmilePlus,
  BookOpen,
  Globe,
  HeartHandshake,
  Trophy,
  FileText,
  Heart,
  Clock,
  Zap,
} from "lucide-react";
import Header from "@/components/site/Header";
import Awards from "@/components/site/Awards";
import VisitUs from "@/components/site/VisitUs";
import Footer from "@/components/site/Footer";
import StickyActions from "@/components/site/StickyActions";
import { clinic } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const PAGE_URL = "https://hawthornevillagedental.ca/dr-sarna/";
const PORTRAIT = `${process.env.PUBLIC_URL}/images/dentist-square.jpg`;
const CLINIC_PHOTO = `${process.env.PUBLIC_URL}/images/welcome-video-poster.jpg`;

const fellowships = [
  { abbr: "FICOI", name: "Fellowship, International Congress of Oral Implantology" },
  { abbr: "FIAO", name: "Fellowship, International Association for Orthodontics" },
  { abbr: "FAGD", name: "Fellowship, Academy of General Dentistry" },
];

const credentials = [
  {
    icon: GraduationCap,
    kicker: "Doctor of Dental Surgery",
    title: "University of California, San Francisco",
    desc: "Dr. Sarna earned his DDS at UCSF, one of North America's leading dental schools.",
  },
  {
    icon: School,
    kicker: "AEGD Residency",
    title: "University of California, Los Angeles",
    desc: "Advanced Education in General Dentistry, completed at UCLA.",
  },
  {
    icon: Presentation,
    kicker: "Teaching",
    title: "Preceptor, UCLA AEGD Clinic",
    desc: "Served as a Preceptor, guiding residents in UCLA's Advanced Education in General Dentistry clinic.",
  },
  {
    icon: Award,
    kicker: "Fellowship",
    title: "International Congress of Oral Implantology",
    desc: "The ICOI Fellowship recognizes advanced expertise in implant dentistry.",
  },
  {
    icon: Award,
    kicker: "Fellowship",
    title: "International Association for Orthodontics",
    desc: "Fellowship-level training in orthodontics for children, teens and adults.",
  },
  {
    icon: Award,
    kicker: "Fellowship",
    title: "Academy of General Dentistry",
    desc: "The FAGD marks sustained, examined excellence across the breadth of general dentistry.",
  },
];

const expertise = [
  { icon: Anchor, title: "Dental Implants", desc: "Implant-assisted dental rehabilitation is the core of the practice.", href: "/services/dental-implants" },
  { icon: Slice, title: "Implant Surgery", desc: "A special interest pursued through hundreds of hours of surgical education." },
  { icon: Sparkles, title: "Cosmetic Dentistry", desc: "Aesthetics with an emphasis on re-creating natural beauty.", href: "/services/cosmetic-dentistry" },
  { icon: Bone, title: "Bone Grafting", desc: "Bone and tissue grafts that rebuild the foundation for implants.", href: "/services/dental-bone-grafting" },
  { icon: Wind, title: "Sinus Lift Procedures", desc: "Advanced grafting that makes upper-jaw implants possible." },
  { icon: AlignCenter, title: "Orthodontics", desc: "Braces and Invisalign, backed by an IAO Fellowship.", href: "/services/orthodontics" },
  { icon: SmilePlus, title: "Smile Rehabilitation", desc: "Full-mouth rehabilitation that restores function and confidence together." },
];

const memberships = [
  { abbr: "FICOI", name: "Fellowship, International Congress of Oral Implantology" },
  { abbr: "FIAO", name: "Fellowship, International Association for Orthodontics" },
  { abbr: "FAGD", name: "Fellowship, Academy of General Dentistry" },
  { abbr: "IAO", name: "International Association for Orthodontics" },
  { abbr: "TISC", name: "Toronto Implant Study Club" },
  { abbr: "ADIA", name: "Aesthetic Design and Implant Academy" },
  { abbr: "HPDA", name: "Halton Peel Dental Association" },
  { abbr: "ODA", name: "Ontario Dental Association" },
  { abbr: "CDA", name: "Canadian Dental Association" },
  { abbr: "AGD", name: "Academy of General Dentistry" },
];

const continuingEd = [
  {
    icon: BookOpen,
    name: "Las Vegas Institute (LVI)",
    benefit: "Advanced dental studies at one of the profession's best-known post-graduate institutes.",
  },
  {
    icon: Bone,
    name: "Meisinger bone management",
    benefit: "High-altitude bone management training for advanced grafting and implant site development.",
  },
  {
    icon: AlignCenter,
    name: "Invisalign & Orthodontics",
    benefit: "Continuing education in clear aligners and orthodontic treatment planning.",
  },
  {
    icon: Zap,
    name: "Laser Dentistry",
    benefit: "Training in laser techniques that make many procedures gentler and faster-healing.",
  },
];

const community = [
  {
    year: "2010",
    icon: Globe,
    title: "Dental Health Delegation to China",
    desc: "Became a member of the Dental Health Delegation to China, nominated to the People to People Ambassador Program — an international delegation promoting dental health.",
  },
  {
    year: "2014",
    icon: HeartHandshake,
    title: "Mission trip to the Dominican Republic",
    desc: "Participated in a mission that completed $1.5 million in dental aid for under-privileged communities in Santo Domingo — exclusively implants, sinus lifts and bone grafting.",
  },
  {
    year: "Ongoing",
    icon: Heart,
    title: "Giving back in Milton",
    desc: "Establishing scholarships at local high schools, participating in fundraisers, and volunteering his services for charities across the community.",
  },
];

function PageMeta() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Dr. Raju Sarna, Dentist in Milton, ON - Hawthorne Village Dental Care";

    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    desc?.setAttribute(
      "content",
      "Dr. Raju Sarna has attained DDS from UCSF and holds an ICOI Fellowship in Implantology. He specializes in cosmetic, restorative and implant dentistry."
    );

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href");
    canonical?.setAttribute("href", PAGE_URL);

    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Dr. Raju Sarna",
      honorificSuffix: "DDS, FICOI, FIAO, FAGD",
      jobTitle: "Dentist",
      url: PAGE_URL,
      image: "https://hawthornevillagedental.ca/images/dentist-square.jpg",
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "University of California, San Francisco" },
        { "@type": "CollegeOrUniversity", name: "University of California, Los Angeles" },
      ],
      memberOf: memberships.map((m) => ({ "@type": "Organization", name: m.name })),
      award: "Award for Highest Achievement in clinical proficiency",
      worksFor: {
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

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hawthornevillagedental.ca/" },
        { "@type": "ListItem", position: 2, name: "Dr. Sarna", item: PAGE_URL },
      ],
    };

    const scripts = [personSchema, breadcrumbSchema].map((data, i) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.jsonld = `hvdc-drsarna-${i}`;
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
    <section data-testid="drsarna-hero" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E6F8F3] blur-3xl opacity-70" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-[#EEF4FF] blur-3xl opacity-80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-20 md:pt-14 md:pb-28">
        <nav data-testid="drsarna-breadcrumb" aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-[13px] text-[#64748B]">
          <a href={`${process.env.PUBLIC_URL}/`} className="hover:text-[#0A192F] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0A192F] font-medium">Dr. Sarna</span>
        </nav>

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div ref={leftRef} className="reveal">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-4">
              Your dentist in Milton
            </div>

            <h1 className="font-display font-medium text-[38px] leading-[1.06] md:text-[56px] md:leading-[1.03] text-[#0A192F] tracking-tight">
              Meet <span className="font-light text-[#0284C7]">Dr. Raju Sarna.</span>
            </h1>

            <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[#475569] max-w-xl">
              A UCSF-trained Doctor of Dental Surgery concentrating on implant-assisted dental
              rehabilitation and aesthetics, Dr. Sarna maintains a high-end, boutique-style practice
              here in Milton — where a generous amount of time is spent getting to know every patient.
            </p>

            {/* Fellowship chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {fellowships.map((f) => (
                <span
                  key={f.abbr}
                  title={f.name}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-3.5 py-1.5 text-[13px] font-semibold text-[#0A192F] shadow-sm"
                >
                  <BadgeCheck className="w-4 h-4 text-[#0284C7]" /> {f.abbr}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                data-testid="drsarna-book-btn"
                href={clinic.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-12 md:h-14 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 md:px-8 text-[15px] font-medium shadow-[0_8px_24px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-4 h-4 mr-2" /> Book an Appointment
              </a>
              <a
                data-testid="drsarna-call-btn"
                href={clinic.phoneHref}
                className="inline-flex items-center gap-2 h-12 md:h-14 rounded-full bg-white border border-slate-200 px-6 text-[15px] font-medium text-[#0A192F] hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                <Phone className="w-4 h-4" /> {clinic.phone}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {[
                { k: "UCSF", v: "Doctor of Dental Surgery" },
                { k: "UCLA", v: "AEGD + Preceptor" },
                { k: "3", v: "International Fellowships" },
                { k: "25+", v: "Years of dentistry" },
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
                src={PORTRAIT}
                alt="Dr. Raju Sarna, DDS, at Hawthorne Village Dental Care in Milton"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/25 via-transparent to-transparent" />
            </div>

            <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#E6F8F3] flex items-center justify-center">
                <Award className="w-5 h-5 text-[#0284C7]" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[13px] text-[#64748B]">ICOI Fellow</div>
                <div className="font-display font-semibold text-[#0A192F]">Implantology</div>
              </div>
            </div>

            <div className="hidden md:flex absolute -top-4 -right-4 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100 max-w-[240px]">
              <Trophy className="w-5 h-5 text-[#10B981] shrink-0" strokeWidth={2} />
              <div className="text-[13px] leading-tight">
                <div className="font-semibold text-[#0A192F]">Award-winning</div>
                <div className="text-[#64748B]">12 community awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="drsarna-about" className="reveal py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-center">
        <div className="relative">
          <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-[0_30px_80px_-20px_rgba(10,25,47,0.3)] group">
            <img
              src={CLINIC_PHOTO}
              alt="Dr. Raju Sarna inside Hawthorne Village Dental Care in Milton"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 via-transparent to-transparent" />
          </div>

          <div className="hidden md:flex absolute -bottom-6 left-6 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-[#E6F8F3] flex items-center justify-center">
              <Heart className="w-5 h-5 text-[#0284C7]" strokeWidth={2} />
            </div>
            <div>
              <div className="font-display font-semibold text-[#0A192F]">Boutique practice</div>
              <div className="text-[13px] text-[#64748B]">personalized, unhurried care</div>
            </div>
          </div>
          <div className="hidden md:flex absolute -top-4 -right-4 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100 max-w-[240px]">
            <Clock className="w-5 h-5 text-[#10B981] shrink-0" strokeWidth={2} />
            <div className="text-[13px] leading-tight">
              <div className="font-semibold text-[#0A192F]">Generous time</div>
              <div className="text-[#64748B]">spent with every patient</div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            About Dr. Sarna
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            Trained in California, <span className="font-light text-[#64748B]">at home in Milton.</span>
          </h2>
          <p className="mt-6 text-[16.5px] leading-relaxed text-[#475569] max-w-xl">
            Dr. Raju Sarna is a graduate of the University of California, San Francisco (UCSF). He
            completed his AEGD — Advanced Education in General Dentistry — at the University of
            California, Los Angeles (UCLA), where he also served as a Preceptor in the AEGD clinic.
          </p>
          <p className="mt-4 text-[16.5px] leading-relaxed text-[#475569] max-w-xl">
            Concentrating on implant-assisted dental rehabilitation and aesthetics, with a special
            interest in implant surgery, sinus lifts, and bone and tissue grafts, he stays on the
            leading edge through continuing education — including hundreds of hours of post-graduate
            courses and seminars.
          </p>
          <p className="mt-4 text-[16.5px] leading-relaxed text-[#475569] max-w-xl">
            Patients are greeted with a smile by the entire staff, and the office is dedicated to
            comfortable, personalized care: a generous amount of time is spent getting to know each
            patient — their needs, wants and special circumstances.
          </p>
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="drsarna-credentials" className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            Credentials and education
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            The training behind <span className="font-light text-[#64748B]">the chair.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {credentials.map((c, i) => (
            <div
              key={c.title}
              data-testid={`drsarna-credential-${i}`}
              className="rounded-[24px] bg-[#F8FAFC] border border-slate-100 p-7 hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="w-11 h-11 rounded-2xl bg-[#E6F8F3] text-[#0284C7] flex items-center justify-center">
                <c.icon className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <div className="mt-5 font-mono text-[12px] tabular-nums uppercase tracking-wider text-[#0284C7] font-semibold">
                {c.kicker}
              </div>
              <h3 className="mt-1.5 font-display text-[19px] font-semibold text-[#0A192F] leading-snug">{c.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[#64748B]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="drsarna-expertise" className="reveal py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            Areas of expertise
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            Focused where it <span className="font-light text-[#64748B]">matters most.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {expertise.map((e, i) => {
            const Wrapper = e.href ? "a" : "div";
            return (
              <Wrapper
                key={e.title}
                {...(e.href ? { href: `${process.env.PUBLIC_URL}${e.href}` } : {})}
                data-testid={`drsarna-expertise-${i}`}
                className={`rounded-[24px] bg-white border border-slate-100 p-7 shadow-[0_10px_40px_-20px_rgba(10,25,47,0.12)] hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.2)] hover:-translate-y-1 transition-all duration-300 block`}
              >
                <span className="w-11 h-11 rounded-2xl bg-[#E6F8F3] text-[#0284C7] flex items-center justify-center">
                  <e.icon className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-[19px] font-semibold text-[#0A192F] leading-snug">{e.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#64748B]">{e.desc}</p>
                {e.href && (
                  <span className="mt-3 inline-flex items-center gap-1 text-[13.5px] font-medium text-[#0284C7]">
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                )}
              </Wrapper>
            );
          })}

          {/* Image tile completes the 4x2 grid */}
          <div data-testid="drsarna-expertise-image" className="relative rounded-[24px] overflow-hidden min-h-[220px] group">
            <img
              src="https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=1000&q=80&auto=format&fit=crop"
              alt="Dental implant model representing Dr. Sarna's implantology focus"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/85 via-[#0A192F]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white">
              <div className="font-display text-[21px] leading-snug">Implantology, first</div>
              <p className="mt-1.5 text-[13.5px] text-white/75 leading-relaxed">
                Implant-assisted rehabilitation is the thread through everything he does.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Memberships() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="drsarna-memberships" className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            Professional memberships
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            In good standing, <span className="font-light text-[#64748B]">everywhere it counts.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {memberships.map((m, i) => (
            <div
              key={m.abbr + i}
              data-testid={`drsarna-membership-${i}`}
              className="rounded-[20px] bg-[#F8FAFC] border border-slate-100 p-5 text-center hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.15)] transition-all duration-300"
            >
              <div className="font-display text-[22px] font-semibold text-[#0A192F] tracking-tight">{m.abbr}</div>
              <div className="mt-1.5 text-[12.5px] leading-snug text-[#64748B]">{m.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="drsarna-philosophy" className="reveal py-24 md:py-32 bg-[#0A192F] text-white overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#0284C7]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-center">
        <div>
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#7DD3FC] font-medium mb-3">
            Continuing education and philosophy
          </div>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-[1.05]">
            Never done <span className="font-light text-[#94A3B8]">learning.</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-[#CBD5E1]">
            Dr. Sarna has completed hundreds of hours of post-graduate courses and seminars, and
            remains committed to continuing education — exploring new innovations in dentistry so his
            patients benefit from the leading edge, not the trailing one.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-[#CBD5E1]">
            The philosophy behind it is simple: comfortable, personalized care focused on aesthetics
            and long-term oral health. Our passion is dentistry; our focus is you.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-3">
          {continuingEd.map((t, i) => (
            <li
              key={t.name}
              data-testid={`drsarna-ce-item-${i}`}
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

function Community() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="drsarna-community" className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            Community involvement
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            Dentistry that travels <span className="font-light text-[#64748B]">beyond the clinic.</span>
          </h2>
        </div>

        <ol className="relative border-l-2 border-slate-100 ml-4 md:ml-6 space-y-10 md:space-y-12">
          {community.map((c, i) => (
            <li key={c.title} data-testid={`drsarna-community-${i}`} className="relative pl-8 md:pl-12">
              <span className="absolute -left-[23px] md:-left-[25px] top-0 w-11 h-11 rounded-full bg-[#E6F8F3] border-4 border-white shadow flex items-center justify-center text-[#0284C7]">
                <c.icon className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <div className="rounded-[24px] bg-[#F8FAFC] border border-slate-100 p-7 md:p-8 max-w-3xl hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.15)] transition-shadow duration-300">
                <div className="inline-flex items-center rounded-full bg-[#0A192F] text-white text-[12px] font-semibold px-3 py-1 tabular-nums">
                  {c.year}
                </div>
                <h3 className="mt-3 font-display text-[21px] font-semibold text-[#0A192F] leading-snug">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#64748B]">{c.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Recognition() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="drsarna-recognition" className="reveal pt-24 md:pt-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-4 md:mb-6">
        <div className="max-w-2xl mb-10 md:mb-12">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            Awards and recognition
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            Recognized by peers, <span className="font-light text-[#64748B]">chosen by patients.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl">
          <div className="rounded-[24px] bg-white border border-slate-100 p-7 shadow-[0_10px_40px_-20px_rgba(10,25,47,0.12)] flex items-start gap-5">
            <span className="w-12 h-12 rounded-2xl bg-[#E6F8F3] text-[#0284C7] flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5" strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="font-display text-[19px] font-semibold text-[#0A192F] leading-snug">
                Highest Achievement in clinical proficiency
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[#64748B]">
                Awarded during his years of professional studies, recognizing exceptional clinical skill.
              </p>
            </div>
          </div>
          <div className="rounded-[24px] bg-white border border-slate-100 p-7 shadow-[0_10px_40px_-20px_rgba(10,25,47,0.12)] flex items-start gap-5">
            <span className="w-12 h-12 rounded-2xl bg-[#E6F8F3] text-[#0284C7] flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="font-display text-[19px] font-semibold text-[#0A192F] leading-snug">
                Published in peer-reviewed journals
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[#64748B]">
                His clinical work has been published in peer-review journals within the profession.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Awards
        eyebrow="Community recognition"
        title={
          <>
            The awards Milton keeps <span className="font-light text-[#64748B]">handing him.</span>
          </>
        }
        subtitle="12 consecutive community awards from the Milton Champion, Hamilton Spectator and Three Best Rated — voted by the patients Dr. Sarna and his team serve."
      />
    </section>
  );
}

export default function DrSarna() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="drsarna-page" className="min-h-screen bg-white text-[#1E293B]">
      <PageMeta />
      <Header />
      <main>
        <Hero />
        <About />
        <Credentials />
        <Expertise />
        <Memberships />
        <Philosophy />
        <Community />
        <Recognition />
        <VisitUs />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
