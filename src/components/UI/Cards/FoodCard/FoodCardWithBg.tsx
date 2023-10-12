import Image from "next/image";
import img1 from "@/assets/food/f2.jpg";
import { PlusOutlined } from "@ant-design/icons";
const FoodCardWithBg = () => {
  return (
    <div
      className=" rounded-[40px] mx-4 my-6 p-6 text-white  h-[650px]  overflow-hidden flex flex-col justify-between"
      style={{
        backgroundImage: `url(${img1.src})`, // Use footerImage.src
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h2 className="text-gray text-[16px] font-semibold ">BEEF</h2>
        <h1 className="text-[40px] font-bold leading-none hover:text-red ">
          Bacon+Cheese+ Green Burger
        </h1>
      </div>
      {/* <Image src={img} alt="Burger" className="h-[400px] my-10" /> */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-[40px] font-bold leading-none">$6.97</h1>
          <p className="text-[16px] text-gray my-2">220gr/ 600cal</p>
        </div>
        <div>
          <div className="group hover:bg-red cursor-pointer p-4 border-red h-[100px] w-[100px] rounded-full border-4 flex justify-center items-center">
            <PlusOutlined className="text-[#ff4221] text-[40px] group-hover:text-[#ffffff]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardWithBg;
