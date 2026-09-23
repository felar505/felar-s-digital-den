# Native reading library rebuild

## Goal
Replace the in-browser PDF engine with prebuilt book pages so every book opens instantly as part of Felar’s Studies, without PDF loading controls or a PDF-reader feel.

## Build
- Preprocess all 12 supplied books before deployment, preserving each original page’s text, diagrams, photos, and layout as optimized page artwork.
- Store a searchable text transcript and page/topic metadata beside each book, including Arabic right-to-left text.
- Replace the current reader with a focused reading-library view: one centered page, generous space, a compact floating toolbar, page scrubber, bookmarks, search, keyboard navigation, and fullscreen.
- Remove the crowded permanent explanation list. “JARVIS — Explain” becomes one quiet action; selecting extracted text can open an optional explanation panel without covering the page.
- Preserve last page, bookmarks, pet visibility, language direction, zoom, and mobile behavior.
- Add richer but restrained background depth, page-turn motion, ambient particles, smoother transitions, pet movement, and reduced-motion support.

## Technical details
- PDF processing happens once during development, not in the visitor’s browser.
- Runtime pages use responsive pre-rendered WebP/AVIF assets plus extracted searchable text; `pdfjs-dist` and its worker are removed from the app.
- Assets are generated at reading quality with predictable page dimensions and lazy preloading of adjacent pages to avoid loading an entire book at once.
- The original source documents remain untouched and are not shown through an embedded PDF viewer.

## Validation
- Open representative English, Arabic, illustrated, and story books and confirm page fidelity, text search, RTL, navigation, mobile layout, and no PDF/network loading.
- Check visual spacing and animation at desktop and phone sizes, including reduced motion.
