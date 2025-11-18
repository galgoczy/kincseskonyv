"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Általános",
    questions: [
      {
        q: "Mi az a Kincseskönyv?",
        a: "A Kincseskönyv egy online szolgáltatás, amellyel gyermeked rajzaiból prémium minőségű, nyomtatott fotóalbumokatés naptárakat készíthetsz. Egyszerűen feltöltöd a rajzokat, kiválasztasz egy sablont, és mi kinyomtatjuk neked keményfedeles albumban.",
      },
      {
        q: "Milyen termékeket kínáltok?",
        a: "Jelenleg három terméket kínálunk: 20×20 cm-es fotóalbum (25.000 Ft), 27×27 cm-es fotóalbum (30.000 Ft), és falinaptár (12.000 Ft). Mindhárom termék személyre szabható az általad feltöltött rajzokkal.",
      },
      {
        q: "Mennyibe kerül egy album?",
        a: "A 20×20 cm-es album ára 25.000 Ft, a 27×27 cm-es album 30.000 Ft, míg a falinaptár 12.000 Ft. Az árak tartalmazzák a 24 oldalas albumot vagy 12 hónapos naptárt. Extra 4 oldal hozzáadása +3.000 Ft.",
      },
      {
        q: "Hogyan működik a rendelés?",
        a: "1) Töltsd fel a gyerek rajzait a weboldalon. 2) Válassz sablont és rendezd el a képeket. 3) Add meg a szállítási adatokat és fizess online. 4) 5-7 munkanapon belül kézhez kapod a nyomtatott albumot.",
      },
    ],
  },
  {
    category: "Képek és feltöltés",
    questions: [
      {
        q: "Milyen formátumú képeket tölthetek fel?",
        a: "PNG, JPG és JPEG formátumú képeket fogadunk el. Egy kép maximum 10 MB lehet. A legjobb minőség érdekében javasoljuk a nagy felbontású (legalább 1500×1500 pixel) képeket.",
      },
      {
        q: "Hány képet tölthetek fel?",
        a: "Annyi képet tölthetsz fel, amennyit szeretnél. A 20×20 cm-es album 24 oldalas (maximum ~50 kép), a 27×27 cm-es album szintén 24 oldalas, de 6 képes elrendezéssel akár 144 képet is tartalmazhat.",
      },
      {
        q: "Milyen minőségű képekre van szükség?",
        a: "Minél nagyobb felbontású a kép, annál jobb lesz a nyomtatott minőség. Javasoljuk a legalább 1500×1500 pixel méretű képeket. Ha szkennelésről van szó, 300 DPI vagy magasabb felbontást ajánlunk.",
      },
      {
        q: "Tudtok segíteni a képek digitalizálásában?",
        a: "Igen! Digitalizálási szolgáltatásunk keretében küldünk neked egy dobozt és futárt, te pedig berakod a rajzokat. Mi professzionálisan beszkeneljük őket, feltöltjük a fiókodba, és miután jóváhagytad, kinyomtatjuk az albumot. A szolgáltatás ára: 8.000 Ft + album ára.",
      },
      {
        q: "Mi történik a feltöltött képekkel?",
        a: "A feltöltött képeket biztonságosan tároljuk a szerveren. Bármikor törölheted őket a fiókodból. A képeket kizárólag az általad megrendelt termékek nyomtatásához használjuk, semmilyen más célra nem adjuk ki őket.",
      },
    ],
  },
  {
    category: "Szerkesztés és személyre szabás",
    questions: [
      {
        q: "Hogyan tudom elrendezni a képeket az albumban?",
        a: "Online szerkesztő felületünkön drag-and-drop módszerrel húzhatod a képeket a különböző sablonokra. Választhatsz 1, 2, 3, 4 vagy 6 képes elrendezéseket, és minden oldalhoz hozzáadhatsz szöveget is.",
      },
      {
        q: "Hozzáadhatok szöveget az albumhoz?",
        a: "Igen! Minden oldalhoz hozzáadhatsz saját szöveget - például a gyerek nevét, dátumot, vagy egy kedves üzenetet. Választhatsz kézírásos vagy nyomtatott betűtípus között.",
      },
      {
        q: "Milyen sablonok közül választhatok?",
        a: "A 20×20 cm-es albumhoz 10 különböző sablon áll rendelkezésre (1-4 képes elrendezések). A 27×27 cm-es albumhoz 11 sablon van, beleértve a 6 képes rácsot is. Minden sablon különböző elrendezésekkel és szövegterületekkel rendelkezik.",
      },
      {
        q: "Módosíthatom a már elkészített albumot?",
        a: "Természetesen! A megrendelés előtt bármikor visszatérhetsz a szerkesztőbe és módosíthatod az elrendezést, cserélheted a képeket, vagy átírod a szövegeket. A megrendelés leadása után már nem lehetséges a módosítás.",
      },
      {
        q: "Menthetek piszkozatot és később folytathatom?",
        a: "Igen, a munkád automatikusan mentődik. Bármikor bezárhatod a szerkesztőt és később folytathatod ugyanonnan, ahol abbahagytad.",
      },
    ],
  },
  {
    category: "Rendelés és fizetés",
    questions: [
      {
        q: "Milyen fizetési módokat fogadtok el?",
        a: "Bankkártyás fizetést fogadunk el (Visa, Mastercard, American Express) a Stripe biztonságos fizetési rendszerén keresztül. A fizetési adatokat nem mi tároljuk, hanem a Stripe kezeli.",
      },
      {
        q: "Biztonságos a fizetés?",
        a: "Igen, teljes mértékben. A fizetést a Stripe platform kezeli, amely banki szintű titkosítást (SSL/TLS) használ. A kártyaadatokat soha nem mi tároljuk, hanem közvetlenül a Stripe-hoz kerülnek.",
      },
      {
        q: "Kapok számlát?",
        a: "Igen, a megrendelés után automatikusan emailben kapsz egy számlát. Ez tartalmazza a megrendelt termék részleteit és az árat.",
      },
      {
        q: "Vissza tudok lépni elállási joggal?",
        a: "A termékek egyedi, személyre szabott jellege miatt az elállási jog NEM gyakorolható. Miután leadtad a rendelést és kifizeted, elkezdődik a gyártás, ezért a rendelés nem mondható vissza.",
      },
      {
        q: "Van kedvezménykód vagy kupon rendszer?",
        a: "Igen! Időnként promóciós kuponokat osztunk meg hírlevelünkben és közösségi média oldalakon. A kuponkódot a kosárban lehet beírni.",
      },
    ],
  },
  {
    category: "Szállítás és kézbesítés",
    questions: [
      {
        q: "Mennyi idő alatt érkezik meg a megrendelésem?",
        a: "A rendelés beérkezésétől számítva 5-7 munkanapon belül nyomtatjuk ki és küldjük el az albumot. A szállítási idő általában 1-2 munkanap futárszolgálattal.",
      },
      {
        q: "Mennyibe kerül a szállítás?",
        a: "A szállítási költség 1.500 Ft Magyarország területére. Futárszolgálattal szállítjuk a megadott címre.",
      },
      {
        q: "Külföldre is szállítotok?",
        a: "Jelenleg csak Magyarország területére szállítunk. Külföldiszállítás bevezetésén dolgozunk.",
      },
      {
        q: "Hogyan tudom követni a csomagomat?",
        a: "A csomag feladása után emailben küldünk egy követési számot, amellyel nyomon követheted a futár státuszát.",
      },
      {
        q: "Mi van, ha nem vagyok otthon amikor érkezik a csomag?",
        a: "A futár értesíteni fog telefonon a kézbesítés előtt. Ha nem vagy otthon, újra próbálkozik, vagy átveheted a futárszolgálat legközelebbi csomagautomatájából vagy átvételi pontjáról.",
      },
    ],
  },
  {
    category: "Minőség és garancia",
    questions: [
      {
        q: "Milyen minőségű a nyomtatás?",
        a: "Prémium minőségű, vastag (250 g/m²) fényes fotópapíron nyomtatunk, amely hosszú távon megőrzi a színek élénkségét. A nyomtatás felbontása 300 DPI, amely professzionális minőséget garantál.",
      },
      {
        q: "Milyen a könyv kötése?",
        a: "Minden album keményfedeles kötésű, amely tartós és elegáns. A borító laminált, így ellenáll a sérüléseknek. Az oldalak ragasztott kötésűek, így lapos felületen nyílnak ki.",
      },
      {
        q: "Mi a teendő, ha hibás terméket kapok?",
        a: "Gyártási hiba esetén a termék átvételétől számított 7 napon belül jelezd nekünk az info@kincseskonyv.hu címen. Fotókat kérünk a hibáról, és új albumot gyártunk vagy visszatérítjük a vételárat.",
      },
      {
        q: "Van garancia a termékre?",
        a: "Igen, minden termékre 2 év garanciát vállalunk gyártási hibákra. Ez nem vonatkozik a normál használatból eredő kopásra.",
      },
    ],
  },
  {
    category: "Fiók és adatvédelem",
    questions: [
      {
        q: "Szükséges regisztrálnom?",
        a: "Igen, a rendeléshez regisztráció szükséges. Ez azért fontos, hogy később visszatérj a projektjeidhez, módosíthasd őket, és nyomon kövesd a rendeléseidet.",
      },
      {
        q: "Biztonságban vannak az adataim?",
        a: "Igen! Minden adatot titkosítva tárolunk (SSL), és GDPR-kompatibilisek vagyunk. Az adataidat soha nem adjuk ki harmadik félnek marketing célra.",
      },
      {
        q: "Törölhetem a fiókomat?",
        a: "Igen, bármikor kérheted a fiókod törlését az info@kincseskonyv.hu címen. Minden személyes adatod törlésre kerül 30 napon belül.",
      },
      {
        q: "Kaphatok hírleveleket?",
        a: "Csak ha ezt külön kéred! Hírlevélre a fiók beállításokban tudsz feliratkozni. Bármikor leiratkozhatsz.",
      },
    ],
  },
  {
    category: "Egyéb",
    questions: [
      {
        q: "Ajándékba is megrendelhetem?",
        a: "Természetesen! A szállítási címnek megadhatsz bármilyen címet, ahova szeretnéd, hogy a csomag érkezzen. Ha szeretnél üzenettel ellátott csomagolást, jelezd a megjegyzés mezőben.",
      },
      {
        q: "Tudok több albumot egyszerre rendelni?",
        a: "Igen, a kosárba többféle terméket is tehetsz egyszerre. Minden projekthez külön szerkesztőben állíthatod össze az elrendezést.",
      },
      {
        q: "Van ügyfélszolgálat?",
        a: "Igen! Elérhetsz minket emailen (info@kincseskonyv.hu) vagy telefonon (+36 30 123 4567) hétfőtől péntekig 9:00-17:00 között. 24 órán belül válaszolunk minden megkeresésre.",
      },
      {
        q: "Milyen nyelveken érhető el az oldal?",
        a: "Jelenleg csak magyar nyelven. Hamarosan tervezünk angol és német nyelvű verziókat is.",
      },
    ],
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-surface">
      <button
        onClick={onClick}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-primary-50 transition-colors"
      >
        <span className="font-semibold text-textPrimary pr-8">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-primary-50/30 border-t border-border">
          <p className="text-textSecondary">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-primary-50 via-background to-secondary-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-handwriting text-5xl md:text-6xl font-bold text-textPrimary mb-4">
              Gyakran Ismételt Kérdések
            </h1>
            <p className="text-lg text-textSecondary max-w-2xl mx-auto">
              Itt megtalálod a választ a legtöbb kérdésedre. Ha nem találod,
              írj nekünk bátran!
            </p>
          </div>

          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <section key={categoryIndex}>
                <h2 className="font-handwriting text-3xl font-bold text-textPrimary mb-6">
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((faq, faqIndex) => {
                    const itemId = `${categoryIndex}-${faqIndex}`;
                    return (
                      <FAQItem
                        key={itemId}
                        question={faq.q}
                        answer={faq.a}
                        isOpen={openItem === itemId}
                        onClick={() =>
                          setOpenItem(openItem === itemId ? null : itemId)
                        }
                      />
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-secondary-100 to-accent-100 rounded-3xl p-8 text-center">
            <h3 className="font-handwriting text-3xl font-bold text-textPrimary mb-4">
              Nem találtad meg a választ?
            </h3>
            <p className="text-lg text-textSecondary mb-6">
              Írj nekünk bátran, szívesen segítünk!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kapcsolat"
                className="bg-primary-300 hover:bg-primary-400 text-textPrimary font-semibold px-8 py-3 rounded-full transition-all hover:scale-105 inline-block"
              >
                Kapcsolatfelvétel
              </a>
              <a
                href="mailto:info@kincseskonyv.hu"
                className="bg-surface hover:bg-primary-50 border-2 border-primary-300 text-primary-600 font-semibold px-8 py-3 rounded-full transition-all inline-block"
              >
                Email küldése
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
