import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Általános Szerződési Feltételek - Kincseskönyv",
  description: "Kincseskönyv Általános Szerződési Feltételek",
};

export default function ASZFPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-handwriting text-5xl font-bold text-textPrimary mb-8">
            Általános Szerződési Feltételek
          </h1>

          <div className="bg-surface rounded-2xl p-8 shadow-lg space-y-6 text-textSecondary">
            <section>
              <h2 className="text-2xl font-bold text-textPrimary mb-4">
                1. Általános információk
              </h2>
              <p className="mb-4">
                A Kincseskönyv (a továbbiakban: Szolgáltató) egyedi, személyre
                szabott fotóalbumok és naptárak készítését és értékesítését
                végzi.
              </p>
              <p>
                Szolgáltató adatai:
                <br />
                Név: [Cégnév]
                <br />
                Székhely: [Cím]
                <br />
                Adószám: [Adószám]
                <br />
                E-mail: info@kincseskonyv.hu
                <br />
                Telefon: +36 30 123 4567
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-textPrimary mb-4">
                2. Rendelés menete
              </h2>
              <p className="mb-4">A megrendelés az alábbi lépésekben történik:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Felhasználó regisztrációja vagy bejelentkezése</li>
                <li>Képek feltöltése és album szerkesztése</li>
                <li>Kosárba helyezés és rendelési adatok megadása</li>
                <li>Online fizetés bankkártyával</li>
                <li>Visszaigazoló e-mail fogadása</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-textPrimary mb-4">
                3. Árak és fizetés
              </h2>
              <p className="mb-4">
                Az oldalon feltüntetett árak bruttó árak, magyar forintban
                értendőek.
              </p>
              <p>
                Aktuális árak:
                <br />- Fotóalbum 20×20 cm: 25.000 Ft
                <br />- Fotóalbum 27×27 cm: 30.000 Ft
                <br />- Naptár: 12.000 Ft
                <br />- Digitalizálási szolgáltatás: 8.000 Ft
                <br />- Szállítási költség: 1.500 Ft
              </p>
            </section>

            <p className="text-sm text-textMuted pt-6 border-t border-border">
              Jelen ÁSZF 2025. november 18-tól hatályos.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
