'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { DogData } from '@/lib/dogs';

const FILTERS = ['All', 'Available', 'Under Treatment', 'Campus Regular', 'Sponsored'];

const statusColors: Record<string, string> = {
  'Available': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-400',
  'Under Treatment': 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-400',
  'Campus Regular': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-400',
  'Sponsored': 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-400',
};

const gradients: string[] = [
  'from-amber-100 to-orange-200 dark:from-amber-900/40 dark:to-orange-900/40',
  'from-rose-100 to-pink-200 dark:from-rose-900/40 dark:to-pink-900/40',
  'from-emerald-100 to-teal-200 dark:from-emerald-900/40 dark:to-teal-900/40',
  'from-violet-100 to-purple-200 dark:from-violet-900/40 dark:to-purple-900/40',
  'from-sky-100 to-blue-200 dark:from-sky-900/40 dark:to-blue-900/40',
  'from-yellow-100 to-amber-200 dark:from-yellow-900/40 dark:to-amber-900/40',
];

// Assign a status to each dog for filtering demo
const statuses = ['Campus Regular', 'Under Treatment', 'Available', 'Sponsored', 'Campus Regular', 'Available'];

export default function DogsPage() {
  const [dogs, setDogs] = useState<DogData[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [selectedDog, setSelectedDog] = useState<(DogData & { status: string; gradient: string }) | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sponsored, setSponsored] = useState<Set<string>>(new Set());
  const [celebrating, setCelebrating] = useState<string | null>(null);

  useEffect(() => {
    async function loadDogs() {
      try {
        const response = await fetch('/api/dogs');
        const data = await response.json();
        setDogs(data);
      } catch (error) {
        console.error('Failed to load dogs:', error);
      } finally {
        setLoading(false);
      }
    }
    loadDogs();
  }, []);

  const dogsWithStatus = dogs.map((dog, i) => ({
    ...dog,
    status: statuses[i % statuses.length],
    gradient: gradients[i % gradients.length],
  }));

  const filtered = filter === 'All' ? dogsWithStatus : dogsWithStatus.filter(d => d.status === filter);

  const handleSponsor = (name: string) => {
    setSponsored(prev => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else {
        next.add(name);
        setCelebrating(name);
        setTimeout(() => setCelebrating(null), 1500);
      }
      return next;
    });
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* ══ HERO ══ */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 paw-pattern-bg opacity-30" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 glass"
              style={{ color: 'var(--forest-green)', border: '1px solid rgba(45,90,39,0.2)' }}>
              🐾 Our Animals
            </div>
            <h1 style={{ fontFamily: 'var(--font-modak)', fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: 'var(--forest-green)', lineHeight: 1.05 }}
              className="dark:text-green-400 mb-4">
              Meet the Pack
            </h1>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '1.1rem', maxWidth: '560px', lineHeight: 1.7, fontFamily: 'var(--font-varela-round)' }}>
              Every dog and cat on this page is known, loved, and cared for by the Pawsitive community.
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
                className="relative px-5 py-2 rounded-full text-sm font-semibold transition-colors"
                style={{
                  color: filter === f ? 'white' : 'var(--muted-foreground)',
                  fontFamily: 'var(--font-varela-round)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter === f && (
                  <motion.span
                    layoutId="filter-pill"
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

      {/* ══ GRID ══ */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center py-20" style={{ color: 'var(--muted-foreground)' }}>Loading...</div>
          ) : (
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((dog, i) => (
                  <motion.div
                    key={dog.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className={`group relative rounded-2xl bg-gradient-to-br ${dog.gradient} overflow-hidden card-morph`}
                    whileHover={{ y: -6 }}
                  >
                    {/* Image area */}
                    <div className="h-48 flex items-center justify-center relative overflow-hidden">
                      <motion.span
                        className="text-7xl"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                      >
                        {dog.isCat ? '🐱' : '🐕'}
                      </motion.span>
                      <span className="wag-tail absolute bottom-4 right-4 text-3xl opacity-40">🐾</span>

                      {/* Celebrate on sponsor */}
                      <AnimatePresence>
                        {celebrating === dog.name && (
                          <motion.div
                            className="absolute inset-0 flex items-center justify-center text-4xl"
                            initial={{ scale: 0, opacity: 1 }}
                            animate={{ scale: [0, 1.5, 1], opacity: [1, 1, 0] }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.2 }}
                          >
                            💛✨
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h2 style={{ fontFamily: 'var(--font-modak)', fontSize: '1.4rem', color: 'var(--forest-green)' }}
                          className="dark:text-green-400">
                          {dog.name}
                        </h2>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[dog.status] || ''}`}>
                          {dog.status}
                        </span>
                      </div>

                      {dog.location && (
                        <p className="text-xs mb-3 flex items-center gap-1" style={{ color: 'var(--muted-foreground)' }}>
                          📍 {dog.location}
                        </p>
                      )}

                      <div className="flex gap-2 mt-4">
                        <motion.button
                          onClick={() => { setSelectedDog(dog); setDialogOpen(true); }}
                          className="flex-1 py-2 rounded-xl text-sm font-semibold text-white btn-ripple"
                          style={{ background: 'var(--forest-green)', fontFamily: 'var(--font-varela-round)' }}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          Learn More
                        </motion.button>
                        <motion.button
                          onClick={() => handleSponsor(dog.name)}
                          className="px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-colors"
                          style={{
                            borderColor: sponsored.has(dog.name) ? 'var(--terracotta)' : 'var(--border)',
                            color: sponsored.has(dog.name) ? 'var(--terracotta)' : 'var(--muted-foreground)',
                            fontFamily: 'var(--font-varela-round)',
                            background: sponsored.has(dog.name) ? 'rgba(196,103,58,0.08)' : 'transparent',
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {sponsored.has(dog.name) ? '💛 Sponsored' : '💛 Sponsor'}
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* ══ DOG PROFILE MODAL ══ */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto glass-strong border-0">
          {selectedDog && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <DialogHeader>
                <div className={`h-48 -mx-6 -mt-6 mb-6 rounded-t-lg bg-gradient-to-br ${selectedDog.gradient} flex items-center justify-center`}>
                  <span className="text-8xl">{selectedDog.isCat ? '🐱' : '🐕'}</span>
                </div>
                <DialogTitle style={{ fontFamily: 'var(--font-modak)', fontSize: '2rem', color: 'var(--forest-green)' }}
                  className="dark:text-green-400">
                  {selectedDog.name}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4 mt-2">
                <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full ${statusColors[selectedDog.status] || ''}`}>
                  {selectedDog.status}
                </span>

                {[
                  { label: '🐾 Species', value: selectedDog.isCat ? 'Cat' : 'Dog' },
                  { label: '👤 Gender', value: selectedDog.gender },
                  { label: '🌿 Breed', value: selectedDog.breed },
                  { label: '📅 Age', value: selectedDog.age },
                  { label: '🎨 Appearance', value: selectedDog.appearance },
                  { label: '📍 Location', value: selectedDog.location },
                ].filter(r => r.value).map((row, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex gap-3"
                  >
                    <span className="text-sm font-semibold shrink-0 w-32" style={{ color: 'var(--forest-green)' }}>
                      {row.label}
                    </span>
                    <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{row.value}</span>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-sm font-semibold mb-2" style={{ color: 'var(--forest-green)' }}>💬 Personality & Story</div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{selectedDog.personality}</p>
                </motion.div>

                <div className="flex gap-3 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <motion.button
                    onClick={() => handleSponsor(selectedDog.name)}
                    className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white"
                    style={{ background: 'var(--terracotta)', fontFamily: 'var(--font-varela-round)' }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {sponsored.has(selectedDog.name) ? '💛 Sponsored!' : '💛 Sponsor This Dog'}
                  </motion.button>
                  <a href="mailto:pawsitive@ashoka.edu.in">
                    <motion.span
                      className="px-4 py-2.5 rounded-xl text-sm font-semibold block"
                      style={{ background: 'var(--muted)', color: 'var(--foreground)', fontFamily: 'var(--font-varela-round)' }}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Adopt
                    </motion.span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
