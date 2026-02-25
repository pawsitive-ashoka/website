import type { Metadata } from 'next';
import { Modak, Varela_Round, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';
import PawCursor from '@/components/PawCursor';
import Preloader from '@/components/Preloader';

const modak = Modak({
  variable: '--font-modak',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const varelaRound = Varela_Round({
  variable: '--font-varela-round',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pawsitive | Animal Welfare Club at Ashoka University',
  description:
    'Pawsitive is Ashoka University\'s student-led animal welfare club — dedicated to the care, health, and happiness of campus street dogs and cats since 2018.',
  keywords: ['animal welfare', 'Ashoka University', 'dog adoption', 'campus dogs', 'Pawsitive'],
  openGraph: {
    title: 'Pawsitive | Animal Welfare Club at Ashoka University',
    description: 'Protecting and advocating for animals at Ashoka University since 2018.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${modak.variable} ${varelaRound.variable} ${montserrat.variable} antialiased`}>
        <ThemeProvider>
          <Preloader />
          <PawCursor />
          <div className="min-h-screen" style={{ background: 'var(--background)' }}>
            <Navbar />
            <main>{children}</main>
            <footer style={{ borderTop: '1px solid var(--border)', background: 'rgba(45,90,39,0.04)' }}>
              <div className="mx-auto max-w-6xl px-6 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <div style={{ fontFamily: 'var(--font-modak)', color: 'var(--forest-green)', fontSize: '1.4rem' }} className="dark:text-green-400">
                      🐾 Pawsitive
                    </div>
                    <p className="text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>
                      Animal Welfare Club · Ashoka University, Sonipat
                    </p>
                  </div>
                  <div className="flex gap-6 text-sm" style={{ color: 'var(--muted-foreground)' }}>
                    <a href="/about" className="hover:text-green-700 dark:hover:text-green-400 transition-colors">About</a>
                    <a href="/dogs" className="hover:text-green-700 dark:hover:text-green-400 transition-colors">Our Dogs</a>
                    <a href="/gallery" className="hover:text-green-700 dark:hover:text-green-400 transition-colors">Gallery</a>
                    <a href="/contact" className="hover:text-green-700 dark:hover:text-green-400 transition-colors">Contact</a>
                    <a href="/donate" className="hover:text-green-700 dark:hover:text-green-400 transition-colors">Donate</a>
                  </div>
                  <div>
                    <a
                      href="mailto:pawsitive@ashoka.edu.in"
                      className="text-sm hover:underline"
                      style={{ color: 'var(--terracotta)' }}
                    >
                      📧 pawsitive@ashoka.edu.in
                    </a>
                  </div>
                </div>
                <div className="mt-8 pt-6 text-center text-xs" style={{ borderTop: '1px solid var(--border)', color: 'var(--muted-foreground)' }}>
                  © 2026 Pawsitive — Ashoka University · Made with 🐾 and lots of love
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
