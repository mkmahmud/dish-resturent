"use client";
import FoodCard from "@/components/UI/Cards/FoodCard/FoodCard";
import SectionHead from "@/components/UI/SectionHead/SectionHead";
import { GroupOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { Breadcrumb, Col, Pagination, Row, Select, Space } from "antd";
import Search from "antd/es/input/Search";
import bgImage from "@/assets/images/menu.png";
import Link from "next/link";
import React, { useEffect, useState } from "react"; // Import React and React Hooks
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const [data, setData] = useState([]);

  // Get the query parameter from the URL
  const search = searchParams.get("search");
  // use short and filter
  const [short, setShort] = useState("");
  const [filter, setFilter] = useState("");
  const [onPageSearch, setonPageSearch] = useState("");

  const handleChangesort = (value: string) => {
    setShort(value);
    const sortedData = data
      .slice()
      .sort((a: { id: number }, b: { id: number }) => b.id - a.id);
    setData(sortedData);
  };
  const handleChangeOptions = (value: string) => {
    setFilter(value);
    const sortedData = data
      .slice()
      .sort((a: { price: number }, b: { price: number }) => a.price - b.price);
    setData(sortedData);
  };
  const onSearch = (value: any) => {
    const filtered = data.filter((item: any) => {
      // Replace 'fieldName' with the name of the field you want to search in
      const fieldValue = item.name.toLowerCase();
      return fieldValue.includes(value.toLowerCase());
    });
    setData(filtered);
  };

  useEffect(() => {
    fetch("https://dish-backend.vercel.app/products/")
      .then((response) => response.json())
      .then((data) => {
        if (search) {
          const filtered = data.filter((item: any) => {
            // Replace 'fieldName' with the name of the field you want to search in
            const fieldValue = item.name.toLowerCase();
            return fieldValue.includes(search.toLowerCase());
          });
          setData(filtered);
        } else {
          // If there's no search parameter, set filteredData to the full data
          setData(data);
        }
      });
  }, [search]);

  return (
    <div>
      <div
        className="h-[300px] bg-white w-full mb-10 flex items-end	 absolute top-0 "
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

      <div className="mt-[300px] pb-10">
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
                <p className="pr-2">SortBy </p>
                <Space wrap>
                  <Select
                    defaultValue="Featured"
                    style={{ width: 120 }}
                    onChange={handleChangesort}
                    options={[{ value: "NewArival", label: "New Arival" }]}
                  />
                </Space>
              </div>
              <div className="flex">
                <p className="pr-2">Options </p>
                <Space wrap>
                  <Select
                    defaultValue="Featured"
                    style={{ width: 120 }}
                    onChange={handleChangeOptions}
                    options={[{ value: "Price", label: "Price" }]}
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
              {data.map((productData, index) => (
                <Col key={index} xs={24} sm={12} md={12} lg={8} xl={8}>
                  <FoodCard data={productData} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
