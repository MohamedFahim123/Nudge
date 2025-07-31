import { fetchApi } from "@/Actions/FetchApi";
import { create } from "zustand";

export interface Speakers {
  image: string;
  name: string;
  job_title: string;
  short_description: string;
  long_description: string;
}
export interface Summit {
  image: string;
  description: string;
}

export interface UseHomeDataStoreIterface {
  speakers: Speakers[] | null;
  summits: Summit[] | null;
  homeLoading: boolean;
  getHomeData: () => Promise<void>;
}

let lastFetchedTime: number = 0;
const CACHE_EXPIRATION_TIME: number = 15 * 60 * 1000;

export const useHomeDataStore = create<UseHomeDataStoreIterface>((set) => ({
  speakers: null,
  summits: null,
  homeLoading: false,

  getHomeData: async () => {
    const now = new Date().getTime();
    if (now - lastFetchedTime < CACHE_EXPIRATION_TIME) return;
    lastFetchedTime = now;

    set({ homeLoading: true });
    const res = await fetchApi<{
      data: { speakers: Speakers[]; summits: Summit[] };
    }>("home-data");
    set({
      speakers: res.data.speakers,
      summits: res.data.summits,
      homeLoading: false,
    });
  },
}));
