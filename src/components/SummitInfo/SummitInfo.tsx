import Image from "next/image";
import React from "react";
import styles from "./SummitInfo.module.css";

const SummitInfo = () => {
  const images = [
    "/images/hotel/2023-11-20 (1).webp",
    "/images/hotel/unnamed.webp",
    "/images/hotel/Hilton-Dead-Sea-Resort-and-Spa-King-Deluxe-Guest-Room-with-Terrace.webp",
  ];

  return (
    <section
      className={`text-white py-16 px-4 sm:px-6 lg:px-8 ${styles.summitInfoSection}`}
    >
      <div
        className={`max-w-screen-xl mx-auto px-4 ${styles.summitInfoContainer}`}
      >
        <div className="text-center mb-10">
          <p className="text-2xl sm:text-3xl md:text-4xl italic font-light max-w-5xl mx-auto mb-6">
            It&apos;s a game of single-tasking!
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-10 text-white">
            By taking you to the peace of desert, the Nudge Summit will be a
            memorable experience at Al Maha Desert Resort & Spa - Dubai
          </p>
          <p className="text-2xl md:text-4xl font-bold text-green-400">
            October 18 - 19, 2025
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mt-12">
          {images.map((src, index) => (
            <div key={index} className="w-full">
              <div
                className={`relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg ${styles.fadeImage}`}
              >
                <Image
                  src={src}
                  alt={`Hotel image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(SummitInfo);
