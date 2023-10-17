import Image from "next/image";
import cartImage from "@/assets/icons/home2.png";
import { CloseOutlined } from "@ant-design/icons";
import { useCart } from "@/components/cartProvider/addToCart";

const MiniCart = ({ data }: any) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center  border-b border-gray py-4">
      <Image
        alt="Cart"
        height={80}
        width={80}
        src={data?.img}
        className="h-[100px] w-[100px]"
      />
      <div>
        <h2>{data?.name}</h2>
        <p>1 x ${data?.price}</p>
      </div>
      <div>
        <button
          onClick={() => {
            removeFromCart(data?.id);
          }}
        >
          <CloseOutlined />
        </button>
      </div>
    </div>
  );
};

export default MiniCart;
