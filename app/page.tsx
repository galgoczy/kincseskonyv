import Link from "next/link";
import {
  Heart,
  Star,
  BookOpen,
  Upload,
  Edit3,
  ShoppingCart as ShoppingCartIcon,
  Check,
  Calendar,
  Package,
  ChevronDown,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-background to-secondary-50 relative overflow-hidden">
          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 animate-float">
            <Heart className="w-12 h-12 text-primary-300 opacity-50" />
          </div>
          <div
            className="absolute bottom-20 right-20 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <Star className="w-16 h-16 text-accent-300 opacity-50" />
          </div>

          <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <h1 className="font-handwriting text-6xl md:text-7xl lg:text-8xl font-bold leading-tight bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
                Gyerekrajzokból
                <br />
                Kincseskönyvet
                <span className="inline-block ml-4">🎨✨</span>
              </h1>

              <p className="text-lg md:text-xl text-textSecondary max-w-xl">
                Őrizd meg gyermeked rajzait örökre egy gyönyörű, nyomtatott
                albumban vagy naptárban. Egyszerűen, online szerkeszthető,
                prémium minőségben.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kezdjuk-el"
                  className="bg-primary-300 hover:bg-primary-400 text-textPrimary font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-1 text-center"
                >
                  Kezdjük el!
                </Link>
                <Link
                  href="/hogyan-mukodik"
                  className="bg-transparent border-2 border-primary-300 hover:bg-primary-50 text-primary-600 font-semibold px-8 py-4 rounded-full transition-all text-center"
                >
                  Hogyan működik?
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-2 pt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent-400 fill-accent-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-textMuted">
                  500+ boldog család
                </span>
              </div>
            </div>

            {/* Right: Animated element placeholder */}
            <div className="relative h-[500px] flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center space-y-4">
                  <BookOpen className="w-32 h-32 mx-auto text-primary-400 animate-float" />
                  <p className="text-textMuted text-sm px-4">
                    Animált könyv preview (Lottie/3D)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-textMuted" />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-handwriting text-5xl md:text-6xl font-bold text-textPrimary mb-4">
                Hogyan működik?
              </h2>
              <p className="text-lg text-textSecondary max-w-2xl mx-auto">
                Négy egyszerű lépésben készítsd el a saját Kincseskönyvedet
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-300 to-primary-400 rounded-full flex items-center justify-center shadow-pink-lg">
                  <Upload className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-textPrimary">
                  Töltsd fel a rajzokat
                </h3>
                <p className="text-sm text-textSecondary">
                  Egyszerűen húzd be a képeket vagy tallózd be a gyerek rajzait
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-secondary-300 to-secondary-400 rounded-full flex items-center justify-center shadow-mint-lg">
                  <Edit3 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-textPrimary">
                  Szerkeszd meg az albumot
                </h3>
                <p className="text-sm text-textSecondary">
                  Válassz sablonokat, rendezd el a képeket, adj hozzá
                  feliratokat
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent-300 to-accent-400 rounded-full flex items-center justify-center shadow-lg">
                  <ShoppingCartIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-textPrimary">
                  Rendeld meg
                </h3>
                <p className="text-sm text-textSecondary">
                  Add meg a szállítási adatokat és fizess biztonságosan online
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center shadow-lg">
                  <Package className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-textPrimary">
                  Kézhez kapod
                </h3>
                <p className="text-sm text-textSecondary">
                  5-7 munkanapon belül prémium minőségben kinyomtatva
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-24 bg-gradient-to-br from-primary-50 via-background to-secondary-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-handwriting text-5xl md:text-6xl font-bold text-textPrimary mb-4">
                Termékeink
              </h2>
              <p className="text-lg text-textSecondary max-w-2xl mx-auto">
                Válassz a prémium minőségű termékeink közül
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Album 20x20 */}
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
                <ul className="text-sm text-textSecondary space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary-400 mt-0.5 flex-shrink-0" />
                    <span>24 oldal (bővíthető +4 oldallal)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary-400 mt-0.5 flex-shrink-0" />
                    <span>10 különböző sablon</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary-400 mt-0.5 flex-shrink-0" />
                    <span>Keményfedeles kötés</span>
                  </li>
                </ul>
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

              {/* Album 27x27 */}
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
                <ul className="text-sm text-textSecondary space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary-400 mt-0.5 flex-shrink-0" />
                    <span>Nagyobb méret, több részlet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary-400 mt-0.5 flex-shrink-0" />
                    <span>11 sablon (beleértve 6 képes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary-400 mt-0.5 flex-shrink-0" />
                    <span>Prémium keményfedeles</span>
                  </li>
                </ul>
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

              {/* Calendar */}
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
                  12 hónapos falinaptár gyermek rajzokkal, minden hónaphoz egy
                  kép
                </p>
                <ul className="text-sm text-textSecondary space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary-400 mt-0.5 flex-shrink-0" />
                    <span>12 hónap, 12 rajz</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary-400 mt-0.5 flex-shrink-0" />
                    <span>A4-es méret</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary-400 mt-0.5 flex-shrink-0" />
                    <span>Felakasztható spirálkötés</span>
                  </li>
                </ul>
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

        {/* CTA Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-handwriting text-4xl md:text-5xl font-bold text-textPrimary mb-6">
              Készítsd el az első Kincseskönyvedet ma!
            </h2>
            <p className="text-lg text-textSecondary mb-8">
              Több száz család már megőrizte gyermeke alkotásait. Csatlakozz
              hozzájuk!
            </p>
            <Link
              href="/kezdjuk-el"
              className="inline-block bg-primary-300 hover:bg-primary-400 text-textPrimary font-semibold px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-1"
            >
              Kezdés most
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
