
import { fetchApi } from "@/Actions/FetchApi";
import { create } from "zustand";

export interface Settings {
  app_name: string;
  email: string;
  facebook: string;
  fav_icon: string;
  instagram: string;
  logo: string;
  phone: string;
  linkedin: string;
  snapchat: string;
  tiktok: string;
  twitter: string;
  whatsapp: string;
  youtube: string;
}

export interface UseSettingsStoreIterface {
  settings: Settings | null;
  settingsError: unknown;
  settingsLoading: boolean;
  getSettings: () => Promise<void>;
}

let lastFetchedTime: number = 0;
const CACHE_EXPIRATION_TIME: number = 15 * 60 * 1000;

export const useSettingsStore = create<UseSettingsStoreIterface>((set) => ({
  settings: null,
  settingsError: null,
  settingsLoading: false,

  getSettings: async () => {
    const now = new Date().getTime();
    if (now - lastFetchedTime < CACHE_EXPIRATION_TIME) return;
    lastFetchedTime = now;

    set({ settingsLoading: true });
    const res = await fetchApi<{ data: { settings: Settings } }>("settings");
    set({ settings: res.data.settings, settingsLoading: false });
  },
}));
