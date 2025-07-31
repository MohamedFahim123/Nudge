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
    set({ myTicket: res?.data?.booking ? res.data.booking : null, myTicketLoading: false });
  },
  unUsedTickets: null,
  unUsedTicketsLoading: false,
  getUnUsedTickets: async () => {
    const now = new Date().getTime();

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
