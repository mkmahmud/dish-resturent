"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";
import {
  MenuOutlined,
  CloseOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";
import { useRouter } from "next/navigation";
import deleteCookie from "@/hooks/deleteCookie";

const handleMenuClick: MenuProps["onClick"] = (e) => {
  console.log("click", e);
};

// Event handler for the "Sign Out" button

const items = [
  {
    key: "1",
    label: "Profile",
    href: "/profile",
  },
  {
    key: "2",
    label: "Settings",
    href: "/settings",
  },
  {
    key: "3",
    label: "Orders",
    href: "/orders",
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

const Navbar = () => {
  //user
  const [user, setUser] = useState<string | null>(null); // Provide initial state type
  const router = useRouter();
  function handleSignOut() {
    deleteCookie("token");
    router.push("/login");
  }
  useEffect(() => {
    // Check for authentication here (e.g., check if the token exists in the cookie)
    const token = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith("token="))
      ?.split("=")[1];
    if (token) {
      setUser(token);
    }
  }, [router]);

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
                {user ? (
                  <Link href="/profile">
                    <UserOutlined
                      className="text-[30px] cursor-pointer "
                      style={{ color: "#ff4221" }}
                    />
                  </Link>
                ) : (
                  <Link href="/login" className="text-black">
                    <button className="bg-red px-4 py-2 text-[18px] text-white rounded-full flex items-center">
                      {" "}
                      <span className="px-2">Sign In</span> <LoginOutlined />
                    </button>
                  </Link>
                )}
              </div>
              {user ? (
                <button
                  onClick={() => {
                    handleSignOut();
                  }}
                >
                  <LogoutOutlined
                    className="text-[30px] cursor-pointer pl-4 "
                    style={{ color: "#ff4221" }}
                  />
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Desktop Menu */}
    </div>
  );
};

export default Navbar;
