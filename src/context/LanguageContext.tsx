import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { portfolioData, type Language, type PortfolioContent } from '../data/portfolioData';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: PortfolioContent;
  resumeUrl: string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'portfolio_lang_pref';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'pt' || saved === 'en') return saved;
    } catch {
      // Ignore storage access failures in restricted browsing modes
    }
    return 'pt';
  });

  const setLang = (next: Language) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage write errors
    }
  };

  const toggleLang = () => setLang(lang === 'pt' ? 'en' : 'pt');

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title =
      lang === 'pt'
        ? 'Daniel Barrionuevo | Desenvolvedor Full Stack & Mobile'
        : 'Daniel Barrionuevo | Full Stack & Mobile Developer';
  }, [lang]);

  const base = import.meta.env.BASE_URL;
  const resumeUrl =
    lang === 'pt'
      ? `${base}Curriculo_Daniel_Barrionuevo_PT.pdf`
      : `${base}Resume_Daniel_Barrionuevo_EN.pdf`;

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t: portfolioData[lang],
        resumeUrl,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
