"use client";
import SectionHead from "@/components/UI/SectionHead/SectionHead";
import Link from "next/link";
import { useParams } from "next/navigation";
import bgImage from "@/assets/images/menu.png";
import Image from "next/image";
import { Button } from "antd";
import MiniCart from "@/components/UI/Cards/Cart/MiniCart/MiniCart";
import { TagOutlined, FacebookOutlined, StarOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const Page = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://dish-backend.vercel.app/products/2`)
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
  }, [id]);

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
      <div className="   bg-sectionPrimary text-black p-2 mt-[200px] pt-20">
        <div className="md:flex">
          <div className="w-full md:w-9/12">
            <div className="max-w-[800px] mx-auto">
              <div className="md:flex justify-center">
                <Image
                  alt="Details"
                  src={data && data.img}
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
                            <span className="mx-2" key={index}>
                              {i}
                            </span>
                          );
                        })}
                    </p>
                  </div>
                  <div>
                    <Button>1</Button>
                    <Button>Add To Cart</Button>
                  </div>
                </div>
              </div>
              <div className="my-10">
                <h2 className="text-[50px] my-4 font-bold">Description</h2>
                <p>{data && data.description}</p>
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
                    <FacebookOutlined />
                  </li>
                </ul>
              </div>

              {/* Related Products */}
              <div className="mt-10">
                <h2 className="text-[50px] my-4 font-bold">Related Product</h2>
              </div>
              {/* Reviews */}
              <div className="mt-20">
                <h2 className="text-[50px] my-4 font-bold">Reviews</h2>
                <div>
                  <p>There Is No Review Yet</p>
                </div>
              </div>
              {/* Write  a review */}
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
            </div>
          </div>
          <div className="hidden md:block md:w-3/12 px-2">
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
                <Button>Wiew Cart</Button>
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
