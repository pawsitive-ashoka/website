'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const timeline = [
  { year: '2018', label: 'Founded', desc: 'A small group of students refused to look away from the animals living on campus. Pawsitive was born.' },
  { year: '2019', label: 'First Drive', desc: 'Our first vaccination and sterilisation drive — 15 animals treated. A milestone that proved community action works.' },
  { year: '2020', label: 'Growing Strong', desc: 'Despite the pandemic, we continued feeding schedules and remote advocacy, never leaving campus animals behind.' },
  { year: '2021', label: '50+ Volunteers', desc: 'The community grew. Fifty dedicated volunteers joined our feeding rounds, vet visits, and awareness campaigns.' },
  { year: '2023', label: '100+ Animals', desc: 'Over a hundred animals named, cared for, and known. Each with a story, each with a face we recognise.' },
  { year: '2026', label: 'Today', desc: 'Growing stronger with 300+ volunteers, 4 active departments, and a campus that sees every paw as a life.' },
];

const values = [
  { icon: '💚', title: 'Compassion', desc: 'We lead with empathy. Every animal on this campus is seen, known, and cared for as an individual.' },
  { icon: '🌿', title: 'Responsibility', desc: 'We take ownership for the welfare of campus animals, showing up every single day without exception.' },
  { icon: '🤝', title: 'Community', desc: 'We build bridges between students, faculty, local NGOs, and veterinary professionals.' },
  { icon: '📢', title: 'Advocacy', desc: 'We speak for those who cannot — fighting for humane coexistence between animals and the university.' },
];

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className="flex gap-6 md:gap-10"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Year */}
      <div className="flex flex-col items-center shrink-0">
        <motion.div
          className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm text-white shadow-lg"
          style={{ background: 'var(--forest-green)', fontFamily: 'var(--font-varela-round)' }}
          animate={inView ? { scale: [0, 1.2, 1] } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {item.year}
        </motion.div>
        {index < timeline.length - 1 && (
          <motion.div
            className="w-0.5 flex-1 mt-2"
            style={{ background: 'linear-gradient(to bottom, var(--forest-green), rgba(45,90,39,0.1))', minHeight: '60px' }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        <div style={{ fontFamily: 'var(--font-varela-round)', color: 'var(--forest-green)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}
          className="dark:text-green-400">
          {item.label}
        </div>
        <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.7, maxWidth: '500px' }}>{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* ══ HERO ══ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 paw-pattern-bg opacity-40" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 glass"
              style={{ color: 'var(--forest-green)', border: '1px solid rgba(45,90,39,0.2)' }}>
              🐾 Our Story
            </div>
            <h1 style={{ fontFamily: 'var(--font-modak)', fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'var(--forest-green)', lineHeight: 1.05 }}
              className="dark:text-green-400 mb-6">
              Born from love.<br />Built by community.
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--muted-foreground)', maxWidth: '600px', lineHeight: 1.8, fontFamily: 'var(--font-varela-round)' }}>
              Pawsitive is Ashoka University&apos;s student-led animal welfare club, established in 2018 by students
              who refused to look away. Today, we are a thriving community of welfare advocates united by one belief —
              every life matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ TIMELINE ══ */}
      <section className="py-20" style={{ background: 'var(--sand-beige-light)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ fontFamily: 'var(--font-modak)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--forest-green)' }}
              className="dark:text-green-400">
              Our Journey
            </div>
            <p style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-varela-round)', marginTop: '0.5rem' }}>
              Seven years of showing up for every paw.
            </p>
          </motion.div>

          <div>
            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ CORE VALUES ══ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ fontFamily: 'var(--font-modak)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--forest-green)' }}
              className="dark:text-green-400">
              What We Stand For
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="glass rounded-2xl p-8 text-center card-morph"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                <motion.div
                  className="text-5xl mb-5"
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                >
                  {v.icon}
                </motion.div>
                <h3 style={{ fontFamily: 'var(--font-varela-round)', color: 'var(--forest-green)', fontSize: '1.2rem', marginBottom: '0.75rem' }}
                  className="dark:text-green-400">
                  {v.title}
                </h3>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem', lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MISSION ══ */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'var(--dark-earth)' }}>
        <div className="absolute inset-0 paw-pattern-bg opacity-5" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ fontFamily: 'var(--font-modak)', fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#f5edd8', marginBottom: '1.5rem' }}>
              The Mission
            </div>
            <p style={{ color: 'rgba(245,237,216,0.75)', fontSize: '1.15rem', lineHeight: 1.9, fontFamily: 'var(--font-varela-round)', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
              Through collaboration, education, and hands-on action, Pawsitive strives to build a culture
              of compassion, empathy, and coexistence between animals and the university community.
              We work to alleviate suffering through veterinary care, sterilisation, vaccination, and
              tick-removal drives — while fostering awareness about animal health and responsible pet ownership.
            </p>
            <Link href="/contact">
              <motion.span
                className="btn-ripple inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white"
                style={{ background: 'var(--forest-green)', fontFamily: 'var(--font-varela-round)' }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
              >
                🌿 Join the Mission
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
