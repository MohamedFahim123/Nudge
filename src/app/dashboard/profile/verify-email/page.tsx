import Loader from "@/components/Loader/Loader";
import VerifyContent from "@/components/VerifyContent/VerifyContent";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Nudge | Verify Account",
  description: "Verify Account Page",
};

const VerifyEmail = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="max-w-xl mt-50 mx-auto border border-gray-200 rounded-lg p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-center mb-5">Verify Email</h1>
        <VerifyContent target="Confirm Profile Email" />
      </div>
    </Suspense>
  );
};

export default VerifyEmail;
