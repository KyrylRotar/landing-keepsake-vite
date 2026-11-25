# Keepsake Landing Page

Адаптивний лендинг Keepsake, зібраний на Vite з Pug і SCSS.

## Демо

Після налаштування GitHub Pages: `https://kyrylrotar.github.io/landing-keepsake-vite/`

## Вимоги

- Node.js 20 або новішої версії
- npm

## Команди

```bash
npm install
npm run dev
npm run build
npm run preview
npm run format
npm run lint
npm run images
```

## Структура

```text
src/
├── assets/images/       # AVIF, WebP і JPEG в декількох розмірах
├── assets/fonts/
├── components/
├── data/                # дані навігації, портфоліо та секцій
├── includes/
├── layouts/main.pug
├── mixins/
├── pages/index.pug
└── styles/
    ├── abstracts/
    ├── base/
    ├── layout/
    ├── components/
    └── main.scss
```

Pug використовує `extends`, `block`, `append`, `include`, масиви даних, `each`, умови, `case` та міксини. SCSS зібрано через модулі `@use`/`@forward` і окремі БЕМ-partials.

## Інструменти

| Інструмент             | Призначення                            |
| ---------------------- | -------------------------------------- |
| Vite                   | локальний сервер і production-збірка   |
| Vituum Pug             | компіляція Pug-шаблонів                |
| Sass                   | модульні SCSS-стилі                    |
| PostCSS / Autoprefixer | автоматичні вендорні префікси          |
| Sharp                  | генерація адаптивних AVIF, WebP і JPEG |
| Prettier               | єдине форматування коду                |
| Stylelint              | перевірка SCSS і БЕМ-класів            |
| Husky / lint-staged    | перевірки перед комітами               |
| Commitlint             | Conventional Commits                   |
| GitHub Actions         | збірка, лінтинг і публікація Pages     |

## Browserslist

Цільові браузери описані у `.browserslistrc`: останні 2 версії Chrome, Firefox, Edge, Safari та iOS Safari.

Перевірка цілей і префіксів:

```bash
npx browserslist
npx autoprefixer --info
```

## Оптимізація

Для растрових робіт і записів журналу скрипт `npm run images` створює JPEG fallback, WebP і AVIF у ширинах 400 та 800 px. Pug-міксин `+picture` генерує `<picture>`, `srcset`, `sizes`, `width`, `height`, `decoding` і відповідний `loading`.
