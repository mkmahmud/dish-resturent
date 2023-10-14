"use client";
import React, { useState } from "react";
import { Col, Row } from "antd";
import Image from "next/image";
import loginImage from "@/assets/images/about.png";
import Input from "@/components/Form/Input/Input";
import FilledButton from "@/components/Buttons/Filled";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const LogIn = () => {
  const { data } = useSession();
  if (data) {
    redirect("/profile");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    await signIn("credentials", {
      username: email,
      password: password,
      redirect: false,
      callbackUrl: "/profile",
    });
  };

  return (
    <div className="md:flex items-center w-full px-2 md:px-10 md:my-20">
      <div className="w-full md:w-1/2">
        <Image
          src={loginImage}
          alt="Log In Image"
          className="block mx-auto w-[300px] "
        ></Image>
      </div>

      <form onSubmit={handleSubmit} className="w-full md:w-1/2">
        <h1
          style={{ margin: "15px 0px" }}
          className="text-[50px] font-bold text-center"
        >
          Log In
        </h1>
        <div className="my-10 relative group">
          <span className="px-4 bg-red border text-[16px] absolute -top-4 ml-4 group-hover:bg-black">
            Email
          </span>
          <input
            type="email"
            className="w-full border-2 border-white bg-transparent text-[18px] px-4 pt-4 pb-2 outline-none"
            name="email"
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-10 relative group">
          <span className="px-4 bg-red border text-[16px] absolute -top-4 ml-4 group-hover:bg-black">
            Password
          </span>
          <input
            type="password"
            className="w-full border-2 border-white bg-transparent text-[18px] px-4 pt-4 pb-2 outline-none"
            name="password"
            id=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className={`bg-white px-4 py-2 text-[18px] font-bold text-red rounded-full flex w-full justify-center`}
        >
          {" "}
          <p className="px-2">Log In</p>
        </button>
        <h2 className="text-[16px] py-10 text-center">
          Doesn't In Dish{" "}
          <Link
            href="/signup"
            className="font-bold underline text-white hover:text-white"
          >
            Sign Up
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default LogIn;
