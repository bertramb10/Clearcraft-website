'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MenuPage() {
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
      allergener: 'Allergener? Spørg venligst personalet',
      gaaTil: 'Gå til kategori',
      selectCategory: 'Vælg kategori...',
      regular: 'Alm.',
      family: 'Fam.',
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
      allergener: 'Allergens? Please ask our staff',
      gaaTil: 'Jump to category',
      selectCategory: 'Select category...',
      regular: 'Reg.',
      family: 'Fam.',
      phone: 'Phone',
      backToExamples: '← Back to examples (this is a demo)',
    }
  };

  const t = texts[lang];

  const categories = [
    { id: 'pizza', label: 'Pizza' },
    { id: 'pasta', label: 'Pasta' },
    { id: 'sandwich', label: 'Sandwich & Panini' },
    { id: 'dessert', label: 'Dessert' },
  ];

  const menuData = {
    pizza: {
      title: 'Pizza',
      items: [
        { nr: 1, name: 'Margherita', desc: lang === 'da' ? 'Tomat, mozzarella, basilikum' : 'Tomato, mozzarella, basil', alm: 89, fam: 149 },
        { nr: 2, name: 'Pepperoni', desc: lang === 'da' ? 'Tomat, mozzarella, pepperoni' : 'Tomato, mozzarella, pepperoni', alm: 99, fam: 159 },
        { nr: 3, name: 'Quattro Formaggi', desc: lang === 'da' ? 'Mozzarella, gorgonzola, parmesan, fontina' : 'Mozzarella, gorgonzola, parmesan, fontina', alm: 109, fam: 169 },
        { nr: 4, name: 'Prosciutto', desc: lang === 'da' ? 'Tomat, mozzarella, parmaskinke, rucola' : 'Tomato, mozzarella, prosciutto, arugula', alm: 119, fam: 179 },
        { nr: 5, name: 'Vegetariana', desc: lang === 'da' ? 'Tomat, mozzarella, grillede grøntsager' : 'Tomato, mozzarella, grilled vegetables', alm: 99, fam: 159 },
        { nr: 6, name: 'Diavola', desc: lang === 'da' ? 'Tomat, mozzarella, spicy salami, chili' : 'Tomato, mozzarella, spicy salami, chili', alm: 109, fam: 169 },
      ]
    },
    pasta: {
      title: 'Pasta',
      items: [
        { nr: 7, name: 'Spaghetti Bolognese', desc: lang === 'da' ? 'Klassisk kødsauce med parmesan' : 'Classic meat sauce with parmesan', pris: 129 },
        { nr: 8, name: 'Carbonara', desc: lang === 'da' ? 'Pancetta, æg, pecorino, sort peber' : 'Pancetta, egg, pecorino, black pepper', pris: 139 },
        { nr: 9, name: 'Penne Arrabbiata', desc: lang === 'da' ? 'Spicy tomatsauce med hvidløg og chili' : 'Spicy tomato sauce with garlic and chili', pris: 119 },
        { nr: 10, name: 'Lasagne', desc: lang === 'da' ? 'Hjemmelavet med béchamel og kødsauce' : 'Homemade with béchamel and meat sauce', pris: 149 },
        { nr: 11, name: 'Ravioli', desc: lang === 'da' ? 'Fyld med ricotta og spinat, salvie-smør' : 'Filled with ricotta and spinach, sage butter', pris: 159 },
      ]
    },
    sandwich: {
      title: 'Sandwich & Panini',
      items: [
        { nr: 12, name: 'Club Sandwich', desc: lang === 'da' ? 'Kylling, bacon, salat, tomat' : 'Chicken, bacon, lettuce, tomato', pris: 99 },
        { nr: 13, name: 'Panini Italiano', desc: lang === 'da' ? 'Parmaskinke, mozzarella, tomat, pesto' : 'Prosciutto, mozzarella, tomato, pesto', pris: 89 },
        { nr: 14, name: 'Panini Tonno', desc: lang === 'da' ? 'Tun, oliven, rødløg, kapers' : 'Tuna, olives, red onion, capers', pris: 89 },
        { nr: 15, name: lang === 'da' ? 'Vegetar Panini' : 'Vegetarian Panini', desc: lang === 'da' ? 'Grillede grøntsager, hummus, feta' : 'Grilled vegetables, hummus, feta', pris: 85 },
      ]
    },
    dessert: {
      title: 'Dessert',
      items: [
        { nr: 16, name: 'Tiramisu', desc: lang === 'da' ? 'Klassisk italiensk dessert' : 'Classic Italian dessert', pris: 69 },
        { nr: 17, name: 'Panna Cotta', desc: lang === 'da' ? 'Med friske bær og coulis' : 'With fresh berries and coulis', pris: 59 },
        { nr: 18, name: 'Gelato', desc: lang === 'da' ? '3 kugler valgfri is' : '3 scoops of your choice', pris: 49 },
      ]
    }
  };

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
            { label: t.menu, href: '/eksempler/restaurant/menu', active: true },
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

      {/* Main content - Menu Card Style */}
      <main className="flex-1 lg:ml-0 bg-[#722F37] min-h-screen">
        {/* Category Dropdown - Sticky */}
        <div className="sticky top-0 z-20 bg-[#5a252c] border-b border-[#D4AF37]/30 p-4 lg:pl-8">
          <div className="flex items-center gap-4">
            <label className="text-[#D4AF37] font-serif text-sm whitespace-nowrap">{t.gaaTil}:</label>
            <select
              onChange={(e) => scrollToCategory(e.target.value)}
              className="flex-1 max-w-xs bg-[#722F37] border-2 border-[#D4AF37] text-[#D4AF37] rounded-lg px-4 py-2 font-serif focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>{t.selectCategory}</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Decorative border frame */}
        <div className="p-4 lg:p-8">
          <div className="border-4 border-[#D4AF37] rounded-lg p-6 lg:p-12">
            {/* Menu Header */}
            <div className="text-center mb-12">
              <div className="inline-block">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-px w-16 bg-[#D4AF37]" />
                  <svg className="w-8 h-8 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
                  </svg>
                  <div className="h-px w-16 bg-[#D4AF37]" />
                </div>
                <h1 className="text-[#D4AF37] font-serif text-5xl lg:text-6xl font-bold tracking-wide">
                  Menu
                </h1>
                <p className="text-stone-400 font-serif text-lg mt-2 italic">Bella Pasta</p>
              </div>
            </div>

            {/* Pizza Section */}
            <section id="pizza" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-[#D4AF37]/30" />
                <h2 className="text-[#D4AF37] font-serif text-3xl font-bold border-2 border-[#D4AF37] px-6 py-2 rounded">
                  {menuData.pizza.title}
                </h2>
                <div className="h-px flex-1 bg-[#D4AF37]/30" />
              </div>

              {/* Column headers for pizza */}
              <div className="hidden sm:grid sm:grid-cols-[auto_1fr_80px_80px] gap-4 mb-4 text-[#D4AF37]/70 font-serif text-sm px-2">
                <span className="w-8"></span>
                <span></span>
                <span className="text-center">{t.regular}</span>
                <span className="text-center">{t.family}</span>
              </div>

              <div className="space-y-3">
                {menuData.pizza.items.map((item) => (
                  <div key={item.nr} className="grid grid-cols-1 sm:grid-cols-[auto_1fr_80px_80px] gap-2 sm:gap-4 items-baseline px-2 py-2 hover:bg-[#8B3A42]/30 rounded transition-colors">
                    <span className="text-[#D4AF37] font-serif text-lg w-8">{item.nr}.</span>
                    <div>
                      <span className="text-[#D4AF37] font-serif text-xl font-semibold">{item.name}</span>
                      <span className="text-[#D4AF37] mx-2 hidden sm:inline">—</span>
                      <span className="text-stone-400 font-serif italic text-sm block sm:inline">{item.desc}</span>
                    </div>
                    <span className="text-[#D4AF37] font-serif text-lg text-center">{item.alm} kr</span>
                    <span className="text-[#D4AF37] font-serif text-lg text-center">{item.fam} kr</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Pasta Section */}
            <section id="pasta" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-[#D4AF37]/30" />
                <h2 className="text-[#D4AF37] font-serif text-3xl font-bold border-2 border-[#D4AF37] px-6 py-2 rounded">
                  {menuData.pasta.title}
                </h2>
                <div className="h-px flex-1 bg-[#D4AF37]/30" />
              </div>

              <div className="space-y-3">
                {menuData.pasta.items.map((item) => (
                  <div key={item.nr} className="grid grid-cols-1 sm:grid-cols-[auto_1fr_100px] gap-2 sm:gap-4 items-baseline px-2 py-2 hover:bg-[#8B3A42]/30 rounded transition-colors">
                    <span className="text-[#D4AF37] font-serif text-lg w-8">{item.nr}.</span>
                    <div>
                      <span className="text-[#D4AF37] font-serif text-xl font-semibold">{item.name}</span>
                      <span className="text-[#D4AF37] mx-2 hidden sm:inline">—</span>
                      <span className="text-stone-400 font-serif italic text-sm block sm:inline">{item.desc}</span>
                    </div>
                    <span className="text-[#D4AF37] font-serif text-lg text-right">{item.pris} kr</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Sandwich Section */}
            <section id="sandwich" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-[#D4AF37]/30" />
                <h2 className="text-[#D4AF37] font-serif text-3xl font-bold border-2 border-[#D4AF37] px-6 py-2 rounded">
                  {menuData.sandwich.title}
                </h2>
                <div className="h-px flex-1 bg-[#D4AF37]/30" />
              </div>

              <div className="space-y-3">
                {menuData.sandwich.items.map((item) => (
                  <div key={item.nr} className="grid grid-cols-1 sm:grid-cols-[auto_1fr_100px] gap-2 sm:gap-4 items-baseline px-2 py-2 hover:bg-[#8B3A42]/30 rounded transition-colors">
                    <span className="text-[#D4AF37] font-serif text-lg w-8">{item.nr}.</span>
                    <div>
                      <span className="text-[#D4AF37] font-serif text-xl font-semibold">{item.name}</span>
                      <span className="text-[#D4AF37] mx-2 hidden sm:inline">—</span>
                      <span className="text-stone-400 font-serif italic text-sm block sm:inline">{item.desc}</span>
                    </div>
                    <span className="text-[#D4AF37] font-serif text-lg text-right">{item.pris} kr</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Dessert Section */}
            <section id="dessert" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-[#D4AF37]/30" />
                <h2 className="text-[#D4AF37] font-serif text-3xl font-bold border-2 border-[#D4AF37] px-6 py-2 rounded">
                  {menuData.dessert.title}
                </h2>
                <div className="h-px flex-1 bg-[#D4AF37]/30" />
              </div>

              <div className="space-y-3">
                {menuData.dessert.items.map((item) => (
                  <div key={item.nr} className="grid grid-cols-1 sm:grid-cols-[auto_1fr_100px] gap-2 sm:gap-4 items-baseline px-2 py-2 hover:bg-[#8B3A42]/30 rounded transition-colors">
                    <span className="text-[#D4AF37] font-serif text-lg w-8">{item.nr}.</span>
                    <div>
                      <span className="text-[#D4AF37] font-serif text-xl font-semibold">{item.name}</span>
                      <span className="text-[#D4AF37] mx-2 hidden sm:inline">—</span>
                      <span className="text-stone-400 font-serif italic text-sm block sm:inline">{item.desc}</span>
                    </div>
                    <span className="text-[#D4AF37] font-serif text-lg text-right">{item.pris} kr</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <div className="border-t-2 border-[#D4AF37]/30 pt-8 mt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border-2 border-[#D4AF37] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-stone-400 font-serif italic">{t.allergener}</p>
                </div>
                <div className="text-[#D4AF37] font-serif text-xl">
                  {t.phone}: +45 12 34 56 78
                </div>
              </div>
            </div>
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
