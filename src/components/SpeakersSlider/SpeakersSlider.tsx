"use client";

import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import styles from "./SpeakersSlider.module.css";
const SpeakersSlider = () => {
  const speakers = [
    {
      id: 1,
      name: "Rita McGrath",
      title: "Top 10 Management Thinkers",
      subtitle: "#1 Strategy Thinker Globally",
      src: "/images/Speakers/New folder/Rita McGrath.png",
      description:
        "Rita McGrath, one of the world's top experts on strategy and innovation, is consistently ranked among the top 10 management thinkers globally and has earned the #1 award for strategy by Thinkers50. The best-selling author of five books on leadership, business, and organizational management, she runs the Rita McGrath Group and is the founder of consultancy and innovation platform Valise. Rita is a trusted partner and strategic advisor to the C-suites of many of the world's largest and most well-known companies. She advised and spoke with multinational corporations to help them innovate, including Citibank, Dell, GSK, and MetLife. Marshall Goldsmith, the #1 New York Times Best-Selling Author and #1 Executive Coach, said about Rita: 'I never miss the opportunity to include Rita McGrath in my executive events—read her book, and you'll know why.'",
    },
    {
      id: 2,
      name: "Andrew Cole",
      title: "Top 10 Management Thinkers",
      subtitle: "#1 Strategy Thinker Globally",
      src: "/images/Speakers/New folder/Andrew Cole.png",
      description:
        "Andrew Cole, one of the world's top experts on strategy and innovation, is consistently ranked among the top 10 management thinkers globally and has earned the #1 award for strategy by Thinkers50. The best-selling author of five books on leadership, business, and organizational management, she runs the Rita McGrath Group and is the founder of consultancy and innovation platform Valise. Rita is a trusted partner and strategic advisor to the C-suites of many of the world's largest and most well-known companies. She advised and spoke with multinational corporations to help them innovate, including Citibank, Dell, GSK, and MetLife. Marshall Goldsmith, the #1 New York Times Best-Selling Author and #1 Executive Coach, said about Rita: 'I never miss the opportunity to include Rita McGrath in my executive events—read her book, and you'll know why.'",
    },
    {
      id: 3,
      name: "Bas Wouters",
      title: "Top 10 Management Thinkers",
      subtitle: "#1 Strategy Thinker Globally",
      src: "/images/Speakers/New folder/Bas Wouters.png",
      description:
        "Bas Wouters, one of the world's top experts on strategy and innovation, is consistently ranked among the top 10 management thinkers globally and has earned the #1 award for strategy by Thinkers50. The best-selling author of five books on leadership, business, and organizational management, she runs the Rita McGrath Group and is the founder of consultancy and innovation platform Valise. Rita is a trusted partner and strategic advisor to the C-suites of many of the world's largest and most well-known companies. She advised and spoke with multinational corporations to help them innovate, including Citibank, Dell, GSK, and MetLife. Marshall Goldsmith, the #1 New York Times Best-Selling Author and #1 Executive Coach, said about Rita: 'I never miss the opportunity to include Rita McGrath in my executive events—read her book, and you'll know why.'",
    },
    {
      id: 4,
      name: "Hasan Qasem",
      title: "Top 10 Management Thinkers",
      subtitle: "#1 Strategy Thinker Globally",
      src: "/images/Speakers/New folder/Hasan Qasem.png",
      description:
        "Hasan Qasem, one of the world's top experts on strategy and innovation, is consistently ranked among the top 10 management thinkers globally and has earned the #1 award for strategy by Thinkers50. The best-selling author of five books on leadership, business, and organizational management, she runs the Rita McGrath Group and is the founder of consultancy and innovation platform Valise. Rita is a trusted partner and strategic advisor to the C-suites of many of the world's largest and most well-known companies. She advised and spoke with multinational corporations to help them innovate, including Citibank, Dell, GSK, and MetLife. Marshall Goldsmith, the #1 New York Times Best-Selling Author and #1 Executive Coach, said about Rita: 'I never miss the opportunity to include Rita McGrath in my executive events—read her book, and you'll know why.'",
    },
    {
      id: 5,
      name: "Patrick van",
      title: "Top 10 Management Thinkers",
      subtitle: "#1 Strategy Thinker Globally",
      src: "/images/Speakers/New folder/Patrick van der Pijl.png",
      description:
        "Patrick van, one of the world's top experts on strategy and innovation, is consistently ranked among the top 10 management thinkers globally and has earned the #1 award for strategy by Thinkers50. The best-selling author of five books on leadership, business, and organizational management, she runs the Rita McGrath Group and is the founder of consultancy and innovation platform Valise. Rita is a trusted partner and strategic advisor to the C-suites of many of the world's largest and most well-known companies. She advised and spoke with multinational corporations to help them innovate, including Citibank, Dell, GSK, and MetLife. Marshall Goldsmith, the #1 New York Times Best-Selling Author and #1 Executive Coach, said about Rita: 'I never miss the opportunity to include Rita McGrath in my executive events—read her book, and you'll know why.'",
    },
  ];

  return (
    <section>
      <h2 className={`${styles.speakerFadeIn} text-center text-2xl py-8 md:text-5xl font-normal text-[#231F20] bg-[#5BF286]`}>
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
            {speakers.map((speaker) => (
              <SwiperSlide key={speaker.id}>
                <div className={`rounded-xl p-4 sm:p-8 md:p-12`}>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-2/5 bg-gray-200 rounded-lg h-64 md:h-96 flex items-center justify-center overflow-hidden">
                      <Image
                        src={speaker.src}
                        alt={speaker.name}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    <div className="w-full md:w-3/5 text-white text-left">
                      <h3 className="text-2xl md:text-3xl">{speaker.name}</h3>
                      <p className="text-xl md:text-2xl mt-2 italic">{speaker.title}</p>
                      <p className="text-lg md:text-xl text-green-400 mt-1 italic">
                        {speaker.subtitle}
                      </p>
                      <div className="border-t border-gray-200 my-4 md:my-6"></div>
                      <p className="leading-relaxed text-sm sm:text-base md:text-lg">
                        {speaker.description}
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


