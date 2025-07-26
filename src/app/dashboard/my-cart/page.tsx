import Loader from "@/components/Loader/Loader";
import MyCartFullContent from "@/components/MyCartFullContent/MyCartFullContent";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Nudge | My Cart",
  description: "My Cart Page",
};

const MyCartPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <MyCartFullContent />
    </Suspense>
  );
};

export default MyCartPage;
