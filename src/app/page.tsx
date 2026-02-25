'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

// Animated counter hook
function useCounter(target: number, isActive: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isActive) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isActive, target]);
  return count;
}

// Letter-by-letter animation component
function SplitText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.5, delay: delay + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

// Floating paw particles
function PawParticles() {
  const paws = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${5 + (i * 8.5) % 95}%`,
    size: 0.8 + (i % 4) * 0.3,
    duration: 8 + (i % 5) * 3,
    delay: (i % 6) * 1.5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {paws.map((p) => (
        <div
          key={p.id}
          className="paw-particle"
          style={{
            left: p.left,
            bottom: '-60px',
            fontSize: `${p.size}rem`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          🐾
        </div>
      ))}
    </div>
  );
}

// Counter card
function StatCard({ value, suffix, label, isActive }: { value: number; suffix: string; label: string; isActive: boolean }) {
  const count = useCounter(value, isActive);
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div style={{ fontFamily: 'var(--font-modak)', fontSize: 'clamp(3rem, 7vw, 5.5rem)', color: '#f5edd8', lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div style={{ color: 'rgba(245,237,216,0.7)', fontFamily: 'var(--font-varela-round)', marginTop: '0.5rem', fontSize: '1rem' }}>
        {label}
      </div>
    </motion.div>
  );
}

const storyLines = [
  { text: 'Some were abandoned.', bg: 'radial-gradient(ellipse at center, rgba(196,103,58,0.08) 0%, transparent 70%)' },
  { text: 'Some were injured.', bg: 'radial-gradient(ellipse at center, rgba(92,61,30,0.08) 0%, transparent 70%)' },
  { text: 'All of them deserved better.', bg: 'radial-gradient(ellipse at center, rgba(45,90,39,0.08) 0%, transparent 70%)' },
];

const dogPreviews = [
  { name: 'Bruno', desc: 'The campus guardian — loyal, gentle, always there.', emoji: '🐕', status: 'Campus Regular', color: 'from-amber-100 to-orange-200 dark:from-amber-900/30 dark:to-orange-900/30' },
  { name: 'Sona', desc: 'Rescued from the road, healing beautifully.', emoji: '🐩', status: 'Under Treatment', color: 'from-rose-100 to-pink-200 dark:from-rose-900/30 dark:to-pink-900/30' },
  { name: 'Kalu', desc: 'Playful, curious, looking for a forever home.', emoji: '🐈', status: 'Available', color: 'from-emerald-100 to-teal-200 dark:from-emerald-900/30 dark:to-teal-900/30' },
  { name: 'Moti', desc: 'Vaccinated & loved — part of the Ashoka family.', emoji: '🦮', status: 'Sponsored', color: 'from-violet-100 to-purple-200 dark:from-violet-900/30 dark:to-purple-900/30' },
  { name: 'Coco', desc: 'A survivor who found her people.', emoji: '🐕‍🦺', status: 'Campus Regular', color: 'from-yellow-100 to-amber-200 dark:from-yellow-900/30 dark:to-amber-900/30' },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  const impactInView = useInView(impactRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section ref={heroRef} className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* BG */}
        <motion.div className="hero-bg absolute inset-0" style={{ y: heroY }} />

        {/* Decorative blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--forest-green) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--terracotta) 0%, transparent 70%)' }} />

        {/* Content */}
        <motion.div
          className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24"
          style={{ opacity: heroOpacity }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 glass"
            style={{ color: 'var(--forest-green)', border: '1px solid rgba(45,90,39,0.2)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            🐾 Animal Welfare Club · Ashoka University · Est. 2018
          </motion.div>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: 'var(--font-modak)',
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              color: 'var(--forest-green)',
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              marginBottom: '1.5rem',
            }}
            className="dark:text-green-400"
          >
            <SplitText text="Every Paw" delay={2.5} />
            <br />
            <SplitText text="Has a Story." delay={2.9} />
          </h1>

          {/* Subtext */}
          <motion.p
            style={{
              fontFamily: 'var(--font-varela-round)',
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
              color: 'var(--muted-foreground)',
              maxWidth: '600px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 3.6 }}
          >
            Protecting and advocating for animals at Ashoka University — one rescue, one recovery, one tail wag at a time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 3.8 }}
          >
            <Link href="/contact">
              <motion.span
                className="btn-ripple inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base shadow-lg"
                style={{ background: 'var(--forest-green)', fontFamily: 'var(--font-varela-round)' }}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(45,90,39,0.3)' }}
                whileTap={{ scale: 0.97 }}
              >
                🌿 Join the Movement
              </motion.span>
            </Link>
            <Link href="/donate">
              <motion.span
                className="btn-ripple inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border-2"
                style={{
                  borderColor: 'var(--terracotta)',
                  color: 'var(--terracotta)',
                  fontFamily: 'var(--font-varela-round)',
                  background: 'transparent',
                }}
                whileHover={{ scale: 1.05, background: 'var(--terracotta)', color: '#fff' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                💛 Donate Now
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--muted-foreground)' }}>Scroll</span>
          <motion.div
            className="w-px h-12 rounded-full"
            style={{ background: 'linear-gradient(to bottom, var(--forest-green), transparent)' }}
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          SCROLL STORYTELLING
      ══════════════════════════════════════ */}
      <section className="py-4">
        {storyLines.map((line, i) => (
          <motion.div
            key={i}
            className="min-h-[60vh] flex items-center justify-center relative overflow-hidden"
            style={{ background: line.bg }}
          >
            <motion.h2
              style={{
                fontFamily: 'var(--font-modak)',
                fontSize: 'clamp(2rem, 7vw, 6rem)',
                color: 'var(--foreground)',
                textAlign: 'center',
                padding: '0 2rem',
                lineHeight: 1.2,
              }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {line.text}
            </motion.h2>
          </motion.div>
        ))}

        {/* Resolution line */}
        <motion.div
          className="min-h-[50vh] flex items-center justify-center"
          style={{ background: 'radial-gradient(ellipse at center, rgba(45,90,39,0.06) 0%, transparent 70%)' }}
        >
          <motion.div
            className="text-center px-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ fontFamily: 'var(--font-modak)', fontSize: 'clamp(1.5rem, 5vw, 4rem)', color: 'var(--forest-green)' }}
              className="dark:text-green-400">
              We are here to change that.
            </div>
            <div style={{ fontFamily: 'var(--font-varela-round)', color: 'var(--muted-foreground)', marginTop: '1rem', fontSize: '1.1rem' }}>
              Pawsitive — making every day count for campus animals since 2018.
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          IMPACT IN MOTION
      ══════════════════════════════════════ */}
      <section ref={impactRef} className="counter-section relative py-28 overflow-hidden">
        <div className="counter-bg absolute inset-0" />
        <PawParticles />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ fontFamily: 'var(--font-modak)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f5edd8', marginBottom: '0.5rem' }}>
              Our Impact in Numbers
            </div>
            <div style={{ color: 'rgba(245,237,216,0.65)', fontFamily: 'var(--font-varela-round)' }}>
              Real lives. Real change.
            </div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <StatCard value={120} suffix="+" label="Dogs Rescued" isActive={impactInView} />
            <StatCard value={80} suffix="+" label="Adoptions Facilitated" isActive={impactInView} />
            <StatCard value={300} suffix="+" label="Student Volunteers" isActive={impactInView} />
            <StatCard value={2} suffix="L+" label="₹ Raised for Treatment" isActive={impactInView} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DOGS PREVIEW — HORIZONTAL SCROLL
      ══════════════════════════════════════ */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ fontFamily: 'var(--font-modak)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--forest-green)' }}
              className="dark:text-green-400 mb-2">
              Meet the Pack
            </div>
            <p style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-varela-round)' }}>
              The residents who call Ashoka University home.
            </p>
          </motion.div>

          <div className="h-scroll-track pb-4">
            {dogPreviews.map((dog, i) => (
              <Link key={i} href="/dogs" className="h-scroll-item block">
                <motion.div
                  className={`group relative h-80 rounded-2xl bg-gradient-to-br ${dog.color} overflow-hidden card-morph`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Emoji with wag animation */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                    <div className="text-7xl">
                      <span className="inline-block group-hover:animate-bounce">{dog.emoji}</span>
                      <span className="wag-tail ml-1 text-4xl opacity-50">🐾</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-modak)', fontSize: '1.6rem', color: 'var(--forest-green)' }} className="dark:text-green-400 text-center">
                        {dog.name}
                      </div>
                      <div className="text-center text-sm mt-1" style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-varela-round)' }}>
                        {dog.desc}
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold glass"
                      style={{ color: 'var(--forest-green)', border: '1px solid rgba(45,90,39,0.2)' }}>
                      {dog.status}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="text-xs font-semibold tracking-wider uppercase glass px-4 py-2 rounded-full"
                      style={{ color: 'var(--forest-green)' }}>
                      View Profile →
                    </span>
                  </motion.div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Link href="/dogs">
              <motion.span
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: 'var(--forest-green)', fontFamily: 'var(--font-varela-round)' }}
                whileHover={{ x: 6 }}
              >
                See all animals →
              </motion.span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHAT WE DO — GRID
      ══════════════════════════════════════ */}
      <section className="py-24" style={{ background: 'var(--sand-beige-light)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ fontFamily: 'var(--font-modak)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--forest-green)' }}
              className="dark:text-green-400 mb-2">
              What We Do
            </div>
            <p style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-varela-round)' }}>Six pillars of action, every single day.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🍖', title: 'Daily Care & Monitoring', desc: 'Regular feeding and health monitoring for all campus animals, every day without fail.' },
              { icon: '🏥', title: 'Veterinary Support', desc: 'Coordinating vet visits, hospitalisation, and post-treatment care for injured animals.' },
              { icon: '💉', title: 'Sterilisation & Vaccination', desc: 'Humane drives to control population and prevent disease across the campus.' },
              { icon: '🏠', title: 'Adoption & Rehabilitation', desc: 'Connecting animals with loving homes and encouraging responsible ownership.' },
              { icon: '📚', title: 'Education & Awareness', desc: 'Workshops on animal health, welfare, and compassionate coexistence.' },
              { icon: '🤝', title: 'Student Engagement', desc: 'Opportunities for students to participate in welfare efforts and build lasting empathy.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass rounded-2xl p-6 card-morph"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 style={{ color: 'var(--forest-green)', marginBottom: '0.5rem' }} className="dark:text-green-400 font-bold">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA — DARK DRAMATIC
      ══════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden" style={{ background: 'var(--dark-earth)' }}>
        {/* Background paw pattern */}
        <div className="absolute inset-0 opacity-5 paw-pattern-bg" />
        <PawParticles />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                fontFamily: 'var(--font-modak)',
                fontSize: 'clamp(2.5rem, 7vw, 6rem)',
                color: '#f5edd8',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}
            >
              Be the reason<br />a tail wags today.
            </div>
            <p style={{ color: 'rgba(245,237,216,0.6)', fontFamily: 'var(--font-varela-round)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '480px', margin: '0 auto 3rem' }}>
              Whether you volunteer, donate, or simply spread the word — every action changes a life.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5">
              <Link href="/donate">
                <motion.span
                  className="btn-ripple pulse-glow inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-white text-lg"
                  style={{ background: 'var(--terracotta)', fontFamily: 'var(--font-varela-round)' }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                >
                  💛 Donate Now
                </motion.span>
              </Link>
              <Link href="/contact">
                <motion.span
                  className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-lg border-2"
                  style={{ borderColor: 'rgba(245,237,216,0.3)', color: '#f5edd8', fontFamily: 'var(--font-varela-round)' }}
                  whileHover={{ borderColor: 'rgba(245,237,216,0.8)', scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  🌿 Get Involved
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
