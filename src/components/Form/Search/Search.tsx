import { AudioOutlined } from "@ant-design/icons";
import React from "react";
import { Button, Input, Space } from "antd";

import { SearchOutlined } from "@ant-design/icons";
const MySearch = () => (
  <div className="group bg-black p-2 flex rounded-full items-center w-[350px] hover:bg-white transition duration-500 ease-in-out">
    <div className="p-2 bg-red m-2 h-12 w-12 rounded-full text-white text-[22px] icon group-hover:bg-black transition duration-500 ease-in-out flex items-center justify-center">
      <SearchOutlined />
    </div>

    <p className="text-[20px] mx-4 group-hover:text-black transition duration-500 ease-in-out group-hover:hidden">
      Find Your Favorite
    </p>
    <input
      type="text"
      name=""
      className="bg-[#e2e2e2] h-[50px] text-[18px] text-black rounded-full outline-none pl-2 hidden group-hover:block"
      placeholder="Search here"
      id=""
    />
  </div>
);

export default MySearch;
