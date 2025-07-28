import { Profile } from "@/store/profile";
import Image from "next/image";

type Props = {
  user: Profile;
};

export default function ProfileInfo({ user }: Props) {
  return (
    <div className="space-y-4">
      <div className="w-60 h-60 rounded-full overflow-hidden">
        <Image
          src={user?.profile_image}
          alt="Profile"
          width={100}
          height={100}
          className="object-contain bg-gray-200"
          style={{ width: "100%",height: "100%" }}
        />
      </div>
      <p>
        <strong>Name:</strong> {user?.name}
      </p>
      <p>
        <strong>Code:</strong> {user?.code}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>
      <p>
        <strong>Phone:</strong> {user?.phone}
      </p>
      <p>
        <strong>Company:</strong> {user?.company}
      </p>
      <p>
        <strong>LinkedIn:</strong>{" "}
        <a href={user?.linkedin_profile} className="text-purple-600 underline">
          {user?.linkedin_profile}
        </a>
      </p>
    </div>
  );
}
