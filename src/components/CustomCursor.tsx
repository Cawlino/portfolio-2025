import { useEffect, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

function subscribeFinePointer(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mq = window.matchMedia('(pointer: fine)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

function getFinePointerSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: fine)').matches;
}

export default function CustomCursor() {
  const prefersReduced = useReducedMotion();
  const isFinePointer = useSyncExternalStore(
    subscribeFinePointer,
    getFinePointerSnapshot,
    () => false
  );
  const enabled = isFinePointer && !prefersReduced;

  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);
  const scaleRaw = useMotionValue(1);
  const opacityRaw = useMotionValue(0);

  // GPU compositor springs (no React state re-renders during pointer movement)
  const orbX = useSpring(rawX, { stiffness: 320, damping: 28, mass: 0.45 });
  const orbY = useSpring(rawY, { stiffness: 320, damping: 28, mass: 0.45 });
  const glowX = useSpring(rawX, { stiffness: 120, damping: 24, mass: 0.9 });
  const glowY = useSpring(rawY, { stiffness: 120, damping: 24, mass: 0.9 });
  const orbScale = useSpring(scaleRaw, { stiffness: 300, damping: 22 });

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      const inArchiveRow = target?.closest('#projects-archive [data-cursor="interactive"]');
      if (inArchiveRow) {
        opacityRaw.set(0);
        return;
      }
      opacityRaw.set(1);

      const interactive = target?.closest('a, button, [role="tab"], [data-cursor="interactive"]');
      scaleRaw.set(interactive ? 1.85 : 1);
    };

    const onLeave = () => {
      opacityRaw.set(0);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [enabled, rawX, rawY, scaleRaw, opacityRaw]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9980] overflow-hidden" aria-hidden="true">
      {/* Soft ambient aura behind cursor (Jomor Design inspired) */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          opacity: opacityRaw,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 h-72 w-72 rounded-full bg-accent-500/[0.06] blur-3xl will-change-transform"
      />

      {/* Trailing follower ring with mix-blend-difference */}
      <motion.div
        style={{
          x: orbX,
          y: orbY,
          scale: orbScale,
          opacity: opacityRaw,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 h-9 w-9 rounded-full border border-accent-300/70 bg-accent-400/10 mix-blend-difference will-change-transform"
      />

      {/* Precision center dot */}
      <motion.div
        style={{
          x: rawX,
          y: rawY,
          opacity: opacityRaw,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-white mix-blend-difference will-change-transform"
      />
    </div>
  );
}
