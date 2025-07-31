"use client";

import { getTokenFromServerCookies } from "@/Actions/TokenHandlers";
import LogoutBtn from "@/components/LogoutBtn/LogoutBtn";
import Sidebar from "@/components/SideBar/SideBar";
import { useProfileStore } from "@/store/profile";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { profile, getProfile } = useProfileStore();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    (async () => {
      const cookiesToken: string = await getTokenFromServerCookies();
      if (!cookiesToken) return redirect("/auth/login");
    })();
  }, []);

  useEffect(() => {
    if (!profile) getProfile();
  }, [getProfile, profile]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[16rem_1fr] min-h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        isMobile={isMobile}
      />
      <div className={`flex flex-col flex-1 p-4 ${isMobile ? "pt-8" : ""}`}>
        <header className="flex justify-between items-center px-6 py-4">
          <h1 className={`text-2xl font-bold capitalize`}>
            Hello, {profile?.name}👋
          </h1>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 bg-[#250168] hover:bg-white text-white hover:text-[#250168] duration-300 border border-[#250168] shadow-md rounded-lg px-4 py-2 transition-all"
            >
              <FaArrowLeft size={14} />
              <span className="text-md font-semibold">Home Page</span>
            </Link>
            <LogoutBtn />
          </div>
        </header>
        <main className="flex-1 px-6 pt-6">
          <div className={`bg-white`}>{children}</div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
