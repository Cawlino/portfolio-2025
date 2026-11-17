import { useMemo, useRef, useState, useSyncExternalStore } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Image as ImageIcon,
  Monitor,
  Smartphone,
  Sparkles,
  Video,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { ProjectCategory, ProjectItem } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

interface PhoneMockupProps {
  images?: string[];
  folder?: string;
  videoSrc?: string;
  posterImage?: string;
  alt: string;
  prevLabel: string;
  nextLabel: string;
  screenLabel: string;
}

function PhoneMockup({
  images,
  folder,
  videoSrc,
  posterImage,
  alt,
  prevLabel,
  nextLabel,
  screenLabel,
}: PhoneMockupProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const base = import.meta.env.BASE_URL;

  const prevSlide = () => {
    if (!images?.length) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    if (!images?.length) return;
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative mx-auto w-[240px] sm:w-[268px] aspect-[9/19.5] bg-slate-950 rounded-[42px] border-[7px] border-slate-800 shadow-[0_24px_60px_rgba(0,0,0,0.65)] overflow-hidden flex flex-col select-none">
        {/* Camera punch hole & speaker */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-black rounded-full z-30 ring-1 ring-white/15" />
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-800 rounded-full z-30" />

        <div className="relative w-full h-full bg-slate-900 flex items-center justify-center overflow-hidden">
          {videoSrc ? (
            <video
              key={videoSrc}
              src={`${base}${videoSrc}`}
              poster={posterImage ? `${base}${posterImage}` : undefined}
              autoPlay
              loop
              muted
              playsInline
              controls
              preload="auto"
              className="w-full h-full object-cover"
            />
          ) : images && folder && images.length > 0 ? (
            <>
              {/* Render all carousel screenshots eagerly so every slide is preloaded and switches instantly */}
              {images.map((file, idx) => (
                <img
                  key={file}
                  src={`${base}PrintsApps/${folder}/${file}`}
                  alt={`${alt} - ${screenLabel} ${idx + 1}`}
                  loading="eager"
                  decoding="async"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    idx === currentIndex
                      ? 'opacity-100 z-10'
                      : 'opacity-0 z-0 pointer-events-none'
                  }`}
                />
              ))}
            </>
          ) : (
            <div className="text-center p-6 text-slate-400">
              <Smartphone className="w-8 h-8 mx-auto text-accent-400 mb-2" />
              <p className="text-xs">{alt}</p>
            </div>
          )}

          {images && images.length > 1 && (
            <div className="absolute inset-x-0 bottom-4 px-3 flex justify-between items-center z-30">
              <button
                type="button"
                onClick={prevSlide}
                className="w-8 h-8 rounded-full bg-slate-950/90 border border-blue-400/30 flex items-center justify-center text-white hover:bg-accent-600 transition-colors shadow-lg"
                aria-label={prevLabel}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-1.5 px-2.5 py-1.5 bg-slate-950/90 rounded-full border border-white/15">
                {images.map((_, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-accent-400 w-4' : 'bg-slate-600 w-1.5'
                    }`}
                    aria-label={`${alt} ${screenLabel} ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextSlide}
                className="w-8 h-8 rounded-full bg-slate-950/90 border border-blue-400/30 flex items-center justify-center text-white hover:bg-accent-600 transition-colors shadow-lg"
                aria-label={nextLabel}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Explicit quick screen selector pills underneath mobile carousel */}
      {images && images.length > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-mono transition-colors border ${
                idx === currentIndex
                  ? 'bg-accent-600 text-white border-accent-400'
                  : 'bg-[#081329] text-slate-400 border-blue-400/15 hover:text-white'
              }`}
            >
              {idx + 1}/{images.length}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function FlagshipMedia({ project }: { project: ProjectItem }) {
  const { t } = useLanguage();
  const base = import.meta.env.BASE_URL;

  const [pacexMode, setPacexMode] = useState<'web' | 'mobile'>('web');
  const [expensesMode, setExpensesMode] = useState<'video' | 'image'>('video');

  // 1. Unified PaceX AI (Top selector switching between Web Video and 6 Mobile App screens)
  if (project.mediaType === 'pacex-unified') {
    return (
      <div className="space-y-4">
        {/* Top Selector directly above the PaceX AI video/mobile showcase */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
          <button
            type="button"
            onClick={() => setPacexMode('web')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
              pacexMode === 'web'
                ? 'bg-accent-600 text-white border-accent-400 shadow-[0_6px_20px_rgba(37,99,235,0.4)]'
                : 'bg-[#071226] text-slate-300 border-blue-400/20 hover:border-blue-400/50 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>{t.projectsSection.pacexWebTab}</span>
          </button>

          <button
            type="button"
            onClick={() => setPacexMode('mobile')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
              pacexMode === 'mobile'
                ? 'bg-accent-600 text-white border-accent-400 shadow-[0_6px_20px_rgba(37,99,235,0.4)]'
                : 'bg-[#071226] text-slate-300 border-blue-400/20 hover:border-blue-400/50 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>{t.projectsSection.pacexMobileTab}</span>
          </button>
        </div>

        {pacexMode === 'web' && project.videoSrc ? (
          <div className="relative w-full aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-blue-400/20 shadow-2xl">
            <div className="h-8 bg-[#0b1630] flex items-center px-4 gap-1.5 border-b border-blue-400/15">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <div className="mx-auto flex items-center gap-1.5 px-3 py-0.5 bg-slate-950/80 rounded border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-slate-300 font-mono">
                  {project.browserHost || 'pacexai.com'}
                </span>
              </div>
            </div>
            <div className="relative h-[calc(100%-2rem)] bg-black">
              <video
                key="pacex-web-video"
                src={`${base}${project.videoSrc}`}
                poster={`${base}${project.previewImage}`}
                autoPlay
                loop
                controls
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />
              <div className="pointer-events-none absolute top-3 right-3 flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-950/85 border border-blue-400/20 text-[11px] font-mono text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.projectsSection.liveDemoLabel}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-2 flex justify-center">
            <PhoneMockup
              images={project.mobileImages}
              folder={project.mobileFolder}
              alt={`${project.title} Mobile`}
              prevLabel={t.projectsSection.previousScreen}
              nextLabel={t.projectsSection.nextScreen}
              screenLabel={t.projectsSection.screenLabel}
            />
          </div>
        )}
      </div>
    );
  }

  // 2. Gerenciador de Gastos (Real Demo Video on S24 OR Real Liquid Glass Cover Image)
  if (project.mediaType === 'mobile-video-toggle') {
    return (
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
          <button
            type="button"
            onClick={() => setExpensesMode('video')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
              expensesMode === 'video'
                ? 'bg-accent-600 text-white border-accent-400 shadow-[0_6px_20px_rgba(37,99,235,0.4)]'
                : 'bg-[#071226] text-slate-300 border-blue-400/20 hover:border-blue-400/50 hover:text-white'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>{t.projectsSection.expensesVideoTab}</span>
          </button>

          <button
            type="button"
            onClick={() => setExpensesMode('image')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
              expensesMode === 'image'
                ? 'bg-accent-600 text-white border-accent-400 shadow-[0_6px_20px_rgba(37,99,235,0.4)]'
                : 'bg-[#071226] text-slate-300 border-blue-400/20 hover:border-blue-400/50 hover:text-white'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>{t.projectsSection.expensesImagesTab}</span>
          </button>
        </div>

        {expensesMode === 'video' ? (
          <PhoneMockup
            videoSrc={project.videoSrc}
            posterImage={project.posterImage || project.previewImage}
            alt={project.title}
            prevLabel={t.projectsSection.previousScreen}
            nextLabel={t.projectsSection.nextScreen}
            screenLabel={t.projectsSection.screenLabel}
          />
        ) : (
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-blue-400/20 bg-slate-950 shadow-2xl">
            <img
              src={`${base}${project.previewImage}`}
              alt={project.title}
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    );
  }

  // 3. Adventista Play (Eager Mobile Carousel)
  if (project.mediaType === 'mobile-carousel') {
    return (
      <PhoneMockup
        images={project.mobileImages}
        folder={project.mobileFolder}
        alt={project.title}
        prevLabel={t.projectsSection.previousScreen}
        nextLabel={t.projectsSection.nextScreen}
        screenLabel={t.projectsSection.screenLabel}
      />
    );
  }

  // 4. Vitrine Web (Browser Framed Showcase)
  if (project.mediaType === 'browser-image') {
    return (
      <div className="relative w-full aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-blue-400/20 shadow-2xl">
        <div className="h-8 bg-[#0b1630] flex items-center px-4 gap-1.5 border-b border-blue-400/15">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          <div className="mx-auto flex items-center gap-1.5 px-3 py-0.5 bg-slate-950/80 rounded border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-slate-300 font-mono">
              {project.browserHost || 'vitrineweb'}
            </span>
          </div>
        </div>
        <div className="relative h-[calc(100%-2rem)] bg-slate-900">
          <img
            src={`${base}${project.previewImage}`}
            alt={project.title}
            loading="eager"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-blue-400/20 bg-slate-900 shadow-2xl">
      <img
        src={`${base}${project.previewImage}`}
        alt={project.title}
        loading="eager"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();
  const base = import.meta.env.BASE_URL;

  const flagships = useMemo(
    () => t.projects.filter((p) => p.isFlagship),
    [t.projects]
  );

  // Category filter tabs (following modern-web-guidance `tabs` pattern)
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const categoryCounts = useMemo(() => {
    const counts: Record<ProjectCategory, number> = {
      all: t.projects.length,
      saas: 0,
      mobile: 0,
      sites: 0,
      data: 0,
    };
    t.projects.forEach((p) => {
      counts[p.filterCategory] += 1;
      p.secondaryCategories?.forEach((sec) => {
        counts[sec] += 1;
      });
    });
    return counts;
  }, [t.projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return t.projects;
    return t.projects.filter(
      (p) =>
        p.filterCategory === selectedCategory ||
        p.secondaryCategories?.includes(selectedCategory)
    );
  }, [t.projects, selectedCategory]);

  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const categories = t.projectsSection.categories;
    let nextIdx: number | null = null;
    if (e.key === 'ArrowRight') nextIdx = (index + 1) % categories.length;
    else if (e.key === 'ArrowLeft') nextIdx = (index - 1 + categories.length) % categories.length;
    else if (e.key === 'Home') nextIdx = 0;
    else if (e.key === 'End') nextIdx = categories.length - 1;

    if (nextIdx !== null) {
      e.preventDefault();
      const targetTab = categories[nextIdx];
      setSelectedCategory(targetTab.id);
      const btn = tabRefs.current[nextIdx];
      btn?.focus();
      btn?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  };

  // Dennis Snellenberg Floating Hover Modal (Zero React re-renders on hover/sweep)
  const sliderRef = useRef<HTMLDivElement>(null);
  const canHover = useSyncExternalStore(
    (cb) => {
      if (typeof window === 'undefined') return () => {};
      const mq = window.matchMedia('(min-width: 768px) and (hover: hover) and (pointer: fine)');
      mq.addEventListener('change', cb);
      return () => mq.removeEventListener('change', cb);
    },
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(min-width: 768px) and (hover: hover) and (pointer: fine)').matches,
    () => false
  );

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const modalActiveMV = useMotionValue(0);

  const modalX = useSpring(mouseX, { stiffness: 450, damping: 34, mass: 0.22 });
  const modalY = useSpring(mouseY, { stiffness: 450, damping: 34, mass: 0.22 });
  const labelX = useSpring(mouseX, { stiffness: 620, damping: 32, mass: 0.16 });
  const labelY = useSpring(mouseY, { stiffness: 620, damping: 32, mass: 0.16 });

  const modalOpacity = useSpring(modalActiveMV, { stiffness: 420, damping: 30, mass: 0.2 });
  const modalScale = useSpring(
    useMotionValue(1),
    { stiffness: 420, damping: 30, mass: 0.2 }
  );

  const handleListMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || prefersReduced) return;
    mouseX.set(Math.round(e.clientX));
    mouseY.set(Math.round(e.clientY));
  };

  const showHoverModal = (idx: number) => {
    if (!canHover || prefersReduced) return;
    modalActiveMV.set(1);
    modalScale.set(1);
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translate3d(0, -${idx * 240}px, 0)`;
    }
  };

  const hideHoverModal = () => {
    modalActiveMV.set(0);
    modalScale.set(0.92);
  };

  return (
    <div className="bg-transparent">
      {/* ===================================================================== */}
      {/* PART A: FLAGSHIP CASE STUDIES                                         */}
      {/* ===================================================================== */}
      <section
        id="flagships"
        className="relative py-20 md:py-28 border-b border-blue-400/15"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-16 md:mb-24">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-400">
              {t.projectsSection.flagshipEyebrow}
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mt-3">
              {t.projectsSection.flagshipTitle}{' '}
              <span className="text-accent-400">{t.projectsSection.flagshipTitleAccent}</span>
            </h2>
            <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
              {t.projectsSection.flagshipSubtitle}
            </p>
          </div>

          <div className="space-y-20 md:space-y-28">
            {flagships.map((project, idx) => {
              const reversed = idx % 2 === 1;
              const primaryUrl = project.liveUrl || project.repoUrl;

              return (
                <article
                  key={project.id}
                  className="relative overflow-hidden rounded-3xl bg-[#071226]/75 backdrop-blur-md border border-blue-400/20 p-6 sm:p-10 md:p-12 shadow-[0_24px_65px_rgba(3,7,18,0.65)]"
                >
                  {/* Subtle coherent per-card index watermark */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-3 right-6 text-[clamp(4.5rem,9vw,7.5rem)] font-bold leading-none text-blue-300/[0.045] select-none font-mono"
                  >
                    {project.index}
                  </span>

                  <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Text Details */}
                    <div
                      className={`lg:col-span-6 space-y-6 ${
                        reversed ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-[#060e1f] border border-blue-400/25 text-xs font-mono text-accent-300">
                          {project.index} / {project.subtitle}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {project.year}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium text-accent-400 mt-1">
                          {project.categoryLabel}
                        </p>
                      </div>

                      <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
                        {project.description}
                      </p>

                      <ul className="space-y-2">
                        {project.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2.5 text-sm text-slate-200"
                          >
                            <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-[#060e1f] border border-blue-400/15 text-xs text-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {primaryUrl && (
                        <div className="pt-2">
                          <MagneticButton strength={0.22}>
                            <a
                              href={primaryUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-600 hover:bg-accent-500 text-sm font-semibold text-white transition-colors shadow-[0_8px_25px_rgba(37,99,235,0.4)]"
                            >
                              {project.repoUrl && !project.liveUrl ? (
                                <>
                                  <Github className="w-4 h-4" />
                                  <span>{t.projectsSection.viewRepo}</span>
                                </>
                              ) : (
                                <>
                                  <ExternalLink className="w-4 h-4" />
                                  <span>{t.projectsSection.visitProject}</span>
                                </>
                              )}
                            </a>
                          </MagneticButton>
                        </div>
                      )}
                    </div>

                    {/* Visual Media */}
                    <div
                      className={`lg:col-span-6 ${
                        reversed ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <FlagshipMedia project={project} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* PART B: COMPLETE ARCHIVE + EAGER HOVER MODAL (DENNIS SNELLENBERG)     */}
      {/* ===================================================================== */}
      <section
        id="projects-archive"
        className="relative z-10 bg-transparent py-20 md:py-28 border-b border-blue-400/15"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 mb-12">
            <div className="min-w-0">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-400">
                {t.projectsSection.indexEyebrow}
              </span>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mt-3">
                {t.projectsSection.indexTitle}{' '}
                <span className="text-accent-400">{t.projectsSection.indexTitleAccent}</span>
              </h2>
              <p className="text-slate-400 mt-3 max-w-xl text-sm sm:text-base">
                {t.projectsSection.indexSubtitle}
              </p>
            </div>

            <div
              role="tablist"
              aria-label={t.projectsSection.tablistLabel}
              className="archive-tablist flex items-center gap-1.5 overflow-x-auto max-w-full shrink-0 pb-2 border-b border-blue-400/15"
            >
              {t.projectsSection.categories.map((cat, idx) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    ref={(el) => {
                      tabRefs.current[idx] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`tab-${cat.id}`}
                    aria-selected={isSelected}
                    tabIndex={isSelected ? 0 : -1}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      hideHoverModal();
                    }}
                    onKeyDown={(e) => handleTabKeyDown(e, idx)}
                    className={`archive-tab relative flex-none px-3.5 py-2 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                      isSelected
                        ? 'text-white'
                        : 'text-slate-400 hover:text-slate-100'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="ml-1.5 font-mono text-[11px] text-slate-500">
                      ({categoryCounts[cat.id]})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden md:grid grid-cols-12 gap-4 px-4 pb-3 border-b border-blue-400/15 text-[11px] font-mono uppercase tracking-wider text-slate-400">
            <div className="col-span-5">{t.projectsSection.columns.project}</div>
            <div className="col-span-3">{t.projectsSection.columns.category}</div>
            <div className="col-span-3">{t.projectsSection.columns.stack}</div>
            <div className="col-span-1 text-right">{t.projectsSection.columns.year}</div>
          </div>

          <div
            role="tabpanel"
            aria-labelledby={`tab-${selectedCategory}`}
            tabIndex={0}
            onMouseMove={handleListMouseMove}
            onMouseLeave={hideHoverModal}
            className="divide-y divide-blue-400/10"
          >
            {filteredProjects.map((project, idx) => {
              const targetUrl = project.liveUrl || project.repoUrl || '#flagships';
              const isExternal = Boolean(project.liveUrl || project.repoUrl);

              return (
                <a
                  key={project.id}
                  href={targetUrl}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  onMouseEnter={() => showHoverModal(idx)}
                  data-cursor="interactive"
                  className="group block py-6 md:py-7 px-2 sm:px-4 transition-colors hover:bg-blue-500/[0.04]"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:items-center">
                    {/* Mobile thumbnail preview (eagerly loaded) */}
                    <div className="md:hidden w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 border border-blue-400/15 mb-2">
                      {project.mediaType === 'dashboard-preview' ? (
                        <div className="w-full h-full bg-slate-950 p-4 flex flex-col justify-between">
                          <div className="flex items-center justify-between text-xs text-accent-400 font-mono">
                            <span>CometChart KPIs</span>
                            <BarChart3 className="w-4 h-4" />
                          </div>
                          <div className="grid grid-cols-3 gap-2 my-2">
                            <div className="p-2 rounded bg-slate-900 border border-white/10">
                              <div className="text-[10px] text-slate-400">MRR</div>
                              <div className="text-xs font-bold text-accent-400">+28.4%</div>
                            </div>
                            <div className="p-2 rounded bg-slate-900 border border-white/10">
                              <div className="text-[10px] text-slate-400">Stack</div>
                              <div className="text-xs font-bold text-white">React 19</div>
                            </div>
                            <div className="p-2 rounded bg-slate-900 border border-white/10">
                              <div className="text-[10px] text-slate-400">DB</div>
                              <div className="text-xs font-bold text-white">Drizzle</div>
                            </div>
                          </div>
                          <div className="h-10 flex items-end gap-1.5">
                            {[45, 70, 55, 85, 65, 95, 80, 100].map((h, bIdx) => (
                              <div
                                key={bIdx}
                                className="flex-1 bg-accent-500/75 rounded-t"
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                        </div>
                      ) : (
                        <img
                          src={`${base}${project.previewImage}`}
                          alt={project.title}
                          loading="eager"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    <div className="md:col-span-5 flex items-baseline gap-4 min-w-0">
                      <span className="font-mono text-xs text-slate-500 shrink-0">
                        {project.index}
                      </span>
                      <div className="min-w-0 transition-transform duration-300 group-hover:translate-x-2">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white group-hover:text-accent-300 transition-colors truncate">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 mt-1 line-clamp-1">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="md:col-span-3 transition-transform duration-300 md:group-hover:-translate-x-1">
                      <p className="text-sm text-slate-200 font-medium">
                        {project.role}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {project.categoryLabel}
                      </p>
                    </div>

                    <div className="md:col-span-3 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-[#081329] border border-blue-400/15 text-[11px] text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="md:col-span-1 flex items-center md:justify-end gap-2 text-xs font-mono text-slate-400 group-hover:text-accent-400">
                      <span>{project.year}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* ================================================================= */}
        {/* FLOATING HOVER MODAL (All images loaded eagerly for instant glide) */}
        {/* ================================================================= */}
        {canHover && !prefersReduced && (
          <>
            <motion.div
              aria-hidden="true"
              style={{
                x: modalX,
                y: modalY,
                translateX: '-50%',
                translateY: '-50%',
                scale: modalScale,
                opacity: modalOpacity,
              }}
              className="pointer-events-none fixed top-0 left-0 z-40 w-[370px] h-[240px] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.75)] border border-blue-400/30 bg-[#081226]"
            >
              <div
                ref={sliderRef}
                className="w-full h-full will-change-transform"
                style={{
                  transform: 'translate3d(0, 0, 0)',
                  transition: 'transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="w-full h-[240px] shrink-0 flex items-center justify-center p-4 relative"
                    style={{ backgroundColor: '#081226' }}
                  >
                    <div
                      className="absolute inset-0 opacity-25"
                      style={{
                        background: `radial-gradient(circle at 50% 30%, ${project.accentColor}, transparent 75%)`,
                      }}
                    />

                    {project.mediaType === 'dashboard-preview' ? (
                      <div className="relative z-10 w-full h-full rounded-xl bg-slate-950 border border-blue-400/20 p-4 flex flex-col justify-between shadow-xl">
                        <div className="flex items-center justify-between text-xs font-mono text-accent-400">
                          <span className="flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" />
                            cometchart.app
                          </span>
                          <span>KPIs</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="p-2 rounded bg-slate-900 border border-white/10">
                            <div className="text-[9px] text-slate-400">Receita</div>
                            <div className="text-xs font-bold text-accent-400">R$ 124.5k</div>
                          </div>
                          <div className="p-2 rounded bg-slate-900 border border-white/10">
                            <div className="text-[9px] text-slate-400">Crescimento</div>
                            <div className="text-xs font-bold text-accent-400">+28.4%</div>
                          </div>
                          <div className="p-2 rounded bg-slate-900 border border-white/10">
                            <div className="text-[9px] text-slate-400">Stack</div>
                            <div className="text-xs font-bold text-white">React 19</div>
                          </div>
                        </div>
                        <div className="h-16 flex items-end gap-1.5 pt-2">
                          {[35, 65, 50, 82, 60, 92, 74, 100, 86, 95].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-t bg-accent-500/80"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="relative z-10 w-full h-full rounded-xl overflow-hidden border border-blue-400/20 shadow-xl bg-slate-950">
                        <img
                          src={`${base}${project.previewImage}`}
                          alt=""
                          loading="eager"
                          decoding="async"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Centered crisp "Ver ↗" floating pill */}
            <motion.div
              aria-hidden="true"
              style={{
                x: labelX,
                y: labelY,
                translateX: '-50%',
                translateY: '-50%',
                opacity: modalOpacity,
              }}
              className="pointer-events-none fixed top-0 left-0 z-50 w-20 h-20 rounded-full bg-[#2563eb] ring-1 ring-white/25 text-white text-[13px] font-semibold tracking-wide antialiased flex items-center justify-center shadow-[0_12px_28px_rgba(37,99,235,0.55)]"
            >
              <span>{t.projectsSection.modalAction}</span>
            </motion.div>
          </>
        )}
      </section>
    </div>
  );
}
