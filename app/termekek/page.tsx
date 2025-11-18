import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { BookOpen, Calendar, Check, Star } from "lucide-react";

export const metadata = {
  title: "Termékek - Kincseskönyv",
  description: "Prémium minőségű fotóalbumok és naptárak gyerekrajzokból",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-24 bg-gradient-to-br from-primary-50 via-background to-secondary-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="font-handwriting text-5xl md:text-6xl font-bold text-textPrimary mb-4">
                Termékeink
              </h1>
              <p className="text-lg text-textSecondary max-w-2xl mx-auto">
                Válassz a prémium minőségű termékeink közül és őrizd meg
                gyermeked rajzait örökre
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Product cards - same as homepage */}
              <div className="bg-surface rounded-3xl p-6 shadow-pink-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-border">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <BookOpen className="w-24 h-24 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-2">
                  Fotóalbum 20×20 cm
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent-400 fill-accent-400"
                    />
                  ))}
                  <span className="text-sm text-textMuted ml-1">(4.9)</span>
                </div>
                <p className="text-sm text-textSecondary mb-4">
                  24 oldalas prémium minőségű album, személyre szabható
                  elrendezésekkel
                </p>
                <div className="text-3xl font-bold text-primary-600 mb-4">
                  25.000 Ft
                </div>
                <Link
                  href="/kezdjuk-el?type=album&size=20x20"
                  className="w-full block bg-primary-300 hover:bg-primary-400 text-textPrimary font-semibold py-3 rounded-full transition-all hover:scale-105 text-center"
                >
                  Kezdem a szerkesztést
                </Link>
              </div>

              <div className="bg-surface rounded-3xl p-6 shadow-pink-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-border relative">
                <div className="absolute -top-3 -right-3 bg-accent-400 text-textPrimary px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  Népszerű!
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-secondary-100 to-accent-100 flex items-center justify-center">
                  <BookOpen className="w-24 h-24 text-secondary-400" />
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-2">
                  Fotóalbum 27×27 cm
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent-400 fill-accent-400"
                    />
                  ))}
                  <span className="text-sm text-textMuted ml-1">(5.0)</span>
                </div>
                <p className="text-sm text-textSecondary mb-4">
                  24 oldalas nagy méretű album, extra 6 képes elrendezéssel
                </p>
                <div className="text-3xl font-bold text-primary-600 mb-4">
                  30.000 Ft
                </div>
                <Link
                  href="/kezdjuk-el?type=album&size=27x27"
                  className="w-full block bg-primary-300 hover:bg-primary-400 text-textPrimary font-semibold py-3 rounded-full transition-all hover:scale-105 text-center"
                >
                  Kezdem a szerkesztést
                </Link>
              </div>

              <div className="bg-surface rounded-3xl p-6 shadow-pink-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-border">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-accent-100 to-primary-100 flex items-center justify-center">
                  <Calendar className="w-24 h-24 text-accent-400" />
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-2">
                  Falinaptár
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent-400 fill-accent-400"
                    />
                  ))}
                  <span className="text-sm text-textMuted ml-1">(4.8)</span>
                </div>
                <p className="text-sm text-textSecondary mb-4">
                  12 hónapos falinaptár gyermek rajzokkal
                </p>
                <div className="text-3xl font-bold text-primary-600 mb-4">
                  12.000 Ft
                </div>
                <Link
                  href="/kezdjuk-el?type=calendar"
                  className="w-full block bg-primary-300 hover:bg-primary-400 text-textPrimary font-semibold py-3 rounded-full transition-all hover:scale-105 text-center"
                >
                  Naptár készítése
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
