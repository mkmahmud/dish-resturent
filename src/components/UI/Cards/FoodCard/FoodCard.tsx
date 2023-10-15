import Image from "next/image";
import { PlusOutlined } from "@ant-design/icons";
import Link from "next/link";

const FoodCard = ({ data }: any) => {
  const { id, img, name,    price, tags } = data;
  return (
    <div className="bg-white rounded-[40px] mx-4 my-6 p-6 text-black  min-w-[300px] max-w-[400px] mx-auto overflow-hidden">
      <Link
        href={`/productDetails/${id}`}
        className="text-black hover:text-black"
      >
        <h2 className="text-gray text-[16px] font-semibold ">{tags[0]}</h2>
        <h1 className="text-[30px] md:text-[25px] xl:text-[40px] font-bold leading-none hover:text-red">
          {name}{" "}
        </h1>
        <Image
          src={img}
          alt="Burger"
          width={200}
          height={200}
          className="h-[200px] w-[200px] xl:h-[300px] xl:w-[300px] mx-auto my-10"
        />
        <div className="flex justify-between">
          <div>
            <h1 className="text-[30px] xl:text-[40px] font-bold leading-none">
              ${price}
            </h1>
            <p className="text-[14px] xl:text-[16px] text-gray my-2">
              220gr/ 600cal
            </p>
          </div>
          <div>
            <div className="group hover:bg-red cursor-pointer p-4 border-red h-[60px] w-[60px] xl:h-[80px] xl:w-[80px] rounded-full border-4 flex justify-center items-center">
              <PlusOutlined className="text-[#ff4221] text-[30px] xl:text-[35px] group-hover:text-[#ffffff]" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FoodCard;
