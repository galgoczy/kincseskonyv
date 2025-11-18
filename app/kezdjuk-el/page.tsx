import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Kezdjük el! - Kincseskönyv",
  description: "Készítsd el saját Kincseskönyvedet most!",
};

export default function StartPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-primary-50 via-background to-secondary-50 flex items-center justify-center py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="font-handwriting text-6xl font-bold text-textPrimary mb-6">
            Hamarosan itt!
          </h1>
          <p className="text-lg text-textSecondary mb-8">
            Az album szerkesztő jelenleg fejlesztés alatt áll. Hamarosan
            elérhető lesz!
          </p>
          <Link
            href="/"
            className="inline-block bg-primary-300 hover:bg-primary-400 text-textPrimary font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
          >
            Vissza a főoldalra
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
