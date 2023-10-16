import React from "react";
import PrivateRoute from "../private/page";

const page = () => {
  return (
    <PrivateRoute>
      <div>This is Private Route</div>
    </PrivateRoute>
  );
};

export default page;
