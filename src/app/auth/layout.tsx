"use client";
import { redirect, usePathname } from "next/navigation";
import { Suspense, useEffect } from "react";

import Loader from "@/components/Loader/Loader";
import styles from "./authStyles.module.css";
import { getTokenFromServerCookies } from "@/Actions/TokenHandlers";
import FloatingBackButton from "@/components/FloatingBackButton/FloatingBackButton";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  useEffect(() => {
    (async ()=>{
      const token = await getTokenFromServerCookies();
      if (token) redirect("/dashboard/profile");
    })()
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <div className={`${styles.auth_layout}`}>
        <FloatingBackButton />
        <div
          className={`${
            pathName === "/auth/login" && styles.paddingBlockNone
          } ${styles.auth_container} ${pathName === "/auth/register" && styles.registerStyle}`}
        >
          {children}
        </div>
      </div>
    </Suspense>
  );
}
