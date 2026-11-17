import { useEffect, useState } from 'react';
import { ArrowUpRight, Download, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PROFILE_LINKS } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

export default function Footer() {
  const { t } = useLanguage();
  const base = import.meta.env.BASE_URL;
  const [localTime, setLocalTime] = useState<string>('--:--');

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat('pt-BR', {
          timeZone: 'America/Sao_Paulo',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date());
        setLocalTime(`${formatted} GMT-3`);
      } catch {
        setLocalTime('GMT-3');
      }
    };

    updateClock();
    const timer = window.setInterval(updateClock, 30000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <footer
      id="contact"
      className="bg-[#040914]/55 backdrop-blur-sm text-slate-200 pt-20 pb-10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-16 border-b border-blue-400/15">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              {t.footer.eyebrow}
            </span>
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
              {t.footer.headline1}
              <span className="block text-slate-400">{t.footer.headline2}</span>
            </h2>
          </div>

          <MagneticButton strength={0.35}>
            <a
              href={PROFILE_LINKS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-accent-600 hover:bg-accent-500 text-white flex flex-col items-center justify-center text-center p-4 shadow-[0_20px_50px_rgba(37,99,235,0.45)] transition-colors group"
            >
              <MessageCircle className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold leading-tight">
                {t.footer.ctaButton}
              </span>
              <ArrowUpRight className="w-4 h-4 mt-1 opacity-80" />
            </a>
          </MagneticButton>
        </div>

        <div className="py-10 flex flex-wrap items-center justify-between gap-4 border-b border-blue-400/15">
          <div className="flex flex-wrap items-center gap-3">
            <MagneticButton strength={0.2}>
              <a
                href={`mailto:${PROFILE_LINKS.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#081226] border border-blue-400/20 hover:border-accent-400 text-sm text-slate-100 transition-colors"
              >
                <Mail className="w-4 h-4 text-accent-400" />
                <span>{PROFILE_LINKS.email}</span>
              </a>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <a
                href={PROFILE_LINKS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#081226] border border-blue-400/20 hover:border-accent-400 text-sm text-slate-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-accent-400" />
                <span>{PROFILE_LINKS.phoneDisplay}</span>
              </a>
            </MagneticButton>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <MagneticButton strength={0.2}>
              <a
                href={`${base}Curriculo_Daniel_Barrionuevo_PT.pdf`}
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#081226] border border-blue-400/20 hover:border-accent-400 text-xs font-medium text-slate-200 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-accent-400" />
                <span>{t.footer.downloadPt}</span>
              </a>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <a
                href={`${base}Resume_Daniel_Barrionuevo_EN.pdf`}
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#081226] border border-blue-400/20 hover:border-accent-400 text-xs font-medium text-slate-200 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-accent-400" />
                <span>{t.footer.downloadEn}</span>
              </a>
            </MagneticButton>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <span className="block font-mono uppercase tracking-wider text-slate-600 mb-1">
                {t.footer.localTimeLabel}
              </span>
              <span className="text-sm font-mono text-slate-300">{localTime}</span>
            </div>

            <div>
              <span className="block font-mono uppercase tracking-wider text-slate-600 mb-1">
                © {new Date().getFullYear()}
              </span>
              <span className="text-slate-400">{t.footer.rights}</span>
            </div>
          </div>

          <div>
            <span className="block font-mono uppercase tracking-wider text-slate-600 mb-2 sm:text-right">
              {t.footer.socialsLabel}
            </span>
            <div className="flex items-center gap-4 text-sm text-slate-300">
              <a
                href={PROFILE_LINKS.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PROFILE_LINKS.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={`mailto:${PROFILE_LINKS.email}`}
                className="inline-flex items-center gap-1.5 hover:text-accent-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
