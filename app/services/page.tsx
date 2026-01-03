import Link from 'next/link';

export default function Services() {
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
              <Link href="/services" className="px-4 py-2 text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 rounded-lg text-sm font-medium">
                Services
              </Link>
              <Link href="/eksempler" className="px-4 py-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-all text-sm font-medium">
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
      <section className="relative pb-32">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-200 dark:bg-violet-900/30 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-40" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <p className="text-violet-600 font-medium mb-4">Vores services</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
              Hvad vi tilbyder
            </h1>
            <p className="text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
              Professionelle hjemmesider til små og mellemstore virksomheder
            </p>
          </div>

          {/* Two Packages */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Professionel Hjemmeside - 5.000 kr */}
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 shadow-xl shadow-neutral-200/50 dark:shadow-none">
              <div className="mb-6">
                <p className="text-sm font-medium text-violet-600 mb-2">Kun kodning</p>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Professionel Hjemmeside</h2>
                <p className="text-neutral-500 dark:text-neutral-400">Vi koder din hjemmeside - du står selv for opsætning</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-neutral-900 dark:text-white">5.000</span>
                <span className="text-xl text-neutral-500 ml-1">kr</span>
                <p className="text-neutral-500 text-sm mt-1">Engangsbeløb</p>
              </div>
              <div className="space-y-4 mb-8">
                {[
                  { title: 'Responsivt design', desc: 'Ser perfekt ud på mobil, tablet og desktop' },
                  { title: 'Kontaktformular', desc: 'Lad kunder kontakte dig direkte' },
                  { title: 'SEO-optimering', desc: 'Grundlæggende søgemaskineoptimering' },
                  { title: 'Hurtig loading', desc: 'Moderne teknologi, under 2 sekunder' },
                  { title: '1 revisionsrunde', desc: 'Feedback og ændringer inden lancering' }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-neutral-900 dark:text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/#bestil" className="block w-full text-center px-6 py-4 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-neutral-900 rounded-xl font-medium transition-colors">
                Kom i gang
              </Link>
            </div>

            {/* Komplet Pakke - 12.500 kr */}
            <div className="bg-violet-600 rounded-2xl p-8 shadow-xl shadow-violet-600/25 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-violet-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg">
                POPULÆR
              </div>
              <div className="mb-6">
                <p className="text-sm font-medium text-violet-200 mb-2">Alt inkluderet</p>
                <h2 className="text-2xl font-bold text-white">Komplet Pakke</h2>
                <p className="text-violet-200">Vi klarer alt - du skal ingenting</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">12.500</span>
                <span className="text-xl text-violet-200 ml-1">kr</span>
                <p className="text-violet-200 text-sm mt-1">Engangsbeløb</p>
              </div>
              <div className="space-y-4 mb-8">
                {[
                  { title: 'Alt fra Professionel Hjemmeside', desc: 'Alle features fra den basale pakke' },
                  { title: 'Domænekøb & opsætning', desc: 'Vi køber og opsætter dit domæne' },
                  { title: 'Hosting (1 år inkluderet)', desc: 'Hurtig og sikker hosting' },
                  { title: 'Email-konti opsætning', desc: 'Professionel email med dit domæne' },
                  { title: 'SSL-certifikat', desc: 'Sikker forbindelse (https)' },
                  { title: 'Løbende support (1 år)', desc: 'Hjælp og opdateringer inkluderet' }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-violet-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-violet-200">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/#bestil" className="block w-full text-center px-6 py-4 bg-white hover:bg-neutral-100 text-violet-600 rounded-xl font-medium transition-colors">
                Kom i gang
              </Link>
            </div>
          </div>

          {/* What's the difference */}
          <div className="bg-neutral-100 dark:bg-neutral-800/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 text-center">Hvad er forskellen?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Professionel Hjemmeside (5.000 kr)</h4>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Perfekt hvis du selv kan håndtere det tekniske. Du får koden, og kan selv opsætte hosting og domæne.
                  Ideel for dem med teknisk erfaring eller en IT-kyndig bekendt.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Komplet Pakke (12.500 kr)</h4>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Vi tager os af alt fra start til slut. Du skal bare levere indhold og billeder.
                  Inkluderer 1 års hosting og support - perfekt for travle virksomhedsejere.
                </p>
              </div>
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
          <Link href="/#bestil" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600 text-white rounded-lg font-medium text-lg transition-all shadow-lg shadow-violet-600/25">
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
          <div className="grid md:grid-cols-3 gap-8">
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
