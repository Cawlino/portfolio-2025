import { motion, useReducedMotion } from 'framer-motion';
import { Cloud, Database, Layout, Server, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CATEGORY_ICONS = {
  frontend: Layout,
  mobile: Smartphone,
  backend: Server,
  ai_data: Cloud,
} as const;

export default function Skills() {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-transparent border-b border-blue-400/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mb-14"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-400">
            {t.skillsSection.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mt-3">
            {t.skillsSection.title}{' '}
            <span className="text-accent-400">{t.skillsSection.titleAccent}</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg leading-relaxed">
            {t.skillsSection.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.skillsSection.categories.map((category, idx) => {
            const Icon = CATEGORY_ICONS[category.id] || Database;

            return (
              <motion.div
                key={category.id}
                initial={prefersReduced ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: prefersReduced ? 0 : idx * 0.08 }}
                className="group rounded-2xl bg-[#071226]/75 backdrop-blur-md border border-blue-400/15 hover:border-accent-400/45 p-6 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#050a15] border border-blue-400/20 flex items-center justify-center text-slate-300 group-hover:text-accent-400 group-hover:border-accent-400/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#050a15] border border-blue-400/20 text-[11px] font-mono text-accent-300">
                      {category.experienceLabel}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-blue-400/10">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#050a15] text-slate-200 border border-blue-400/15"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
