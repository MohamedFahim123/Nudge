import Image from "next/image";
import React from "react";
import styles from "./SummitInfo.module.css";

const SummitInfo = () => {
  return (
    <section
      className={`text-white py-16 px-4 sm:px-6 lg:px-8 ${styles.summitInfoSection}`}
    >
      <div className={`max-w-screen-xl mx-auto ${styles.summitInfoContainer}`}>
        <div className="text-center mb-8">
          <p className="text-3xl max-w-6xl italic md:text-4xl font-regular mx-auto mb-8">
            From the world&apos;s lowest point on earth, elevate to your
            business&apos;s highest potential—because the climb starts here!
          </p>

          <p className="text-3xl md:text-4xl font-bold text-green-400">
            October 18 - 19, 2025
          </p>
        </div>

        <div className="max-w-6xl text-center mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10">
          <p className="text-md md:text-lg leading-relaxed">
            The Nudge Summit 2025 will take place on October 18th and 19th,
            2025, at the King Hussein Bin Talal Convention Centre and Hilton
            Dead Sea Resort & Spa, situated on the shores of the Dead Sea in
            Jordan. You will receive a special price offer for room bookings at
            the Hilton Dead Sea via email after completing your registration.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 lg:gap-12 mt-12">
          <div className="flex-1 max-w-md mx-auto md:mx-0">
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/hotel/2023-11-20 (1).webp"
                alt="Standard Ticket"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1 max-w-md mx-auto md:mx-0">
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/hotel/unnamed.webp"
                alt="Premium Ticket"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1 max-w-md mx-auto md:mx-0">
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/hotel/Hilton-Dead-Sea-Resort-and-Spa-King-Deluxe-Guest-Room-with-Terrace.webp"
                alt="VIP Ticket"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(SummitInfo);
