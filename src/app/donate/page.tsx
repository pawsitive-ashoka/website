'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TIERS = [
    { amount: 500, icon: '🍖', title: 'Feed for a Week', desc: 'Feeds a campus animal for an entire week — nutritious meals, every day.' },
    { amount: 1000, icon: '💉', title: 'Vaccination', desc: 'Covers one animal\'s full vaccination against rabies, parvovirus, and distemper.' },
    { amount: 2000, icon: '🏥', title: 'Vet Consultation', desc: 'Pays for a vet visit, examination, and basic medication for an injured animal.' },
    { amount: 5000, icon: '🔬', title: 'Surgery Fund', desc: 'Contributes to life-saving surgery and post-op care for a critically injured animal.' },
];

// Floating paw particles
function PawParticles() {
    const paws = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        left: `${10 + (i * 9) % 80}%`,
        size: 0.6 + (i % 3) * 0.25,
        duration: 10 + (i % 4) * 4,
        delay: i * 1.2,
    }));
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {paws.map((p) => (
                <div key={p.id} className="paw-particle"
                    style={{
                        left: p.left, bottom: '-60px', fontSize: `${p.size}rem`,
                        animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s`
                    }}>
                    🐾
                </div>
            ))}
        </div>
    );
}

function AnimatedCounter({ target, prefix = '' }: { target: number; prefix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            let start = 0;
            const step = target / (1800 / 16);
            const timer = setInterval(() => {
                start += step;
                if (start >= target) { setCount(target); clearInterval(timer); }
                else setCount(Math.floor(start));
            }, 16);
            observer.disconnect();
        }, { threshold: 0.3 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return <span ref={ref}>{prefix}{count.toLocaleString('en-IN')}</span>;
}

export default function DonatePage() {
    const [type, setType] = useState<'one-time' | 'monthly'>('one-time');
    const [selectedTier, setSelectedTier] = useState(1000);
    const [custom, setCustom] = useState('');
    const [celebrating, setCelebrating] = useState(false);

    const handleDonate = () => {
        setCelebrating(true);
        setTimeout(() => setCelebrating(false), 2500);
    };

    const amount = custom ? parseInt(custom) || 0 : selectedTier;

    // Progress: mock 67% toward ₹3L goal
    const goal = 300000;
    const raised = 201000;
    const pct = Math.min(100, Math.round((raised / goal) * 100));

    return (
        <div style={{ paddingTop: '80px' }}>
            {/* ══ HERO ══ */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden" style={{ background: 'var(--dark-earth)' }}>
                <div className="absolute inset-0 paw-pattern-bg opacity-5" />
                <PawParticles />
                <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
                            style={{ border: '1px solid rgba(245,237,216,0.2)', color: 'rgba(245,237,216,0.7)' }}>
                            🐾 Make a Difference
                        </div>
                        <h1 style={{ fontFamily: 'var(--font-modak)', fontSize: 'clamp(3rem, 8vw, 6.5rem)', color: '#f5edd8', lineHeight: 1.05, marginBottom: '1.5rem' }}>
                            Your Support<br />Saves Lives.
                        </h1>
                        <p style={{ color: 'rgba(245,237,216,0.65)', fontSize: '1.15rem', maxWidth: '540px', margin: '0 auto', lineHeight: 1.8, fontFamily: 'var(--font-varela-round)' }}>
                            Every rupee you give goes directly to the animals on Ashoka&apos;s campus — no overhead, all heart.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ══ PROGRESS BAR ══ */}
            <section className="py-12 px-6" style={{ background: 'rgba(45,90,39,0.04)' }}>
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-end justify-between mb-3">
                        <div>
                            <div style={{ fontFamily: 'var(--font-modak)', fontSize: '2rem', color: 'var(--forest-green)' }} className="dark:text-green-400">
                                ₹<AnimatedCounter target={raised} />
                            </div>
                            <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>raised of ₹3,00,000 goal</div>
                        </div>
                        <div className="text-right">
                            <div style={{ fontFamily: 'var(--font-varela-round)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--forest-green)' }} className="dark:text-green-400">
                                {pct}%
                            </div>
                        </div>
                    </div>
                    <div className="h-4 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                        <motion.div
                            className="h-full rounded-full"
                            style={{ background: 'linear-gradient(90deg, var(--forest-green), #4a9a3f)' }}
                            initial={{ width: '0%' }}
                            whileInView={{ width: `${pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: 'easeOut' }}
                        />
                    </div>
                    <p className="text-xs mt-2 text-center" style={{ color: 'var(--muted-foreground)' }}>
                        Funds raised for veterinary care & operations — 2026
                    </p>
                </div>
            </section>

            {/* ══ DONATION FORM ══ */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-10 items-start">

                        {/* Form */}
                        <div className="lg:col-span-3">
                            <div className="glass rounded-3xl p-8">
                                {/* Type toggle */}
                                <div className="flex p-1 rounded-xl mb-8" style={{ background: 'var(--muted)' }}>
                                    {(['one-time', 'monthly'] as const).map((t) => (
                                        <motion.button
                                            key={t}
                                            onClick={() => setType(t)}
                                            className="relative flex-1 py-2.5 rounded-lg text-sm font-bold capitalize"
                                            style={{ color: type === t ? '#fff' : 'var(--muted-foreground)', fontFamily: 'var(--font-varela-round)' }}
                                        >
                                            {type === t && (
                                                <motion.span
                                                    layoutId="type-toggle"
                                                    className="absolute inset-0 rounded-lg"
                                                    style={{ background: 'var(--forest-green)' }}
                                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                                />
                                            )}
                                            <span className="relative z-10">{t === 'one-time' ? '✦ One-time' : '♻️ Monthly'}</span>
                                        </motion.button>
                                    ))}
                                </div>

                                {/* Tier selection */}
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    {[500, 1000, 2000, 5000].map((amt) => (
                                        <motion.button
                                            key={amt}
                                            onClick={() => { setSelectedTier(amt); setCustom(''); }}
                                            className="py-3 rounded-xl font-bold border-2 transition-all"
                                            style={{
                                                background: selectedTier === amt && !custom ? 'var(--forest-green)' : 'transparent',
                                                borderColor: selectedTier === amt && !custom ? 'var(--forest-green)' : 'var(--border)',
                                                color: selectedTier === amt && !custom ? '#fff' : 'var(--foreground)',
                                                fontFamily: 'var(--font-varela-round)',
                                            }}
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            ₹{amt.toLocaleString('en-IN')}
                                        </motion.button>
                                    ))}
                                </div>

                                {/* Custom amount */}
                                <div className="fancy-input mb-6">
                                    <label className="block text-xs font-semibold mb-1.5 tracking-wide uppercase" style={{ color: 'var(--forest-green)' }}>
                                        Custom Amount (₹)
                                    </label>
                                    <input
                                        type="number"
                                        min="1"
                                        placeholder="Enter amount"
                                        value={custom}
                                        onChange={e => { setCustom(e.target.value); setSelectedTier(0); }}
                                    />
                                </div>

                                {/* Summary */}
                                {amount > 0 && (
                                    <motion.div
                                        className="rounded-xl p-4 mb-6 text-sm"
                                        style={{ background: 'rgba(45,90,39,0.08)', border: '1px solid rgba(45,90,39,0.15)' }}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                    >
                                        <span style={{ color: 'var(--forest-green)', fontWeight: 700 }}>₹{amount.toLocaleString('en-IN')}</span>
                                        <span style={{ color: 'var(--muted-foreground)' }}> {type === 'monthly' ? '/month ' : ' '}will be donated to Pawsitive 🐾</span>
                                    </motion.div>
                                )}

                                {/* CTA */}
                                <AnimatePresence>
                                    {celebrating ? (
                                        <motion.div
                                            className="w-full py-4 rounded-2xl text-center font-bold text-white text-lg"
                                            style={{ background: 'var(--terracotta)', fontFamily: 'var(--font-modak)', letterSpacing: '0.02em' }}
                                            initial={{ scale: 0.9 }}
                                            animate={{ scale: [0.9, 1.05, 1] }}
                                            exit={{ scale: 0.9, opacity: 0 }}
                                        >
                                            💛 Thank you! A tail wags for you 🐾
                                        </motion.div>
                                    ) : (
                                        <motion.button
                                            onClick={handleDonate}
                                            className="btn-ripple pulse-glow w-full py-5 rounded-2xl font-bold text-white text-lg"
                                            style={{ background: 'var(--terracotta)', fontFamily: 'var(--font-varela-round)' }}
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            💛 Donate ₹{amount > 0 ? amount.toLocaleString('en-IN') : '...'} {type === 'monthly' ? '/month' : 'Now'}
                                        </motion.button>
                                    )}
                                </AnimatePresence>

                                <p className="text-xs text-center mt-4" style={{ color: 'var(--muted-foreground)' }}>
                                    🔒 Secure · All proceeds directly support campus animals
                                </p>
                            </div>
                        </div>

                        {/* Impact tiers */}
                        <div className="lg:col-span-2 space-y-4">
                            <div style={{ fontFamily: 'var(--font-modak)', fontSize: '1.5rem', color: 'var(--forest-green)' }}
                                className="dark:text-green-400 mb-4">
                                Your Impact
                            </div>
                            {TIERS.map((tier, i) => (
                                <motion.div
                                    key={i}
                                    className="glass rounded-2xl p-4 flex gap-4 items-start cursor-pointer card-morph"
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -3 }}
                                    onClick={() => { setSelectedTier(tier.amount); setCustom(''); }}
                                    style={{
                                        border: selectedTier === tier.amount && !custom ? '2px solid var(--forest-green)' : '2px solid transparent',
                                    }}
                                >
                                    <div className="text-3xl shrink-0">{tier.icon}</div>
                                    <div>
                                        <div style={{ fontWeight: 700, color: 'var(--forest-green)', fontFamily: 'var(--font-varela-round)', fontSize: '0.9rem' }}
                                            className="dark:text-green-400">
                                            ₹{tier.amount.toLocaleString('en-IN')} — {tier.title}
                                        </div>
                                        <p className="text-xs mt-0.5 leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{tier.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
