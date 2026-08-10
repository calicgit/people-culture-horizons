import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
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
  image: "https://peopleandculture.hr/og-image.jpg",
  location: {
    "@type": "Place",
    name: "Mozaik Event Centar",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Slavonska avenija 6/2",
      addressLocality: "Zagreb",
      postalCode: "10000",
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
    email: "horizons@peopleandculture.hr",
    telephone: ["+385 1 7077 436", "+385 98 1628 349"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kamenarka 37",
      addressLocality: "Zagreb",
      postalCode: "10000",
      addressCountry: "HR",
    },
  },
  offers: [
    {
      "@type": "Offer",
      name: "Blind bird",
      price: "249.00",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://peopleandculture.hr/#pricing",
    },
    {
      "@type": "Offer",
      name: "Early bird",
      price: "349.00",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://peopleandculture.hr/#pricing",
    },
    {
      "@type": "Offer",
      name: "Regular",
      price: "499.00",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://peopleandculture.hr/#pricing",
    },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>People & Culture HORIZONS - HR & Business konferencija</title>
        <meta
          name="description"
          content="HR & Business konferencija u Zagrebu, 26. - 27. studenog 2026. Govornici, agenda, lokacija i karte."
        />
        <link rel="canonical" href="https://peopleandculture.hr/" />
        <meta property="og:title" content="People & Culture HORIZONS - HR & Business konferencija" />
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
