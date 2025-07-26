import { fetchApi } from "@/Actions/FetchApi";
import { getTokenFromServerCookies } from "@/Actions/TokenHandlers";
import { create } from "zustand";

export interface Ticket {
  code: string;
  price: number;
  status: string;
  transaction: string;
  type: string;
  your_ticket: boolean;
  audience: {
    name: string;
    email: string;
    code: string;
  };
}

export interface MyTicket {
  assigned_by: string,
  booked_by_you: boolean,
  code: string,
  notes: string | null,
  price: number,
  status: string,
  type: string,
}

let lastFetchedTimeAllTickets: number = 0;
let lastFetchedTimeMyTicket: number = 0;
let lastFetchedTimeUnUsedTickets: number = 0;
const CACHE_EXPIRATION_TIME: number = 15 * 60 * 1000;

export interface UseTicketsStoreIterface {
  allTickets: Ticket[] | null;
  allTicketsLoading: boolean;
  getAllTickets: () => Promise<void>;
  myTicket: MyTicket | null;
  myTicketLoading: boolean;
  getMyTicket: () => Promise<void>;
  unUsedTickets: Ticket[] | null;
  unUsedTicketsLoading: boolean;
  getUnUsedTickets: () => Promise<void>;
}

export const useTicketsStore = create<UseTicketsStoreIterface>((set) => ({
  allTickets: null,
  allTicketsLoading: false,
  getAllTickets: async () => {
    const now = new Date().getTime();
    if (now - lastFetchedTimeAllTickets < CACHE_EXPIRATION_TIME) return;
    lastFetchedTimeAllTickets = now;

    set({ allTicketsLoading: true });
    const res = await fetchApi<{ data: { bookings: Ticket[] } }>(
      `all-tickets?t=${now}`,
      {
        cache: "force-cache",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${await getTokenFromServerCookies()}`,
        },
      }
    );
    set({ allTickets: res.data.bookings, allTicketsLoading: false });
  },
  myTicket: null,
  myTicketLoading: false,
  getMyTicket: async () => {
    const now = new Date().getTime();
    if (now - lastFetchedTimeMyTicket < CACHE_EXPIRATION_TIME) return;
    lastFetchedTimeMyTicket = now;

    set({ myTicketLoading: true });
    const res = await fetchApi<{ data: { booking: MyTicket } }>(
      `my-ticket?t=${now}`,
      {
        cache: "force-cache",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${await getTokenFromServerCookies()}`,
        },
      }
    );
    set({ myTicket: res.data.booking, myTicketLoading: false });
  },
  unUsedTickets: null,
  unUsedTicketsLoading: false,
  getUnUsedTickets: async () => {
    const now = new Date().getTime();
    if (now - lastFetchedTimeUnUsedTickets < CACHE_EXPIRATION_TIME) return;
    lastFetchedTimeUnUsedTickets = now;

    set({ unUsedTicketsLoading: true });
    const res = await fetchApi<{ data: { bookings: Ticket[] } }>(
      `unused-tickets?t=${now}`,
      {
        cache: "force-cache",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${await getTokenFromServerCookies()}`,
        },
      }
    );
    set({ unUsedTickets: res.data.bookings, unUsedTicketsLoading: false });
  },
}));
