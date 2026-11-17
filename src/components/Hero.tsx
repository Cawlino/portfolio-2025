import { useRef, useState } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Pause,
  Play,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PROFILE_LINKS } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

function wrapRange(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

export default function Hero() {
  const { lang, t, resumeUrl } = useLanguage();
  const prefersReduced = useReducedMotion();
  const [marqueePaused, setMarqueePaused] = useState(false);

  const isMarqueeRunning = !prefersReduced && !marqueePaused;

  // Scroll-synced GPU marquee (accelerates and flips direction with page scroll velocity)
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 380 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4.5], {
    clamp: false,
  });
  const directionFactor = useRef<number>(1);

  useAnimationFrame((_, delta) => {
    if (!isMarqueeRunning) return;

    const dt = Math.min(delta, 50) / 1000;
    const v = velocityFactor.get();

    if (v < -0.05) directionFactor.current = -1;
    else if (v > 0.05) directionFactor.current = 1;

    let moveBy = directionFactor.current * -2.6 * dt;
    moveBy += directionFactor.current * Math.abs(v) * -2.1 * dt;

    baseX.set(wrapRange(-50, 0, baseX.get() + moveBy));
  });

  const marqueeX = useTransform(baseX, (v) => `${v}%`);

  const marqueePhrases =
    lang === 'pt'
      ? [
          { text: 'Daniel Barrionuevo', outline: false },
          { text: 'Desenvolvedor Full Stack & Mobile', outline: true },
          { text: 'React · Next.js · React Native · Python · IA', outline: false },
          { text: 'Disponível para Projetos & Times', outline: true },
        ]
      : [
          { text: 'Daniel Barrionuevo', outline: false },
          { text: 'Full Stack & Mobile Developer', outline: true },
          { text: 'React · Next.js · React Native · Python · AI', outline: false },
          { text: 'Available for Product Teams', outline: true },
        ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-20 pb-6 overflow-hidden bg-transparent border-b border-blue-400/15"
    >
      {/* Monumental Full-Height Portrait Centerpiece (Seamless radial fade into Global Blue Aura) */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none hidden lg:flex absolute inset-x-0 top-6 bottom-0 justify-center items-end z-[1]"
        aria-hidden="true"
      >
        <div className="relative h-full max-h-[94vh] aspect-[3/4] flex items-end justify-center">
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt=""
            className="h-full w-full object-cover object-top select-none [mask-image:radial-gradient(ellipse_54%_60%_at_50%_42%,black_30%,transparent_80%)]"
          />
        </div>
      </motion.div>

      {/* Main 3-Column Foreground Stage */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 pt-4 md:pt-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        {/* Mobile Full-Width Portrait Showcase */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="lg:hidden relative mx-auto w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-blue-400/25 bg-[#07142c]/60 backdrop-blur-md shadow-[0_25px_70px_-15px_rgba(37,99,235,0.45)]"
        >
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Daniel Barrionuevo Gomes"
            className="w-full h-full object-cover object-top"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#040914] via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />
          <div className="absolute bottom-3.5 inset-x-3.5 flex items-center justify-between gap-2 px-3.5 py-2 rounded-full bg-[#061024]/85 backdrop-blur-md border border-blue-400/25">
            <div className="flex items-center gap-2 min-w-0">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
              <span className="text-xs font-medium text-slate-100 truncate">
                {t.hero.photoBadge}
              </span>
            </div>
            <span className="text-[10px] font-mono text-accent-300 shrink-0">2026</span>
          </div>
        </motion.div>

        {/* Left Column: Location Badge (Static) + Recruiter Quick Triage */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 flex flex-col items-start gap-5 order-2 lg:order-1"
        >
          {/* Static Location Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#07132b]/75 backdrop-blur-md border border-blue-400/25 text-xs font-medium text-slate-200 shadow-lg">
            <MapPin className="w-3.5 h-3.5 text-accent-400 shrink-0" />
            <span>{t.hero.locationBottom}</span>
          </div>

          {/* Triage badges for recruiters */}
          <div className="flex flex-wrap gap-2">
            {t.hero.triageBadges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 rounded-full bg-[#07132b]/75 backdrop-blur-md border border-blue-400/20 text-xs text-slate-200"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Recruiter KPI strip */}
          <div className="grid grid-cols-2 gap-3 w-full pt-1">
            {t.hero.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-3.5 rounded-xl bg-[#07132b]/75 backdrop-blur-md border border-blue-400/20 shadow-lg"
              >
                <p className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {metric.value}
                </p>
                <p className="text-[11px] text-blue-100/75 mt-0.5 leading-snug">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Open Center Column on Desktop so Full Portrait shines clearly */}
        <div className="hidden lg:flex lg:col-span-4 items-end justify-center self-end pb-4 order-2">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#061126]/75 backdrop-blur-md border border-blue-400/25 shadow-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
            <span className="text-xs font-medium text-slate-100">
              {t.hero.photoBadge}
            </span>
            <span className="text-[10px] font-mono text-accent-300">· 2026</span>
          </div>
        </div>

        {/* Right Column: Role Title + Summary + Magnetic Action Circles */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 flex flex-col items-start gap-5 order-3 p-5 sm:p-6 lg:p-0 rounded-2xl bg-[#07132b]/65 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border border-blue-400/15 lg:border-0"
        >
          <div className="flex items-center gap-3 text-accent-400">
            <ArrowDownRight className="w-7 h-7 stroke-[1.75]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-200/80">
              Daniel Barrionuevo Gomes
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl xl:text-[42px] font-semibold tracking-tight text-white leading-[1.12] drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            {t.hero.roleLine1}
            <span className="block text-accent-400">{t.hero.roleLine2}</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">
            {t.hero.summary}
          </p>

          {/* Primary & Resume Buttons (Magnetic) */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <MagneticButton strength={0.25}>
              <a
                href="#flagships"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-600 hover:bg-accent-500 text-sm font-semibold text-white transition-colors shadow-[0_10px_30px_rgba(37,99,235,0.45)]"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.25}>
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#07132b]/85 backdrop-blur-md border border-blue-400/30 hover:border-accent-400 text-sm font-medium text-slate-100 hover:text-white transition-colors"
              >
                <Download className="w-4 h-4 text-accent-400" />
                <span>{t.hero.ctaResume}</span>
              </a>
            </MagneticButton>
          </div>

          {/* Magnetic Circular Social Pills ("as bolinhas") */}
          <div className="flex items-center gap-3 pt-1">
            <MagneticButton strength={0.35}>
              <a
                href={PROFILE_LINKS.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-11 h-11 rounded-full bg-[#07132b]/85 backdrop-blur-md border border-blue-400/25 hover:border-accent-400 hover:bg-accent-600 text-slate-200 hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.35}>
              <a
                href={PROFILE_LINKS.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="w-11 h-11 rounded-full bg-[#07132b]/85 backdrop-blur-md border border-blue-400/25 hover:border-accent-400 hover:bg-accent-600 text-slate-200 hover:text-white flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.35}>
              <a
                href={PROFILE_LINKS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="w-11 h-11 rounded-full bg-[#07132b]/85 backdrop-blur-md border border-blue-400/25 hover:border-accent-400 hover:bg-accent-600 text-slate-200 hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.35}>
              <a
                href={`mailto:${PROFILE_LINKS.email}`}
                aria-label="Email"
                title={PROFILE_LINKS.email}
                className="w-11 h-11 rounded-full bg-[#07132b]/85 backdrop-blur-md border border-blue-400/25 hover:border-accent-400 hover:bg-accent-600 text-slate-200 hover:text-white flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll-Synced Translucent Marquee (Refined & Subtle) */}
      <div className="relative z-10 mt-8">
        <div className="overflow-hidden whitespace-nowrap select-none border-y border-blue-400/10 bg-[#050d20]/30 backdrop-blur-[3px] py-3.5">
          <motion.div
            style={prefersReduced ? undefined : { x: marqueeX }}
            className="flex w-max will-change-transform items-center"
          >
            {[0, 1].map((halfIdx) => (
              <div
                key={halfIdx}
                className="flex items-center shrink-0"
                aria-hidden={halfIdx > 0}
              >
                {[0, 1].map((repIdx) =>
                  marqueePhrases.map((item, pIdx) => (
                    <span
                      key={`${halfIdx}-${repIdx}-${pIdx}`}
                      className="inline-flex items-center text-[clamp(1.25rem,2.6vw,2.25rem)] leading-none tracking-[0.14em] uppercase"
                    >
                      <span
                        className={
                          item.outline
                            ? 'marquee-outline font-medium'
                            : 'text-blue-100/25 font-light'
                        }
                      >
                        {item.text}
                      </span>
                      <span className="mx-6 text-accent-400/35 text-sm">✦</span>
                    </span>
                  ))
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Accessible Pause/Play control for continuous moving content */}
        {!prefersReduced && (
          <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-2.5 flex justify-end">
            <button
              type="button"
              onClick={() => setMarqueePaused((p) => !p)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#07132b]/75 backdrop-blur-md border border-blue-400/20 hover:border-accent-400 text-[11px] font-mono text-slate-300 hover:text-white transition-colors"
            >
              {marqueePaused ? (
                <>
                  <Play className="w-3 h-3 text-accent-400" />
                  <span>{t.hero.marqueePlay}</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-accent-400" />
                  <span>{t.hero.marqueePause}</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
