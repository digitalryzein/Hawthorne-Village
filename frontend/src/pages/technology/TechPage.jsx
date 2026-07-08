import { useParams, Navigate } from "react-router-dom";
import ServicePageTemplate from "@/pages/services/ServicePageTemplate";
import { techPages } from "./index";

export default function TechPage() {
  const { slug } = useParams();
  const config = techPages[slug];
  if (!config) return <Navigate to="/" replace />;
  return <ServicePageTemplate config={config} />;
}
