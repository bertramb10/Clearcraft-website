'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ButikDemo() {
  const [activeCategory, setActiveCategory] = useState('alle');

  const products = [
    { id: 1, name: 'Silk Blouse', category: 'toppe', price: 899, originalPrice: 1299, tag: 'Sale' },
    { id: 2, name: 'Cashmere Sweater', category: 'strik', price: 1499, originalPrice: null, tag: 'Bestseller' },
    { id: 3, name: 'Tailored Blazer', category: 'jakker', price: 1899, originalPrice: null, tag: 'Ny' },
    { id: 4, name: 'Wide Leg Trousers', category: 'bukser', price: 799, originalPrice: null, tag: null },
    { id: 5, name: 'Midi Skirt', category: 'nederdele', price: 699, originalPrice: 999, tag: 'Sale' },
    { id: 6, name: 'Merino Cardigan', category: 'strik', price: 1199, originalPrice: null, tag: null },
    { id: 7, name: 'Linen Shirt', category: 'toppe', price: 599, originalPrice: null, tag: 'Ny' },
    { id: 8, name: 'Wool Coat', category: 'jakker', price: 2499, originalPrice: null, tag: 'Bestseller' },
  ];

  const filteredProducts = activeCategory === 'alle'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white text-center py-3 px-4">
        <p className="text-sm">
          Dette er en demo-hjemmeside fra <Link href="/" className="underline font-medium">WebDesign Pro</Link> -
          <Link href="/#bestil" className="ml-2 underline font-medium">Få din egen for 5.000 kr</Link>
        </p>
      </div>

      {/* Top Bar */}
      <div className="bg-neutral-100 text-neutral-600 text-sm py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <p>Gratis fragt ved køb over 500 kr</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-neutral-900">Kundeservice</a>
            <a href="#" className="hover:text-neutral-900">Find butik</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-light tracking-[0.3em] text-neutral-900">NORDISK</a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#nyheder" className="text-neutral-600 hover:text-neutral-900 transition-colors">Nyheder</a>
              <a href="#kollektion" className="text-neutral-600 hover:text-neutral-900 transition-colors">Kollektion</a>
              <a href="#bestsellers" className="text-neutral-600 hover:text-neutral-900 transition-colors">Bestsellers</a>
              <a href="#om" className="text-neutral-600 hover:text-neutral-900 transition-colors">Om os</a>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2">
            <div className="px-6 py-20 lg:py-32 flex flex-col justify-center">
              <p className="text-rose-600 font-medium tracking-wider mb-4">NY KOLLEKTION</p>
              <h1 className="text-5xl lg:text-6xl font-light text-neutral-900 mb-6 leading-tight">
                Vinter <br />
                <span className="font-medium">2025</span>
              </h1>
              <p className="text-lg text-neutral-600 mb-8 max-w-md">
                Tidløst skandinavisk design møder moderne elegance.
                Opdag vores nye kollektion af bæredygtig kvalitetstøj.
              </p>
              <div className="flex gap-4">
                <a href="#kollektion" className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-medium transition-colors">
                  Se kollektion
                </a>
                <a href="#bestsellers" className="px-8 py-4 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white font-medium transition-colors">
                  Bestsellers
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-neutral-200 to-neutral-300 min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
              <div className="text-neutral-400 text-center">
                <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <p className="text-sm">Hero billede</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Toppe', count: 24 },
              { name: 'Strik', count: 18 },
              { name: 'Jakker', count: 12 },
              { name: 'Bukser', count: 16 },
            ].map((cat) => (
              <a
                key={cat.name}
                href="#kollektion"
                className="group relative bg-neutral-100 aspect-[4/5] flex flex-col items-center justify-end p-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
                <div className="relative text-center text-white">
                  <h3 className="text-xl font-medium mb-1">{cat.name}</h3>
                  <p className="text-sm text-neutral-300">{cat.count} produkter</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="kollektion" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-neutral-900 mb-4">Vores Kollektion</h2>
            <p className="text-neutral-600">Håndudvalgte styles til den moderne garderobe</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {[
              { id: 'alle', label: 'Alle' },
              { id: 'toppe', label: 'Toppe' },
              { id: 'strik', label: 'Strik' },
              { id: 'jakker', label: 'Jakker' },
              { id: 'bukser', label: 'Bukser' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative bg-neutral-100 aspect-[3/4] mb-4 overflow-hidden">
                  {/* Product image placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-300">
                    <svg className="w-16 h-16 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  {product.tag && (
                    <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-medium ${
                      product.tag === 'Sale' ? 'bg-rose-600 text-white' :
                      product.tag === 'Ny' ? 'bg-emerald-600 text-white' :
                      'bg-neutral-900 text-white'
                    }`}>
                      {product.tag}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="px-6 py-3 bg-white text-neutral-900 font-medium text-sm">
                      Se produkt
                    </button>
                  </div>
                </div>
                <h3 className="font-medium text-neutral-900 mb-1">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-900">{product.price} kr</span>
                  {product.originalPrice && (
                    <span className="text-neutral-400 line-through text-sm">{product.originalPrice} kr</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="om" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-neutral-100 aspect-square flex items-center justify-center">
              <div className="text-neutral-300 text-center">
                <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <p className="text-sm">Om os billede</p>
              </div>
            </div>
            <div>
              <p className="text-rose-600 font-medium tracking-wider mb-4">VOR HISTORIE</p>
              <h2 className="text-4xl font-light text-neutral-900 mb-6">
                Bæredygtig mode med <span className="font-medium">nordisk sjæl</span>
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  NORDISK blev grundlagt i 2018 med en vision om at skabe tidløs, bæredygtig
                  mode af højeste kvalitet. Vi tror på, at godt design aldrig går af mode.
                </p>
                <p>
                  Alle vores produkter er fremstillet af certificerede materialer, og vi
                  arbejder tæt sammen med vores producenter for at sikre fair arbejdsforhold.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { number: '100%', label: 'Bæredygtige materialer' },
                  { number: '15+', label: 'Års garanti' },
                  { number: '50k+', label: 'Glade kunder' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-medium text-neutral-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-neutral-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light mb-4">Tilmeld nyhedsbrev</h2>
          <p className="text-neutral-400 mb-8">
            Få 10% rabat på din første ordre og vær den første til at høre om nye kollektioner
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Din e-mail"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-medium transition-colors"
            >
              Tilmeld
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-white font-light tracking-[0.2em] text-lg mb-6">NORDISK</h3>
              <p className="text-sm">
                Bæredygtig skandinavisk mode siden 2018.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Nyheder</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bestsellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Kundeservice</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Levering</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returnering</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Følg os</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Facebook</a>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 text-sm text-center">
            <p>© 2025 NORDISK. Alle rettigheder forbeholdes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
