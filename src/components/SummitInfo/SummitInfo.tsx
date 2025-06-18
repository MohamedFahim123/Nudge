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
      <div className={`max-w-screen-xl mx-auto px-4 ${styles.summitInfoContainer}`}>
        <div className="text-center mb-10">
          <p className="text-2xl sm:text-3xl md:text-4xl italic font-light max-w-5xl mx-auto mb-6">
            From the world&apos;s lowest point on earth, elevate to your
            business&apos;s highest potential—because the climb starts here!
          </p>
          <p className="text-2xl md:text-4xl font-bold text-green-400">
            October 18 - 19, 2025
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-10 text-center">
          <p className="text-base sm:text-lg leading-relaxed text-white">
            The Nudge Summit 2025 will take place on October 18th and 19th,
            2025, at the King Hussein Bin Talal Convention Centre and Hilton
            Dead Sea Resort & Spa, situated on the shores of the Dead Sea in
            Jordan. You will receive a special price offer for room bookings at
            the Hilton Dead Sea via email after completing your registration.
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
