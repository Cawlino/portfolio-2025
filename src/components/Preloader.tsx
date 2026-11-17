import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const GREETINGS = [
  'Olá',
  'Hello',
  'Full Stack',
  'Mobile',
  'Daniel Barrionuevo',
];

const SESSION_KEY = 'portfolio_preloader_seen';

export default function Preloader() {
  const prefersReduced = useReducedMotion();
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return false;
      return window.sessionStorage.getItem(SESSION_KEY) !== '1';
    } catch {
      return false;
    }
  });
  const [wordIndex, setWordIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible || prefersReduced) {
      try {
        window.sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        // Ignore storage errors
      }
      return;
    }

    const totalDuration = 1350;
    const start = performance.now();
    let rafId = 0;
    let finishTimer = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const ratio = Math.min(1, elapsed / totalDuration);
      setProgress(Math.round(ratio * 100));

      const nextWordIdx = Math.min(
        GREETINGS.length - 1,
        Math.floor(ratio * GREETINGS.length)
      );
      setWordIndex(nextWordIdx);

      if (ratio < 1) {
        rafId = window.requestAnimationFrame(tick);
      } else {
        try {
          window.sessionStorage.setItem(SESSION_KEY, '1');
        } catch {
          // Ignore storage errors
        }
        finishTimer = window.setTimeout(() => setIsVisible(false), 120);
      }
    };

    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(finishTimer);
    };
  }, [isVisible, prefersReduced]);

  const shouldRender = isVisible && !prefersReduced;

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div
          key="preloader"
          initial={{ y: '0%' }}
          exit={{
            y: '-105%',
            transition: { duration: 0.72, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9990] flex flex-col items-center justify-center bg-[#040812] text-white select-none pointer-events-none"
          aria-hidden="true"
        >
          {/* Central dynamic greeting (Adrien Laurent + Dennis Snellenberg inspired) */}
          <div className="relative flex flex-col items-center gap-6 px-6 text-center">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.3em] text-accent-400">
              <span className="h-2 w-2 rounded-full bg-accent-400 animate-pulse" />
              <span>Portfolio · 2026</span>
            </div>

            <div className="h-14 sm:h-20 flex items-center justify-center overflow-hidden">
              <motion.p
                key={wordIndex}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.2 }}
                className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-100"
              >
                {GREETINGS[wordIndex]}
              </motion.p>
            </div>

            {/* Progress counter & sleek GPU bar */}
            <div className="w-48 sm:w-64 space-y-2">
              <div className="h-[2px] w-full bg-slate-800 overflow-hidden rounded-full">
                <div
                  className="h-full bg-accent-400 origin-left will-change-transform"
                  style={{ transform: `scaleX(${progress / 100})` }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>MARINGÁ · BR</span>
                <span>{String(progress).padStart(2, '0')}%</span>
              </div>
            </div>
          </div>

          {/* Curved bottom SVG edge for smooth exit */}
          <svg
            className="absolute top-[99%] left-0 w-full h-24 fill-[#040812] pointer-events-none"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L1440,0 L1440,20 Q720,120 0,20 Z" />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
