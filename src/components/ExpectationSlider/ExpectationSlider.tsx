"use client";

import { useHomeDataStore } from "@/store/homedata";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ExpectationSlider.module.css";

const ExpectationSlider = () => {
  const { summits } = useHomeDataStore();

  if (!summits) return null;

  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2
          className={`text-4xl md:text-5xl font-regular text-[#250168] mb-4 max-w-3xl ${styles.fadeSlideUp}`}
        >
          We designed two days executive summit for you, providing you with:
        </h2>

        <div className={`relative ${styles.fadeSlideUp}`}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            autoplay={{ delay: 5000 }}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            navigation
            loop={true}
            className="expectation-swiper"
          >
            {summits.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center text-center px-4 pt-20">
                  <div
                    className="p-2 mb-4 hover:scale-105 transition bg-green-400 flex justify-center items-center rounded-full"
                    style={{ width: "3.75rem", height: "3.75rem" }}
                  >
                    <Image
                      src={item.image}
                      alt={`Icon ${idx}`}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-800 font-regular text-xl">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ExpectationSlider);
