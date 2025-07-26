import { fetchApi } from "@/Actions/FetchApi";
import { getTokenFromServerCookies } from "@/Actions/TokenHandlers";
import { create } from "zustand";

export interface AvTicket {
  id: string;
  type: string;
  price: number;
}

let lastFetchedTimeAllAvTickets: number = 0;
const CACHE_EXPIRATION_TIME: number = 15 * 60 * 1000;

export interface UseAvTicketsStoreIterface {
  allAvTickets: AvTicket[] | null;
  allAvTicketsLoading: boolean;
  getAllAvTickets: () => Promise<void>;
}

export const useAvTicketsStore = create<UseAvTicketsStoreIterface>((set) => ({
  allAvTickets: null,
  allAvTicketsLoading: false,
  getAllAvTickets: async () => {
    const now = new Date().getTime();
    if (now - lastFetchedTimeAllAvTickets < CACHE_EXPIRATION_TIME) return;
    lastFetchedTimeAllAvTickets = now;

    set({ allAvTicketsLoading: true });
    const res = await fetchApi<{ data: { tickets: AvTicket[] } }>(
      `tickets?t=${now}`,
      {
        cache: "force-cache",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${await getTokenFromServerCookies()}`,
        },
      }
    );
    set({ allAvTickets: res.data.tickets, allAvTicketsLoading: false });
  },
}));
