import React from "react";
import styles from "./QuoteSection.module.css";

const QuoteSection = () => {
  return (
    <section
      className={`${styles.quoteSection} relative py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center flex items-end justify-center`}
    >
      <div className="max-w-3xl p-8 bg-green-400 italic text-center">
        <q className="font-extrabold text-2xl">
          Thank you for considering our Nudge Summit. My team and I are <br /> fully
          committed to providing everything you need to succeed.
        </q>
        <br />
        <span className="text-lg">
          Hasan Qasem, Executive Director of Nudge Ltd. and Official Partner @
          Cialdini Institute
        </span>
      </div>
    </section>
  );
};

export default React.memo(QuoteSection);
