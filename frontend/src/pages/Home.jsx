import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import SocialProof from "@/components/site/SocialProof";
import WhyChoose from "@/components/site/WhyChoose";
import MeetDentist from "@/components/site/MeetDentist";
import Services from "@/components/site/Services";
import Technology from "@/components/site/Technology";
import SmileGallery from "@/components/site/SmileGallery";
import PatientJourney from "@/components/site/PatientJourney";
import Insurance from "@/components/site/Insurance";
import FAQ from "@/components/site/FAQ";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";
import StickyActions from "@/components/site/StickyActions";
import JsonLd from "@/components/site/JsonLd";

export default function Home() {
  return (
    <div data-testid="home-page" className="min-h-screen bg-white text-[#1E293B]">
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <WhyChoose />
        <MeetDentist />
        <Services />
        <Technology />
        <SmileGallery />
        <PatientJourney />
        <Insurance />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
