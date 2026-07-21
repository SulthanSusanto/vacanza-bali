# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

This is Vacanza, freshly scaffolded with `create-next-app` and not yet built out. There is no custom
architecture yet — the app is currently the default Next.js App Router starter. Expect the user to
add pages, components, and content (including images placed directly in `public/`) incrementally, and
to provide more product/design context as the project grows. Update this file as real structure emerges
(routing conventions, data fetching patterns, shared components, etc.) — don't leave it describing a
starter template once the app has diverged from it.

## Commands

- `npm run dev` — start the dev server (Turbopack) at http://localhost:3000
- `npm run build` — production build (Turbopack)
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (`eslint-config-next` core-web-vitals + TypeScript rules)

There is no test runner configured yet.

## Architecture

- **App Router** under [src/app/](src/app/), with the `@/*` import alias mapped to `src/*` (see [tsconfig.json](tsconfig.json)).
- **Tailwind CSS v4** is wired in via `@tailwindcss/postcss` ([postcss.config.mjs](postcss.config.mjs)); global styles live in [src/app/globals.css](src/app/globals.css).
- **Static assets** (including photos) go in [public/](public/) and are served from `/`.
- TypeScript is in `strict` mode; `next.config.ts` has no custom options yet.
