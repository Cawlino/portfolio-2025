import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// "Sea Foam" Particle
// Uses random offsets and intense blur to simulate frothy water
const SeaFoam = React.memo(({ x, y, id }: { x: number, y: number, id: number }) => {
    // Generate random variations for each particle to look organic
    // We use a pseudo-random based on ID to keep it consistent during renders if needed, 
    // but here simple math is fine since it animates and disappears.
    const randomOffset = (id % 5) * 10 - 20;
    const size = 40 + (id % 3) * 20;

    return (
        <motion.div
            initial={{ opacity: 0.6, scale: 0.5, x: 0, y: 0 }}
            animate={{
                opacity: 0,
                scale: 2,
                x: randomOffset, // Drift slightly
                y: randomOffset * -0.5
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ left: x, top: y, width: size, height: size }}
            className="absolute rounded-full bg-cyan-100/30 blur-[12px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen pointer-events-none"
        />
    );
});

const OceanBackground = () => {
    const mouseX = useMotionValue(window.innerWidth / 2);
    const mouseY = useMotionValue(window.innerHeight / 2);

    const springConfig = { damping: 50, stiffness: 50 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const x1 = useTransform(x, [0, window.innerWidth], [-20, 20]);
    const y1 = useTransform(y, [0, window.innerHeight], [-20, 20]);

    // Foam Trail Logic
    const [foamParticles, setFoamParticles] = useState<{ x: number, y: number, id: number }[]>([]);
    const lastPos = useRef({ x: 0, y: 0 });
    const particleCount = useRef(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // Calculate distance
            const dx = e.clientX - lastPos.current.x;
            const dy = e.clientY - lastPos.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Spawn foam more frequently (every 25px) for a smoother trail
            if (distance > 25) {
                // Spawn a burst of tiny particles occasionally? 
                // For now, simpler foam blobs works best for performance.
                const newId = particleCount.current++;
                const newParticle = { x: e.clientX, y: e.clientY, id: newId };

                setFoamParticles(prev => {
                    const updated = [...prev, newParticle];
                    if (updated.length > 25) return updated.slice(updated.length - 25);
                    return updated;
                });

                lastPos.current = { x: e.clientX, y: e.clientY };

                // Auto-cleanup
                setTimeout(() => {
                    setFoamParticles(prev => prev.filter(p => p.id !== newId));
                }, 1200);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-slate-950 pointer-events-none">
            {/* Deep Ocean Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0f172a] to-blue-950/40" />

            {/* Ambient Currents */}
            <motion.div
                style={{ x: x1, y: y1 }}
                className="absolute inset-0 opacity-50 mix-blend-screen"
            >
                <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-violet-900/10 blur-[100px] animate-pulse" />
                <div className="absolute bottom-[20%] right-[20%] w-[50vw] h-[50vw] rounded-full bg-cyan-900/10 blur-[120px]" />
            </motion.div>

            {/* The Foam Trail */}
            <div className="absolute inset-0">
                {foamParticles.map(p => (
                    <SeaFoam key={p.id} x={p.x} y={p.y} id={p.id} />
                ))}
            </div>

            {/* Subtle light follow */}
            <motion.div
                style={{ x, y }}
                className="absolute w-[200px] h-[200px] bg-cyan-400/5 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
            />

            {/* Texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')] opacity-30" />
        </div>
    );
};

export default OceanBackground;
