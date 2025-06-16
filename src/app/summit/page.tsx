import CEOSection from "@/components/CEOSection/CEOSection";
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
    </>
  );
};

export default SummitPage;
