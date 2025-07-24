import Loader from "@/components/Loader/Loader";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Nudge | Home",
  description: "Home Page",
};

const HomePage = () => {
  return <Suspense fallback={<Loader />}>Home Page</Suspense>;
};

export default HomePage;
