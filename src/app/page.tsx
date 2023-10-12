import React from "react";
import { Button, ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import Hero from "@/components/UI/Hero/Hero";

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <div className="App" style={{ background: "#ff4221" }}>
      <Hero />
    </div>
  </ConfigProvider>
);

export default HomePage;
