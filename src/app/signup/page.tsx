"use client";
import { Col, Row } from "antd";
import Image from "next/image";
import loginImage from "@/assets/images/about.png";
import Input from "@/components/Form/Input/Input";
import FilledButton from "@/components/Buttons/Filled";
import Link from "next/link";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const SignUp = () => {
  const { data } = useSession();
  if (data) {
    redirect("/profile");
  }

  const handelSubmit = (e: { target: any; preventDefault: () => void }) => {
    e.preventDefault();
    const user = {
      username: e.target.name.value,
      email: e.target.email.value,
      id: 1,
      phoneNumber: e.target.phoneNumber.value,
      password: e.target.password.value,
    };

    fetch("api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(user), // Convert the data to JSON format
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Registration success:", data);
        redirect("/login");
      })
      .catch((error) => {
        console.error("Error during registration:", error);
      });
  };

  return (
    <div className="md:flex items-center w-full px-2 md:px-10 md:my-20">
      
      <form onSubmit={handelSubmit} className="w-full md:w-1/2">
        <h1
          style={{ margin: "15px 0px" }}
          className="text-[50px] font-bold text-center"
        >
          Sign UP
        </h1>
        <div className="my-10 relative group">
          <span className=" px-4 bg-red border text-[16px] absolute -top-4  ml-4 group-hover:bg-black">
            Name
          </span>
          <input
            type="text"
            className="w-full  border-2 border-white bg-transparent  text-[18px] px-4 pt-4 pb-2 outline-none"
            name="name"
            id=""
          />
        </div>
        <div className="my-10 relative group">
          <span className=" px-4 bg-red border text-[16px] absolute -top-4  ml-4 group-hover:bg-black">
            Email
          </span>
          <input
            type="email"
            className="w-full  border-2 border-white bg-transparent  text-[18px] px-4 pt-4 pb-2 outline-none"
            name="email"
            id=""
          />
        </div>
        <div className="my-10 relative group">
          <span className=" px-4 bg-red border text-[16px] absolute -top-4  ml-4 group-hover:bg-black">
            Phone Number
          </span>
          <input
            type="number"
            className="w-full  border-2 border-white bg-transparent  text-[18px] px-4 pt-4 pb-2 outline-none"
            name="phoneNumber"
            id=""
          />
        </div>
        <div className="my-10 relative group">
          <span className=" px-4 bg-red border text-[16px] absolute -top-4  ml-4 group-hover:bg-black">
            Password
          </span>
          <input
            type="password"
            className="w-full  border-2 border-white bg-transparent  text-[18px] px-4 pt-4 pb-2 outline-none"
            name="password"
            id=""
          />
        </div>

        <button
          type="submit"
          className={`bg-white px-4 py-2 text-[18px] font-bold text-red rounded-full w-full flex justify-center`}
        >
          {" "}
          <p className="px-2">Sign Up</p>
        </button>
        <h2 className="text-[16px] py-10 text-center">
          Already In Dish{" "}
          <Link
            href="/login"
            className="font-bold underline text-white hover:text-white"
          >
            Log In
          </Link>
        </h2>
      </form>
      <div className="w-full md:w-1/2">
        <Image
          src={loginImage}
          alt="Log In Image"
          className="block mx-auto w-[300px] "
        ></Image>
      </div>

    </div>
  );
};

export default SignUp;
