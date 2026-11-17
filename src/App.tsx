import {
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

function GlobalBlueAura() {
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 26,
    mass: 0.4,
  });

  // Scroll-driven trajectories across the full viewport (GPU transform only)
  const orb1X = useTransform(smoothProgress, [0, 0.5, 1], ['-12%', '46%', '8%']);
  const orb1Y = useTransform(smoothProgress, [0, 0.5, 1], ['-10%', '38%', '72%']);
  const orb1Scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.24, 0.95]);

  const orb2X = useTransform(smoothProgress, [0, 0.5, 1], ['58%', '6%', '52%']);
  const orb2Y = useTransform(smoothProgress, [0, 0.5, 1], ['8%', '56%', '18%']);
  const orb2Scale = useTransform(smoothProgress, [0, 0.5, 1], [1.05, 0.9, 1.2]);

  const orb3X = useTransform(smoothProgress, [0, 0.5, 1], ['24%', '66%', '22%']);
  const orb3Y = useTransform(smoothProgress, [0, 0.5, 1], ['36%', '12%', '68%']);

  const orb4X = useTransform(smoothProgress, [0, 0.5, 1], ['8%', '40%', '64%']);
  const orb4Y = useTransform(smoothProgress, [0, 0.5, 1], ['72%', '28%', '6%']);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#061229] via-[#040914] to-[#061228]"
      aria-hidden="true"
    >
      {/* Orb 1: Cobalt sweep */}
      <motion.div
        style={
          prefersReduced
            ? { left: '-10%', top: '-8%' }
            : { x: orb1X, y: orb1Y, scale: orb1Scale }
        }
        className="absolute top-0 left-0 w-[56vw] h-[56vw] max-w-[760px] max-h-[760px] rounded-full bg-[#1d4ed8]/38 blur-[135px] will-change-transform"
      />

      {/* Orb 2: Cyan-royal counter-sweep */}
      <motion.div
        style={
          prefersReduced
            ? { left: '55%', top: '10%' }
            : { x: orb2X, y: orb2Y, scale: orb2Scale }
        }
        className="absolute top-0 left-0 w-[52vw] h-[52vw] max-w-[700px] max-h-[700px] rounded-full bg-[#0284c7]/32 blur-[140px] will-change-transform"
      />

      {/* Orb 3: Luminous royal blue core */}
      <motion.div
        style={
          prefersReduced
            ? { left: '25%', top: '35%' }
            : { x: orb3X, y: orb3Y }
        }
        className="absolute top-0 left-0 w-[48vw] h-[48vw] max-w-[640px] max-h-[640px] rounded-full bg-[#2563eb]/32 blur-[125px] will-change-transform"
      />

      {/* Orb 4: Deep electric indigo */}
      <motion.div
        style={
          prefersReduced
            ? { left: '10%', top: '70%' }
            : { x: orb4X, y: orb4Y }
        }
        className="absolute top-0 left-0 w-[54vw] h-[54vw] max-w-[720px] max-h-[720px] rounded-full bg-[#1e40af]/35 blur-[145px] will-change-transform"
      />

      {/* Subtle atmospheric radial vignette keeping text contrast crisp */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(3,7,18,0.52)_100%)]" />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-[#040914] text-slate-100 selection:bg-accent-500/30 font-sans relative">
          <GlobalBlueAura />
          <Preloader />
          <CustomCursor />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <Projects />
            <Skills />
            <Experience />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </LanguageProvider>
  );
}

export default App;
