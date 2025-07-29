import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Nudge | Not Found",
  description: "Not Found Page",
};

const NotFoundPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col gap-5 items-center justify-center">
      <h1 className="text-7xl font-bold">404 - Not Found</h1>
      <p className="text-3xl font-semibold">
        The page you are looking for does not exist
      </p>
      <Link
        href={"/"}
        className="bg-[#250168] transition-all hover:text-[#250168] mt-10 hover:bg-white border-2 border-[#250168] text-white font-semibold py-4 px-8 rounded"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default React.memo(NotFoundPage);
