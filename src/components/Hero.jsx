import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export const Hero = () => {
  return (
    <>
      <div>
        <div className="hero flex justify-center   text-white">
          <div className="hero-content text-center lg:w-full w-[80%]">
            <Swiper className="mySwiper">
              <SwiperSlide>
                <img
                  src="../../public/images/banner/banner1.png"
                  className="rounded-md h-60 md:h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="../../public/images/banner/banner2.png"
                  className="rounded-md h-60 md:h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="../../public/images/banner/banner3.png"
                  className="rounded-md h-60 md:h-auto"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
