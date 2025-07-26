import { fetchApi } from "@/Actions/FetchApi";
import { getTokenFromServerCookies } from "@/Actions/TokenHandlers";
import { create } from "zustand";

export interface CartItem {
  id: number;
  your_ticket: boolean;
  invited: {
    name: string;
    code: string;
  };
  ticket: {
    id: string;
    type: string;
    price: number;
  };
}

export interface UseCartsStoreIterface {
  cartItems: CartItem[] | null;
  cartItemsLoading: boolean;
  getCartItems: () => Promise<void>;
}

export const useCartsStore = create<UseCartsStoreIterface>((set) => ({
  cartItems: null,
  cartItemsLoading: false,
  getCartItems: async () => {
    const now = new Date().getTime();

    set({ cartItemsLoading: true });
    const res = await fetchApi<{ data: { cart: { cart: CartItem[] } } }>(
      `cart?t=${now}`,
      {
        cache: "force-cache",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${await getTokenFromServerCookies()}`,
        },
      }
    );
    set({ cartItems: res.data.cart.cart, cartItemsLoading: false });
  },
}));
