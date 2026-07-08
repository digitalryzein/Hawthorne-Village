import { useEffect } from "react";
import { clinic, faqs, services } from "@/lib/site-data";

// Injects JSON-LD schema for Local SEO / GEO / AEO into <head>.
export default function JsonLd() {
  useEffect(() => {
    const localBusiness = {
      "@context": "https://schema.org",
      "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
      name: clinic.name,
      image: "https://hawthornevillagedental.ca/wp-content/uploads/2019/04/drsarna-small-squareDo7-600x600-e1554354790202.jpg",
      logo: "https://hawthornevillagedental.ca/wp-content/uploads/2024/09/Image.jpg",
      url: "https://hawthornevillagedental.ca/",
      telephone: clinic.phone,
      email: clinic.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: clinic.address.street,
        addressLocality: clinic.address.city,
        addressRegion: clinic.address.region,
        postalCode: clinic.address.postal,
        addressCountry: clinic.address.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: 43.5286418, longitude: -79.8370535 },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "10:00", closes: "19:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "18:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:00" },
      ],
      areaServed: clinic.neighbourhoods.map((n) => ({ "@type": "Place", name: n })),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: clinic.googleRating,
        reviewCount: clinic.reviewCount,
      },
      makesOffer: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "MedicalProcedure", name: s.name, description: s.blurb },
      })),
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

    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Physician",
      name: "Dr. Raju Sarna",
      jobTitle: "Dentist",
      medicalSpecialty: ["Cosmetic Dentistry", "Implantology", "Restorative Dentistry"],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "University of California, San Francisco" },
        { "@type": "CollegeOrUniversity", name: "University of California, Los Angeles" },
      ],
      worksFor: { "@type": "Dentist", name: clinic.name },
    };

    const scripts = [];
    [localBusiness, faqSchema, personSchema].forEach((data, i) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.jsonld = `hvdc-${i}`;
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
      scripts.push(s);
    });

    return () => scripts.forEach((s) => s.remove());
  }, []);

  return null;
}
