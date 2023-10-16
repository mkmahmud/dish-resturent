"use client";
import React, { useEffect } from "react";
import loginImage from "@/assets/images/about.png";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

 
  useEffect(() => {
    // Check for authentication here (e.g., check if the token exists in the cookie)
    const token = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith("token="))
      ?.split("=")[1];

    if (token) { 
      router.push("/"); // Redirect to the login page if not authenticated
    }
  }, [router]);
  type Inputs = {
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (userData) => {
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify the content type
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        const token = data.token;

        // Set the token as a cookie
        document.cookie = `token=${token}`;
        router.push("/protected")

      });
  };

  return (
    <div className="md:flex items-center w-full px-2 md:px-10 md:my-20">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-1/2">
        <h1
          style={{ margin: "15px 0px" }}
          className="text-[50px] font-bold text-center"
        >
          Sign UP
        </h1>
        <div className="my-10 relative group max-w-[500px] mx-auto">
          <span className=" px-4 bg-red border text-[16px] absolute -top-4  ml-4 group-hover:bg-black">
            Name
          </span>
          <input
            type="text"
            className="w-full  border-2 border-white bg-transparent  text-[18px] px-4 pt-4 pb-2 outline-none"
            {...register("username", { required: true })}
          />
        </div>
        <div className="my-10 relative group max-w-[500px] mx-auto">
          <span className=" px-4 bg-red border text-[16px] absolute -top-4  ml-4 group-hover:bg-black">
            Email
          </span>
          <input
            type="email"
            className="w-full  border-2 border-white bg-transparent  text-[18px] px-4 pt-4 pb-2 outline-none"
            {...register("email", { required: true })}
          />
        </div>
        <div className="my-10 relative group max-w-[500px] mx-auto">
          <span className=" px-4 bg-red border text-[16px] absolute -top-4  ml-4 group-hover:bg-black">
            Phone Number
          </span>
          <input
            type="number"
            className="w-full  border-2 border-white bg-transparent  text-[18px] px-4 pt-4 pb-2 outline-none"
            {...register("phoneNumber", { required: true })}
          />
        </div>
        <div className="my-10 relative group max-w-[500px] mx-auto">
          <span className=" px-4 bg-red border text-[16px] absolute -top-4  ml-4 group-hover:bg-black">
            Password
          </span>
          <input
            type="password"
            className="w-full  border-2 border-white bg-transparent  text-[18px] px-4 pt-4 pb-2 outline-none"
            {...register("password", { required: true })}
          />
        </div>

        <button
          type="submit"
          className={`bg-white max-w-[500px] mx-auto px-4 py-2 text-[18px] font-bold text-red rounded-full w-full flex justify-center`}
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
