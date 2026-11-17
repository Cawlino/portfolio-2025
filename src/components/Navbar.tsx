import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Download, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PROFILE_LINKS } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const { lang, setLang, t, resumeUrl } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled
            ? 'bg-[#050a15]/85 backdrop-blur-md border-b border-blue-400/15'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand (Dennis Snellenberg style micro-hover) */}
          <MagneticButton strength={0.18}>
            <a
              href="#hero"
              className="group flex items-center gap-2.5 text-sm font-medium text-neutral-100 whitespace-nowrap py-1"
            >
              <span className="inline-block transition-transform duration-500 group-hover:rotate-[360deg] text-accent-400">
                ©
              </span>
              <span className="relative overflow-hidden inline-flex flex-col h-5">
                <span className="transition-transform duration-300 group-hover:-translate-y-full">
                  {t.nav.brandPrefix}{' '}
                  <strong className="font-semibold text-white">Daniel</strong>
                </span>
                <span className="transition-transform duration-300 group-hover:-translate-y-full text-accent-400 font-semibold">
                  Daniel Barrionuevo
                </span>
              </span>
            </a>
          </MagneticButton>

          {/* Availability pill (Desktop recruiter fast-read) */}
          <div className="hidden xl:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-white/10 text-xs text-neutral-300 whitespace-nowrap shrink-0">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{t.nav.availability}</span>
          </div>

          {/* Desktop Navigation + Language Toggle + CV Button */}
          <nav className="hidden md:flex items-center gap-5 shrink-0" aria-label="Primary">
            <ul className="flex items-center gap-5 text-sm text-neutral-300 whitespace-nowrap">
              {t.nav.links.map((item) => (
                <li key={item.id}>
                  <MagneticButton strength={0.22}>
                    <a
                      href={`#${item.id}`}
                      className="relative py-1.5 px-1 hover:text-white transition-colors group whitespace-nowrap"
                    >
                      {item.label}
                      <span className="absolute left-1/2 -bottom-0.5 h-1 w-1 -translate-x-1/2 rounded-full bg-accent-400 scale-0 group-hover:scale-100 transition-transform" />
                    </a>
                  </MagneticButton>
                </li>
              ))}
            </ul>

            <div className="h-4 w-px bg-white/15" aria-hidden="true" />

            {/* PT / EN Switch */}
            <div
              className="inline-flex items-center rounded-full bg-neutral-900 border border-white/10 p-0.5 text-xs font-mono"
              role="group"
              aria-label="Language switcher"
            >
              <button
                type="button"
                onClick={() => setLang('pt')}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === 'pt'
                    ? 'bg-accent-600 text-white font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
                aria-pressed={lang === 'pt'}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === 'en'
                    ? 'bg-accent-600 text-white font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>

            {/* Download Resume PDF */}
            <MagneticButton strength={0.22}>
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900 border border-white/15 hover:border-accent-400 text-xs font-medium text-neutral-100 hover:text-white transition-colors whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5 text-accent-400" />
                <span>{t.nav.downloadCv}</span>
              </a>
            </MagneticButton>

            {/* Primary CTA */}
            <MagneticButton strength={0.25}>
              <a
                href={`mailto:${PROFILE_LINKS.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent-600 hover:bg-accent-500 text-xs font-semibold text-white transition-colors whitespace-nowrap"
              >
                <span>{t.nav.contactCta}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </MagneticButton>
          </nav>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2.5">
            <div
              className="inline-flex items-center rounded-full bg-neutral-900 border border-white/10 p-0.5 text-[11px] font-mono"
              role="group"
              aria-label="Language switcher"
            >
              <button
                type="button"
                onClick={() => setLang('pt')}
                className={`px-2 py-1 rounded-full transition-colors ${
                  lang === 'pt' ? 'bg-accent-600 text-white font-semibold' : 'text-neutral-400'
                }`}
                aria-pressed={lang === 'pt'}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded-full transition-colors ${
                  lang === 'en' ? 'bg-accent-600 text-white font-semibold' : 'text-neutral-400'
                }`}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}
              className="w-10 h-10 rounded-full bg-neutral-900 border border-white/15 flex items-center justify-center text-white"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 md:hidden bg-[#060d1c]/95 backdrop-blur-xl border-b border-blue-400/15 px-6 py-6 shadow-2xl"
          >
            <nav className="flex flex-col gap-4">
              {t.nav.links.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium text-neutral-200 hover:text-accent-400 py-1 border-b border-white/5"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={resumeUrl}
                  download
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-full bg-neutral-900 border border-white/15 text-sm font-medium text-white"
                >
                  <Download className="w-4 h-4 text-accent-400" />
                  <span>{t.nav.downloadCv}</span>
                </a>
                <a
                  href={`mailto:${PROFILE_LINKS.email}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-full bg-accent-600 text-sm font-semibold text-white"
                >
                  <span>{t.nav.contactCta}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
