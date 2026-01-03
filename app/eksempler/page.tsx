import Link from 'next/link';

export default function Eksempler() {
  const templates = [
    {
      id: 'restaurant',
      title: 'Restaurant & Cafe',
      desc: 'Perfekt til pizzeriaer, caféer og restauranter. Viser menu, åbningstider og online bestilling.',
      features: ['Menu-visning', 'Online bordbestilling', 'Åbningstider', 'Google Maps'],
      color: 'from-orange-500 to-red-500',
      demoUrl: '/eksempler/restaurant',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
        </svg>
      )
    },
    {
      id: 'butik',
      title: 'Butik & Retail',
      desc: 'Ideel til tøjbutikker, smykkeforhandlere og andre detailhandlere. Stilren præsentation af produkter.',
      features: ['Produktgalleri', 'Kategorivisning', 'Kontaktformular', 'Instagram-feed'],
      color: 'from-pink-500 to-purple-500',
      demoUrl: '/eksempler/butik',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      )
    },
    {
      id: 'haandvaerker',
      title: 'Håndværker & Service',
      desc: 'Til tømrere, elektrikere, malere og andre håndværkere. Fokus på portfolio og tilbudsanmodning.',
      features: ['Projekt-galleri', 'Service-oversigt', 'Tilbudsformular', 'Kundeanmeldelser'],
      color: 'from-amber-500 to-yellow-500',
      demoUrl: '/eksempler/haandvaerker',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      )
    },
    {
      id: 'konsulent',
      title: 'Konsulent & Freelancer',
      desc: 'Perfekt til konsulenter, coaches og freelancere. Professionel præsentation af kompetencer.',
      features: ['Om mig-sektion', 'Service-pakker', 'Booking-kalender', 'Testimonials'],
      color: 'from-emerald-500 to-teal-500',
      demoUrl: null,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      )
    },
    {
      id: 'sundhed',
      title: 'Sundhed & Wellness',
      desc: 'Til klinikker, fysioterapeuter og wellness-centre. Fokus på tillid og online booking.',
      features: ['Behandlingsoversigt', 'Online booking', 'Teamsektion', 'FAQ'],
      color: 'from-green-500 to-lime-500',
      demoUrl: null,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    },
    {
      id: 'ejendom',
      title: 'Ejendomsmægler',
      desc: 'Til ejendomsmæglere og boligudlejere. Præsentation af boliger med professionelt udtryk.',
      features: ['Boligoversigt', 'Søgefunktion', 'Virtuelle ture', 'Kontakt-CTA'],
      color: 'from-blue-500 to-cyan-500',
      demoUrl: null,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo with subtle gradient accent */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-violet-500 flex items-center justify-center shadow-lg shadow-violet-600/20 group-hover:shadow-violet-600/40 transition-shadow">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-lg font-semibold text-neutral-900 dark:text-white">
                Clear<span className="text-violet-600">Craft</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <Link href="/services" className="px-4 py-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-all text-sm font-medium">
                Services
              </Link>
              <Link href="/eksempler" className="px-4 py-2 text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 rounded-lg text-sm font-medium">
                Eksempler
              </Link>
              <Link href="/om-os" className="px-4 py-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-all text-sm font-medium">
                Om os
              </Link>
              <div className="w-px h-6 bg-neutral-200 dark:bg-neutral-700 mx-2" />
              <Link href="/#bestil" className="px-5 py-2 bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600 text-white rounded-lg font-medium text-sm transition-all shadow-md shadow-violet-600/20 hover:shadow-lg hover:shadow-violet-600/30">
                Kontakt os
              </Link>
            </div>

            {/* Mobile CTA */}
            <Link href="/#bestil" className="md:hidden px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-500 text-white rounded-lg font-medium text-sm shadow-md shadow-violet-600/20">
              Kontakt
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-200 dark:bg-violet-900/30 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-40" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <p className="text-violet-600 font-medium mb-4">Portfolio</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
              Eksempler på vores arbejde
            </h1>
            <p className="text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
              Se eksempler på de hjemmesider vi kan bygge til din virksomhed
            </p>
          </div>

          {/* Templates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div
                key={template.id}
                id={template.id}
                className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-lg shadow-neutral-200/30 dark:shadow-none hover:shadow-xl hover:shadow-neutral-200/50 dark:hover:shadow-none transition-all hover:-translate-y-1"
              >
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-br ${template.color} flex items-center justify-center text-white`}>
                  {template.icon}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                    {template.title}
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-400 mb-4 text-sm">
                    {template.desc}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {template.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <svg className="w-4 h-4 text-violet-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {template.demoUrl && (
                      <Link
                        href={template.demoUrl}
                        className="flex-1 text-center px-4 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-medium transition-colors text-sm"
                      >
                        Se demo
                      </Link>
                    )}
                    <Link
                      href="/#bestil"
                      className={`${template.demoUrl ? 'flex-1' : 'w-full'} text-center px-4 py-3 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white rounded-xl font-medium transition-colors text-sm`}
                    >
                      Få dette design
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Design CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 shadow-xl shadow-neutral-200/50 dark:shadow-none max-w-2xl">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
                Har du en anden idé?
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 mb-6">
                Vi bygger også helt unikke designs tilpasset din virksomhed. Fortæl os om dit projekt, så finder vi den bedste løsning sammen.
              </p>
              <Link
                href="/#bestil"
                className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-violet-600/25"
              >
                Kontakt os for et tilbud
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" className="fill-neutral-100 dark:fill-neutral-900"/>
          </svg>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-neutral-100 dark:bg-neutral-900 py-16">
        {/* Background decorative element */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-violet-200 dark:bg-violet-900/20 rounded-full blur-3xl opacity-30" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Klar til at komme i gang?</h2>
          <p className="text-neutral-500 dark:text-neutral-400 mb-8 text-lg">Kontakt os i dag og få et uforpligtende tilbud inden 24 timer</p>
          <Link href="/#bestil" className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-medium text-lg transition-all">
            Kontakt os
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-12 bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">ClearCraft</h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                Professionelle hjemmesider til små og mellemstore virksomheder.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Sider</h3>
              <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                <li><Link href="/services" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/eksempler" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Eksempler</Link></li>
                <li><Link href="/om-os" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Om os</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Eksempler</h3>
              <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                <li><Link href="/eksempler#restaurant" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Restaurant</Link></li>
                <li><Link href="/eksempler#butik" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Butik</Link></li>
                <li><Link href="/eksempler#haandvaerker" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Håndværker</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Kontakt</h3>
              <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                <li>kontakt@clearcraft.dk</li>
                <li>+45 12 34 56 78</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-200 dark:border-neutral-800 mt-8 pt-8 text-center text-neutral-400 text-sm">
            <p>&copy; 2025 ClearCraft</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
