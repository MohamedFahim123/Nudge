import CEOSection from "@/components/CEOSection/CEOSection";
import DeadLineSection from "@/components/DeadLineSection/DeadLineSection";
import ExpectationSlider from "@/components/ExpectationSlider/ExpectationSlider";
import GlobalExpertise from "@/components/GlobalExpertise/GlobalExpertise";
import Loader from "@/components/Loader/Loader";
import MaximizingRevenue from "@/components/MaximizingRevenue/MaximizingRevenue";
import NudgeFramework from "@/components/NudgeFramework/NudgeFramework";
import PartnersSection from "@/components/PartnersSection/PartnersSection";
import QuoteSection from "@/components/QuoteSection/QuoteSection";
import SpeakersSlider from "@/components/SpeakersSlider/SpeakersSlider";
import SummitHeroSection from "@/components/SummitHeroSection/SummitHeroSection";
import SummitInfo from "@/components/SummitInfo/SummitInfo";
import TicketSection from "@/components/TicketSection/TicketSection";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const metadata: Metadata = {
  title: "Nudge | Summit",
  description: "Summit Page",
};

const SummitPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <SummitHeroSection />
      <PartnersSection />
      <QuoteSection />
      <GlobalExpertise />
      <SpeakersSlider />
      <CEOSection />
      <MaximizingRevenue />
      <NudgeFramework />
      <ExpectationSlider />
      <SummitInfo />
      <TicketSection />
      <section className="w-full">
        <Link
          href="/ticket"
          className="h-24 px-4 sm:h-28 md:h-32 w-full hover:underline bg-green-400 flex items-center justify-center text-black text-3xl sm:text-4xl md:text-5xl font-bold gap-4 transition-all duration-300 hover:text-white"
        >
          <MdOutlineArrowRightAlt size={40} />
          Get Your Ticket
        </Link>
      </section>
      <DeadLineSection />
    </Suspense>
  );
};

export default SummitPage;
