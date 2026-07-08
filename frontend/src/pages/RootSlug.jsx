import { useParams, Navigate } from "react-router-dom";
import ServicePageTemplate from "@/pages/services/ServicePageTemplate";
import BlogPostTemplate from "@/pages/blog/BlogPostTemplate";
import { techPages } from "@/pages/technology/index";
import { servicePages } from "@/pages/services/index";
import { blogPostsBySlug } from "@/pages/blog/index";

// Root-level slugs serve either a technology page or a blog post,
// preserving the live site's URL structure.
export default function RootSlug() {
  const { slug } = useParams();
  const tech = techPages[slug];
  if (tech) return <ServicePageTemplate config={tech} />;
  const post = blogPostsBySlug[slug];
  if (post) return <BlogPostTemplate post={post} />;
  // Old links sometimes used unprefixed service slugs — send them to the canonical URL.
  if (servicePages[slug]) return <Navigate to={`/services/${slug}`} replace />;
  return <Navigate to="/" replace />;
}
