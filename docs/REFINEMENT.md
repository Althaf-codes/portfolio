# Visual and content refinement

The existing Next.js App Router architecture, typed project model, archive filtering and dynamic project routes are preserved. No new runtime dependencies were added.

## Design
- Warm gallery background `#f7f6f2`, near-black ink `#171713`, warm gray text and neutral media stages. Deep indigo `#393673` replaces saturated blue; the ending uses ink.
- Manrope remains the primary font. Instrument Serif is limited to selected emphasis in the hero, cinematic chapter, archive introduction and closing line.
- Larger product imagery, quieter metadata, more deliberate line breaks and distinct flagship layouts.
- 100xDev uses the sharper standalone home screen as the dominant device and CSS-isolated learning/Launchpad devices from the actual composite. No UI was generated or redrawn.
- Controlled device depth, a functional engineering reveal, capability transitions and subtle link/arrow feedback. Reduced-motion support is retained.

## Content and routes
- First-person descriptions for all 13 projects; detailed stories for 100xDev, HuntIQ, VOD, Complete Chat, Dodo and ALBA.
- Flagship case studies use a large introduction, dominant media, system overview, engineering chapters, reflection and next project. Internal research disclaimers are removed from visitor content.
- Homepage order: HuntIQ, 100xDev, VOD, Complete Chat. Archive order: HuntIQ, Dodo, ALBA, 100xDev, VOD, Chat, Vehicle, Dental, Pharmacy, SNKR, Meatzy, News, OCR/Braille.
- The same engineering section now switches between Flutter and Web / Full Stack, with six capabilities in each mode. Navigation calls it Engineering; the old Flutter anchor remains compatible.
- Supplied HuntIQ image replaces the hand-built system illustration across homepage, archive, case study and capability preview.
- Supplied resume is downloadable from navigation, hero and footer. Source and destination SHA-256 match.

## Media
See ASSETS.md for exact provenance of every image. Additions include supplied HuntIQ art, a sharper 100xDev home capture, actual Dodo API/search and ALBA detail/viewer captures, Pharmacy, SNKR, and additional Dental/Meatzy images. Existing VOD, Chat and Vehicle imagery is retained. No 72-frame sequence or video is preloaded.

## Responsive work
Separate media compositions and controls at narrow widths; larger archive thumbnails; tablet hero line breaks; wrapping case metadata and next-project titles; single-stage mobile capability content. No scroll interception or cursor-following previews.

## Remaining input
Higher-resolution 100xDev supporting screens, optional HuntIQ interface captures, News/OCR imagery, LinkedIn URL, preferred contact address and canonical domain. Details remain in CONTENT-TODO.md.

No commit, push or deployment performed.

## October 2 follow-up

Replaced footer tagline with conventional copyright, achievement numerals with named award/result rows, and most decorative arrows with text links. Kept small external-link icons for actual demos and an envelope for email. Added verified HuntIQ, Dodo, ALBA, SNKR and Pharmacy demos; corrected repeated URLs in the request using the existing project sources. Added three smaller Flutter UI studies below the main index with real demo captures. Tightened phone crop masks and removed the composition baseline. Converted larger fixed CSS dimensions to rem and uses a 90% desktop root scale while retaining 16px body copy and native mobile proportions; no page zoom or transform is used.

## Case-study scale and homepage reveals

- Case-study typography, spacing and media limits are reduced approximately 10% only above 760px. Body copy remains readable; all existing mobile sizing rules are retained.
- Homepage content groups reveal once with a 14px rise over 500ms. Product imagery receives a 70ms delay. Hero entrance, filters and project rows keep their previous behavior.
- A small client enhancement uses IntersectionObserver and native Web Animations; no new dependencies or scroll-position React state. Server-rendered content is visible by default. Reduced-motion changes and keyboard focus immediately reveal content, and effects clean up during navigation.
