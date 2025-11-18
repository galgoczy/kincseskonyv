"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(0); // TODO: Connect to cart state

  return (
    <header className="sticky top-0 z-50 h-20 bg-surface/80 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-handwriting text-3xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          Kincseskönyv
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/termekek"
            className="text-base font-medium text-textSecondary hover:text-primary-600 transition-colors"
          >
            Termékek
          </Link>
          <Link
            href="/hogyan-mukodik"
            className="text-base font-medium text-textSecondary hover:text-primary-600 transition-colors"
          >
            Hogyan működik?
          </Link>
          <Link
            href="/galeria"
            className="text-base font-medium text-textSecondary hover:text-primary-600 transition-colors"
          >
            Galéria
          </Link>
          <Link
            href="/kapcsolat"
            className="text-base font-medium text-textSecondary hover:text-primary-600 transition-colors"
          >
            Kapcsolat
          </Link>
        </nav>

        {/* CTA / User Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/kosar" className="relative">
            <ShoppingCart className="w-6 h-6 text-textSecondary hover:text-primary-600 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary-400 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                {cartCount}
              </span>
            )}
          </Link>
          <Link
            href="/kezdjuk-el"
            className="bg-primary-300 hover:bg-primary-400 text-textPrimary font-semibold px-6 py-2 rounded-full transition-all hover:scale-105"
          >
            Kezdjük el!
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-textPrimary" />
          ) : (
            <Menu className="w-6 h-6 text-textPrimary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-t border-border shadow-lg">
          <nav className="flex flex-col p-4 space-y-4">
            <Link
              href="/termekek"
              className="text-base font-medium text-textSecondary hover:text-primary-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Termékek
            </Link>
            <Link
              href="/hogyan-mukodik"
              className="text-base font-medium text-textSecondary hover:text-primary-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hogyan működik?
            </Link>
            <Link
              href="/galeria"
              className="text-base font-medium text-textSecondary hover:text-primary-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Galéria
            </Link>
            <Link
              href="/kapcsolat"
              className="text-base font-medium text-textSecondary hover:text-primary-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kapcsolat
            </Link>
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <Link
                href="/kosar"
                className="relative flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShoppingCart className="w-5 h-5 text-textSecondary" />
                <span className="text-base font-medium text-textSecondary">
                  Kosár {cartCount > 0 && `(${cartCount})`}
                </span>
              </Link>
            </div>
            <Link
              href="/kezdjuk-el"
              className="bg-primary-300 hover:bg-primary-400 text-textPrimary font-semibold px-6 py-3 rounded-full transition-all text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kezdjük el!
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
