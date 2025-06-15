import Link from "next/link";
import React from "react";
import styles from "./SummitHeroSection.module.css";

const SummitHeroSection = () => {
  return (
    <section
      className={`${styles.heroContainer} relative bg-cover bg-center text-white min-h-[80vh]`}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative min-h-[80vh] py-20 z-10 max-w-screen-xl mx-auto flex flex-col flex-wrap justify-end items-center gap-8 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Nudge <span className="text-green-400">Summit</span>
        </h1>
        <p className="text-lg md:text-3xl font-medium mb-4 max-w-[700px]">
          Value isn{"'"}t in knowing things but in applying things! Two
          intensive days, but there is a lot for you to learn and apply here!
        </p>
        <p className="italic text-md md:text-3xl mb-8 max-w-[700px]">
          The science is proven! We will guide you in maximizing revenue by
          applying science and evidence-based approaches.
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-20 text-sm md:text-base">
          <Link href={`/event`} className="italic font-semibold hover:text-[#5bf286] hover:pb-2 transition-all duration-300">
            Hilton Dead Sea
            <br />
            Jordan
          </Link>
          <span className="text-gray-300">|</span>
          <span className="italic">October 18th and 19th, 2025</span>
          <span className="text-gray-300">|</span>

          <Link
            href="/ticket"
            className="bg-green-500 hover:bg-[#250168] text-white text-lg font-semibold px-8 py-4 transition-all duration-300"
          >
            Get Your Ticket
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(SummitHeroSection);
