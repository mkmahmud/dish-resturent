import { useSession } from "next-auth/react";
import Link from "next/link";

const Sider = () => {
  const { data } = useSession();
  let role;
  if (data?.user?.email === "mk2@gmail.com") {
    role = "admin";
  }

  return (
    <div>
      <h3>Hello. {data?.user?.email}</h3>
      {/* User */}

      {role === "admin" && data?.user?.email ? (
        <div>
          <div className="my-6">
            <h2>
              <Link href="/" className="text-white text-[20px]">
                Manage Orders
              </Link>
            </h2>
            <ul className="px-4 py-2 ">
              <li>
                <Link href="/" className="text-white my-2">
                  Orders{" "}
                </Link>
              </li>
            </ul>
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
                <Link href="/" className="text-white my-2">
                  Address Book
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white my-2">
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
