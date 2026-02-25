'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/dogs', label: 'Our Dogs' },
  { href: '/departments', label: 'Departments' },
  { href: '/team', label: 'Team' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="mx-auto max-w-7xl px-5 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.span
              className="text-2xl"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            >
              🐾
            </motion.span>
            <span
              style={{ fontFamily: 'var(--font-modak)', color: 'var(--forest-green)', fontSize: '1.4rem' }}
              className="dark:text-green-400 transition-colors"
            >
              Pawsitive
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="relative px-3 py-1.5 rounded-full text-sm font-medium transition-colors group"
                style={{ color: pathname === link.href ? 'var(--forest-green)' : 'var(--muted-foreground)' }}
              >
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'rgba(45, 90, 39, 0.1)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 hover:text-green-800 dark:hover:text-green-400 transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              style={{ background: 'rgba(45, 90, 39, 0.1)' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle dark mode"
            >
              <motion.span
                key={theme}
                initial={{ rotate: -30, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 30, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </motion.span>
            </motion.button>

            {/* Donate CTA */}
            <Link href="/donate">
              <motion.span
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white btn-ripple"
                style={{ background: 'var(--terracotta)', fontFamily: 'var(--font-varela-round)' }}
                whileHover={{ scale: 1.04, backgroundColor: 'var(--terracotta-light)' }}
                whileTap={{ scale: 0.96 }}
              >
                💛 Donate
              </motion.span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="block w-5 h-0.5 rounded-full"
                style={{ background: 'var(--forest-green)', transformOrigin: 'center' }}
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="block w-5 h-0.5 rounded-full"
                style={{ background: 'var(--forest-green)' }}
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-0.5 rounded-full"
                style={{ background: 'var(--forest-green)', transformOrigin: 'center' }}
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-x-0 top-[60px] z-[999] lg:hidden glass-strong"
            initial={{ opacity: 0, y: -16, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -16, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ borderBottom: '1px solid var(--border)', overflow: 'hidden' }}
          >
            <nav className="flex flex-col px-5 py-4 gap-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
                    style={{
                      color: pathname === link.href ? 'var(--forest-green)' : 'var(--foreground)',
                      background: pathname === link.href ? 'rgba(45, 90, 39, 0.1)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2 border-t mt-2" style={{ borderColor: 'var(--border)' }}>
                <Link href="/donate">
                  <span className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-xl text-sm font-semibold text-white"
                    style={{ background: 'var(--terracotta)' }}>
                    💛 Donate Now
                  </span>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
