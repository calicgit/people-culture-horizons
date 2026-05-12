import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.svg";
import logoWhite from "@/assets/logo-white-dot.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const useDarkText = scrolled || !isHome;

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);

    if (isHome) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t("nav.topics"), href: "#topics" },
    { label: t("nav.speakers"), href: "#speakers" },
    { label: t("nav.agenda"), href: "#agenda" },
    { label: t("nav.venue"), href: "#venue" },
    { label: t("nav.pricing"), href: "#pricing" },
    { label: t("nav.sponsors"), href: "#sponsors" },
  ];


  const toggleLang = () => setLang(lang === "hr" ? "en" : "hr");

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${useDarkText ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent border-b border-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" onClick={handleLogoClick} className="flex items-center" aria-label="People & Culture Horizons naslovnica">
          <img src={useDarkText ? logo : logoWhite} alt="People & Culture Horizons" className="h-20 translate-y-2" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={isHome ? link.href : `/${link.href}`}
              className={`text-sm font-medium transition-colors ${useDarkText ? 'text-foreground/70 hover:text-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'}`}
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/galerija-2025"
            className={`text-sm font-medium transition-colors ${useDarkText ? 'text-foreground/70 hover:text-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'}`}
          >
            {t("nav.gallery")}
          </Link>
          <button
            onClick={toggleLang}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${useDarkText ? 'text-foreground/70 hover:text-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'}`}
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            {lang === "hr" ? "EN" : "HR"}
          </button>
          <a href="#pricing">
            <Button variant="hero" size="sm">
              {t("nav.buyTicket")}
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden ${useDarkText ? 'text-foreground' : 'text-primary-foreground'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={isHome ? link.href : `/${link.href}`}
              className="block text-foreground/70 hover:text-foreground text-sm font-medium py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/galerija-2025"
            className="block text-foreground/70 hover:text-foreground text-sm font-medium py-2"
            onClick={() => setOpen(false)}
          >
            {t("nav.gallery")}
          </Link>
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-foreground/70 hover:text-foreground text-sm font-medium py-2"
          >
            <Globe className="w-4 h-4" />
            {lang === "hr" ? "English" : "Hrvatski"}
          </button>
          <a href="#pricing" onClick={() => setOpen(false)}>
            <Button variant="hero" size="sm" className="w-full mt-2">
              {t("nav.buyTicket")}
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
