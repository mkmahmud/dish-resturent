"use client";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";
import {
  MenuOutlined,
  CloseOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";
import { getSession, useSession } from "next-auth/react";

const handleMenuClick: MenuProps["onClick"] = (e) => {
  console.log("click", e);
};

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link rel="noopener noreferrer" href="/profile">
        Profile
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link rel="noopener noreferrer" href="/profile">
        Settings
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link rel="noopener noreferrer" href="/profile">
        Orders
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link rel="noopener noreferrer" href="/api/auth/signout">
        <Button type="primary" danger>
          Sign Out
        </Button>
      </Link>
    ),
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const Navbar = () => {
  //user
  const { data } = useSession();
   // Mobile Menu
  const [mobileMenu, setMobileMenu] = useState(false);
  // Menus
  const menus = ["Home", "Menu", "About", "Services", "Contact"];

  return (
    <div
      className="bg-[#FFFFFF] py-4  z-50 w-[90%] rounded-full mx-auto my-2"
      style={{ fontFamily: "'Teko', sans-serif" }}
    >
      {/* Mobile Menu */}
      <div className="flex items-center justify-between mx-2 sm:mx-6 md:mx-10  lg:hidden ">
        <Link href="/">
          <Image src={logo} alt={"LOGO"} height={40} />
        </Link>
        <div>
          {mobileMenu ? (
            <Button onClick={() => setMobileMenu(false)}>
              {" "}
              <CloseOutlined />
            </Button>
          ) : (
            <Button onClick={() => setMobileMenu(true)}>
              <MenuOutlined />{" "}
            </Button>
          )}
        </div>
        {mobileMenu && (
          <div className="absolute bg-white w-[90%] top-20 left-0 px-2 mx-10">
            <ul>
              {menus.map((menu, index) => {
                return (
                  <Link
                    href={menu === "Home" ? "/" : menu.toLowerCase()}
                    key={index}
                    className="block px-4 py-2 mt-2 text-sm text-black hover:text-red text-[20px] font-light transition duration-300"
                  >
                    <li>{menu}</li>
                  </Link>
                );
              })}
            </ul>
            <div className=" my-4">
              <div>
                <Link href="/">
                  <p className="text-[16px] text-black">Order by phone</p>
                  <p className="text-[20px] text-red">1-800-700-600</p>
                </Link>
              </div>
              <div className="mx-4 my-4">
                <Link href="/cart" className="text-black">
                  <ShoppingCartOutlined className="text-[30px] " />{" "}
                  <span>0</span>
                </Link>
              </div>
              <div>
                <Link href="/profile" className="text-black">
                  <Dropdown.Button
                    menu={menuProps}
                    placement="bottom"
                    icon={<UserOutlined />}
                  >
                    Dropdown
                  </Dropdown.Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Mobile Menu */}
      {/* Desktop Menu */}
      <div className="hidden lg:block ">
        <div className="flex items-center justify-between  lg:mx-10 xl:mx-20  ">
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt={""} height={40} />
            </Link>
            {/* Menus */}
            <ul className="flex">
              {menus.map((menu, index) => {
                return (
                  <Link
                    href={menu === "Home" ? "/" : menu.toLowerCase()}
                    key={index}
                    className="block px-4 py-2 mt-2 text-black hover:text-red text-[18px] font-light transition duration-300 uppercase font-normal"
                  >
                    <li>{menu}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center">
            {/* Button */}
            <div className="flex justify-center items-center">
              <div>
                <Link href="/" className=" text-end ">
                  <p className="text-[16px] text-black">Order by phone</p>
                  <p className="text-[20px] text-red">1-800-700-600</p>
                </Link>
              </div>
              <div className="mx-4">
                <Link href="/cart" className="text-black">
                  <ShoppingCartOutlined className="text-[30px] " />{" "}
                  <span>0</span>
                </Link>
              </div>
              <div>
                {data ? (
                  <Dropdown menu={{ items }} placement="bottom" arrow>
                    <UserOutlined
                      className="text-[30px] cursor-pointer "
                      style={{ color: "#ff4221" }}
                    />
                  </Dropdown>
                ) : (
                  <Link href="/profile" className="text-black">
                    <button className="bg-red px-4 py-2 text-[18px] text-white rounded-full flex items-center">
                      {" "}
                      <span className="px-2">Sign In</span> <LoginOutlined />
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop Menu */}
    </div>
  );
};

export default Navbar;
