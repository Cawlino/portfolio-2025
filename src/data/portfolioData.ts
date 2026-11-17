export type Language = 'pt' | 'en';

export type ProjectCategory = 'all' | 'saas' | 'mobile' | 'sites' | 'data';

export type ProjectMediaType =
  | 'pacex-unified'
  | 'mobile-video-toggle'
  | 'mobile-carousel'
  | 'browser-image'
  | 'image'
  | 'dashboard-preview';

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  categoryLabel: string;
  filterCategory: Exclude<ProjectCategory, 'all'>;
  secondaryCategories?: Exclude<ProjectCategory, 'all'>[];
  year: string;
  role: string;
  description: string;
  highlights: string[];
  tags: string[];
  mediaType: ProjectMediaType;
  previewImage: string;
  posterImage?: string;
  videoSrc?: string;
  mobileFolder?: string;
  mobileImages?: string[];
  liveUrl?: string;
  repoUrl?: string;
  accentColor: string;
  isFlagship: boolean;
  browserHost?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  badge?: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  date: string;
  type: 'education' | 'certification';
  image?: string;
  pdf?: string;
}

export interface SkillCategoryItem {
  id: 'frontend' | 'mobile' | 'backend' | 'ai_data';
  title: string;
  experienceLabel: string;
  description: string;
  skills: string[];
}

export interface PortfolioContent {
  nav: {
    brandPrefix: string;
    brandRole: string;
    availability: string;
    links: { id: string; label: string }[];
    downloadCv: string;
    contactCta: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    locationTop: string;
    locationBottom: string;
    roleLine1: string;
    roleLine2: string;
    summary: string;
    marqueeText: string;
    marqueePause: string;
    marqueePlay: string;
    ctaPrimary: string;
    ctaResume: string;
    photoBadge: string;
    metrics: { value: string; label: string }[];
    triageBadges: string[];
  };
  projectsSection: {
    flagshipEyebrow: string;
    flagshipTitle: string;
    flagshipTitleAccent: string;
    flagshipSubtitle: string;
    activeProjectPrefix: string;
    liveDemoLabel: string;
    visitProject: string;
    viewRepo: string;
    previousScreen: string;
    nextScreen: string;
    pacexWebTab: string;
    pacexMobileTab: string;
    expensesVideoTab: string;
    expensesImagesTab: string;
    screenLabel: string;
    indexEyebrow: string;
    indexTitle: string;
    indexTitleAccent: string;
    indexSubtitle: string;
    tablistLabel: string;
    categories: { id: ProjectCategory; label: string }[];
    columns: {
      project: string;
      category: string;
      stack: string;
      year: string;
    };
    modalAction: string;
  };
  skillsSection: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    categories: SkillCategoryItem[];
  };
  experienceSection: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    workTitle: string;
    educationTitle: string;
    zoomLabel: string;
    closeLabel: string;
    openOriginal: string;
    experiences: ExperienceItem[];
    education: EducationItem[];
  };
  footer: {
    eyebrow: string;
    headline1: string;
    headline2: string;
    ctaButton: string;
    downloadPt: string;
    downloadEn: string;
    localTimeLabel: string;
    socialsLabel: string;
    rights: string;
  };
  projects: ProjectItem[];
}

export const PROFILE_LINKS = {
  name: 'Daniel Barrionuevo Gomes',
  email: 'danielbgomes11@gmail.com',
  phoneDisplay: '+55 (44) 99906-3897',
  whatsappUrl: 'https://wa.me/5544999063897',
  linkedinUrl: 'https://www.linkedin.com/in/danielbarrionuevo',
  githubUrl: 'https://github.com/Cawlino',
};

const PACEX_MOBILE_IMAGES = [
  'Screenshot_20260626_172431_pacex-mobile-temp.jpg',
  'Screenshot_20260626_172437_pacex-mobile-temp.jpg',
  'Screenshot_20260626_172443_pacex-mobile-temp.jpg',
  'Screenshot_20260626_172452_pacex-mobile-temp.jpg',
  'Screenshot_20260626_172506_pacex-mobile-temp.jpg',
  'Screenshot_20260626_172522_pacex-mobile-temp.jpg',
];

const ADV_PLAY_IMAGES = [
  'Screenshot_20260626_172322_Chrome.jpg',
  'Screenshot_20260626_172330_Chrome.jpg',
  'Screenshot_20260626_172353_Chrome.jpg',
  'Screenshot_20260626_172356_Chrome.jpg',
  'Screenshot_20260626_172409_Chrome.jpg',
];

export const portfolioData: Record<Language, PortfolioContent> = {
  pt: {
    nav: {
      brandPrefix: 'Código por',
      brandRole: 'Desenvolvedor Full Stack & Mobile',
      availability: 'Disponível para início imediato · Remoto / Híbrido',
      links: [
        { id: 'flagships', label: 'Destaques' },
        { id: 'projects-archive', label: 'Projetos' },
        { id: 'skills', label: 'Stack' },
        { id: 'experience', label: 'Trajetória' },
      ],
      downloadCv: 'Currículo PDF',
      contactCta: 'Vamos conversar',
      menuOpen: 'Abrir menu',
      menuClose: 'Fechar menu',
    },
    hero: {
      locationTop: 'Localizado em',
      locationBottom: 'Maringá, PR · Brasil',
      roleLine1: 'Desenvolvedor',
      roleLine2: 'Full Stack & Mobile',
      summary:
        '3 a 4 anos de experiência prática construindo interfaces rápidas (React, Next.js, React Native) e APIs escaláveis (Node.js, Python, PostgreSQL). Criador do ecossistema PaceX AI com +100 usuários reais, integração de LLMs e pipelines de dados.',
      marqueeText: 'Daniel Barrionuevo — Desenvolvedor Full Stack & Mobile — ',
      marqueePause: 'Pausar letreiro',
      marqueePlay: 'Reproduzir letreiro',
      ctaPrimary: 'Explorar Projetos',
      ctaResume: 'Baixar Currículo (PT)',
      photoBadge: '+100 usuários em produção',
      metrics: [
        { value: '3–4 anos', label: 'Experiência prática em código' },
        { value: '+100', label: 'Usuários reais na PaceX AI' },
        { value: 'Full Stack', label: 'Web, Mobile, APIs & IA' },
        { value: 'Inglês C1', label: 'Comunicação técnica fluente' },
      ],
      triageBadges: [
        'Início imediato',
        'Remoto ou Híbrido (Maringá/SP)',
        'Bacharel em Eng. de Software (UniCesumar)',
      ],
    },
    projectsSection: {
      flagshipEyebrow: '01 · Estudos de Caso em Destaque',
      flagshipTitle: 'Produtos em',
      flagshipTitleAccent: 'produção & escala',
      flagshipSubtitle:
        'Sistemas completos projetados ponta a ponta: arquitetura web/mobile, backend com IA generativa, banco relacional e validação com usuários reais.',
      activeProjectPrefix: 'DESTAQUE',
      liveDemoLabel: 'Demo Real em Produção',
      visitProject: 'Acessar projeto',
      viewRepo: 'Ver código no GitHub',
      previousScreen: 'Tela anterior',
      nextScreen: 'Próxima tela',
      pacexWebTab: 'Plataforma Web (Vídeo)',
      pacexMobileTab: 'App Mobile (6 Telas)',
      expensesVideoTab: 'Vídeo Demo Real (S24)',
      expensesImagesTab: 'Telas & Arquitetura',
      screenLabel: 'Tela',
      indexEyebrow: '02 · Catálogo Completo',
      indexTitle: 'Catálogo de',
      indexTitleAccent: 'projetos',
      indexSubtitle:
        'Passe o cursor sobre qualquer projeto para visualizar o preview dinâmico e filtre por ecossistema técnico.',
      tablistLabel: 'Filtrar projetos por categoria',
      categories: [
        { id: 'all', label: 'Todos' },
        { id: 'saas', label: 'Web & SaaS' },
        { id: 'mobile', label: 'Apps Mobile' },
        { id: 'sites', label: 'Sites & Negócios' },
        { id: 'data', label: 'Dados & DevTools' },
      ],
      columns: {
        project: 'Projeto',
        category: 'Ecossistema & Papel',
        stack: 'Stack Principal',
        year: 'Ano / Link',
      },
      modalAction: 'Ver ↗',
    },
    skillsSection: {
      eyebrow: '03 · Matriz Técnica para Recrutadores',
      title: 'Conhecimento',
      titleAccent: 'técnico aplicado',
      subtitle:
        'Foco em código limpo, performance na interface, APIs resilientes e integração prática de Inteligência Artificial e dados.',
      categories: [
        {
          id: 'frontend',
          title: 'Frontend Web',
          experienceLabel: '3–4 anos',
          description: 'Interfaces reativas, SSR, animações fluidas e acessibilidade.',
          skills: [
            'React 19',
            'Next.js',
            'TypeScript',
            'JavaScript ES6+',
            'Tailwind CSS',
            'TanStack Router',
            'Framer Motion',
            'Vite',
          ],
        },
        {
          id: 'mobile',
          title: 'Mobile Cross-Platform',
          experienceLabel: '2–3 anos',
          description: 'Apps nativos iOS & Android orientados a usuários reais.',
          skills: [
            'React Native',
            'Expo',
            'TypeScript',
            'Offline / State Sync',
            'UX Mobile Nativa',
            'Gamificação & Streaks',
          ],
        },
        {
          id: 'backend',
          title: 'Backend, Cloud & DB',
          experienceLabel: '3–4 anos',
          description: 'APIs RESTful, modelagem relacional, containers e pagamentos.',
          skills: [
            'Node.js / Express',
            'Python (Django / FastAPI)',
            'PostgreSQL',
            'Supabase',
            'Drizzle ORM',
            'Docker',
            'AWS / Vercel',
            'Stripe / AbacatePay',
          ],
        },
        {
          id: 'ai_data',
          title: 'IA Generativa & Dados BI',
          experienceLabel: '3 anos',
          description: 'Agentes LLM em produção, ETL automatizado e analytics.',
          skills: [
            'Function Calling',
            'Gemini / OpenRouter / Grok',
            'AI Agents & RAG',
            'Power BI & DAX',
            'Power Query',
            'SQL Avançado',
            'Python Pandas / ETL',
          ],
        },
      ],
    },
    experienceSection: {
      eyebrow: '04 · Carreira & Formação',
      title: 'Minha',
      titleAccent: 'trajetória profissional',
      workTitle: 'Experiência Profissional',
      educationTitle: 'Formação & Certificados Verificáveis',
      zoomLabel: 'Ampliar certificado',
      closeLabel: 'Fechar certificado',
      openOriginal: 'Abrir documento original ↗',
      experiences: [
        {
          company: 'Autônomo / Projetos & Clientes',
          role: 'Desenvolvedor Full Stack & Mobile (Freelance)',
          date: 'Mar 2026 – Presente',
          badge: 'Atual',
          description: [
            'Desenvolvimento ponta a ponta de aplicações web e aplicativos mobile em React Native/Expo (como Gerenciador de Gastos e Painel de Vagas).',
            'Criação de sites institucionais e comerciais de alta conversão com foco em SEO, performance e UX (Vitrine Web, Júnior Móveis, Dr. Cassiano e Thaísa Simitan).',
            'Arquitetura serverless, automações com IA e pipelines de CI/CD via GitHub Actions e Vercel.',
          ],
        },
        {
          company: 'PaceX AI (pacexai.com)',
          role: 'Desenvolvedor Full Stack & Mobile',
          date: 'Jun 2025 – Mar 2026',
          badge: '+100 usuários',
          description: [
            'Liderança técnica de produto e codificação completa da plataforma web (Next.js/React), app mobile (React Native/Expo) e backend (Python/Django e Node.js).',
            'Implementação de motor de IA (Gemini, Grok, OpenRouter) via Function Calling para prescrição e análise inteligente de volume de carga.',
            'Arquitetura em PostgreSQL e Docker com integração de assinaturas recorrentes via Stripe e AbacatePay, atendendo mais de 100 usuários reais.',
          ],
        },
        {
          company: 'ROQT | Data & AI',
          role: 'Estágio em Análise de Dados & BI',
          date: 'Jun 2025 – Ago 2025',
          description: [
            'Desenvolvimento e manutenção de dashboards interativos no Power BI com modelagem avançada em DAX e Power Query.',
            'Criação de pipelines de dados e rotinas ETL automatizadas usando Python e SQL para integração de APIs REST e bancos relacionais.',
            'Apoio direto a squads ágeis e stakeholders com relatórios automatizados e análises preditivas.',
          ],
        },
        {
          company: 'Ired Internet',
          role: 'Suporte Técnico N2 & Estágio',
          date: 'Nov 2023 – Jun 2025',
          description: [
            'Diagnóstico e resolução de incidentes complexos de redes, conectividade e protocolos de comunicação em ambiente de produção.',
            'Análise de causa raiz e mitigação de gargalos em fluxos críticos de serviços financeiros e administrativos, cumprindo SLAs rígidos.',
          ],
        },
      ],
      education: [
        {
          institution: 'UniCesumar',
          degree: 'Bacharelado em Engenharia de Software (Concluído)',
          date: 'Jan 2022 – Dez 2025',
          type: 'education',
          image: 'certificates/unicesumar.jpg',
        },
        {
          institution: 'Alura',
          degree: 'Imersão Engenharia de Software: Dev na Era da IA',
          date: 'Nov 2026',
          type: 'certification',
          image: 'certificates/alura-engenharia-software.png',
          pdf: 'certificates/alura-engenharia-software.pdf',
        },
        {
          institution: 'Samsung Ocean',
          degree: 'Otimização, Computação Evolucionária e Programação Linear',
          date: 'Out 2026',
          type: 'certification',
          image: 'certificates/samsung-ocean.png',
        },
        {
          institution: 'Data Science Academy',
          degree: 'Microsoft Power BI Para Business Intelligence e Data Science',
          date: '2025',
          type: 'certification',
          image: 'certificates/power_bi.jpg',
        },
        {
          institution: 'Udemy Alumni',
          degree: 'Curso Técnico Integrado em Tecnologia da Informação',
          date: 'Dez 2025 – Jan 2026',
          type: 'certification',
        },
        {
          institution: 'Udemy',
          degree: 'The Complete Full-Stack Web Development Bootcamp',
          date: '2025',
          type: 'certification',
        },
        {
          institution: 'UniCesumar · LATECH',
          degree: 'Workshop WorkinTech 2024.2 (8 horas)',
          date: 'Out 2024',
          type: 'certification',
          image: 'certificates/unicesumar.jpg',
          pdf: 'certificates/unicesumar-workintech-2024.pdf',
        },
        {
          institution: 'UniCesumar',
          degree: 'Mostra de Profissões – ROTARY (20 horas)',
          date: 'Out 2023',
          type: 'certification',
          image: 'certificates/unicesumar.jpg',
          pdf: 'certificates/unicesumar-mostra-rotary-2023.pdf',
        },
        {
          institution: 'UniCesumar',
          degree: 'I Jornada de Empregabilidade – WorkinTech 2023.1 (20 horas)',
          date: 'Mai 2023',
          type: 'certification',
          image: 'certificates/unicesumar.jpg',
          pdf: 'certificates/unicesumar-workintech-2023.pdf',
        },
      ],
    },
    footer: {
      eyebrow: 'Pronto para somar no seu time',
      headline1: 'Vamos construir',
      headline2: 'o próximo produto juntos.',
      ctaButton: 'Chamar no WhatsApp',
      downloadPt: 'Baixar Currículo (PT)',
      downloadEn: 'Download Resume (EN)',
      localTimeLabel: 'Horário Local · Maringá, PR',
      socialsLabel: 'Redes & Contato Direto',
      rights: 'Daniel Barrionuevo Gomes. Arquitetado com React, TypeScript & Framer Motion.',
    },
    projects: [
      {
        id: 'pacex-ai',
        index: '01',
        title: 'PaceX AI',
        subtitle: 'Web SaaS + App Mobile',
        categoryLabel: 'Ecossistema Full Stack, Mobile & IA',
        filterCategory: 'saas',
        secondaryCategories: ['mobile'],
        year: '2025–2026',
        role: 'Full Stack & Mobile',
        description:
          'Ecossistema completo de gestão de treinos e análise de performance (+100 usuários reais), integrando plataforma Web (Next.js/React), aplicativo nativo em React Native/Expo e motor de IA via Function Calling.',
        highlights: [
          'Mais de 100 usuários ativos em produção (Web + Mobile)',
          'Function Calling com Gemini & OpenRouter para prescrição inteligente',
          'Pagamentos recorrentes (Stripe & AbacatePay)',
          'Backend em Python/Django + Node.js com PostgreSQL, Docker e AWS',
        ],
        tags: ['Next.js', 'React Native', 'Python / Django', 'PostgreSQL', 'Docker', 'IA Agents'],
        mediaType: 'pacex-unified',
        previewImage: 'pacex_dashboard_real.png',
        videoSrc: 'videoTelaPaceX.mp4',
        mobileFolder: 'PaceXmobile',
        mobileImages: PACEX_MOBILE_IMAGES,
        liveUrl: 'https://pacexai.com',
        accentColor: '#3b82f6',
        isFlagship: true,
        browserHost: 'pacexai.com',
      },
      {
        id: 'gerenciador-gastos',
        index: '02',
        title: 'Gerenciador de Gastos',
        subtitle: 'Open Finance & Liquid Glass 120Hz',
        categoryLabel: 'Aplicativo Mobile Financeiro',
        filterCategory: 'mobile',
        year: '2026',
        role: 'Mobile & Arquitetura',
        description:
          'Aplicativo mobile de controle financeiro integrado via Open Finance (Pluggy) com interface Liquid Glass em 120Hz, categorização automática no Supabase/PostgreSQL, Modo Demo de 12 meses e suíte de testes T1–T9.',
        highlights: [
          'Demo real gravada no Galaxy S24 (Modo Demo 12 meses)',
          'Integração Open Finance + PostgreSQL / Supabase',
          'Repositório público auditado com zero leaks (gitleaks + PII checks)',
        ],
        tags: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Open Finance'],
        mediaType: 'mobile-video-toggle',
        previewImage: 'projects/gerenciador-de-gastos.jpg',
        posterImage: 'projects/gerenciador-de-gastos-screen.jpg',
        videoSrc: 'projects/video_demo_gerenciador_gastos.mp4',
        repoUrl: 'https://github.com/Cawlino/gerenciador-de-gastos',
        accentColor: '#0ea5e9',
        isFlagship: true,
      },
      {
        id: 'adventista-play',
        index: '03',
        title: 'Adventista Play',
        subtitle: 'Educação Gamificada + IA',
        categoryLabel: 'App Mobile & Web Gamificado',
        filterCategory: 'mobile',
        year: '2026',
        role: 'Full Stack & Mobile',
        description:
          'Plataforma gamificada inspirada no Duolingo para estudo bíblico diário. Combina interfaces web e mobile reativas com sistema de XP, ofensivas (streaks) e quizzes gerados automaticamente com Gemini AI.',
        highlights: [
          'Sistema completo de gamificação (XP, níveis e streaks)',
          'Gerador automático de quizzes via Gemini AI',
          'Autenticação e persistência em tempo real via Supabase',
        ],
        tags: ['React Native', 'Next.js', 'TypeScript', 'Supabase', 'Gemini AI'],
        mediaType: 'mobile-carousel',
        previewImage: 'PrintsApps/ADVplay/Screenshot_20260626_172322_Chrome.jpg',
        mobileFolder: 'ADVplay',
        mobileImages: ADV_PLAY_IMAGES,
        liveUrl: 'https://adventista-play.vercel.app/',
        accentColor: '#60a5fa',
        isFlagship: true,
      },
      {
        id: 'vitrine-web',
        index: '04',
        title: 'Vitrine Web',
        subtitle: 'Estúdio & Sistemas Sob Medida',
        categoryLabel: 'Plataforma Comercial & Motion',
        filterCategory: 'sites',
        year: '2026',
        role: 'Frontend & Motion',
        description:
          'Plataforma comercial desenvolvida para apresentar sistemas web sob medida, landing pages de alta conversão e ERPs corporativos, com coreografia fluida de scroll em GSAP e design responsivo.',
        highlights: [
          'Animações GSAP fluidas e arquitetura leve React + Vite',
          'Apresentação interativa de projetos reais para conversão B2B',
          'Interface responsiva otimizada para velocidade de carregamento',
        ],
        tags: ['React', 'Vite', 'Tailwind CSS', 'GSAP'],
        mediaType: 'browser-image',
        previewImage: 'projects/vitrine-web.png',
        liveUrl: 'https://agenciavitrineweb.vercel.app',
        accentColor: '#38bdf8',
        isFlagship: true,
        browserHost: 'agenciavitrineweb.vercel.app',
      },
      {
        id: 'painel-vagas',
        index: '05',
        title: 'Painel de Vagas',
        subtitle: 'Hub Serverless & IA',
        categoryLabel: 'Web App & Automação com IA',
        filterCategory: 'saas',
        year: '2026',
        role: 'Full Stack Serverless',
        description:
          'Hub inteligente para mapear processos seletivos e oportunidades tech. Executa scrapers serverless (LinkedIn/Catho), lê e-mails de recrutadores com IA e calcula score de compatibilidade em milissegundos.',
        highlights: [
          'Algoritmo de match score com o perfil técnico',
          'Integração Google Apps Script (REST JSON) + Vercel CI/CD',
        ],
        tags: ['React 19', 'Vite', 'Tailwind CSS', 'Web Scraping', 'Google Apps Script'],
        mediaType: 'image',
        previewImage: 'PrintsApps/PainelVagas/screenshot.png',
        liveUrl: 'https://painel-de-vagas-frontend.vercel.app/',
        accentColor: '#38bdf8',
        isFlagship: false,
      },
      {
        id: 'cometchart',
        index: '06',
        title: 'CometChart',
        subtitle: 'Dashboard Financeiro KPIs',
        categoryLabel: 'Dados, BI & Analytics Web',
        filterCategory: 'data',
        year: '2026',
        role: 'Full Stack Developer',
        description:
          'Painel financeiro interativo para monitoramento de KPIs e receita em tempo real usando React 19, TanStack Start/Router e Tailwind CSS, apoiado por API REST Node.js/Express, PostgreSQL e Drizzle ORM via Docker.',
        highlights: [
          'Renderização rápida de métricas financeiras com TanStack Router',
          'Persistência tipada com Drizzle ORM + PostgreSQL em Docker',
        ],
        tags: ['React 19', 'TanStack Router', 'Node.js', 'PostgreSQL', 'Drizzle ORM', 'Docker'],
        mediaType: 'dashboard-preview',
        previewImage: 'pacex_dashboard.png',
        accentColor: '#818cf8',
        isFlagship: false,
      },
      {
        id: 'upm',
        index: '07',
        title: 'Universal Project Memory',
        subtitle: 'Padrão Open Source para IA',
        categoryLabel: 'DevTools & Engenharia de IA',
        filterCategory: 'data',
        year: '2026',
        role: 'Autor & Maintainer',
        description:
          'Padrão aberto e CLI para eliminar amnésia de contexto entre sessões de Agentes de IA em projetos de software, versionando estado (STATUS.md), mapa arquitetural e ADRs em Markdown.',
        highlights: [
          'Scripts de automação PowerShell & Shell para cold-start de agentes',
          'Protocolo append-only de Architecture Decision Records (ADRs)',
        ],
        tags: ['Markdown', 'PowerShell', 'Shell', 'AI Agents', 'ADRs'],
        mediaType: 'image',
        previewImage: 'projects/upm.png',
        repoUrl: 'https://github.com/Cawlino/universal-project-memory',
        accentColor: '#60a5fa',
        isFlagship: false,
      },
      {
        id: 'dr-cassiano',
        index: '08',
        title: 'Dr. Cassiano Martins',
        subtitle: 'Clínica & Ortodontia',
        categoryLabel: 'Site Profissional de Saúde',
        filterCategory: 'sites',
        year: '2026',
        role: 'Frontend & UI/UX',
        description:
          'Site profissional para odontologia com comparador visual interativo de resultados clínicos, catálogo de tratamentos e fluxo direto de agendamento via WhatsApp.',
        highlights: ['Comparador interativo antes/depois', 'Conversão otimizada mobile-first'],
        tags: ['React', 'Vite', 'CSS3', 'UI/UX'],
        mediaType: 'image',
        previewImage: 'projects/dentista-cassiano.png',
        liveUrl: 'https://dr-cassiano-ortodontia.vercel.app',
        accentColor: '#2dd4bf',
        isFlagship: false,
      },
      {
        id: 'junior-moveis',
        index: '09',
        title: 'Júnior Móveis',
        subtitle: 'Móveis Planejados & Orçamento',
        categoryLabel: 'Site Comercial & Simulador',
        filterCategory: 'sites',
        year: '2026',
        role: 'Web Developer',
        description:
          'Site comercial sob medida com galeria de obras executadas, simulador interativo de orçamento para ambientes e integração direta para fechamento no WhatsApp.',
        highlights: ['Simulador interativo de orçamento', 'Galeria de obras reais em produção'],
        tags: ['HTML5', 'Tailwind CSS', 'JavaScript'],
        mediaType: 'image',
        previewImage: 'projects/junior-moveis.png',
        liveUrl: 'https://jrmoveissobmedida.com.br',
        accentColor: '#fb923c',
        isFlagship: false,
      },
      {
        id: 'thaissa-simitan',
        index: '10',
        title: 'Thaísa Simitan',
        subtitle: 'Site Institucional & SEO',
        categoryLabel: 'Site Profissional & Marca',
        filterCategory: 'sites',
        year: '2026',
        role: 'Web Developer & SEO',
        description:
          'Site institucional e portfólio profissional com apresentação de serviços, arquitetura responsiva mobile-first, integração social e SEO estruturado para ranqueamento orgânico.',
        highlights: ['SEO técnico estruturado', 'Carregamento rápido e design limpo'],
        tags: ['HTML5', 'CSS3', 'JavaScript', 'SEO'],
        mediaType: 'image',
        previewImage: 'projects/thaissa-simitan.jpg',
        liveUrl: 'https://thaissasimitan.com.br',
        accentColor: '#e879f9',
        isFlagship: false,
      },
    ],
  },
  en: {
    nav: {
      brandPrefix: 'Code by',
      brandRole: 'Full Stack & Mobile Developer',
      availability: 'Available immediately · Remote / Hybrid',
      links: [
        { id: 'flagships', label: 'Flagships' },
        { id: 'projects-archive', label: 'Work' },
        { id: 'skills', label: 'Stack' },
        { id: 'experience', label: 'Experience' },
      ],
      downloadCv: 'Resume PDF',
      contactCta: "Let's talk",
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    hero: {
      locationTop: 'Located in',
      locationBottom: 'Maringá, PR · Brazil',
      roleLine1: 'Full Stack &',
      roleLine2: 'Mobile Developer',
      summary:
        '3–4 years of hands-on experience building fast interfaces (React, Next.js, React Native) and scalable APIs (Node.js, Python, PostgreSQL). Creator of the PaceX AI ecosystem with 100+ active users, LLM integrations, and data pipelines.',
      marqueeText: 'Daniel Barrionuevo — Full Stack & Mobile Developer — ',
      marqueePause: 'Pause marquee',
      marqueePlay: 'Play marquee',
      ctaPrimary: 'Explore Projects',
      ctaResume: 'Download Resume (EN)',
      photoBadge: '100+ production users',
      metrics: [
        { value: '3–4 yrs', label: 'Hands-on coding experience' },
        { value: '100+', label: 'Real users on PaceX AI' },
        { value: 'Full Stack', label: 'Web, Mobile, APIs & AI' },
        { value: 'English C1', label: 'Advanced technical fluency' },
      ],
      triageBadges: [
        'Immediate start',
        'Remote / Global async teams',
        'B.Sc. Software Engineering (UniCesumar)',
      ],
    },
    projectsSection: {
      flagshipEyebrow: '01 · Featured Case Studies',
      flagshipTitle: 'Production-grade',
      flagshipTitleAccent: 'web & mobile systems',
      flagshipSubtitle:
        'End-to-end engineering deliverables combining reactive UI, cross-platform mobile apps, generative AI agents, and relational cloud backends.',
      activeProjectPrefix: 'FEATURED',
      liveDemoLabel: 'Live Production Demo',
      visitProject: 'Visit live site',
      viewRepo: 'View on GitHub',
      previousScreen: 'Previous screen',
      nextScreen: 'Next screen',
      pacexWebTab: 'Web Platform (Video)',
      pacexMobileTab: 'Mobile App (6 Screens)',
      expensesVideoTab: 'Real Demo Video (S24)',
      expensesImagesTab: 'Screens & Architecture',
      screenLabel: 'Screen',
      indexEyebrow: '02 · Complete Archive',
      indexTitle: 'Complete',
      indexTitleAccent: 'project archive',
      indexSubtitle:
        'Hover any row to trigger the interactive preview window or filter by engineering domain.',
      tablistLabel: 'Filter projects by category',
      categories: [
        { id: 'all', label: 'All' },
        { id: 'saas', label: 'Web & SaaS' },
        { id: 'mobile', label: 'Mobile Apps' },
        { id: 'sites', label: 'Business Sites' },
        { id: 'data', label: 'Data & DevTools' },
      ],
      columns: {
        project: 'Project',
        category: 'Domain & Role',
        stack: 'Core Stack',
        year: 'Year / Link',
      },
      modalAction: 'View ↗',
    },
    skillsSection: {
      eyebrow: '03 · Technical Capabilities',
      title: 'Production',
      titleAccent: 'engineering stack',
      subtitle:
        'Focused on clean code, 60fps user interfaces, resilient REST backends, and practical Generative AI & BI pipelines.',
      categories: [
        {
          id: 'frontend',
          title: 'Frontend Web',
          experienceLabel: '3–4 yrs',
          description: 'Reactive SPAs, SSR architectures, smooth motion, and accessible UI.',
          skills: [
            'React 19',
            'Next.js',
            'TypeScript',
            'JavaScript ES6+',
            'Tailwind CSS',
            'TanStack Router',
            'Framer Motion',
            'Vite',
          ],
        },
        {
          id: 'mobile',
          title: 'Mobile Cross-Platform',
          experienceLabel: '2–3 yrs',
          description: 'Native iOS & Android experiences validated with active users.',
          skills: [
            'React Native',
            'Expo',
            'TypeScript',
            'State Sync',
            'Native Mobile UX',
            'Gamification & Streaks',
          ],
        },
        {
          id: 'backend',
          title: 'Backend, Cloud & DB',
          experienceLabel: '3–4 yrs',
          description: 'RESTful APIs, relational modeling, Docker containers, and payments.',
          skills: [
            'Node.js / Express',
            'Python (Django / FastAPI)',
            'PostgreSQL',
            'Supabase',
            'Drizzle ORM',
            'Docker',
            'AWS / Vercel',
            'Stripe / AbacatePay',
          ],
        },
        {
          id: 'ai_data',
          title: 'AI Engineering & Data BI',
          experienceLabel: '3 yrs',
          description: 'Production LLM agents, automated ETL pipelines, and analytics.',
          skills: [
            'Function Calling',
            'Gemini / OpenRouter / Grok',
            'AI Agents & RAG',
            'Power BI & DAX',
            'Power Query',
            'Advanced SQL',
            'Python Pandas / ETL',
          ],
        },
      ],
    },
    experienceSection: {
      eyebrow: '04 · Career & Education',
      title: 'Professional',
      titleAccent: 'journey',
      workTitle: 'Work Experience',
      educationTitle: 'Education & Verified Certificates',
      zoomLabel: 'Expand certificate',
      closeLabel: 'Close certificate',
      openOriginal: 'Open original document ↗',
      experiences: [
        {
          company: 'Independent / Client & Product Delivery',
          role: 'Full Stack & Mobile Developer (Freelance)',
          date: 'Mar 2026 – Present',
          badge: 'Current',
          description: [
            'End-to-end delivery of web applications and React Native/Expo mobile apps (including Expense Tracker and Job Board Hub).',
            'High-converting business websites built with SEO, responsive design, and interactive motion (Vitrine Web, Júnior Móveis, Dr. Cassiano, Thaísa Simitan).',
            'Serverless backends, AI workflow automation, and CI/CD pipelines via GitHub Actions and Vercel.',
          ],
        },
        {
          company: 'PaceX AI (pacexai.com)',
          role: 'Full Stack & Mobile Developer',
          date: 'Jun 2025 – Mar 2026',
          badge: '100+ users',
          description: [
            'Product leadership and full-stack coding across the web platform (Next.js/React), native mobile app (React Native/Expo), and backend (Python/Django & Node.js).',
            'Engineered an AI recommendation engine (Gemini, Grok, OpenRouter) using Function Calling for intelligent workout load analysis.',
            'Built PostgreSQL + Docker infrastructure with recurring billing via Stripe and AbacatePay, serving 100+ active users.',
          ],
        },
        {
          company: 'ROQT | Data & AI',
          role: 'Data & BI Analyst Intern',
          date: 'Jun 2025 – Aug 2025',
          description: [
            'Built and maintained interactive Power BI executive dashboards using advanced DAX and Power Query modeling.',
            'Developed automated Python and SQL ETL pipelines consolidating REST APIs and relational databases in agile squads.',
          ],
        },
        {
          company: 'Ired Internet',
          role: 'L2 Technical Support & Internship',
          date: 'Nov 2023 – Jun 2025',
          description: [
            'Diagnosed and resolved complex networking, connectivity, and communication protocol incidents under strict SLAs.',
            'Performed root-cause analysis and latency mitigation across critical financial and administrative workflows.',
          ],
        },
      ],
      education: [
        {
          institution: 'UniCesumar',
          degree: 'B.Sc. in Software Engineering (Completed)',
          date: 'Jan 2022 – Dec 2025',
          type: 'education',
          image: 'certificates/unicesumar.jpg',
        },
        {
          institution: 'Alura',
          degree: 'Software Engineering Immersion: Dev in the AI Era',
          date: 'Nov 2026',
          type: 'certification',
          image: 'certificates/alura-engenharia-software.png',
          pdf: 'certificates/alura-engenharia-software.pdf',
        },
        {
          institution: 'Samsung Ocean',
          degree: 'Optimization, Evolutionary Computing & Linear Programming',
          date: 'Oct 2026',
          type: 'certification',
          image: 'certificates/samsung-ocean.png',
        },
        {
          institution: 'Data Science Academy',
          degree: 'Microsoft Power BI for Business Intelligence & Data Science',
          date: '2025',
          type: 'certification',
          image: 'certificates/power_bi.jpg',
        },
        {
          institution: 'Udemy Alumni',
          degree: 'Integrated IT Technician Certification',
          date: 'Dec 2025 – Jan 2026',
          type: 'certification',
        },
        {
          institution: 'Udemy',
          degree: 'The Complete Full-Stack Web Development Bootcamp',
          date: '2025',
          type: 'certification',
        },
        {
          institution: 'UniCesumar · LATECH',
          degree: 'WorkinTech 2024.2 Technology Workshop (8 hours)',
          date: 'Oct 2024',
          type: 'certification',
          image: 'certificates/unicesumar.jpg',
          pdf: 'certificates/unicesumar-workintech-2024.pdf',
        },
        {
          institution: 'UniCesumar',
          degree: 'Professions Fair – ROTARY (20 hours)',
          date: 'Oct 2023',
          type: 'certification',
          image: 'certificates/unicesumar.jpg',
          pdf: 'certificates/unicesumar-mostra-rotary-2023.pdf',
        },
        {
          institution: 'UniCesumar',
          degree: '1st Employability Journey – WorkinTech 2023.1 (20 hours)',
          date: 'May 2023',
          type: 'certification',
          image: 'certificates/unicesumar.jpg',
          pdf: 'certificates/unicesumar-workintech-2023.pdf',
        },
      ],
    },
    footer: {
      eyebrow: 'Ready to contribute from day one',
      headline1: "Let's build",
      headline2: 'something great together.',
      ctaButton: 'Message on WhatsApp',
      downloadPt: 'Currículo PDF (PT)',
      downloadEn: 'Download Resume (EN)',
      localTimeLabel: 'Local Time · Maringá, PR',
      socialsLabel: 'Socials & Direct Contact',
      rights: 'Daniel Barrionuevo Gomes. Engineered with React, TypeScript & Framer Motion.',
    },
    projects: [
      {
        id: 'pacex-ai',
        index: '01',
        title: 'PaceX AI',
        subtitle: 'Web SaaS + Mobile App',
        categoryLabel: 'Full Stack, Mobile & AI Ecosystem',
        filterCategory: 'saas',
        secondaryCategories: ['mobile'],
        year: '2025–2026',
        role: 'Full Stack & Mobile',
        description:
          'Complete workout management & performance analytics ecosystem (100+ real users), combining a Next.js/React Web platform, native React Native/Expo mobile app, and Generative AI via Function Calling.',
        highlights: [
          '100+ real active users in production (Web + Mobile)',
          'Function Calling with Gemini & OpenRouter for smart coaching',
          'Recurring billing via Stripe & AbacatePay',
          'Python/Django + Node.js backend with PostgreSQL, Docker & AWS',
        ],
        tags: ['Next.js', 'React Native', 'Python / Django', 'PostgreSQL', 'Docker', 'AI Agents'],
        mediaType: 'pacex-unified',
        previewImage: 'pacex_dashboard_real.png',
        videoSrc: 'videoTelaPaceX.mp4',
        mobileFolder: 'PaceXmobile',
        mobileImages: PACEX_MOBILE_IMAGES,
        liveUrl: 'https://pacexai.com',
        accentColor: '#3b82f6',
        isFlagship: true,
        browserHost: 'pacexai.com',
      },
      {
        id: 'gerenciador-gastos',
        index: '02',
        title: 'Gerenciador de Gastos',
        subtitle: 'Open Finance & Liquid Glass 120Hz',
        categoryLabel: 'Personal Finance Mobile App',
        filterCategory: 'mobile',
        year: '2026',
        role: 'Mobile & Architecture',
        description:
          'Personal finance mobile app integrated with Open Finance (Pluggy), featuring 120Hz Liquid Glass UI, automated Supabase/PostgreSQL categorization, 12-month Demo Mode, and audited T1–T9 security/E2E tests.',
        highlights: [
          'Recorded live on Galaxy S24 (12-Month Demo Mode)',
          'Open Finance integration + PostgreSQL / Supabase',
          'Public repo audited with zero secrets/PII findings',
        ],
        tags: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Open Finance'],
        mediaType: 'mobile-video-toggle',
        previewImage: 'projects/gerenciador-de-gastos.jpg',
        posterImage: 'projects/gerenciador-de-gastos-screen.jpg',
        videoSrc: 'projects/video_demo_gerenciador_gastos.mp4',
        repoUrl: 'https://github.com/Cawlino/gerenciador-de-gastos',
        accentColor: '#0ea5e9',
        isFlagship: true,
      },
      {
        id: 'adventista-play',
        index: '03',
        title: 'Adventista Play',
        subtitle: 'Gamified Learning + AI',
        categoryLabel: 'Gamified Mobile & Web App',
        filterCategory: 'mobile',
        year: '2026',
        role: 'Full Stack & Mobile',
        description:
          'Duolingo-inspired gamified platform for daily Bible study. Combines responsive Next.js & React Native UIs with XP progression, daily streaks, and Gemini AI-generated quizzes.',
        highlights: [
          'Full gamification engine (XP, streaks & leagues)',
          'Automated quiz generator powered by Gemini AI',
          'Supabase Auth & real-time progress sync',
        ],
        tags: ['React Native', 'Next.js', 'TypeScript', 'Supabase', 'Gemini AI'],
        mediaType: 'mobile-carousel',
        previewImage: 'PrintsApps/ADVplay/Screenshot_20260626_172322_Chrome.jpg',
        mobileFolder: 'ADVplay',
        mobileImages: ADV_PLAY_IMAGES,
        liveUrl: 'https://adventista-play.vercel.app/',
        accentColor: '#60a5fa',
        isFlagship: true,
      },
      {
        id: 'vitrine-web',
        index: '04',
        title: 'Vitrine Web',
        subtitle: 'Digital Studio & Custom Systems',
        categoryLabel: 'Interactive Agency Site & Motion',
        filterCategory: 'sites',
        year: '2026',
        role: 'Frontend & Motion',
        description:
          'Commercial agency platform built to showcase custom web systems, high-converting landing pages, and corporate ERPs with fluid GSAP motion choreography and responsive design.',
        highlights: [
          'Fluid GSAP motion design & lightweight React + Vite stack',
          'Real client work showcase focused on B2B lead conversion',
          'Fast loading responsive layout across devices',
        ],
        tags: ['React', 'Vite', 'Tailwind CSS', 'GSAP'],
        mediaType: 'browser-image',
        previewImage: 'projects/vitrine-web.png',
        liveUrl: 'https://agenciavitrineweb.vercel.app',
        accentColor: '#38bdf8',
        isFlagship: true,
        browserHost: 'agenciavitrineweb.vercel.app',
      },
      {
        id: 'painel-vagas',
        index: '05',
        title: 'Painel de Vagas',
        subtitle: 'Serverless Job Hub & AI',
        categoryLabel: 'Serverless Web App & AI',
        filterCategory: 'saas',
        year: '2026',
        role: 'Full Stack Serverless',
        description:
          'Intelligent job-tracking hub running serverless scrapers across LinkedIn/Catho, parsing recruiter emails via AI, and computing instant stack compatibility match scores.',
        highlights: [
          'Real-time client-side match scoring & filtering',
          'Google Apps Script JSON API + Vercel CI/CD',
        ],
        tags: ['React 19', 'Vite', 'Tailwind CSS', 'Web Scraping', 'Google Apps Script'],
        mediaType: 'image',
        previewImage: 'PrintsApps/PainelVagas/screenshot.png',
        liveUrl: 'https://painel-de-vagas-frontend.vercel.app/',
        accentColor: '#38bdf8',
        isFlagship: false,
      },
      {
        id: 'cometchart',
        index: '06',
        title: 'CometChart',
        subtitle: 'Financial KPI Dashboard',
        categoryLabel: 'Data Visualization & Analytics',
        filterCategory: 'data',
        year: '2026',
        role: 'Full Stack Developer',
        description:
          'Interactive financial dashboard for monitoring real-time KPIs built with React 19, TanStack Start/Router, and Tailwind CSS, backed by Node.js/Express, PostgreSQL, and Drizzle ORM in Docker.',
        highlights: [
          'Fast KPI rendering with React 19 & TanStack Router',
          'Type-safe PostgreSQL schema via Drizzle ORM + Docker',
        ],
        tags: ['React 19', 'TanStack Router', 'Node.js', 'PostgreSQL', 'Drizzle ORM', 'Docker'],
        mediaType: 'dashboard-preview',
        previewImage: 'pacex_dashboard.png',
        accentColor: '#818cf8',
        isFlagship: false,
      },
      {
        id: 'upm',
        index: '07',
        title: 'Universal Project Memory',
        subtitle: 'Open Standard for AI Agents',
        categoryLabel: 'DevTools & AI Engineering',
        filterCategory: 'data',
        year: '2026',
        role: 'Creator & Maintainer',
        description:
          'Open specification and CLI tooling eliminating context amnesia across AI coding agent sessions via versioned STATUS.md, MEMORY.md, and append-only Architecture Decision Records.',
        highlights: [
          'Cross-platform PowerShell & Shell bootstrap scripts',
          'Append-only ADR workflow for persistent engineering teams',
        ],
        tags: ['Markdown', 'PowerShell', 'Shell', 'AI Agents', 'ADRs'],
        mediaType: 'image',
        previewImage: 'projects/upm.png',
        repoUrl: 'https://github.com/Cawlino/universal-project-memory',
        accentColor: '#60a5fa',
        isFlagship: false,
      },
      {
        id: 'dr-cassiano',
        index: '08',
        title: 'Dr. Cassiano Martins',
        subtitle: 'Dental & Orthodontics',
        categoryLabel: 'Healthcare Business Website',
        filterCategory: 'sites',
        year: '2026',
        role: 'Frontend & UI/UX',
        description:
          'Modern orthodontics practice website featuring an interactive before/after treatment comparator, service breakdown, and direct WhatsApp appointment booking.',
        highlights: ['Interactive before/after visual slider', 'Mobile-first conversion flow'],
        tags: ['React', 'Vite', 'CSS3', 'UI/UX'],
        mediaType: 'image',
        previewImage: 'projects/dentista-cassiano.png',
        liveUrl: 'https://dr-cassiano-ortodontia.vercel.app',
        accentColor: '#2dd4bf',
        isFlagship: false,
      },
      {
        id: 'junior-moveis',
        index: '09',
        title: 'Júnior Móveis',
        subtitle: 'Custom Cabinetry & Estimator',
        categoryLabel: 'Commercial Site & Simulator',
        filterCategory: 'sites',
        year: '2026',
        role: 'Web Developer',
        description:
          'Custom woodworking business platform featuring a real-project photo gallery, interactive budget estimator, and direct WhatsApp quote integration.',
        highlights: ['Interactive quote simulator', 'Real project portfolio showcase'],
        tags: ['HTML5', 'Tailwind CSS', 'JavaScript'],
        mediaType: 'image',
        previewImage: 'projects/junior-moveis.png',
        liveUrl: 'https://jrmoveissobmedida.com.br',
        accentColor: '#fb923c',
        isFlagship: false,
      },
      {
        id: 'thaissa-simitan',
        index: '10',
        title: 'Thaísa Simitan',
        subtitle: 'Personal Brand & SEO',
        categoryLabel: 'Institutional & Brand Site',
        filterCategory: 'sites',
        year: '2026',
        role: 'Web Developer & SEO',
        description:
          'Responsive institutional website and professional portfolio featuring structured services, social integrations, and semantic SEO optimization.',
        highlights: ['Structured semantic SEO', 'Fast loading responsive layout'],
        tags: ['HTML5', 'CSS3', 'JavaScript', 'SEO'],
        mediaType: 'image',
        previewImage: 'projects/thaissa-simitan.jpg',
        liveUrl: 'https://thaissasimitan.com.br',
        accentColor: '#e879f9',
        isFlagship: false,
      },
    ],
  },
};
