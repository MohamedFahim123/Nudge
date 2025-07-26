"use client";

import { userLogout } from "@/Actions/UserLogout";
import { FaSignOutAlt } from "react-icons/fa";
import { useToast } from "../ToastContext/ToastContext";
import { useRouter } from "next/navigation";
import { removeTokenFromServerCookies } from "@/Actions/TokenHandlers";

export default function LogoutBtn() {
  const { showToast } = useToast();
  const router = useRouter();

  const logout = async () => {
    const res = await userLogout();
    if (res.status !== 200)
      return showToast(res.message || "faild To Logout", "error");
    await removeTokenFromServerCookies();
    showToast("Logout successful", "success");
    router.push("/");
  };

  return (
    <button
      onClick={logout}
      type="button"
      className={`cursor-pointer flex items-center gap-2 px-4 py-2 outline-none border border-red-500 bg-red-500 text-white rounded-lg hover:bg-white transition-all duration-300 hover:text-red-500 active:bg-white shadow-md focus:outline-none`}
    >
      <FaSignOutAlt size={18} />
      Logout
    </button>
  );
}
