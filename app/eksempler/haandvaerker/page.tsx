'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HaandvaerkerDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    {
      icon: '🏠',
      title: 'Renovering',
      desc: 'Komplet renovering af køkken, bad og bolig. Vi håndterer alt fra start til slut.',
      features: ['Køkkenrenovering', 'Badeværelse', 'Tilbygning']
    },
    {
      icon: '🪚',
      title: 'Tømrerarbejde',
      desc: 'Alt i træarbejde - fra skræddersyede møbler til konstruktionsarbejde.',
      features: ['Snedkerarbejde', 'Tagarbejde', 'Trapper']
    },
    {
      icon: '🔧',
      title: 'Reparation',
      desc: 'Hurtig og pålidelig reparation af skader og slitage i din bolig.',
      features: ['Akut service', 'Vedligeholdelse', 'Småopgaver']
    },
  ];

  const projects = [
    { title: 'Komplet køkkenrenovering', location: 'Frederiksberg', type: 'Renovering' },
    { title: 'Tilbygning med terrasse', location: 'Hellerup', type: 'Tilbygning' },
    { title: 'Badeværelse i marmor', location: 'Østerbro', type: 'Renovering' },
    { title: 'Skræddersyet garderobe', location: 'Vanløse', type: 'Snedker' },
    { title: 'Nyt tag og isolering', location: 'Roskilde', type: 'Tagarbejde' },
    { title: 'Carport og udestue', location: 'Gentofte', type: 'Tilbygning' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white text-center py-3 px-4">
        <p className="text-sm">
          Dette er en demo-hjemmeside fra <Link href="/" className="underline font-medium">WebDesign Pro</Link> -
          <Link href="/#bestil" className="ml-2 underline font-medium">Få din egen for 5.000 kr</Link>
        </p>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🔨</span>
              </div>
              <div>
                <span className="text-xl font-bold text-neutral-900">Hansen & Søn</span>
                <span className="hidden md:inline text-neutral-500 text-sm ml-2">Tømrer & Snedker</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-neutral-600 hover:text-amber-600 transition-colors">Ydelser</a>
              <a href="#projekter" className="text-neutral-600 hover:text-amber-600 transition-colors">Projekter</a>
              <a href="#om" className="text-neutral-600 hover:text-amber-600 transition-colors">Om os</a>
              <a href="#kontakt" className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors">
                Få tilbud
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-600/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>⭐</span>
                <span>4.9 stjerner på Trustpilot</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Kvalitetshåndværk du kan stole på
              </h1>
              <p className="text-xl text-neutral-300 mb-8">
                Over 25 års erfaring med renovering, tømrer- og snedkerarbejde.
                Vi leverer håndværk i topkvalitet til fair priser.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#kontakt" className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium text-lg transition-all hover:shadow-lg">
                  Få gratis tilbud
                </a>
                <a href="tel:+4512345678" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium text-lg transition-all flex items-center gap-2">
                  <span>📞</span>
                  Ring nu
                </a>
              </div>

              <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
                {[
                  { number: '500+', label: 'Projekter' },
                  { number: '25+', label: 'Års erfaring' },
                  { number: '100%', label: 'Tilfredshed' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-amber-400">{stat.number}</div>
                    <div className="text-sm text-neutral-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 border border-white/10">
                <div className="aspect-video bg-neutral-700 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-neutral-500 text-center">
                    <span className="text-4xl mb-2 block">🎬</span>
                    <p className="text-sm">Præsentationsvideo</p>
                  </div>
                </div>
                <p className="text-neutral-300 text-center">Se hvordan vi arbejder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-neutral-100 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              '✓ Autoriseret håndværker',
              '✓ Forsikret arbejde',
              '✓ Gratis tilbud',
              '✓ 5 års garanti',
            ].map((badge) => (
              <span key={badge} className="text-neutral-600 font-medium">{badge}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-medium mb-2">Vores ydelser</p>
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Hvad kan vi hjælpe med?</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Vi tilbyder et bredt udvalg af håndværkerydelser - fra mindre reparationer til store renoveringsprojekter
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl p-8 border border-neutral-200 hover:border-amber-300 hover:shadow-lg transition-all group">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-neutral-700">
                      <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projekter" className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-medium mb-2">Vores arbejde</p>
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Seneste projekter</h2>
            <p className="text-neutral-600">Se udvalgte eksempler fra vores tilfredse kunder</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="group relative bg-neutral-200 aspect-[4/3] rounded-xl overflow-hidden">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                  <svg className="w-16 h-16 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <span className="inline-block px-3 py-1 bg-amber-600 text-sm rounded-full mb-2">{project.type}</span>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-neutral-300 text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="om" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-amber-600 font-medium mb-2">Om os</p>
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                Familiefirma med stolthed i håndværket
              </h2>
              <div className="space-y-4 text-neutral-600 text-lg">
                <p>
                  Hansen & Søn blev grundlagt i 1998 af tømrermester Erik Hansen.
                  I dag drives firmaet af anden generation, men værdierne er de samme:
                  kvalitet, pålidelighed og ordentlighed.
                </p>
                <p>
                  Vi er et team på 8 dygtige håndværkere, der alle deler passionen for
                  godt håndværk. Vi tager stolthed i vores arbejde og går først, når
                  kunden er 100% tilfreds.
                </p>
              </div>

              <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                    👷
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Mads Hansen, Direktør</p>
                    <p className="text-neutral-600 mt-1">
                      &ldquo;Vi går ikke på kompromis med kvaliteten. Hver opgave - stor som lille - fortjener vores fulde opmærksomhed.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-neutral-200 aspect-square rounded-xl flex items-center justify-center">
                  <span className="text-neutral-400 text-4xl">📸</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-amber-400 font-medium mb-2">Kundeanmeldelser</p>
            <h2 className="text-3xl font-bold">Hvad siger vores kunder?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Lars P.', location: 'Frederiksberg', text: 'Fantastisk arbejde med vores køkkenrenovering. Professionelle fra start til slut.' },
              { name: 'Marie S.', location: 'Hellerup', text: 'Overholdt både tid og budget. Kan varmt anbefales til alle typer tømrerarbejde.' },
              { name: 'Peter K.', location: 'Østerbro', text: 'Dygtige håndværkere der holder hvad de lover. Vores badeværelse er blevet helt perfekt.' },
            ].map((review) => (
              <div key={review.name} className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-neutral-300 mb-6">&ldquo;{review.text}&rdquo;</p>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-neutral-500 text-sm">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-amber-600 font-medium mb-2">Kontakt os</p>
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                Få et gratis og uforpligtende tilbud
              </h2>
              <p className="text-neutral-600 text-lg mb-8">
                Fortæl os om dit projekt, så vender vi tilbage inden 24 timer med et detaljeret tilbud.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <p className="text-neutral-500 text-sm">Ring til os</p>
                    <p className="text-neutral-900 font-semibold">+45 12 34 56 78</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <p className="text-neutral-500 text-sm">Send en email</p>
                    <p className="text-neutral-900 font-semibold">info@hansenogson.dk</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="text-neutral-500 text-sm">Besøg os</p>
                    <p className="text-neutral-900 font-semibold">Håndværkervej 10, 2400 København NV</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Navn</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Dit navn"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Telefon</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="+45 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="din@email.dk"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Type opgave</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Vælg opgavetype</option>
                    <option value="renovering">Renovering</option>
                    <option value="tomrer">Tømrerarbejde</option>
                    <option value="snedker">Snedkerarbejde</option>
                    <option value="reparation">Reparation</option>
                    <option value="andet">Andet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Beskriv opgaven</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                    placeholder="Fortæl os om dit projekt..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium text-lg transition-colors"
                >
                  Send forespørgsel
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">🔨</span>
                </div>
                <span className="text-white font-bold">Hansen & Søn</span>
              </div>
              <p className="text-sm">Kvalitetshåndværk siden 1998</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Ydelser</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Renovering</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tømrerarbejde</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Snedkerarbejde</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm">
                <li>+45 12 34 56 78</li>
                <li>info@hansenogson.dk</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Åbningstider</h4>
              <ul className="space-y-2 text-sm">
                <li>Man-Fre: 07:00-16:00</li>
                <li>Lør-Søn: Lukket</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 text-sm text-center">
            <p>© 2025 Hansen & Søn Tømrer & Snedker. CVR: 12345678</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
