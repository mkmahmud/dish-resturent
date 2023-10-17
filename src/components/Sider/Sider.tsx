"use client";
import useUserData from "@/hooks/useUserData";
import Link from "next/link"; 

const Sider = () => {
  const user = useUserData("user");
  // console.log(user)
   return (
    <div>
      <h3 className="text-[18px]">
        Hello <strong>{user?.username} </strong>
      </h3>
      {/* User */}

      {user?.role === "admin" && user?.email ? (
        <div>
          <div className="my-6">
            <h2>
              <Link href="/overview" className="text-white text-[20px]">
                Overview
              </Link>
            </h2>
            <div className="my-4">
              <h2>
                <Link href="/orders" className="text-white text-[20px]">
                  Manage Orders
                </Link>
              </h2>
              <ul className="px-4 py-2 ">
                <li>
                  <Link href="/orders" className="text-white my-2">
                    Orders{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="my-4">
              <h2>
                <Link href="/users" className="text-white text-[20px]">
                  Manage Users
                </Link>
              </h2>
              <ul className="px-4 py-2 ">
                <li>
                  <Link href="/users" className="text-white my-2">
                    users{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="my-4">
              <h2>
                <Link href="/addproducts" className="text-white text-[20px]">
                  Add Products
                </Link>
              </h2>
              <ul className="px-4 py-2 ">
                <li>
                  <Link href="/adproducts" className="text-white my-2">
                    Add Products{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="my-6">
            <h2>
              <Link href="/profile" className="text-white text-[20px]">
                Manage My Account
              </Link>
            </h2>
            <ul className="px-4 py-2 ">
              <li>
                <Link href="/profile" className="text-white my-2">
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/trackorder" className="text-white my-2">
                  Track My Order
                </Link>
              </li>
              <li>
                <Link href="/paymentoptions" className="text-white my-2">
                  My payment Options
                </Link>
              </li>
            </ul>
          </div>
          <div className="my-6">
            <h2>
              <Link href="/" className="text-white text-[20px]">
                My Orders
              </Link>
            </h2>
            <ul className="px-4 py-2 ">
              <li>
                <Link href="/" className="text-white my-2">
                  Cencellations
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white my-2">
                  My Returns
                </Link>
              </li>
            </ul>
          </div>
          <div className="my-6">
            <h2>
              <Link href="/" className="text-white text-[20px]">
                My Reviews
              </Link>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sider;
