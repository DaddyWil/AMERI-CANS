# williamhans.app

Nineteen flat files. No build step, no folders. Keep them side by side at the repository root.

- index.html: landing page (https://williamhans.app/), links to everything below; #calculators, #site-survey, and #branding open those tabs
- mark-iv.html: MARK IV product page (https://williamhans.app/mark-iv.html)
- cut-sheet.html: cut sheet (https://williamhans.app/cut-sheet.html)
- viewer.html: 3D viewer, embedded by the pages above (also works on its own)
- model.html: full 3D model with door controls, night mode, and OBJ/GLB download
- mark-iv-cut-sheet.pdf: original AMERI-CANS MK IV cut sheet
- logo-stacked.png, logo-horizontal.png, logo-fence.png, brand-color-palette.pdf: brand downloads linked from the Branding tab
- consumption.html, tank-cadence.html, install-estimator.html, materials-pricing.html: calculators (self-contained, no runtime files needed)
- site-survey-universal.html, site-survey-multiplex.html: Site Survey Worksheets (SOP Section 4) with the drag-and-drop layout sketch and print-to-PDF controlled form; self-contained, work offline, autosave in the browser
- support.js and ds-bundle.js: page runtime and component library, loaded by index.html, mark-iv.html, and cut-sheet.html
- og-image.png: link preview image for iMessage, Slack, LinkedIn, and X (referenced by absolute URL from the pages)

The pages load React and three.js from unpkg.com, so visitors need an internet connection. The calculators and the site survey worksheets work offline.

The product page moved from https://williamhans.app/ to https://williamhans.app/mark-iv.html. Share that URL from now on; the root URL now previews as the landing page.

After pushing, force a fresh preview card: paste the URL into a new iMessage thread, or run it through LinkedIn Post Inspector or X Card Validator once to clear their caches.
