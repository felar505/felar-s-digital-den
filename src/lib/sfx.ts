import type { AppState } from "./app-state";
export type Sfx = "click"|"navigate"|"open"|"coin"|"purchase"|"game-start"|"game-over"|"pet";
export function playSfx(name:Sfx, state:AppState) { if (!state.settings.sound || typeof Audio === "undefined") return; const audio=new Audio(`/stuff/sfx/${name}.wav`); audio.volume=state.settings.soundVolume; void audio.play().catch(()=>{}); }
