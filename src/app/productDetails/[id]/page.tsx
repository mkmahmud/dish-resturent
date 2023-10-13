"use client";
import SectionHead from "@/components/UI/SectionHead/SectionHead";
import Link from "next/link";
import { useParams } from "next/navigation";
import bgImage from "@/assets/images/menu.png";
import Image from "next/image";
import burger from "@/assets/food/1.jpeg";
import { Button, Input } from "antd";
import MiniCart from "@/components/UI/Cards/Cart/MiniCart/MiniCart";
import { TagOutlined, FacebookOutlined } from "@ant-design/icons";

const page = () => {
  const { id } = useParams();

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
          <SectionHead title="Bacon Cheese Green Burger" />
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
                  src={burger}
                  className="w-[400px] h-[400px] rounded "
                />
                <div className="mx-4 ">
                  <h2 className="text-[50px]">$6.00</h2>
                  <div className="mt-6">
                    <strong className="text-[18px] ">Ingredients:</strong>
                    <p className="my-2">
                      onion, oregano, bacon, cheese, ketchup, mustard, green
                      salad
                    </p>
                  </div>
                  <div>
                    <Button>1</Button>
                    <Button>Add To Cart</Button>
                  </div>
                </div>
              </div>
              <div className="my-10">
                <h2 className="text-[50px] my-4">Description</h2>
                <p>
                  Jerky pork chop doner, cow beef kielbasa andouille pig
                  drumstick. Swine salami capicola jowl, tongue prosciutto chuck
                  chislic spare ribs kevin turducken. Doner fatback turkey
                  picanha, pork belly jerky leberkas burgdoggen. Meatloaf pork
                  venison rump shank pork belly pig tri-tip spare ribs drumstick
                  shankle hamburger chicken strip steak.
                </p>
              </div>
              <div className="md:flex justify-between items-center my-6">
                <ul className="flex justify-between items-center">
                  <li className="mx-2">
                    <TagOutlined /> <span>Bacon</span>
                  </li>
                  <li className="mx-2">
                    <TagOutlined /> <span>Bacon</span>
                  </li>
                </ul>
                <ul className="flex justify-between items-center">
                  <li className="mx-2">
                    <FacebookOutlined />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-3/12">
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

export default page;
