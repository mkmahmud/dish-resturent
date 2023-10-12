"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img2 from "@/assets/Hero/22.png";
import img3 from "@/assets/Hero/33.png";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function MySwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        loop
      >
        <SwiperSlide>
          <Image alt="Slider Image" src={img3} className="h-full scale-125 "    />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="Slider Image" src={img2} className="h-full scale-125  "  />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
