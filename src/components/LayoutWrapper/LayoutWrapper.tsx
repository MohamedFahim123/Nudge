"use client";

import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { usePathname } from "next/navigation";
import { ToastProvider } from "../ToastContext/ToastContext";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAuthPage = pathname.startsWith("/auth");

  return (
    <>
      {isAuthPage ? (
        <ToastProvider>
          {children}
        </ToastProvider>
      ) : (
        <ToastProvider>
          <NavBar />
          {children}
          <Footer />
        </ToastProvider>
      )}
    </>
  );
}
