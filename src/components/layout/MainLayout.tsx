"use client";

import { Layout, Space } from "antd";
import Navbar from "../Header/Header";
import Footer from "../Footer/Footer";

const { Content } = Layout;

const MainLayout = ({ children }: any) => {
  return (
    <Layout style={{ background: "#ff4221" }}>
      <Navbar />
      <Content> {children}</Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
