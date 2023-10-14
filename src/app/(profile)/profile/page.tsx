"use client";
import { Table } from "antd"; 
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

const page = () => { 
  return (
    <div>
      {/* USer Info */}
      <div>
        <h2 className="text-[20px] ">Manage my account</h2>
        <div className="md:flex">
          <div className="p-4 bg-white text-black my-4 w-full md:w-1/2">
            <h2 className="py-4 text-[16px] font-semibold">Personal Profile</h2>
            <h2 className=" text-[16px]">Mahmudul Hasan MK</h2>
            <h2 className=" text-[16px]">mahmudul@gmail.com</h2>
          </div>
          <div className="p-4 bg-white text-black m-4 w-full md:w-1/2">
            <h2 className="py-4 text-[16px] font-semibold">Address</h2>
            <h2 className="py-2 text-[16px]">
              <strong>Mahmudul Hasan MK</strong>
            </h2>
            <h2 className="py-2 text-[16px]">
              Dhaka, Bangladesh, Earth, MilkyWay
            </h2>
            <h2 className="text-[16px]">(+880) 2134645721</h2>
          </div>
        </div>
      </div>
      {/* latest Orders */}
      <div className="bg-white">
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    </div>
  );
};

export default page;
