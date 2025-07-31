import { fetchApi } from "./FetchApi";
import { getTokenFromServerCookies } from "./TokenHandlers";

export async function userLogout() {
  const token = await getTokenFromServerCookies();
  const res = await fetchApi<{
    message: string;
    data: [];
    errors: { [key: string]: string };
    status: number;
  }>("logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
}
