import Link from "next/link";

const Sider = () => {
  return (
    <div>
      <h3>Hello. </h3>
      {/* User */}

      {/* {role === "admin" && data?.user?.email ? ( */}
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
      {/* ) : ( */}
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
      {/* )} */}
    </div>
  );
};

export default Sider;
