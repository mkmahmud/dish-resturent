"use client";
import SectionHead from "@/components/UI/SectionHead/SectionHead";
import Link from "next/link";
import { useRouter } from "next/router"; // Import the useRouter hook
import bgImage from "@/assets/images/menu.png";
import { TagOutlined, FacebookOutlined, StarOutlined } from "@ant-design/icons";
import Image from "next/image";
import img from "@/assets/food/burger.png";
import { Button } from "antd";

const imageData = [
  // Add your image data here, e.g., image URLs
  "image1.jpg",
  "image3.jpg",
];

const page = () => {
  const router = useRouter();
  const { id } = router.query;

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
          <SectionHead title="Shopping Cart" />
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
      <div className="   bg-sectionPrimary text-black p-2 mt-[200px] py-20">
        <div className="  lg:mx-20 bg-white p-6 rounded-lg ">
          <table className="min-w-full ">
            <thead className="bg-red text-white ">
              <tr>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Remove
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  X
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 flex items-center">
                  <Image
                    alt="Product"
                    src={img}
                    className="h-[80px] w-[80px] mx-2"
                  />
                  <span> Product 1</span>{" "}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  $10.00
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  1
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  $10.00
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  X
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 flex items-center">
                  <Image
                    alt="Product"
                    src={img}
                    className="h-[80px] w-[80px] mx-2"
                  />
                  <span> Product 1</span>{" "}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  $10.00
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  1
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  $10.00
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center my-10">
            <p>Does have Coupon Code</p>
            <Button type="primary" className="mx-4">
              Apply
            </Button>
          </div>
          <div className="my-10">
            <h2 className="text-[30px] my-6 font-bold">Cart Total</h2>
            <hr />
            <h3 className="flex justify-between items-center font-semibold my-8">
              <span>Total:</span> <span>$30.98</span>
            </h3>
            <h3 className="flex justify-between items-center font-semibold my-8">
              <span>Shipping:</span> <span>$30.98</span>
            </h3>
            <h3 className="flex justify-between items-center font-semibold my-8">
              <span>Subtotal:</span> <span>$30.98</span>
            </h3>
            <hr />
            <div className="flex justify-end my-6">
              <Button type="primary">Procced To Checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
