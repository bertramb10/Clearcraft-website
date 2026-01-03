'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BestilBordPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [lang, setLang] = useState<'da' | 'en'>('da');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [guests, setGuests] = useState(2);
  const [step, setStep] = useState(1); // 1: calendar, 2: time, 3: info, 4: confirmation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

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
      pageTitle: 'Bordbestilling',
      pageSubtitle: 'Reservér et bord hos Bella Pasta',
      step1: 'Vælg dato',
      step2: 'Vælg tidspunkt',
      step3: 'Dine oplysninger',
      step4: 'Bekræftelse',
      guests: 'Antal gæster',
      guest: 'gæst',
      guestPlural: 'gæster',
      selectDate: 'Vælg en dato i kalenderen',
      selectTime: 'Vælg et ledigt tidspunkt',
      availableTimes: 'Ledige tidspunkter',
      noTimes: 'Ingen ledige tidspunkter denne dag',
      name: 'Navn',
      email: 'E-mail',
      phone: 'Telefon',
      notes: 'Bemærkninger (valgfrit)',
      notesPlaceholder: 'F.eks. allergier, høj stol, specielle ønsker...',
      back: 'Tilbage',
      next: 'Næste',
      confirm: 'Bekræft reservation',
      thankYou: 'Tak for din reservation!',
      confirmationText: 'Vi har sendt en bekræftelse til din e-mail.',
      reservationDetails: 'Reservationsdetaljer',
      date: 'Dato',
      time: 'Tidspunkt',
      newReservation: 'Lav ny reservation',
      backToExamples: '← Tilbage til eksempler (dette er en demo)',
      monday: 'Man',
      tuesday: 'Tir',
      wednesday: 'Ons',
      thursday: 'Tor',
      friday: 'Fre',
      saturday: 'Lør',
      sunday: 'Søn',
      months: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
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
      pageTitle: 'Table Reservation',
      pageSubtitle: 'Reserve a table at Bella Pasta',
      step1: 'Select date',
      step2: 'Select time',
      step3: 'Your details',
      step4: 'Confirmation',
      guests: 'Number of guests',
      guest: 'guest',
      guestPlural: 'guests',
      selectDate: 'Select a date in the calendar',
      selectTime: 'Select an available time',
      availableTimes: 'Available times',
      noTimes: 'No available times this day',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      notes: 'Notes (optional)',
      notesPlaceholder: 'E.g. allergies, high chair, special requests...',
      back: 'Back',
      next: 'Next',
      confirm: 'Confirm reservation',
      thankYou: 'Thank you for your reservation!',
      confirmationText: 'We have sent a confirmation to your email.',
      reservationDetails: 'Reservation details',
      date: 'Date',
      time: 'Time',
      newReservation: 'Make new reservation',
      backToExamples: '← Back to examples (this is a demo)',
      monday: 'Mon',
      tuesday: 'Tue',
      wednesday: 'Wed',
      thursday: 'Thu',
      friday: 'Fri',
      saturday: 'Sat',
      sunday: 'Sun',
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    }
  };

  const t = texts[lang];

  // Generate available times (simulated)
  const getAvailableTimes = (date: Date) => {
    const day = date.getDay();
    const baseTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];

    // Simulate some times being taken
    const takenIndices = [
      Math.floor(Math.random() * baseTimes.length),
      Math.floor(Math.random() * baseTimes.length),
    ];

    // Weekend has more availability
    if (day === 5 || day === 6) {
      return baseTimes.filter((_, i) => !takenIndices.includes(i));
    }

    // Weekdays have fewer times
    return baseTimes.slice(0, 6).filter((_, i) => !takenIndices.includes(i));
  };

  // Calendar state
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Monday start

    return { daysInMonth, startingDay };
  };

  const isDateSelectable = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  };

  const { daysInMonth, startingDay } = getDaysInMonth(currentMonth);

  const weekDays = [t.monday, t.tuesday, t.wednesday, t.thursday, t.friday, t.saturday, t.sunday];

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

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 h-screen w-72 bg-stone-900 z-40
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col
      `}>
        {/* Logo */}
        <div className="p-6 border-b border-stone-800">
          <Link href="/eksempler/restaurant" className="block">
            <div className="w-28 h-28 mx-auto relative">
              <div className="absolute inset-0 border-2 border-amber-400 rounded-full" />
              <div className="absolute inset-1 border border-amber-400/50 rounded-full" />
              <div className="absolute inset-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex flex-col items-center justify-center">
                <span className="text-stone-900 font-serif text-2xl font-bold tracking-tight">BELLA</span>
                <span className="text-stone-900 text-[10px] tracking-[0.3em] uppercase">— pasta —</span>
              </div>
            </div>
          </Link>
          <p className="text-amber-100/60 text-xs text-center mt-3 tracking-widest uppercase">Est. 1987</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {[
            { label: t.forside, href: '/eksempler/restaurant' },
            { label: t.menu, href: '/eksempler/restaurant/menu' },
            { label: t.vinkort, href: '/eksempler/restaurant/vinkort' },
            { label: t.omOs, href: '/eksempler/restaurant/om-os' },
            { label: t.kontakt, href: '/eksempler/restaurant/om-os#kontakt' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block w-full py-3 px-4 rounded-lg font-medium transition-all bg-stone-800 text-amber-100 hover:bg-stone-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action buttons */}
        <div className="p-4 space-y-2 border-t border-stone-800">
          <div className="w-full py-3 px-4 bg-green-600 text-white rounded-lg font-medium flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {t.bestilBord}
          </div>
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

        {/* Language switcher */}
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
      <main className="flex-1 lg:ml-0 bg-stone-100 min-h-screen">
        {/* Header */}
        <header className="bg-green-700 py-12 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-serif text-white mb-2">{t.pageTitle}</h1>
            <p className="text-green-100">{t.pageSubtitle}</p>
          </div>
        </header>

        {/* Progress Steps */}
        <div className="bg-white border-b border-stone-200 py-4 px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              {[t.step1, t.step2, t.step3, t.step4].map((label, idx) => (
                <div key={idx} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    step > idx + 1 ? 'bg-green-600 text-white' :
                    step === idx + 1 ? 'bg-green-600 text-white' :
                    'bg-stone-200 text-stone-500'
                  }`}>
                    {step > idx + 1 ? '✓' : idx + 1}
                  </div>
                  <span className={`ml-2 text-sm hidden sm:inline ${step >= idx + 1 ? 'text-stone-800' : 'text-stone-400'}`}>
                    {label}
                  </span>
                  {idx < 3 && <div className={`w-8 lg:w-16 h-0.5 mx-2 ${step > idx + 1 ? 'bg-green-600' : 'bg-stone-200'}`} />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto p-6 lg:p-8">
          {/* Step 1: Calendar */}
          {step === 1 && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              {/* Guest selector */}
              <div className="mb-6">
                <label className="block text-stone-800 font-semibold mb-2">{t.guests}</label>
                <div className="flex items-center gap-3 bg-green-50 border-2 border-green-200 rounded-lg p-3">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-10 h-10 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold text-xl transition-colors"
                  >
                    -
                  </button>
                  <span className="w-24 text-center text-lg font-bold text-green-800 bg-white rounded-lg py-2 border border-green-200">
                    {guests} {guests === 1 ? t.guest : t.guestPlural}
                  </span>
                  <button
                    onClick={() => setGuests(Math.min(20, guests + 1))}
                    className="w-10 h-10 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold text-xl transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Calendar */}
              <div className="border-2 border-stone-300 rounded-lg p-4 bg-white">
                {/* Month navigation */}
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                    className="p-2 hover:bg-stone-100 rounded-lg transition-colors text-stone-700"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h3 className="font-bold text-xl text-stone-900">
                    {t.months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </h3>
                  <button
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                    className="p-2 hover:bg-stone-100 rounded-lg transition-colors text-stone-700"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Weekday headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {weekDays.map((day) => (
                    <div key={day} className="text-center text-sm font-bold text-stone-700 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar days */}
                <div className="grid grid-cols-7 gap-1">
                  {/* Empty cells for days before month starts */}
                  {Array.from({ length: startingDay }).map((_, i) => (
                    <div key={`empty-${i}`} className="h-10" />
                  ))}

                  {/* Days of month */}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const isSelectable = isDateSelectable(day);
                    const isSelected = selectedDate?.getDate() === day &&
                                       selectedDate?.getMonth() === currentMonth.getMonth() &&
                                       selectedDate?.getFullYear() === currentMonth.getFullYear();

                    return (
                      <button
                        key={day}
                        disabled={!isSelectable}
                        onClick={() => setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
                        className={`h-10 rounded-lg font-medium transition-all ${
                          isSelected
                            ? 'bg-green-600 text-white'
                            : isSelectable
                            ? 'hover:bg-green-100 text-stone-700'
                            : 'text-stone-300 cursor-not-allowed'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Next button */}
              <div className="mt-6 flex justify-end">
                <button
                  disabled={!selectedDate}
                  onClick={() => setStep(2)}
                  className={`py-3 px-6 rounded-lg font-medium transition-all ${
                    selectedDate
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  {t.next} →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Time selection */}
          {step === 2 && selectedDate && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-stone-900 mb-2">{t.availableTimes}</h2>
              <p className="text-stone-600 mb-6 font-medium">
                {selectedDate.getDate()}. {t.months[selectedDate.getMonth()]} {selectedDate.getFullYear()} · {guests} {guests === 1 ? t.guest : t.guestPlural}
              </p>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {getAvailableTimes(selectedDate).map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 px-4 rounded-lg font-bold transition-all border-2 ${
                      selectedTime === time
                        ? 'bg-green-600 text-white border-green-600'
                        : 'bg-white hover:bg-green-50 text-stone-900 border-stone-300 hover:border-green-400'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="py-3 px-6 rounded-lg font-medium bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
                >
                  ← {t.back}
                </button>
                <button
                  disabled={!selectedTime}
                  onClick={() => setStep(3)}
                  className={`py-3 px-6 rounded-lg font-medium transition-all ${
                    selectedTime
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  {t.next} →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact info */}
          {step === 3 && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-stone-900 mb-6">{t.step3}</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-stone-900 font-bold mb-2">{t.name} *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white text-stone-900 border-2 border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-stone-400"
                  />
                </div>

                <div>
                  <label className="block text-stone-900 font-bold mb-2">{t.email} *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white text-stone-900 border-2 border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-stone-400"
                  />
                </div>

                <div>
                  <label className="block text-stone-900 font-bold mb-2">{t.phone} *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white text-stone-900 border-2 border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-stone-400"
                  />
                </div>

                <div>
                  <label className="block text-stone-900 font-bold mb-2">{t.notes}</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={t.notesPlaceholder}
                    rows={3}
                    className="w-full px-4 py-3 bg-white text-stone-900 border-2 border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-stone-400 resize-none"
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="py-3 px-6 rounded-lg font-medium bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
                >
                  ← {t.back}
                </button>
                <button
                  disabled={!formData.name || !formData.email || !formData.phone}
                  onClick={() => setStep(4)}
                  className={`py-3 px-6 rounded-lg font-medium transition-all ${
                    formData.name && formData.email && formData.phone
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  {t.confirm}
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && selectedDate && (
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h2 className="text-2xl font-serif text-stone-800 mb-2">{t.thankYou}</h2>
              <p className="text-stone-500 mb-8">{t.confirmationText}</p>

              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-left max-w-sm mx-auto">
                <h3 className="font-semibold text-green-800 mb-4">{t.reservationDetails}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between bg-white rounded-lg p-3 border border-green-100">
                    <span className="text-stone-600 font-medium">{t.date}:</span>
                    <span className="font-bold text-stone-900">{selectedDate.getDate()}. {t.months[selectedDate.getMonth()]} {selectedDate.getFullYear()}</span>
                  </div>
                  <div className="flex justify-between bg-white rounded-lg p-3 border border-green-100">
                    <span className="text-stone-600 font-medium">{t.time}:</span>
                    <span className="font-bold text-stone-900">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between bg-white rounded-lg p-3 border border-green-100">
                    <span className="text-stone-600 font-medium">{t.guests}:</span>
                    <span className="font-bold text-stone-900">{guests}</span>
                  </div>
                  <div className="flex justify-between bg-white rounded-lg p-3 border border-green-100">
                    <span className="text-stone-600 font-medium">{t.name}:</span>
                    <span className="font-bold text-stone-900">{formData.name}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setStep(1);
                  setSelectedDate(null);
                  setSelectedTime(null);
                  setFormData({ name: '', email: '', phone: '', notes: '' });
                }}
                className="mt-8 py-3 px-6 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
              >
                {t.newReservation}
              </button>
            </div>
          )}
        </div>

        {/* Back to examples link */}
        <div className="bg-stone-200 py-4 px-8 text-center mt-auto">
          <Link href="/eksempler" className="text-stone-500 hover:text-stone-800 transition-colors text-sm">
            {t.backToExamples}
          </Link>
        </div>
      </main>
    </div>
  );
}
