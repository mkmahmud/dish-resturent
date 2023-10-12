import React from "react";
import { Button, ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <div className="App"  style={{background:"#ff4221"}}>
      
      This is the Home page
    </div>
  </ConfigProvider>
);

export default HomePage;
