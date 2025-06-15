import { getTokenFromServerCookies } from "@/Actions/TokenHandlers";
import { redirect } from "next/navigation";

const DashboardLayout = async () => {
  const token = await getTokenFromServerCookies();

  if (!token) return redirect("/auth/login");
  return <></>;
};

export default DashboardLayout;
