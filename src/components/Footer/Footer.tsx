import Image from "next/image";
import logo from "../../assets/logo.png";
import Subscribe from "../Form/Subscribe/Subscribe";
import footerImage from "../../assets/images/footer.jpg";
import FooterMenus from "./FooterMenus";
import { BoldOutlined, FacebookOutlined } from "@ant-design/icons";
import Link from "next/link";
import img1 from "@/assets/food/1.jpeg";

const Footer = () => {
  return (
    <div
      className="relative pt-20 lg:px-20"
      style={{
        backgroundImage: `url(${footerImage.src})`, // Use footerImage.src
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay with semi-transparent background */}
      <div
        className="absolute inset-0 bg-black opacity-80"
        style={{ backdropFilter: "blur(5px)", zIndex: 1 }}
      ></div>

      <div className="  text-center w-full relative z-10  ">
        <div>
          <Image
            src={logo}
            alt="Image"
            className="block mx-auto bg-white rounded-full p-2"
            height={150}
          />
          <h2 className="text-[20px] md:text-[30px] font-bold my-4 text-white">
            Stay informed about special offers
          </h2>
          <p className="text-[14px] md:text-[20px] my-4 text-white">
            Subscribe to the newsletter
          </p>
          <Subscribe />
        </div>
        <div className="md:flex justify-between	  my-20">
          <div>
            <FooterMenus head="let's get together">
              <div>
                <ul>
                  <li className="flex items-center my-2">
                    {" "}
                    <BoldOutlined className="text-[18px] px-2" />{" "}
                    <p>60 Easr 65 Street, Ny</p>
                  </li>
                  <li className="flex items-center my-2">
                    {" "}
                    <BoldOutlined className="text-[18px] px-2" />{" "}
                    <p>60 Easr 65 Street, Ny</p>
                  </li>

                  <li className="flex items-center my-2">
                    {" "}
                    <BoldOutlined className="text-[18px] px-2" />{" "}
                    <p>60 Easr 65 Street, Ny</p>
                  </li>

                  <li className="flex items-center my-2">
                    {" "}
                    <BoldOutlined className="text-[18px] px-2" />{" "}
                    <p>60 Easr 65 Street, Ny</p>
                  </li>
                </ul>
                <div className="flex my-6">
                  <Link href="/" className="text-white">
                    {" "}
                    <FacebookOutlined className="p-2 bg-red rounded-full mx-2 text-[16px]" />{" "}
                  </Link>
                  <Link href="/" className="text-white">
                    {" "}
                    <FacebookOutlined className="p-2 bg-red rounded-full mx-2 text-[16px]" />{" "}
                  </Link>
                </div>
              </div>
            </FooterMenus>
          </div>
          {/* About Us */}
          <div>
            <FooterMenus head="About US">
              <div>
                <ul>
                  <li className="flex items-center my-2">
                    {" "}
                    <p>Our Story</p>
                  </li>
                  <li className="flex items-center my-2">
                    {" "}
                    <p>Our Story</p>
                  </li>
                  <li className="flex items-center my-2">
                    {" "}
                    <p>Our Story</p>
                  </li>
                  <li className="flex items-center my-2">
                    {" "}
                    <p>Our Story</p>
                  </li>
                </ul>
              </div>
            </FooterMenus>
          </div>
          {/* Quick Menu */}
          <div>
            <FooterMenus head="quick menu">
              <div>
                <ul>
                  <li className="flex items-center my-2">
                    <p>Sides</p>
                  </li>
                  <li className="flex items-center my-2">
                    <p>Sides</p>
                  </li>
                  <li className="flex items-center my-2">
                    <p>Sides</p>
                  </li>
                  <li className="flex items-center my-2">
                    <p>Sides</p>
                  </li>
                </ul>
              </div>
            </FooterMenus>
          </div>
          {/* Instagrams */}
          <div>
            <FooterMenus head="let's get together">
              <div>
                <ul>
                  <li className="flex items-center my-2">
                    <Image src={img1} width={40} height={40} alt="Image" />
                  </li>
                  <li className="flex items-center my-2">
                    <Image src={img1} width={40} height={40} alt="Image" />
                  </li>
                  <li className="flex items-center my-2">
                    <Image src={img1} width={40} height={40} alt="Image" />
                  </li>
                </ul>
              </div>
            </FooterMenus>
          </div>
        </div>
        {/* copy right  */}
        <div className="pb-6">
          <div className="md:flex items-center justify-between my-6">
            <p> &copy; 2023 Dish Alrights reserved </p>
            <ul className="flex ">
              <li className="mx-2">
                <Link href="/" className="text-white text-[16px] underline">
                  About
                </Link>
              </li>
              <li className="mx-2">
                <Link href="/" className="text-white text-[16px] underline">
                  About
                </Link>
              </li>
              <li className="mx-2">
                <Link href="/" className="text-white text-[16px] underline">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
