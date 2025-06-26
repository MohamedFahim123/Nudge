"use server";

import { cookies } from "next/headers";

export async function setServerCookie(value: string) {
  const cookieStore = await cookies();
  cookieStore.set("NUDGE_TOKEN", value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function getTokenFromServerCookies() {
  const cookieStore = await cookies();
  const token = cookieStore.get("NUDGE_TOKEN")?.value;
  return token as string;
}

export async function removeTokenFromServerCookies() {
  const cookieStore = await cookies();
  cookieStore.delete("NUDGE_TOKEN");
}
