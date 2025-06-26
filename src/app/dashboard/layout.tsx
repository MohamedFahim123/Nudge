"use client";
import { getTokenFromServerCookies } from "@/Actions/TokenHandlers";
import Sidebar from "@/components/SideBar/SideBar";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[16rem_1fr] min-h-screen">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} isMobile={isMobile} />
      <main className={`p-4 ${isMobile ? "pt-8" : ""}`}>{children}</main>
    </div>
  );
}

export default DashboardLayout;
