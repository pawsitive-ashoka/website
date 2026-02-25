'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [values, setValues] = useState({ name: '', email: '', message: '', subject: 'General Enquiry' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div style={{ paddingTop: '80px' }}>
            {/* ══ HERO ══ */}
            <section className="py-16 px-6 relative overflow-hidden">
                <div className="absolute inset-0 paw-pattern-bg opacity-30" />
                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 glass"
                            style={{ color: 'var(--forest-green)', border: '1px solid rgba(45,90,39,0.2)' }}>
                            🐾 Reach Out
                        </div>
                        <h1 style={{ fontFamily: 'var(--font-modak)', fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: 'var(--forest-green)', lineHeight: 1.05 }}
                            className="dark:text-green-400 mb-4">
                            Let&apos;s Connect
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* ══ SPLIT LAYOUT ══ */}
            <section className="px-6 pb-24">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* LEFT — FORM */}
                        <motion.div
                            className="glass rounded-3xl p-8"
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {submitted ? (
                                <motion.div
                                    className="text-center py-12"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ type: 'spring' }}
                                >
                                    <div className="text-6xl mb-4">🐾</div>
                                    <div style={{ fontFamily: 'var(--font-modak)', fontSize: '2rem', color: 'var(--forest-green)' }} className="dark:text-green-400 mb-2">
                                        Thank you!
                                    </div>
                                    <p style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-varela-round)' }}>
                                        We&apos;ll get back to you within 24 hours. Every message matters to us.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div style={{ fontFamily: 'var(--font-modak)', fontSize: '1.6rem', color: 'var(--forest-green)' }}
                                        className="dark:text-green-400 mb-6">
                                        Send us a message
                                    </div>

                                    {/* Name */}
                                    <div className="fancy-input">
                                        <label className="block text-xs font-semibold mb-1.5 tracking-wide uppercase" style={{ color: 'var(--forest-green)' }}>
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Your full name"
                                            value={values.name}
                                            onChange={e => setValues(v => ({ ...v, name: e.target.value }))}
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="fancy-input">
                                        <label className="block text-xs font-semibold mb-1.5 tracking-wide uppercase" style={{ color: 'var(--forest-green)' }}>
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="your@email.com"
                                            value={values.email}
                                            onChange={e => setValues(v => ({ ...v, email: e.target.value }))}
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div className="fancy-input">
                                        <label className="block text-xs font-semibold mb-1.5 tracking-wide uppercase" style={{ color: 'var(--forest-green)' }}>
                                            Subject
                                        </label>
                                        <select
                                            value={values.subject}
                                            onChange={e => setValues(v => ({ ...v, subject: e.target.value }))}
                                            style={{ width: '100%', padding: '0.75rem 1rem', border: '2px solid var(--border)', borderRadius: '0.75rem', background: 'transparent', color: 'var(--foreground)', fontFamily: 'inherit', outline: 'none', cursor: 'none' }}
                                            className="focus:border-green-700 transition-colors"
                                        >
                                            <option>General Enquiry</option>
                                            <option>Volunteer with Pawsitive</option>
                                            <option>Adoption Enquiry</option>
                                            <option>Emergency Animal Rescue</option>
                                            <option>Donation Question</option>
                                            <option>Partnership / Collaboration</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="fancy-input">
                                        <label className="block text-xs font-semibold mb-1.5 tracking-wide uppercase" style={{ color: 'var(--forest-green)' }}>
                                            Message
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            placeholder="Tell us how we can help..."
                                            value={values.message}
                                            onChange={e => setValues(v => ({ ...v, message: e.target.value }))}
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className="btn-ripple w-full py-4 rounded-xl font-bold text-white"
                                        style={{ background: 'var(--forest-green)', fontFamily: 'var(--font-varela-round)' }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Send Message 🌿
                                    </motion.button>
                                </form>
                            )}
                        </motion.div>

                        {/* RIGHT — INFO */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        >
                            {/* Emergency */}
                            <motion.div
                                className="rounded-3xl p-6 relative overflow-hidden"
                                style={{ background: 'linear-gradient(135deg, rgba(196,103,58,0.1), rgba(196,103,58,0.05))', border: '2px solid rgba(196,103,58,0.25)' }}
                                whileHover={{ y: -4 }}
                            >
                                <div className="text-3xl mb-3">🚨</div>
                                <div style={{ fontFamily: 'var(--font-varela-round)', fontWeight: 700, color: 'var(--terracotta)', fontSize: '1rem', marginBottom: '0.25rem' }}>
                                    Emergency Rescue
                                </div>
                                <p className="text-sm mb-3" style={{ color: 'var(--muted-foreground)' }}>
                                    Found an injured or distressed animal on campus? Reach us immediately.
                                </p>
                                <a href="tel:+91XXXXXXXXXX" className="font-bold text-xl" style={{ color: 'var(--terracotta)' }}>
                                    +91 XXXX XXX XXX
                                </a>
                            </motion.div>

                            {/* Email */}
                            <motion.div className="glass rounded-3xl p-6" whileHover={{ y: -4 }}>
                                <div className="text-3xl mb-3">📧</div>
                                <div style={{ fontFamily: 'var(--font-varela-round)', fontWeight: 700, color: 'var(--foreground)', marginBottom: '0.25rem' }}>Email Us</div>
                                <a href="mailto:pawsitive@ashoka.edu.in" className="font-medium hover:underline" style={{ color: 'var(--forest-green)' }}>
                                    pawsitive@ashoka.edu.in
                                </a>
                            </motion.div>

                            {/* Location */}
                            <motion.div className="glass rounded-3xl p-6" whileHover={{ y: -4 }}>
                                <div className="text-3xl mb-3">📍</div>
                                <div style={{ fontFamily: 'var(--font-varela-round)', fontWeight: 700, color: 'var(--foreground)', marginBottom: '0.25rem' }}>Campus Location</div>
                                <p className="text-sm" style={{ color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
                                    Ashoka University<br />
                                    Rajiv Gandhi Education City<br />
                                    Sonipat, Haryana 131029
                                </p>
                            </motion.div>

                            {/* Social */}
                            <motion.div className="glass rounded-3xl p-6" whileHover={{ y: -4 }}>
                                <div style={{ fontFamily: 'var(--font-varela-round)', fontWeight: 700, color: 'var(--foreground)', marginBottom: '1rem' }}>Follow Along</div>
                                <div className="flex gap-3">
                                    {[
                                        { label: 'Instagram', icon: '📸', href: '#' },
                                        { label: 'LinkedIn', icon: '🔗', href: '#' },
                                    ].map((s) => (
                                        <motion.a
                                            key={s.label}
                                            href={s.href}
                                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
                                            style={{ background: 'rgba(45,90,39,0.1)', color: 'var(--forest-green)' }}
                                            whileHover={{ scale: 1.08, background: 'rgba(45,90,39,0.2)' }}
                                            whileTap={{ scale: 0.96 }}
                                        >
                                            {s.icon} {s.label}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
