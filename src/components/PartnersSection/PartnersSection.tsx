import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./PartnersSection.module.css";

const PartnersSection = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[60vh]">
      <div className="w-full lg:w-1/2 ps-4 lg:ps-16 bg-gradient-to-br from-green-200 via-green-300 to-green-100 p-10 flex flex-col justify-center gap-6">
        <h2
          className={`text-5xl md:text-6xl font-regular leading-tight text-black ${styles.partnerSectionFade}`}
        >
          Partners <br /> in Success
        </h2>

        <p
          className={`text-2xl text-black max-w-xl my-7 ${styles.partnerSectionFade}`}
        >
          The Nudge Summit 2025 is sponsored by market leaders who share similar
          visions in enabling other corporations to succeed.
        </p>

        <div className={styles.partnerSectionFade}>
          <p className="italic text-xl text-gray-800 max-w-md mb-5">
            Do you want to join a community of market leaders and visionaries
            and become a sponsor?
          </p>
          <Link
            href="/contact-us"
            className="inline-block text-xl bg-black text-white font-medium py-2 px-5 rounded hover:bg-gray-800 transition"
          >
            Contact us
          </Link>
        </div>
      </div>

      <div className="w-full grid-cols-1 grid-rows-4 lg:w-1/2 bg-white">
        <div className={`w-full h-1/2 col-span-1 row-span-2 flex items-center justify-center ${styles.partnerSectionFade}`}>
          <Image
            src="/images/chialidini.png"
            alt="Cialdini Institute"
            width={600}
            height={200}
            className="object-contain w-full h-auto"
          />
        </div>

        <div
          className={`w-full h-1/2 col-span-1 row-span-2 bg-gray-100 py-6 flex items-center justify-center ${styles.partnerSectionFade}`}
        >
          <Image
            src="/images/mena.png"
            alt="MENA Speakers"
            width={600}
            height={100}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default React.memo(PartnersSection);
