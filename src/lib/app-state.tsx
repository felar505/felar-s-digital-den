import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "en" | "ar" | "fr";
export type Theme = "dark" | "light" | "system";
export type PetType = "owl" | "cat" | "bunny" | "frog" | "penguin";
export type Note = { id: string; title: string; body: string; updatedAt: number };
export type AppState = {
  version: 1; setup: boolean;
  user: { name: string; language: Language; theme: Theme };
  pet: { type: PetType; name: string; ownedItems: string[]; equippedItems: string[]; roomItems: string[] };
  games: { coins: number; highScores: Record<string, number> };
  library: { lastOpenedDocument: string | null; lastPageByDocument: Record<string, number>; bookmarks: Record<string, number[]> };
  notes: Note[];
  music: { current: "beethoven" | "youtube"; youtubeId: string; playing: boolean; volume: number; muted: boolean; autoplay: boolean };
  settings: { sound: boolean; soundVolume: number; visualEffects: boolean; rememberPage: boolean; readerWidth: "comfortable" | "wide"; fullscreen: boolean };
};
const initialState: AppState = { version: 1, setup: false, user: { name: "Felar", language: "en", theme: "dark" }, pet: { type: "owl", name: "Nova", ownedItems: [], equippedItems: [], roomItems: [] }, games: { coins: 0, highScores: {} }, library: { lastOpenedDocument: null, lastPageByDocument: {}, bookmarks: {} }, notes: [], music: { current: "beethoven", youtubeId: "", playing: false, volume: .45, muted: false, autoplay: false }, settings: { sound: true, soundVolume: .35, visualEffects: true, rememberPage: true, readerWidth: "comfortable", fullscreen: false } };
const STORAGE_KEY = "felars-studies-v1";
type Store = { state: AppState; hydrated: boolean; update: (fn: (s: AppState) => AppState) => void; reset: () => void };
const Ctx = createContext<Store | null>(null);
export function AppStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(initialState); const [hydrated, setHydrated] = useState(false);
  useEffect(() => { try { const raw = localStorage.getItem(STORAGE_KEY); if (raw) setState({ ...initialState, ...JSON.parse(raw) }); } catch {} setHydrated(true); }, []);
  useEffect(() => { if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }, [state, hydrated]);
  useEffect(() => { const root = document.documentElement; root.lang = state.user.language; root.dir = state.user.language === "ar" ? "rtl" : "ltr"; const dark = state.user.theme === "dark" || (state.user.theme === "system" && matchMedia("(prefers-color-scheme: dark)").matches); root.classList.toggle("dark", dark); root.dataset["effects"] = state.settings.visualEffects ? "on" : "off"; }, [state.user.language, state.user.theme, state.settings.visualEffects]);
  const value = useMemo<Store>(() => ({ state, hydrated, update: (fn) => setState((s) => fn(s)), reset: () => { localStorage.removeItem(STORAGE_KEY); setState(initialState); } }), [state, hydrated]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export function useAppState() { const ctx = useContext(Ctx); if (!ctx) throw new Error("AppStateProvider missing"); return ctx; }
export { initialState, STORAGE_KEY };
