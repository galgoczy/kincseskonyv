import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Adatvédelmi Tájékoztató - Kincseskönyv",
  description: "Kincseskönyv Adatvédelmi Tájékoztató és GDPR megfelelés",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-handwriting text-5xl font-bold text-textPrimary mb-8">
            Adatvédelmi Tájékoztató
          </h1>

          <div className="bg-surface rounded-2xl p-8 shadow-lg space-y-6 text-textSecondary">
            <p className="text-lg">
              A Kincseskönyv elkötelezett a személyes adatok védelmében és a
              GDPR előírásainak megfelelően jár el.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-textPrimary mb-4">
                1. Adatkezelő adatai
              </h2>
              <p>
                Név: [Cégnév]
                <br />
                Székhely: [Cím]
                <br />
                E-mail: info@kincseskonyv.hu
                <br />
                Telefon: +36 30 123 4567
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-textPrimary mb-4">
                2. Kezelt adatok köre
              </h2>
              <p className="mb-4">Regisztráció során:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Név</li>
                <li>E-mail cím</li>
                <li>Telefonszám (opcionális)</li>
                <li>Jelszó (titkosítva tároljuk)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-textPrimary mb-4">
                3. Adatkezelés célja
              </h2>
              <p>Az adatokat kizárólag az alábbi célokra használjuk:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Megrendelések teljesítése</li>
                <li>Ügyfélszolgálati kapcsolattartás</li>
                <li>Számlázás</li>
                <li>Termékek személyre szabása és nyomtatása</li>
              </ul>
            </section>

            <p className="text-sm text-textMuted pt-6 border-t border-border">
              Jelen Adatvédelmi Tájékoztató 2025. november 18-tól hatályos.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
