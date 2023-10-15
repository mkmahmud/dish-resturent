"use client";
import { Button, Steps } from "antd";
import Search from "antd/es/input/Search";
import Image from "next/image";
import burger from "@/assets/food/burger.png";
const onSearch = (value: string) => {
  console.log("Searching for:", value);
};

const page = () => {
  return (
    <div className=" ">
      <div className="p-4 bg-white text-black my-4 w-full ">
        <h2 className="py-4 text-[16px] font-semibold">Track Order</h2>
        <Search
          placeholder="Enter Your Order Id here"
          enterButton={
            <Button
              type="primary"
              style={{
                backgroundColor: "#ff6c00",
                border: "none",
                borderRadius: "0px 100px 100px 0px",
              }}
            >
              Track
            </Button>
          }
          size="large"
          onSearch={onSearch}
        />
      </div>
      <div className="p-4 bg-white text-black my-4 w-full ">
        <Steps
          size="small"
          current={1}
          items={[
            {
              title: "Proccessing",
            },
            {
              title: "Shiped",
            },
            {
              title: "Delivared",
            },
          ]}
        />
        <div className="flex justify-between items-center my-4">
          <Image
            alt="Details"
            src={burger}
            className="h-[100px] w-[100px]"
          ></Image>
          <div>
            <h2>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
              veniam.
            </h2>
          </div>
          <h2>$98</h2>
          <h2>Qty: 2</h2>
        </div>
      </div>
      <div className="flex justify-between items-start my-4">
        <div className="p-4 bg-white text-black m-4 w-full md:w-1/2">
          <h2 className="py-4 text-[16px] font-semibold">Shipping Address</h2>
          <h2 className="py-2 text-[16px]">
            <strong>Mahmudul Hasan MK</strong>
          </h2>
          <h2 className="py-2 text-[16px]">
            Dhaka, Bangladesh, Earth, MilkyWay
          </h2>
          <h2 className="text-[16px]">(+880) 2134645721</h2>
        </div>
        <div className="p-4 bg-white text-black m-4 w-full md:w-1/2">
          <h2 className="py-4 text-[16px] font-semibold">Total Summary</h2>
          <h2 className="flex justify-between "><span>Subtotal </span> <span>$868</span> </h2>
          <h2 className="flex justify-between "><span>Delivery Fee </span> <span>$23</span> </h2>
          <h2 className="flex justify-between "><span>Cash Payment Fee </span> <span>$11</span> </h2>
          <hr />
          <h2 className="flex justify-between "><span>Total </span> <span>$987</span> </h2>

        </div>
      </div>
    </div>
  );
};

export default page;
