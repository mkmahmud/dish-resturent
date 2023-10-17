// components/ScrollToTopButton.js

import React, { useState, useEffect } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = () => {
    if (!isVisible && window.pageYOffset > 400) {
      setIsVisible(true);
    } else if (isVisible && window.pageYOffset <= 400) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-6 right-6 h-16 w-16 bg-black text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none z-50`}
    >
      <ArrowUpOutlined className="text-[20px]" />{" "}
    </button>
  );
};

export default ScrollToTopButton;
