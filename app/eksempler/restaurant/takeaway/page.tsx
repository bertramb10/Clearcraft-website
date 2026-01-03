'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  extras?: { name: string; price: number }[];
}

interface MenuItem {
  name: string;
  desc: string;
  price: number;
  image: string;
}

interface CustomizationItem {
  name: string;
  desc: string;
  price: number;
  image: string;
}

export default function TakeawayPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [lang, setLang] = useState<'da' | 'en'>('da');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('pizza');
  const [showCart, setShowCart] = useState(false);
  const [step, setStep] = useState<'menu' | 'checkout' | 'confirmation'>('menu');
  const [paymentMethod, setPaymentMethod] = useState<'pickup' | 'online'>('pickup');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupTime: '17:00',
    notes: ''
  });

  // Customization modal state
  const [showCustomization, setShowCustomization] = useState(false);
  const [currentItem, setCurrentItem] = useState<CustomizationItem | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<{ name: string; price: number }[]>([]);

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
      pageTitle: 'Takeaway',
      pageSubtitle: 'Bestil mad til afhentning',
      cart: 'Kurv',
      emptyCart: 'Din kurv er tom',
      addToCart: 'Tilføj',
      remove: 'Fjern',
      total: 'I alt',
      subtotal: 'Subtotal',
      vat: 'Heraf moms (25%)',
      checkout: 'Gå til kassen',
      backToMenu: 'Tilbage til menu',
      yourInfo: 'Dine oplysninger',
      name: 'Navn',
      phone: 'Telefon',
      email: 'E-mail',
      pickupTime: 'Afhentningstidspunkt',
      notes: 'Bemærkninger',
      notesPlaceholder: 'Allergier, særlige ønsker...',
      placeOrder: 'Afgiv bestilling',
      thankYou: 'Tak for din bestilling!',
      orderConfirmed: 'Din ordre er bekræftet',
      pickupAt: 'Afhentning kl.',
      orderNumber: 'Ordrenummer',
      newOrder: 'Lav ny bestilling',
      backToExamples: '← Tilbage til eksempler (dette er en demo)',
      extras: 'Ekstra tilbehør',
      drinks: 'Drikkevarer',
      items: 'varer',
      item: 'vare',
      customize: 'Tilpas',
      addAsIs: 'Tilføj som den er',
      addWithExtras: 'Tilføj med tilbehør',
      customizeTitle: 'Vil du tilføje ekstra?',
      selectExtras: 'Vælg tilbehør til',
      addToCartBtn: 'Tilføj til kurv',
      cancel: 'Annuller',
      withExtras: 'med tilbehør',
      paymentMethod: 'Betalingsmetode',
      payAtPickup: 'Betal ved afhentning',
      payAtPickupDesc: 'Betal kontant eller med kort når du henter din ordre',
      payOnline: 'Betal online',
      payOnlineDesc: 'Betal sikkert med kort via vores betalingsgateway',
      paymentInfo: 'Betaling',
      paymentPending: 'Betales ved afhentning',
      paymentCompleted: 'Betalt online',
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
      pageTitle: 'Takeaway',
      pageSubtitle: 'Order food for pickup',
      cart: 'Cart',
      emptyCart: 'Your cart is empty',
      addToCart: 'Add',
      remove: 'Remove',
      total: 'Total',
      subtotal: 'Subtotal',
      vat: 'Incl. VAT (25%)',
      checkout: 'Checkout',
      backToMenu: 'Back to menu',
      yourInfo: 'Your details',
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      pickupTime: 'Pickup time',
      notes: 'Notes',
      notesPlaceholder: 'Allergies, special requests...',
      placeOrder: 'Place order',
      thankYou: 'Thank you for your order!',
      orderConfirmed: 'Your order has been confirmed',
      pickupAt: 'Pickup at',
      orderNumber: 'Order number',
      newOrder: 'New order',
      backToExamples: '← Back to examples (this is a demo)',
      extras: 'Extra toppings',
      drinks: 'Beverages',
      items: 'items',
      item: 'item',
      customize: 'Customize',
      addAsIs: 'Add as is',
      addWithExtras: 'Add with extras',
      customizeTitle: 'Would you like extras?',
      selectExtras: 'Select extras for',
      addToCartBtn: 'Add to cart',
      cancel: 'Cancel',
      withExtras: 'with extras',
      paymentMethod: 'Payment method',
      payAtPickup: 'Pay at pickup',
      payAtPickupDesc: 'Pay cash or card when you collect your order',
      payOnline: 'Pay online',
      payOnlineDesc: 'Pay securely with card via our payment gateway',
      paymentInfo: 'Payment',
      paymentPending: 'Pay at pickup',
      paymentCompleted: 'Paid online',
    }
  };

  const t = texts[lang];

  const categories = [
    { id: 'pizza', label: 'Pizza' },
    { id: 'pasta', label: 'Pasta' },
    { id: 'sandwich', label: 'Sandwich' },
    { id: 'dessert', label: 'Dessert' },
    { id: 'drinks', label: lang === 'da' ? 'Drikkevarer' : 'Drinks' },
  ];

  const menuItems: Record<string, MenuItem[]> = {
    pizza: [
      { name: 'Margherita', desc: lang === 'da' ? 'Tomat, mozzarella, basilikum' : 'Tomato, mozzarella, basil', price: 89, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80' },
      { name: 'Pepperoni', desc: lang === 'da' ? 'Tomat, mozzarella, pepperoni' : 'Tomato, mozzarella, pepperoni', price: 99, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80' },
      { name: 'Quattro Formaggi', desc: lang === 'da' ? 'Fire slags ost' : 'Four cheeses', price: 109, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80' },
      { name: 'Prosciutto', desc: lang === 'da' ? 'Tomat, mozzarella, parmaskinke, rucola' : 'Tomato, mozzarella, prosciutto, arugula', price: 119, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80' },
      { name: 'Vegetariana', desc: lang === 'da' ? 'Grillede grøntsager' : 'Grilled vegetables', price: 99, image: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=400&q=80' },
      { name: 'Diavola', desc: lang === 'da' ? 'Spicy salami, chili' : 'Spicy salami, chili', price: 109, image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&q=80' },
    ],
    pasta: [
      { name: 'Spaghetti Bolognese', desc: lang === 'da' ? 'Klassisk kødsauce' : 'Classic meat sauce', price: 129, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80' },
      { name: 'Carbonara', desc: lang === 'da' ? 'Pancetta, æg, pecorino' : 'Pancetta, egg, pecorino', price: 139, image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80' },
      { name: 'Penne Arrabbiata', desc: lang === 'da' ? 'Spicy tomatsauce' : 'Spicy tomato sauce', price: 119, image: 'https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=400&q=80' },
      { name: 'Lasagne', desc: lang === 'da' ? 'Hjemmelavet' : 'Homemade', price: 149, image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&q=80' },
      { name: 'Ravioli', desc: lang === 'da' ? 'Ricotta og spinat' : 'Ricotta and spinach', price: 159, image: 'https://images.unsplash.com/photo-1587740908075-9e245070dfaa?w=400&q=80' },
    ],
    sandwich: [
      { name: 'Club Sandwich', desc: lang === 'da' ? 'Kylling, bacon, salat' : 'Chicken, bacon, lettuce', price: 99, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80' },
      { name: 'Panini Italiano', desc: lang === 'da' ? 'Parmaskinke, mozzarella, pesto' : 'Prosciutto, mozzarella, pesto', price: 89, image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400&q=80' },
      { name: 'Panini Tonno', desc: lang === 'da' ? 'Tun, oliven, kapers' : 'Tuna, olives, capers', price: 89, image: 'https://images.unsplash.com/photo-1554433607-66b5efe9d304?w=400&q=80' },
      { name: 'Vegetar Panini', desc: lang === 'da' ? 'Grillede grøntsager, hummus' : 'Grilled vegetables, hummus', price: 85, image: 'https://images.unsplash.com/photo-1485451456034-3f9391c6f769?w=400&q=80' },
    ],
    dessert: [
      { name: 'Tiramisu', desc: lang === 'da' ? 'Klassisk italiensk' : 'Classic Italian', price: 69, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80' },
      { name: 'Panna Cotta', desc: lang === 'da' ? 'Med friske bær' : 'With fresh berries', price: 59, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80' },
      { name: 'Gelato (3 kugler)', desc: lang === 'da' ? 'Valgfri smag' : 'Your choice', price: 49, image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&q=80' },
    ],
    drinks: [
      { name: 'Coca-Cola', desc: '33cl', price: 29, image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&q=80' },
      { name: 'Coca-Cola Zero', desc: '33cl', price: 29, image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&q=80' },
      { name: 'Fanta', desc: '33cl', price: 29, image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400&q=80' },
      { name: 'Sprite', desc: '33cl', price: 29, image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&q=80' },
      { name: 'San Pellegrino', desc: '50cl', price: 35, image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&q=80' },
      { name: 'Acqua Panna', desc: '50cl', price: 35, image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80' },
      { name: lang === 'da' ? 'Husets rødvin' : 'House Red Wine', desc: '75cl', price: 149, image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80' },
      { name: lang === 'da' ? 'Husets hvidvin' : 'House White Wine', desc: '75cl', price: 149, image: 'https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?w=400&q=80' },
    ],
  };

  const extras = [
    { name: lang === 'da' ? 'Ekstra ost' : 'Extra cheese', price: 15 },
    { name: lang === 'da' ? 'Ekstra kød' : 'Extra meat', price: 25 },
    { name: 'Jalapeños', price: 10 },
    { name: lang === 'da' ? 'Hvidløgsbrød' : 'Garlic bread', price: 35 },
    { name: lang === 'da' ? 'Grøn salat' : 'Green salad', price: 39 },
    { name: lang === 'da' ? 'Oliven' : 'Olives', price: 12 },
    { name: 'Parmesan', price: 15 },
  ];

  // Show customization modal when clicking an item
  const handleItemClick = (item: MenuItem) => {
    // For drinks and desserts, add directly without customization
    if (activeCategory === 'drinks' || activeCategory === 'dessert') {
      addToCartDirect(item);
    } else {
      setCurrentItem(item);
      setSelectedExtras([]);
      setShowCustomization(true);
    }
  };

  // Add item directly without extras
  const addToCartDirect = (item: { name: string; price: number }) => {
    const existingItem = cart.find(cartItem => cartItem.name === item.name && !cartItem.extras?.length);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === existingItem.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, {
        id: `${item.name}-${Date.now()}`,
        name: item.name,
        price: item.price,
        quantity: 1
      }]);
    }
  };

  // Add item with selected extras
  const addToCartWithExtras = () => {
    if (!currentItem) return;

    const extrasTotal = selectedExtras.reduce((sum, e) => sum + e.price, 0);

    setCart([...cart, {
      id: `${currentItem.name}-${Date.now()}`,
      name: currentItem.name,
      price: currentItem.price + extrasTotal,
      quantity: 1,
      extras: selectedExtras.length > 0 ? selectedExtras : undefined
    }]);

    setShowCustomization(false);
    setCurrentItem(null);
    setSelectedExtras([]);
  };

  // Toggle extra selection
  const toggleExtra = (extra: { name: string; price: number }) => {
    if (selectedExtras.find(e => e.name === extra.name)) {
      setSelectedExtras(selectedExtras.filter(e => e.name !== extra.name));
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
  };

  const removeFromCart = (id: string) => {
    const item = cart.find(cartItem => cartItem.id === id);
    if (item && item.quantity > 1) {
      setCart(cart.map(cartItem =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    } else {
      setCart(cart.filter(cartItem => cartItem.id !== id));
    }
  };

  const increaseQuantity = (id: string) => {
    setCart(cart.map(cartItem =>
      cartItem.id === id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ));
  };

  const getSubtotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const getVAT = () => Math.round(getSubtotal() * 0.2);
  const getTotal = () => getSubtotal();
  const getCartCount = () => cart.reduce((total, item) => total + item.quantity, 0);

  const pickupTimes = [
    '17:00', '17:15', '17:30', '17:45',
    '18:00', '18:15', '18:30', '18:45',
    '19:00', '19:15', '19:30', '19:45',
    '20:00', '20:15', '20:30', '20:45',
    '21:00'
  ];

  return (
    <div className="min-h-screen bg-stone-100 flex">
      {/* Customization Modal */}
      {showCustomization && currentItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowCustomization(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
            {/* Modal header with image */}
            <div className="relative h-40 bg-stone-200">
              <img
                src={currentItem.image}
                alt={currentItem.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h2 className="text-xl font-bold">{t.customizeTitle}</h2>
                <p className="text-white/80 mt-1">{currentItem.name} - {currentItem.price} kr</p>
              </div>
            </div>

            {/* Modal content */}
            <div className="p-5 overflow-y-auto max-h-[40vh]">
              <p className="text-stone-600 mb-4 font-medium">{t.selectExtras} {currentItem.name}:</p>

              <div className="space-y-2">
                {extras.map((extra, idx) => {
                  const isSelected = selectedExtras.find(e => e.name === extra.name);
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleExtra(extra)}
                      className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                        isSelected
                          ? 'border-amber-500 bg-amber-50'
                          : 'border-stone-200 hover:border-stone-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? 'border-amber-500 bg-amber-500' : 'border-stone-300'
                        }`}>
                          {isSelected && (
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="font-medium text-stone-800">{extra.name}</span>
                      </div>
                      <span className="font-bold text-amber-600">+{extra.price} kr</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Modal footer */}
            <div className="border-t border-stone-200 p-5 space-y-3">
              {selectedExtras.length > 0 && (
                <div className="bg-amber-50 rounded-lg p-3 flex justify-between items-center">
                  <span className="text-stone-600">{t.extras}:</span>
                  <span className="font-bold text-amber-700">
                    +{selectedExtras.reduce((sum, e) => sum + e.price, 0)} kr
                  </span>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    addToCartDirect(currentItem);
                    setShowCustomization(false);
                    setCurrentItem(null);
                  }}
                  className="flex-1 py-3 px-4 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg font-medium transition-colors"
                >
                  {t.addAsIs}
                </button>
                <button
                  onClick={addToCartWithExtras}
                  className="flex-1 py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors"
                >
                  {t.addToCartBtn}
                </button>
              </div>

              <button
                onClick={() => setShowCustomization(false)}
                className="w-full py-2 text-stone-500 hover:text-stone-700 text-sm font-medium transition-colors"
              >
                {t.cancel}
              </button>
            </div>
          </div>
        </div>
      )}

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

      {/* Cart button mobile */}
      <button
        onClick={() => setShowCart(true)}
        className="lg:hidden fixed top-4 right-4 z-50 p-3 bg-amber-600 text-white rounded-lg shadow-lg flex items-center gap-2"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        {getCartCount() > 0 && (
          <span className="bg-white text-amber-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
            {getCartCount()}
          </span>
        )}
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
          <Link href="/eksempler/restaurant/bestil-bord" className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {t.bestilBord}
          </Link>
          <div className="w-full py-3 px-4 bg-amber-600 text-white rounded-lg font-medium flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {t.takeaway}
          </div>
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
      <main className="flex-1 lg:ml-0 flex relative">
        {/* Menu section */}
        <div className={`flex-1 ${step !== 'menu' ? 'hidden lg:block lg:opacity-50' : ''}`}>
          {/* Header */}
          <header className="bg-amber-600 py-8 px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl lg:text-4xl font-serif text-white mb-2">{t.pageTitle}</h1>
              <p className="text-amber-100">{t.pageSubtitle}</p>
            </div>
          </header>

          {/* Category tabs */}
          <div className="bg-white border-b border-stone-200 sticky top-0 z-10">
            <div className="max-w-3xl mx-auto px-4">
              <div className="flex overflow-x-auto gap-2 py-3 scrollbar-hide">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors ${
                      activeCategory === cat.id
                        ? 'bg-amber-600 text-white'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Menu items */}
          <div className="max-w-3xl mx-auto p-4 lg:p-6 pb-24 lg:pb-6 lg:pr-[420px]">
            <div className="space-y-3">
              {menuItems[activeCategory]?.map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden flex">
                  {/* Food image */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-stone-800">{item.name}</h3>
                      <p className="text-sm text-stone-500 line-clamp-2">{item.desc}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-amber-600 font-bold">{item.price} kr</p>
                      <button
                        onClick={() => handleItemClick(item)}
                        className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors text-sm"
                      >
                        {t.addToCart}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cart sidebar - STICKY */}
        <div className={`
          fixed lg:absolute lg:right-0 lg:top-0 lg:h-full
          inset-0 lg:inset-auto z-50 lg:z-20
          ${showCart || step !== 'menu' ? 'flex' : 'hidden lg:flex'}
          ${step === 'menu' ? 'lg:w-[400px]' : 'w-full lg:w-[500px]'}
        `}>
          {/* Overlay for mobile */}
          <div
            className="lg:hidden absolute inset-0 bg-black/50"
            onClick={() => { setShowCart(false); if (step !== 'menu') setStep('menu'); }}
          />

          {/* Cart content - sticky positioning */}
          <div className={`
            relative ml-auto bg-white h-full shadow-xl flex flex-col
            lg:sticky lg:top-0 lg:h-screen
            ${step === 'menu' ? 'w-full max-w-md lg:w-[400px]' : 'w-full'}
          `}>
            {/* Cart header */}
            <div className="bg-stone-900 text-white p-4 flex items-center justify-between">
              <h2 className="font-semibold text-lg flex items-center gap-2">
                {step === 'menu' ? (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    {t.cart} {getCartCount() > 0 && `(${getCartCount()})`}
                  </>
                ) : step === 'checkout' ? t.yourInfo : t.orderConfirmed}
              </h2>
              <button
                onClick={() => { setShowCart(false); if (step !== 'menu') setStep('menu'); }}
                className="lg:hidden p-2 hover:bg-stone-800 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Cart items / Checkout form / Confirmation */}
            <div className="flex-1 overflow-y-auto p-4">
              {step === 'menu' && (
                <>
                  {cart.length === 0 ? (
                    <div className="text-center py-12">
                      <svg className="w-16 h-16 text-stone-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      <p className="text-stone-500">{t.emptyCart}</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {cart.map((item) => (
                        <div key={item.id} className="bg-stone-50 rounded-lg p-4">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <p className="font-medium text-stone-800">{item.name}</p>
                              {item.extras && item.extras.length > 0 && (
                                <p className="text-xs text-amber-600 mt-1">
                                  + {item.extras.map(e => e.name).join(', ')}
                                </p>
                              )}
                              <p className="text-sm text-stone-500 mt-1">{item.price} kr × {item.quantity}</p>
                            </div>
                            <p className="font-bold text-amber-600">{item.price * item.quantity} kr</p>
                          </div>
                          <div className="flex items-center justify-end gap-2 mt-3">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center text-stone-600 font-bold"
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => increaseQuantity(item.id)}
                              className="w-8 h-8 rounded-full bg-amber-600 hover:bg-amber-700 flex items-center justify-center text-white font-bold"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {step === 'checkout' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-stone-800 font-semibold mb-2">{t.name} *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border-2 border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-stone-900 placeholder-stone-400"
                      placeholder={lang === 'da' ? 'Dit navn' : 'Your name'}
                    />
                  </div>
                  <div>
                    <label className="block text-stone-800 font-semibold mb-2">{t.phone} *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border-2 border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-stone-900 placeholder-stone-400"
                      placeholder={lang === 'da' ? 'Dit telefonnummer' : 'Your phone number'}
                    />
                  </div>
                  <div>
                    <label className="block text-stone-800 font-semibold mb-2">{t.email}</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border-2 border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-stone-900 placeholder-stone-400"
                      placeholder={lang === 'da' ? 'Din e-mail (valgfrit)' : 'Your email (optional)'}
                    />
                  </div>
                  <div>
                    <label className="block text-stone-800 font-semibold mb-2">{t.pickupTime} *</label>
                    <select
                      value={formData.pickupTime}
                      onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                      className="w-full px-4 py-3 bg-white border-2 border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-stone-900"
                    >
                      {pickupTimes.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-stone-800 font-semibold mb-2">{t.notes}</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={t.notesPlaceholder}
                      rows={3}
                      className="w-full px-4 py-3 bg-white border-2 border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-stone-900 placeholder-stone-400 resize-none"
                    />
                  </div>

                  {/* Payment method selection */}
                  <div>
                    <label className="block text-stone-800 font-semibold mb-3">{t.paymentMethod} *</label>
                    <div className="space-y-3">
                      {/* Pay at pickup */}
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('pickup')}
                        className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                          paymentMethod === 'pickup'
                            ? 'border-amber-500 bg-amber-50'
                            : 'border-stone-200 bg-white hover:border-stone-300'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 flex-shrink-0 ${
                            paymentMethod === 'pickup' ? 'border-amber-500 bg-amber-500' : 'border-stone-300'
                          }`}>
                            {paymentMethod === 'pickup' && (
                              <div className="w-2 h-2 bg-white rounded-full" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              <span className="font-semibold text-stone-800">{t.payAtPickup}</span>
                            </div>
                            <p className="text-sm text-stone-500 mt-1">{t.payAtPickupDesc}</p>
                          </div>
                        </div>
                      </button>

                      {/* Pay online */}
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('online')}
                        className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                          paymentMethod === 'online'
                            ? 'border-amber-500 bg-amber-50'
                            : 'border-stone-200 bg-white hover:border-stone-300'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 flex-shrink-0 ${
                            paymentMethod === 'online' ? 'border-amber-500 bg-amber-500' : 'border-stone-300'
                          }`}>
                            {paymentMethod === 'online' && (
                              <div className="w-2 h-2 bg-white rounded-full" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                              </svg>
                              <span className="font-semibold text-stone-800">{t.payOnline}</span>
                            </div>
                            <p className="text-sm text-stone-500 mt-1">{t.payOnlineDesc}</p>
                            {/* Payment card icons */}
                            <div className="flex gap-2 mt-2">
                              <div className="bg-white border border-stone-200 rounded px-2 py-1">
                                <span className="text-xs font-bold text-blue-700">VISA</span>
                              </div>
                              <div className="bg-white border border-stone-200 rounded px-2 py-1">
                                <span className="text-xs font-bold text-red-600">MC</span>
                              </div>
                              <div className="bg-white border border-stone-200 rounded px-2 py-1">
                                <span className="text-xs font-bold text-blue-500">MP</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Order summary */}
                  <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4 mt-4">
                    <h3 className="font-semibold text-amber-800 mb-3">{t.cart}</h3>
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm py-1.5 border-b border-amber-100 last:border-0">
                        <span className="text-stone-700">
                          {item.quantity}× {item.name}
                          {item.extras && item.extras.length > 0 && (
                            <span className="text-amber-600 text-xs"> (+{item.extras.length} {t.extras.toLowerCase()})</span>
                          )}
                        </span>
                        <span className="font-bold text-stone-900">{item.price * item.quantity} kr</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 'confirmation' && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif text-stone-800 mb-2">{t.thankYou}</h2>
                  <p className="text-stone-500 mb-6">{t.orderConfirmed}</p>

                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-left max-w-sm mx-auto">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between bg-white rounded-lg p-3 border border-green-100">
                        <span className="text-stone-600 font-medium">{t.orderNumber}:</span>
                        <span className="font-mono font-bold text-stone-900">BP{Math.floor(Math.random() * 9000) + 1000}</span>
                      </div>
                      <div className="flex justify-between bg-white rounded-lg p-3 border border-green-100">
                        <span className="text-stone-600 font-medium">{t.pickupAt}:</span>
                        <span className="font-bold text-stone-900">{formData.pickupTime}</span>
                      </div>
                      <div className="flex justify-between bg-white rounded-lg p-3 border border-green-100">
                        <span className="text-stone-600 font-medium">{t.paymentInfo}:</span>
                        <span className={`font-bold ${paymentMethod === 'online' ? 'text-green-600' : 'text-amber-600'}`}>
                          {paymentMethod === 'online' ? t.paymentCompleted : t.paymentPending}
                        </span>
                      </div>
                      <div className="flex justify-between bg-white rounded-lg p-3 border border-green-100">
                        <span className="text-stone-600 font-medium">{t.total}:</span>
                        <span className="font-bold text-amber-600">{getTotal()} kr</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setStep('menu');
                      setCart([]);
                      setFormData({ name: '', phone: '', email: '', pickupTime: '17:00', notes: '' });
                      setPaymentMethod('pickup');
                    }}
                    className="mt-6 py-3 px-6 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors"
                  >
                    {t.newOrder}
                  </button>
                </div>
              )}
            </div>

            {/* Cart footer */}
            {step === 'menu' && cart.length > 0 && (
              <div className="border-t border-stone-200 p-4 bg-white">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm text-stone-500">
                    <span>{t.subtotal}</span>
                    <span>{getSubtotal()} kr</span>
                  </div>
                  <div className="flex justify-between text-sm text-stone-500">
                    <span>{t.vat}</span>
                    <span>{getVAT()} kr</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-stone-200">
                    <span>{t.total}</span>
                    <span className="text-amber-600">{getTotal()} kr</span>
                  </div>
                </div>
                <button
                  onClick={() => setStep('checkout')}
                  className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors"
                >
                  {t.checkout}
                </button>
              </div>
            )}

            {step === 'checkout' && (
              <div className="border-t border-stone-200 p-4 bg-white">
                <div className="flex justify-between font-bold text-lg mb-4">
                  <span>{t.total}</span>
                  <span className="text-amber-600">{getTotal()} kr</span>
                </div>
                <div className="space-y-2">
                  <button
                    onClick={() => setStep('menu')}
                    className="w-full py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg font-medium transition-colors"
                  >
                    ← {t.backToMenu}
                  </button>
                  <button
                    disabled={!formData.name || !formData.phone}
                    onClick={() => setStep('confirmation')}
                    className={`w-full py-3 rounded-lg font-medium transition-colors ${
                      formData.name && formData.phone
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                    }`}
                  >
                    {paymentMethod === 'online' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        {t.placeOrder} ({getTotal()} kr)
                      </span>
                    ) : t.placeOrder}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Back to examples link (only visible on menu step) */}
      {step === 'menu' && (
        <div className="fixed bottom-0 left-0 right-0 lg:left-72 lg:right-[400px] bg-stone-200 py-3 px-8 text-center z-10">
          <Link href="/eksempler" className="text-stone-500 hover:text-stone-800 transition-colors text-sm">
            {t.backToExamples}
          </Link>
        </div>
      )}
    </div>
  );
}
