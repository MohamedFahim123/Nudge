"use client";

import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { ToastProvider } from "@/components/ToastContext/ToastContext";
import { usePathname } from "next/navigation";
import "./globals.css";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);


  const isAuthPage =
    pathname.startsWith("/auth") || pathname.startsWith("/dashboard");

  return (
    <html lang="en">
      <body>
        {isAuthPage ? (
          <ToastProvider>{children}</ToastProvider>
        ) : (
          <>
            {isClient && (
              <ToastProvider>
                <NavBar />
                {children}
                <Footer />
              </ToastProvider>
            )}
          </>
        )}
      </body>
    </html>
  );
}
