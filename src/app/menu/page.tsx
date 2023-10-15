"use client";
import FoodCard from "@/components/UI/Cards/FoodCard/FoodCard";
import SectionHead from "@/components/UI/SectionHead/SectionHead";
import { GroupOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { Breadcrumb, Col, Pagination, Row, Select, Space } from "antd";
import Search from "antd/es/input/Search";
import bgImage from "@/assets/images/menu.png";
import Link from "next/link";
import { useEffect, useState } from "react";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const onSearch = (value: any) => console.log(value);

const page = () => {
  const [imageData, setimageData] = useState([]);

  useEffect(() => {
    fetch("https://dish-backend.vercel.app/products/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setimageData(data);
      });
  }, []);

  return (
    <div>
      <div
        className="h-[300px] bg-white w-full mb-10 flex items-end	 absolute top-0"
        style={{
          backgroundImage: `url(${bgImage.src})`, // Use footerImage.src
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full w-full bg-[#00000085] pt-[100px]">
          <SectionHead title="Our Menu" />
          <div>
            <ul className="flex justify-center items-center text-white">
              <li className="mx-2 ">
                <Link href="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <p> /</p>
              </li>
              <li className="mx-2 ">
                <Link href="/menu" className="text-white">
                  Menu
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-[300px]">
        {/*  Products */}

        <div className="md:flex px-4 lg:px-10 w-full">
          <div className="w-full md:w-2/12 px-2">
            <div className="mb-10 text-black  ">
              <h2 className="bg-white py-2 px-4 text-[20px] font-bold rounded-lg border-b-2 border-black">
                Category
              </h2>
              <ul className="my-8">
                <li className="text-white text-[18px] my-2 flex justify-between items-center px-2">
                  <p>Burger</p> <PlusSquareOutlined />
                </li>
                <li className="text-white text-[18px] my-2 flex justify-between items-center px-2">
                  <p>Burger</p> <PlusSquareOutlined />
                </li>
              </ul>
            </div>
            <div className="my-10 text-black  ">
              <h2 className="bg-white py-2 px-4 text-[20px] font-bold rounded-lg border-b-2 border-black">
                Category
              </h2>
              <ul className="my-8">
                <li className="text-white text-[18px] my-2 flex justify-between items-center px-2">
                  <p>Burger</p> <PlusSquareOutlined />
                </li>
                <li className="text-white text-[18px] my-2 flex justify-between items-center px-2">
                  <p>Burger</p> <PlusSquareOutlined />
                </li>
              </ul>
            </div>
            <div className="my-10 text-black  ">
              <h2 className="bg-white py-2 px-4 text-[20px] font-bold rounded-lg border-b-2 border-black">
                Category
              </h2>
              <ul className="my-8">
                <li className="text-white text-[18px] my-2 flex justify-between items-center px-2">
                  <p>Burger</p> <PlusSquareOutlined />
                </li>
                <li className="text-white text-[18px] my-2 flex justify-between items-center px-2">
                  <p>Burger</p> <PlusSquareOutlined />
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-10/12 px-2 md:px-6">
            <div className="md:flex justify-between items-center text-[20px]     mx-auto py-2 px-4 border  border-white rounded-lg">
              <div className="flex">
                <p className="pr-2">ShortBy </p>
                <Space wrap>
                  <Select
                    defaultValue="Featured"
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={[
                      { value: "Featured", label: "Featured" },
                      { value: "Best Selling", label: "Best Selling" },
                    ]}
                  />
                </Space>
              </div>
              <div className="flex">
                <p className="pr-2">Pageinate </p>
                <Space wrap>
                  <Select
                    defaultValue="Featured"
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={[
                      { value: "Featured", label: "Featured" },
                      { value: "Best Selling", label: "Best Selling" },
                    ]}
                  />
                </Space>
              </div>
              <div className="flex">
                <p className="pr-2">Search </p>
                <Space wrap>
                  <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    enterButton
                    styles={{
                      affixWrapper: {
                        background: "white",
                        color: "black",
                      },
                    }}
                  />
                </Space>
              </div>
            </div>
            <Row gutter={[16, 16]}>
              {imageData.map((image, index) => (
                <Col key={index} xs={24} sm={12} md={12} lg={8} xl={8}>
                  <FoodCard data={image} />
                </Col>
              ))}
            </Row>
            <div className="border-2 border-white p-2 bg-white flex justify-center rounded-full my-10">
              <Pagination
                defaultCurrent={6}
                total={500}
                className="mx-auto"
                style={{ color: "white" }}
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
