# Эмиль Аюпов — Portfolio

Персональное портфолио PHP Backend Developer на Astro + TypeScript. Дизайн: Monochrome Editorial.

## Стек

- Astro + TypeScript
- GSAP — сдержанные reveal-анимации
- CSS Grid + SVG
- Vitest + Playwright
- GitHub Actions + GitHub Pages

## Локальный запуск

```bash
npm install
npm run dev
```

## Проверки

```bash
npm run check
npm run test
npx playwright install chromium
npm run test:e2e
npm run build
```

## Публикация на GitHub Pages

1. Создай GitHub-репозиторий.
2. Загрузи проект в ветку `main`.
3. В репозитории открой **Settings → Pages**.
4. В разделе Build and deployment выбери **GitHub Actions**.
5. Workflow `Deploy to GitHub Pages` соберёт сайт и опубликует его.

`astro.config.mjs` автоматически определяет владельца и имя репозитория через `GITHUB_REPOSITORY`, поэтому поддерживает как `username.github.io`, так и обычный project site.

## Где редактировать резюме

Весь контент находится в `src/data/resume.ts`. Телефон и дата рождения намеренно не включены. Публичные контакты: Telegram, Email и Setka.

## Что ещё предстоит

- [ ] Добавить GitHub-проекты и реальные кейсы
- [ ] Добавить PDF-резюме после подготовки публичной версии
- [ ] Проверить точность формулировок и дат опыта
- [ ] Добавить favicon и Open Graph metadata
- [ ] Добавить Lighthouse CI после первого deploy
