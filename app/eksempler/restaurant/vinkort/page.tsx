'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VinkortPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [lang, setLang] = useState<'da' | 'en'>('da');

  const texts = {
    da: {
      forside: 'Forside',
      menu: 'Menu',
      vinkort: 'Vinkort',
      omOs: 'Om os',
      kontakt: 'Kontakt',
      bestilBord: 'Bestil bord',
      takeaway: 'Takeaway',
      rutevejledning: 'Rutevejledning',
      roedvin: 'Rødvin',
      hvidvin: 'Hvidvin',
      glas: 'Glas',
      flaske: 'Flaske',
      pageTitle: 'Vinkort',
      sommelierNote: 'Vores sommelier anbefaler gerne den perfekte vin til din ret',
      backToExamples: '← Tilbage til eksempler (dette er en demo)',
    },
    en: {
      forside: 'Home',
      menu: 'Menu',
      vinkort: 'Wine List',
      omOs: 'About',
      kontakt: 'Contact',
      bestilBord: 'Book Table',
      takeaway: 'Takeaway',
      rutevejledning: 'Directions',
      roedvin: 'Red Wine',
      hvidvin: 'White Wine',
      glas: 'Glass',
      flaske: 'Bottle',
      pageTitle: 'Wine List',
      sommelierNote: 'Our sommelier will be happy to recommend the perfect wine for your dish',
      backToExamples: '← Back to examples (this is a demo)',
    }
  };

  const t = texts[lang];

  const wines = {
    red: [
      {
        name: 'Chianti Classico Riserva',
        region: lang === 'da' ? 'Toscana, Italien' : 'Tuscany, Italy',
        year: 2019,
        grape: 'Sangiovese',
        desc: lang === 'da'
          ? 'Dyb rubinrød med noter af modne kirsebær, violet og en subtil krydderi. Velbalanceret med silkeblød tannin og en lang, elegant afslutning.'
          : 'Deep ruby red with notes of ripe cherries, violet and subtle spice. Well-balanced with silky tannins and a long, elegant finish.',
        glass: 89,
        bottle: 389
      },
      {
        name: 'Barolo DOCG',
        region: lang === 'da' ? 'Piemonte, Italien' : 'Piedmont, Italy',
        year: 2018,
        grape: 'Nebbiolo',
        desc: lang === 'da'
          ? 'Kongen af italienske vine. Intens aroma af roser, tjære og trøfler. Kraftig struktur med kompleks frugt og mineraler der udvikler sig i glasset.'
          : 'The king of Italian wines. Intense aromas of roses, tar and truffles. Powerful structure with complex fruit and minerals that develop in the glass.',
        glass: 129,
        bottle: 589
      },
      {
        name: 'Amarone della Valpolicella',
        region: lang === 'da' ? 'Veneto, Italien' : 'Veneto, Italy',
        year: 2017,
        grape: 'Corvina blend',
        desc: lang === 'da'
          ? 'Fyldig og koncentreret med intense noter af tørrede frugter, chokolade og espresso. Varm og omsluttende med en vedvarende finish.'
          : 'Full-bodied and concentrated with intense notes of dried fruits, chocolate and espresso. Warm and enveloping with a persistent finish.',
        glass: 139,
        bottle: 649
      },
      {
        name: 'Brunello di Montalcino',
        region: lang === 'da' ? 'Toscana, Italien' : 'Tuscany, Italy',
        year: 2018,
        grape: 'Sangiovese Grosso',
        desc: lang === 'da'
          ? 'Elegant og struktureret med aromaer af vilde bær, læder og tobak. Perfekt balance mellem frugt, syre og tannin med årtiers potentiale.'
          : 'Elegant and structured with aromas of wild berries, leather and tobacco. Perfect balance of fruit, acidity and tannin with decades of potential.',
        glass: 149,
        bottle: 695
      },
      {
        name: 'Montepulciano d\'Abruzzo',
        region: lang === 'da' ? 'Abruzzo, Italien' : 'Abruzzo, Italy',
        year: 2021,
        grape: 'Montepulciano',
        desc: lang === 'da'
          ? 'Frugtig og tilgængelig med bløde tanniner. Noter af blommer, brombær og et strejf af krydderier. Perfekt til hverdagens pastaretter.'
          : 'Fruity and approachable with soft tannins. Notes of plums, blackberries and a hint of spices. Perfect for everyday pasta dishes.',
        glass: 69,
        bottle: 289
      },
    ],
    white: [
      {
        name: 'Gavi di Gavi DOCG',
        region: lang === 'da' ? 'Piemonte, Italien' : 'Piedmont, Italy',
        year: 2022,
        grape: 'Cortese',
        desc: lang === 'da'
          ? 'Frisk og mineralsk med noter af citrus, grønne æbler og hvide blomster. Sprød syre og en ren, forfriskende afslutning.'
          : 'Fresh and mineral with notes of citrus, green apples and white flowers. Crisp acidity and a clean, refreshing finish.',
        glass: 79,
        bottle: 339
      },
      {
        name: 'Vermentino di Sardegna',
        region: lang === 'da' ? 'Sardinien, Italien' : 'Sardinia, Italy',
        year: 2022,
        grape: 'Vermentino',
        desc: lang === 'da'
          ? 'Aromatisk med duft af hvide ferskner, citron og urter. Middelfyldig med en behagelig bitterhed i afslutningen der minder om mandler.'
          : 'Aromatic with scents of white peaches, lemon and herbs. Medium-bodied with a pleasant bitterness on the finish reminiscent of almonds.',
        glass: 75,
        bottle: 319
      },
      {
        name: 'Pinot Grigio Alto Adige',
        region: lang === 'da' ? 'Alto Adige, Italien' : 'Alto Adige, Italy',
        year: 2022,
        grape: 'Pinot Grigio',
        desc: lang === 'da'
          ? 'Elegant og raffineret fra Alpernes skråninger. Delikat med noter af pære, akacie og en mineralsk undertone. Silkeblød tekstur.'
          : 'Elegant and refined from the Alpine slopes. Delicate with notes of pear, acacia and a mineral undertone. Silky texture.',
        glass: 85,
        bottle: 359
      },
      {
        name: 'Greco di Tufo DOCG',
        region: lang === 'da' ? 'Campania, Italien' : 'Campania, Italy',
        year: 2021,
        grape: 'Greco',
        desc: lang === 'da'
          ? 'Kompleks og struktureret hvidvin med aromaer af modne ferskner, nødder og honning. Rig mundføling med en lang, mineralsk finish.'
          : 'Complex and structured white wine with aromas of ripe peaches, nuts and honey. Rich mouthfeel with a long, mineral finish.',
        glass: 89,
        bottle: 379
      },
      {
        name: 'Soave Classico',
        region: lang === 'da' ? 'Veneto, Italien' : 'Veneto, Italy',
        year: 2022,
        grape: 'Garganega',
        desc: lang === 'da'
          ? 'Let og forfriskende med subtile noter af mandelblomst, citrus og friske urter. Velafbalanceret med en behagelig, bitter amandel-tone.'
          : 'Light and refreshing with subtle notes of almond blossom, citrus and fresh herbs. Well-balanced with a pleasant, bitter almond tone.',
        glass: 69,
        bottle: 289
      },
    ]
  };

  return (
    <div className="min-h-screen bg-stone-100 flex">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-stone-900 text-amber-100 rounded-lg shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {sidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Dark elegant charcoal */}
      <aside className={`
        fixed lg:sticky top-0 left-0 h-screen w-72 bg-stone-900 z-40
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col
      `}>
        {/* Logo */}
        <div className="p-6 border-b border-stone-800">
          <div className="w-28 h-28 mx-auto relative">
            <div className="absolute inset-0 border-2 border-amber-400 rounded-full" />
            <div className="absolute inset-1 border border-amber-400/50 rounded-full" />
            <div className="absolute inset-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex flex-col items-center justify-center">
              <span className="text-stone-900 font-serif text-2xl font-bold tracking-tight">BELLA</span>
              <span className="text-stone-900 text-[10px] tracking-[0.3em] uppercase">— pasta —</span>
            </div>
          </div>
          <p className="text-amber-100/60 text-xs text-center mt-3 tracking-widest uppercase">Est. 1987</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {[
            { label: t.forside, href: '/eksempler/restaurant', active: false },
            { label: t.menu, href: '/eksempler/restaurant/menu', active: false },
            { label: t.vinkort, href: '/eksempler/restaurant/vinkort', active: true },
            { label: t.omOs, href: '/eksempler/restaurant/om-os' },
            { label: t.kontakt, href: '/eksempler/restaurant/om-os#kontakt' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`block w-full py-3 px-4 rounded-lg font-medium transition-all ${
                item.active
                  ? 'bg-amber-400 text-stone-900'
                  : 'bg-stone-800 text-amber-100 hover:bg-stone-700'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action buttons */}
        <div className="p-4 space-y-2 border-t border-stone-800">
          <Link href="/eksempler/restaurant/bestil-bord" className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {t.bestilBord}
          </Link>
          <Link href="/eksempler/restaurant/takeaway" className="w-full py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {t.takeaway}
          </Link>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Nyhavn+42+1051+København"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 bg-stone-700 hover:bg-stone-600 text-amber-100 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {t.rutevejledning}
          </a>
        </div>

        {/* Language switcher with flags */}
        <div className="p-4 border-t border-stone-800">
          <div className="flex gap-2">
            <button
              onClick={() => setLang('da')}
              className={`flex-1 py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                lang === 'da'
                  ? 'bg-amber-400 text-stone-900'
                  : 'bg-stone-800 text-amber-100 hover:bg-stone-700'
              }`}
            >
              <svg className="w-5 h-5 rounded-sm overflow-hidden" viewBox="0 0 640 480">
                <path fill="#c8102e" d="M0 0h640v480H0z"/>
                <path fill="#fff" d="M205 0h68v480h-68z"/>
                <path fill="#fff" d="M0 205h640v68H0z"/>
              </svg>
              DK
            </button>
            <button
              onClick={() => setLang('en')}
              className={`flex-1 py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                lang === 'en'
                  ? 'bg-amber-400 text-stone-900'
                  : 'bg-stone-800 text-amber-100 hover:bg-stone-700'
              }`}
            >
              <svg className="w-5 h-5 rounded-sm overflow-hidden" viewBox="0 0 640 480">
                <path fill="#012169" d="M0 0h640v480H0z"/>
                <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
                <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
                <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
                <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
              </svg>
              EN
            </button>
          </div>
        </div>
      </aside>

      {/* Main content - Modern Wine List */}
      <main className="flex-1 lg:ml-0 bg-stone-800 min-h-screen">
        {/* Header */}
        <header className="bg-stone-900 border-b border-stone-700 py-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-stone-500 tracking-[0.4em] uppercase text-xs mb-4">Bella Pasta</p>
            <h1 className="text-5xl lg:text-6xl font-extralight tracking-wide text-stone-200 mb-4">
              {t.pageTitle}
            </h1>
            <div className="flex items-center justify-center gap-6 text-stone-500">
              <div className="h-px w-16 bg-stone-600" />
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v18m6-18v18M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
              </svg>
              <div className="h-px w-16 bg-stone-600" />
            </div>
          </div>
        </header>

        {/* Wine Sections */}
        <div className="max-w-5xl mx-auto px-6 py-12">
          {/* Red Wines */}
          <section className="mb-20">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-3 h-3 rounded-full bg-red-700" />
              <h2 className="text-3xl font-extralight tracking-widest uppercase text-stone-300">
                {t.roedvin}
              </h2>
              <div className="flex-1 h-px bg-stone-700" />
            </div>

            <div className="space-y-6">
              {wines.red.map((wine, idx) => (
                <article key={idx} className="bg-stone-900 rounded-xl border border-stone-700 overflow-hidden hover:border-stone-600 transition-colors">
                  <div className="flex flex-col md:flex-row">
                    {/* Wine Bottle Illustration - Red */}
                    <div className="md:w-40 h-48 md:h-auto bg-stone-950 flex items-center justify-center p-4">
                      <svg viewBox="0 0 80 180" className="h-36 w-auto">
                        {/* Neck/cork */}
                        <rect x="32" y="0" width="16" height="30" rx="2" fill="#1c1917" stroke="#57534e" strokeWidth="1"/>
                        <rect x="34" y="2" width="12" height="12" rx="1" fill="#78716c"/>
                        {/* Bottle body - wider, more realistic shape */}
                        <path d="M32 30 L32 40 Q20 50 16 65 L16 160 Q16 175 40 175 Q64 175 64 160 L64 65 Q60 50 48 40 L48 30 Z" fill="#450a0a" stroke="#57534e" strokeWidth="1"/>
                        {/* Label */}
                        <rect x="20" y="85" width="40" height="55" rx="3" fill="#fef3c7"/>
                        <rect x="24" y="92" width="32" height="3" fill="#78716c"/>
                        <rect x="28" y="100" width="24" height="2" fill="#a8a29e"/>
                        <rect x="26" y="107" width="28" height="2" fill="#a8a29e"/>
                        <text x="40" y="128" textAnchor="middle" fill="#57534e" fontSize="10" fontFamily="serif">{wine.year}</text>
                        {/* Wine level reflection */}
                        <path d="M20 70 L20 158 Q20 170 40 170 Q60 170 60 158 L60 70 Q50 75 40 75 Q30 75 20 70 Z" fill="#7f1d1d" opacity="0.4"/>
                        {/* Shine highlight */}
                        <ellipse cx="28" cy="120" rx="4" ry="20" fill="white" opacity="0.08"/>
                      </svg>
                    </div>

                    {/* Wine Details */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-light text-stone-100 mb-1">{wine.name}</h3>
                          <p className="text-sm text-stone-400 mb-1">{wine.region} · {wine.year}</p>
                          <p className="text-xs text-stone-500 tracking-wider uppercase mb-4">{wine.grape}</p>
                          <p className="text-sm text-stone-400 leading-relaxed font-light">{wine.desc}</p>
                        </div>

                        {/* Prices */}
                        <div className="flex lg:flex-col gap-6 lg:gap-3 lg:text-right lg:min-w-[100px]">
                          <div>
                            <p className="text-xs text-stone-500 uppercase tracking-wider">{t.glas}</p>
                            <p className="text-lg font-light text-stone-200">{wine.glass} kr</p>
                          </div>
                          <div>
                            <p className="text-xs text-stone-500 uppercase tracking-wider">{t.flaske}</p>
                            <p className="text-lg font-light text-stone-200">{wine.bottle} kr</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* White Wines */}
          <section className="mb-20">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <h2 className="text-3xl font-extralight tracking-widest uppercase text-stone-300">
                {t.hvidvin}
              </h2>
              <div className="flex-1 h-px bg-stone-700" />
            </div>

            <div className="space-y-6">
              {wines.white.map((wine, idx) => (
                <article key={idx} className="bg-stone-900 rounded-xl border border-stone-700 overflow-hidden hover:border-stone-600 transition-colors">
                  <div className="flex flex-col md:flex-row">
                    {/* Wine Bottle Illustration - White */}
                    <div className="md:w-40 h-48 md:h-auto bg-stone-950 flex items-center justify-center p-4">
                      <svg viewBox="0 0 80 180" className="h-36 w-auto">
                        {/* Neck/cork */}
                        <rect x="32" y="0" width="16" height="30" rx="2" fill="#1c1917" stroke="#57534e" strokeWidth="1"/>
                        <rect x="34" y="2" width="12" height="12" rx="1" fill="#78716c"/>
                        {/* Bottle body - wider, more realistic shape */}
                        <path d="M32 30 L32 40 Q20 50 16 65 L16 160 Q16 175 40 175 Q64 175 64 160 L64 65 Q60 50 48 40 L48 30 Z" fill="#365314" stroke="#57534e" strokeWidth="1"/>
                        {/* Label */}
                        <rect x="20" y="85" width="40" height="55" rx="3" fill="#fef3c7"/>
                        <rect x="24" y="92" width="32" height="3" fill="#78716c"/>
                        <rect x="28" y="100" width="24" height="2" fill="#a8a29e"/>
                        <rect x="26" y="107" width="28" height="2" fill="#a8a29e"/>
                        <text x="40" y="128" textAnchor="middle" fill="#57534e" fontSize="10" fontFamily="serif">{wine.year}</text>
                        {/* Wine level reflection - golden for white wine */}
                        <path d="M20 70 L20 158 Q20 170 40 170 Q60 170 60 158 L60 70 Q50 75 40 75 Q30 75 20 70 Z" fill="#fef9c3" opacity="0.35"/>
                        {/* Shine highlight */}
                        <ellipse cx="28" cy="120" rx="4" ry="20" fill="white" opacity="0.1"/>
                      </svg>
                    </div>

                    {/* Wine Details */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-light text-stone-100 mb-1">{wine.name}</h3>
                          <p className="text-sm text-stone-400 mb-1">{wine.region} · {wine.year}</p>
                          <p className="text-xs text-stone-500 tracking-wider uppercase mb-4">{wine.grape}</p>
                          <p className="text-sm text-stone-400 leading-relaxed font-light">{wine.desc}</p>
                        </div>

                        {/* Prices */}
                        <div className="flex lg:flex-col gap-6 lg:gap-3 lg:text-right lg:min-w-[100px]">
                          <div>
                            <p className="text-xs text-stone-500 uppercase tracking-wider">{t.glas}</p>
                            <p className="text-lg font-light text-stone-200">{wine.glass} kr</p>
                          </div>
                          <div>
                            <p className="text-xs text-stone-500 uppercase tracking-wider">{t.flaske}</p>
                            <p className="text-lg font-light text-stone-200">{wine.bottle} kr</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Footer note */}
          <div className="text-center py-8 border-t border-stone-700">
            <p className="text-sm text-stone-500 font-light italic">
              {t.sommelierNote}
            </p>
            <p className="text-stone-400 mt-2">{lang === 'da' ? 'Tlf' : 'Phone'}: +45 12 34 56 78</p>
          </div>
        </div>

        {/* Back to examples link */}
        <div className="bg-stone-800 py-4 px-8 text-center">
          <Link href="/eksempler" className="text-stone-400 hover:text-white transition-colors text-sm">
            {t.backToExamples}
          </Link>
        </div>
      </main>
    </div>
  );
}
