# MARK IV pages

Five flat files. No build step, no folders. Keep them side by side.

- index.html: ad page
- cut-sheet.html: cut sheet
- viewer.html: 3D viewer, embedded by both pages (also works on its own)
- support.js and ds-bundle.js: page runtime and component library, loaded by index.html and cut-sheet.html

## Host on GitHub Pages

1. Put the five files at the root of the repository (or in a docs/ folder).
2. Settings, Pages, Source: Deploy from a branch. Pick the branch and the folder (/ or /docs).
3. Open https://<user>.github.io/<repo>/ for the ad and .../cut-sheet.html for the cut sheet.

The pages load React and three.js from unpkg.com, so visitors need an internet connection.
