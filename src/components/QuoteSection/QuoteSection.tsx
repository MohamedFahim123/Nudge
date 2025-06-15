import React from "react";
import styles from "./QuoteSection.module.css";

const QuoteSection = () => {
  return (
    <section
      className={`${styles.quoteSection} relative py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center`}
    ></section>
  );
};

export default React.memo(QuoteSection);
