import { Metadata } from "next";
import HomePage from "./home/page";

export const metadata: Metadata = {
  title: "Nudge | Home",
  description: "Home Page",
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
