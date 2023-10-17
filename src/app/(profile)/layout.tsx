"use client";
import Sider from "@/components/Sider/Sider";
import PrivateRoute from "./private/page";

const layout = ({ children }: { children: React.ReactNode }) => (
  <PrivateRoute>
    <div className="px-4 lg:px-20 md:flex w-full   py-6">
      <div className="w-full md:w-3/12">
        <Sider />
      </div>
      <div className="w-full md:w-9/12">{children}</div>
    </div>
  </PrivateRoute>
);

export default layout;
