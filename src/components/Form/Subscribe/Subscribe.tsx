import { AudioOutlined } from "@ant-design/icons";
import React from "react";
import { Button, Input, Space } from "antd";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#FFFFFF",
    }}
  />
);

const onSearch = (value: string) => {
  console.log("Searching for:", value);
};

const Subscribe = () => (
  <Space direction="vertical">
    <Search
      placeholder="Enter Your Email here"
      enterButton={
        <Button
          type="primary"
          style={{
            backgroundColor: "#ff4221",
            border: "none",
            borderRadius: "0px 100px 100px 0px", 
          }}
        >
          Subscribe
        </Button>
      }
      size="large"
      suffix={suffix}
      onSearch={onSearch}
      styles={{
        affixWrapper: { borderRadius: "100px 0px 0px 100px", background:"#ffffff" },
      }}
    />
  </Space>
);

export default Subscribe;
