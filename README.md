# Portfólio de Daniel Barrionuevo

React, TypeScript, Vite, Tailwind CSS e Framer Motion. Interface editorial escura com nove projetos, formação e certificados.

## Desenvolvimento

```sh
npm install
npm run dev
npm run build
npm run lint
```

Projetos novos estão em `src/components/NewProjects.tsx`; formação e certificados em `src/components/Experience.tsx`. Imagens ficam em `public/projects` e `public/certificates`. O PDF original da Alura foi preservado; sua carga horária está cortada no documento recebido.

## Hospedagem

O checkout possui vínculo local com Vercel (`portfolio-2026`) e usa base `/`. `npm run deploy` gera a versão com base `/portfolio-2025/` e publica na branch `gh-pages`. A Vercel usa `npm run build`, com base `/`.

- GitHub Pages: https://cawlino.github.io/portfolio-2025/
- Vercel: https://portfolio-2026.vercel.app
- Código: https://github.com/Cawlino/portfolio-2025
