import { useEffect } from "react";
import {
  Calendar,
  Phone,
  ChevronRight,
  BadgeCheck,
  Heart,
  Clock,
  Languages,
  Sparkles,
  Smile,
  MessageCircle,
  Baby,
} from "lucide-react";
import Header from "@/components/site/Header";
import SocialProof from "@/components/site/SocialProof";
import FinalCTA from "@/components/site/FinalCTA";
import VisitUs from "@/components/site/VisitUs";
import Footer from "@/components/site/Footer";
import StickyActions from "@/components/site/StickyActions";
import { clinic } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

const PAGE_URL = "https://hawthornevillagedental.ca/our-team/";
const IMG = (f) => `${process.env.PUBLIC_URL}/images/team/${f}`;

const team = {
  dentists: [
    {
      name: "Dr. Andres Cordova",
      role: "Associate Dentist",
      photo: IMG("cordova.jpg"),
      bio: "Born and raised in the GTA, Dr. Cordova completed his undergraduate studies at York University and earned his Doctor of Dental Surgery at the University of Western Ontario. Passionate about restorative, surgical, cosmetic and preventative dentistry, he's trained in nitrous and oral sedation and takes a great deal of time explaining treatment so patients can make the best individualized choices. His caring, humorous manner puts patients at ease — and he has volunteered abroad providing dental outreach to communities in Guatemala.",
      chips: ["Restorative", "Surgery", "Cosmetics", "Preventative", "Sedation-trained", "English & Spanish"],
    },
  ],
  hygienists: [
    {
      name: "Haidy",
      role: "Dental Hygienist",
      photo: IMG("haidy.png"),
      bio: "Haidy is one of the hygienists patients mention by name in their reviews — known for unhurried cleanings and for taking the time to explain everything, so you leave knowing exactly how to keep your smile healthy between visits.",
      chips: ["Hygiene", "Patient education"],
    },
  ],
  admin: [
    {
      name: "Tania Dimitrova",
      role: "Operations Manager",
      photo: IMG("tania.jpg"),
      bio: "Tania holds an Honours Bachelor of Arts and Science from the University of Toronto and completed two years of Dental Technology studies at George Brown College — dental knowledge she puts to work delivering the best care and customer service to every patient. She continues to broaden her expertise through office management courses and continuing education, and outside of work her passion is her family.",
      chips: ["Operations", "Dental Technology", "Bulgarian & Russian"],
    },
    {
      name: "Nosheen",
      role: "Office Manager",
      photo: IMG("nosheen.jpg"),
      bio: "A loving mother of three, Nosheen knows first-hand how challenging dental visits can be for parents whose kids aren't too fond of the dentist. Because dental care matters for the whole family, she always tries her best to help — and she loves making children feel as comfortable as possible from the moment they walk in.",
      chips: ["Front office", "Families & kids"],
    },
  ],
};

const whyLoved = [
  {
    icon: Clock,
    title: "Generous time, every visit",
    desc: "A generous amount of time is spent getting to know each patient — their needs, wants and special circumstances.",
  },
  {
    icon: MessageCircle,
    title: "Everything explained",
    desc: "From Dr. Cordova's treatment walk-throughs to Haidy's home-care coaching, you always know what's happening and why.",
  },
  {
    icon: Languages,
    title: "Seven languages spoken",
    desc: "English, French, Hindi, Punjabi, Urdu, Tagalog and Spanish — tell us your preference when booking.",
  },
  {
    icon: Baby,
    title: "Kids feel safe here",
    desc: "A gentle first-visit routine from age one, and a team that genuinely loves making children comfortable.",
  },
  {
    icon: Heart,
    title: "Named in the reviews",
    desc: "Read our Google reviews and you'll notice patients thank team members by name — that's rare, and earned.",
  },
  {
    icon: Sparkles,
    title: "Greeted with a smile",
    desc: "Patients are welcomed warmly by the entire staff, in an office dedicated to comfortable, personalized care.",
  },
];

function PageMeta() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Dental Team of Hawthorne Village Dental Care in Milton, ON";

    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    desc?.setAttribute(
      "content",
      "Hawthorne Village Dental Care has a dental team of dedicated health professionals to serve you better with your oral health in a comfortable environment."
    );

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href");
    canonical?.setAttribute("href", PAGE_URL);

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hawthornevillagedental.ca/" },
        { "@type": "ListItem", position: 2, name: "Our Team", item: PAGE_URL },
      ],
    };

    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.dataset.jsonld = "hvdc-team-0";
    s.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(s);

    return () => {
      document.title = prevTitle;
      if (prevDesc) desc?.setAttribute("content", prevDesc);
      if (prevCanonical) canonical?.setAttribute("href", prevCanonical);
      s.remove();
    };
  }, []);

  return null;
}

function Hero() {
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section data-testid="team-hero" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E6F8F3] blur-3xl opacity-70" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-[#EEF4FF] blur-3xl opacity-80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-20 md:pt-14 md:pb-28">
        <nav data-testid="team-breadcrumb" aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-[13px] text-[#64748B]">
          <a href={`${process.env.PUBLIC_URL}/`} className="hover:text-[#0A192F] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0A192F] font-medium">Our Team</span>
        </nav>

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div ref={leftRef} className="reveal">
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-4">
              Meet our team
            </div>

            <h1 className="font-display font-medium text-[38px] leading-[1.06] md:text-[56px] md:leading-[1.03] text-[#0A192F] tracking-tight">
              The people behind <span className="font-light text-[#0284C7]">the smiles.</span>
            </h1>

            <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[#475569] max-w-xl">
              Hawthorne Village Dental Care is a team of dedicated health professionals serving your
              oral health in a comfortable environment — dentists, hygienists and a front office that
              patients thank by name in their reviews.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                data-testid="team-book-btn"
                href={clinic.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-12 md:h-14 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 md:px-8 text-[15px] font-medium shadow-[0_8px_24px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-4 h-4 mr-2" /> Book Appointment
              </a>
              <a
                data-testid="team-call-btn"
                href={clinic.phoneHref}
                className="inline-flex items-center gap-2 h-12 md:h-14 rounded-full bg-white border border-slate-200 px-6 text-[15px] font-medium text-[#0A192F] hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                <Phone className="w-4 h-4" /> {clinic.phone}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {[
                { k: "25+", v: "Years led by Dr. Sarna" },
                { k: "7", v: "Languages spoken" },
                { k: "10k+", v: "Milton smiles cared for" },
                { k: "12", v: "Community awards" },
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
                src={`${process.env.PUBLIC_URL}/images/welcome-video-poster.jpg`}
                alt="Inside Hawthorne Village Dental Care, home of our Milton dental team"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/25 via-transparent to-transparent" />
            </div>

            <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#E6F8F3] flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#0284C7]" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[13px] text-[#64748B]">Our promise</div>
                <div className="font-display font-semibold text-[#0A192F]">Personalized care</div>
              </div>
            </div>

            <div className="hidden md:flex absolute -top-4 -right-4 items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100 max-w-[230px]">
              <Smile className="w-5 h-5 text-[#10B981] shrink-0" strokeWidth={2} />
              <div className="text-[13px] leading-tight">
                <div className="font-semibold text-[#0A192F]">Greeted with a smile</div>
                <div className="text-[#64748B]">by the entire staff</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedDentist() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="team-featured" className="reveal py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">
            Lead dentist
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            Led by <span className="font-light text-[#64748B]">Dr. Raju Sarna.</span>
          </h2>
        </div>

        <div className="rounded-[32px] bg-white border border-slate-100 overflow-hidden shadow-[0_20px_60px_-25px_rgba(10,25,47,0.18)] grid lg:grid-cols-[1fr_1.4fr]">
          <div className="relative min-h-[320px]">
            <img
              src={`${process.env.PUBLIC_URL}/images/dentist-square.jpg`}
              alt="Dr. Raju Sarna, DDS, lead dentist at Hawthorne Village Dental Care"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:p-12">
            <div className="text-[12px] uppercase tracking-[0.14em] text-[#0284C7] font-medium">
              Doctor of Dental Surgery
            </div>
            <h3 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-[#0A192F] tracking-tight">
              Dr. Raju Sarna
            </h3>
            <p className="mt-4 text-[15.5px] leading-relaxed text-[#475569] max-w-2xl">
              A UCSF graduate who completed his AEGD at UCLA — where he also served as a Preceptor —
              Dr. Sarna concentrates on implant-assisted dental rehabilitation and aesthetics, and
              maintains this high-end, boutique-style practice in Milton. He holds Fellowships with
              the ICOI, the International Association for Orthodontics and the Academy of General
              Dentistry.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["FICOI", "FIAO", "FAGD", "UCSF", "UCLA"].map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#F8FAFC] border border-slate-200 px-3 py-1.5 text-[12.5px] font-semibold text-[#0A192F]"
                >
                  <BadgeCheck className="w-3.5 h-3.5 text-[#0284C7]" /> {c}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`${process.env.PUBLIC_URL}/dr-sarna`}
                data-testid="team-sarna-profile-btn"
                className="inline-flex items-center gap-2 h-12 rounded-full bg-[#0A192F] hover:bg-[#111c36] text-white px-6 text-[14.5px] font-medium hover:-translate-y-0.5 transition-all"
              >
                View full profile <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href={clinic.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="team-sarna-book-btn"
                className="inline-flex items-center gap-2 h-12 rounded-full bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-6 text-[14.5px] font-medium text-[#0A192F] transition-all"
              >
                <Calendar className="w-4 h-4" /> Book with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MemberCard({ m, tid }) {
  return (
    <div
      data-testid={tid}
      className="rounded-[24px] bg-white border border-slate-100 overflow-hidden shadow-[0_10px_40px_-20px_rgba(10,25,47,0.12)] hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={m.photo}
          alt={`${m.name}, ${m.role} at Hawthorne Village Dental Care`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="text-[11.5px] uppercase tracking-[0.14em] text-[#0284C7] font-medium">{m.role}</div>
        <h3 className="mt-1 font-display text-[21px] font-semibold text-[#0A192F]">{m.name}</h3>
        <p className="mt-2.5 text-[14px] leading-relaxed text-[#64748B] flex-1">{m.bio}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {m.chips.map((c) => (
            <span key={c} className="rounded-full bg-[#F8FAFC] border border-slate-200 px-2.5 py-1 text-[11.5px] font-medium text-[#334155]">
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamGroup({ id, eyebrow, titleA, titleB, members, cols = "sm:grid-cols-2 lg:grid-cols-2", bg = "bg-white" }) {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid={`team-${id}`} className={`reveal py-24 md:py-28 ${bg}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-10 md:mb-14">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">{eyebrow}</div>
          <h2 className="font-display text-3xl md:text-4xl text-[#0A192F] tracking-tight leading-[1.05]">
            {titleA} <span className="font-light text-[#64748B]">{titleB}</span>
          </h2>
        </div>
        <div className={`grid ${cols} gap-6`}>
          {members.map((m, i) => (
            <MemberCard key={m.name} m={m} tid={`team-${id}-${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyLoved() {
  const ref = useReveal();
  return (
    <section ref={ref} data-testid="team-why" className="reveal py-24 md:py-32 bg-[#0A192F] text-white overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#0284C7]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#7DD3FC] font-medium mb-3">
            Why patients love our team
          </div>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-[1.05]">
            Kindness, <span className="font-light text-[#94A3B8]">consistently.</span>
          </h2>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {whyLoved.map((t, i) => (
            <li
              key={t.title}
              data-testid={`team-why-item-${i}`}
              className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 hover:bg-white/[0.06] transition-colors"
            >
              <span className="w-10 h-10 rounded-xl bg-[#E6F8F3] text-[#0A192F] flex items-center justify-center">
                <t.icon className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <div className="mt-4 font-medium text-[15px] leading-tight">{t.title}</div>
              <div className="mt-1.5 text-[13.5px] text-[#94A3B8] leading-relaxed">{t.desc}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function OurTeam() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="team-page" className="min-h-screen bg-white text-[#1E293B]">
      <PageMeta />
      <Header />
      <main>
        <Hero />
        <FeaturedDentist />
        <TeamGroup
          id="members"
          eyebrow="The team"
          titleA="Dentists, hygienists"
          titleB="and the front office."
          members={[...team.dentists, ...team.hygienists, ...team.admin]}
          cols="sm:grid-cols-2 lg:grid-cols-4"
        />
        <WhyLoved />
        <SocialProof />
        <FinalCTA />
        <VisitUs />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
