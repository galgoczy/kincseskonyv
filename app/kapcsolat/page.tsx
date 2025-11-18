import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, Clock } from "lucide-react";

export const metadata = {
  title: "Kapcsolat - Kincseskönyv",
  description:
    "Vedd fel velünk a kapcsolatot! Válaszolunk minden kérdésedre 24 órán belül.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-24 bg-surface">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="font-handwriting text-5xl font-bold text-textPrimary mb-4">
                Vedd fel velünk a kapcsolatot!
              </h1>
              <p className="text-lg text-textSecondary">
                Válaszolunk minden kérdésedre 24 órán belül
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact form */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-textPrimary mb-2">
                      Név *
                    </label>
                    <input
                      type="text"
                      placeholder="Kovács Anna"
                      required
                      className="w-full bg-surface border-2 border-border focus:border-primary-300 px-4 py-3 rounded-xl focus:ring-4 focus:ring-primary-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-textPrimary mb-2">
                      E-mail cím *
                    </label>
                    <input
                      type="email"
                      placeholder="anna@email.hu"
                      required
                      className="w-full bg-surface border-2 border-border focus:border-primary-300 px-4 py-3 rounded-xl focus:ring-4 focus:ring-primary-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-textPrimary mb-2">
                      Telefonszám
                    </label>
                    <input
                      type="tel"
                      placeholder="+36 30 123 4567"
                      className="w-full bg-surface border-2 border-border focus:border-primary-300 px-4 py-3 rounded-xl focus:ring-4 focus:ring-primary-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-textPrimary mb-2">
                      Üzenet *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Írd le kérdésedet vagy üzenetedet..."
                      required
                      className="w-full bg-surface border-2 border-border focus:border-primary-300 px-4 py-3 rounded-xl focus:ring-4 focus:ring-primary-100 transition-all outline-none resize-none"
                    />
                  </div>

                  <div className="bg-gray-100 p-4 rounded-xl text-center text-sm text-textMuted">
                    [reCAPTCHA lesz itt]
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-300 hover:bg-primary-400 text-textPrimary font-semibold py-4 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105"
                  >
                    Üzenet küldése
                  </button>
                </form>
              </div>

              {/* Contact info */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-textPrimary mb-1">
                      E-mail
                    </h3>
                    <p className="text-textSecondary">info@kincseskonyv.hu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-textPrimary mb-1">
                      Telefon
                    </h3>
                    <p className="text-textSecondary">+36 30 123 4567</p>
                    <p className="text-sm text-textMuted">H-P 9:00-17:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-textPrimary mb-1">
                      Válaszidő
                    </h3>
                    <p className="text-textSecondary">
                      24 órán belül válaszolunk
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
