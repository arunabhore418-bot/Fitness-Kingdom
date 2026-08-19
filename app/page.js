'use client';

import { useState, useEffect, useRef } from 'react';
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
} from 'lucide-react';
import { CONFIG, BRANCHES } from '@/lib/fitness-kingdom-data';

const GREEN = '#08CB00';

/* ---------------------------- NAVBAR ---------------------------- */
function Navbar({ onNavigate }) {
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
        <button onClick={() => handleClick('home')} className="flex items-center">
          <img
            src={CONFIG.LOGO}
            alt="Fitness Kingdom"
            className="h-12 w-12 md:h-14 md:w-14 object-contain"
          />
        </button>

        <div className="hidden md:flex items-center gap-9">
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

        <div className="hidden md:block">
          <a
            href={`tel:${CONFIG.PHONE_INTL}`}
            className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: GREEN }}
          >
            Join Now
          </a>
        </div>

        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden text-white p-2"
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
            className="md:hidden bg-black border-t"
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
              <a
                href={`tel:${CONFIG.PHONE_INTL}`}
                className="mt-2 text-center py-3 text-sm font-bold uppercase tracking-wider text-black"
                style={{ backgroundColor: GREEN }}
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ---------------------------- HERO ---------------------------- */
function Hero({ onNavigate }) {
  return (
    <section id="home" className="relative w-full h-screen min-h-[640px] overflow-hidden bg-black">
      {/* Permanent background video */}
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
      {/* Flat dark overlay (no glow, no colored gradient) */}
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
            className="h-20 w-20 md:h-24 md:w-24 object-contain mx-auto"
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
            onClick={() => onNavigate('founder')}
            className="px-8 py-4 text-sm font-bold uppercase tracking-widest text-white border transition-colors hover:bg-white hover:text-black"
            style={{ borderColor: '#ffffff' }}
          >
            Meet The Founder
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
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

/* ------------------- BRANCH PLACEHOLDER (flat) ------------------- */
function BranchPlaceholder({ number, large = false }) {
  return (
    <div className="absolute inset-0 bg-black overflow-hidden">
      {/* Flat abstract green graphic — no glow */}
      <div
        className="absolute -right-10 -bottom-10 opacity-15"
        style={{ color: GREEN }}
      >
        <Dumbbell size={large ? 380 : 220} strokeWidth={1.2} />
      </div>
      <div
        className="absolute top-6 left-6 text-xs font-semibold uppercase tracking-[0.3em]"
        style={{ color: GREEN }}
      >
        Fitness Kingdom
      </div>
      <div className="absolute bottom-6 left-6">
        <div className="font-display text-white text-6xl md:text-8xl leading-none">
          {number}
        </div>
        <div className="mt-2 h-[2px] w-16" style={{ backgroundColor: GREEN }} />
      </div>
    </div>
  );
}

/* ---------------------------- BRANCHES SECTION ---------------------------- */
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
          <p
            className="text-xs font-semibold tracking-[0.4em] uppercase mb-4"
            style={{ color: GREEN }}
          >
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
                  <p className="mt-2 text-white/60 text-sm line-clamp-2">
                    {b.address}
                  </p>
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

/* ---------------------------- BRANCH DETAIL PANEL ---------------------------- */
function BranchDetail({ branch, onClose }) {
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
        {/* top bar */}
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
            <img src={CONFIG.LOGO} alt="Fitness Kingdom" className="h-11 w-11 object-contain" />
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
              {/* Image */}
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

              {/* Info */}
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

                {/* Actions */}
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
                  <a
                    href={`https://wa.me/91${branch.phone}?text=Hi%2C%20I%20want%20to%20join%20${encodeURIComponent(
                      branch.shortName
                    )}%20branch%20of%20Fitness%20Kingdom.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full px-6 py-4 text-sm font-bold uppercase tracking-widest border transition-colors hover:bg-black flex items-center justify-center gap-2"
                    style={{ borderColor: GREEN, color: GREEN }}
                  >
                    Join This Branch
                    <ArrowRight size={16} />
                  </a>
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

/* ---------------------------- FOUNDER ---------------------------- */
function Founder() {
  return (
    <section id="founder" className="relative w-full bg-black py-24 md:py-32">
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
            {/* Flat green accent line */}
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
              <span className="text-white font-semibold">Akash Rajput</span>, a
              former wrestler and lifelong fitness enthusiast, has built his
              journey around discipline, strength, and consistency. His
              experience in wrestling and years of commitment to fitness helped
              shape the vision behind Fitness Kingdom.
            </p>

            <p className="mt-5 text-white/60 text-base italic">
              From the wrestling mat to building a fitness community.
            </p>

            <p className="mt-6 text-white/70 text-sm">
              Akash personally oversees all four Fitness Kingdom branches
              across Sangli.
            </p>

            <div className="mt-10 flex items-baseline gap-4">
              <div className="font-display text-white text-4xl">Akash Rajput</div>
              <div className="text-white/50 text-sm uppercase tracking-widest">
                Founder
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- SIMPLE FOOTER ---------------------------- */
function MiniFooter() {
  return (
    <footer className="w-full bg-black border-t border-neutral-900 py-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={CONFIG.LOGO} alt="Fitness Kingdom" className="h-10 w-10 object-contain" />
          <span className="text-white/60 text-xs uppercase tracking-[0.3em]">
            Fitness Kingdom — Strength Starts Here
          </span>
        </div>
        <div className="text-white/40 text-xs">© 2026 Fitness Kingdom. All rights reserved.</div>
      </div>
    </footer>
  );
}

/* ---------------------------- PAGE ---------------------------- */
function App() {
  const [activeBranch, setActiveBranch] = useState(null);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar onNavigate={scrollToId} />
      <Hero onNavigate={scrollToId} />
      <BranchesSection onOpen={setActiveBranch} />
      <Founder />
      <MiniFooter />

      <AnimatePresence>
        {activeBranch && (
          <BranchDetail
            branch={activeBranch}
            onClose={() => setActiveBranch(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
