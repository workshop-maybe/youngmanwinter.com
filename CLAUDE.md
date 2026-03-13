# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Band website for Young Man Winter — a single-page Next.js 13 site (App Router) with Tailwind CSS and Framer Motion animations.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- No test framework is configured

## Architecture

- **Next.js 13 App Router** with `src/app/` directory. Single page app — `page.tsx` is a client component that renders `home-page.tsx`.
- **Styling**: Tailwind CSS v3 with `@tailwindcss/typography` plugin. Custom fonts: Advent Pro (sans) and Katibeh (mono) loaded via `next/font/google`.
- **Animations**: Framer Motion for fade-in and stagger effects.
- **Show data**: `src/data/shows.js` exports an `upcoming` array — update this file to add/remove shows.
- **Utilities**: `src/util/index.ts` has hex/string conversion helpers (likely unused legacy from Cardano work).
- **Webpack**: WASM support enabled in `next.config.js` (`asyncWebAssembly`, `layers`).
- **Path alias**: `@/*` maps to project root (e.g., `@/src/styles/globals.css`).
