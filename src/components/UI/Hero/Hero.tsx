"use client";

import heroImg from "@/assets/not-found.png";
import MySearch from "@/components/Form/Search/Search";
import MySwiper from "@/components/Swiper/Swiper";
import { Button } from "antd";
import Image from "next/image";
import iconImage from "@/assets/Hero/icon.png";

const Hero = () => {
  return (
    <div>
      <div className=" relative  text-white py-16 px-4 sm:px-6 lg:px-8 md:flex items-center justify-between w-full">
        <Image
          src={iconImage}
          alt="iconImage"
          className="absolute left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] rotate-45 "
        />
        <div
          className="bg-red-100 w-full md:w-1/2 relative md:pl-20"
          style={{ fontFamily: "'Young Serif', serif" }}
        >
          <div className="text-[40px] md:text-[70px] font-bold">
            <h2>Tasty Food</h2>
            <h2>Tasty Life</h2>
          </div>
          <p className="text-[20px] my-4">
            Creating testy foods with tests that lingers in your mouth forever
          </p>
          <div className="my-6">
            <MySearch />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <MySwiper />
        </div>
      </div>
    </div>
  );
};

export default Hero;
