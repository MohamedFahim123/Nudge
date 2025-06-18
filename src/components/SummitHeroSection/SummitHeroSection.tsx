import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./SummitHeroSection.module.css";

const SummitHeroSection = () => {
  return (
    <section
      className={`${styles.heroContainer} relative bg-cover bg-center text-white min-h-[80vh]`}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative min-h-[80vh] py-20 z-10 max-w-screen-xl mx-auto flex flex-col justify-between items-center gap-6 px-4 text-center">
        <div className={`w-full flex justify-center ${styles.fadeInItem}`}>
          <Image
            width={600}
            height={300}
            src="/images/SummitHeroLogo.png"
            alt="Hero Section Logo"
            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto"
          />
        </div>

        <div className={styles.fadeInItem}>
          <p className="text-base sm:text-lg md:text-2xl font-medium mb-12 max-w-[700px] px-2">
            Value isn{"'"}t in knowing things but in applying things! Two
            intensive days, but there is a lot for you to learn and apply here!
          </p>

          <p className="italic text-sm sm:text-md md:text-2xl mb-6 max-w-[700px] px-2">
            The science is proven! We will guide you in maximizing revenue by
            applying science and evidence-based approaches.
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 md:gap-16 text-sm sm:text-base ${styles.fadeInItem}`}
        >
          <Link
            href={`/event`}
            className="italic font-semibold hover:text-[#5bf286] text-lg sm:text-xl transition-all duration-300 text-center"
          >
            Hilton Dead Sea
            <br />
            <span className="hidden sm:inline">Jordan</span>
          </Link>

          <span className="hidden sm:inline text-gray-300">|</span>

          <span className="italic text-lg sm:text-xl text-center">
            October 18th and 19th, 2025
          </span>

          <span className="hidden sm:inline text-gray-300">|</span>

          <Link
            href="/ticket"
            className="bg-green-500 hover:bg-[#250168] text-white text-lg md:text-xl font-semibold px-6 md:px-8 py-3 md:py-4 transition-all duration-300 text-center"
          >
            Get Your Ticket
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(SummitHeroSection);
