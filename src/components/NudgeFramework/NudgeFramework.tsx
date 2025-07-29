import Image from "next/image";
import React from "react";
import styles from "./NudgeFramework.module.css";

const NudgeFramework = () => {
  return (
    <section className="w-full px-4 py-16 md:px-16 bg-white">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <div className={`md:col-span-7 ${styles.fadeInUp}`}>
          <h2 className="text-4xl md:text-5xl font-regular text-[#250168] mb-4">
            The Nudge Framework
          </h2>
          <em className="block text-black mb-6 mt-4 text-xl md:text-2xl font-regular">
            The Science is Proven!
          </em>
          <p className="text-lg max-w-2xl text-[#231f20] leading-relaxed">
            Every business, including yours, has a blind spot. While revenue is
            the key to success, most teams unknowingly build on shaky ground.
            Products launch but don’t land. Trust slips through the
            cracks. Influence is left to instinct.
          </p>
          <p className="text-lg max-w-2xl text-[#231f20] mt-4 leading-relaxed">
            After working with multinational corporations and various-sized
            businesses for the second decade and learning from thought leaders
            in psychology, innovation, and strategy, Hasan Qasem, Nudge’s
            Executive Director, designed a science — an evidence-based
            four-pillar framework to help corporations maximize revenue by
            applying the aforementioned sciences.
          </p>
        </div>

        <div className={`md:col-span-5 flex justify-center overflow-hidden ${styles.fadeInUp}`}>
          <Image
            src="/images/steps.webp"
            alt="pillars"
            width={800}
            height={800}
            className="object-contain"
            style={{ transform: "scale(1.1) translatex(20px,30px)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default React.memo(NudgeFramework);
