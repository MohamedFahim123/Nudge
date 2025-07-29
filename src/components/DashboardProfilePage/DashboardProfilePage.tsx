"use client";

import { useProfileStore } from "@/store/profile";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import ChangeEmailForm from "./ChangeEmailForm/ChangeEmailForm";
import ChangePasswordForm from "./ChangePasswordForm/ChangePasswordForm";
import EditProfileForm from "./EditProfileForm/EditProfileForm";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function ProfilePage({ token }: { token: string }) {
  const { profile: user, profileLoading, getProfile } = useProfileStore();

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  const [view, setView] = useState<"view" | "edit" | "password" | "email">(
    "view"
  );

  if (profileLoading) return <Loader />;

  if (!user) return null;

  return (
    <div className="w-fill mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Profile Page</h1>

      <div className="flex space-x-3 mb-4">
        <button
          onClick={() => setView("view")}
          className={`btn cursor-pointer ${
            view === "view" && "bg-[#231f20] text-white hover:text-[#231f20]"
          }`}
        >
          View Profile
        </button>
        <button
          onClick={() => setView("edit")}
          className={`btn cursor-pointer ${
            view === "edit" && "bg-[#231f20] text-white hover:text-[#231f20]"
          }`}
        >
          Edit Profile
        </button>
        <button
          onClick={() => setView("password")}
          className={`btn cursor-pointer ${
            view === "password" && "bg-[#231f20] text-white hover:text-[#231f20]"
          }`}
        >
          Change Password
        </button>
        <button
          onClick={() => setView("email")}
          className={`btn cursor-pointer ${
            view === "email" && "bg-[#231f20] text-white hover:text-[#231f20]"
          }`}
        >
          Change Email
        </button>
      </div>

      <div className="bg-white shadow p-6 rounded-md">
        {view === "view" && <ProfileInfo user={user} />}
        {view === "edit" && (
          <EditProfileForm setView={setView} token={token} user={user} />
        )}
        {view === "password" && <ChangePasswordForm token={token} />}
        {view === "email" && (
          <ChangeEmailForm token={token} email={user.email} />
        )}
      </div>
    </div>
  );
}
