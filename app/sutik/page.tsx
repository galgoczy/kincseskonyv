import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Süti (Cookie) Tájékoztató - Kincseskönyv",
  description: "Kincseskönyv süti (cookie) használat és adatvédelem",
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-handwriting text-5xl font-bold text-textPrimary mb-8">
            Süti (Cookie) Tájékoztató
          </h1>

          <div className="bg-surface rounded-2xl p-8 shadow-lg space-y-6 text-textSecondary">
            <section>
              <h2 className="text-2xl font-bold text-textPrimary mb-4">
                Mi az a süti?
              </h2>
              <p>
                A sütik (cookies) kis szöveges fájlok, amelyeket a weboldal a
                böngésződben tárol. Ezek segítenek nekünk abban, hogy emlékezz
                a beállításaidra és javítsuk a felhasználói élményt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-textPrimary mb-4">
                Milyen sütiket használunk?
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-textPrimary mb-2">
                    1. Alapvetően szükséges sütik
                  </h3>
                  <p className="mb-2">
                    Ezek elengedhetetlenek az oldal működéséhez:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Bejelentkezési munkamenet</li>
                    <li>Kosár tartalma</li>
                    <li>Süti-beleegyezés állapota</li>
                    <li>Nyelvi és régiós beállítások</li>
                  </ul>
                  <p className="text-sm text-textMuted mt-2">
                    <strong>Érvényesség:</strong> Munkamenet vagy 1 év
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-textPrimary mb-2">
                    2. Funkcionális sütik
                  </h3>
                  <p className="mb-2">Ezek emlékeznek a választásaidra:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Szerkesztő állapot (album készítésnél)</li>
                    <li>Kiválasztott termék beállítások</li>
                    <li>Egyéni elrendezési preferenciák</li>
                  </ul>
                  <p className="text-sm text-textMuted mt-2">
                    <strong>Érvényesség:</strong> 30 nap
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-textPrimary mb-2">
                    3. Teljesítményt mérő sütik (opcionális)
                  </h3>
                  <p className="mb-2">
                    Ezek segítenek megérteni, hogyan használod az oldalt:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Google Analytics (anonymizált IP-vel)</li>
                    <li>Látogatottsági statisztikák</li>
                    <li>Oldalbetöltési sebességmérés</li>
                    <li>Felhasználói útvonalak elemzése</li>
                  </ul>
                  <p className="text-sm text-textMuted mt-2">
                    <strong>Érvényesség:</strong> 2 év
                  </p>
                  <div className="mt-3 p-4 bg-accent-50 rounded-lg border-l-4 border-accent-400">
                    <p className="text-sm">
                      ℹ️ Ezeket a sütiket <strong>csak akkor</strong>{" "}
                      használjuk, ha te beleegyezel a cookie banner-ben.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-textPrimary mb-2">
                    4. Marketing sütik (opcionális)
                  </h3>
                  <p className="mb-2">
                    Ezek segítenek releváns ajánlatokat mutatni:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Facebook Pixel</li>
                    <li>Google Ads konverziókövetés</li>
                    <li>Remarketing kampányok</li>
                  </ul>
                  <p className="text-sm text-textMuted mt-2">
                    <strong>Érvényesség:</strong> 90 nap
                  </p>
                  <div className="mt-3 p-4 bg-accent-50 rounded-lg border-l-4 border-accent-400">
                    <p className="text-sm">
                      ℹ️ Ezeket a sütiket <strong>csak akkor</strong>{" "}
                      használjuk, ha te beleegyezel.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-textPrimary mb-4">
                Hogyan kezelheted a sütiket?
              </h2>
              <p className="mb-4">
                Bármikor módosíthatod a süti beállításaidat a böngésződben. Az
                összes böngészőben lehetőség van a sütik törlésére vagy
                letiltására.
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h4 className="font-semibold text-textPrimary mb-2">
                    Google Chrome
                  </h4>
                  <p className="text-sm">
                    Beállítások → Adatvédelem és biztonság → Sütik és egyéb
                    webhelyadatok
                  </p>
                </div>

                <div className="p-4 bg-secondary-50 rounded-lg">
                  <h4 className="font-semibold text-textPrimary mb-2">
                    Firefox
                  </h4>
                  <p className="text-sm">
                    Beállítások → Adatvédelem és biztonság → Sütik és
                    webhelyadatok
                  </p>
                </div>

                <div className="p-4 bg-accent-50 rounded-lg">
                  <h4 className="font-semibold text-textPrimary mb-2">
                    Safari
                  </h4>
                  <p className="text-sm">
                    Beállítások → Adatvédelem → Sütik kezelése
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-lg">
                <p className="text-sm">
                  <strong>⚠️ Fontos:</strong> Az alapvetően szükséges sütik
                  letiltása esetén előfordulhat, hogy az oldal egyes funkciói
                  nem működnek megfelelően (pl. bejelentkezés, kosár
                  használata).
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-textPrimary mb-4">
                Süti beállítások módosítása
              </h2>
              <p className="mb-4">
                A süti beállításaidat bármikor megváltoztathatod az oldal
                alján található &quot;Süti beállítások&quot; linkre kattintva.
              </p>
              <button className="bg-primary-300 hover:bg-primary-400 text-textPrimary font-semibold px-6 py-3 rounded-full transition-all hover:scale-105">
                Süti beállítások megnyitása
              </button>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-textPrimary mb-4">
                Harmadik fél sütijei
              </h2>
              <p className="mb-4">
                Weboldalunk használhat harmadik féltől származó sütiket is az
                alábbi szolgáltatóktól:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> Weboldal használati
                  statisztikák
                  <br />
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-600 hover:text-primary-700 underline"
                  >
                    Google Adatvédelmi irányelvek
                  </a>
                </li>
                <li>
                  <strong>Facebook Pixel:</strong> Hirdetési kampányok mérése
                  <br />
                  <a
                    href="https://www.facebook.com/privacy/explanation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-600 hover:text-primary-700 underline"
                  >
                    Facebook Adatvédelmi irányelvek
                  </a>
                </li>
                <li>
                  <strong>Stripe:</strong> Biztonságos fizetés (csak checkout
                  során)
                  <br />
                  <a
                    href="https://stripe.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-600 hover:text-primary-700 underline"
                  >
                    Stripe Adatvédelmi irányelvek
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-textPrimary mb-4">
                Kapcsolat
              </h2>
              <p>
                Kérdés esetén írj nekünk:
                <br />
                <strong>E-mail:</strong>{" "}
                <a
                  href="mailto:info@kincseskonyv.hu"
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  info@kincseskonyv.hu
                </a>
                <br />
                <strong>Telefon:</strong> +36 30 123 4567
              </p>
            </section>

            <p className="text-sm text-textMuted pt-6 border-t border-border">
              Jelen Süti Tájékoztató 2025. november 18-tól hatályos.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
