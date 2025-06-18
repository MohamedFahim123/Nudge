import React from "react";
import styles from "./CEOSection.module.css";
import Link from "next/link";

const CEOSection = () => {
  return (
    <section
      className={`${styles.CEOSection} py-20 px-4 sm:px-6 lg:px-8`}
    >
      <div
        className={`${styles.CEOSectionContent} text-white max-w-screen-xl mx-auto flex flex-col gap-8 justify-between h-full px-4`}
      >
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-normal mb-4">
            Saana Azzam
          </h2>

          <p className="text-2xl sm:text-3xl mb-2">CEO of MENA Speakers,</p>
          <p className="text-2xl sm:text-3xl mb-6">Chief Inspiration Officer</p>

          <p className="text-base sm:text-lg md:text-xl max-w-2xl">
            Because everything at Nudge Summit 2025 promises to be a memorable
            experience, Søana Azzam, the CEO of MENA Speakers, the #1 speakers
            bureau in the MENA Region, will be our master of ceremonies,
            bringing inspiration, focus, and seamless communication to the
            summit.
          </p>
        </div>

        <div>
          <Link
            href=""
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl uppercase bg-[#5bf286] border border-[#5bf286] text-white font-semibold transition-all duration-300 hover:bg-white hover:text-[#5bf286]"
          >
            In-person
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(CEOSection);
