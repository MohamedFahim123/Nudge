import React from "react";
import styles from "./QuoteSection.module.css";

const QuoteSection = () => {
  return (
    <section
      className={`${styles.quoteSection} relative py-24 px-4 sm:px-6 lg:px-8 flex items-end justify-center`}
    >
      <div className={`max-w-3xl bg-gradient-to-br from-green-400 via-green-300 to-green-400 text-white text-center italic ${styles.quoteText}`}>
        <q className="font-extrabold text-xl sm:text-2xl leading-relaxed">
          Thank you for considering our Nudge Summit. My team and I are <br className="hidden sm:block" />
          fully committed to providing everything you need to succeed.
        </q>
        <br />
        <span className="text-sm sm:text-lg block mt-6">
          Hasan Qasem, Executive Director of Nudge Ltd. and Official Partner @
          Cialdini Institute
        </span>
      </div>
    </section>
  );
};

export default React.memo(QuoteSection);
