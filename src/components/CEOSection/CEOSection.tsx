import React from "react";
import styles from "./CEOSection.module.css";
import Link from "next/link";

const CEOSection = () => {
  return (
    <section
      className={`${styles.CEOSection} relative py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center`}
    >
      <div
        className={`${styles.CEOSectionContent} text-white max-w-screen-xl mx-auto h-full flex flex-col justify-between`}
      >
        <div>
          <h2 className="text-4xl md:text-6xl font-regular mb-4">
            Saana Azzam
          </h2>

          <p className="text-3xl mb-2">CEO of MENA Speakers,</p>
          <p className="text-3xl mb-6">Chief Inspiration Officer</p>

          <p className="text-xl max-w-lg">
            Because everything at Nudge Summit 2025 promises to be a memorable
            experience, Søana Azzam, the CEO of MENA Speakers, the #1 speakers
            bureau in the MENA Region, will be our master of ceremonies,
            bringing inspiration, focus, and seamless communication to the
            summit.
          </p>
        </div>

        <div>
          <Link
            href={""}
            className="px-8 py-4 text-xl uppercase bg-[#5bf286] border border-[#5bf286] text-white font-semibold transition-all hover:bg-white hover:text-[#5bf286]"
          >
            In-person
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(CEOSection);
