'use client';

import { useEffect, useRef } from 'react';

export default function PawCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);
    const posRef = useRef({ x: -100, y: -100 });
    const dotPosRef = useRef({ x: -100, y: -100 });
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const cursor = cursorRef.current;
        const dot = dotRef.current;
        if (!cursor || !dot) return;

        const onMove = (e: MouseEvent) => {
            posRef.current = { x: e.clientX, y: e.clientY };
            dotPosRef.current = { x: e.clientX, y: e.clientY };
            cursor.style.opacity = '1';
            dot.style.opacity = '1';
        };

        const onLeave = () => {
            cursor.style.opacity = '0';
            dot.style.opacity = '0';
        };

        const animate = () => {
            // Dot follows immediately
            dot.style.left = `${dotPosRef.current.x}px`;
            dot.style.top = `${dotPosRef.current.y}px`;

            // Cursor follows with spring lag
            const curX = parseFloat(cursor.style.left || '-100');
            const curY = parseFloat(cursor.style.top || '-100');
            const newX = curX + (posRef.current.x - curX) * 0.12;
            const newY = curY + (posRef.current.y - curY) * 0.12;
            cursor.style.left = `${newX}px`;
            cursor.style.top = `${newY}px`;

            rafRef.current = requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseleave', onLeave);
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseleave', onLeave);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <>
            {/* Paw print cursor - follows with lag */}
            <div
                ref={cursorRef}
                className="paw-cursor"
                style={{ opacity: 0, left: '-100px', top: '-100px' }}
                aria-hidden="true"
            >
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Main pad */}
                    <ellipse cx="16" cy="22" rx="8" ry="7" fill="currentColor" opacity="0.5" className="text-green-800 dark:text-green-400" />
                    {/* Toe pads */}
                    <ellipse cx="8" cy="13" rx="3.5" ry="3" fill="currentColor" opacity="0.4" className="text-green-800 dark:text-green-400" />
                    <ellipse cx="16" cy="11" rx="3.5" ry="3" fill="currentColor" opacity="0.4" className="text-green-800 dark:text-green-400" />
                    <ellipse cx="24" cy="13" rx="3.5" ry="3" fill="currentColor" opacity="0.4" className="text-green-800 dark:text-green-400" />
                    <ellipse cx="4" cy="19" rx="2.5" ry="2.5" fill="currentColor" opacity="0.3" className="text-green-800 dark:text-green-400" />
                </svg>
            </div>
            {/* Dot - follows immediately */}
            <div
                ref={dotRef}
                className="paw-cursor-dot"
                style={{ opacity: 0, left: '-100px', top: '-100px' }}
                aria-hidden="true"
            />
        </>
    );
}
