'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function OmOsPage() {
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
      welcomeTo: 'Velkommen til',
      ourHistory: 'Vores historie',
      historyP1: 'Siden 1987 har vi hos Bella Pasta serveret autentisk italiensk mad for tusindvis af glade gæster. Fokus på kvalitet og gode råvarer har været vejen frem, og vores menukort består kun af hjemmelavede italienske retter lavet med kærlighed og passion.',
      historyP2: 'Restauranten ligger på Nyhavn i hjertet af København, hvor flere stamgæster er kommet til over årenes løb. Vi er stolte af at være en del af byens kulinariske scene og fortsætter med at udvikle vores retter med respekt for de italienske traditioner.',
      historyP3: 'Vi tilbyder samtidig mad ud af huset til fødselsdag, konfirmation, firmaarrangementer, fest, catering til frokostordning m.m.',
      historyP4: 'Vi glæder os til at byde dig velkommen hos Bella Pasta.',
      viewMenu: 'Se vores menu',
      practicalInfo: 'Praktisk information',
      findUs: 'Find os',
      address: 'Adresse',
      openingHours: 'Åbningstider',
      monThu: 'Mandag - Torsdag',
      friSat: 'Fredag - Lørdag',
      sunday: 'Søndag',
      parking: 'Parkering',
      parkingInfo: 'P-hus ved Nyhavn, 2 min gang',
      phone: 'Telefon',
      email: 'E-mail',
      cvrNumber: 'CVR-nummer',
      tableReservation: 'Bordbestilling',
      tableReservationInfo: 'Ring eller book online',
      jobTitle: 'Job hos Bella Pasta',
      jobDescription: 'Vi er altid på udkig efter dygtige og passionerede medarbejdere til vores team. Vi modtager løbende uopfordrede ansøgninger og kalder ind til samtaler, når der er ledige stillinger.',
      sendApplication: 'Send din ansøgning til:',
      applicationNote: 'Vedhæft CV og en kort motiveret ansøgning. Vi vender tilbage inden for 14 dage.',
      ctaTitle: 'Klar til en kulinarisk oplevelse?',
      ctaSubtitle: 'Book et bord i dag og smag den ægte italienske køkken',
      bookTableNow: 'Bestil bord nu',
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
      welcomeTo: 'Welcome to',
      ourHistory: 'Our Story',
      historyP1: 'Since 1987, Bella Pasta has served authentic Italian food to thousands of happy guests. A focus on quality and excellent ingredients has been our path forward, and our menu consists only of homemade Italian dishes made with love and passion.',
      historyP2: 'The restaurant is located at Nyhavn in the heart of Copenhagen, where many regulars have joined us over the years. We are proud to be part of the city\'s culinary scene and continue to develop our dishes with respect for Italian traditions.',
      historyP3: 'We also offer catering for birthdays, confirmations, corporate events, parties, lunch arrangements, and more.',
      historyP4: 'We look forward to welcoming you at Bella Pasta.',
      viewMenu: 'View our menu',
      practicalInfo: 'Practical Information',
      findUs: 'Find Us',
      address: 'Address',
      openingHours: 'Opening Hours',
      monThu: 'Monday - Thursday',
      friSat: 'Friday - Saturday',
      sunday: 'Sunday',
      parking: 'Parking',
      parkingInfo: 'Parking garage at Nyhavn, 2 min walk',
      phone: 'Phone',
      email: 'Email',
      cvrNumber: 'VAT Number',
      tableReservation: 'Table Reservation',
      tableReservationInfo: 'Call or book online',
      jobTitle: 'Jobs at Bella Pasta',
      jobDescription: 'We are always looking for skilled and passionate employees for our team. We continuously receive unsolicited applications and call for interviews when positions become available.',
      sendApplication: 'Send your application to:',
      applicationNote: 'Attach your CV and a short motivated application. We will get back to you within 14 days.',
      ctaTitle: 'Ready for a culinary experience?',
      ctaSubtitle: 'Book a table today and taste the authentic Italian cuisine',
      bookTableNow: 'Book table now',
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
            { label: t.vinkort, href: '/eksempler/restaurant/vinkort', active: false },
            { label: t.omOs, href: '/eksempler/restaurant/om-os', active: true },
            { label: t.kontakt, href: '#kontakt' },
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
        {/* Hero Section - Om os */}
        <section className="relative py-20 px-8 lg:px-16">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80)',
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-amber-400 font-serif text-lg mb-2">{t.welcomeTo}</p>
            <h1 className="text-white font-serif text-5xl lg:text-6xl font-bold mb-6">
              Bella Pasta
            </h1>
            <div className="h-px w-24 bg-amber-400 mx-auto mb-8" />
          </div>
        </section>

        {/* Vores historie */}
        <section className="bg-stone-100 py-16 px-8 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif text-stone-800 mb-8 text-center">{t.ourHistory}</h2>

            <div className="prose prose-lg prose-stone mx-auto text-stone-600 space-y-6">
              <p>{t.historyP1}</p>
              <p>{t.historyP2}</p>
              <p>{t.historyP3}</p>
              <p className="text-stone-800 font-medium text-center italic">{t.historyP4}</p>
            </div>

            {/* Se vores menu knap */}
            <div className="mt-12 text-center">
              <Link
                href="/eksempler/restaurant/menu"
                className="inline-flex items-center gap-3 py-4 px-8 bg-stone-900 hover:bg-stone-800 text-amber-400 rounded-xl font-medium text-lg transition-all hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                {t.viewMenu}
              </Link>
            </div>
          </div>
        </section>

        {/* Praktisk info */}
        <section className="bg-stone-900 py-16 px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-amber-400 mb-12 text-center">{t.practicalInfo}</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Adresse & Åbningstider */}
              <div className="bg-stone-800 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-amber-400 mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {t.findUs}
                </h3>

                <div className="space-y-4 text-stone-300">
                  <div>
                    <p className="text-amber-100 font-medium">{t.address}</p>
                    <p>Nyhavn 42</p>
                    <p>1051 København K</p>
                  </div>

                  <div>
                    <p className="text-amber-100 font-medium">{t.openingHours}</p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <span>{t.monThu}</span>
                      <span>11:00 - 22:00</span>
                      <span>{t.friSat}</span>
                      <span>11:00 - 23:00</span>
                      <span>{t.sunday}</span>
                      <span>12:00 - 21:00</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-amber-100 font-medium">{t.parking}</p>
                    <p>{t.parkingInfo}</p>
                  </div>
                </div>
              </div>

              {/* Kontakt */}
              <div id="kontakt" className="bg-stone-800 rounded-xl p-8 scroll-mt-20">
                <h3 className="text-xl font-semibold text-amber-400 mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t.kontakt}
                </h3>

                <div className="space-y-4 text-stone-300">
                  <div>
                    <p className="text-amber-100 font-medium">{t.phone}</p>
                    <a href="tel:+4512345678" className="hover:text-amber-400 transition-colors">+45 12 34 56 78</a>
                  </div>

                  <div>
                    <p className="text-amber-100 font-medium">{t.email}</p>
                    <a href="mailto:info@bellapasta.dk" className="hover:text-amber-400 transition-colors">info@bellapasta.dk</a>
                  </div>

                  <div>
                    <p className="text-amber-100 font-medium">{t.cvrNumber}</p>
                    <p>DK 12 34 56 78</p>
                  </div>

                  <div>
                    <p className="text-amber-100 font-medium">{t.tableReservation}</p>
                    <p>{t.tableReservationInfo}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job hos os */}
        <section className="bg-stone-800 py-16 px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-400 rounded-full mb-6">
              <svg className="w-8 h-8 text-stone-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>

            <h2 className="text-3xl font-serif text-amber-400 mb-4">{t.jobTitle}</h2>

            <p className="text-stone-400 text-lg mb-8 max-w-2xl mx-auto">
              {t.jobDescription}
            </p>

            <div className="bg-stone-900 rounded-xl p-8 text-left max-w-xl mx-auto">
              <h3 className="text-lg font-semibold text-amber-100 mb-4">{t.sendApplication}</h3>
              <div className="space-y-2 text-stone-300">
                <p>
                  <span className="text-amber-100">{t.email}:</span>{' '}
                  <a href="mailto:job@bellapasta.dk" className="hover:text-amber-400 transition-colors">
                    job@bellapasta.dk
                  </a>
                </p>
                <p className="text-stone-500 text-sm mt-4">
                  {t.applicationNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Bestil bord */}
        <section className="bg-amber-400 py-12 px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-serif text-stone-900 mb-4">{t.ctaTitle}</h2>
            <p className="text-stone-700 mb-6">{t.ctaSubtitle}</p>
            <Link href="/eksempler/restaurant/bestil-bord" className="py-4 px-8 bg-stone-900 hover:bg-stone-800 text-amber-400 rounded-xl font-medium text-lg transition-all hover:scale-105 inline-block">
              {t.bookTableNow}
            </Link>
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
