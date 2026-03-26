import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const photos = [
  {
    id: 1,
    src: "/gallery/P_C-4_08.56.36.jpg",
    alt: "People & Culture Horizons 2025 - dolazak sudionika",
  },
  {
    id: 2,
    src: "/gallery/P_C-14-2.jpg",
    alt: "People & Culture Horizons 2025 - registracija sudionika",
  },
  {
    id: 3,
    src: "/gallery/P_C-18.jpg",
    alt: "People & Culture Horizons 2025 - susret sudionika",
  },
  {
    id: 4,
    src: "/gallery/P_C-21.jpg",
    alt: "People & Culture Horizons 2025 - networking razgovor",
  },
  {
    id: 5,
    src: "/gallery/P_C-22.jpg",
    alt: "People & Culture Horizons 2025 - poslovni razgovor",
  },
  {
    id: 6,
    src: "/gallery/P_C-27_09.17.00.jpg",
    alt: "People & Culture Horizons 2025 - otvorenje konferencije",
  },
  {
    id: 7,
    src: "/gallery/P_C-28-2.jpg",
    alt: "People & Culture Horizons 2025 - sudionici na pozornici",
  },
  {
    id: 8,
    src: "/gallery/P_C-32-2.jpg",
    alt: "People & Culture Horizons 2025 - logo organizatora DeeP Project",
  },
  {
    id: 9,
    src: "/gallery/P_C-37.jpg",
    alt: "People & Culture Horizons 2025 - zahvalnica na pozornici",
  },
  {
    id: 10,
    src: "/gallery/P_C-39-2.jpg",
    alt: "People & Culture Horizons 2025 - predavanje na glavnoj pozornici",
  },
  {
    id: 11,
    src: "/gallery/P_C-42_09.00.28.jpg",
    alt: "People & Culture Horizons 2025 - publika tijekom predavanja",
  },
  {
    id: 12,
    src: "/gallery/P_C-43.jpg",
    alt: "People & Culture Horizons 2025 - prvi red publike",
  },
  {
    id: 13,
    src: "/gallery/P_C-45-2.jpg",
    alt: "People & Culture Horizons 2025 - bilješke tijekom programa",
  },
  {
    id: 14,
    src: "/gallery/P_C-51.jpg",
    alt: "People & Culture Horizons 2025 - panel rasprava na pozornici",
  },
  {
    id: 15,
    src: "/gallery/P_C-53.jpg",
    alt: "People & Culture Horizons 2025 - panelisti u razgovoru",
  },
  {
    id: 16,
    src: "/gallery/P_C-63.jpg",
    alt: "People & Culture Horizons 2025 - druženje uz kavu",
  },
  {
    id: 17,
    src: "/gallery/P_C-66_09.15.06.jpg",
    alt: "People & Culture Horizons 2025 - wellness kutak partnera",
  },
  {
    id: 18,
    src: "/gallery/P_C-67-2.jpg",
    alt: "People & Culture Horizons 2025 - razgovor sudionika u foyeru",
  },
  {
    id: 19,
    src: "/gallery/P_C-70-2.jpg",
    alt: "People & Culture Horizons 2025 - networking sudionica",
  },
  {
    id: 20,
    src: "/gallery/P_C-72.jpg",
    alt: "People & Culture Horizons 2025 - ulazak u konferencijsku dvoranu",
  },
  {
    id: 21,
    src: "/gallery/P_C-78-2.jpg",
    alt: "People & Culture Horizons 2025 - predavanje na glavnoj pozornici",
  },
  {
    id: 22,
    src: "/gallery/P_C-79_09.00.28.jpg",
    alt: "People & Culture Horizons 2025 - publika u dvorani",
  },
  {
    id: 23,
    src: "/gallery/P_C-92-2.jpg",
    alt: "People & Culture Horizons 2025 - panel People & Culture HUB",
  },
  {
    id: 24,
    src: "/gallery/P_C-110.jpg",
    alt: "People & Culture Horizons 2025 - catering i networking pauza",
  },
  {
    id: 25,
    src: "/gallery/P_C-118-2.jpg",
    alt: "People & Culture Horizons 2025 - panel rasprava izbliza",
  },
  {
    id: 26,
    src: "/gallery/P_C-124-2.jpg",
    alt: "People & Culture Horizons 2025 - predavanje u manjoj dvorani",
  },
  {
    id: 27,
    src: "/gallery/P_C-130-2.jpg",
    alt: "People & Culture Horizons 2025 - razgovor panelista na pozornici",
  },
  {
    id: 28,
    src: "/gallery/P_C-132.jpg",
    alt: "People & Culture Horizons 2025 - panel diskusija na glavnoj pozornici",
  },
  {
    id: 29,
    src: "/gallery/P_C-138.jpg",
    alt: "People & Culture Horizons 2025 - govornik na tamnoj pozornici",
  },
  {
    id: 30,
    src: "/gallery/P_C-141.jpg",
    alt: "People & Culture Horizons 2025 - pažljiva publika tijekom programa",
  },
  {
    id: 31,
    src: "/gallery/P_C-145-2.jpg",
    alt: "People & Culture Horizons 2025 - panelistica na pozornici",
  },
  {
    id: 32,
    src: "/gallery/P_C-148-2.jpg",
    alt: "People & Culture Horizons 2025 - završna zahvala na pozornici",
  },
  {
    id: 33,
    src: "/gallery/P_C-151.jpg",
    alt: "People & Culture Horizons 2025 - panel o podršci HR stručnjacima",
  },
  {
    id: 34,
    src: "/gallery/P_C-167.jpg",
    alt: "People & Culture Horizons 2025 - stand-up nastup na pozornici",
  },
  {
    id: 35,
    src: "/gallery/P_C-169-2.jpg",
    alt: "People & Culture Horizons 2025 - nasmijana publika",
  },
  {
    id: 36,
    src: "/gallery/P_C-172.jpg",
    alt: "People & Culture Horizons 2025 - panel o angažiranosti zaposlenika",
  },
  {
    id: 37,
    src: "/gallery/P_C2-2_08.58.07.jpg",
    alt: "People & Culture Horizons 2025 - sudionici u foyeru",
  },
  {
    id: 38,
    src: "/gallery/P_C2-12-2.jpg",
    alt: "People & Culture Horizons 2025 - panel rasprava o tehnologiji",
  },
  {
    id: 39,
    src: "/gallery/P_C2-21-2.jpg",
    alt: "People & Culture Horizons 2025 - voditeljski dvojac na pozornici",
  },
  {
    id: 40,
    src: "/gallery/P_C2-22-2.jpg",
    alt: "People & Culture Horizons 2025 - publika tijekom aplauza",
  },
  {
    id: 41,
    src: "/gallery/P_C2-24-2.jpg",
    alt: "People & Culture Horizons 2025 - govornica na pozornici",
  },
  {
    id: 42,
    src: "/gallery/P_C2-40_08.58.07.jpg",
    alt: "People & Culture Horizons 2025 - radionica u dvorani",
  },
  {
    id: 43,
    src: "/gallery/P_C2-57-2.jpg",
    alt: "People & Culture Horizons 2025 - networking razgovor sudionica",
  },
  {
    id: 44,
    src: "/gallery/P_C2-58-2.jpg",
    alt: "People & Culture Horizons 2025 - sudionici tijekom pauze",
  },
  {
    id: 45,
    src: "/gallery/P_C2-62-2.jpg",
    alt: "People & Culture Horizons 2025 - panel rasprava na pozornici",
  },
  {
    id: 46,
    src: "/gallery/P_C2-69-2.jpg",
    alt: "People & Culture Horizons 2025 - panelist govori u raspravi",
  },
  {
    id: 47,
    src: "/gallery/P_C2-81-2.jpg",
    alt: "People & Culture Horizons 2025 - sudionici u foyeru",
  },
  {
    id: 48,
    src: "/gallery/P_C2-82-2.jpg",
    alt: "People & Culture Horizons 2025 - catering tijekom pauze",
  },
  {
    id: 49,
    src: "/gallery/P_C2-86-2.jpg",
    alt: "People & Culture Horizons 2025 - predavanje na glavnoj pozornici",
  },
  {
    id: 50,
    src: "/gallery/P_C2-93-2.jpg",
    alt: "People & Culture Horizons 2025 - panel rasprava izbliza",
  },
  {
    id: 51,
    src: "/gallery/P_C2-98.jpg",
    alt: "People & Culture Horizons 2025 - wellness kutak s masažnom foteljom",
  },
  {
    id: 52,
    src: "/gallery/P_C2-102-2.jpg",
    alt: "People & Culture Horizons 2025 - sudionice na radionici",
  },
  {
    id: 53,
    src: "/gallery/P_C2-105.jpg",
    alt: "People & Culture Horizons 2025 - rad na zadatku tijekom radionice",
  },
  {
    id: 54,
    src: "/gallery/P_C2-106-2.jpg",
    alt: "People & Culture Horizons 2025 - sudionice ispred prezentacije radionice",
  },
  {
    id: 55,
    src: "/gallery/P_C2-107-2.jpg",
    alt: "People & Culture Horizons 2025 - grupni rad u radionici",
  },
  {
    id: 56,
    src: "/gallery/P_C2-108-2.jpg",
    alt: "People & Culture Horizons 2025 - panel rasprava na glavnoj pozornici",
  },
  {
    id: 57,
    src: "/gallery/P_C2-111-2.jpg",
    alt: "People & Culture Horizons 2025 - panelistica govori na pozornici",
  },
  {
    id: 58,
    src: "/gallery/P_C2-116.jpg",
    alt: "People & Culture Horizons 2025 - poslovni panel na glavnoj pozornici",
  },
  {
    id: 59,
    src: "/gallery/P_C2-107-2.jpg",
    alt: "People & Culture Horizons 2025 - timski rad sudionika tijekom radionice",
  },
  {
    id: 60,
    src: "/gallery/P_C2-108-2.jpg",
    alt: "People & Culture Horizons 2025 - razgovor panelista na konferenciji",
  },
  {
    id: 61,
    src: "/gallery/P_C-49.jpg",
    alt: "People & Culture Horizons 2025 - publika tijekom aplauza u dvorani",
  },
];

const Gallery = () => {
  const { t } = useLanguage();
  const gallerySubtitle = t("gallery.subtitle");
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[number] | null>(null);
  const selectedPhotoIndex = selectedPhoto ? photos.findIndex((photo) => photo.id === selectedPhoto.id) : -1;

  const showPreviousPhoto = () => {
    if (selectedPhotoIndex < 0) return;
    const previousIndex = selectedPhotoIndex === 0 ? photos.length - 1 : selectedPhotoIndex - 1;
    setSelectedPhoto(photos[previousIndex]);
  };

  const showNextPhoto = () => {
    if (selectedPhotoIndex < 0) return;
    const nextIndex = selectedPhotoIndex === photos.length - 1 ? 0 : selectedPhotoIndex + 1;
    setSelectedPhoto(photos[nextIndex]);
  };

  useEffect(() => {
    if (!selectedPhoto) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }

      if (event.key === "ArrowLeft") {
        showPreviousPhoto();
      }

      if (event.key === "ArrowRight") {
        showNextPhoto();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhoto, selectedPhotoIndex]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-accent">
              {t("nav.gallery")}
            </span>
            {gallerySubtitle && (
              <p className="mx-auto max-w-3xl text-lg font-medium text-foreground md:text-xl">
                {gallerySubtitle}
              </p>
            )}
          </div>

          <section aria-label="Galerija fotografija 2025" className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {photos.map((photo) => (
              <figure
                key={photo.id}
                className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(photo)}
                  className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                  aria-label={`Povećaj fotografiju: ${photo.alt}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </button>
              </figure>
            ))}
          </section>
        </div>
      </main>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.alt}
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={showPreviousPhoto}
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Prethodna fotografija"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-background/90 px-3 py-1 text-sm font-semibold text-foreground shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Zatvori povećanu fotografiju"
            >
              ✕
            </button>
            <button
              type="button"
              onClick={showNextPhoto}
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Sljedeća fotografija"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-h-[85vh] w-full rounded-3xl bg-card object-contain shadow-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
