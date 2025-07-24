import { getTokenFromServerCookies } from "@/Actions/TokenHandlers";
import DashboardProfilePage from "@/components/DashboardProfilePage/DashboardProfilePage";
import Loader from "@/components/Loader/Loader";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Nudge | Profile",
  description: "Profile Page",
};

const ProfilePage = async () => {
  const token = await getTokenFromServerCookies();

  if (!token) return null;

  return (
    <>
      <Suspense fallback={<Loader />}>
        <DashboardProfilePage token={token} />
      </Suspense>
    </>
  );
};

export default ProfilePage;
