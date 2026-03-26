import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const COOKIE_STORAGE_KEY = "people-culture-cookie-consent";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = window.localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!accepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem(COOKIE_STORAGE_KEY, "accepted");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto w-auto max-w-2xl rounded-3xl border border-border bg-background/95 p-5 shadow-elevated backdrop-blur-sm sm:inset-x-6 sm:p-6">
      <p className="text-sm leading-relaxed text-foreground">
        Koristimo kolačiće kako bismo vam pružili bolje korisničko iskustvo i analizirali promet na stranici. Korištenjem naše stranice slažete se s našim pravilima o korištenju kolačića.
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          to="/politika-privatnosti"
          className="text-left text-sm font-semibold text-foreground underline underline-offset-4 transition-colors hover:text-accent sm:text-center"
        >
          Politika privatnosti
        </Link>
        <Button type="button" variant="hero" onClick={acceptCookies} className="rounded-full px-6">
          Razumijem
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;