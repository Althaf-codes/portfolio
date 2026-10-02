# Althafar Ali — Behind the Interface

Phase 1 of a personal product-engineering portfolio. No backend, database or CMS.

## Run locally

Use Node.js 20.9+ and pnpm. Install with `pnpm install`, then `pnpm dev`.
Other scripts: `pnpm lint`, `pnpm typecheck`, `pnpm build`, `pnpm test`.

This environment has different pnpm launchers in sandboxed/elevated shells. If its launcher tries to reinstall dependencies before running a script, invoke the installed tool directly:

```
node node_modules/next/dist/bin/next dev
node node_modules/eslint/bin/eslint.js .
node node_modules/typescript/bin/tsc --noEmit
node node_modules/next/dist/bin/next build
```

## Structure

- `app/`: App Router pages, global tokens, metadata, robots and sitemap.
- `components/home/`: editorial homepage, product composition and interactive Flutter evidence.
- `components/projects/`: reusable categorized index with shareable query state.
- `components/navigation/`, `components/layout/`: accessible navigation and contact ending.
- `data/projects.ts`: 13 typed project records; evidence, implemented/planned scope and sources.
- `data/site.ts`: contact and deployment settings. Resume and LinkedIn deliberately unset.
- `types/project.ts`: content contract.
- `public/projects/`, `public/fonts/`: real project imagery and licensed local fonts.
- `tests/`: responsive, navigation, keyboard, reduced-motion and axe checks.
- `docs/`: asset provenance and launch/content checklist.

## Publishing

Not deployed. Set `NEXT_PUBLIC_SITE_URL` to the verified canonical origin before building for launch. Until then, indexing is disabled and the sitemap is empty; there is no invented production domain. Complete the launch checklist first.

## Design decisions

Manrope provides clear structural typography; Instrument Serif italic adds editorial contrast. Cobalt is reserved for emphasis and the ending. The hero references HuntIQ without inventing its UI. The current 100xDev source is a single 550 × 453 composite: it is reused conservatively, not presented as three newly captured screens. Replace it with individual high-resolution captures to enable independent device choreography.

Motion uses native scrolling, Motion values, an explicit interface-to-engineering reveal, and a small capability transition. There is no scroll hijacking, WebGL, autoplay media or intro loader. Most content renders on the server. The project index, navigation and interactive evidence are client components.

## Browser checks

`pnpm test` expects a running server at http://127.0.0.1:3000. Install a Playwright browser or set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to an installed Chromium-compatible executable. Tests save full-page responsive screenshots to ignored `test-results/`.

Browser testing in this environment used Microsoft Edge after the old cached Chromium executable failed to launch. Automated accessibility checks supplement manual review; they are not accessibility certification.
