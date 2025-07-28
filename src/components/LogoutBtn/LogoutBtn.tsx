"use client";

import { removeTokenFromServerCookies } from "@/Actions/TokenHandlers";
import { userLogout } from "@/Actions/UserLogout";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useToast } from "../ToastContext/ToastContext";

export default function LogoutBtn() {
  const { showToast } = useToast();
  const router = useRouter();
  const [logoutLoading, setLogoutLoading] = useState(false);

  const logout = async () => {
    setLogoutLoading(true);
    const res = await userLogout();
    if (res.status !== 200) {
      await removeTokenFromServerCookies();
      showToast(res.message || "faild To Logout", "error");
      router.push("/");
    }
    await removeTokenFromServerCookies();
    setLogoutLoading(false);
    showToast("Logout successful", "success");
    router.push("/");
  };

  return (
    <button
      onClick={logout}
      disabled={logoutLoading}
      type="button"
      className={`cursor-pointer flex items-center gap-2 px-4 py-2 outline-none border border-red-500 bg-red-500 text-white rounded-lg hover:bg-white transition-all duration-300 hover:text-red-500 active:bg-white shadow-md focus:outline-none`}
    >
      <FaSignOutAlt size={18} />
      {logoutLoading ? "Logging out..." : "Logout"}
    </button>
  );
}
