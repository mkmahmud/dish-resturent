"use client";

import { FloatButton, Layout, Space } from "antd";
import Navbar from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollToTopButton from "../ScrollToTop/ScrollToTop";
import Feedback from "../UI/Feedback/Feedback";

const { Content } = Layout;

const MainLayout = ({ children }: any) => {
  return (
    <Layout style={{ background: "#ff4221" }}>
      <Navbar />
      <Content>
        {" "}
        {children}
        <ScrollToTopButton />
      </Content>
      <Feedback />
      <Footer />
    </Layout>
  );
};

export default MainLayout;
