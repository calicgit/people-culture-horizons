import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TopicsSection from "@/components/TopicsSection";
import KeynoteSection from "@/components/KeynoteSection";
import SpeakersSection from "@/components/SpeakersSection";
import AgendaSection from "@/components/AgendaSection";
import PricingSection from "@/components/PricingSection";
import VenueSection from "@/components/VenueSection";
import SponsorsSection from "@/components/SponsorsSection";
import GalleryPreviewSection from "@/components/GalleryPreviewSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CookieConsent />
      <Navbar />
      <HeroSection />
      <HostBar />
      <TopicsSection />
      <KeynoteSection />
      <SpeakersSection />
      <AgendaSection />
      <PricingSection />
      <VenueSection />
      <SponsorsSection />
      <GalleryPreviewSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
