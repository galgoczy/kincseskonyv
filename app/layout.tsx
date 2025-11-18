import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kincseskönyv - Gyerekrajzokból egyedi albumok és naptárak",
  description: "Őrizd meg gyermeked rajzait örökre egy gyönyörű, nyomtatott albumban vagy naptárban. Egyszerűen, online szerkeszthető, prémium minőségben.",
  keywords: ["gyerekrajz", "fotóalbum", "naptár", "egyedi ajándék", "személyre szabott"],
  openGraph: {
    title: "Kincseskönyv - Gyerekrajzokból egyedi albumok",
    description: "Őrizd meg gyermeked rajzait örökre egy gyönyörű, nyomtatott albumban.",
    type: "website",
    locale: "hu_HU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Caveat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-background text-textPrimary">
        {children}
      </body>
    </html>
  );
}
