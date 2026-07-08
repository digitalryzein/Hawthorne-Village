import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import CallBar from "@/components/site/CallBar";
import Awards from "@/components/site/Awards";
import SocialProof from "@/components/site/SocialProof";
import WhyChoose from "@/components/site/WhyChoose";
import MeetDentist from "@/components/site/MeetDentist";
import Services from "@/components/site/Services";
import Technology from "@/components/site/Technology";
import SmileGallery from "@/components/site/SmileGallery";
import NewPatientWelcome from "@/components/site/NewPatientWelcome";
import Insurance from "@/components/site/Insurance";
import FAQ from "@/components/site/FAQ";
import VisitUs from "@/components/site/VisitUs";
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
        <CallBar />
        <Awards />
        <WhyChoose />
        <Services />
        <MeetDentist />
        <Technology />
        <SmileGallery />
        <NewPatientWelcome />
        <Insurance />
        <SocialProof />
        <FAQ />
        <VisitUs />
        <FinalCTA />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
