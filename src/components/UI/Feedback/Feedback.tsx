"use client";
import {
  CheckOutlined,
  CloseCircleOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import { Button, Result } from "antd";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  email: string;
  message: string;
  username: string;
};

const Feedback = () => {
  const [open, setOpen] = useState(true);
  const [successMessage, setSuccessMessage] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (userData) => {
    setSuccessMessage(!successMessage);
  };

  return (
    <div className="fixed bottom-10 left-10">
      {open ? (
        <button
          onClick={() => setOpen(!open)}
          className="bg-white h-16 w-16 rounded-full"
        >
          <SnippetsOutlined
            className="text-[25px]"
            style={{ color: "#ff4221", fontWeight: "bold" }}
          />
        </button>
      ) : (
        <div className="bg-black h-[500px] w-[400px] rounded-lg">
          {successMessage ? (
            <>
              <div className="flex justify-end">
                <button onClick={() => setOpen(!open)} className=" h-16 w-16  ">
                  <CloseCircleOutlined
                    className="text-[25px]"
                    style={{ color: "#FFFFFF", fontWeight: "bold" }}
                  />
                </button>
              </div>
              <div className="text-white flex items-center justify-center h-full">
                <div>
                  <div className="w-full flex items-center justify-center  ">
                    <button className="h-16 w-16 rounded-full bg-[green]  ">
                      <CheckOutlined className="text-[24px] font-bold" />
                    </button>
                  </div>
                  <h2 className="text-[25px] font-bold text-center my-10">
                    Thank you for your feedback
                  </h2>
                  <button
                    onClick={() => {
                      setSuccessMessage(!successMessage);
                    }}
                    className={`bg-red w-[200px]  mx-auto px-4 py-2 text-[18px] font-bold text-white rounded-full  flex justify-center`}
                  >
                    {" "}
                    <p className="px-2">Submit Again</p>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div>
              <div className="flex justify-end">
                <button onClick={() => setOpen(!open)} className=" h-16 w-16  ">
                  <CloseCircleOutlined
                    className="text-[25px]"
                    style={{ color: "#FFFFFF", fontWeight: "bold" }}
                  />
                </button>
              </div>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="my-10 relative group max-w-[500px] mx-auto">
                    <span className=" px-4 bg-red border text-[16px] absolute -top-4  ml-4 group-hover:bg-black">
                      Name
                    </span>
                    <input
                      type="text"
                      className="w-full  bg-white  border-2 border-white  text-black  text-[18px] px-4 pt-4 pb-2 outline-none"
                      placeholder="Enter Your Name"
                      {...register("username", { required: true })}
                    />
                  </div>
                  <div className="my-10 relative group max-w-[500px] mx-auto">
                    <span className=" px-4 bg-red border text-[16px] absolute -top-4  ml-4 group-hover:bg-black">
                      Email
                    </span>
                    <input
                      type="email"
                      className="w-full  bg-white  border-2 border-white  text-black  text-[18px] px-4 pt-4 pb-2 outline-none"
                      placeholder="Enter Your Email Address"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="my-10 relative group max-w-[500px] mx-auto">
                    <span className=" px-4 bg-red border text-[16px] absolute -top-4  ml-4 group-hover:bg-black">
                      Message
                    </span>
                    <textarea
                      placeholder="Message"
                      className="w-full  bg-white  border-2 border-white  text-black  text-[18px] px-4 pt-4 pb-2 outline-none"
                      {...register("message", { required: true })}
                    />
                  </div>
                  <button
                    type="submit"
                    className={`bg-white w-[200px]  mx-auto px-4 py-2 text-[18px] font-bold text-red rounded-full  flex justify-center`}
                  >
                    {" "}
                    <p className="px-2">Submit</p>
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Feedback;
