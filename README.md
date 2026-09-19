# Felar's Digital Den

Build a complete personal study website called “Felar’s Studies”.

This is a private, personal study space primarily made for me, Felar. It is NOT intended to be a public educational platform, social network, productivity app, or Duolingo-style learning system.

The website should feel like a cozy personal computer / digital study room with a subtle retro-futuristic terminal aesthetic.

1. CORE DESIGN DIRECTION

The visual identity should be:

cozy

calm

minimal

spacious

easy on the eyes

dark and slightly futuristic

inspired by old computer terminals / CMD interfaces

muted green terminal-style accents

subtle glow

subtle CRT/scanline/noise effects where appropriate

modern and polished rather than literally looking like an old terminal

smooth animations

lots of breathing room

readable typography

Do NOT make it look like:

Duolingo

a generic SaaS dashboard

a cyberpunk video game

an overly complicated RPG

a colorful children's education app

a dashboard filled with cards and statistics

The site should feel like a personal computer system that happens to contain my entire study library.

Use green as the primary accent, but keep the interface visually comfortable. Avoid excessive neon.

Support:

Dark mode

Light mode

System theme

The interface should support both LTR and RTL layouts.

2. IMPORTANT: THIS IS A LIBRARY

The most important feature is the study library.

DO NOT turn my PDFs into simplified lessons.

DO NOT summarize the PDFs into artificial lessons.

DO NOT create:

XP

streaks

levels

hearts

study coins

daily quests

forced activities

progress bars for studying

fake achievements for reading

educational mini-games inside lessons

I want the actual PDFs to remain the main study material.

The website should provide a beautiful, convenient way to browse and read them.

Use the PDFs I provide as the source material and organize the library according to their actual filenames/content.

The curriculum is:

MAIN SUBJECTS:

Arabic:

Part 1

Part 2

Story

Egyptian History:

Part 1

Part 2

English:

Part 1

Part 2

Story

OTHER SUBJECTS:

Psychology:

Part 1

Part 2

French:

Part 1

Part 2

Do not invent additional study material.

3. HOME PAGE

Create a calm personal home screen.

It should contain:

“Felar’s Studies”

a short description

navigation to Library, Games, Music, Notes, Pet, Settings

current/last opened study material

the user's pet

a small JARVIS assistant

music player access

First-time users should see a welcoming setup experience.

Example concept:

“Welcome to Felar’s Studies.”

“A personal space for studying, reading, listening to music, and taking breaks.”

“This website was created by Felar as a simple personal study space.”

Do not make the introduction overly long.

4. FIRST-TIME SETUP

If no local user data exists, show a simple onboarding flow.

Ask:

Name

“What should we call you?”

Default:
Felar

Allow the user to change it.

Pet

Let the user choose a starting pet.

Initial options can include:

Owl

Cat

Bunny

Frog

Penguin

Use simple assets/placeholders initially if necessary.

Pet name

“What should we call your pet?”

Allow any reasonable name.

Language

Provide:

English

العربية

Français

The website UI must change language.

Arabic must switch the interface to RTL.

Appearance

Dark

Light

System

Music

Offer:
“Connect YouTube Music / YouTube”

Allow the user to skip this.

Save all setup information locally.

The onboarding should only appear when the user has no setup data or explicitly resets their data.

5. LANGUAGE SYSTEM

Build proper internationalization from the beginning.

Do NOT hardcode English text throughout components.

Create a translation system such as:

/translations/en.json
/translations/ar.json
/translations/fr.json

All interface text should use translation keys.

Arabic must automatically switch the application's direction to RTL.

French and English should remain LTR.

The actual PDF content must NOT be translated automatically. Language selection controls the WEBSITE INTERFACE only.

6. LIBRARY

Create a clean Library page.

Structure:

MAIN SUBJECTS

Arabic

Part 1

Part 2

Story

English

Part 1

Part 2

Story

Egyptian History

Part 1

Part 2

OTHER

Psychology

Part 1

Part 2

French

Part 1

Part 2

Use the PDFs I provide.

Make the library visually pleasant and easy to navigate.

Allow:

searching documents

filtering by subject

opening documents

remembering the last opened document

remembering the last page viewed

7. PDF READER

Create a proper built-in PDF reading experience.

The reader should support:

page navigation

previous/next page

page number

direct page number input

zoom in/out

fit width

fit page

fullscreen

document search if technically supported

bookmarks if practical

remember last page

keyboard navigation

clean reading mode

The PDF should be the focus of the screen.

Do not surround the PDF with unnecessary UI.

The persistent music player should remain usable while reading.

Do not modify or rewrite the PDFs.

8. MUSIC SYSTEM

Build music into the application's architecture from the beginning.

Primary integration should be YouTube / YouTube Music, because that is the music service I use.

Do NOT build Spotify as the primary service.

Use official YouTube APIs/player functionality where appropriate.

The music system should support a persistent player that remains active while navigating around the application.

The player should have:

current track/video

thumbnail

title

artist/channel where available

play/pause

previous

next

seek

volume

mute

queue where practical

The player should remain persistent while:

reading PDFs

browsing the library

playing games

viewing the pet

navigating the site

Create a Music page.

Potential layout:

Music

[ Search YouTube ]

Current track

[ artwork ]
Title
Artist

[ previous ] [ play/pause ] [ next ]

My playlists / saved playlists

Allow users to connect/use YouTube.

If full YouTube Music account integration requires APIs, OAuth, or Google Cloud configuration, build the application architecture for it properly rather than faking it.

Do not scrape YouTube Music.

Do not create fake login screens.

Keep API credentials out of frontend source code.

Make any required API configuration environment-variable based.

If a Google/YouTube API key is needed, create a clear configuration point for it.

The system should gracefully explain when music integration is not configured.

9. PERSISTENT MUSIC PLAYER

Create a global music player component.

It should appear as a small unobtrusive floating/player bar.

It should not cover important content.

Example concept:

[ artwork ] Song Name
Artist
[ ◀ ] [ ▶/❚❚ ] [ ▶ ] [ 🔊 ]

Clicking it can expand into the full music panel.

Music state should persist across route changes.

Do not reload the player every time the user changes pages.

10. JARVIS

Create a tiny assistant called JARVIS.

JARVIS is NOT an AI chatbot.

Do NOT connect an AI API.

JARVIS is simply a small UI companion that knows about application state.

Place a small JARVIS button/widget in a persistent corner of the interface.

He can display short contextual messages such as:

“Welcome back, Felar.”

“Arabic Part 1 restored to page 42.”

“You have opened the library.”

“Music connected.”

“Game session started.”

“Your pet is currently sleeping.”

Keep messages short and occasional.

JARVIS should never become annoying.

He can provide quick shortcuts:

Open Library

Open Games

Open Music

Open Notes

Open Pet

Settings

The personality should be subtle, dry, calm, and slightly futuristic.

11. PET SYSTEM

Pets are a real feature of the site from the beginning.

Do NOT treat pets as a later add-on.

The user's pet should appear on the home page and have its own section.

Initial pets:

Owl

Cat

Bunny

Frog

Penguin

Each pet should have:

name

appearance

idle animation

accessories

cosmetic customization

The pet should not affect studying.

It is simply a companion/customization feature.

Allow the user to rename their pet later.

12. COINS

Coins are ONLY connected to the Games system.

Do NOT award coins for studying.

Do NOT create academic rewards.

Games can award coins based on scores or wins.

Coins can be spent in the Pet Shop.

Use local persistence.

Example:

Snake score → coins
Tic-Tac-Toe win → coins
etc.

Balance the rewards reasonably and keep the system simple.

13. PET SHOP

Create a simple cosmetic shop.

Categories can include:

Accessories:

hats

glasses

headphones

scarves

small decorative items

Pet appearance:

colors

patterns

variants

Room:

plants

lamps

desks

couches

computers

decorations

Only cosmetic items.

No gameplay advantages.

The user can purchase items using coins earned from games.

Purchased items should persist locally.

14. PET ROOM

Create a small cozy customizable room for the pet.

It should feel like a tiny personal digital room.

Allow purchased furniture/decorations to be placed or selected.

Keep the first implementation simple.

Do not build a complicated Sims-style placement system.

A grid or predefined slots is acceptable.

15. GAMES

Create a dedicated Games section.

Games are intended as short breaks from studying.

Initial games:

Snake

Tic-Tac-Toe

Pong

2048

Minesweeper

Memory Match

Games should be self-contained and lightweight.

Each game should:

work without a backend

save high scores locally where appropriate

award coins according to simple rules

have a restart button

have a return-to-games button

Do not turn the Games section into an RPG.

16. NOTES

Create a simple personal Notes section.

Users can:

create notes

edit notes

delete notes

rename notes

Use localStorage initially.

Keep the editor simple.

No backend required.

17. SETTINGS

Create a clean Settings page.

Sections:

PROFILE

name

LANGUAGE

English

Arabic

French

APPEARANCE

Dark

Light

System

PET

rename pet

change pet

manage cosmetics

MUSIC

YouTube connection/configuration

volume

autoplay preference where applicable

READING

remember last page

reader width

fullscreen preferences

SOUNDS

UI sound effects on/off

volume

DATA

export local data if practical

reset application data

The reset option must have a confirmation step.

18. SOUND DESIGN

Add subtle UI sound effects.

Examples:

button click

navigation

opening a document

game start

game over

coin reward

purchasing item

pet interaction

Sounds must be subtle.

Provide a global sound toggle and volume control.

Do not make every button scream at the user.

19. ANIMATIONS

Use lightweight CSS-based animations wherever possible.

Examples:

subtle page transitions

soft glowing terminal text

blinking cursor

tiny ambient particles

gentle floating effects

pet idle animations

smooth modal transitions

button hover effects

small coin reward animation

Avoid excessive animation.

The site should remain calm.

Provide a setting to reduce/disable visual effects if practical.

20. TECHNICAL REQUIREMENTS

Prefer a simple architecture.

Use:

React

TypeScript

Tailwind CSS

localStorage for personal application data

lightweight CSS animations

browser APIs where appropriate

Avoid unnecessary dependencies.

Do not create a backend unless absolutely required.

Do not create authentication.

Do not create a database for normal application state.

Do not add AI APIs.

Do not add unnecessary third-party services.

The application should work primarily as a client-side personal website.

YouTube integration is the intentional external integration.

Keep environment variables for API configuration.

21. DATA MODEL

Create a clean centralized application state.

At minimum support:

user:

name

language

theme

pet:

type

name

ownedItems

equippedItems

games:

coins

highScores

library:

lastOpenedDocument

lastPageByDocument

bookmarks if implemented

notes:

notes

music:

connection state

player preferences

current player state where appropriate

settings:

sound

volume

visual effects

Do not scatter unrelated localStorage keys throughout random components.

Create a simple storage/state layer.

22. RESPONSIVENESS

Make the site responsive.

Desktop is the primary target.

It should still work on:

tablets

phones

The PDF reader should adapt to smaller screens.

Do not make the desktop interface simply shrink onto mobile.

23. ACCESSIBILITY

Include:

keyboard navigation

visible focus states

readable contrast

semantic buttons

accessible labels

reduced motion support where practical

Do not sacrifice readability for aesthetics.

24. VISUAL DETAILS

Use a consistent design system.

Suggested aesthetic:

Background:
deep charcoal / near-black for dark mode

Primary accent:
muted terminal green

Secondary accents:
very subtle greens, grays, and neutral tones

Typography:
clean readable sans-serif combined with a tasteful monospace font for system/JARVIS elements

Borders:
thin and subtle

Glow:
soft and restrained

Avoid:

excessive glassmorphism

huge gradients

giant glowing text

excessive rounded cards

excessive icons

rainbow colors

visual clutter

The result should feel like a cozy personal computer interface, not a futuristic military command center.

25. HOMEPAGE PERSONALIZATION

The home screen should change depending on the user's state.

First visit:
Show onboarding.

Returning user:
Show their name, pet, last opened document, and simple shortcuts.

Example:

“Welcome back, Felar.”

“Last opened: Arabic — Part 1”

“Page 42”

[ Continue Reading ]

Pet displayed nearby.

Music player available.

Games available.

JARVIS available.

Keep it simple.

26. IMPORTANT CONTENT RULE

I am uploading the actual PDFs alongside this prompt.

Inspect the supplied files.

Do not invent curriculum content.

Use the actual filenames and documents to populate the Library.

If the files contain different naming or organization than the structure described above, preserve the actual documents while organizing them logically under the appropriate subject.

Do not replace the PDFs with generated summaries.

The PDF itself is the primary study experience.

27. BUILD EVERYTHING TOGETHER

Build the complete application foundation in this implementation.

Do not create a tiny MVP and leave the rest as future placeholders.

Implement the major systems now:

Home

onboarding

profile

language system

RTL support

themes

Library

PDF reader

persistent music player

YouTube integration architecture

Music page

JARVIS

Pets

Pet customization

Pet room

Shop

Coins

Games

Notes

Settings

local persistence

sound effects

animations

responsive layout

Use placeholder assets only where actual assets have not been supplied.

Make the systems functional rather than creating decorative mockups.

However, keep implementation simple and avoid unnecessary backend infrastructure.

28. FINAL DESIGN PRINCIPLE

The website should feel like:

“Felar's own little computer.”

I open it.

My study library is there.

My PDFs are there.

My music is playing.

My little pet is hanging around.

JARVIS quietly exists.

I can take a break and play Snake.

I can customize my pet.

Then I go back to reading.

Nothing is trying to gamify studying.

Nothing is trying to manipulate me into maintaining a streak.

It is simply a cozy, personal, futuristic study space that I built for myself.

Build the foundation around that idea.



---


make sure SFX's are a bit cyber-like, really cool and amazing sfx's for like clicking, etc. and add real nice animations and touches to the background of the site and everything else basically. add a built-in one-song (preferably beethoven) so people can have a lil music incase they cannot connect their youtube music.


oh and also, please make sure stuff aren't like within lovable, cuz ill migerate this to github + vercel. in other words, most stuff should be in Site\Public\stuff like images, music, sfx, etcetra.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0627ff1c-be94-4b5d-b8fe-2084193ff0ec).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
