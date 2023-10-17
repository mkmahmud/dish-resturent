"use client";
import React, { useEffect, useState } from "react";
import { Button, Col, ConfigProvider, Row } from "antd";
import theme from "@/theme/themeConfig";
import Hero from "@/components/UI/Hero/Hero";
import SubHero from "@/components/UI/SubHero/SubHero";
// images
import img1 from "@/assets/icons/home1.png";
import img2 from "@/assets/icons/home2.png";
import img3 from "@/assets/icons/home3.png";
import SectionHead from "@/components/UI/SectionHead/SectionHead";
import FoodCard from "@/components/UI/Cards/FoodCard/FoodCard";
import FoodCardWithBg from "@/components/UI/Cards/FoodCard/FoodCardWithBg";
import Image from "next/image";
import { PlusOutlined } from "@ant-design/icons";
import whyBarger from "@/assets/images/about.png";
import burger from "@/assets/food/b.png";
import spoonIcon from "@/assets/icons/about/1.png";
import ReviewCard from "@/components/UI/Cards/ReviewCard/ReviewCard";
import tomato from "@/assets/images/bgImages/tomato.png";
import cheese from "@/assets/images/bgImages/cheese.png";
 
const HomePage = () => {
 
  const [imageData, setimageData] = useState([]);

  useEffect(() => {
    fetch("https://dish-backend.vercel.app/products/")
      .then((response) => response.json())
      .then((data) => {
        setimageData(data);
      });
  }, []);

  return (
    <ConfigProvider theme={theme}>
      <div className="App" style={{ background: "#ff4221" }}>
        {/* Hero */}
        <Hero />
        {/* Sub Hero */}
        <div className="lg:flex justify-around items-center md:px-[10%] my-10 ">
          <SubHero
            title="Quick Delivery"
            subTitle="All our dishes are delivered quickly in 15 minutes."
            image={img1}
          />
          <SubHero
            title="Quick Delivery"
            subTitle="All our dishes are delivered quickly in 15 minutes."
            image={img2}
          />
          <SubHero
            title="Quick Delivery"
            subTitle="All our dishes are delivered quickly in 15 minutes."
            image={img3}
          />
        </div>
        {/* Beast Sellars */}
        <div className="mt-20">
          <SectionHead title="Bestsellers" />
          <div className="sm:px-[20px] md:px-[20px] xl:px-[100px]">
            <Row gutter={[16, 16]}>
              {imageData.slice(0, 3).map((image, index) => (
                <Col key={index} xs={24} sm={24} md={12} lg={8} xl={8}>
                  <FoodCard data={image} />
                </Col>
              ))}
            </Row>
            {imageData.length && (
              <>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={24} md={12} lg={12} xl={16}>
                    <FoodCardWithBg />
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <FoodCard data={imageData[3]} />
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                    <FoodCard data={imageData[2]} />
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                    <FoodCard data={imageData[1]} />
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={8} xl={12}>
                    <FoodCardWithBg />
                  </Col>
                </Row>
              </>
            )}
          </div>
        </div>
        {/* Popular */}

        <div
          className="h-[80vh] my-20"
          style={{
            backgroundImage: `url(${burger.src})`, // Use footerImage.src
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div
            className="h-full w-full px-[20px] md:px-[40px] lg:px-[100px] flex flex-col  justify-center"
            style={{ background: "linear-gradient(93deg, black, #000000bd)" }}
          >
            <div>
              <h2
                className="text-[50px] my-10 font-bold text-sectionPrimary  "
                style={{ fontFamily: "'Rakkas', serif" }}
              >
                Popular SharoomBacon
              </h2>
              <p className="w-fll md:w-[70%] lg:w-[50%] lg:text-[20px] lg:pr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                labore a saepe assumenda! Blanditiis natus, laboriosam
                reiciendis hic molestias at?
              </p>

              <div className="flex justify-between items-center  w-[250px] md:w-[350px] px-6 md:px-10 py-2 bg-white rounded-full my-20">
                <div className="text-black">
                  <h1 className="text-[30px] md:text-[40px] font-bold leading-none ">
                    $6.97
                  </h1>
                  <p className="text-[14px]  my-2">220gr/ 600cal</p>
                </div>
                <div>
                  <div className="group bg-black hover:bg-red hover:border-red cursor-pointer p-4 border-black h-[70px] w-[70px] md:h-[100px] md:w-[100px] rounded-full border-4 flex justify-center items-center">
                    <PlusOutlined className=" text-[40px] group-hover:text-[#ffffff]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Reviews */}
        <div>
          <SectionHead title="Reviews" />
          <ReviewCard />
        </div>
        {/* About */}
        <div className="bg-white md:flex jstify-between items-center px-6 md:px-10 text-black relative py-40">
          <div className="w-full md:w-1/2 relative  ">
            <Image
              src={cheese}
              alt="About Us/ Why Dash"
              className="absolute -top-40 right-0 h-[200px] w-[200px]"
            />
            <Image
              src={tomato}
              alt="About Us/ Why Dash"
              className="absolute -bottom-10 -left-10 h-[200px] w-[200px]"
            />
            <Image
              src={whyBarger}
              alt="About Us/ Why Dash"
              className="w-[500px] block mx-auto"
            />
          </div>
          <div
            className="w-full md:w-1/2"
            style={{ fontFamily: "'RocknRoll One', sans-serif" }}
          >
            <h2 className="text-[30px] md:text-[50px] font-bold">Why Dish ?</h2>
            <p className="text-[18px] py-4">
              Learn how food from Fooma is the best and healthiest for you. We
              serve delicious and healthy foods with your health in mind.
              Special food for all occasions.
            </p>
            <ul>
              <li className="flex items-center my-10">
                <Image
                  src={spoonIcon}
                  alt="Icon"
                  className="h-[50px] w-[50px]"
                />
                <div className=" mx-4">
                  <h2 className="font-semibold text-[20px]">
                    Over 140 Dishes Served
                  </h2>
                  <p className="py-2">
                    We serve over 140 type of dishes to satisfy your taste buds
                  </p>
                </div>
              </li>

              <li className="flex items-center my-10">
                <Image
                  src={spoonIcon}
                  alt="Icon"
                  className="h-[50px] w-[50px]"
                />
                <div className=" mx-4">
                  <h2 className="font-semibold text-[20px]">
                    Over 140 Dishes Served
                  </h2>
                  <p className="py-2">
                    We serve over 140 type of dishes to satisfy your taste buds
                  </p>
                </div>
              </li>

              <li className="flex items-center my-10">
                <Image
                  src={spoonIcon}
                  alt="Icon"
                  className="h-[50px] w-[50px]"
                />
                <div className=" mx-4">
                  <h2 className="font-semibold text-[20px]">
                    Over 140 Dishes Served
                  </h2>
                  <p className="py-2">
                    We serve over 140 type of dishes to satisfy your taste buds
                  </p>
                </div>
              </li>
              <li className="flex items-center my-10">
                <Image
                  src={spoonIcon}
                  alt="Icon"
                  className="h-[50px] w-[50px]"
                />
                <div className=" mx-4">
                  <h2 className="font-semibold text-[20px]">
                    Over 140 Dishes Served
                  </h2>
                  <p className="py-2">
                    We serve over 140 type of dishes to satisfy your taste buds
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default HomePage;
