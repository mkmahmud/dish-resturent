import React from "react";

const addProduct = () => {
  return (
    <div>
      <h2 className="text-[30px] font-bold my-4">Add New Product</h2>
      <button
        type="submit"
        className={`bg-white max-w-[200px]   px-4 py-2 text-[18px] font-bold text-red rounded-full w-full flex justify-center`}
      >
        {" "}
        <p className="px-2">Add </p>
      </button>
    </div>
  );
};

export default addProduct;
