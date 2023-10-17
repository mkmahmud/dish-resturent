"use client";
import { Table } from "antd";
import { useEffect, useState } from "react";

const user = () => {
  // Users
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://dish-backend.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
 

  const columns = [
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Address",
      dataIndex: "username",
      key: "username",
    },
  ];
  return (
    <div>
      <h2 className="text-[30px] font-bold my-4">Users</h2>
      <div className="bg-white">
        <Table dataSource={users} columns={columns} />;
      </div>
    </div>
  );
};

export default user;
