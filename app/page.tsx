'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Bella Pasta',
    type: 'Restaurant, København',
    initials: 'BP',
    gradient: 'from-amber-400 to-orange-500',
    quote: 'ClearCraft leverede en fantastisk hjemmeside til vores restaurant. Professionelt arbejde og hurtig levering!',
    previewBg: 'from-amber-50 to-orange-50 dark:from-stone-900 dark:to-stone-800',
    previewAccent: 'amber',
    features: ['Online menu', 'Bordbestilling', 'Takeaway system'],
    link: '/eksempler/restaurant'
  },
  {
    id: 2,
    name: 'Nordic Wellness',
    type: 'Wellness Center, Aarhus',
    initials: 'NW',
    gradient: 'from-teal-400 to-emerald-500',
    quote: 'Fantastisk samarbejde fra start til slut. Vores booking-system fungerer perfekt og kunderne elsker det nye design!',
    previewBg: 'from-teal-50 to-emerald-50 dark:from-emerald-950 dark:to-teal-950',
    previewAccent: 'teal',
    features: ['Online booking', 'Behandlingsoversigt', 'Gavekort system'],
    link: '/eksempler'
  }
];

// Testimonial Carousel Component - Side by side layout
function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 500);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    if (index === activeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  const testimonial = testimonials[activeIndex];

  return (
    <section className="relative bg-neutral-100 dark:bg-neutral-900 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-violet-200 dark:bg-violet-900/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-violet-600 font-medium mb-2">Vores kunder</p>
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
            Se hvad vi har lavet
          </h2>
        </div>

        {/* Main content - side by side */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Website preview in browser frame */}
          <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
              {/* Browser chrome */}
              <div className="bg-neutral-100 dark:bg-neutral-700 px-4 py-3 flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-600">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white dark:bg-neutral-600 rounded-md px-3 py-1.5 text-xs text-neutral-500 dark:text-neutral-300 truncate">
                    {testimonial.name.toLowerCase().replace(' ', '')}.dk
                  </div>
                </div>
              </div>
              {/* Website iframe */}
              <div className="relative h-[400px] overflow-hidden">
                {testimonials.map((t, index) => (
                  <div
                    key={t.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <div
                      className="absolute origin-top-left"
                      style={{
                        width: '200%',
                        height: '200%',
                        transform: 'scale(0.5)',
                        transformOrigin: 'top left'
                      }}
                    >
                      <iframe
                        src={t.link}
                        className="w-full h-full border-0"
                        title={`${t.name} website preview`}
                        loading="lazy"
                        style={{ pointerEvents: 'none' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Testimonial content */}
          <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white mb-8 leading-snug">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                {testimonial.initials}
              </div>
              <div>
                <div className="font-semibold text-lg text-neutral-900 dark:text-white">{testimonial.name}</div>
                <div className="text-neutral-500 dark:text-neutral-400">{testimonial.type}</div>
              </div>
            </div>

            {/* CTA to see demo */}
            <Link
              href={testimonial.link}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-violet-600/25"
            >
              Se hele hjemmesiden
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {/* Carousel indicators */}
            <div className="flex items-center gap-3 mt-10">
              {testimonials.map((t, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? 'w-10 h-2.5 bg-violet-600'
                      : 'w-2.5 h-2.5 bg-neutral-300 dark:bg-neutral-600 hover:bg-violet-400'
                  }`}
                  aria-label={`Gå til ${t.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Animation states
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  // Card refs for 3D tilt effect
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  // Counter animation
  const [counter, setCounter] = useState({ websites: 0, clients: 0, years: 0 });

  useEffect(() => {
    setIsLoaded(true);

    // Animate counters
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounter({
        websites: Math.round(50 * easeOut),
        clients: Math.round(45 * easeOut),
        years: Math.round(3 * easeOut)
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // 3D tilt effect handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardRef: React.RefObject<HTMLDivElement | null>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (cardRef: React.RefObject<HTMLDivElement | null>) => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  // Parallax effect for background blobs
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setMousePosition({ x: window.scrollY * 0.1, y: window.scrollY * 0.05 });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Step animation on scroll - faster progression
  useEffect(() => {
    const handleStepAnimation = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.5;
      const processSection = document.getElementById('process-section');
      if (processSection) {
        const sectionTop = processSection.offsetTop;
        const progress = (scrollPosition - sectionTop) / 150;
        setActiveStep(Math.min(Math.max(Math.floor(progress), 0), 3));
      }
    };
    window.addEventListener('scroll', handleStepAnimation);
    return () => window.removeEventListener('scroll', handleStepAnimation);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Tak for din henvendelse! Vi kontakter dig snarest.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-morph { animation: morph 8s ease-in-out infinite; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .card-3d {
          transition: transform 0.1s ease-out;
          transform-style: preserve-3d;
        }
        .text-gradient {
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #7c3aed 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-x 3s ease infinite;
        }
        .glow-box {
          box-shadow: 0 0 40px rgba(139, 92, 246, 0.15);
        }
        .glow-box:hover {
          box-shadow: 0 0 60px rgba(139, 92, 246, 0.25);
        }
      `}</style>

      {/* Navigation Header - Mystical violet/purple theme */}
      <nav className="sticky top-0 z-50 overflow-hidden">
        {/* Dark mystical gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950 via-purple-900 to-violet-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-purple-500/20 to-violet-600/20 animate-gradient-x" />

        {/* Subtle glow from bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
        <div className="absolute bottom-0 left-1/4 right-1/4 h-8 bg-violet-500/10 blur-xl" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-violet-300/60 rounded-full animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-purple-300/50 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-2/3 left-3/4 w-1 h-1 bg-violet-300/60 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/4 left-2/3 w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse-glow" />
          <div className="absolute top-3/4 left-1/3 w-0.5 h-0.5 bg-white/30 rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo - light version for dark bg */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-50 blur transition-all duration-300" />
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-all group-hover:scale-105">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
              </div>
              <span className="text-lg font-semibold text-white">
                Clear<span className="text-violet-300">Craft</span>
              </span>
            </Link>

            {/* Desktop Navigation - Glass morphism pills */}
            <div className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-sm p-1.5 rounded-full border border-white/10">
              {[
                { href: '/services', label: 'Services' },
                { href: '/eksempler', label: 'Eksempler' },
                { href: '/om-os', label: 'Om os' }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-violet-200/80 hover:text-white rounded-full text-sm font-medium transition-all duration-200 hover:bg-white/15"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button - Glowing light button */}
            <Link href="#bestil" className="hidden md:flex relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-400 via-purple-300 to-violet-400 rounded-full opacity-50 group-hover:opacity-80 blur transition-opacity bg-[length:200%_200%] animate-gradient-x" />
              <div className="relative px-5 py-2.5 bg-white text-violet-900 rounded-full font-medium text-sm transition-all shadow-lg shadow-violet-500/30 group-hover:shadow-violet-400/50 flex items-center gap-2 overflow-hidden">
                <span className="relative z-10">Kontakt os</span>
                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            {/* Mobile CTA */}
            <Link href="#bestil" className="md:hidden relative group">
              <div className="absolute -inset-0.5 bg-violet-400/50 rounded-full blur-sm" />
              <div className="relative px-4 py-2 bg-white text-violet-900 rounded-full font-medium text-sm shadow-lg">
                Kontakt
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with background elements */}
      <section className="relative">
        {/* Background decorative elements with animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated morphing blob */}
          <div
            className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-violet-300 to-purple-400 dark:from-violet-900/40 dark:to-purple-900/40 blur-3xl animate-morph opacity-40"
            style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
          />
          {/* Gradient blob bottom left - animated */}
          <div
            className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-br from-blue-300 to-cyan-300 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full blur-3xl animate-float-slow opacity-40"
            style={{ transform: `translate(${-mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
          />
          {/* Extra floating blob */}
          <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-violet-300 dark:bg-violet-800/20 rounded-full blur-3xl animate-float opacity-30" />
          {/* Spinning gradient ring */}
          <div className="absolute top-20 left-1/4 w-64 h-64 opacity-10 animate-spin-slow">
            <div className="w-full h-full rounded-full border-4 border-dashed border-violet-400" />
          </div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Animated */}
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 bg-violet-100 dark:bg-violet-900/30 rounded-full mb-6 opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                <span className="text-violet-700 dark:text-violet-300 text-sm font-medium">Professionelt webdesign</span>
              </div>

              <h1 className={`text-4xl lg:text-5xl font-bold mb-6 text-neutral-900 dark:text-white leading-tight opacity-0 ${isLoaded ? 'animate-slide-up' : ''}`}>
                Din virksomhed fortjener en <span className="text-gradient">flot hjemmeside</span>
              </h1>
              <p className={`text-xl text-neutral-500 dark:text-neutral-400 mb-8 opacity-0 ${isLoaded ? 'animate-slide-up animation-delay-200' : ''}`}>
                5.000 kr engangsbeløb. Ingen abonnement. Klar på 2 uger.
              </p>

              <div className={`space-y-4 mb-10 opacity-0 ${isLoaded ? 'animate-slide-up animation-delay-400' : ''}`}>
                {[
                  'Responsivt design der virker på alle enheder',
                  'Søgemaskineoptimeret fra start',
                  'Lynhurtig loading-tid'
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-600/20 group-hover:scale-110 transition-transform">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats with animated counters */}
              <div className={`grid grid-cols-3 gap-6 opacity-0 ${isLoaded ? 'animate-slide-up animation-delay-600' : ''}`}>
                {[
                  { value: counter.websites, suffix: '+', label: 'Hjemmesider' },
                  { value: counter.clients, suffix: '+', label: 'Tilfredse kunder' },
                  { value: counter.years, suffix: ' år', label: 'Erfaring' }
                ].map((stat) => (
                  <div key={stat.label} className="text-center group">
                    <div className="text-3xl font-bold text-gradient group-hover:scale-110 transition-transform inline-block">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Pricing Cards with 3D Tilt */}
            <div id="priser" className="lg:sticky lg:top-24 space-y-6">
              {/* Professionel Hjemmeside - 5.000 kr */}
              <div
                ref={card1Ref}
                onMouseMove={(e) => handleMouseMove(e, card1Ref)}
                onMouseLeave={() => handleMouseLeave(card1Ref)}
                className={`card-3d bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-xl shadow-neutral-200/50 dark:shadow-none glow-box opacity-0 ${isLoaded ? 'animate-slide-in-right' : ''}`}
              >
                <div className="mb-4">
                  <p className="text-sm font-medium text-violet-600 mb-1">Kun kodning</p>
                  <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Professionel Hjemmeside</h2>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm">Vi koder din hjemmeside - du står selv for opsætning</p>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-neutral-900 dark:text-white">5.000</span>
                  <span className="text-lg text-neutral-500 ml-1">kr</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {['Responsivt design', 'Kontaktformular', 'SEO-optimering', 'Levering på 2 uger', '1 revisionsrunde'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 text-sm">
                      <svg className="w-4 h-4 text-violet-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#bestil" className="block w-full text-center px-5 py-3 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-neutral-900 rounded-xl font-medium transition-all hover:scale-[1.02]">
                  Kom i gang
                </a>
              </div>

              {/* Komplet Pakke - 12.500 kr */}
              <div
                ref={card2Ref}
                onMouseMove={(e) => handleMouseMove(e, card2Ref)}
                onMouseLeave={() => handleMouseLeave(card2Ref)}
                className={`card-3d bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl p-6 shadow-xl shadow-violet-600/25 relative overflow-hidden opacity-0 ${isLoaded ? 'animate-slide-in-right animation-delay-200' : ''}`}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                </div>
                <div className="absolute top-0 right-0 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULÆR
                </div>
                <div className="relative mb-4">
                  <p className="text-sm font-medium text-violet-200 mb-1">Alt inkluderet</p>
                  <h2 className="text-xl font-bold text-white">Komplet Pakke</h2>
                  <p className="text-violet-200 text-sm">Vi klarer alt - du skal ingenting</p>
                </div>
                <div className="relative mb-4">
                  <span className="text-4xl font-bold text-white">12.500</span>
                  <span className="text-lg text-violet-200 ml-1">kr</span>
                </div>
                <ul className="relative space-y-2 mb-4">
                  {['Alt fra Professionel Hjemmeside', 'Domænekøb & opsætning', 'Hosting (1 år inkluderet)', 'Email-konti opsætning', 'SSL-certifikat', 'Løbende support (1 år)'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white text-sm">
                      <svg className="w-4 h-4 text-violet-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#bestil" className="relative block w-full text-center px-5 py-3 bg-white hover:bg-neutral-100 text-violet-600 rounded-xl font-medium transition-all hover:scale-[1.02]">
                  Kom i gang
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" className="fill-white dark:fill-neutral-900"/>
          </svg>
        </div>
      </section>

      {/* How it works */}
      <section id="process-section" className="relative bg-white dark:bg-neutral-900 py-20">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#262626_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />

        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-violet-600 font-medium mb-2 text-center">Processen</p>
          <h2 className="text-3xl font-bold text-center mb-4 text-neutral-900 dark:text-white">
            Sådan foregår det
          </h2>
          <p className="text-center text-neutral-500 dark:text-neutral-400 mb-16 max-w-xl mx-auto">
            Fra første kontakt til din hjemmeside er live
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Kontakt os', desc: 'Fortæl os om din virksomhed. Vi svarer inden 24 timer.', icon: '💬' },
              { step: '02', title: 'Vi designer', desc: 'Du får et udkast og mulighed for feedback.', icon: '🎨' },
              { step: '03', title: 'Du er online', desc: 'Din hjemmeside går live inden 2 uger.', icon: '🚀' }
            ].map((item, index) => (
              <div
                key={item.step}
                className={`text-center group transition-all duration-500 ${activeStep >= index + 1 ? 'opacity-100 translate-y-0' : 'opacity-70'}`}
              >
                <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 transition-all duration-300 ${activeStep >= index + 1 ? 'bg-gradient-to-br from-violet-600 to-purple-600 scale-110' : 'bg-neutral-100 dark:bg-neutral-800'}`}>
                  <span className="text-3xl">{item.icon}</span>
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${activeStep >= index + 1 ? 'bg-white text-violet-600 shadow-lg' : 'bg-violet-100 dark:bg-violet-900/30 text-violet-600'}`}>
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-neutral-500 dark:text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${Math.min(activeStep * 33.33, 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 80L48 74.7C96 69 192 59 288 53.3C384 48 480 48 576 53.3C672 59 768 69 864 69.3C960 69 1056 59 1152 53.3C1248 48 1344 48 1392 48L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z" className="fill-neutral-50 dark:fill-neutral-950"/>
          </svg>
        </div>
      </section>

      {/* Testimonial Carousel Section - Larger with website preview */}
      <TestimonialCarousel />

      {/* Contact Section */}
      <section id="bestil" className="relative bg-white dark:bg-neutral-900 py-20">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 animate-pulse-glow" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-violet-100 dark:bg-violet-900/20 rounded-full blur-3xl opacity-30 animate-float" />

        <div className="relative max-w-xl mx-auto px-6">
          <p className="text-violet-600 font-medium mb-2 text-center">Kontakt</p>
          <h2 className="text-3xl font-bold text-center mb-4 text-neutral-900 dark:text-white">
            Usikker på om vi kan hjælpe dig?
          </h2>
          <p className="text-center text-neutral-500 dark:text-neutral-400 mb-6">
            Lad os tage en snak - vi vender tilbage inden 24 timer
          </p>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
            <a href="tel:+4512345678" className="flex items-center justify-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-violet-600 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center group-hover:bg-violet-200 dark:group-hover:bg-violet-900/50 transition-colors">
                <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              +45 12 34 56 78
            </a>
            <a href="mailto:kontakt@clearcraft.dk" className="flex items-center justify-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-violet-600 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center group-hover:bg-violet-200 dark:group-hover:bg-violet-900/50 transition-colors">
                <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              kontakt@clearcraft.dk
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 bg-neutral-50 dark:bg-neutral-800/50 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 glow-box">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                Navn
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all"
                placeholder="Dit navn"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all"
                placeholder="din@email.dk"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                Telefon <span className="text-neutral-400 font-normal">(valgfrit)</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all"
                placeholder="+45 12 34 56 78"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                Besked <span className="text-neutral-400 font-normal">(valgfrit)</span>
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all resize-none"
                placeholder="Fortæl lidt om dit projekt..."
              />
            </div>

            <button
              type="submit"
              className="relative w-full px-6 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-xl font-medium text-lg transition-all hover:shadow-lg hover:shadow-violet-600/25 overflow-hidden group"
            >
              <span className="relative z-10">Send besked</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-12 bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-violet-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-lg font-semibold text-neutral-900 dark:text-white">
                  Clear<span className="text-violet-600">Craft</span>
                </span>
              </div>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                Professionelle hjemmesider til små og mellemstore virksomheder.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Sider</h3>
              <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                <li><Link href="/services" className="hover:text-violet-600 transition-colors">Services</Link></li>
                <li><Link href="/eksempler" className="hover:text-violet-600 transition-colors">Eksempler</Link></li>
                <li><Link href="/om-os" className="hover:text-violet-600 transition-colors">Om os</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Eksempler</h3>
              <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                <li><Link href="/eksempler#restaurant" className="hover:text-violet-600 transition-colors">Restaurant</Link></li>
                <li><Link href="/eksempler#butik" className="hover:text-violet-600 transition-colors">Butik</Link></li>
                <li><Link href="/eksempler#haandvaerker" className="hover:text-violet-600 transition-colors">Håndværker</Link></li>
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
