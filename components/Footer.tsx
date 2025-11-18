import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Brand */}
          <div>
            <h3 className="font-handwriting text-2xl font-bold text-textPrimary mb-4">
              Kincseskönyv
            </h3>
            <p className="text-sm text-textSecondary">
              Gyerekrajzokból örök emléket készítünk
            </p>
          </div>

          {/* Column 2 - Products */}
          <div>
            <h4 className="font-semibold text-textPrimary mb-4">Termékek</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/termekek/album"
                  className="text-sm text-textSecondary hover:text-primary-600 transition-colors"
                >
                  Fotóalbum
                </Link>
              </li>
              <li>
                <Link
                  href="/termekek/naptar"
                  className="text-sm text-textSecondary hover:text-primary-600 transition-colors"
                >
                  Naptár
                </Link>
              </li>
              <li>
                <Link
                  href="/termekek/digitalizalas"
                  className="text-sm text-textSecondary hover:text-primary-600 transition-colors"
                >
                  Digitalizálás
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Information */}
          <div>
            <h4 className="font-semibold text-textPrimary mb-4">Információ</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/hogyan-mukodik"
                  className="text-sm text-textSecondary hover:text-primary-600 transition-colors"
                >
                  Hogyan működik?
                </Link>
              </li>
              <li>
                <Link
                  href="/aszf"
                  className="text-sm text-textSecondary hover:text-primary-600 transition-colors"
                >
                  ÁSZF
                </Link>
              </li>
              <li>
                <Link
                  href="/adatvedelem"
                  className="text-sm text-textSecondary hover:text-primary-600 transition-colors"
                >
                  Adatvédelem
                </Link>
              </li>
              <li>
                <Link
                  href="/gyik"
                  className="text-sm text-textSecondary hover:text-primary-600 transition-colors"
                >
                  GYIK
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-semibold text-textPrimary mb-4">Kapcsolat</h4>
            <ul className="space-y-2">
              <li className="text-sm text-textSecondary">
                info@kincseskonyv.hu
              </li>
              <li className="text-sm text-textSecondary">+36 30 123 4567</li>
              <li className="flex gap-4 mt-4">
                <Link
                  href="#"
                  className="text-textSecondary hover:text-primary-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-textSecondary hover:text-primary-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-textMuted">
            © 2025 Kincseskönyv. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
}
