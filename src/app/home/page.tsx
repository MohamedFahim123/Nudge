import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Nudge | Home",
  description: "Home Page",
};

const HomePage = () => {
  redirect("/summit");
  // return <Suspense fallback={<Loader />}>Home Page</Suspense>;
};

export default HomePage;
