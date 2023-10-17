"use client";
import { Table } from "antd";

const Orders = () => {
  // Users

  const dataSource = [
    {
      key: "1",
      orderID: "rwefw34523fwe",
      placedDate: "32 - 12 - 2015",
      items: "10 Downing Street",
      total: 234,
      status: (
        <button
          
          className={`bg-white max-w-[200px]   px-4 py-2 text-[18px] font-bold text-red rounded-full w-full flex justify-center`}
        >
          {" "}
          Delivared 
        </button>
      ),
    },
    {
      key: "2",
      orderID: "rwefw34523fwe",
      placedDate: "32 - 12 - 2015",
      items: "10 Downing Street",
      total: 234,
      status: (
        <button
          
          className={`bg-red max-w-[200px]   px-4 py-2 text-[18px] font-bold text-white rounded-full w-full flex justify-center`}
        >
          {" "}
          Shiped 
        </button>
      ),
    },
    {
      key: "3",
      orderID: "rwefw34523fwe",
      placedDate: "32 - 12 - 2015",
      items: "10 Downing Street",
      total: 234,
      status: (
        <button
          
          className={`bg-red max-w-[200px]   px-4 py-2 text-[18px] font-bold text-white rounded-full w-full flex justify-center`}
        >
          {" "}
          Shiped 
        </button>
      ),
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
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];
  return (
    <div>
      <h2 className="text-[30px] font-bold my-4">Orders</h2>
      <div className="bg-white">
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    </div>
  );
};

export default Orders;
