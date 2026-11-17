import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, Briefcase, Calendar, GraduationCap, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { EducationItem } from '../data/portfolioData';

export default function Experience() {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();
  const base = import.meta.env.BASE_URL;

  const [selectedCert, setSelectedCert] = useState<EducationItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedCert?.image) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [selectedCert]);

  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-transparent border-b border-blue-400/15 relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-400">
            {t.experienceSection.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mt-3">
            {t.experienceSection.title}{' '}
            <span className="text-accent-400">{t.experienceSection.titleAccent}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Work Experience Column */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2.5 mb-8 text-slate-100">
              <Briefcase className="w-5 h-5 text-accent-400" />
              <h3 className="text-xl font-semibold">{t.experienceSection.workTitle}</h3>
            </div>

            <div className="space-y-9 pl-5 border-l border-blue-400/20">
              {t.experienceSection.experiences.map((exp, idx) => (
                <motion.div
                  key={`${exp.company}-${exp.date}`}
                  initial={prefersReduced ? false : { opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: prefersReduced ? 0 : idx * 0.08 }}
                  className="relative pl-6 group"
                >
                  <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-[#050a15] border-2 border-accent-400 group-hover:bg-accent-400 transition-colors" />

                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.date}
                    </span>
                    {exp.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-accent-600/20 border border-accent-400/35 text-[11px] font-mono text-accent-300">
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                  <p className="text-sm font-medium text-slate-400 mb-3">{exp.company}</p>

                  <ul className="space-y-2 text-sm text-slate-300 leading-relaxed">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500/80 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certificates Column */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2.5 mb-8 text-slate-100">
              <GraduationCap className="w-5 h-5 text-accent-400" />
              <h3 className="text-xl font-semibold">
                {t.experienceSection.educationTitle}
              </h3>
            </div>

            <div className="space-y-4">
              {t.experienceSection.education.map((edu, idx) => (
                <motion.div
                  key={`${edu.institution}-${edu.degree}`}
                  initial={prefersReduced ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: prefersReduced ? 0 : idx * 0.06 }}
                  className="bg-[#071226]/75 backdrop-blur-md border border-blue-400/15 hover:border-accent-400/40 p-5 rounded-2xl transition-colors flex flex-col sm:flex-row items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-2.5 rounded-xl bg-[#050a15] border border-blue-400/20 text-accent-400 shrink-0">
                      {edu.type === 'education' ? (
                        <GraduationCap className="w-5 h-5" />
                      ) : (
                        <Award className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white leading-snug">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-slate-400 mt-0.5">{edu.institution}</p>
                      <p className="text-xs font-mono text-slate-500 mt-1">{edu.date}</p>
                    </div>
                  </div>

                  {edu.image && (
                    <button
                      type="button"
                      onClick={() => setSelectedCert(edu)}
                      aria-label={`${t.experienceSection.zoomLabel}: ${edu.degree}`}
                      className="w-full sm:w-28 aspect-[4/3] rounded-xl overflow-hidden border border-blue-400/25 hover:border-accent-400 transition-colors group/img relative bg-slate-950 shrink-0"
                    >
                      <img
                        src={`${base}${edu.image}`}
                        alt={edu.degree}
                        loading="eager"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-blue-950/35 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <Award className="w-5 h-5 text-accent-300" />
                      </div>
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Native <dialog> Certificate Modal */}
      <dialog
        ref={dialogRef}
        className="certificate-dialog"
        onCancel={() => setSelectedCert(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelectedCert(null);
        }}
        onClose={() => setSelectedCert(null)}
        aria-label={selectedCert?.degree || t.experienceSection.zoomLabel}
      >
        <button
          type="button"
          autoFocus
          onClick={() => setSelectedCert(null)}
          className="dialog-close"
          aria-label={t.experienceSection.closeLabel}
        >
          <X className="w-5 h-5" />
        </button>

        {selectedCert?.image && (
          <div className="flex flex-col items-center gap-3">
            <img
              src={`${base}${selectedCert.image}`}
              alt={selectedCert.degree}
            />
            <a
              href={`${base}${selectedCert.pdf || selectedCert.image}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent-400 hover:text-accent-300 underline"
            >
              {t.experienceSection.openOriginal}
            </a>
          </div>
        )}
      </dialog>
    </section>
  );
}
