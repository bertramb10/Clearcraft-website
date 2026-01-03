'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RestaurantDemo() {
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
      seMenu: 'Se Menu',
      heroTitle: 'Velkommen til',
      heroSubtitle: 'Autentisk italiensk køkken i hjertet af København',
      heroDesc: 'Oplev den ægte smag af Italien med vores håndlavede pasta, træfyrede pizzaer og udsøgte vine. Vi bruger kun de fineste råvarer importeret direkte fra Italien.',
      allergens: 'Allergener',
      allergensInfo: 'Spørg personalet om allergener',
      openingHours: 'Åbningstider',
      openingHoursInfo: 'Man-Søn: 11:00 - 22:00',
      contact: 'Kontakt',
      phone: 'Tlf',
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
      seMenu: 'View Menu',
      heroTitle: 'Welcome to',
      heroSubtitle: 'Authentic Italian cuisine in the heart of Copenhagen',
      heroDesc: 'Experience the true taste of Italy with our handmade pasta, wood-fired pizzas and exquisite wines. We use only the finest ingredients imported directly from Italy.',
      allergens: 'Allergens',
      allergensInfo: 'Please ask our staff about allergens',
      openingHours: 'Opening Hours',
      openingHoursInfo: 'Mon-Sun: 11:00 - 22:00',
      contact: 'Contact',
      phone: 'Phone',
      backToExamples: '← Back to examples (this is a demo)',
    }
  };

  const t = texts[lang];

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
        {/* Logo - Elegant with pizza/pasta motif */}
        <div className="p-6 border-b border-stone-800">
          <div className="w-28 h-28 mx-auto relative">
            {/* Outer decorative ring */}
            <div className="absolute inset-0 border-2 border-amber-400 rounded-full" />
            <div className="absolute inset-1 border border-amber-400/50 rounded-full" />
            {/* Inner circle with logo */}
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
            { label: t.forside, href: '/eksempler/restaurant', active: true },
            { label: t.menu, href: '/eksempler/restaurant/menu' },
            { label: t.vinkort, href: '/eksempler/restaurant/vinkort' },
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

      {/* Main content */}
      <main className="flex-1 lg:ml-0">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80)',
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl text-center">
            <p className="text-amber-400 font-serif text-xl mb-2">{t.heroTitle}</p>
            <h2 className="text-white font-serif text-5xl lg:text-7xl font-bold mb-6">
              Bella Pasta
            </h2>
            <p className="text-amber-400 font-serif text-2xl lg:text-3xl mb-4">
              {t.heroSubtitle}
            </p>
            <p className="text-stone-300 text-lg mb-12 max-w-2xl mx-auto">
              {t.heroDesc}
            </p>

            {/* Large action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/eksempler/restaurant/bestil-bord" className="py-4 px-8 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {t.bestilBord}
              </Link>
              <Link href="/eksempler/restaurant/takeaway" className="py-4 px-8 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {t.takeaway}
              </Link>
              <Link
                href="/eksempler/restaurant/menu"
                className="py-4 px-8 bg-[#722F37] hover:bg-[#8B3A42] text-[#D4AF37] border-2 border-[#D4AF37] rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                {t.seMenu}
              </Link>
            </div>
          </div>
        </section>

        {/* Footer info */}
        <section className="bg-stone-900 py-8 px-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div className="text-amber-400">
              <p className="font-serif text-lg">{t.allergens}</p>
              <p className="text-stone-400 text-sm">{t.allergensInfo}</p>
            </div>
            <div className="text-amber-400">
              <p className="font-serif text-lg">{t.openingHours}</p>
              <p className="text-stone-400 text-sm">{t.openingHoursInfo}</p>
            </div>
            <div className="text-amber-400">
              <p className="font-serif text-lg">{t.contact}</p>
              <p className="text-stone-400 text-sm">{t.phone}: +45 12 34 56 78</p>
            </div>
          </div>
        </section>

        {/* Back to examples link */}
        <div className="bg-stone-950 py-4 px-8 text-center">
          <Link href="/eksempler" className="text-stone-500 hover:text-white transition-colors text-sm">
            {t.backToExamples}
          </Link>
        </div>
      </main>
    </div>
  );
}
