"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button, Col, Row } from "antd";
import burgerImg from "@/assets/food/burger.png";
import MiniCart from "@/components/UI/Cards/Cart/MiniCart/MiniCart";
import { TagOutlined, FacebookOutlined, StarOutlined } from "@ant-design/icons";
import SectionHead from "@/components/UI/SectionHead/SectionHead";
import bgImage from "@/assets/images/menu.png";
import FoodCard from "@/components/UI/Cards/FoodCard/FoodCard";
import useCookieData from "@/hooks/useUser";

interface ProductData {
  status: boolean;
  name?: string;
  price?: number;
  ingredients?: string[];
  description?: string;
  img?: string;
}

const Page = () => {
  // user
  const token = useCookieData("token");

  const { id } = useParams();
  const [data, setData] = useState<ProductData | null>({} as ProductData);
  const [relatedProduct, setrelatedProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data[0]);
        const myData = data[0];
      })
      .catch((error) => {
        console.error("Error Fetching data:", error);
      });

    fetch("http://localhost:5000/products/")
      .then((response) => response.json())
      .then((data) => {
        // Sort the related products by price in ascending order
        const sortedRelatedProducts = data
          .slice()
          .sort(
            (a: { price: number }, b: { price: number }) => a.price - b.price
          );
        setrelatedProduct(sortedRelatedProducts);
      });
  }, [id]);

  return (
    <div>
      <div
        className="h-[300px] bg-white w-full mb-10 flex items-end absolute top-0"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full w-full bg-[#00000085] pt-[100px]">
          <SectionHead title={data && data.name} />
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
      <div className="bg-sectionPrimary text-black p-2 mt-[200px] pt-20">
        <div className="md:flex">
          <div className="w-full md:w-9/12">
            <div className="max-w-[800px] mx-auto">
              <div className="md:flex justify-center">
                <Image
                  alt="Details"
                  src={data && data.img ? data.img : burgerImg}
                  height={200}
                  width={200}
                  className="w-[400px] h-[400px] rounded block mx-auto"
                />
                <div className="mx-4 ">
                  <h2 className="text-[50px] text-center my-4 md:text-left">
                    ${data && data.price}
                  </h2>
                  <div className="mt-6 text-center md:text-left">
                    <strong className="text-[18px] ">Ingredients:</strong>
                    <p className="my-2">
                      {data &&
                        data.ingredients &&
                        data.ingredients.map((i: any, index: any) => {
                          return (
                            <li className="mx-2" key={index}>
                              <TagOutlined /> <span>{i}</span>
                            </li>
                          );
                        })}
                    </p>
                  </div>
                  <div className="flex space-x-2 my-6">
                    <button className="bg-red px-4 py-2 text-[18px] text-white rounded-full flex items-center">
                      {" "}
                      <span className="px-2">
                        {data && data.status ? "Available" : "Out of Stock"}
                      </span>
                    </button>
                    <button className="bg-white px-4 py-2 text-[18px] text-red rounded-full flex items-center">
                      {" "}
                      <span className="px-2">1</span>
                    </button>{" "}
                    <button className="bg-red px-4 py-2 text-[18px] text-white rounded-full flex items-center">
                      {" "}
                      <span className="px-2">Add To cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="my-10">
                <h2 className="text-[50px] my-4 font-bold">Description</h2>
                <p className="text-[16px]">{data && data.description}</p>
              </div>
              <div className="md:flex justify-between items-center my-6">
                <ul className="flex  items-center">
                  {data &&
                    data.ingredients &&
                    data.ingredients.map((i: any, index: any) => {
                      return (
                        <li className="mx-2" key={index}>
                          <TagOutlined /> <span>{i}</span>
                        </li>
                      );
                    })}
                </ul>
                <ul className="flex justify-between items-center">
                  <li className="mx-2">
                    <a href="facebook.com" target="_blank">
                      <FacebookOutlined />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="facebook.com" target="_blank">
                      <FacebookOutlined />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="facebook.com" target="_blank">
                      <FacebookOutlined />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Related Products */}
              <div className="mt-10">
                <h2 className="text-[50px] my-4 font-bold">Related Product</h2>
                <Row gutter={[16, 16]}>
                  {relatedProduct.slice(0, 2).map((image, index) => (
                    <Col key={index} xs={24} sm={24} md={12} lg={12} xl={12}>
                      <FoodCard data={image} />
                    </Col>
                  ))}
                </Row>
              </div>
              {/* Reviews */}
              <div className="my-20 ">
                <h2 className="text-[50px] my-4 font-bold">Reviews</h2>
                <div>
                  <p>There Is No Review Yet</p>
                </div>
              </div>
              {/* Write a review */}
              {token && (
                <div className="mb-20">
                  <h2 className="text-[30px] my-4 font-bold">Write a Review</h2>
                  <form>
                    <div className="text-[18px] my-6">
                      <p className="py-2">Your Rating</p>
                      <div className="flex  space-x-2">
                        <StarOutlined />
                        <StarOutlined />
                        <StarOutlined />
                        <StarOutlined />
                        <StarOutlined />
                      </div>
                    </div>
                    <div className="text-[18px] my-6">
                      <p className="py-2">Your Review</p>
                      <textarea
                        name="review"
                        id=""
                        cols={8}
                        rows={10}
                        className="bg-transparent border border-gray rounded-lg w-full"
                      ></textarea>
                    </div>
                    <Button type="primary"> SUBMIT </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
          <div className="hidden md:block md-w-3/12 px-2">
            <div className="max-w-[300px]">
              <h2 className="text-[60px] font-bold">Cart</h2>
              <div>
                <MiniCart />
                <MiniCart />
              </div>
              <div>
                <h3 className="flex justify-between items-center font-semibold my-4">
                  <span>Subtotal:</span> <span>$30.98</span>
                </h3>
              </div>
              <div className="flex justify-between">
                <Button>View Cart</Button>
                <Button>Checkout </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
