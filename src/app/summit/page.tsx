import CEOSection from "@/components/CEOSection/CEOSection";
import GlobalExpertise from "@/components/GlobalExpertise/GlobalExpertise";
import PartnersSection from "@/components/PartnersSection/PartnersSection";
import QuoteSection from "@/components/QuoteSection/QuoteSection";
import SpeakersSlider from "@/components/SpeakersSlider/SpeakersSlider";
import SummitHeroSection from "@/components/SummitHeroSection/SummitHeroSection";
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
    </>
  );
};

export default SummitPage;
