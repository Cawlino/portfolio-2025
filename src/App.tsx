import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { MotionConfig } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-accent-500/30 font-sans relative">

      <MotionConfig reducedMotion="user"><Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <Footer /></MotionConfig>
    </div>
  );
}

export default App;
