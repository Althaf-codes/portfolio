# Project index media refinement

The shared homepage project index and /work collection now use IndexMedia for larger product previews. Flagship Work chapters and case-study media were not changed.

- VOD, Vehicle Monitoring and Meatzy use slim phone frames around their existing screenshots.
- Dental, Pharmacy and SNKR retain the device frames already present in their source images.
- Complete Chat uses its existing desktop screenshot in a restrained window frame on desktop, and its existing mobile screenshot in a phone frame on mobile.
- Mobile page background is #fcfcfa. Desktop background and existing mobile typography remain unchanged.
- All assets are existing project media; no application interfaces were generated or replaced.

Validation: lint, standalone TypeScript check and production build passed. Five relevant browser test groups passed, covering six viewport sizes, image loading, overflow, filtering, keyboard navigation, reduced motion and axe accessibility checks. Actual desktop VOD/Dental/Chat and mobile Pharmacy/Chat previews were captured and visually reviewed.

No commit or push was performed.
