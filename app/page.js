'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  MapPin,
  Phone,
  Users,
  ArrowRight,
  ArrowLeft,
  Navigation,
  Dumbbell,
  Instagram,
  Check,
  Star,
  MessageCircle,
} from 'lucide-react';
import { CONFIG, BRANCHES, MEMBERSHIPS, GALLERY } from '@/lib/fitness-kingdom-data';

const GREEN = '#08CB00';

/* ---------------------------- NAVBAR ---------------------------- */
function Navbar({ onNavigate, onBuy }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', id: 'home' },
    { label: 'Branches', id: 'branches' },
    { label: 'Membership', id: 'membership' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Founder', id: 'founder' },
  ];

  const handleClick = (id) => {
    setMobileOpen(false);
    onNavigate(id);
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-sm border-b'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={scrolled ? { borderBottomColor: GREEN } : {}}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        {/* Logo — slightly bigger without changing navbar height */}
        <button onClick={() => handleClick('home')} className="flex items-center shrink-0">
          <img
            src={CONFIG.LOGO}
            alt="Fitness Kingdom"
            className="h-16 w-16 md:h-20 md:w-20 object-contain"
          />
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleClick(l.id)}
              className="text-white/85 hover:text-white text-sm font-semibold tracking-wide uppercase transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <button
            onClick={onBuy}
            className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: GREEN }}
          >
            Join Now
          </button>
        </div>

        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="lg:hidden text-white p-2"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-black border-t"
            style={{ borderTopColor: GREEN }}
          >
            <div className="px-5 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => handleClick(l.id)}
                  className="text-left text-white text-lg font-semibold uppercase tracking-wide"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onBuy();
                }}
                className="mt-2 text-center py-3 text-sm font-bold uppercase tracking-wider text-black"
                style={{ backgroundColor: GREEN }}
              >
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ---------------------------- HERO ---------------------------- */
function Hero({ onNavigate, onBuy }) {
  return (
    <section id="home" className="relative w-full h-screen min-h-[640px] overflow-hidden bg-black">
      <video
        key="fk-hero-video"
        className="absolute inset-0 w-full h-full object-cover"
        src={CONFIG.HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <img
            src={CONFIG.LOGO}
            alt="Fitness Kingdom"
            className="h-24 w-24 md:h-28 md:w-28 object-contain mx-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs md:text-sm font-semibold tracking-[0.4em] uppercase mb-5"
          style={{ color: GREEN }}
        >
          Fitness Kingdom
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-display text-white text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-normal uppercase leading-[0.95]"
        >
          {CONFIG.SLOGAN}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-white/80 text-base md:text-lg font-medium tracking-wide"
        >
          Four locations. One Fitness Kingdom.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={() => onNavigate('branches')}
            className="group px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-transform hover:scale-[1.03] flex items-center gap-2"
            style={{ backgroundColor: GREEN }}
          >
            Explore Branches
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={onBuy}
            className="px-8 py-4 text-sm font-bold uppercase tracking-widest text-white border transition-colors hover:bg-white hover:text-black"
            style={{ borderColor: '#ffffff' }}
          >
            View Membership
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/60 text-xs uppercase tracking-[0.3em]"
      >
        Scroll
      </motion.div>
    </section>
  );
}

/* ---------------- BRANCH PLACEHOLDER ---------------- */
function BranchPlaceholder({ number, large = false }) {
  return (
    <div className="absolute inset-0 bg-black overflow-hidden">
      <div className="absolute -right-10 -bottom-10 opacity-15" style={{ color: GREEN }}>
        <Dumbbell size={large ? 380 : 220} strokeWidth={1.2} />
      </div>
      <div
        className="absolute top-6 left-6 text-xs font-semibold uppercase tracking-[0.3em]"
        style={{ color: GREEN }}
      >
        Fitness Kingdom
      </div>
      <div className="absolute bottom-6 left-6">
        <div className="font-display text-white text-6xl md:text-8xl leading-none">{number}</div>
        <div className="mt-2 h-[2px] w-16" style={{ backgroundColor: GREEN }} />
      </div>
    </div>
  );
}

/* ---------------- BRANCHES ---------------- */
function BranchesSection({ onOpen }) {
  return (
    <section id="branches" className="relative w-full bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20 max-w-3xl"
        >
          <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: GREEN }}>
            Our Locations
          </p>
          <h2 className="font-display text-white text-5xl md:text-7xl uppercase leading-[0.95]">
            Four Branches.
            <br />
            One Kingdom.
          </h2>
          <p className="mt-6 text-white/70 text-base md:text-lg max-w-xl">
            Choose the Fitness Kingdom nearest to you. Tap any branch to view its address, coaches and directions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {BRANCHES.map((b, i) => (
            <motion.button
              key={b.id}
              onClick={() => onOpen(b)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative text-left overflow-hidden bg-neutral-950 border border-neutral-800 hover:border-[color:var(--fk-green)] transition-colors"
              style={{ ['--fk-green']: GREEN }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                {b.image ? (
                  <img
                    src={b.image}
                    alt={b.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <BranchPlaceholder number={b.number} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div
                  className="absolute top-5 left-5 text-xs font-bold tracking-[0.3em] uppercase px-3 py-1.5 text-black"
                  style={{ backgroundColor: GREEN }}
                >
                  Branch {b.number}
                </div>
              </div>
              <div className="p-6 md:p-7 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-display text-white text-2xl md:text-3xl uppercase leading-tight">
                    {b.shortName}
                  </h3>
                  <p className="mt-2 text-white/60 text-sm line-clamp-2">{b.address}</p>
                </div>
                <div
                  className="shrink-0 mt-1 w-11 h-11 flex items-center justify-center border transition-colors group-hover:bg-[color:var(--fk-green)] group-hover:text-black"
                  style={{ borderColor: GREEN, color: GREEN }}
                >
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BRANCH DETAIL ---------------- */
function BranchDetail({ branch, onClose, onBuy }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[70] bg-black overflow-y-auto"
    >
      <div className="min-h-screen flex flex-col">
        <div
          className="sticky top-0 z-10 bg-black/95 backdrop-blur-sm border-b"
          style={{ borderBottomColor: GREEN }}
        >
          <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-white/85 hover:text-white text-sm font-semibold uppercase tracking-wide"
            >
              <ArrowLeft size={18} />
              Back to All Branches
            </button>
            <img src={CONFIG.LOGO} alt="Fitness Kingdom" className="h-14 w-14 object-contain" />
          </div>
        </div>

        <div className="flex-1">
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p
                className="text-xs font-semibold tracking-[0.4em] uppercase mb-3"
                style={{ color: GREEN }}
              >
                Branch {branch.number}
              </p>
              <h2 className="font-display text-white text-5xl md:text-7xl uppercase leading-[0.95]">
                {branch.shortName}
              </h2>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="lg:col-span-3 relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden border border-neutral-800"
              >
                {branch.image ? (
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <BranchPlaceholder number={branch.number} large />
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="lg:col-span-2 flex flex-col gap-6"
              >
                <InfoRow icon={<MapPin size={18} />} label="Location">
                  {branch.address}
                </InfoRow>
                <InfoRow icon={<Phone size={18} />} label="Phone">
                  <a href={`tel:+91${branch.phone}`} className="hover:underline">
                    {branch.phone}
                  </a>
                </InfoRow>
                <InfoRow icon={<Users size={18} />} label="Coaches">
                  <div className="flex flex-wrap gap-2">
                    {branch.coaches.map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white border"
                        style={{ borderColor: GREEN }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </InfoRow>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  {branch.mapsUrl ? (
                    <a
                      href={branch.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full px-6 py-4 text-sm font-bold uppercase tracking-widest text-black transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
                      style={{ backgroundColor: GREEN }}
                    >
                      <Navigation size={16} />
                      Get Directions
                    </a>
                  ) : (
                    <div className="w-full px-6 py-4 text-xs font-semibold uppercase tracking-widest text-white/60 border border-neutral-800 text-center">
                      Google Maps location coming soon
                    </div>
                  )}
                  <a
                    href={`tel:+91${branch.phone}`}
                    className="w-full px-6 py-4 text-sm font-bold uppercase tracking-widest text-white border transition-colors hover:bg-white hover:text-black flex items-center justify-center gap-2"
                    style={{ borderColor: '#ffffff' }}
                  >
                    <Phone size={16} />
                    Call Now
                  </a>
                  <button
                    onClick={() => onBuy({ branch: branch.shortName })}
                    className="w-full px-6 py-4 text-sm font-bold uppercase tracking-widest border transition-colors hover:bg-black flex items-center justify-center gap-2"
                    style={{ borderColor: GREEN, color: GREEN }}
                  >
                    Join This Branch
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function InfoRow({ icon, label, children }) {
  return (
    <div className="border-t border-neutral-800 pt-5">
      <div
        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] mb-2"
        style={{ color: GREEN }}
      >
        {icon}
        {label}
      </div>
      <div className="text-white/90 text-base leading-relaxed">{children}</div>
    </div>
  );
}

/* ---------------- MEMBERSHIP ---------------- */
function Membership({ onBuy }) {
  return (
    <section id="membership" className="relative w-full bg-black py-24 md:py-32 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16 max-w-3xl"
        >
          <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: GREEN }}>
            Membership
          </p>
          <h2 className="font-display text-white text-5xl md:text-7xl uppercase leading-[0.95]">
            Simple Plans.
            <br />
            Real Results.
          </h2>
          <p className="mt-6 text-white/70 text-base md:text-lg max-w-xl">
            Choose a duration that fits your goal. Membership details can be confirmed at your preferred branch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {MEMBERSHIPS.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative bg-neutral-950 border p-8 md:p-10 flex flex-col"
              style={{
                borderColor: m.popular ? GREEN : '#1f1f1f',
              }}
            >
              {m.popular && (
                <div
                  className="absolute -top-3 left-8 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-black flex items-center gap-1"
                  style={{ backgroundColor: GREEN }}
                >
                  <Star size={12} strokeWidth={3} fill="currentColor" />
                  Most Popular
                </div>
              )}
              <div className="text-xs font-semibold tracking-[0.3em] uppercase text-white/50">
                {m.tag}
              </div>
              <div className="font-display text-white text-4xl md:text-5xl uppercase mt-3">
                {m.duration}
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <div className="font-display text-6xl md:text-7xl" style={{ color: GREEN }}>
                  {m.priceLabel}
                </div>
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-white/50">
                One-time payment
              </div>

              <div className="my-8 h-px bg-neutral-900" />

              <ul className="space-y-3 text-sm text-white/80 mb-8 flex-1">
                <PlanRow>Access at your chosen branch</PlanRow>
                <PlanRow>All equipment included</PlanRow>
                <PlanRow>Coach guidance on floor</PlanRow>
                {m.id !== '3m' && <PlanRow>Flexible visit hours</PlanRow>}
                {m.id === '1y' && <PlanRow>Best value — save more</PlanRow>}
              </ul>

              <button
                onClick={() => onBuy({ plan: m })}
                className={`w-full px-6 py-4 text-sm font-bold uppercase tracking-widest transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 ${
                  m.popular ? 'text-black' : 'text-white border'
                }`}
                style={
                  m.popular
                    ? { backgroundColor: GREEN }
                    : { borderColor: GREEN, color: GREEN }
                }
              >
                Buy Membership
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-white/50 text-sm">
          Membership details can be confirmed at your preferred branch.
        </p>
      </div>
    </section>
  );
}

function PlanRow({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="mt-0.5 shrink-0 w-5 h-5 flex items-center justify-center"
        style={{ backgroundColor: GREEN, color: '#000' }}
      >
        <Check size={14} strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery({ onOpen }) {
  return (
    <section id="gallery" className="relative w-full bg-black py-24 md:py-32 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16 max-w-3xl"
        >
          <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: GREEN }}>
            Gallery
          </p>
          <h2 className="font-display text-white text-5xl md:text-7xl uppercase leading-[0.95]">
            Inside The Kingdom.
          </h2>
          <p className="mt-6 text-white/70 text-base md:text-lg max-w-xl">
            A glimpse of the energy, equipment and effort that lives inside every Fitness Kingdom branch.
          </p>
        </motion.div>

        {/* Asymmetric grid: 5 images */}
        <div className="grid grid-cols-6 grid-rows-2 gap-3 md:gap-4 h-[520px] md:h-[640px]">
          {GALLERY.map((g, i) => {
            const layouts = [
              'col-span-6 md:col-span-3 row-span-2',
              'col-span-3 md:col-span-2 row-span-1',
              'col-span-3 md:col-span-1 row-span-1',
              'col-span-3 md:col-span-2 row-span-1',
              'col-span-3 md:col-span-1 row-span-1',
            ];
            return (
              <motion.button
                key={i}
                onClick={() => onOpen(i)}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`${layouts[i]} relative overflow-hidden bg-neutral-900 group`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Lightbox({ index, onClose }) {
  const [i, setI] = useState(index);
  useEffect(() => setI(index), [index]);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setI((v) => (v + 1) % GALLERY.length);
      if (e.key === 'ArrowLeft') setI((v) => (v - 1 + GALLERY.length) % GALLERY.length);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const img = GALLERY[i];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[80] bg-black/95 flex items-center justify-center p-5"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/80 hover:text-white p-2"
        aria-label="Close"
      >
        <X size={28} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setI((v) => (v - 1 + GALLERY.length) % GALLERY.length);
        }}
        className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 border border-white/20"
        aria-label="Previous"
      >
        <ArrowLeft size={22} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setI((v) => (v + 1) % GALLERY.length);
        }}
        className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 border border-white/20"
        aria-label="Next"
      >
        <ArrowRight size={22} />
      </button>
      <img
        key={i}
        src={img.src}
        alt={img.alt}
        className="max-h-[85vh] max-w-[92vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-[0.3em]">
        {i + 1} / {GALLERY.length}
      </div>
    </motion.div>
  );
}

/* ---------------- FOUNDER ---------------- */
function Founder() {
  return (
    <section id="founder" className="relative w-full bg-black py-24 md:py-32 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square w-full overflow-hidden border border-neutral-800">
              <img
                src={CONFIG.FOUNDER_IMAGE}
                alt={`${CONFIG.FOUNDER_NAME} — Founder of Fitness Kingdom`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 border-b-[3px] border-r-[3px]"
              style={{ borderColor: GREEN }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <p
              className="text-xs font-semibold tracking-[0.4em] uppercase mb-4"
              style={{ color: GREEN }}
            >
              The Founder
            </p>
            <h2 className="font-display text-white text-5xl md:text-7xl uppercase leading-[0.95]">
              The Man Behind
              <br />
              <span style={{ color: GREEN }}>Fitness Kingdom</span>
            </h2>
            <div className="mt-6 h-[3px] w-20" style={{ backgroundColor: GREEN }} />
            <p className="mt-8 text-white/80 text-base md:text-lg leading-relaxed">
              <span className="text-white font-semibold">Akash Rajput</span>, a former wrestler and
              lifelong fitness enthusiast, has built his journey around discipline, strength, and
              consistency. His experience in wrestling and years of commitment to fitness helped
              shape the vision behind Fitness Kingdom.
            </p>
            <p className="mt-5 text-white/60 text-base italic">
              From the wrestling mat to building a fitness community.
            </p>
            <p className="mt-6 text-white/70 text-sm">
              Akash personally oversees all four Fitness Kingdom branches across Sangli.
            </p>
            <div className="mt-10 flex items-baseline gap-4">
              <div className="font-display text-white text-4xl">Akash Rajput</div>
              <div className="text-white/50 text-sm uppercase tracking-widest">Founder</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BUY MEMBERSHIP MODAL ---------------- */
function BuyModal({ open, initial, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [planId, setPlanId] = useState(initial?.plan?.id || '6m');
  const [branch, setBranch] = useState(initial?.branch || '');

  useEffect(() => {
    if (open) {
      setPlanId(initial?.plan?.id || '6m');
      setBranch(initial?.branch || '');
    }
  }, [open, initial]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const plan = MEMBERSHIPS.find((p) => p.id === planId) || MEMBERSHIPS[1];

  const submit = () => {
    const cleanPhone = phone.replace(/\D/g, '');
    const msg = `Hi Fitness Kingdom! I want to buy the ${plan.duration} membership (${plan.priceLabel}).%0A%0AName: ${encodeURIComponent(
      name || '—'
    )}%0APhone: ${encodeURIComponent(cleanPhone || '—')}${
      branch ? `%0APreferred Branch: ${encodeURIComponent(branch)}` : ''
    }`;
    const url = `https://wa.me/${CONFIG.WHATSAPP}?text=${msg}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[90] bg-black/85 flex items-end md:items-center justify-center p-0 md:p-5"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full md:max-w-lg bg-neutral-950 border overflow-hidden"
            style={{ borderColor: GREEN }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-900">
              <div className="flex items-center gap-3">
                <img src={CONFIG.LOGO} alt="" className="h-9 w-9 object-contain" />
                <div className="font-display text-white text-xl uppercase">Buy Membership</div>
              </div>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white p-1"
                aria-label="Close"
              >
                <X size={22} />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {/* Plan selector */}
              <div>
                <div
                  className="text-[10px] font-semibold tracking-[0.3em] uppercase mb-2"
                  style={{ color: GREEN }}
                >
                  Select Plan
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {MEMBERSHIPS.map((m) => {
                    const active = m.id === planId;
                    return (
                      <button
                        key={m.id}
                        onClick={() => setPlanId(m.id)}
                        className={`p-3 border text-left transition-colors ${
                          active ? 'text-black' : 'text-white'
                        }`}
                        style={
                          active
                            ? { backgroundColor: GREEN, borderColor: GREEN }
                            : { borderColor: '#262626' }
                        }
                      >
                        <div className="text-[10px] uppercase tracking-widest opacity-80">
                          {m.duration}
                        </div>
                        <div className="font-display text-xl mt-1">{m.priceLabel}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name */}
              <div>
                <label
                  className="block text-[10px] font-semibold tracking-[0.3em] uppercase mb-2"
                  style={{ color: GREEN }}
                >
                  Your Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="w-full bg-black text-white px-4 py-3 border border-neutral-800 focus:border-[color:var(--fk)] outline-none"
                  style={{ ['--fk']: GREEN }}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  className="block text-[10px] font-semibold tracking-[0.3em] uppercase mb-2"
                  style={{ color: GREEN }}
                >
                  Phone Number
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  inputMode="tel"
                  className="w-full bg-black text-white px-4 py-3 border border-neutral-800 focus:border-[color:var(--fk)] outline-none"
                  style={{ ['--fk']: GREEN }}
                />
              </div>

              {/* Branch */}
              <div>
                <label
                  className="block text-[10px] font-semibold tracking-[0.3em] uppercase mb-2"
                  style={{ color: GREEN }}
                >
                  Preferred Branch
                </label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full bg-black text-white px-4 py-3 border border-neutral-800 outline-none"
                >
                  <option value="">Select branch (optional)</option>
                  {BRANCHES.map((b) => (
                    <option key={b.id} value={b.shortName}>
                      Branch {b.number} — {b.shortName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Summary */}
              <div className="bg-black border border-neutral-900 p-4 flex items-center justify-between">
                <div>
                  <div className="text-white/60 text-[10px] uppercase tracking-[0.3em]">
                    Total
                  </div>
                  <div className="font-display text-3xl" style={{ color: GREEN }}>
                    {plan.priceLabel}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white/60 text-[10px] uppercase tracking-[0.3em]">Duration</div>
                  <div className="font-display text-white text-xl uppercase">{plan.duration}</div>
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <button
                  onClick={submit}
                  className="w-full px-6 py-4 text-sm font-bold uppercase tracking-widest text-black transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
                  style={{ backgroundColor: GREEN }}
                >
                  <MessageCircle size={16} />
                  Confirm on WhatsApp
                </button>
                <a
                  href={`tel:${CONFIG.PHONE_INTL}`}
                  className="w-full px-6 py-4 text-sm font-bold uppercase tracking-widest text-white border text-center transition-colors hover:bg-white hover:text-black flex items-center justify-center gap-2"
                  style={{ borderColor: '#ffffff' }}
                >
                  <Phone size={16} />
                  Call {CONFIG.PHONE}
                </a>
              </div>
              <p className="text-white/50 text-xs pt-1">
                We’ll confirm your membership details on WhatsApp or call. No online payment required.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer({ onNavigate, onBuy }) {
  const year = 2026;
  return (
    <footer className="relative w-full bg-black border-t" style={{ borderTopColor: GREEN }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <img
                src={CONFIG.LOGO}
                alt="Fitness Kingdom"
                className="h-20 w-20 md:h-24 md:w-24 object-contain"
              />
              <div className="font-display text-white text-2xl md:text-3xl uppercase leading-tight">
                Fitness
                <br />
                Kingdom
              </div>
            </div>
            <p className="mt-6 text-white/70 text-sm max-w-md leading-relaxed">
              Fitness Kingdom — Strength Starts Here. Four premium branches across Sangli built for
              people who are serious about becoming stronger, fitter, and more disciplined.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={CONFIG.SOCIAL.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 flex items-center justify-center border transition-colors hover:bg-[color:var(--fk)] hover:text-black text-white"
                style={{ borderColor: GREEN, ['--fk']: GREEN }}
              >
                <Instagram size={18} />
              </a>
              <a
                href={`https://wa.me/${CONFIG.WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 flex items-center justify-center border transition-colors hover:bg-[color:var(--fk)] hover:text-black text-white"
                style={{ borderColor: GREEN, ['--fk']: GREEN }}
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`tel:${CONFIG.PHONE_INTL}`}
                aria-label="Call"
                className="w-11 h-11 flex items-center justify-center border transition-colors hover:bg-[color:var(--fk)] hover:text-black text-white"
                style={{ borderColor: GREEN, ['--fk']: GREEN }}
              >
                <Phone size={18} />
              </a>
            </div>

            {/* Instagram handle line */}
            <a
              href={CONFIG.SOCIAL.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              <Instagram size={14} style={{ color: GREEN }} />
              @fitness_kingdomsangli
            </a>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <div
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: GREEN }}
            >
              Quick Links
            </div>
            <ul className="space-y-3 text-white/80 text-sm">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Branches', id: 'branches' },
                { label: 'Membership', id: 'membership' },
                { label: 'Gallery', id: 'gallery' },
                { label: 'Founder', id: 'founder' },
              ].map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => onNavigate(l.id)}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div className="md:col-span-4">
            <div
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: GREEN }}
            >
              Branches
            </div>
            <ul className="space-y-3 text-white/80 text-sm">
              {BRANCHES.map((b) => (
                <li key={b.id} className="flex items-start gap-2">
                  <MapPin size={14} className="mt-1 shrink-0" style={{ color: GREEN }} />
                  <div>
                    <div className="text-white">{b.shortName}</div>
                    <div className="text-white/50 text-xs">Branch {b.number}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <div
                className="text-xs font-semibold tracking-[0.3em] uppercase mb-2"
                style={{ color: GREEN }}
              >
                Contact
              </div>
              <a
                href={`tel:${CONFIG.PHONE_INTL}`}
                className="font-display text-white text-2xl hover:underline"
              >
                {CONFIG.PHONE}
              </a>
              <button
                onClick={onBuy}
                className="mt-4 w-full sm:w-auto inline-flex justify-center px-6 py-3 text-xs font-bold uppercase tracking-widest text-black"
                style={{ backgroundColor: GREEN }}
              >
                Buy Membership
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-white/40 text-xs">
            © {year} Fitness Kingdom. All rights reserved.
          </div>
          <div className="text-white/40 text-xs uppercase tracking-[0.3em]">
            Strength Starts Here.
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- PAGE ---------------- */
function App() {
  const [activeBranch, setActiveBranch] = useState(null);
  const [buyOpen, setBuyOpen] = useState(false);
  const [buyInitial, setBuyInitial] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openBuy = (initial) => {
    setBuyInitial(initial || null);
    setBuyOpen(true);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar onNavigate={scrollToId} onBuy={() => openBuy()} />
      <Hero onNavigate={scrollToId} onBuy={() => openBuy()} />
      <BranchesSection onOpen={setActiveBranch} />
      <Membership onBuy={openBuy} />
      <Gallery onOpen={(i) => setLightbox(i)} />
      <Founder />
      <Footer onNavigate={scrollToId} onBuy={() => openBuy()} />

      <AnimatePresence>
        {activeBranch && (
          <BranchDetail
            branch={activeBranch}
            onClose={() => setActiveBranch(null)}
            onBuy={(init) => {
              setActiveBranch(null);
              openBuy(init);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox index={lightbox} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>

      <BuyModal
        open={buyOpen}
        initial={buyInitial}
        onClose={() => setBuyOpen(false)}
      />
    </main>
  );
}

export default App;
