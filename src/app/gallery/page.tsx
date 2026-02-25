'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FILTERS = ['All', 'Rescues', 'Events', 'Adoption Days', 'Campus Life'];

const galleryItems = [
  { id: 1, emoji: '🐕', title: 'Bruno at the Gate', category: 'Campus Life', desc: 'Our oldest campus resident, keeping watch.', bg: 'from-amber-100 to-orange-200', tall: false },
  { id: 2, emoji: '💉', title: 'Vaccination Drive 2025', category: 'Events', desc: '14 animals vaccinated in a single day.', bg: 'from-blue-100 to-sky-200', tall: true },
  { id: 3, emoji: '🏠', title: 'Adoption Day — December', category: 'Adoption Days', desc: '3 dogs found forever homes last winter.', bg: 'from-emerald-100 to-teal-200', tall: false },
  { id: 4, emoji: '🚑', title: 'Emergency Rescue', category: 'Rescues', desc: 'Rushed to safety after a road injury.', bg: 'from-rose-100 to-red-200', tall: true },
  { id: 5, emoji: '🎊', title: 'Welfare Awareness Week', category: 'Events', desc: 'A week of workshops and community connection.', bg: 'from-violet-100 to-purple-200', tall: false },
  { id: 6, emoji: '🦮', title: 'Morning Walk Sessions', category: 'Campus Life', desc: 'Volunteers taking campus dogs for supervised walks.', bg: 'from-yellow-100 to-amber-200', tall: false },
  { id: 7, emoji: '🐾', title: 'Sona\'s Recovery Journey', category: 'Rescues', desc: 'Three weeks from rescue to running free.', bg: 'from-pink-100 to-rose-200', tall: true },
  { id: 8, emoji: '🤝', title: 'First Adoption Drive', category: 'Adoption Days', desc: 'Our very first drive — and we haven\'t stopped since.', bg: 'from-lime-100 to-green-200', tall: false },
  { id: 9, emoji: '🏕️', title: 'Campus Dog Fest', category: 'Events', desc: 'A celebration of every furry face we know.', bg: 'from-orange-100 to-amber-200', tall: false },
  { id: 10, emoji: '🌿', title: 'Feeding rounds', category: 'Campus Life', desc: 'Every morning, before the sun rises — we\'re there.', bg: 'from-teal-100 to-emerald-200', tall: false },
  { id: 11, emoji: '🐈', title: 'Kalu\'s Forever Home', category: 'Adoption Days', desc: 'Our first successful cat adoption.', bg: 'from-purple-100 to-violet-200', tall: true },
  { id: 12, emoji: '🏥', title: 'Post-Surgery Care', category: 'Rescues', desc: 'Round-the-clock monitoring after sterilisation camp.', bg: 'from-red-100 to-pink-200', tall: false },
];

function LightboxModal({ item, onClose }: { item: typeof galleryItems[0]; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0" style={{ background: 'rgba(15,13,9,0.85)', backdropFilter: 'blur(12px)' }} />

      {/* Card */}
      <motion.div
        className={`relative z-10 max-w-sm w-full rounded-3xl bg-gradient-to-br ${item.bg} overflow-hidden shadow-2xl`}
        initial={{ scale: 0.8, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 40 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-56 flex items-center justify-center text-8xl">
          {item.emoji}
        </div>
        <div className="p-6">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--forest-green)' }}>
            {item.category}
          </div>
          <h3 style={{ fontFamily: 'var(--font-modak)', fontSize: '1.6rem', color: 'var(--forest-green)', marginBottom: '0.5rem' }}
            className="dark:text-green-800">
            {item.title}
          </h3>
          <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{item.desc}</p>
          <button onClick={onClose} className="mt-4 text-xs font-semibold" style={{ color: 'var(--muted-foreground)' }}>
            ✕ Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<typeof galleryItems[0] | null>(null);

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter(i => i.category === filter);

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* ══ HERO ══ */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 paw-pattern-bg opacity-30" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 glass"
              style={{ color: 'var(--forest-green)', border: '1px solid rgba(45,90,39,0.2)' }}>
              🐾 Gallery
            </div>
            <h1 style={{ fontFamily: 'var(--font-modak)', fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: 'var(--forest-green)', lineHeight: 1.05 }}
              className="dark:text-green-400 mb-4">
              Moments That Matter
            </h1>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '1.1rem', maxWidth: '540px', lineHeight: 1.7, fontFamily: 'var(--font-varela-round)' }}>
              Every photo tells a story of care, rescue, community, and love.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ FILTER TABS ══ */}
      <section className="px-6 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                className="relative px-5 py-2 rounded-full text-sm font-semibold"
                style={{
                  color: filter === f ? 'white' : 'var(--muted-foreground)',
                  fontFamily: 'var(--font-varela-round)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter === f && (
                  <motion.span
                    layoutId="gallery-filter"
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'var(--forest-green)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MASONRY GRID ══ */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div className="masonry-grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  className="masonry-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                >
                  <motion.div
                    className={`group relative rounded-2xl bg-gradient-to-br ${item.bg} overflow-hidden card-morph cursor-pointer`}
                    style={{ height: item.tall ? '320px' : '240px' }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    onClick={() => setSelected(item)}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-5">
                      <div className="text-6xl">{item.emoji}</div>
                      <div className="text-center">
                        <div style={{ fontFamily: 'var(--font-varela-round)', fontWeight: 700, color: 'var(--forest-green)', fontSize: '1rem' }}
                          className="dark:text-green-800">
                          {item.title}
                        </div>
                        <div className="text-xs mt-1" style={{ color: 'var(--muted-foreground)' }}>{item.category}</div>
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-end justify-center pb-5 opacity-0 group-hover:opacity-100"
                      style={{ background: 'linear-gradient(to top, rgba(45,90,39,0.7), transparent)', transition: 'opacity 0.3s' }}
                    >
                      <span className="text-xs font-semibold text-white tracking-wider">Click to view →</span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ══ LIGHTBOX ══ */}
      <AnimatePresence>
        {selected && (
          <LightboxModal item={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
