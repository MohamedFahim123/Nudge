import { fetchApi } from "@/Actions/FetchApi";
import { getTokenFromServerCookies } from "@/Actions/TokenHandlers";
import { create } from "zustand";

export interface Transaction {
  code: string;
  payment_method: string;
  payment_status: string;
  total_amount: number;
  total_tickets: string;
  attachment: string | null;
}

export interface TransactionsResponse {
  data: {
    transactions: Transaction[];
    pagination: {
      path: string;
      per_page: number;
      next_cursor: string | null;
      prev_cursor: string | null;
      has_more: boolean;
    };
  };
  message: string;
  errors: { [key: string]: string };
  status: number;
}

interface TransactionsStore {
  transactions: Transaction[] | null;
  filteredTransactions: Transaction[] | null;
  loading: boolean;
  error: unknown;
  getTransactions: () => Promise<void>;
  filterByCode: (code: string) => void;
}

export const useTransactionsStore = create<TransactionsStore>((set, get) => ({
  transactions: null,
  filteredTransactions: null,
  loading: false,
  error: null,

  getTransactions: async () => {
    set({ loading: true });
    try {
      const res = await fetchApi<{ data: { transactions: Transaction[] } }>(
        `transactions?t=${new Date().getTime()}`,
        {
          cache: "force-cache",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${await getTokenFromServerCookies()}`,
          },
        }
      );
      set({
        transactions: res.data.transactions,
        filteredTransactions: res.data.transactions,
        loading: false,
      });
    } catch (error) {
      set({ error, loading: false });
    }
  },

  filterByCode: (code: string) => {
    const { transactions } = get();
    if (!transactions) return;
    const filtered = transactions.filter((t) =>
      t.code.toLowerCase().includes(code.toLowerCase())
    );
    set({ filteredTransactions: filtered });
  },
}));
