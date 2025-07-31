"use client";

import { useHomeDataStore } from "@/store/homedata";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SpeakersSlider.module.css";
const SpeakersSlider = () => {
  const { speakers } = useHomeDataStore();

  if (!speakers) return null;

  return (
    <section>
      <h2
        className={`${styles.speakerFadeIn} text-center text-2xl py-8 md:text-5xl font-normal text-[#231F20] bg-[#5BF286]`}
      >
        Top Speakers & Experts
      </h2>
      <div className="bg-[#250168] py-16 px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            autoplay={{ delay: 5000 }}
            slidesPerView={1}
            navigation
            loop={true}
            className="speakers-swiper"
          >
            {speakers.map((speaker, idx) => (
              <SwiperSlide key={idx}>
                <div className={`rounded-xl p-4 sm:p-8 md:p-12`}>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-2/5 bg-gray-200 rounded-lg h-64 md:h-96 flex items-center justify-center overflow-hidden">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        width={500}
                        height={500}
                        className="w-full h-100 object-cover rounded-lg"
                        style={{
                          height: "100%",
                        }}
                      />
                    </div>

                    <div className="w-full md:w-3/5 text-white text-left">
                      <h3 className="text-2xl md:text-3xl">{speaker.name}</h3>
                      <p className="text-xl md:text-2xl mt-2 italic">
                        {speaker.job_title}
                      </p>
                      <p className="text-lg md:text-xl text-green-400 mt-1 italic">
                        {speaker.short_description}
                      </p>
                      <div className="border-t border-gray-200 my-4 md:my-6"></div>
                      <p className="leading-relaxed text-sm sm:text-base md:text-lg">
                        {speaker.long_description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default React.memo(SpeakersSlider);
