"use client";

import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { usePathname } from "next/navigation";

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
        <>{children}</>
      ) : (
        <>
          <NavBar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
