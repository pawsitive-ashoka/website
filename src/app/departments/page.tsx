'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const departments = [
  {
    icon: '🚨',
    title: 'Rescue Operations',
    tagline: 'First response for animals in need.',
    desc: 'Our rescue team is on call for emergencies — injured strays, trapped animals, crisis situations. We coordinate rapid response with local vets and transport animals to safety.',
    tags: ['Emergency Response', 'Field Operations', 'Vet Coordination'],
    color: 'from-rose-50 to-red-100 dark:from-rose-950/40 dark:to-red-950/40',
    accent: '#c4673a',
  },
  {
    icon: '🏥',
    title: 'Medical & Welfare',
    tagline: 'Healing bodies, restoring hope.',
    desc: 'We facilitate vet visits, post-treatment care, vaccination drives, sterilisation programmes, and tick-removal camps to ensure every campus animal stays healthy.',
    tags: ['Veterinary Care', 'Vaccination', 'Sterilisation'],
    color: 'from-blue-50 to-sky-100 dark:from-blue-950/40 dark:to-sky-950/40',
    accent: '#2d5a8e',
  },
  {
    icon: '🏠',
    title: 'Adoption & Outreach',
    tagline: 'Finding forever homes.',
    desc: 'We connect animals ready for adoption with loving families, run adoption drives across campus, and build awareness about responsible pet ownership.',
    tags: ['Adoption Drives', 'Home Checks', 'Follow-ups'],
    color: 'from-emerald-50 to-teal-100 dark:from-emerald-950/40 dark:to-teal-950/40',
    accent: '#2d5a27',
  },
  {
    icon: '📅',
    title: 'Events & Awareness',
    tagline: 'Making the campus care.',
    desc: 'We organise welfare awareness weeks, stall events, workshops, and community drives that bring students closer to the animals and the cause.',
    tags: ['Awareness Weeks', 'Workshops', 'Community Events'],
    color: 'from-violet-50 to-purple-100 dark:from-violet-950/40 dark:to-purple-950/40',
    accent: '#6d28d9',
  },
  {
    icon: '📱',
    title: 'Media & Design',
    tagline: 'Every story deserves to be told.',
    desc: 'Our creative team manages Instagram, creates content, runs campaigns, and tells the stories of our campus animals to build community and support.',
    tags: ['Instagram', 'Content Creation', 'Campaigns'],
    color: 'from-amber-50 to-yellow-100 dark:from-amber-950/40 dark:to-yellow-950/40',
    accent: '#d97706',
  },
  {
    icon: '💰',
    title: 'Finance & Logistics',
    tagline: 'Sustaining the mission.',
    desc: 'We handle fundraising, budgeting, supply procurement, donor relations, and ensure every rupee raised reaches the animals it was meant for.',
    tags: ['Fundraising', 'Donor Relations', 'Budgeting'],
    color: 'from-gray-50 to-slate-100 dark:from-gray-950/40 dark:to-slate-950/40',
    accent: '#475569',
  },
];

export default function DepartmentsPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

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
              🐾 Our Teams
            </div>
            <h1 style={{ fontFamily: 'var(--font-modak)', fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: 'var(--forest-green)', lineHeight: 1.05 }}
              className="dark:text-green-400 mb-4">
              Six Teams.<br />One Shared Mission.
            </h1>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '1.1rem', maxWidth: '540px', lineHeight: 1.7, fontFamily: 'var(--font-varela-round)' }}>
              Click on any department to meet the people and actions that drive Pawsitive every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ DEPARTMENTS GRID ══ */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {departments.map((dept, i) => (
              <motion.div
                key={i}
                className={`relative rounded-2xl bg-gradient-to-br ${dept.color} overflow-hidden cursor-pointer card-morph`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setExpanded(expanded === i ? null : i)}
                layout
              >
                {/* Header — always visible */}
                <div className="p-6">
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{ rotate: expanded === i ? [0, -10, 10, 0] : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {dept.icon}
                  </motion.div>

                  <h3 style={{ fontFamily: 'var(--font-varela-round)', color: 'var(--forest-green)', fontSize: '1.15rem', fontWeight: 700 }}
                    className="dark:text-green-400 mb-1">
                    {dept.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{dept.tagline}</p>

                  {/* Expand arrow */}
                  <motion.div
                    className="absolute top-5 right-5 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: `${dept.accent}18`, color: dept.accent }}
                    animate={{ rotate: expanded === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ↓
                  </motion.div>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t mb-4" style={{ borderColor: `${dept.accent}20` }} />
                        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted-foreground)' }}>
                          {dept.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {dept.tags.map((tag, ti) => (
                            <motion.span
                              key={ti}
                              className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                              style={{ background: dept.accent }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: ti * 0.07 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ JOIN CTA ══ */}
      <section className="py-20 px-6" style={{ background: 'var(--sand-beige-light)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ fontFamily: 'var(--font-modak)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--forest-green)' }}
              className="dark:text-green-400 mb-4">
              Find Your Department
            </div>
            <p style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-varela-round)', marginBottom: '2rem' }}>
              Whether you love being in the field, telling stories, or crunching numbers — there&apos;s a place for you.
            </p>
            <a href="mailto:pawsitive@ashoka.edu.in">
              <motion.span
                className="btn-ripple inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white"
                style={{ background: 'var(--forest-green)', fontFamily: 'var(--font-varela-round)' }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
              >
                🌿 Apply to Join
              </motion.span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
