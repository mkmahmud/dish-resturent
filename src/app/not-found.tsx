import notfoundImage from "@/assets/no.png";
import Link from "next/link";

const NotFound = () => {
  return (
    <div
      className="relative pt-20 lg:px-20 h-[40vh] "
      style={{
        backgroundImage: `url(${notfoundImage.src})`, // Use footerImage.src
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <div className="flex justify-between items-center px-6">
          <div
            className="text-center text-[30px] md:text-[80px]"
            style={{ fontFamily: " 'RocknRoll One', sans-serif" }}
          >
            <h2>404</h2>
            <h2>Not Found</h2>
          </div>

          <div>
            <Link
              href="/"
              className="text-white text-[20px] md:text-[30px] font-semibold underline"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
