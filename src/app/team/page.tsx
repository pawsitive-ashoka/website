'use client';

import { motion } from 'framer-motion';

const team = [
  { name: 'Team Member 1', role: 'President', dept: 'Leadership', bio: 'Leading Pawsitive\'s mission and overall direction. The driving force behind our community.', emoji: '👤' },
  { name: 'Team Member 2', role: 'Vice President', dept: 'Leadership', bio: 'Supporting leadership, cross-department coordination, and our long-term vision.', emoji: '👤' },
  { name: 'Team Member 3', role: 'Operations Lead', dept: 'On-Ground', bio: 'Managing day-to-day operations, feeding schedules, and campus logistics.', emoji: '👤' },
  { name: 'Team Member 4', role: 'Events Coordinator', dept: 'Events', bio: 'Planning and executing drives, vet camps, adoption events, and community days.', emoji: '👤' },
  { name: 'Team Member 5', role: 'Social Media Manager', dept: 'Media', bio: 'Telling our story online, building community reach, and running awareness campaigns.', emoji: '👤' },
  { name: 'Team Member 6', role: 'Outreach Coordinator', dept: 'Finance', bio: 'Connecting with partner organisations, donors, and supporters who share our values.', emoji: '👤' },
  { name: 'Team Member 7', role: 'Medical Coordinator', dept: 'Medical', bio: 'Coordinating all vet visits, vaccination drives, and post-treatment care for campus animals.', emoji: '👤' },
  { name: 'Team Member 8', role: 'Fundraising Lead', dept: 'Finance', bio: 'Sustaining the mission through creative fundraising, donor relations, and grant writing.', emoji: '👤' },
];

const deptColors: Record<string, string> = {
  Leadership: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-400',
  'On-Ground': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-400',
  Events: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-400',
  Media: 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-400',
  Finance: 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-400',
  Medical: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-400',
};

export default function TeamPage() {
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
              🐾 The Humans Behind the Paws
            </div>
            <h1 style={{ fontFamily: 'var(--font-modak)', fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: 'var(--forest-green)', lineHeight: 1.05 }}
              className="dark:text-green-400 mb-4">
              Meet the Team
            </h1>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '1.1rem', maxWidth: '540px', lineHeight: 1.7, fontFamily: 'var(--font-varela-round)' }}>
              The passionate people behind every feeding round, every vet visit, every rescued life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ TEAM GRID ══ */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="group relative glass rounded-2xl p-6 text-center card-morph overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
              >
                {/* Avatar */}
                <div className="relative mx-auto mb-4 w-24 h-24">
                  <motion.div
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-100 to-orange-200 dark:from-amber-900/40 dark:to-orange-900/40 flex items-center justify-center text-4xl mx-auto shadow-lg"
                    whileHover={{ scale: 1.1, rotateZ: 5 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      boxShadow: '0 8px 32px rgba(45,90,39,0.15), 0 2px 8px rgba(0,0,0,0.08)',
                    }}
                  >
                    {member.emoji}
                  </motion.div>

                  {/* Online indicator */}
                  <div className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full border-2 border-white"
                    style={{ background: 'var(--forest-green)' }} />
                </div>

                {/* Info */}
                <h3 style={{ fontFamily: 'var(--font-varela-round)', color: 'var(--foreground)', fontWeight: 700, marginBottom: '0.25rem' }}>
                  {member.name}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: 'var(--muted-foreground)' }}>{member.role}</p>

                {/* Dept pill */}
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${deptColors[member.dept] || ''}`}>
                  {member.dept}
                </span>

                {/* Bio — revealed on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(45,90,39,0.92)', backdropFilter: 'blur(8px)' }}
                >
                  <div className="text-3xl mb-3">😊</div>
                  <div style={{ color: '#f5edd8', fontFamily: 'var(--font-varela-round)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    {member.name}
                  </div>
                  <div style={{ color: 'rgba(245,237,216,0.7)', fontSize: '0.8rem', lineHeight: 1.6, textAlign: 'center' }}>
                    {member.bio}
                  </div>
                  {/* Social icons */}
                  <div className="flex gap-3 mt-4">
                    {['in', 'ig'].map((s) => (
                      <motion.a
                        key={s}
                        href="#"
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ background: 'rgba(245,237,216,0.15)', color: '#f5edd8' }}
                        whileHover={{ scale: 1.2, background: 'rgba(245,237,216,0.3)' }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {s === 'in' ? '🔗' : '📸'}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ JOIN CTA ══ */}
      <section className="py-20 px-6 relative overflow-hidden" style={{ background: 'var(--dark-earth)' }}>
        <div className="absolute inset-0 paw-pattern-bg opacity-5" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ fontFamily: 'var(--font-modak)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f5edd8', marginBottom: '1rem' }}>
              Want to join us?
            </div>
            <p style={{ color: 'rgba(245,237,216,0.65)', fontFamily: 'var(--font-varela-round)', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
              We&apos;re always looking for passionate people who care about animals. Every skill helps — from photography to fieldwork.
            </p>
            <a href="mailto:pawsitive@ashoka.edu.in">
              <motion.span
                className="btn-ripple inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white"
                style={{ background: 'var(--terracotta)', fontFamily: 'var(--font-varela-round)' }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
              >
                ✉️ Apply to Join
              </motion.span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
