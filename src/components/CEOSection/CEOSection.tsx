import React from "react";
import styles from "./CEOSection.module.css";

const CEOSection = () => {
  return (
    <section
      className={`${styles.CEOSection} relative py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center`}
    ></section>
  );
};

export default React.memo(CEOSection);
