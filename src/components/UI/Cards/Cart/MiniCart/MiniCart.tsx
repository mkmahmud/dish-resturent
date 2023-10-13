import Image from "next/image";
import cartImage from "@/assets/icons/home2.png";
import { CloseOutlined } from "@ant-design/icons";

const MiniCart = () => {
  return (
    <div className="flex justify-between items-center  border-b border-gray py-4">
      <Image alt="Cart" src={cartImage} className="h-[100px] w-[100px]" />
      <div>
        <h2>Buffolo Chicken</h2>
        <p>1 x $10.90</p>
      </div>
      <div>
        <CloseOutlined />
      </div>
    </div>
  );
};

export default MiniCart;
