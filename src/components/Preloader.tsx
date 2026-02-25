'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), 2200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    <div className="preloader-paws">
                        {['🐾', '🐾', '🐾', '🐾', '🐾'].map((paw, i) => (
                            <div key={i} className="preloader-paw" style={{ animationDelay: `${i * 0.2}s` }}>
                                {paw}
                            </div>
                        ))}
                    </div>
                    <div className="preloader-text">Pawsitive</div>
                    <motion.p
                        style={{ fontFamily: 'var(--font-varela-round)', color: 'var(--muted-foreground)', fontSize: '0.875rem' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        Animal Welfare Club · Ashoka University
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
