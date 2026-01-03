import Link from 'next/link';

export default function OmOs() {
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
              <Link href="/eksempler" className="px-4 py-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-all text-sm font-medium">
                Eksempler
              </Link>
              <Link href="/om-os" className="px-4 py-2 text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 rounded-lg text-sm font-medium">
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
            <p className="text-violet-600 font-medium mb-4">Hvem er vi?</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
              Om ClearCraft
            </h1>
            <p className="text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
              Et lille team med passion for at hjælpe virksomheder online
            </p>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <p className="text-violet-600 font-medium mb-2 text-center">Teamet</p>
            <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900 dark:text-white">
              Mød folkene bag ClearCraft
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Team Member 1 */}
              <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-lg shadow-neutral-200/30 dark:shadow-none text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-violet-100 to-violet-200 dark:from-violet-900/50 dark:to-violet-800/50 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for team member photo */}
                  <svg className="w-16 h-16 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-1">Navn</h3>
                <p className="text-violet-600 font-medium text-sm mb-3">Medstifter & Udvikler</p>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                  Kort beskrivelse af personen og deres rolle i ClearCraft.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-lg shadow-neutral-200/30 dark:shadow-none text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-violet-100 to-violet-200 dark:from-violet-900/50 dark:to-violet-800/50 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for team member photo */}
                  <svg className="w-16 h-16 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-1">Navn</h3>
                <p className="text-violet-600 font-medium text-sm mb-3">Medstifter & Designer</p>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                  Kort beskrivelse af personen og deres rolle i ClearCraft.
                </p>
              </div>
            </div>
          </div>

          {/* Vision / Mission */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-violet-600 font-medium mb-2">Vores vision</p>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                Professionelle hjemmesider til alle
              </h2>
              <div className="space-y-4 text-lg text-neutral-600 dark:text-neutral-400">
                <p>
                  Vi tror på, at alle virksomheder fortjener en professionel hjemmeside - uanset størrelse eller budget.
                </p>
                <p>
                  Alt for mange små virksomheder bruger enten ingen hjemmeside, eller en der ser uprofessionel ud.
                  Det koster dem kunder hver eneste dag.
                </p>
                <p>
                  Derfor tilbyder vi professionelt webdesign til en fair pris - uden abonnementer, uden skjulte omkostninger.
                </p>
                <p className="text-neutral-400 dark:text-neutral-500 italic text-base">
                  (Her kan du tilføje jeres specifikke vision når du har den klar)
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 shadow-xl shadow-neutral-200/50 dark:shadow-none">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Det vi står for</h3>
              <div className="space-y-6">
                {[
                  { title: 'Enkelhed', desc: 'Ingen unødvendig kompleksitet - bare det der virker' },
                  { title: 'Ærlighed', desc: 'Fast pris, ingen overraskelser, ingen salgstricks' },
                  { title: 'Kvalitet', desc: 'Moderne teknologi og clean design i hver eneste side' }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-violet-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white">{item.title}</h4>
                      <p className="text-neutral-500 dark:text-neutral-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why us */}
          <div className="mb-20">
            <p className="text-violet-600 font-medium mb-2 text-center">Fordele</p>
            <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900 dark:text-white">
              Hvorfor vælge os?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Fokus på resultater', desc: 'Vi bygger ikke bare pæne sider - vi bygger sider der konverterer.' },
                { title: 'Fair priser', desc: 'Fra 5.000 kr for en komplet hjemmeside. Ingen månedlige gebyrer.' },
                { title: 'Hurtig levering', desc: 'Din hjemmeside er klar inden 2 uger. Vi respekterer din tid.' }
              ].map((item) => (
                <div key={item.title} className="text-center bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-lg shadow-neutral-200/30 dark:shadow-none">
                  <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-20">
            <p className="text-violet-600 font-medium mb-2 text-center">Processen</p>
            <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900 dark:text-white">
              Sådan arbejder vi
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Samtale', desc: 'Vi lærer din virksomhed at kende' },
                { step: '02', title: 'Design', desc: 'Vi laver et design der matcher dig' },
                { step: '03', title: 'Feedback', desc: 'Du giver feedback, vi tilpasser' },
                { step: '04', title: 'Lancering', desc: 'Din hjemmeside går live' }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-3">{item.step}</div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.desc}</p>
                </div>
              ))}
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
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Lad os hjælpe dig</h2>
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
