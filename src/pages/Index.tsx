import { Helmet } from "react-helmet-async";
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

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "People & Culture HORIZONS 2026",
  startDate: "2026-11-26T09:00:00+01:00",
  endDate: "2026-11-27T18:00:00+01:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Zagreb",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zagreb",
      addressCountry: "HR",
    },
  },
  description:
    "Vodeća HR & Business konferencija u Zagrebu, 26. - 27. studenog 2026.",
  url: "https://peopleandculture.hr/",
  organizer: {
    "@type": "Organization",
    name: "DeeP Project",
    url: "https://peopleandculture.hr",
  },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>People & Culture HORIZONS — HR & Business konferencija</title>
        <meta
          name="description"
          content="HR & Business konferencija u Zagrebu, 26. - 27. studenog 2026. Govornici, agenda, lokacija i karte."
        />
        <link rel="canonical" href="https://peopleandculture.hr/" />
        <meta property="og:title" content="People & Culture HORIZONS" />
        <meta
          property="og:description"
          content="HR & Business konferencija u Zagrebu, 26. - 27. studenog 2026."
        />
        <meta property="og:url" content="https://peopleandculture.hr/" />
        <script type="application/ld+json">{JSON.stringify(eventJsonLd)}</script>
      </Helmet>
      <CookieConsent />
      <Navbar />
      <HeroSection />
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
