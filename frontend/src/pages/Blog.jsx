import { useEffect, useMemo, useState } from "react";
import { Calendar, Phone, ChevronRight, Clock, Search } from "lucide-react";
import Header from "@/components/site/Header";
import SocialProof from "@/components/site/SocialProof";
import VisitUs from "@/components/site/VisitUs";
import Footer from "@/components/site/Footer";
import StickyActions from "@/components/site/StickyActions";
import { clinic } from "@/lib/site-data";
import { blogPosts } from "@/pages/blog/index";
import { useReveal } from "@/hooks/useReveal";

const PAGE_URL = "https://hawthornevillagedental.ca/blog/";
const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

function PageMeta() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Dental Health Blog | Hawthorne Village Dental Care, Milton";

    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    desc?.setAttribute(
      "content",
      "Oral health articles from the team at Hawthorne Village Dental Care in Milton — practical advice on children's dentistry, gum health, orthodontics, dental technology and more."
    );

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href");
    canonical?.setAttribute("href", PAGE_URL);

    const schema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Hawthorne Village Dental Care Blog",
      url: PAGE_URL,
      blogPost: blogPosts.slice(0, 10).map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `https://hawthornevillagedental.ca/${p.slug}/`,
        datePublished: p.datePublished,
      })),
    };

    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.dataset.jsonld = "hvdc-blog-0";
    s.text = JSON.stringify(schema);
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

function PostCard({ p, large = false }) {
  return (
    <a
      href={`${process.env.PUBLIC_URL}/${p.slug}`}
      data-testid={`blog-card-${p.slug}`}
      className={`group rounded-[24px] bg-white border border-slate-100 overflow-hidden shadow-[0_10px_40px_-20px_rgba(10,25,47,0.12)] hover:shadow-[0_20px_50px_-20px_rgba(10,25,47,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col ${
        large ? "lg:grid lg:grid-cols-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${large ? "aspect-[16/10] lg:aspect-auto lg:min-h-[340px]" : "aspect-[16/10]"}`}>
        {p.hero && (
          <img
            src={`${process.env.PUBLIC_URL}${p.hero}`}
            alt={p.title}
            loading={large ? "eager" : "lazy"}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
          />
        )}
        <span className="absolute top-4 left-4 rounded-full bg-white/95 text-[#0284C7] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider shadow">
          {p.category}
        </span>
      </div>
      <div className={`p-6 ${large ? "md:p-10 lg:flex lg:flex-col lg:justify-center" : "md:p-7"} flex flex-col flex-1`}>
        {large && (
          <div className="text-[12px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">Featured article</div>
        )}
        <h3 className={`font-display font-semibold text-[#0A192F] leading-snug ${large ? "text-2xl md:text-3xl" : "text-[19px]"}`}>
          {p.title}
        </h3>
        <p className={`mt-2.5 text-[#64748B] leading-relaxed flex-1 ${large ? "text-[15px] line-clamp-3" : "text-[14px] line-clamp-3"}`}>
          {p.metaDescription}
        </p>
        <div className="mt-4 flex items-center gap-4 text-[12.5px] text-[#94A3B8]">
          <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {p.dateDisplay}</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {p.readingMinutes} min read</span>
        </div>
      </div>
    </a>
  );
}

function BlogIndex() {
  const ref = useReveal();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((p) => {
      if (cat !== "All" && p.category !== cat) return false;
      if (!q) return true;
      return p.title.toLowerCase().includes(q) || p.contentHtml.toLowerCase().includes(q);
    });
  }, [query, cat]);

  const searching = query.trim() !== "" || cat !== "All";
  const featured = searching ? null : filtered[0];
  const rest = featured ? filtered.slice(1) : filtered;

  return (
    <section ref={ref} data-testid="blog-index" className="reveal pb-24 md:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Search + filters */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              data-testid="blog-search"
              placeholder="Search articles…"
              className="w-full rounded-full border border-slate-200 bg-white pl-11 pr-4 py-3 text-[15px] text-[#0A192F] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 focus:border-[#2563EB] transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                data-testid={`blog-filter-${c.replace(/\s+/g, "-").toLowerCase()}`}
                className={`rounded-full px-4 py-2 text-[13.5px] font-medium transition-all ${
                  cat === c
                    ? "bg-[#0A192F] text-white"
                    : "bg-white border border-slate-200 text-[#334155] hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Featured */}
        {featured && (
          <div className="mb-10">
            <PostCard p={featured} large />
          </div>
        )}

        {/* Grid */}
        {rest.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <PostCard key={p.slug} p={p} />
            ))}
          </div>
        ) : (
          <div className="rounded-[24px] bg-[#F8FAFC] border border-slate-100 p-10 text-center text-[15px] text-[#64748B]">
            No articles match your search — try a different term or category.
          </div>
        )}

        {/* CTA panel */}
        <div className="mt-14 rounded-[32px] bg-[#0A192F] text-white p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#0284C7]/20 blur-3xl pointer-events-none" />
          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                Reading is good. <span className="font-light text-[#94A3B8]">Checkups are better.</span>
              </h2>
              <p className="mt-2 text-[15px] text-white/70 max-w-xl">
                The best oral-health advice is the kind tailored to your mouth. Book a visit and get
                answers from the team behind these articles.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={clinic.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="blog-cta-book"
                className="inline-flex items-center gap-2 h-12 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 text-[15px] font-medium shadow-[0_8px_24px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-4 h-4" /> Book Appointment
              </a>
              <a
                href={clinic.phoneHref}
                className="inline-flex items-center gap-2 h-12 rounded-full bg-white text-[#0A192F] px-7 text-[15px] font-medium hover:bg-[#E6F8F3] transition-colors"
              >
                <Phone className="w-4 h-4" /> {clinic.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  const ref = useReveal();
  return (
    <section data-testid="blog-hero" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E6F8F3] blur-3xl opacity-70" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-[#EEF4FF] blur-3xl opacity-80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-12 md:pt-14 md:pb-16">
        <nav data-testid="blog-breadcrumb" aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-[13px] text-[#64748B]">
          <a href={`${process.env.PUBLIC_URL}/`} className="hover:text-[#0A192F] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0A192F] font-medium">Blog</span>
        </nav>

        <div ref={ref} className="reveal max-w-3xl">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-4">
            The resource centre
          </div>
          <h1 className="font-display font-medium text-[38px] leading-[1.06] md:text-[56px] md:leading-[1.03] text-[#0A192F] tracking-tight">
            Oral health, <span className="font-light text-[#0284C7]">explained properly.</span>
          </h1>
          <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[#475569] max-w-2xl">
            Practical articles from the Hawthorne Village Dental Care team — on children's teeth, gum
            health, orthodontics, dental anxiety and the technology behind modern care. Written for
            Milton families, not for search engines.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="blog-page" className="min-h-screen bg-white text-[#1E293B]">
      <PageMeta />
      <Header />
      <main>
        <Hero />
        <BlogIndex />
        <SocialProof />
        <VisitUs />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
