import Image from "next/image";
import React from "react";
import styles from "./GlobalExpertise.module.css";

const GlobalExpertise = () => {
  return (
    <section>
      <div className="bg-white py-16">
        <div className={`max-w-screen-xl mx-auto px-4 text-center ${styles.fadeInUp}`}>
          <h2 className="text-3xl md:text-6xl font-normal text-[#250168]">
            Global Expertise
          </h2>

          <Image
            src="/images/stars.png"
            alt="Stars"
            width={300}
            height={20}
            className="h-20 object-contain my-2 mx-auto"
          />

          <p className="text-base sm:text-xl md:text-2xl text-black mb-12 max-w-lg mx-auto px-4">
            A team of global experts with a track record of speaking to and
            working with:
          </p>

          <div className={`my-12 w-full ${styles.scaleIn}`}>
            <Image
              src="/images/Logos.avif"
              alt="Partner Logos"
              width={1000}
              height={400}
              className="object-contain w-full max-w-5xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(GlobalExpertise);
