"use client";

import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const items = [
  {
    id: 1,
    icon: "/images/Icons/1.svg",
    text: "Keynotes with actionable insights",
  },
  {
    id: 2,
    icon: "/images/Icons/2.svg",
    text: "Workshops to apply and practice",
  },
  {
    id: 3,
    icon: "/images/Icons/3.svg",
    text: "Pre- and post-assessments to track your learning",
  },
  {
    id: 4,
    icon: "/images/Icons/322.svg",
    text: "Pre- and post-assessments to track your learning",
  },
  {
    id: 5,
    icon: "/images/Icons/4.svg",
    text: "Pre- and post-assessments to track your learning",
  },
  {
    id: 6,
    icon: "/images/Icons/5.svg",
    text: "Pre- and post-assessments to track your learning",
  },
];

const ExpectationSlider = () => {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#250168] mb-4 max-w-4xl leading-relaxed">
          We are committed to meeting all your expectations
        </h2>
        <p className="italic text-black text-lg md:text-xl font-semibold mb-8 leading-relaxed">
          Have you attended a summit where you learned something but didn’t know
          how to apply it?
          <br />
          In two transformational days at the Hilton Dead Sea, you have ...
        </p>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            autoplay={{ delay: 5000 }}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 4 },
            }}
            pagination={{ clickable: true }}
            navigation
            loop={true}
            className="expectation-swiper"
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center text-center px-4 pt-20">
                  <div
                    className="p-2 mb-4 hover:scale-105 transition bg-green-400"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <Image
                      src={item.icon}
                      alt={`Icon ${item.id}`}
                      width={60}
                      height={60}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-800 font-medium">{item.text}</p>
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
