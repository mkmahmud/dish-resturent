"use client"
import React from "react";
import PrivateRoute from "../private/page";
import deleteCookie from "@/hooks/deleteCookie";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  function handleLogOut() {
    // Call the deleteCookie function to remove the 'token' cookie
    deleteCookie("token");
    router.push('/login');
     // You can also perform other sign-out related tasks here, such as redirecting to a login page.
  }
  return (
    <PrivateRoute>
      <div>
        This is Private Route
        <button onClick={handleLogOut}>Log Out</button>
      </div>
    </PrivateRoute>
  );
};

export default page;
