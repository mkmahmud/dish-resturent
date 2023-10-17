"use client";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";

const MySearch = () => {
  const [search, setSearch] = useState("");
  const handleKeyDown = (e: any) => {
    setSearch(e.target.value);
  };
  return (
    <div className="group bg-black p-2 flex rounded-full items-center w-[350px] hover:bg-white transition duration-500 ease-in-out">
      <div className="p-2 bg-red m-2 h-12 w-12 rounded-full text-white text-[22px] icon group-hover:bg-black transition duration-500 ease-in-out flex items-center justify-center">
        <SearchOutlined />
      </div>

      <p className="text-[20px] mx-4 group-hover:text-black transition duration-500 ease-in-out group-hover:hidden">
        Find Your Favorite
      </p>
      <form
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          name=""
          className="bg-[#e2e2e2] h-[50px] text-[18px] text-black rounded-full outline-none pl-2 hidden group-hover:block"
          placeholder="Search here"
          value={search} // Bind the value to the state variable
          onKeyDown={handleKeyDown}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link href={{ pathname: "/menu", query: { search: search } }}>
          {" "}
          <input type="submit" className="hidden" name="" id="" />
        </Link>{" "}
      </form>
    </div>
  );
};

export default MySearch;
