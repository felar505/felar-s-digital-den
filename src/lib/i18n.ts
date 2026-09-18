import en from "@/translations/en.json"; import ar from "@/translations/ar.json"; import fr from "@/translations/fr.json";
import { useAppState } from "./app-state";
const dictionaries = { en, ar, fr } as const;
export function useT() { const { state } = useAppState(); return (key: string, vars?: Record<string,string|number>) => { const dict = dictionaries[state.user.language] as Record<string,string>; let value = dict[key] ?? (en as Record<string,string>)[key] ?? key; for (const [k,v] of Object.entries(vars ?? {})) value = value.replace(`{${k}}`, String(v)); return value; }; }
