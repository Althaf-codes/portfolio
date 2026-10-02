# Refinement verification — 2 October 2026

- ESLint: passed with the existing Next.js rules. Local package-store files are ignored.
- TypeScript: passed.
- Production build: passed; 19 static/generated pages, including all 13 case studies.
- Final Playwright production suite: 7/7 passed (2.4 minutes), using installed Microsoft Edge.
- Viewports: 1440×900, 1280×800, 1280×650, 768×1024, 390×844 and 320×740.
- Pages: homepage, /work, 100xDev, HuntIQ, Dodo, ALBA and VOD. No document overflow at tested sizes.
- Visible project images are scrolled into view and checked for successful decoding before screenshot capture.
- Keyboard capability selection, engineering reveal, category query persistence/reload, navigation, missing-project page and reduced-motion scrolling: passed.
- New Flutter / Web toggle, keyboard Web capability selection, curated homepage order and archive order: passed.
- Axe WCAG 2 A/AA and 2.1 AA checks: zero reported violations on the seven key pages and selected expanded/capability states.
- Resume response: successful PDF; source and copied file SHA-256 match.
- Public copy scan: no internal-audit disclaimer phrases matched.

Visual review covered the original V1, revised homepage chapters, engineering selector, archive, desktop/tablet/mobile project introductions and 100xDev device composition. Fixed during review: device background masking, short-laptop device spacing, tablet headline wrapping, architecture-label contrast, and a long next-project title pushing its arrow beyond 320px.

Screenshots are in ignored test-results/. Tests are not a complete manual screen-reader audit or real-device performance measurement. No production traffic or performance metrics are claimed.

No commit, push or deployment was performed.

Development preview: use http://localhost:4000. The alternate 127.0.0.1 origin was blocked by Next.js development-origin protection, affecting hydration. The original Turbopack command was restored; the new-toggle/resume test passed on localhost in 12.6 seconds. No origin protection was disabled.


## October 2 follow-up validation

- Lint and standalone TypeScript check passed.
- Final production build passed; 19 static/generated pages.
- All 7 existing browser test groups passed (2.5 minutes), including axe accessibility checks across the homepage, archive and five case studies; no violations.
- After bounding hero phone movement, rebuilt successfully and reran responsive layouts and mobile/reduced-motion tests: 2 passed.
- Viewport coverage: 1440x900, 1280x800, 1280x650, 768x1024, 390x844, 320x740. No horizontal overflow or broken visible media detected.
- Visually reviewed updated hero, 100xDev composition, awards/footer, UI studies, work archive and flagship case-study screenshots. Supporting 100xDev captures retain their original resolution limitations.
- Eight supplied/corrected demo destinations returned successful responses. Actual UI-study demos were opened and captured.
- No commit or push performed.

## Desktop case-study scale / scroll reveals

Lint, standalone TypeScript check and production build passed. All 8 browser test groups passed in 2.6 minutes, including the new once-only reveal and live reduced-motion checks at 1280px and 390px. Existing six-viewport, case-study, keyboard and axe accessibility checks passed. Visually inspected desktop/laptop case-study headings, mobile case-study sizing and homepage reveal presentation. No dependencies added, no commit or push.
