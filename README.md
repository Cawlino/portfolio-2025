# Daniel Barrionuevo Gomes — Portfólio Full Stack & Mobile

[![Live Deploy](https://img.shields.io/badge/Live_Portfolio-GitHub_Pages-2563eb?style=for-the-badge&logo=github)](https://cawlino.github.io/portfolio-2025/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-danielbarrionuevo-0a66c2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/danielbarrionuevo)
[![Resume PT](https://img.shields.io/badge/Currículo-PDF_PT-1d4ed8?style=for-the-badge)](https://cawlino.github.io/portfolio-2025/Curriculo_Daniel_Barrionuevo_PT.pdf)
[![Resume EN](https://img.shields.io/badge/Resume-PDF_EN-0284c7?style=for-the-badge)](https://cawlino.github.io/portfolio-2025/Resume_Daniel_Barrionuevo_EN.pdf)

> **Link Principal (Produção):** **[https://cawlino.github.io/portfolio-2025/](https://cawlino.github.io/portfolio-2025/)**  
> **Espelho Vercel:** [https://portfolio-2026-nine-ebon.vercel.app](https://portfolio-2026-nine-ebon.vercel.app)

---

## Para Recrutadores / For Recruiters

- **Atuação:** Desenvolvedor Full Stack & Mobile (*React, Next.js, React Native / Expo, TypeScript, Node.js, Python / Django, PostgreSQL, Supabase, Docker & IA*).
- **Experiência:** 3–4 anos de prática em desenvolvimento web, mobile e dados/BI, incluindo o ecossistema **PaceX AI** (+100 usuários reais em produção), **ROQT | Data & AI** e **Ired Internet**.
- **Idiomas & Disponibilidade:** Português (Nativo), Inglês Avançado (**C1**), início imediato (Remoto ou Híbrido).
- **Suporte Bilíngue no Portfólio:** Alternância instantânea **PT / EN** com download direto do currículo oficial em PDF no idioma selecionado.

---

## Projetos em Produção & Estudos de Caso

| # | Projeto | Ecossistema | Stack Principal | Link |
|---|---|---|---|---|
| **01** | **PaceX AI** | Web SaaS + App Mobile & IA | Next.js, React Native, Python/Django, PostgreSQL, Docker | [pacexai.com](https://pacexai.com) |
| **02** | **Gerenciador de Gastos** | App Mobile Financeiro (Open Finance) | React Native, Expo, TypeScript, Supabase | [GitHub](https://github.com/Cawlino/gerenciador-de-gastos) |
| **03** | **Adventista Play** | App Mobile & Web Gamificado | React Native, Next.js, Supabase, Gemini AI | [adventista-play.vercel.app](https://adventista-play.vercel.app/) |
| **04** | **Vitrine Web** | Estúdio & Sistemas Sob Medida | React, Vite, Tailwind CSS, GSAP | [agenciavitrineweb.vercel.app](https://agenciavitrineweb.vercel.app) |
| **05** | **Painel de Vagas** | Hub Serverless & Scraping com IA | React 19, Vite, Tailwind CSS, Google Apps Script | [painel-de-vagas-frontend.vercel.app](https://painel-de-vagas-frontend.vercel.app/) |
| **06** | **CometChart** | Dashboard Financeiro KPIs | React 19, TanStack Router, Node.js, PostgreSQL, Drizzle ORM | — |
| **07** | **Universal Project Memory** | Padrão Open Source para Agentes de IA | Markdown, PowerShell, Shell, ADRs | [GitHub](https://github.com/Cawlino/universal-project-memory) |
| **08** | **Dr. Cassiano Martins** | Site Profissional de Saúde | React, Vite, CSS3 | [dr-cassiano-ortodontia.vercel.app](https://dr-cassiano-ortodontia.vercel.app) |
| **09** | **Júnior Móveis** | Site Comercial & Simulador | HTML5, Tailwind CSS, JavaScript | [jrmoveissobmedida.com.br](https://jrmoveissobmedida.com.br) |
| **10** | **Thaísa Simitan** | Site Institucional & SEO | HTML5, CSS3, JavaScript, SEO | [thaissasimitan.com.br](https://thaissasimitan.com.br) |

---

## Arquitetura & Engenharia de Interface (60 FPS)

- **Stack:** React 19, TypeScript 5.9, Tailwind CSS 3.4, Framer Motion 12, Lucide React e Vite 7.
- **Performance na GPU:**
  - Aura azul global dirigida pelo scroll (`useScroll` + `useSpring` + `useTransform` em `App.tsx`).
  - Letreiro translúcido sincronizado com a velocidade e direção do scroll (`useVelocity` + `useAnimationFrame` em `Hero.tsx`) com controle acessível de pausa/reprodução (WCAG 2.2.2).
  - Lista interativa de projetos com modal flutuante e slider vertical via `useMotionValue` + `ref` direto (**zero re-renders do React** durante o movimento do mouse).
- **Estrutura de Pastas:**
  - `src/data/portfolioData.ts` — Fonte única bilíngue (`PT` / `EN`) de projetos, experiências, stack e certificados.
  - `src/context/LanguageContext.tsx` — Gerenciamento de idioma, `document.title` e links de currículo PDF.
  - `src/components/` — `Preloader.tsx`, `CustomCursor.tsx`, `MagneticButton.tsx`, `Navbar.tsx`, `Hero.tsx`, `Projects.tsx`, `Skills.tsx`, `Experience.tsx`, `Footer.tsx`.

---

## Desenvolvimento & Deploy

```sh
npm install
npm run dev          # Servidor local com HMR
npm run lint         # Verificação ESLint
npm run build        # Build de produção (base /)
npm run deploy       # Build (--base=/portfolio-2025/) e publicação no GitHub Pages
```

## Contato

- **E-mail:** `danielbgomes11@gmail.com`
- **WhatsApp:** `+55 (44) 99906-3897`
- **LinkedIn:** [linkedin.com/in/danielbarrionuevo](https://www.linkedin.com/in/danielbarrionuevo)
- **GitHub:** [github.com/Cawlino](https://github.com/Cawlino)
