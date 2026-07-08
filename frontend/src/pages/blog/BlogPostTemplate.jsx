import { useEffect } from "react";
import { Calendar, Phone, ChevronRight, Clock, BadgeCheck, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/site/Header";
import VisitUs from "@/components/site/VisitUs";
import Footer from "@/components/site/Footer";
import StickyActions from "@/components/site/StickyActions";
import { clinic } from "@/lib/site-data";
import { servicePages } from "@/pages/services/index";
import { techPages } from "@/pages/technology/index";
import { useReveal } from "@/hooks/useReveal";

// Resolve a related-page path ("/services/x" or "/x") to its page config.
function resolveConfig(path) {
  const slug = path.split("/").filter(Boolean).pop();
  return servicePages[slug] || techPages[slug] || null;
}

function PageMeta({ post }) {
  useEffect(() => {
    const pageUrl = `https://hawthornevillagedental.ca/${post.slug}/`;
    const prevTitle = document.title;
    document.title = post.metaTitle;

    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    desc?.setAttribute("content", post.metaDescription);

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href");
    canonical?.setAttribute("href", pageUrl);

    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        url: pageUrl,
        ...(post.hero ? { image: `https://hawthornevillagedental.ca${post.hero}` } : {}),
        author: { "@type": "Person", name: "Dr. Raju Sarna", url: "https://hawthornevillagedental.ca/dr-sarna/" },
        publisher: { "@type": "Dentist", name: clinic.name, telephone: clinic.phone },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hawthornevillagedental.ca/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://hawthornevillagedental.ca/blog/" },
          { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
        ],
      },
    ];

    const scripts = schemas.map((data, i) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.jsonld = `hvdc-post-${i}`;
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
  }, [post]);

  return null;
}

function PostHero({ post }) {
  const ref = useReveal();
  return (
    <section data-testid="post-hero" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E6F8F3] blur-3xl opacity-70" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-[#EEF4FF] blur-3xl opacity-80" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-8 pt-10 pb-10 md:pt-14">
        <nav data-testid="post-breadcrumb" aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-[13px] text-[#64748B]">
          <a href={`${process.env.PUBLIC_URL}/`} className="hover:text-[#0A192F] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <a href={`${process.env.PUBLIC_URL}/blog`} className="hover:text-[#0A192F] transition-colors">Blog</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0A192F] font-medium truncate max-w-[220px] sm:max-w-none">{post.title}</span>
        </nav>

        <div ref={ref} className="reveal">
          <span className="inline-flex items-center rounded-full bg-[#E6F8F3] text-[#0284C7] px-3 py-1 text-[12px] font-semibold uppercase tracking-wider">
            {post.category}
          </span>

          <h1 className="mt-5 font-display font-medium text-[34px] leading-[1.1] md:text-[46px] md:leading-[1.06] text-[#0A192F] tracking-tight">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13.5px] text-[#64748B]">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#0284C7]" /> {post.dateDisplay}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#0284C7]" /> {post.readingMinutes} min read
            </span>
            <a href={`${process.env.PUBLIC_URL}/dr-sarna`} className="inline-flex items-center gap-2 hover:text-[#0A192F] transition-colors">
              <img
                src={`${process.env.PUBLIC_URL}/images/team/sarna.jpg`}
                alt="Dr. Raju Sarna"
                className="w-6 h-6 rounded-full object-cover"
              />
              Hawthorne Village Dental Care
            </a>
          </div>
        </div>

        {post.hero && (
          <div className="mt-9 rounded-[32px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(10,25,47,0.3)]">
            <img
              src={`${process.env.PUBLIC_URL}${post.hero}`}
              alt={post.title}
              className="w-full h-auto max-h-[480px] object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        )}
      </div>
    </section>
  );
}

function AuthorBox() {
  return (
    <div data-testid="post-author" className="mt-12 rounded-[24px] bg-[#F8FAFC] border border-slate-100 p-6 md:p-7 flex flex-col sm:flex-row items-start gap-5">
      <img
        src={`${process.env.PUBLIC_URL}/images/team/sarna.jpg`}
        alt="Dr. Raju Sarna, DDS"
        className="w-16 h-16 rounded-2xl object-cover shrink-0"
        loading="lazy"
      />
      <div>
        <div className="flex items-center gap-2">
          <span className="font-display text-[17px] font-semibold text-[#0A192F]">Dr. Raju Sarna, DDS</span>
          <BadgeCheck className="w-4 h-4 text-[#0284C7]" />
        </div>
        <p className="mt-1.5 text-[14px] leading-relaxed text-[#64748B]">
          A UCSF-trained Doctor of Dental Surgery and ICOI Implantology Fellow, Dr. Sarna leads
          Hawthorne Village Dental Care in Milton — where these articles come from the same team
          that answers your questions chairside.
        </p>
        <a
          href={`${process.env.PUBLIC_URL}/dr-sarna`}
          className="mt-2 inline-flex items-center gap-1 text-[13.5px] font-medium text-[#0284C7] hover:text-[#0369A1] transition-colors"
        >
          Meet Dr. Sarna <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

function RelatedServices({ post }) {
  const items = post.related.map((path) => ({ path, config: resolveConfig(path) })).filter((i) => i.config);
  if (!items.length) return null;

  return (
    <section data-testid="post-related" className="mt-12">
      <div className="text-[12px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-4">
        Related care at our Milton clinic
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map(({ path, config }) => (
          <a
            key={path}
            href={`${process.env.PUBLIC_URL}${path}`}
            className="group rounded-[24px] bg-white border border-slate-100 p-6 shadow-[0_10px_40px_-20px_rgba(10,25,47,0.12)] hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.2)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="font-display text-[18px] font-semibold text-[#0A192F] leading-snug">{config.name}</div>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#64748B] line-clamp-2">{config.hero.intro}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-[13.5px] font-medium text-[#0284C7] group-hover:gap-1.5 transition-all">
              Learn more <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function PostFAQ({ post }) {
  const primary = post.related.map(resolveConfig).find(Boolean);
  if (!primary) return null;
  const faqs = primary.faqs.slice(0, 3);

  return (
    <section data-testid="post-faq" className="mt-12">
      <div className="text-[12px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-2">
        Common questions about {primary.name.toLowerCase()}
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-200 last:border-b-0">
            <AccordionTrigger className="text-left font-display text-[16.5px] font-medium text-[#0A192F] hover:no-underline py-4">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-[14.5px] leading-relaxed text-[#475569] pb-4">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function PostCTA() {
  return (
    <div data-testid="post-cta" className="mt-12 flex flex-wrap items-center gap-4 rounded-[24px] bg-[#0A192F] text-white px-7 py-6">
      <div className="flex-1 min-w-[240px]">
        <div className="font-display text-lg md:text-xl font-semibold">Questions about your own smile?</div>
        <div className="mt-1 text-[14.5px] text-[#94A3B8]">
          Book a visit at our Milton clinic — new patients are always welcome.
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href={clinic.bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 h-11 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 text-[14.5px] font-medium transition-colors"
        >
          <Calendar className="w-4 h-4" /> Book Appointment
        </a>
        <a
          href={clinic.phoneHref}
          className="inline-flex items-center gap-2 h-11 rounded-full bg-white text-[#0A192F] px-6 text-[14.5px] font-medium hover:bg-[#E6F8F3] transition-colors"
        >
          <Phone className="w-4 h-4" /> {clinic.phone}
        </a>
      </div>
    </div>
  );
}

export default function BlogPostTemplate({ post }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post.slug]);

  return (
    <div data-testid="post-page" className="min-h-screen bg-white text-[#1E293B]">
      <PageMeta post={post} />
      <Header />
      <main>
        <PostHero post={post} />

        <article className="max-w-3xl mx-auto px-6 md:px-8 pt-4 pb-20 md:pb-24">
          <div className="article-body" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          <PostCTA />
          <AuthorBox />
          <RelatedServices post={post} />
          <PostFAQ post={post} />
        </article>

        <VisitUs />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
