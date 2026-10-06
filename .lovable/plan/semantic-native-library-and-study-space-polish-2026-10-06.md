# Semantic native library and study-space polish

## Goal
Turn every supplied book into real in-site reading content rather than a PDF canvas or page screenshot, while preserving the books’ words, illustrations, order, and Arabic direction. Upgrade reading controls, music, effects, and games without losing the calm terminal character.

## Build
- Reprocess all 12 source books into structured chapter/page data: headings, paragraphs, lists, tables, and extracted illustrations. Render that structure as selectable, searchable HTML with Arabic RTL and book-specific typography. Keep page artwork only as a fidelity fallback for layouts that cannot be reconstructed safely.
- Add reading methods in Settings: scrolling, left-to-right page turns, right-to-left page turns, vertical pages, Webtoon, and continuous vertical. Use Webtoon by default and preserve the selected method locally.
- Remove the global “Explain page” action. Detect a restrained set of subject-specific terms in each page, display only those as blue contextual links, and open a compact JARVIS definition panel for the selected term.
- Make the persistent music player hideable and minimizable into a draggable floating circle. Replace the built-in Beethoven track with the supplied `Hotel_4.mp3`, stored under `public/stuff/audio` for GitHub/Vercel portability.
- Add lightweight layered motion inspired by the reference: depth, particles, responsive light sweeps, and smooth transitions, with reduced-motion and visual-effects settings respected. Add one tiny, optional Sans-like visual easter egg without changing the app’s tone.
- Improve the six existing games’ controls, feedback, reset/end states, mobile playability, and core rules while keeping coins exclusive to game results.

## Technical details
- Build-time extraction only; the browser will never load or parse a PDF. Generated structured book JSON and extracted media live under `public/stuff/books`.
- Validate extracted text against the source page text. Preserve Arabic Unicode order and avoid OCR where embedded text exists; flag genuinely unreadable source glyphs rather than inventing replacements.
- Reader modes share one semantic content model and lazy-load nearby content so long books remain smooth.
- Player position and visibility use the existing centralized local state, not extra storage keys.

## Validation
- Compare representative Arabic, English, French, psychology, history, and story pages against their sources for exact wording, image placement, order, and direction.
- Test all reading modes, contextual explanations, bookmarks/search, mobile/desktop layouts, minimized player dragging, local audio, reduced motion, and all six games.
- Confirm the reader requests no PDF files and no full-page book screenshots during normal reading.
