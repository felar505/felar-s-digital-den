# Felar’s Studies — Complete Foundation

## Goal
Build a private, local-first personal study computer centered on Felar’s uploaded PDFs. Studying remains a quiet reading experience; coins come only from break games.

## Experience
- A calm terminal-inspired shell with muted green accents, restrained CRT texture, fluid background motion, dark/light/system themes, responsive layouts, visible focus states, and reduced-effects support.
- First visit opens a short setup for name, pet, pet name, interface language, appearance, and optional YouTube setup. Returning visits open a personalized home screen.
- Persistent navigation, JARVIS shortcuts, pet presence, sound controls, and music controls remain available without obscuring reading.

## Pages and Systems
1. **Home** — welcome, last document/page, continue reading, pet room vignette, JARVIS status, and simple shortcuts.
2. **Library** — actual uploaded PDF catalog grouped by main/other subjects, search and subject filters, last-read state, bookmarks, and document opening.
3. **Reader** — PDF rendering with pages, direct page entry, zoom, fit width/page, fullscreen, keyboard controls, search where PDF text permits, bookmarks, and persistent last-page memory.
4. **Music** — persistent queue/player with a bundled public-domain Beethoven fallback track; YouTube URL/search architecture and clear unconfigured states without fake account flows or scraping.
5. **Pets** — owl, cat, bunny, frog, and penguin companions; rename, variant/accessory selection, idle animation, cosmetic shop, and simple predefined room slots.
6. **Games** — working Snake, Tic-Tac-Toe, Pong, 2048, Minesweeper, and Memory Match; local high scores and game-only coin rewards.
7. **Notes** — local create, rename, edit, and delete flow.
8. **Settings** — profile, language/RTL, theme, pet, music, reading, sounds, effects, data export, and confirmed reset.

## Data and Portability
- One versioned local application store for user, pet, games, library, notes, music, and settings.
- English, Arabic, and French translation dictionaries; Arabic sets RTL while PDFs remain unchanged.
- Keep runtime assets in `public/stuff/` (PDFs, music, sound effects, and static art) so the project can move to GitHub and Vercel without Lovable-hosted assets.
- No database, authentication, AI, study rewards, or backend for personal state.

## Technical Details
- Use TanStack Start routes and a shared root shell so music state survives navigation.
- Use a browser-compatible PDF renderer with its worker copied into public assets.
- Use the YouTube iframe player API for playback; optional search/API configuration remains environment-based and degrades cleanly when absent.
- Generate compact cyber-style UI sounds locally with the Web Audio API and include static fallback assets where useful.
- Keep game logic self-contained and pause loops when routes/components unmount.
- Add unique metadata for every content route and verify desktop and mobile behavior.

## Verification
- Confirm all supplied PDFs load and retain page positions.
- Exercise onboarding, all navigation, notes CRUD, pet purchases/equipping, room choices, all six games, coin awards, theme/language/RTL changes, music continuity, export/reset confirmation, keyboard controls, and responsive layouts.
- Check the final preview for build, runtime, console, and network errors.
