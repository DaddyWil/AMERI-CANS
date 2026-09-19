# williamhans.app

Site of William "Billy" Hans, AMERI-CANS.

Thirty-six flat files. No build step, no folders. Keep them side by side at the repository root.

- index.html: landing page (https://williamhans.app/), a dashboard of powered equipment buttons (MARK IV expands to its product page, Site Guide, and rough 3D model), a Cut sheets group with both PDFs, plus the Internal button; #internal opens the Internal Tools tab (#calculators, #site-survey, and #branding land there too). The tab asks for the team password; Branding now lives inside it.
- mark-iv.html: MARK IV product page (https://williamhans.app/mark-iv.html)
- cut-sheet.html: MARK IV Site Guide, the web version of the cut sheet (https://williamhans.app/cut-sheet.html)
- viewer.html: the 3D model embedded inside mark-iv.html, cut-sheet.html, and the landing thumbnail (no longer linked on its own)
- model.html: Rough 3D model page with door controls, night mode, and OBJ/GLB download
- 8-stall.html, 10-station.html, 4-stall.html, ada-2.html, 8-stall-shower.html, water-station.html, bootwash.html: product pages for the powered equipment line (from the December 2025 cut sheets); og-<name>.jpg is each page's link preview image
- powered-equipment-cut-sheets.pdf: AMERI-CANS Powered Equipment Cut Sheets, linked from every product page
- mark-iv-cut-sheet.pdf: original AMERI-CANS MK IV cut sheet
- logo-stacked.png, logo-horizontal.png, logo-fence.png, brand-color-palette.pdf: brand downloads (linked from behind the password)
- work-order-intake.html, consumption.html, tank-cadence.html, install-estimator.html, materials-pricing.html, site-survey-universal.html, site-survey-multiplex.html: internal staff tools, stored encrypted; each shows only a password screen until unlocked
- gate.js: password check used by index.html. It holds a salt and an encrypted check value, never the password.
- support.js and ds-bundle.js: page runtime and component library, loaded by index.html, mark-iv.html, and cut-sheet.html
- og-image.png: link preview image for iMessage, Slack, LinkedIn, and X (referenced by absolute URL from the pages)

The pages load React and three.js from unpkg.com, so visitors need an internet connection. The calculators and the site survey worksheets work offline once opened.

Night and daylight mode. One setting shared by every page on the site: landing, product pages, cut sheet, 3D model, lock screens, and all seven tools. It follows the device's dark mode until someone picks, then the choice is stored on that device (toggle in the landing header or the Night / Daylight button on any page); open tabs switch together.

Password protection. The seven internal tools are stored encrypted (AES-256-GCM; the key comes from the team password through PBKDF2). Without the password the files are unreadable, even with the source open. A correct password unlocks every internal tool on that device ("Stay unlocked on this device"); Lock on the Internal Tools tab clears it. Changing the password means rebuilding the seven tool files and gate.js; the password itself is not in this repository.

The product page moved from https://williamhans.app/ to https://williamhans.app/mark-iv.html. Share that URL from now on; the root URL now previews as the landing page.

After pushing, force a fresh preview card: paste the URL into a new iMessage thread, or run it through LinkedIn Post Inspector or X Card Validator once to clear their caches.
