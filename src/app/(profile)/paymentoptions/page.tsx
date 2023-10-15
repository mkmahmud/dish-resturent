import { PayCircleOutlined } from "@ant-design/icons";
import Link from "next/link";

const page = () => {
  return (
    <div className=" ">
      <div className="p-4 bg-white text-black my-4 w-full ">
        <h2 className="py-4 text-[16px] font-semibold">
          Payment Options 
        </h2>
        <div>
          <p className="text-[18px]">Account</p>
          <hr />
          <div className="flex justify-between items-center px-2 py-4 text-[16px]">
            <div >
              <PayCircleOutlined />
              <span className="mx-4">090843204234</span>
            </div>
            <Link href="/payment/delete">Delete</Link>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default page;
