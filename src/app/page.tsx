import React from "react";
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

const imageData = [
  // Add your image data here, e.g., image URLs
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
];

const HomePage = () => (
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
        <div className="sm:px-[100px] md:px-[20px] xl:px-[200px]">
          <Row gutter={[16, 16]}>
            {imageData.map((image, index) => (
              <Col key={index} xs={24} sm={24} md={12} lg={8} xl={8}>
                <FoodCard />
              </Col>
            ))}
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={16}>
              <FoodCardWithBg />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={8}>
              <FoodCard />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={8} xl={6}>
              <FoodCard />
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={6}>
              <FoodCard />
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={12}>
              <FoodCardWithBg />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </ConfigProvider>
);

export default HomePage;
