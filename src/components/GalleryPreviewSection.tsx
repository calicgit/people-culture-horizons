const galleryPreviewImages = [
  {
    src: "/gallery/P_C-39-2.jpg",
    alt: "Atmosfera konferencije People & Culture HORIZONS na glavnoj pozornici",
  },
  {
    src: "/gallery/P_C-63.jpg",
    alt: "Sudionici konferencije tijekom druženja i umrežavanja",
  },
  {
    src: "/gallery/P_C-110.jpg",
    alt: "Sudionici tijekom pauze i networkinga u foyeru",
  },
  {
    src: "/gallery/P_C-132.jpg",
    alt: "Panel rasprava na konferencijskoj pozornici",
  },
  {
    src: "/gallery/P_C2-40_08.58.07.jpg",
    alt: "Radionička atmosfera na konferenciji People & Culture HORIZONS",
  },
  {
    src: "/gallery/P_C2-58-2.jpg",
    alt: "Sudionici u razgovoru tijekom konferencijske pauze",
  },
  {
    src: "/gallery/P_C2-86-2.jpg",
    alt: "Predavanje na glavnoj pozornici konferencije",
  },
  {
    src: "/gallery/P_C2-98.jpg",
    alt: "Wellness kutak i dodatni sadržaji za sudionike konferencije",
  },
  {
    src: "/gallery/P_C-79_09.00.28.jpg",
    alt: "Publika tijekom programa na konferenciji People & Culture HORIZONS",
  },
  {
    src: "/gallery/P_C-118-2.jpg",
    alt: "Panel rasprava izbliza tijekom konferencije",
  },
  {
    src: "/gallery/P_C2-12-2.jpg",
    alt: "Tehnološki panel i publika u konferencijskoj dvorani",
  },
  {
    src: "/gallery/P_C2-111-2.jpg",
    alt: "Govornica na pozornici konferencije People & Culture HORIZONS",
  },
];

const GalleryPreviewSection = () => {
  return (
    <section className="bg-background py-12 md:py-16">
      <a
        href="/galerija-2025"
        aria-label="Otvori Galeriju 2025"
        className="group block w-full overflow-hidden border-y border-border bg-card shadow-sm transition-[box-shadow,transform] duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <div className="grid grid-cols-3 md:grid-cols-6">
          {galleryPreviewImages.map((image) => (
            <div key={image.src} className="aspect-[4/3] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-border px-5 py-4 md:px-8 md:py-5">
          <p className="text-lg font-semibold text-foreground md:text-2xl">Pogledajte trenutke s prošlogodišnje konferencije</p>
          <span className="shrink-0 text-sm font-semibold text-accent transition-transform duration-300 group-hover:translate-x-1">
            Otvori galeriju →
          </span>
        </div>
      </a>
    </section>
  );
};

export default GalleryPreviewSection;