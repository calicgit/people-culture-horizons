import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-primary-foreground/5 bg-hero py-7 md:py-8">
      <div className="container mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 text-primary-foreground/80 mb-6">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-primary-foreground">Pratite nas</h3>
            <a
              href="https://www.linkedin.com/company/108869392"
              target="_blank"
              rel="noreferrer"
              aria-label="People & Culture HORIZONS na LinkedInu"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/15 p-3 text-primary-foreground transition-colors hover:text-primary hover:border-primary md:justify-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-9.5 6.5H7V17h2.5zM8.25 6.56a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88M17 12.03c0-2.5-1.33-3.66-3.1-3.66-1.43 0-2.07.79-2.43 1.34V9.5H9V17h2.47v-4.18c0-1.1.21-2.17 1.57-2.17 1.34 0 1.36 1.25 1.36 2.24V17H17z" />
              </svg>
            </a>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-primary-foreground">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <a href="mailto:horizons@peopleandculture.hr" className="flex items-center justify-center gap-3 hover:text-primary transition-colors md:justify-start">
                <Mail className="h-4 w-4 shrink-0" />
                <span>horizons@peopleandculture.hr</span>
              </a>
              <a href="tel:+38514103734" className="flex items-center justify-center gap-3 hover:text-primary transition-colors md:justify-start">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+385 1 4103 734</span>
              </a>
            </div>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-primary-foreground">Program, organizacija, mediji i sponzori</h3>
            <div className="space-y-3 text-sm">
              <a href="mailto:dario.perak@deepproject.hr" className="flex items-center justify-center gap-3 hover:text-primary transition-colors md:justify-start">
                <Mail className="h-4 w-4 shrink-0" />
                <span>dario.perak@deepproject.hr</span>
              </a>
              <a href="tel:+385981628349" className="flex items-center justify-center gap-3 hover:text-primary transition-colors md:justify-start">
                <Smartphone className="h-4 w-4 shrink-0" />
                <span>+385 98 1628 349</span>
              </a>
            </div>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-primary-foreground">People &amp; Culture HORIZONS. - DeeP Project</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Kamenarka 37, Zagreb</span>
              </div>
              <a href="mailto:info@deepproject.hr" className="flex items-center justify-center gap-3 hover:text-primary transition-colors md:justify-start">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@deepproject.hr</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/5 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/30">
          <span>© 2026 People &amp; Culture HORIZONS.</span>
          <Link to="/politika-privatnosti" className="text-primary-foreground/50 hover:text-primary transition-colors">
            Politika privatnosti
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
