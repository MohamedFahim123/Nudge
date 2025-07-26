import { fetchApi } from "@/Actions/FetchApi";
import {
  getTokenFromServerCookies,
  removeTokenFromServerCookies,
} from "@/Actions/TokenHandlers";
import { userLogout } from "@/Actions/UserLogout";
import { create } from "zustand";

export interface Profile {
  id: number;
  code: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  company: string;
  linkedin_profile: string;
  profile_image: string;
  passport_file: string;
  email_verified: boolean;
  profile_completed: boolean;
  has_ticket: boolean;
  has_invitation: boolean;
  total_tickets: string;
  used_tickets: string;
  unused_tickets: number;
  current_password: string;
  new_password: string;
  new_password_confirmation: string;
  new_email: string;
}

export interface UseProfileStoreIterface {
  profile: Profile | null;
  profileLoading: boolean;
  getProfile: () => Promise<void>;
}

export const useProfileStore = create<UseProfileStoreIterface>((set) => ({
  profile: null,
  profileLoading: false,

  getProfile: async () => {
    const now = new Date().getTime();

    set({ profileLoading: true });
    const res = await fetchApi<{
      message: string;
      data: { audience: Profile };
    }>(`profile?t=${now}`, {
      cache: "force-cache",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${await getTokenFromServerCookies()}`,
      },
    });
    if (res.message === "Unauthenticated" || res.message === "Unauthorized") {
      await userLogout();
      await removeTokenFromServerCookies();
      window.location.reload();
    }
    set({ profile: res.data.audience, profileLoading: false });
  },
}));
