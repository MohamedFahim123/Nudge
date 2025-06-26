import { getTokenFromServerCookies } from "@/Actions/TokenHandlers";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const token = await getTokenFromServerCookies();

  if (token) redirect("/dashboard/profile");
  else redirect("/auth/login");
};

export default DashboardPage;
