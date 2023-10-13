// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#52c41a",
  },
  components: {
    Pagination: {
      itemInputBg: "#FFFFFF",
    },
  },
};

export default theme;
