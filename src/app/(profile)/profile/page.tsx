"use client";
import React from "react"; // Import React
import { Table } from "antd";
import Link from "next/link";
import useUserData from "@/hooks/useUserData";

const dataSource = [
  {
    key: "1",
    orderID: "rwefw34523fwe",
    placedDate: "32 - 12 - 2015",
    items: "10 Downing Street",
    total: 234,
  },
  {
    key: "2",
    orderID: "rwefw34523fwe",
    placedDate: "32 - 12 - 2015",
    items: "10 Downing Street",
    total: 234,
  },
  {
    key: "3",
    orderID: "rwefw34523fwe",
    placedDate: "32 - 12 - 2015",
    items: "10 Downing Street",
    total: 234,
  },
];

const columns = [
  {
    title: "order Id",
    dataIndex: "orderID",
    key: "orderID",
  },
  {
    title: "placed Date",
    dataIndex: "placedDate",
    key: "placedDate",
  },
  {
    title: "items",
    dataIndex: "items",
    key: "items",
  },
  {
    title: "total",
    dataIndex: "total",
    key: "total",
  },
];

const Page = () => {
  const user = useUserData("user");

  return (
    <div>
      {/* User Info */}
      <div>
        <h2 className="text-[20px] ">Manage my account</h2>
        <div className="md:flex">
          <div className="p-4 bg-white text-black my-4 w-full md:w-1/2">
            <h2 className="py-4 text-[16px] font-semibold">
              Personal Profile <Link href="/profile/edit">[ Edit ]</Link>
            </h2>
            <h2 className=" text-[16px]">{user ? user?.username : ""}</h2>
            <h2 className=" text-[16px]">{user ? user?.email : ""}</h2>
          </div>
          <div className="p-4 bg-white text-black m-4 w-full md:w-1/2">
            <h2 className="py-4 text-[16px] font-semibold">Address</h2>
            <h2 className="py-2 text-[16px]">
              <strong>{user ? user?.username : ""}</strong>
            </h2>
            <h2 className="py-2 text-[16px]">
              <Link href="/profile/edit">Add Adress</Link>
            </h2>
            <h2 className="text-[16px]">
              (+880) {user ? user?.phoneNumber : ""}
            </h2>
          </div>
        </div>
      </div>
      {/* Latest Orders */}
      <div className="bg-white">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default Page;
