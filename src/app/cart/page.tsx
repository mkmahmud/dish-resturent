import React, { useState } from "react"; // Import React from 'react'
import SectionHead from "@/components/UI/SectionHead/SectionHead";
import Link from "next/link";
import bgImage from "@/assets/images/menu.png";
import Image from "next/image";
import img from "@/assets/food/burger.png";
import { Button, Result } from "antd";
import { useCart } from "@/components/cartProvider/addToCart";

const Page = () => { // Rename 'page' to 'Page'
  const [successMessage, setSuccessMessage] = useState(false);
  const { cart, removeFromCart, getTotal } = useCart();

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
              {cart &&
                cart.map((car: any) => {
                  return (
                    <tr key={car.id}> {/* Add 'key' prop */}
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <button
                          onClick={() => {
                            console.log("clicked cart item");
                            removeFromCart(car.id);
                          }}
                          className="bg-red px-4 py-2 text-[18px] text-white rounded-full flex items-center"
                        >
                          X
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 flex items-center">
                        <Image
                          alt="Product"
                          src={car?.img}
                          className="h-[80px] w-[80px] mx-2"
                          height={80}
                          width={80}
                        />
                        <span>{car?.name}</span>{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        ${car?.price}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        1
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        $10.00
                      </td>
                    </tr>
                  );
                })}
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
              <span>Total:</span> <span>${getTotal()}</span>
            </h3>
            <h3 className="flex justify between items-center font-semibold my-8">
              <span>Shipping:</span> <span>$30.98</span>
            </h3>
            <h3 className="flex justify-between items-center font-semibold my-8">
              <span>Subtotal:</span> <span>$30.98</span>
            </h3>
            <hr />
            <div className="flex justify-end my-6">
              <Button
                type="primary"
                onClick={() => {
                  setSuccessMessage(!successMessage);
                }}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </div>
      {successMessage && (
        <div className="fixed bottom-40 bg-white w-full z-20 py-20">
          <Result
            status="success"
            title="Successfully Your Order Placed"
            subTitle="Order number: 2017182818828182881 10~15 Days, please wait."
            extra={[
              <Button type="primary" key="console">
                <Link href="/menu">Go to Menu</Link>
              </Button>,
              <Button key="buy">
                <Link href="/">Go Home</Link>
              </Button>,
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default Page; // Export 'Page'
