import CEOSection from "@/components/CEOSection/CEOSection";
import DeadLineSection from "@/components/DeadLineSection/DeadLineSection";
import ExpectationSlider from "@/components/ExpectationSlider/ExpectationSlider";
import GlobalExpertise from "@/components/GlobalExpertise/GlobalExpertise";
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
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const metadata: Metadata = {
  title: "Nudge | Summit",
  description: "Summit Page",
};

const SummitPage = () => {
  return (
    <>
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
      <h2 className="underline">
        <Link
          href={"/ticket"}
          className="h-32 w-full bg-green-400 flex items-center justify-center text-black text-5xl font-bold transition-all duration-300 hover:text-white"
        >
          <MdOutlineArrowRightAlt />
          Get Your Ticket
        </Link>
      </h2>
      <DeadLineSection />
    </>
  );
};

export default SummitPage;
